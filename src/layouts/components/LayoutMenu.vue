<script setup lang="ts">
import { shallowRef } from 'vue'
import { useRoute } from 'vue-router'
import LayoutMenuFooter from './LayoutMenuFooter.vue'

const innerMenuList = shallowRef([
  { name: '首页', icon: 'HomeIcon', path: '/' },
  { name: '水文', icon: 'ArticleIcon', path: '/article' },
  { name: '摄影', icon: 'CameraIcon', path: '/photo' },
  { name: '作品', icon: 'CameraIcon', path: '/work' },
  { name: '碎嘴', icon: 'CameraIcon', path: '/shatter' },
  { name: '关于', icon: 'AboutIcon', path: '/about' },
])

// const innerDescriptionV1 = shallowRef('错过的都是风景，留下的都是人生。')
const innerDescriptionV2 = shallowRef('讲文明，树新风，扬正气，促和谐，谱新篇。')

const route = useRoute()
</script>

<template>
  <div class="h100vh" relative flex flex-col items-center justify-center gap-y-4 overflow-hidden>
    <div border="1px solid coolgray-2" h30 w30 flex rotate-y-180deg items-center justify-center overflow-hidden rounded-full p2>
      <img src="@/assets/logo_wk_x.png" class="block h20 w20" alt="" srcset="">
    </div>
    <div text-3xl>
      <span>蜗壳</span>
    </div>
    <div text-sm color-coolGray-6>
      <span>{{ innerDescriptionV2 }}</span>
    </div>
    <div class="wkMenuWrapper">
      <router-link
        v-for="menuItem in innerMenuList"
        :key="menuItem.path"
        class="wkMenuItem"
        :class="{
          wkMenuItemActive: route.path === menuItem.path,
        }"
        :to="menuItem.path"
      >
        {{ menuItem.name }}
      </router-link>
    </div>
    <LayoutMenuFooter />
  </div>
</template>

<style lang="scss">
.wkMenuWrapper {
  @apply flex gap-x-4 items-center justify-center;
}
.wkMenuItem {
  @apply transition-all decoration-none border-(1px solid color-transparent) p-(x1 y0.5) color-slate-8 cursor-pointer hover:(color-primary transition-duration-150 transition-property-color);
}
.wkMenuItemActive {
  @apply color-primary border-(1px solid primary) rounded-sm;
}
</style>
