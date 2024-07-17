<template>
    <div>
        <img src="@/assets/images/404.png">
        <button class="not-found-btn" @click="$router.push('/')">Go to HomePage</button>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
    img,button {
        display: block;
        margin: auto;
    }
    .not-found-btn {
        padding: 1rem;
        font-size: 1.7rem;
    }
    @media screen and (max-width: 768px ) {
        img { width: 100%;}
    }
    @media screen and (max-width: 576px ) {
        .not-found-btn {
            padding:0.8rem 0.5rem;
            font-size: 1.3rem;
        }
    }
</style>