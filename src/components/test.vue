<template>
    <div>
        jjjjjjjjj
        {{data}}
    </div>
</template>

<script setup>
import {computed, onMounted} from "vue";
import {useStore} from "vuex";
const store = useStore();
let data = computed(()=> {
    return store.state.exchangeInfo.marketList
})
onMounted(()=> {
    store.dispatch('exchangeInfo/getMarketInfo')
})
</script>

<style lang="scss" scoped>

</style>