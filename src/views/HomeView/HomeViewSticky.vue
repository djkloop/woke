<script setup lang="ts">
import { computed, ref, shallowRef } from 'vue'

const tags = shallowRef([
  {
    title: '水文',
    value: 1,
  },
  {
    title: '摄影',
    value: 2,
  },
  {
    title: '作品',
    value: 3,
  },
  {
    title: '碎嘴',
    value: 4,
  },
])

const stickyTag = ref([1, 2])
const contentTime = ref('2022-01-01 12:00:00')

const computedTag = computed(() => {
  let tagText = ''

  if (stickyTag.value.length === 0) {
    return ''
  }

  tags.value.forEach((item, index) => {
    if (stickyTag.value.includes(item.value)) {
      tagText += item.title
      if (index !== stickyTag.value.length - 1) {
        tagText += ' / '
      }
    }
  })

  return tagText
})
</script>

<template>
  <div border="1px solid coolGray-2" flex flex-col gap-y-6 rounded-sm p4>
    <div class="text-color-primary-base line-clamp-1 break-all text-xl font-bold tracking-0.3">
      不要使用「睡眠」：让Windows笔记本在背包内不被唤醒
    </div>
    <p line-clamp-2 break-all indent-sm class="cursor-pointer tracking-0.3" color-gray-4>
      长期以来我都会背着笔记本往返于工作地点和家中，最近遇到Windows电源设置问题。例如下了火车打开电脑，发现电池电量已经所剩无几，原来电脑一直在背包里偷偷运行，并且整个背包都是热乎
    </p>
    <div flex items-center justify-between color-gray-4>
      <div class="flex items-center text-sm">
        <span color-primary>{{ computedTag }}</span>
        <span class="mx-2">·</span>
        <span>{{ contentTime }}</span>
      </div>
      <div border="1px solid indigo-500" p="x1" rounded-sm text-xs color-indigo-500>
        <span>置顶</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
