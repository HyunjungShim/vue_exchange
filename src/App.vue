<template>
  <div class="wrapper" :class="{'all-news' : currentPath === 'news' }">
    <Header/>
    <router-view/>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import '@/assets/css/vue-multiselect.css';
import '@/assets/css/setting.css';
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

const route = useRoute();
const currentPath = ref(route.fullPath.split('/')[1]);

watch(
  () => route.fullPath,
  (newPath) => {
    currentPath.value = newPath.split('/')[1];
    // console.log('currentPath', currentPath.value);
  }
);
</script>

<style>
@media screen and (max-width: 1024px) {
    .wrapper {
      width: 95vw;
      margin-top: 10rem;
    }
    .wrapper.wrapper.all-news {
      width: 95vw;
    }
}
@media screen and (max-width: 768px) {
    .wrapper.all-news {
      margin-top: 8rem;
    }
}
</style>
