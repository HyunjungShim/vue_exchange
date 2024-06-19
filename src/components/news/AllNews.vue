<template>
    <div class="news-wrapper">
        <NewsMenu />
        <div class="news-container all" ref="scrollCheck">
            <div class="news-list" v-for="(news,i) in displayNews.slice(0,visibleIdx)" :key="i" @click="goDetailView(news.id)">
                <h1>{{ news.title }}</h1>
                <h2 class="color-text news-body">{{ news.body }}</h2>
                <div class="color-text">
                    <p>By {{ news.source_info.name }}</p>
                    <p>{{ displayDate(news.published_on * 1000) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useRouter,useRoute } from 'vue-router';
import {displayDate} from '@/utils/convertTime'
import NewsMenu from '@/components/news/NewsMenu.vue'
const store = useStore();
const router = useRouter();
const route = useRoute();
const allNews = computed(() => store.state.newsList.allLatestNews);
const majorNews = computed(() => store.state.newsList.allMajorNews);

// console.log('route.params',route.params.category)
const category = ref('all')
watch(()=> route.params.category, (newVal)=>{
    category.value = newVal
})
const displayNews = computed(()=> {
    if(category.value == 'all'){
        return allNews.value
    }else if(category.value == 'major'){
        return majorNews.value
    }else if(category.value == 'btc'){
        return allNews.value.filter((el)=> el.categories.includes("BTC"))
    }else if(category.value == 'eth'){
        return allNews.value.filter((el)=> el.categories.includes("ETH"))
    }else if(category.value == 'bnb'){
        return allNews.value.filter((el)=> el.categories.includes("BNB"))
    }else if(category.value == 'xrp'){
        return allNews.value.filter((el)=> el.categories.includes("XRP"))
    }
    return allNews.value
})
const scrollCheck = ref();
const visibleIdx = ref(5)
onMounted(()=> {
    scrollCheck.value.addEventListener('scroll',handleScroll)
    setInterval(()=> {
        store.dispatch('newsList/getAllNews') // news 2분마다 업데이트
    },120000)
})
// function handleSortChange(event) {
//     console.log('Selected sort value:', event.target.value);
    // document.querySelectorAll('input[type="radio"]').forEach((radio)=> {
    //     radio.parentNode.classList.remove('color-active')
    // })
    // document.querySelector(`#${event.target.value}`).parentNode.classList.add('color-active')
//     visibleIdx.value = 5
// }
function handleScroll(){
    const scrollTop = scrollCheck.value.scrollTop;
    const scrollHeight = scrollCheck.value.scrollHeight;
    const clientHeight = scrollCheck.value.clientHeight;
    // console.log('scrollTop',scrollTop,'scrollHeight',scrollHeight,'clientHeight',clientHeight);
    if (scrollHeight - (scrollTop+ clientHeight) < 500){
        visibleIdx.value += 10
    }
}

function goDetailView(id){
    console.log(router);
    console.log(id);
    router.push(`/news/post/${id}`)
}

onUnmounted(()=> {
    window.removeEventListener('scroll',handleScroll)
})
</script>
