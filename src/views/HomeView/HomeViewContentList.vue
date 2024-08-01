<script setup lang="ts">
import dayjs from 'dayjs'
import { shallowRef } from 'vue'
import type { IArticleBlockDescriptionProps } from '@/components/ArticleBlockDescription/ArticleBlockDescription.type'
import ArticleBlockDescription from '@/components/ArticleBlockDescription/ArticleBlockDescription.vue'

interface IHomeViewContentListProps {
  list: IArticleBlockDescriptionProps[]
}

const { list } = withDefaults(defineProps<IHomeViewContentListProps>(), {
  list: () => [],
})

console.log(__STATIC__MARKDOWN__DATA__)

const innerList = shallowRef<IArticleBlockDescriptionProps[]>([])

function getRandomDate() {
  const start = new Date(2000, 0, 1)
  const end = new Date()
  const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime())
  return dayjs(new Date(randomTime)).format('YYYY-MM-DD HH:MM:ss')
}

function getRandomSubArray(arr: number[]) {
  const newArr = []
  let randomIndex
  for (let i = 0; i < Math.floor(Math.random() * arr.length); i++) {
    randomIndex = Math.floor(Math.random() * arr.length)
    newArr.push(arr[randomIndex])
  }
  return Array.from(new Set(newArr))
}

function randomInfos() {
  return {
    time: getRandomDate(),
    tags: getRandomSubArray([1, 2, 3, 4]),
  }
}

function createNewList() {
  return [
    {
      id: '1',
      title: '不要使用「睡眠」：让Windows笔记本在背包内不被唤醒',
      content: '长期背笔记本发现电脑在背包内偷偷运行导致电量耗尽，原因是“睡眠”状态易被多种操作唤醒。建议用“休眠”代替“睡眠”，并进行相关电源设置，包括在电源选项中设置按电源按钮和关闭盖子均无任何操作，取消勾选“启用快速启动”，改为勾选“休眠”，并将在此时间后睡眠均改为0，在此时间后休眠均改为10分钟等。',
      createTime: randomInfos().time,
      tags: randomInfos().tags,
      isPin: true,
    },
    {
      id: '2',
      title: '简单易懂的麻将计分规则，来自经典欢乐麻将',
      content: '适用于腾讯《欢乐麻将》中血流成河/血战到底 + 换三张玩法的计分规则，包括基础胡法（平胡、碰碰胡、七对、金钩钓）、牌型加番（根、断幺九、清一色、将、幺九）、操作加番（自摸、杠上花、杠上炮、抢杠胡、海底捞、天地胡）等，同时说明了一些基础规则和特殊情况（如刮风下雨、呼叫转移、退税、查大叫等）。',
      createTime: randomInfos().time,
      tags: randomInfos().tags,
      isPin: false,
    },
    {
      id: '3',
      title: 'AMD显卡笔记本离电下浏览器卡顿、光标消失的解决办法',
      content: 'AMD显卡笔记本在使用Chrome系浏览器（包括Edge）时，未开启硬件加速会出现网页滚动卡顿、视频播放和弹幕效果卡顿等问题，在离电状态下尤为明显。开启浏览器自带的硬件加速可以解决这些问题，但会引入新的问题，如鼠标指针变色延迟一秒且在输入框中鼠标会消失。',
      createTime: randomInfos().time,
      tags: randomInfos().tags,
      isPin: false,
    },
    {
      id: '4',
      title: 'Oracle Cloud 实例开放外网访问的设置',
      content: '使用Oracle Cloud Infrastructure创建Always Free实例时，操作系统选择CentOS 7，虚拟云网络可按需设置，公共IPv4地址跟随虚拟云网络设置。需下载生成的私钥和公钥，进入实例详细信息修改入站和出站规则，为虚拟云网络分配公共IP（注意分配已预留的IP），然后使用Windows自带的PowerShell通过SSH连接实例（使用保存的私钥认证），进入SSH终端后关闭系统的防火墙。',
      createTime: randomInfos().time,
      tags: randomInfos().tags,
      isPin: false,
    },
    {
      id: '5',
      title: '免费建设自主管理的独立站点',
      content: '介绍如何免费搭建自主管理的独立站点，需要自备科学上网、电子邮件账户、有效身份证、一定的英语能力或使用翻译工具的能力。搭建个人网站可用虚拟主机，推荐了一些提供免费虚拟主机的网站（如Freehostia、Free Web Hosting Area、Byet Host、000WebHost），并以000WebHost为例介绍了注册和新建网站的步骤。',
      createTime: randomInfos().time,
      tags: randomInfos().tags,
      isPin: false,
    },
    {
      id: '6',
      title: '【汇总】晚安短信计划 - 新世相（2019）',
      content: '去年的晚安短信计划今年又来了且新增了许多互动内容，参与2019年该计划所收到的所有“晚安短信”共计32条，数据来自短信记录，包括一些励志、鼓励、温馨的话语以及活动相关的通知和提示。',
      createTime: randomInfos().time,
      tags: randomInfos().tags,
      isPin: false,
    },
    {
      id: '7',
      title: '【汇总】晚安短信计划 - 新世相（2018）',
      content: '2018年末参加了新世相联合人民日报发起的晚安短信计划，该计划免费，宣传语是“向100万中国人说晚安”。参与该计划收到的“晚安短信”共计33条，数据来自短信记录和网络资料，包括一些温暖、鼓励、富有哲理的话语以及活动相关的说明。',
      createTime: randomInfos().time,
      tags: randomInfos().tags,
      isPin: false,
    },
    {
      id: '8',
      title: '安卓Via浏览器一条特别的Timeline - 拾穗收集整理',
      content: '本文用于记录与汇总Via for Android关于页面的“拾穗”内容，将同步Via正式版更新。作者从2015年开始使用Via浏览器，因其简洁轻快印象深刻。2023年3月21日Via浏览器在App Store上架iOS版本，但本文暂不包含iOS版Via的拾穗内容。',
      createTime: randomInfos().time,
      tags: randomInfos().tags,
      isPin: false,
    },
  ]
}

innerList.value = createNewList()
</script>

<template>
  <div v-for="item in innerList" :key="item.id">
    <ArticleBlockDescription
      :id="item.id"
      :key="item.id"
      :title="item.title"
      :content="item.content"
      :tags="item.tags"
      :is-pin="item.isPin"
      :create-time="item.createTime"
    />
  </div>
</template>

<style scoped></style>
