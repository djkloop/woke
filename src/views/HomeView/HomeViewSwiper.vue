<script setup lang="ts">
import { shallowRef } from 'vue'

const imgs = shallowRef<any>([])

const allImages = import.meta.glob('/src/assets/images/home/banner/*.{png,jpg}', {
  query: '?url',
  import: 'default',
  eager: true,
})

for (const path in allImages) {
  const module = allImages[path] as any
  imgs.value.push(module)
}
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
