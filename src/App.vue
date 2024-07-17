<template>
  <div class="wrapper">
    <Header/>
    <router-view/>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import '@/assets/css/vue-multiselect.css';
import '@/assets/css/setting.css';
</script>

<style>
</style>
