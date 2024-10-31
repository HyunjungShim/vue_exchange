<template>
  <div v-for="(type) in widgetTypes" :key="type">
      <!-- TVWidget 컴포넌트 렌더링 -->
      <TVWidget :type="type" />

      <!-- 'symbol-profile' 이후에 Chart 컴포넌트 삽입 -->
      <Chart v-if="type === 'symbol-info'" />
    </div>
</template>

<script setup>
import TVWidget from '@/components/chart/TVWidget.vue';
import Chart from '@/components/chart/Chart.vue'
import { reactive } from 'vue';
let widgetTypes = reactive(['symbol-info','symbol-profile','technical-analysis','timeline'])
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/chart/chart.scss';
</style>