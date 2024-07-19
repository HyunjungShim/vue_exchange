<template>
    <div class="select-wrapper">
        <multiselect v-model="selectedSymbol" :options="symbolOptions" :searchable="true" :close-on-select="true" :show-labels="false"
        placeholder="Search Symbol"></multiselect>
        <multiselect v-model="selectedInterval" :options="intervalOptions" :searchable="false" :close-on-select="true" :show-labels="false"
        placeholder="Search Symbol"></multiselect>
    </div>
    <div class="lw-chart" ref="chartContainer" style="position:relative"></div>

</template>

<script setup>
import { onMounted, ref, onUnmounted, watch } from 'vue';
import { createChart } from 'lightweight-charts';
import axios from 'axios';
import Multiselect from 'vue-multiselect';
import {reconnectWebSocket,candleSocket,socket,disconnectWebSocket, createWebSocket} from "@/utils/streaming.js";
import { useStore } from 'vuex';
const store = useStore();

let chart;
const chartContainer = ref();
let localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
let symbolOptions = ref([]);
const selectedSymbol = ref(store.state.exchangeInfo.selectedSymbol);
const intervalOptions = ref(['1m','3m','5m','15m','30m','1h','2h','4h','6h','8h','12h','1d','3d','1w','1M'])
const selectedInterval = ref('1h')
let initLoad = ref(false);
getSymbolList();
let chartOptions = ref({
    trackingMode: {
        exitMode:1
    },
    kineticScroll: {
        mouse:false
    },
    autoSize:true,
    leftPriceScale: {
        borderVisible: false,
        visible:false,
    },
    overlayPriceScale:{
        position:'left',
        borderVisible: false,
        visible:false,
    },
    rightPriceScale: {
        visible: true,
        borderColor: '#505050',
        ticksVisible:true,
    },
    layout: {
        background: { color: '#1D1D2B' },
        textColor: '#fff',
    },
    grid: {
        vertLines: {
            color: '#505050',
        },
        horzLines: {
            color: '#505050',
        },
    },
    timeScale: {
        barSpacing: 11,
        timeVisible: true,
        tickMarkFormatter(time) {
            var convertTime = new Date(time * 1000);
            let optionsT = {
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: "2-digit",
                hour12: false,
                timeZone: localTimezone,
            };
            let localTime = convertTime.toLocaleString('en-US', optionsT).replace(',', '');
            localTime = localTime.replace(/\//g, '-');
            return localTime;
        },
    },
    crosshair: {
        mode: 0,
    },
    localization:{
        timeFormatter(originalTime, timeZone) {
            const zonedDate = new Date(new Date(originalTime * 1000).toLocaleString('en-US', { timeZone }));
            const year = zonedDate.getFullYear();
            const month = (zonedDate.getMonth() + 1).toString().padStart(2, '0');
            const day = zonedDate.getDate().toString().padStart(2, '0');
            const hours = zonedDate.getHours().toString().padStart(2, '0');
            const minutes = zonedDate.getMinutes().toString().padStart(2, '0');
            let formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
            return formattedDateTime;
        }
    },
});

onMounted(() => {
    chart = createChart(chartContainer.value, chartOptions.value);
    const candleStickSeries = chart.addCandlestickSeries({
        title:'Candle',
        priceScaleId: 'right',
        upColor:"#5DB9CD",
        downColor:"#EE7272",
        color:"#fff",
    });
    const volumeSeries = chart.addHistogramSeries({
        upColor:"#5DB9CD",
        downColor:"#EE7272",
        color: '#26a69a',
        priceFormat: {
            type: 'volume',
        },
        priceScaleId: '',
    });

    candleStickSeries.priceScale().applyOptions({
        scaleMargins: {
            top: 0.1,
            bottom: 0.3,
        },
        priceFormat:{
            type:'price',
            precision: 5,
            minMove: 0.00001
        }
    });

    volumeSeries.priceScale().applyOptions({
        scaleMargins: {
            top: 0.7,
            bottom: 0,
        },
    });

    // getCandleData(candleStickSeries, volumeSeries);

    watch(selectedSymbol, (newValue,oldValue) => {
        console.log('newValue,oldValue',newValue,oldValue);
        getCandleData(candleStickSeries, volumeSeries);
        store.commit(`exchangeInfo/setSelectedSymbol`,{symbol:selectedSymbol.value,interval:selectedInterval.value})
        if(socket){
            console.log('selectedSymbol',selectedSymbol.value);
            reconnectWebSocket(selectedSymbol.value,selectedInterval.value,oldValue)
        }
    });
    watch(selectedInterval, (newValue,oldValue) => {
        console.log('newValue,oldValue',newValue,oldValue);
        getCandleData(candleStickSeries, volumeSeries);
        store.commit(`exchangeInfo/setSelectedSymbol`,{symbol:selectedSymbol.value,interval:selectedInterval.value})
        if(socket){
            console.log('selectedSymbol',selectedSymbol.value);
            reconnectWebSocket(selectedSymbol.value,selectedInterval.value)
        }
    });

    watch(candleSocket,(newValue,oldValue)=> {
        console.log('oldValue lastBar',oldValue,'newValue lastBar',newValue);
        if(oldValue.t <= newValue.t){
            candleStickSeries.update({
                time:Number(candleSocket.value.t)/1000,
                open:Number(candleSocket.value.o),
                high:Number(candleSocket.value.h),
                low:Number(candleSocket.value.l),
                close:Number(candleSocket.value.c),
            })
            volumeSeries.update({
                time:Number(candleSocket.value.t)/1000,
                value:Number(candleSocket.value.v),
                color:setVolumeColor(candleSocket.value.q,candleSocket.value.Q)
            })
        }
    })

    const container = chartContainer.value;

    const legend = document.createElement('div');
    legend.style = `position: absolute; left: 12px; top: 12px; z-index: 1; font-size: 14px; font-family: sans-serif; line-height: 18px; font-weight: 300;`;
    legend.style.color = 'black';
    // console.log('container',container);
    container.appendChild(legend);

    const getLastBar = series => {
        let lastIndex = series.data()[series.data().length-1];
        // console.log('last',lastIndex);
        return lastIndex;
    };

    var setTooltipHtml = (name, date, openPriceFormatted,highPriceFormatted,lowPriceFormatted,closePriceFormatted ) => {
        if( openPriceFormatted > closePriceFormatted ){ //red
            legend.style.color = 'rgb(246, 70, 93)'
        }else if(openPriceFormatted < closePriceFormatted){ //green
            legend.style.color = 'rgb(14, 203, 129)'
        }
        legend.innerHTML = `<div>${name}<br/> <strong>${date}</strong><br/> Open: ${openPriceFormatted}<br/> High: ${highPriceFormatted}<br/> Low: ${lowPriceFormatted}<br/> Close: ${closePriceFormatted}`;
    };

    const updateLegend = async param => {
        if(!initLoad.value){
            await getCandleData(candleStickSeries, volumeSeries);
        }
        let validCrosshairPoint = !(
            param === undefined || param.time === undefined || param.point.x < 0 || param.point.y < 0
        );
        let bar = validCrosshairPoint ? param.seriesData.get(candleStickSeries) : getLastBar(candleStickSeries);
        // if(!validCrosshairPoint){
        //     return;
        // }
        let openPrice =  bar.open
        let highPrice =  bar.high
        let lowPrice =  bar.low
        let closePrice =  bar.close

        let openPriceFormatted = formatPrice(openPrice);
        let highPriceFormatted = formatPrice(highPrice);
        let lowPriceFormatted = formatPrice(lowPrice);
        let closePriceFormatted = formatPrice(closePrice);
        // console.log(openPrice,highPrice,lowPrice,closePrice);
        // var time = bar.time;

        // console.log('bar',bar);

        let timestampMs = (bar.time) * 1000;
        let ToDate = new Date(timestampMs);
        let options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            hour12: false,
            timeZone: 'Asia/Seoul',
        };

        let timestampToString = ToDate.toLocaleString('ko-KR', options);

        setTooltipHtml(selectedSymbol.value, timestampToString, openPriceFormatted,highPriceFormatted,lowPriceFormatted,closePriceFormatted);
    };

    chart.subscribeCrosshairMove(updateLegend);

    updateLegend(undefined);

    chart.timeScale().fitContent();

    createWebSocket(selectedSymbol.value.toLowerCase(),selectedInterval.value)
});

onUnmounted(() => {
    if (chart) {
        chart.remove();
        chart = null;
        disconnectWebSocket()
    }

});

function getSymbolList() {
    axios.get('https://api.binance.com/api/v3/exchangeInfo')
        .then((res) => {
            console.log('res',res.data);
            let result = res.data.symbols;
            let filterQuote = result.filter((el) => el.quoteAsset == "USDT");
            let symbolList = filterQuote.map(el => el.symbol);
            symbolOptions.value = symbolList;
        });
}

async function getCandleData(candleStickSeries, volumeSeries) {
    try{
        return await axios.get(`https://api.binance.com/api/v3/klines?symbol=${selectedSymbol.value}&interval=${selectedInterval.value}`)
            .then((res) => {
                initLoad.value = true;
                let candleData = res.data;
                let candleArray = [];
                let volumeArray = [];
                for (let i = 0; i < candleData.length; i++) {
                    candleArray.push({
                        time: candleData[i][0] / 1000,
                        open: Number(candleData[i][1]),
                        high: Number(candleData[i][2]),
                        low: Number(candleData[i][3]),
                        close: Number(candleData[i][4])
                    });
                    volumeArray.push({
                        time: candleData[i][0] / 1000,
                        value: Number(candleData[i][5]),
                        color: setVolumeColor(candleData[i][7], candleData[i][10])
                    });
                }
                candleStickSeries.setData(candleArray);
                volumeSeries.setData(volumeArray);
                console.log(selectedSymbol.value);
            });
    }catch(error){
        console.log('error',error);
    }
}

function setVolumeColor(allQuote, buyQuote) {
    let sellQuote = (allQuote - buyQuote).toFixed(0);
    return sellQuote > buyQuote ? '#EE7272' : '#5DB9CD';
}

function formatPrice(price){
    return price.toFixed(4);
}
</script>

<style scoped>
</style>
