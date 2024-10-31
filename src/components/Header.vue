<template>
    <div class="header-wrapper" :class="{'active': showBg === true }">
        <div class="header-container">
            <div class="header-menu flex-center">
                <p @click="routerPush('')" :class="{'color-main' : currentPath === '' }">Main</p>
                <p @click="routerPush('market')" :class="{'color-main' : currentPath === 'market' }">Market</p>
                <p @click="routerPush('chart')" :class="{'color-main' : currentPath === 'chart' }">Chart</p>
                <p @click="routerPush('news/all')" :class="{'color-main' : currentPath === 'news' }">News</p>
            </div>
            <div class="color-mode-container" @click="toggleDark()">
                <img :src="colorModeImgSrc" ref="colorModeImg"/>                
            </div>
            <!-- <img @click="toggleDark()" :src="colorModeImgSrc"/> -->
        </div>
    </div>
</template>
<script setup>
import {computed, onMounted,onUnmounted,ref, watch, nextTick } from 'vue';
import { useRouter,useRoute } from 'vue-router';
import { useDark, useToggle } from '@vueuse/core'
import { useStore } from 'vuex';
const store = useStore();
const router = useRouter();
const route = useRoute();
const showBg = ref(false);
const currentPath = computed(()=> {
    return route.path.split('/')[1]
})
const isDark = useDark({
  attribute:'color-mode',
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)
let colorModeImgSrc = ref(require('@/assets/images/dark-icon.png'))
let colorModeImg = ref(null)

const toggleColorMode = async(isDark) => {
    store.commit('colorMode/setColor',isDark)
    if (colorModeImg.value) {
        await nextTick(); // DOM 업데이트가 완료될 때까지 기다립니다.
        if (isDark) {
            colorModeImg.value.classList.add('isDark')
            colorModeImgSrc.value = require('@/assets/images/dark-icon.png');
        } else {
            colorModeImg.value.classList.remove('isDark')
            colorModeImgSrc.value = require('@/assets/images/light-icon.png');
        }
    }
}
watch(isDark, async (newVal) => {
    await toggleColorMode(newVal)
});
onMounted(async()=> {
    window.addEventListener('scroll',getScroll)    
    await toggleColorMode(isDark.value)
})

onUnmounted(()=> {
    window.removeEventListener('scroll',getScroll)
})

function routerPush(path){
    router.push(`/${path}`)
}

function getScroll(){
    let windowScroll = window.scrollY;
    windowScroll >= 100 ? showBg.value = true : showBg.value = false
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/components/header/header.scss";
</style>