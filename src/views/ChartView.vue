<template>
    <TVWidget :type="'symbol-info'"/>
    <Chart/>
    <TVWidget :type="'symbol-profile'"/>
    <TVWidget :type="'technical-analysis'"/>
    <TVWidget :type="'timeline'"/>
</template>

<script setup>
import '@/assets/css/chart.css';
import TVWidget from '@/components/chart/TVWidget.vue';
import Chart from '@/components/chart/Chart.vue'
</script>

<style lang="scss" scoped>

</style>