<script setup lang="ts">

</script>

<template>
  <div absolute bottom-0 z-2 w-full flex items-center justify-center py-4>
    <div flex items-center justify-center gap-x-2 text-sm color-coolgray-4>
      <div flex items-center justify-center gap-x-1>
        <span class="i-hugeicons-copyright" role="img" aria-hidden="true" />
        <span>蜗壳</span>
      </div>
      <span>/</span>
      <div flex items-center justify-center gap-x-1 class="wkLayoutMenuFooterItem">
        <span class="i-hugeicons-mail-love-01" role="img" aria-hidden="true" />
        <a target="_blank" href="mailto:djkloopjs@gmail.com">djkloopjs@gmail.com</a>
      </div>
      <span>/</span>
      <div flex items-center justify-center gap-x-1 class="wkLayoutMenuFooterItem">
        <span class="i-hugeicons-location-03" role="img" aria-hidden="true" />
        <a target="_blank" href="https://ditu.amap.com/search?city=650103">乌鲁木齐</a>
      </div>
      <span>/</span>
      <div flex items-center justify-center gap-x-1>
        <span class="i-hugeicons-passport" role="img" aria-hidden="true" />
        <span>京ICP备18019502号-1</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.wkLayoutMenuFooterItem {
  @apply hover:(color-primary transition-duration-150 transition-property-color);

  a {
    @apply color-coolgray-4  decoration-none hover:(color-primary transition-duration-150 transition-property-color);
  }
}
</style>
