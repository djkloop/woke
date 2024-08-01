<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { id } = route.query
const MarkDownComponent = defineAsyncComponent(() => {
  return import(`../../blog/${id}.md`)
})
</script>

<template>
  <div p4>
    <Suspense>
      <MarkDownComponent />
      <template #fallback>
        正在加载文章...
      </template>
    </Suspense>
  </div>
</template>

<style scoped>

</style>
