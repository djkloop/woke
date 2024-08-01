<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { IArticleBlockDescriptionProps } from './ArticleBlockDescription.type'
import { articleRandomTag, articleTags } from '@/utils/constant'
import { getRandomOption } from '@/utils/utils'

const { isPin, title, tags, createTime, content } = withDefaults(defineProps<IArticleBlockDescriptionProps>(), {
  isPin: false,
  title: '无',
  tags: () => [],
  content: '无',
  createTime: '无',
  isShow: false,
})

const router = useRouter()

const computedTag = computed(() => {
  return getRandomOption(articleRandomTag)
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

function calculateReadingTime(text: string, wordsPerMinute = 250) {
  const cleanText = text.replace(/\s+/g, '').length
  const minutes = cleanText / wordsPerMinute
  const totalSeconds = Math.ceil(minutes * 60)
  const minutesPart = Math.floor(totalSeconds / 60)
  const secondsPart = totalSeconds % 60
  if (minutesPart < 1) {
    return `少于1分钟`
  }
  return `${minutesPart} 分钟 ${secondsPart} 秒`
}

const computedReadContentTime = computed(() => {
  return calculateReadingTime(content + title)
})

function handleToBlogDetail() {
  router.push({
    name: 'article-detail',
    query: {
      id: 'blog',
    },
  })
}
</script>

<template>
  <div
    :border="`1px solid ${isPin ? 'indigo-5' : 'coolGray-2'}`"
    flex
    flex-col
    gap-y-6
    rounded-sm
    p4
    @click="handleToBlogDetail"
  >
    <div
      class="line-clamp-1 break-all text-xl font-bold tracking-0.3 text-color-primary-base"
      :class="{
        'text-color-primary-base-pin': isPin,
      }"
      :title="title"
    >
      {{ title }}
    </div>
    <p class="cursor-pointer tracking-0.3" line-clamp-2 break-all indent-md color-gray-4>
      {{ content }}
    </p>
    <div flex items-center justify-between color-gray-4>
      <div class="flex items-center text-sm">
        <span
          :color="`${isPin ? 'indigo-5' : 'primary'}`"
        >{{ computedTags }}</span>
        <span class="mx-2">·</span>
        <div flex items-center justify-center gap-x-1>
          <span class="i-hugeicons-clock-01" role="img" aria-hidden="true" />
          <span>{{ computedReadContentTime }}</span>
        </div>
        <span class="mx-2">·</span>
        <span>{{ createTime }}</span>
      </div>
      <div
        :border="`1px solid ${isPin ? 'indigo-5' : 'primary'}`"
        :color="`${isPin ? 'indigo-5' : 'primary'}`"
        p="x1"
        rounded-sm
        text-xs
      >
        <span v-if="isPin">置顶</span>
        <span v-else>{{ computedTag }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
