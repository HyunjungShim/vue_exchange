<template>
    <div class="news-wrapper">
        <NewsMenu/>
        <div class="news-container detail">
            <div class="news-list">
                <img src="@/assets/images/left-arrow.svg" @click="$router.go(-1)"/>
                <h1 class="news-title">{{ post.title }}</h1>
                <p>{{ displayDate(post.published_on *1000) }}</p>
                <p class="news-detail-content">{{ post.body }}</p>
                <div class="align-center news-info">
                    <img :src="post.source_info.img"/>
                    <div>
                        <p>{{ post.source_info.name }}</p>
                        <button @click="routerPush(post.url)">See Original News</button>
                    </div>
                </div>
                <div class="coin-label margin">
                    <p>Tags</p>
                    <div>
                        <p v-for="(tag,i) in tags" :key="i">{{ tag }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import {displayDate} from '@/utils/convertTime'
import NewsMenu from '@/components/news/NewsMenu.vue'

const route = useRoute();
const postId = ref(route.params.id);
const store = useStore();
// console.log(postId.value);
const post = computed(()=> {
    // console.log('store.state.newsList.LatestNewsMain',store.state.newsList.allLatestNews);
    return store.state.newsList.allLatestNews.find((el)=> el.id == postId.value)
})
const tags = computed(()=> {
    return post.value.tags.split('|')
})

function routerPush(url){
    window.open(url, '_blank');
}

</script>