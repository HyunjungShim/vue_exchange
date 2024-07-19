<template>
<div class="market-wrapper">
  <div class="market-title grid-between">
    <h1>Markets Overview <span>></span></h1>
    <h2>Spot / Margin Market</h2>
    <div></div>
    <div></div>
    <div></div>
    <div class="search-container">
      <input class="symbol-search" placeholder="Search Coin Name" v-model="searchWord"/>
      <img src="@/assets/images/search-icon.svg"/>
    </div>
  </div>
  <div class="market-container">
    <div class="market-top grid-between">
      <div class="flex-center">
        <p>Name</p>
        <p class="sort flex-center symbol-sort" @click="toggleSort('symbol')"><img :src="sortImages.symbol"/></p>
      </div>
      <div class="flex-center">
        <p>Price</p>
        <p class="sort flex-center symbol-sort" @click="toggleSort('lastPrice')"><img :src="sortImages.lastPrice"/></p>
      </div>
      <div class="flex-center">
        <div class="flex-center change">
          <Multiselect v-model="selectedChange" :options="changeOptions" :close-on-select="true" :show-labels="false" :searchable="false"></Multiselect>
          <p>Change</p>
        </div>
        <p class="sort flex-center symbol-sort" @click="toggleSort('priceChangePercent')"><img :src="sortImages.priceChangePercent"/></p>
      </div>
      <p>24h High / 24h Low</p>
      <div class="flex-center">
        <p>24h Volume</p>
        <p class="sort flex-center symbol-sort" @click="toggleSort('quoteVolume')"><img :src="sortImages.quoteVolume"/></p>
      </div>
        <p>Chart</p>
    </div>
    <div class="market-content" ref="scrollcheck" >
      <div class="grid-between" v-for="(market,i) in filteredMarket.slice(0,visibleIdx)" :key="i">
        <p>{{ market.symbol }}</p>
        <p>{{ formatPrice(market.lastPrice) }}</p>
        <p class="color-green" v-if="market.priceChangePercent > 0">+{{ formatPercent(market.priceChangePercent) }}%</p>
        <p class="color-red" v-else-if="market.priceChangePercent < 0">{{ formatPercent(market.priceChangePercent) }}%</p>
        <p v-else-if="market.priceChangePercent == 0">{{ formatPercent(market.priceChangePercent) }}%</p>
        <p>{{ formatPrice(market.highPrice) }} / {{ formatPrice(market.lowPrice) }}</p>
        <p>{{ formatVolume(market.quoteVolume) }}</p>
        <p class="chart-icon-box" @click="pushWithQuery(market.symbol)"
        >
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import '@/assets/css/market.css'
import { computed, onMounted,ref,onUnmounted, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import {createMarketSocket,reconnectMarketSocket,disconnectWebSocket,socket} from "@/utils/streaming.js";
import Multiselect from 'vue-multiselect';
const changeOptions = ref(['1h','4h','24h']);
const selectedChange = ref('24h');
const store = useStore();
const router = useRouter()
const marketList = computed(() => store.state.exchangeInfo.marketList || []);
// console.log(marketList.value);
const visibleIdx = ref(30);
const scrollcheck =ref();
onMounted(()=> {

  store.dispatch('exchangeInfo/getMarketInfo')
  createMarketSocket(selectedChange.value)

  if (scrollcheck.value) {
    scrollcheck.value.addEventListener('scroll', handleScroll);
  }
})
const sortType = ref('default')
let clickCounts = ref({
  symbol: 0,
  lastPrice: 0,
  priceChangePercent: 0,
  quoteVolume: 0,
});

const defaultImage = ref(require("@/assets/images/sort-icon.png"));

const sortImages = ref({
  symbol:defaultImage.value,
  lastPrice: defaultImage.value,
  priceChangePercent: defaultImage.value,
  quoteVolume: defaultImage.value,
});
const searchWord = ref('');
const filteredMarket = computed(()=> {
  let sortName = sortType.value.split('-')[0];
  let orderType = sortType.value.split('-')[1];
  let lowerWord = searchWord.value.toLowerCase();
  let searchedMarket = [...marketList.value].filter((el)=> el.symbol.toLowerCase().includes(lowerWord))
  // console.log('searchMarket',searchedMarket);
  if (sortName === 'symbol') {
    return searchedMarket.sort((a, b) => {
      return orderType === 'asc' ? (a.symbol > b.symbol ? 1 : -1) : (a.symbol < b.symbol ? 1 : -1);
    });
  } else if (sortName === 'default') {
    return searchedMarket;
  } else {
    return searchedMarket.sort((a, b) => {
      return orderType === 'asc' ? a[sortName] - b[sortName] : b[sortName] - a[sortName];
    });
  }
})
watch(selectedChange,(newValue)=> {
  // console.log(selectedChange.value);
  if(socket){
    reconnectMarketSocket(newValue)
  }
})
onUnmounted(()=> {
  // disconnectWebSocket()
})
function formatPrice(price){
  return Number(price).toLocaleString('en',{maximumSignificantDigits:20})
}
function formatVolume(volume){
  return Intl.NumberFormat('en', {notation: "compact",maximumFractionDigits: 2}).format(volume) //output - "234K"
}

function formatPercent(percent){
  if(percent == 0){
    return 0
  }else{
    return (Number(percent).toFixed(2))
  }
}

function handleScroll() {
  const scrollTop = scrollcheck.value.scrollTop;
  const scrollHeight = scrollcheck.value.scrollHeight;
  const clientHeight = scrollcheck.value.clientHeight;

  if (scrollHeight - (scrollTop+ clientHeight) < 500){
    visibleIdx.value += 50
  }
}

function toggleSort(name) {
  clickCounts.value[name]++
  // console.log('clickCount', clickCounts.value[name]);
  for (const key in sortImages.value) {
    if (key !== name) {
      sortImages.value[key] = defaultImage.value;
      clickCounts.value[key] = 0; // Reset click count for other categories
    }
  }
  if( clickCounts.value[name] % 3 == 0 ){
    sortType.value = 'default'
    sortImages.value[name] = require("@/assets/images/sort-icon.png");
  }else if( clickCounts.value[name] % 3 == 1){
    sortImages.value[name] = require("@/assets/images/sort-up-icon.png");
    sortType.value = name+'-asc'
  }else if( clickCounts.value[name] % 3 == 2){
    sortImages.value[name] = require("@/assets/images/sort-down-icon.png");
    sortType.value = name+'-desc'
  }
}

function pushWithQuery(symbol){
  store.commit(`exchangeInfo/setSelectedSymbol`,{symbol:symbol})
  router.push('/chart');
}

onUnmounted(()=>{
  window.removeEventListener('scroll', handleScroll);
  disconnectWebSocket()
})

</script>

<style lang="scss" scoped>

</style>