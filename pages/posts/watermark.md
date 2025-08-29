---
title: 实现一个水印组件，含防篡改功能
date: 2025-08-29
categories:
  - 技术
  - 实习
tag:
  - 组件
  - 踩坑记录
---

## 1.背景
最近用 vue3 重构的一个 jsp 的老项目里需要实现满屏的水印效果，老项目里是没有实现防篡改功能的，在浏览器控制台都可以直接删除水印元素，有跟没有一样，我们用 vue3 写个新的水印组件。
## 2.实现步骤
### 1. 先创建一个基本的水印组件

组件文件名叫 `WaterMark.vue`

``` vue
<script setup lang="ts">
import { ref } from 'vue'
const watermarkRef = ref<HTMLDivElement | null>(null)
</script>

<template>
  <div ref="watermarkRef"  style="position: relative; overflow: hidden">
    <slot></slot>
  </div>
</template>
```

我们这个组件的用法是包裹需要添加水印的元素

``` vue
<template>
  <div class="container">
    <water-mark content="水印">
      <div class="box" style="height: 500px"></div>
    </water-mark>
  </div>
</template>

<script setup lang="ts">
import WaterMark from './WaterMark.vue'
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 800px;
  height: 500px;
  border: 1px solid #ccc;
}
</style>
```

我们在水印组件定义 `props`，用于给后面绘制的 `canvas` 等元素添加样式属性

``` vue
<script setup lang="ts">
import { ref, type PropType } from 'vue'
const watermarkRef = ref<HTMLDivElement | null>(null)

type Font = {
  color: string
  fontSize: number
  fontWeight: 'normal' | 'light' | 'weight' | number
  fontFamily: string
}

defineProps({
  width: { type: Number, default: 120 },
  height: { type: Number, default: 64 },
  zIndex: { type: String, default: '9' },
  textRotate: { type: Number, default: -45 },
  content: {
    type: String,
    default: ''
  },
  font: {
    type: Object as PropType<Font>,
    default: () => ({
      color: 'rgba(0,0,0,.15)',
      fontSize: 14,
      fontWeight: 'normal',
      fontFamily: 'sans-serif'
    })
  },
  gap: { type: Object as PropType<[number, number]>, default: [100, 100] }
})
</script>

<template>
  <div ref="watermarkRef">
    <slot></slot>
  </div>
</template>
```

开始绘制 canvas 水印

``` vue
<script setup lang="ts">
// 其他代码
const canvasBg = computed(() => {
  // 创建canvas元素
  const canvas = document.createElement('canvas')
  // 获取设备像素比
  const devicePixelRatio = window.devicePixelRatio || 1

  const fontSize = props.font?.fontSize * devicePixelRatio
  const font = `${props.font?.fontWeight} ${fontSize}px ${props.font?.fontFamily || 'serif'}`
  // 获取canvas上下文
  const ctx = canvas.getContext('2d')

  if (!ctx) return

  ctx.font = font
  const maxWidth = props.width * devicePixelRatio
  const maxHeight = props.height * devicePixelRatio

  const canvasWidth = maxWidth + props.gap[0] * devicePixelRatio
  const canvasHeight = maxHeight + props.gap[1] * devicePixelRatio
  canvas.width = canvasWidth
  canvas.height = canvasHeight

  ctx.translate(canvas.width / 2, canvas.height / 2) // 居中定位
  ctx.rotate((Math.PI / 180) * props.textRotate)

  ctx.fillStyle = props.font?.color
  ctx.font = font
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  ctx.fillText(props.content, 0, 0)

  return {
    base64: canvas.toDataURL(),
    styleWidth: canvasWidth / devicePixelRatio, // 转换为 CSS 像素宽度
    styleHeight: canvasHeight / devicePixelRatio // 转换为 CSS 像素高度
  }
})

let watermarkContainer: HTMLDivElement | null

function createWatermark() {
  if (!watermarkRef || !canvasBg.value) return

  const { base64, styleWidth, styleHeight } = canvasBg.value

  const containerStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${base64})`,
    backgroundSize: `${styleWidth}px ${styleHeight}px`,
    backgroundRepeat: 'repeat',
    zIndex: props.zIndex
  }

  watermarkContainer = document.createElement('div')

  Object.entries(containerStyle).forEach(([key, value]) => {
    watermarkContainer!.style[key as never] = value
  })

  watermarkRef.value?.appendChild(watermarkContainer)
}

watchEffect(() => {
  createWatermark()
})

onUnmounted(() => {
  watermarkContainer = null
})
</script>
// 其他代码
```

原理是用 canvas 的元素转换为 base64 的图片，然后创建一个额外的 `div` 元素，给它设置些样式，最关键的是把 `base64` 图片设置为背景，设置 `repeat` 属性值，最后把这个 div 元素插入到 watermark 组件里，这样就基本实现了一个水印组件

### 2. 实现多行文字水印

之前我们实现的是一个单行文本水印，那多行的怎么实现的呢？

如果是多行的话，我要给组件传入一个数组类型的content，水印的高度就是数组的长度 * 行高 * 字体大小，我们在使用.fillText()方法时要动态计算数组每个元素文字的纵向偏移量，不然多行文字会重叠

上代码：

``` ts
const props = defineProps({
  // ...其他属性
  content: {
    type: Object as PropType<string | string[]>,
    default: ''
  },
  // ...其他属性
})

const canvasBg = computed(() => {
  // 创建canvas元素
  const canvas = document.createElement('canvas')
  // 获取设备像素比
  const devicePixelRatio = window.devicePixelRatio || 1

  const fontSize = props.font?.fontSize * devicePixelRatio
  const font = `${props.font?.fontWeight} ${fontSize}px ${props.font?.fontFamily || 'serif'}`
  // 获取canvas上下文
  const ctx = canvas.getContext('2d')

  if (!ctx) return

  ctx.font = font
  const maxWidth = props.width * devicePixelRatio
  const lineHeight = fontSize * 1.2 // 行高

  const textLines = []

  // 实现多行文本
  if (typeof props.content === 'string') {
    textLines.push(props.content)
  } else {
    textLines.push(...props.content)
  }

  const lineCount = textLines.length
  const totalTextHeight = lineCount * lineHeight // 多行文本总高度

  const canvasWidth = maxWidth + props.gap[0] * devicePixelRatio
  const canvasHeight = totalTextHeight + props.gap[1] * devicePixelRatio
  canvas.width = canvasWidth
  canvas.height = canvasHeight

  ctx.translate(canvas.width / 2, canvas.height / 2) // 居中定位
  ctx.rotate((Math.PI / 180) * props.textRotate)

  ctx.fillStyle = props.font?.color
  ctx.font = font
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  textLines.forEach((line, index) => {
    const y = -totalTextHeight / 2 + index * lineHeight + lineHeight / 2
    ctx.fillText(line, 0, y)
  })

  return {
    base64: canvas.toDataURL(),
    styleWidth: canvasWidth / devicePixelRatio, // 转换为 CSS 像素宽度
    styleHeight: canvasHeight / devicePixelRatio // 转换为 CSS 像素高度
  }
})
```

我们把传入的 `content` 不管是不是字符串数组都把它变成数组，统一用多行文本的处理方法，然后循环调用 `fillText()`

### 3. 实现防篡改功能

这里要用到一个 API, `MutationObserver`, 用于监听浏览器 DOM 节点树的更新变化，当 DOM 树发生变化时，就会触发回调函数。

``` ts
function createWatermark(){...}

// 定义刷新触发器，用于水印被修改或删除改变它的值，watchEffect监听到变化后随即触发createWatermark
const refreshTrigger = ref(0)

watchEffect(() => {
  refreshTrigger.value++
  createWatermark()
})

// 防篡改处理
const ob = ref<MutationObserver>()
onMounted(() => {
  ob.value = new MutationObserver(records => {
    if (!watermarkContainer) return
    const isTampered = records.some(
      record =>
        Array.from(record.removedNodes).includes(watermarkContainer!) ||
        record.target === watermarkContainer
    )
    if (isTampered) {
      refreshTrigger.value++
    }
  })
  // 开始监听
  ob.value.observe(watermarkRef.value!, {
    childList: true,
    attributes: true,
    subtree: true
  })
})

onUnmounted(() => {
  ob.value?.disconnect() // 停止监听
  watermarkContainer = null
})
```

## 总结

写完这个组件之后我学会了一个新的API,`MutationObserver`,也了解了 canvas 的基本使用，以及 `watch` 和 `watchEffect` 的区别
