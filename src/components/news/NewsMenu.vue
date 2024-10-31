<template>
<div class="news-menu">
    <h1>News</h1>
    <p v-for="type in newsType" :key="type" :class="{'color-active': sort == type.id}">
        <label :for="type.id">
            <input type="radio" v-model="sort" :value="type.id" :id='type.id' @change="handleSortChange"/>{{ type.label }}
        </label>
    </p>
</div>
</template>

<script setup>
import { useRouter,useRoute } from 'vue-router';
import {reactive, ref} from 'vue';

const router = useRouter();
const route = useRoute();
const sort = ref( route.path.split('/')[2]||'all');
const newsType = reactive([
    {id:'all',label:'Latest'},
    {id:'major',label:'Major'},
    {id:'btc',label:'Bitcoin News'},
    {id:'eth',label:'Ethereum News'},
    {id:'bnb',label:'BNB News'},
    {id:'xrp',label:'XRP News'},
])
function handleSortChange(event){
    document.querySelectorAll('input[type="radio"]').forEach((radio)=> {
        radio.parentNode.classList.remove('color-active')
    })
    document.querySelector(`#${event.target.value}`).parentNode.classList.add('color-active')
    let url = event.target.value
    router.push(`/news/${url}`)
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/news/news.scss';
</style>