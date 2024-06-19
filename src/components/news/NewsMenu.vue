<template>
<div class="news-menu">
    <h1>News</h1>
    <p>
        <label for='all' class="color-active">
            <input type="radio" id='all' v-model="sort" value="all" @change="handleSortChange"/>Latest
        </label>
    </p>
    <p>
        <label for="major">
            <input type="radio" v-model="sort" value="major" id='major' @change="handleSortChange"/>Major
        </label>
    </p>
    <p>
        <label for='btc'>
            <input type="radio" v-model="sort" value="btc" id='btc' @change="handleSortChange"/>Bitcoin News
        </label>
    </p>
    <p>
        <label for='eth'>
            <input type="radio" v-model="sort" value="eth" id='eth' @change="handleSortChange"/>Ethereum News
        </label>
    </p>
    <p>
        <label for='bnb'>
            <input type="radio" v-model="sort" value="bnb" id='bnb' @change="handleSortChange"/>BNB News
        </label>
    </p>
    <p>
        <label for='xrp'>
            <input type="radio" v-model="sort" value="xrp" id='xrp' @change="handleSortChange"/>XRP News
        </label>
    </p>
</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import {ref} from 'vue';

const router = useRouter()
const sort = ref('latest');

function handleSortChange(event){
    // console.log(event.target.value);
    document.querySelectorAll('input[type="radio"]').forEach((radio)=> {
        radio.parentNode.classList.remove('color-active')
    })
    document.querySelector(`#${event.target.value}`).parentNode.classList.add('color-active')
    let url = event.target.value
    router.push(`/news/${url}`)
}
</script>