<template>
    <div class="header-wrapper">
        <div class="header-container" :class="{'active': showBg === true }">
            <div class="header-menu flex-center">
                <p @click="routerPush('')" :class="{'color-main' : currentPath === '' }">Main</p>
                <p @click="routerPush('market')" :class="{'color-main' : currentPath === 'market' }">Market</p>
                <p @click="routerPush('chart')" :class="{'color-main' : currentPath === 'chart' }">Chart</p>
                <p @click="routerPush('news/all')" :class="{'color-main' : currentPath === 'news' }">News</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import "@/assets/css/header.css";
import {computed, onMounted,ref } from 'vue';
import { useRouter,useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const showBg = ref(false);
const currentPath = computed(()=> {
    return route.path.split('/')[1]
})

onMounted(()=> {
    window.addEventListener('scroll',getScroll)
})

function routerPush(path){
    router.push(`/${path}`)
}

function getScroll(){
    let windowScroll = window.scrollY;
    windowScroll >= 100 ? showBg.value = true : showBg.value = false
}
</script>