<script setup lang="ts">
import LayoutMenu from './components/LayoutMenu.vue'
</script>

<template>
  <div grid grid-cols-3 gap-x-4>
    <LayoutMenu />
    <div col-span-2>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>
