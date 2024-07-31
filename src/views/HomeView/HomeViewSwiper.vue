<script setup lang="ts">
import { shallowRef } from 'vue'

const allImages = import.meta.glob('../../assets/images/home/banner/*.{png,jpg}', {
  query: '?url',
  import: 'default',
})
console.log('🚀 ~ allImages:', allImages)

const urlPaths = Object.keys(allImages)

const imgs = shallowRef(urlPaths)
</script>

<template>
  <div>
    <t-swiper class="h300px overflow-hidden rounded-sm" trigger="click" :navigation="{ showSlideBtn: 'hover' }">
      <t-swiper-item v-for="(img) in imgs" :key="img" class="relative h300px bg-black">
        <t-image
          lazy
          class="h300px w-full"
          :src="img"
          fit="cover"
        />
      </t-swiper-item>
    </t-swiper>
  </div>
</template>

<style scoped>

</style>
