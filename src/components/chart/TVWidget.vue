<template>
<div :class="`${tvType.type}-wrapper`" class="widget-wrapper">
    <div class="tradingview-widget-container" :class="tvType.type">
        <div class="tradingview-widget-container__widget"></div>
        <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>
    </div>
</div>
</template>

<script setup>
import {computed,  onMounted,  watch,defineProps} from 'vue';
import {useStore} from 'vuex';
import { createSymbolWidget } from '@/utils/createWidget.js'
import '@/assets/css/chart.css';
const store = useStore();
let symbol = computed(()=> {
    return store.state.exchangeInfo.selectedSymbol
})
let interval = computed(()=> {
    return store.state.exchangeInfo.selectedInterval
})

let tvType = defineProps({
    type: {
        type:String
    }
})
// console.log(tvType);
watch(symbol,()=> {
    // console.log(symbol);
    createSymbolWidget(tvType.type,symbol.value,interval.value)
})
watch(interval,()=> {
    // console.log(symbol);
    createSymbolWidget(tvType.type,symbol.value,interval.value)
})
onMounted(()=> {
    createSymbolWidget(tvType.type,symbol.value,interval.value)
})
</script>

<style lang="scss" scoped>

</style>