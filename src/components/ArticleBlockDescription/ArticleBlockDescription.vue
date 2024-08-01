<script setup lang="ts">
import { computed } from 'vue'
import type { IArticleBlockDescriptionProps } from './ArticleBlockDescription.type'
import { articleTags } from '@/utils/constant'

const { isPin, title, tags, createTime } = withDefaults(defineProps<IArticleBlockDescriptionProps>(), {
  isPin: false,
  title: '无',
  tags: () => [],
  content: '无',
  createTime: '无',
  isShow: false,
})

const computedTags = computed(() => {
  let tagText = ''

  if (tags.length === 0)
    return '无分类'

  tags.forEach((xItem, index) => {
    const item = articleTags.find(x => x.value === xItem)

    tagText += `${item?.title} ${index !== tags.length - 1 ? '/' : ''} `
  })

  return tagText
})
</script>

<template>
  <div border="1px solid coolGray-2" flex flex-col gap-y-6 rounded-sm p4>
    <div class="line-clamp-1 break-all text-xl font-bold tracking-0.3 text-color-primary-base">
      {{ title }}
    </div>
    <p line-clamp-2 break-all indent-sm class="cursor-pointer tracking-0.3" color-gray-4>
      {{ content }}
    </p>
    <div flex items-center justify-between color-gray-4>
      <div class="flex items-center text-sm">
        <span color-primary>{{ computedTags }}</span>
        <span class="mx-2">·</span>
        <span>{{ createTime }}</span>
      </div>
      <div v-if="isPin" border="1px solid primary" p="x1" rounded-sm text-xs color-primary>
        <span>置顶</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
