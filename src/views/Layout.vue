<template>
<div class="wrapper" :class="{'all-news' : currentPath === 'news' }">
    <Header/>
    <slot></slot>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
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

<style lang="scss" scoped>

</style>