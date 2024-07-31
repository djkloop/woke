<script setup lang="ts">
import LayoutMenu from './components/LayoutMenu.vue'
</script>

<template>
  <div grid grid-cols-3 gap-x-4>
    <LayoutMenu />
    <div col-span-2 border="1px solid l-coolGray-2 r-0 b-0 t-0" p4>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>
