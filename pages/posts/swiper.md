---
title: 用swiperjs实现轮播图效果
date: 2025-08-18
updated: 2025-08-20
categories:
  - 技术
  - 实习
tag:
  - 组件
  - js
---


## 1. 前言

最近公司给了我一个任务是用vue重构一个很老的jsp项目，页面样式是定制的，不能用组件库，里面的轮播图那就得自己实现了。这里我用swiper实现

## 2. 效果

1. 纯图片轮播的

![alt text](/images/swiper4.png)

2. 展示多个轮播图片项的

![alt text](/images/swiper3.png)

3. 图片和文字作为一个轮播项的
![alt text](/images/swiper2.png)

4. 其他

甚至连医生的信息卡片也要轮播（此时截图是静态的）

![alt text](/images/swiper5.png)

还有这个...

![alt text](/images/swiper6.png)

还有好多轮播效果，样式交互全都不一样。

所以我们封装的组件最好要一次性满足以上所有效果，我这里选用swiperjs来实现

web Component组件: [swiperjs官方文档](https://swiper.js.cn/element)

swiper vue组件已经不推荐了，原因：

![alt text](/images/swiper-vue.png)

## 3. 实现步骤

### 1. 安装swiperjs

```bash
npm install swiper

pnpm install swiper
```

### 2. 注册使用

``` ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 注册swiper组件，引入样式文件
import 'swiper/element/bundle'
import { register } from 'swiper/element/bundle'
register()

app.mount('#app')
```

``` vue
// .vue文件
<template>
  <swiper-container>
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper-container>
</template>
```

按照官网上示例这样写此时我们发现页面上是这个样子的，什么都没有，不像个轮播图

![alt text](/images/swiper-slide1.png)

我们需要在swiper-container标签上添加一些属性

`slides-per-view` - 每个swiper-container显示的slides数量

`navigation` - 左右切换按钮

`pagination` - 分页器

`loop` - 循环播放

更多属性方法看 [swiperjs官方文档API](https://swiper.js.cn/swiper-api)

```vue
<template>
  <swiper-container
    slides-per-view="1"
    navigation="true"
    pagination="true"
    loop="true"
    style="width: 600px; height: 300px"
  >
    <swiper-slide style="background-color: #ff6666">Slide 1</swiper-slide>
    <swiper-slide style="background-color: #66ff66">Slide 2</swiper-slide>
    <swiper-slide style="background-color: #6666ff">Slide 3</swiper-slide>
  </swiper-container>
</template>
```

效果：
![alt text](/images/swiper-image1.png)


### 3. 警告问题解决

打开控制台我们发现两个警告

![alt text](/images/swiper-warn.png)

大致意思就是，vue不能解析这两个组件，因为前面说了，我们引入的是web component,要让vue识别也很简单我们只要这样做

``` ts
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 将所有以swiper-开头的标签名都视为自定义元素
          isCustomElement: tag => tag.startsWith('swiper-')
        }
      }
    }),
  ]
})
```

参考[vue官方文档-vue与web component](https://cn.vuejs.org/guide/extras/web-components)

不了解web component的可以先去看看下面这个链接

- [关于web component](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components)

- [阮一峰的网络日志-Web Components 入门教程](https://www.ruanyifeng.com/blog/2019/08/web_components.html)

更新中...
