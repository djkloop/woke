<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const { id } = route.query
const MarkDownComponent = defineAsyncComponent(() => {
  return import(`../../blog/${id}.md`)
})

useHead({
  title: `文章详情-${id}`,
})
</script>

<template>
  <div p2>
    <Suspense>
      <MarkDownComponent />
      <template #fallback>
        正在加载文章...
      </template>
    </Suspense>
  </div>
</template>

<style scoped></style>
