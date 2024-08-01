<script setup lang="ts">
import LayoutMenu from './components/LayoutMenu.vue'
</script>

<template>
  <div grid grid-cols-4 gap-x-4>
    <LayoutMenu />
    <div border="1px solid l-coolGray-2 r-0 b-0 t-0" col-span-3 overflow-y-scroll p4 class="h-[calc(100vh-2rem)] scrollbar-none">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>
