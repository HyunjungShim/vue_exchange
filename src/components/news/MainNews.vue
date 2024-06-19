<template>
    <div class="news-wrapper">
        <div class="news-container main">
            <h1>Main News</h1>
            <div class="news-list-wrapper">
                <div class="news-list" v-for="(news,i) in LatestNewsMain" :key="i" @click="routerPush(news.url)">
                    <img :src="news.imageurl"/>
                    <h1 class="news-title">{{ news.title }}</h1>
                    <div>
                        <p>By {{ news.source_info.name }}</p>
                        <p>{{ displayDate(news.published_on * 1000) }}</p>
                    </div>
                </div>
            </div>
            <div>
                <p><RouterLink to="/news/all">See more News ></RouterLink></p>
            </div>
        </div>
        <div class="news-container major">
            <div class="coin-label">
                <h1>Major Coin News</h1>
                <div>
                    <p class="btc">BTC</p>
                    <p class="eth">ETH</p>
                    <p class="bnb">BNB</p>
                    <p class="xrp">XRP</p>
                </div>
            </div>
            <div class="news-list" v-for="(news,i) in majorNewsList" :key="i" @click="routerPush(news.url)">
                <p class="news-title">{{ news.title }}</p>
                <div>
                    <p>By {{ news.source_info.name }}</p>
                    <p>{{ displayDate(news.published_on * 1000) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import "@/assets/css/news.css"
import {computed} from 'vue';
import { useStore } from 'vuex';
import {displayDate} from '@/utils/convertTime'
const store = useStore();
const majorNewsList = computed(()=> {
        return store.state.newsList.majorNewsMain
    })
const LatestNewsMain = computed(()=> {
    return store.state.newsList.LatestNewsMain
})
store.dispatch('newsList/getAllNews');
store.dispatch('newsList/getCategory');

function routerPush(url){
    window.open(url, '_blank');
}
</script>