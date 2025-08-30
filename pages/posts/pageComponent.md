---
title: 实现一个分页组件
date: 2025-08-27
categories:
  - 前端
---

## 背景

还是那个重构项目的任务，有分页场景，但是不能用组件库，因为样式都是定制的，所以我自己实现一个

## 实现步骤
### 1. 基本的分页功能

我们先定义三个最基本的 props 属性，`total` 总数据量， `pageSize` 每页数据量， `modelValue` 和 `update:modelValue` 是用于双向绑定当前页码 `currentPage`。 因为后面我们肯定会改变当前页码的，子组件不能改父组件传递的数据，所以我们要把 `modelValue` 赋值给 `currentPage`，然后我们监听 `currentPage` 的变化，调用 `update:modelValue`，这样我们就实现了 `currentPage` 的双向绑定。

然后动态计算 `pageCount` 总页数，用于渲染页码

下面是实现一个最基本的分页组件

``` vue
<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 1
  },
  total: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    default: 10
  }
})

const currentPage = ref(props.modelValue)

// currentPage变化时更新数据 实现双向绑定
watch(
  () => currentPage.value,
  newVal => {
    currentPage.value = newVal
    emit('update:modelValue', newVal)
  }
)

const pageCount = computed(() => Math.ceil(props.total / props.pageSize))

const emit = defineEmits(['update:modelValue', 'change'])

const handleChange = (item: number) => {
  currentPage.value = item
  emit('change', item)
}

const handlePrevClick = () => {
  if (currentPage.value <= 1) return
  currentPage.value--
  emit('change', currentPage.value)
}

const handleNextClick = () => {
  if (currentPage.value >= pageCount.value) return
  currentPage.value++
  emit('change', currentPage.value)
}
</script>

<template>
  <div v-if="pageCount !== 1" class="page-container">
    <button
      type="button"
      :class="['page__button__prev', { disabled: currentPage <= 1 }]"
      @click="handlePrevClick"
    >
      prev
    </button>
    <ul class="page-list">
      <li
        v-for="item in pageCount"
        :class="['page-list__item', { active: currentPage === item }]"
        @click="handleChange(item)"
      >
        {{ item }}
      </li>
    </ul>
    <button
      type="button"
      :class="['page__button__next', { disabled: currentPage >= pageCount }]"
      @click="handleNextClick"
    >
      next
    </button>
  </div>
</template>

<style scoped lang="scss">
li {
  list-style: none;
}
button {
  border: none;
  border-radius: 4px;
  background-color: inherit;
  padding: 4px;
  color: #1677ff;
  cursor: pointer;
  &:hover {
    color: rgba(22, 119, 255, 0.8);
  }
}
.page-container {
  display: flex;
  align-items: center;
  gap: 4px;
  .disabled {
    color: #c0c4cc;
    cursor: not-allowed;
  }
  .page-list {
    padding: 0 8px;
    display: flex;
    gap: 8px;
    .page-list__item {
      width: 18px;
      height: 18px;
      line-height: 18px;
      text-align: center;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background: #efefef;
      }
    }
    .active {
      background: #1677ff;
      color: #fff;
      &:hover {
        background: #1677ff;
      }
    }
  }
}
</style>

```

现在写的这个样式是我重新写的，为了展示一个好看的效果。

组件使用：

``` vue
<script setup lang="ts">
import { ref, watch } from 'vue'
import PageNation from './PageNation.vue'

const currentPage = ref(1)

watch(
  () => currentPage.value,
  value => {
    // 监听currentPage变化，是否实现了双向绑定
    console.log(value)
  }
)
</script>

<template>
  <page-nation v-model="currentPage" :total="50"></page-nation>
</template>

```

### 2. 省略页码

如果数据量太多，比如 1000条数据，每页大小10个，那就有100个页码了，全都展示会导致分页组件非常长，我们再优化一下。页码超过七个就适当省略部分页码。

第一页和最后一页的页码是固定的，那问题是如何生成中间页码。

首先我们规定最多只展示7个点击页码，首尾各一个，那就要动态生成中间的5个页码

``` ts
// 最多展示除开头页和尾页的5个中间页码
const MAX_MEDDLE_PAGES_COUNT = 5
// 最多展示7个页码
const MAX_VISIBLE_PAGES = MAX_MEDDLE_PAGES_COUNT + 2
// 当前页码距离首尾页码多少距离才显示省略号
const MIDDLE_PAGE_POSITION = Math.floor(MAX_MEDDLE_PAGES_COUNT / 2) + 1

const isShowPrevMore = computed(() => {
  return (
    pageCount.value > MAX_VISIBLE_PAGES &&
    currentPage.value > MIDDLE_PAGE_POSITION + 1
  )
})

const isShowNextMore = computed(() => {
  return (
    pageCount.value > MAX_VISIBLE_PAGES &&
    currentPage.value < pageCount.value - MIDDLE_PAGE_POSITION
  )
})

/**
 * 生成中间页码
 */
const generateMiddlePageCount = () => {
  // 工具函数：生成连续页码数组
  const generatePageRange = (
    start: number,
    count: number = MAX_MEDDLE_PAGES_COUNT
  ) => Array.from({ length: count }, (_, i) => start + i)

  // 边界情况处理
  if (pageCount.value <= MAX_VISIBLE_PAGES) {
    return generatePageRange(2, pageCount.value - 2)
  }

  // 根据当前页码位置生成对应页码
  const pageRanges = {
    // 一种是当前页码靠近首页的情况
    nearStart: () => generatePageRange(2),
    // 一种是当前页码靠近尾页的情况
    nearEnd: () => generatePageRange(pageCount.value - MAX_MEDDLE_PAGES_COUNT),
    // 一种是当前页码在中间的情况
    inMiddle: () => generatePageRange(currentPage.value - 2)
  }

  if (currentPage.value <= MIDDLE_PAGE_POSITION + 1)
    return pageRanges.nearStart()
  if (currentPage.value >= pageCount.value - MIDDLE_PAGE_POSITION)
    return pageRanges.nearEnd()

  return pageRanges.inMiddle()
}

const middlePages = computed(() => generateMiddlePageCount())
```

把生成的 `middlePages` 渲染上去

``` html
<div v-if="pageCount !== 1" class="page-container">
    <button
      type="button"
      :class="['page__button__prev', { disabled: currentPage <= 1 }]"
      @click="handlePrevClick"
    >
      prev
    </button>
    <ul class="page-list">
      <li
        :class="['page-list__item', { active: currentPage === 1 }]"
        @click="handleChange(1)"
      >
        1
      </li>
      <li v-if="isShowPrevMore" class="more">...</li>
      <li
        v-for="item in middlePages"
        :key="item"
        :class="['page-list__item', { active: item === currentPage }]"
        @click="handleChange(item)"
      >
        {{ item }}
      </li>
      <li v-if="isShowNextMore" class="more">...</li>
      <li
        :class="['page-list__item', { active: currentPage === pageCount }]"
        @click="handleChange(pageCount)"
      >
        {{ pageCount }}
      </li>
    </ul>
    <button
      type="button"
      :class="['page__button__next', { disabled: currentPage >= pageCount }]"
      @click="handleNextClick"
    >
      next
    </button>
 </div>
```

样式部分

``` scss
li {
  list-style: none;
}
button {
  border: none;
  border-radius: 4px;
  background-color: inherit;
  padding: 4px;
  color: #1677ff;
  cursor: pointer;
  &:hover {
    color: rgba(22, 119, 255, 0.8);
  }
}
.page-container {
  display: flex;
  align-items: center;
  gap: 4px;
  .disabled {
    color: #c0c4cc;
    cursor: not-allowed;
  }
  .page-list {
    padding: 0 8px;
    display: flex;
    gap: 8px;
    .more {
      cursor: pointer;
    }
    .page-list__item {
      line-height: 18px;
      text-align: center;
      padding: 4px 8px;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background: #efefef;
      }
    }
    .active {
      background: #1677ff;
      color: #fff;
      &:hover {
        background: #1677ff;
      }
    }
  }
}
```


## 总结

还有什么指定跳转页码功能，改变每页数据大小等，这些功能实现起来都挺容易的，就不展开讲了。不过这个组件我的 [FanUI](https://github.com/mixdmatches/FanUI) 组件库里没收录，有空我会在这个项目里加入这个组件，顺便实现其他功能。


