<template>
    <div class="news-wrapper">

        <div class="news-container">
            {{ post.title }}
            {{ post.body }}
            {{ post.tags }}
            {{ post.imageurl }}
            {{ post.published_on }}
            {{ post.source_info.name }}
            {{ post.source_info.img }}
            {{ post.url }}
        </div>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
const route = useRoute();
const postId = ref(route.params.id);
const store = useStore();
console.log(postId.value);
const post = computed(()=> {
    return store.state.newsList.LatestNewsMain.find((el)=> el.id == postId.value)
})
</script>