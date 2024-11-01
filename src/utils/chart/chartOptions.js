import {convertTimeScale,convertTimeScaleWithLocal} from '@/utils/formatter/convertTime'
export class chartOptions {
    constructor(){
        this.localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
        this.candleOptions = {
            title:'Candle',
            priceScaleId: 'right',
            upColor:"#5DB9CD",
            downColor:"#EE7272",
            color:"#fff",
            priceFormat:{
                type:'price',
                precision: 5,
                minMove: 0.00001
            }
        }
        this.histogramOptions = {
            upColor:"#5DB9CD",
            downColor:"#EE7272",
            color: '#26a69a',
            priceFormat: {
                type: 'volume',
            },
            priceScaleId: '',
        }
    }
    getOptions(isDark){
        return {
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
                background: { color: isDark ? '#1D1D2B' : '#fff'},
                textColor: isDark ? '#fff' : '#1D1D2B',
            },
            grid: {
                vertLines: {
                    color: isDark ? '#505050' : '#cdcdcd',
                },
                horzLines: {
                    color: isDark ? '#505050' : '#cdcdcd',
                },
            },
            timeScale: {
                barSpacing: 11,
                timeVisible: true,
                tickMarkFormatter(time) {
                    return convertTimeScale(time)
                },
            },
            crosshair: {
                mode: 0,
            },
            localization:{
                timeFormatter(originalTime, timeZone) {
                    return convertTimeScaleWithLocal(originalTime, timeZone)
                }
            },
        }
    }
    getColorMode(isDark){
        return {
            layout: {
                background: { color: isDark ? '#1D1D2B' : '#fff'},
                textColor: isDark ? '#fff' : '#1D1D2B',
            },
            grid: {
                vertLines: {
                    color: isDark ? '#505050' : '#cdcdcd',
                },
                horzLines: {
                    color: isDark ? '#505050' : '#cdcdcd',
                },
            }
        }
    }
    getSeriesOptions(type){
        return this[type+'Options'];
    }
}