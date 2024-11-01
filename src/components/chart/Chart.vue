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
import { onMounted, ref, onUnmounted, watch, computed } from 'vue';
import { createChart } from 'lightweight-charts';
import axios from 'axios';
import Multiselect from 'vue-multiselect';
import {reconnectWebSocket,candleSocket,socket,disconnectWebSocket, createWebSocket} from "@/utils/chart/streaming.js";
import { useStore } from 'vuex';
import { chartOptions } from '@/utils/chart/chartOptions';
import { setVolumeColor,formatPriceWithDecimal } from '@/utils/formatter/convertNumber';
const store = useStore();
let isDark = computed(()=>  store.state.colorMode.isDark);
let chart;
const chartContainer = ref();
let symbolOptions = ref(store.state.exchangeInfo.symbolList);
const selectedSymbol = ref(store.state.exchangeInfo.selectedSymbol);
const intervalOptions = ref(['1m','3m','5m','15m','30m','1h','2h','4h','6h','8h','12h','1d','3d','1w','1M']);
let  chartOption = new chartOptions();
const selectedInterval = ref('1h');
let initLoad = ref(false);

onMounted(() => {
    chart = createChart(chartContainer.value, chartOption.getOptions(isDark.value));
    const candleStickSeries = chart.addCandlestickSeries(chartOption.getSeriesOptions('candle'));
    const volumeSeries = chart.addHistogramSeries(chartOption.getSeriesOptions('histogram'));

    candleStickSeries.priceScale().applyOptions({
        autoScale:true,
        scaleMargins: {
            top: 0.1,
            bottom: 0.3,
        },
    });

    volumeSeries.priceScale().applyOptions({
        scaleMargins: {
            top: 0.7,
            bottom: 0,
        },
    });

    watch(selectedSymbol, (newValue,oldValue) => {
        // console.log('newValue,oldValue',newValue,oldValue);
        getCandleData(candleStickSeries, volumeSeries);
        store.commit(`exchangeInfo/setSelectedSymbol`,{symbol:selectedSymbol.value,interval:selectedInterval.value})
        if(socket){
            // console.log('selectedSymbol',selectedSymbol.value);
            reconnectWebSocket(selectedSymbol.value,selectedInterval.value,oldValue)
        }
        updateLegend(undefined);
    });
    watch(selectedInterval, (newValue,oldValue) => {
        console.log('newValue,oldValue',newValue,oldValue);
        getCandleData(candleStickSeries, volumeSeries);
        store.commit(`exchangeInfo/setSelectedSymbol`,{symbol:selectedSymbol.value,interval:selectedInterval.value})
        if(socket){
            // console.log('selectedSymbol',selectedSymbol.value);
            reconnectWebSocket(selectedSymbol.value,selectedInterval.value)
        }
        updateLegend(undefined);
    });

    watch(candleSocket,(newValue,oldValue)=> {
        // console.log('oldValue lastBar',oldValue,'newValue lastBar',newValue);
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

    watch(isDark, (newVal) => {
        chart.applyOptions(chartOption.getColorMode(newVal));
    });

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

        let openPriceFormatted = formatPriceWithDecimal(openPrice);
        let highPriceFormatted = formatPriceWithDecimal(highPrice);
        let lowPriceFormatted = formatPriceWithDecimal(lowPrice);
        let closePriceFormatted = formatPriceWithDecimal(closePrice);
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
            minute:'2-digit',
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
        if(socket){
            disconnectWebSocket()
        }
        chart.remove();
        chart = null;
    }

});

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
            });
    }catch(error){
        console.log('error',error);
    }
}
</script>

<style scoped>
@import '@/assets/scss/components/chart/chart.scss'
</style>
