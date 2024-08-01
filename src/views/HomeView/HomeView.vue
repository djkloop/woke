<script setup lang="ts">
import HomeViewContentList from './HomeViewContentList.vue';
import HomeViewSwiper from './HomeViewSwiper.vue';
</script>

<template>
  <main flex flex-col gap-y-4>
    <!-- 首页轮播图 -->
    <HomeViewSwiper />
    <!-- 文章列表 -->
    <HomeViewContentList />
  </main>
</template>
