<script setup lang="ts">
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
