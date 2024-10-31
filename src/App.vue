<template>
  <Layout>
    <router-view/>
  </Layout>
</template>

<script setup>
import Layout from '@/views/Layout.vue';
// import { computed,watch,onMounted,nextTick } from 'vue';
// import { useStore } from 'vuex';
// const store = useStore();
// let isDark = computed(()=>  store.state.colorMode.isDark)
// const toggleColorMode = async(isDark) => {
//     // if (colorModeImg.value) {
//         await nextTick(); // DOM 업데이트가 완료될 때까지 기다립니다.
//         // if (isDark) {
//         //     colorModeImg.value.classList.add('isDark')
//         //     colorModeImgSrc.value = require('@/assets/images/dark-icon.png');
//         // } else {
//         //     colorModeImg.value.classList.remove('isDark')
//         //     colorModeImgSrc.value = require('@/assets/images/light-icon.png');
//         // }
//         console.log('다함');
        
//     // }
// }
// watch(isDark, async (newVal) => {
//     await toggleColorMode(newVal)
// });
// onMounted(()=> {
//     toggleColorMode(isDark.value)
// })
</script>

<style lang="scss">
@import '@/assets/scss/commons/vue-multiselect.scss';
@import "@/assets/scss/commons/setting.scss";
</style>