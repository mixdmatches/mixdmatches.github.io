---
layout: post
title: 面经大总结
date: 2025-08-25
categories:
  - 技术
tags:
  - 面经
---

## 第八次面试-2025年11月3日-七牛云 20min

七牛云前端-20min
1. 个人优势，劣势（我说我话少内向，做事情专注是优势，话少内向，沟通方面有所欠缺是劣势，面试官说我就是主动性不高）
2. 为什么实习三个月就离职了，为什么不续签
3. 能实习多久
4. 讲讲实习，先介绍一下业务，你做了什么，遇到那些困难，怎么解决的
5. 用过哪些AI工具（我以为说AI编辑器呢,我说Trae，又问我还有没有其他的）
6. 用这些AI工具做什么
7. 为什么不用chatgpt,cloude
8. 平常有什么爱好（我说我喜欢看文学作品，本来想说没有的，但是脑子一抽，就说了这个）
9. 为什么喜欢看文学作品（瞎讲的）
10. 既然喜欢看文学作品那为什么选择做前端呢
11. vue与React的区别
12. 首屏加载慢的话你怎么解决
13. 反问
感觉这轮面试不是很重在考察技术，我问过面试官我这轮面试的表现情况，面试官说我对前沿技术的好奇心不太重，从我回答使用AI工具这方面看出来的，我觉得他说的挺有道理的，我经常用豆包，deepseek,而不用chatgpt这些国外的AI工具，就是懒嘛，觉得国内这些AI工具够用，而且不花钱。

还有就是我想问问大家，那种非技术的问题要怎么回答才好啊，我感觉不管怎么答都不太合适，以后我要尽量往给自己营造一种热爱技术，勇于挑战的形象的方向去吗？我这个人确实不怎么爱撒谎，怎么问我就根据自身怎么答，本质还是太老实了是吗？那我活该啊....

之前的面试再怎么糟糕再怎么失败我都不会难过，但是这次面试让我深刻意识到，我可能不合适做开发，面试官问我有没有考虑过产品经理。我有点挫败了其实，我这种性格，是不是就是不合适做开发啊。技术方面，比不上985,211学生，软技能方面，也没有。好挫败，感觉人生到了尽头，我靠我好差劲啊。秋招咋办啊呃呃呃27届还来得及吗

## 第七次面试-2025年10月28日-1药网 20min

1. 虚拟滚动怎么实现的
2. js基本类型和引用类型
3. 引用类型和基本类型的区别
4. js判断方法有哪些
5. 这三种判断方法的区别
6. 为什么Object.property.toString.call()方法可以判断类型，不用number.toString
7. typeScript和Js的区别
8. js本地存储方法有哪些，区别是什么
9. cookie和其他两个最大的区别是什么
10. 讲一下防抖节流
11. rem和em，px的区别
12. 怎么实现一个元素的水平垂直居中
13. 了解过bfc和重绘，回流吗
14. 了解过tcp吗


## 第六次面试-2025年10月23日-安恒信息 30min

实习结束后的第一次面试，生疏了

1. 你是怎么设计一个组件的
2. 虚拟列表怎么实现的
3. 组件库有没有什么比较难的地方
4. 你怎么拍平树的
5. 组件之间的通信
6. 有没有用过hook，你自己封装过哪些hook
7. vue2和vue3的响应式原理区别
8. 那vue3的proxy是怎么监听这个新增的属性和删除属性的
9. 实现异步的方案
10. 讲一下事件循环
11. 哪些是宏任务，哪些是微任务
12. 为什么会有Promise这个东西呢
13. Promise有哪些状态
14. 可以把一个失败的状态改成成功状态吗
15. Promise的all和race方法的区别
16. 怎么实现一个Promise.all方法呢
17. nextTick原理
18. 如果有一个父组件和一个子组件，讲一下他们的整个生命周期的过程，比如哪个先创建先销毁
19. 怎么获取整个页面上的dom元素
20. 怎么知道这个页面上有多少种标签
21. set和weakSet


## 第五次面试-2025年8月12日-美团一面 1h

距离上一次面试是两个月前了，生疏了啊都，表现得很差，我很不满意自己

1. 自我介绍
2. 现在是在这家公司正在实习吗，为什么要重新找呢？
3. 说一下你在实习公司里做了哪些，这些都是你一个人做的吗
4. h5和原生是怎么通信的呢，了解原理吗
::: details 点击查看通信原理
我们用的是JSBridge,JSBridge是以JavaScript引擎或Webview容器作为媒介，通过协定协议进行通信，实现Native端和Web端双向通信的一种机制。JSBridge的核心原理是JavaScript接口注入，即原生应用将接口注入到WebView的JavaScript环境中，使得H5页面能够直接调用这些接口。
:::
5. 实习的时候做的那些项目里，在前端交互方面有没有什么难一点的地方
6. 浏览器有哪些存储技术
::: details 点击查看
我答了localStorage和sessionStorage，cookie，还忘了个indexDB，这个没用过就没说
:::
7. localstorage和sessionStorage，cookie的区别
::: details 点击查看
存储大小：

   - localStorage：一般5MB-10MB
   - sessionStorage：一般5MB-10MB
   - cookie：4KB左右

存储位置：
   - localStorage：数据存储在本地客户端，不会随请求发送到服务器，仅在客户端使用。
   - sessionStorage：同样存储在本地客户端，不参与请求发送到服务器，且只在当前会话有效。
   - cookie：存储在客户端，但在每次 HTTP 请求时，会自动将符合条件的 cookie 发送到服务器，增加请求的数据量。

生命周期：
  - localStorage：永久存储，除非手动删除。
  - sessionStorage：数据仅在当前会话期间有效，当页面关闭或浏览器关闭后，数据会被自动清除。
  - cookie：可以设置过期时间，若未设置，默认在会话结束时（浏览器关闭）失效。

作用域：
  - localStorage：在同一域名下，所有页面都可以共享存储的数据，即使跨页面也能访问。
  - sessionStorage：作用域限制在同一窗口（或标签页）的同一域名下，不同窗口或标签页之间的数据不共享。
  - cookie：可以通过设置 path 和 domain 属性来控制其作用域，允许不同页面或子域名之间共享数据。

安全性：
  - localStorage：由于不参与服务器通信，安全性相对较高，但存储敏感信息时仍需加密。
  - sessionStorage：同 localStorage，仅在当前会话有效，安全性也较高。
  - cookie：因为会随请求发送到服务器，容易受到跨站请求伪造（CSRF）和跨站脚本攻击（XSS），存储敏感信息时需使用 HttpOnly、Secure 等属性增强安全性。

操作接口：
  - localStorage 和 sessionStorage：提供了简单的 API，如 setItem、getItem、removeItem 和 clear 来操作数据。
  - cookie：操作相对复杂，需要手动解析和设置 document.cookie 字符串。
:::
8. cookie是谁来存储的，可以修改它的数据吗
::: details 点击查看
Cookie 主要由客户端（浏览器）来存储。当服务器在响应头中通过 `Set-Cookie` 字段发送 `Cookie` 信息时，浏览器会接收并将这些信息存储在本地。不同浏览器有不同的存储方式，例如会将 `Cookie` 信息存储在本地文件或者数据库中。在客户端（浏览器环境）中，可以通过 JavaScript 来修改 Cookie 数据。操作 document.cookie 属性，就能够读取、设置和删除 Cookie。不过，若 Cookie 被设置了 HttpOnly 属性，客户端的 JavaScript 就无法访问和修改该 Cookie，这是为了增强安全性，防止跨站脚本攻击（XSS）。
```javascript
// 设置一个新的 Cookie
document.cookie = "username=JohnDoe; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";

// 修改已存在的 Cookie
document.cookie = "username=JaneDoe; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";

// 删除 Cookie（通过设置过期时间为过去）
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```
服务器端可以在响应头中使用 Set-Cookie 字段来修改 Cookie 数据。当客户端发起请求时，服务器可以根据业务逻辑生成新的 Cookie 信息，通过响应头返回给客户端，客户端会更新本地存储的 Cookie 信息。
```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // 设置一个新的 Cookie
  res.cookie('username', 'JohnDoe', { expires: new Date(Date.now() + 3600000), path: '/' });

  // 修改已存在的 Cookie
  res.cookie('username', 'JaneDoe', { expires: new Date(Date.now() + 3600000), path: '/' });

  // 删除 Cookie
  res.clearCookie('username', { path: '/' });

  res.send('Cookie operations completed');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```
Cookie 由客户端存储，客户端和服务器端都有办法修改 Cookie 数据，但要注意 HttpOnly 等安全属性对客户端操作的限制。
:::
9. 上面三种存储方式如果存满了继续存的话会发生什么呢
::: details 点击查看
- 1. localStorage和sessionStorage
  达到存储上限（通常 5MB - 10MB）后继续存储，浏览器会抛出 QuotaExceededError 异常。
- 2. cookie
     cookie 存储容量较小，一般限制在 4KB 左右。当尝试设置超过单个 cookie 大小限制的内容时，该 cookie 设置会失败，浏览器不会抛出异常，只是简单地忽略这个设置操作。如果是所有 cookie 总大小达到域名限制（一般是 20 个左右 cookie，总大小 4KB - 5KB），继续设置新的 cookie 时，浏览器可能会根据不同的策略删除旧的 cookie 以腾出空间，或者直接忽略新的设置。
:::
10. 在使用他们的时候有哪些注意的地方呢，安全方面的
::: details 点击查看
我一时没说上来，考虑用户安全这块属实是我疏忽了，面试官继续引导我，我才想起来，比如在存储用户敏感信息（手机号，身份证，密码）的时候，要加密存储，不能明文存储，否则会被泄露。
如果了解cookie还可以答一个跨站伪造请求和脚本注入攻击
:::
11. 你在做组件库这个项目的时候有没有碰到什么问题最后怎么解决的呢
12. 算法题：二分查找
13. vue3生命周期，hooks有哪些
14. 代码输出题：new Array(100) new Array('100') new Array(null) new Array(undefined) new Array('a')
::: details 点击查看
``` js
new Array(100)  // 100个空元素  **这块我答错了，长度为100的数组，里面所有元素是Undefined**
new Array('100')  // 1个元素，值为'100'
new Array(null)  // 1个元素，值为null  **这个我答错了，说是null**
new Array(undefined)  // 1个元素，值为undefined
new Array('a')  // 1个元素，值为'a'
```
:::
15. 事件循环了解多少讲一下
::: details 点击查看
事件循环是指浏览器或Node.js等运行时环境中的一种机制，用于处理异步操作，协调代码执行顺序。事件循环包括宏任务队列和微任务队列，当事件循环开始时，会先执行宏任务队列中的任务，然后执行微任务队列中的任务，最后再执行宏任务队列中的任务，周而复始，直到两个队列都为空。
:::
16. 两个事件循环输出题（我忘了，大概就是setTimeout里嵌套Promise，promise里嵌套setTimeoust,然后还有链式调用这样）

被拷打麻了，然后回去深入了解了一下，在网上看了很多事件笔试题，写了一下文章 [关于事件循环](./event-loop.md)

反问：面试结果多久出，部门业务，能给我一点建议吗有哪些方面需要提升

总结：人生第一次大厂面试是团团给的呜呜呜，但我还是太菜了，面试官人也特别好，一直在引导我，面试氛围很好啊真的，我开始很紧张，后来不紧张了，面试过程中还看了我的github主页（我是多么感谢自己曾经把自己写的代码项目展示上去了），看见我有个博客项目问我是不是在写博客，还给我提了一些建议，呜呜呜人太好了，还问我考不考研什么的，原来“聊天”面试真的存在哇，面试体验给100000000分！
下饭你现在最重要的事就是平时写代码的时候要多思考（严肃脸），写代码的时候碰到任何阻碍一定要记录下来，不然面试的时候可能想不起来，而且感觉很多面试官喜欢问：“遇到什么困难，怎么解决的”这样的问法，明明你在写项目的时候遇到了很多困难啊！！为什么回忆的时候一点也想不起来了呢！！嗯。。。对。。我大概是春竹吧。。。所以要写个博客记录下来，就像面试官说的“博客文章并不需要说质量特别好怎么样，主要是记录过程”。

## 第四次面试-2025年6月6日-北新
1. 自我介绍，被打断了
2. 你这个AI对话流式响应怎么做的
3. 讲讲你在开发项目的时候有没有遇到过困扰很久的问题最后解决掉的
4. 你这个组件库项目是用来做什么的
5. 你这个组件库具体做了哪些组件
6. 讲讲你写一个组件的思路，随便拿一个你做过的组件（组件库项目里的）举例
7. 你这个组件库有投入到别的开发项目中用吗
8. 你用echart做过哪些图表
9. vue3的组件从创建到销毁的过程
::: details 点击查看
这过程分为四个阶段：初始化，挂载，更新，卸载。vue在初始化阶段会创建组件实例，setup() 函数会在初始化阶段调用，用于初始化组件的状态和事件处理函数。组件创建完成后进入挂载阶段，将组件渲染到 DOM 中，在挂在之前可以调用 onBeforeMount(),挂载之后可以调用 onMounted(),此时可以访问DOM元素。在更新阶段当组件的响应式数据发生变化时，就会触发组件更新，onBeforeUpdate() 在组件更新前调用，此时数据已经更新但是DOM还未重新渲染，所以可以访问更新前的DOM状态，onUpdated() 在组件更新后调用，此时DOM元素已经重新完成渲染，可以访问更新后的DOM状态。 当组件从DOM中移除时会进入卸载阶段，onBeforeUnmounted() 在组件卸载前调用，组件实例仍然存在，可以在这个阶段进行一些清理工作，比如移除事件监听器，onUnmounted() 在组件卸载完成之后调用，组件实例已经被销毁。
:::
10. v-if和v-show
::: details 点击查看
- v-if：当条件为真时渲染元素，为假时不渲染。
- v-show：无论条件是否为真，都会渲染元素，只是通过 CSS 控制显示与隐藏。
:::
11. 用原生的方法控制一个元素显示隐藏有哪些方法，怎么做
::: details 点击查看
- display: none; 元素从文档流中移除，不占用空间，不会触发重绘或回流。
- visibility: hidden; 元素不可见，但仍占用空间，会触发重绘或回流。
- opacity: 0; 元素不可见，但仍占用空间，不会触发重绘或回流。
- transform: scale(0); 元素不可见，但仍占用空间，不会触发重绘或回流。
:::
12. 盒模型相关的
::: details 点击查看
盒模型是布局的基础概念，它把 HTML 元素看作一个矩形盒子，由内容（content）、内边距（padding）、边框（border）和外边距（margin）这几个部分构成。常见的盒模型有标准盒模型和 IE 盒模型（怪异盒模型）
- 标准盒模型（W3C 盒模型）：
  - 总宽度 = `width` + `padding-left` + `padding-right` + `border-left-width` + `border-right-width` + `margin-left` + `margin-right`
  - 总高度 = `height` + `padding-top` + `padding-bottom` + `border-top-width` + `border-bottom-width` + `margin-top` + `margin-bottom`
- IE盒模型：
  - width 和 height 已经包含了内容区域、内边距和边框的尺寸。
  - 总宽度 = `width` + `margin-left` + `margin-right`
  - 总高度 = `height` + `margin-top` + `margin-bottom`
- 通过设置 `box-sizing` 为 `border-box` 变成IE盒模型，`content-box` 是标准盒模型

标准盒模型里 width 和 height 仅代表内容区域，而 IE 盒模型的 width 和 height 包含内容、内边距和边框。
:::
13. 数组和对象有哪些方法
::: details 点击查看
Object:
  - Object.keys() // 返回一个数组，数组元素是对象的可枚举属性名
  - Object.values() // 返回一个数组，数组元素是对象的可枚举属性值
  - Object.entries() // 返回一个数组，数组元素是键值对数组，每个键值对数组的第一个元素是属性名，第二个元素是属性值
  - Object.assign() // 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象
  - Object.create() // 创建一个新对象，使用现有的对象来提供新创建的对象的 __proto__
  - Object.getPrototypeOf() // 获取对象的原型（内部 [[Prototype]] 属性）
  - Object.setPrototypeOf() // 设置对象的原型（内部 [[Prototype]] 属性）
  - Object.hasOwnProperty() // 判断对象是否有某个属性，不包括原型链上的属性
  - Object.is() // 比较两个值是否严格相等，与 === 类似，但处理了一些特殊情况，比如 +0 和 -0 被认为是不相等的，而 NaN 被认为是相等的。
Array:
  - Array.prototype.push() // 向数组末尾添加一个或多个元素，并返回新的长度
  - Array.prototype.pop() // 删除数组的最后一个元素，并返回该元素
  - Array.prototype.shift() // 删除数组的第一个元素，并返回该元素
  - Array.prototype.unshift() // 向数组开头添加一个或多个元素，并返回新的长度
  - Array.prototype.slice() // 返回一个新数组，包含从 start 到 end （不包括 end）的数组元素
  - Array.prototype.splice() // 向/从数组中添加/删除项目，然后返回被删除的项目
  - Array.prototype.concat() // 合并两个或多个数组
  - Array.prototype.join() // 把数组的所有元素转换为一个字符串
  - Array.prototype.indexOf() // 返回数组中第一个匹配项的索引
  - Array.prototype.lastIndexOf() // 返回数组中最后一个匹配项的索引
  - Array.prototype.includes() // 判断数组是否包含指定元素
  - Array.prototype.sort() // 对数组元素进行排序
  - Array.prototype.reverse() // 颠倒数组中元素的顺序
  - Array.prototype.forEach() // 对数组的每个元素执行一次给定的函数
  - Array.prototype.map() // 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
  - Array.prototype.filter() // 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
  - Array.prototype.reduce() // 对数组中的每个元素执行一个由您提供的 reducer 函数(升序执行)，将其结果汇总为单个返回值
:::
14. es6的新特性
::: details 点击查看
- 新的变量声明：let const var
- Proxy/Reflect
- 箭头函数
- 类 class关键字
- 模块化
- 解构赋值
- 模板字符串
- 扩展运算符
- Promise
- 新的对象方法：Object.assign() Object.keys() Object.values() Object.entries()
- 新的数据结构 Set Map
- 迭代器和生成器
:::

反问：1.面试结果什么时候出，2.具体业务

一共面了二十多分钟，双方都开摄像头，给我紧张死了。
面试总结：多练吧，自己是那种一旦有一点错误就会紧张，导致后面状态不好，最大的问题就是语言表述能力，还不够自信，多练，多练，多练。

## 第三次面试-2025年5月14日-江苏健康无忧

1. 自我介绍
2. js有哪些基础类型，引用类型？
::: details 点击查看
基础类型：number string boolean null undefined symbol bigint
引用类型：object array function
:::
3. 怎么区分是基础类型还是引用类型
::: details 点击查看
typeof instanceof
:::
4. typeof可以判断哪些类型，可以判断数组吗
::: details 点击查看
typeof可以判断哪些类型：number string boolean null undefined symbol bigint object function
可以判断数组吗：不能，数组的类型是object，typeof数组返回的是object
:::
5. 数组有哪些方法
第四次面试问过了
6. 了解继承吗，说一下
::: details 点击查看
继承就是让子类的实例能够访问到父类上的属性和方法
:::
7. 继承是怎么实现的
::: details 点击查看
看这篇文章
[js中七种继承方式](https://juejin.cn/post/7393606971928051727?searchId=202508261352195EC4AE731670C68DC2B1)
:::
8. 什么是原型链
::: details 点击查看
b站上有个博主讲原型链讲的很明白

[原型链](https://www.bilibili.com/video/BV1ci4y157Ci/?spm_id_from=333.337.search-card.all.click&vd_source=520e795afaa9c69e8a49c513b06bf16e)
:::
9. 如何实现深拷贝
::: details 点击查看
这个我还真没了解...

概念：深拷贝是创建一个新对象，新对象的属性值与原对象相同，但两者在内存中相互独立，修改新对象不会影响原对象。
实现：
1. JSON.parse(JSON.stringify(obj))
缺点：
   - 无法处理函数、RegExp、Date 等特殊对象。
   - 会忽略 undefined 属性。
   - 不能处理循环引用。
2. 递归实现深拷贝
3. 使用lodash
:::
10. 了解过防抖和节流吗，你在项目中有用过吗，怎么做的
::: details 点击查看
这两个概念我真的很容易混淆

1. 防抖：指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。简单来说，就是将多次高频触发转化为最后一次触发。
  - 应用场景：
    - 搜索框输入：用户在输入过程中，不需要每次输入都请求服务器，可在用户停止输入一段时间后再发起请求。
    - 窗口大小调整：当调整浏览器窗口大小时，频繁触发 resize 事件，使用防抖可减少不必要的计算。
2. 节流：指在一定时间间隔内，函数只执行一次。不管在这个时间间隔内触发了多少次事件，只有一次有效。
  - 应用场景：
    - 滚动事件：在监听页面滚动事件时，比如实现无限滚动加载数据，使用节流可避免频繁触发加载逻辑。
    - 鼠标点击：防止用户在短时间内多次点击按钮，造成不必要的请求。

c语言教学平台那个笔记管理那块搜索笔记输入框用的防抖，用第三方库lodash实现的
:::
11. vue2响应式原理有什么缺陷
::: details 点击查看
vue2的响应式原理是基于Object.defineProperty()实现的，
1. 不能检测到对象属性的添加和删除。
2. 不能检测到数组索引和长度的变化。
3. 性能开销大
4. 对Map,Set等新的数据结构支持不足
:::
12. vue3的出现解决什么问题
::: details 点击查看
一般vue2有啥缺陷那vue3就解决了啥问题
:::
13. vueRouter有哪些API
::: details 点击查看
useRouter，useRoute
:::
14. 路由的hash模式和history模式有什么区别
::: details 点击查看
1. hash模式：使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。
2. history模式：使用 HTML5 提供的 history API 来实现 URL 的改变，不会刷新页面。
:::
15. vue2中created和mounted钩子函数有什么区别？操作dom在created还是mounted中执行？
看前面
16. `vModel` 是谁的语法糖
::: details 点击查看
这是基础直接秒了
`:modelValue` 和 `@update:modelValue`

不过后来了解到，不同场景下是不同的答案，比如一些表单项，可能是 `:value` 和 `@input/@change` (总之是对应的事件)，在自定义组件里是 `:modelValue` 和 `@update:modelValue`
:::
17. nextTick是什么，干什么用的
::: details 点击查看
1. nextTick 是 Vue 提供的一个异步方法，用于在下次 DOM 更新循环结束之后执行延迟回调。
2. 它的作用是在 DOM 更新完成后，执行一些需要依赖 DOM 渲染结果的操作，确保操作在正确的时机执行。比如操作更新后的DOM,访问更新后的DOM信息
:::
18. html有哪些缓存技术，sessionStorage和localStorage有什么区别？token你一般存在哪里

美团面试问过了

19. 什么是盒模型

前面问过了

20. 标准盒模型和IE模型有什么区别，怎么设置这两种模型

看前面

21. 怎么实现盒子居中
::: details 点击查看
1. 父元素设置display:flex; justify-content:center; align-items:center;
2. 子元素设置position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);父元素设置position:reflect
我就答上来这两个，但他好像也没问是水平居中还是垂直居中，，，那就是两种都居中吧
:::

> 我嘞个八股盛世啊

已入职

总结：完全没想到面试官没有问项目，我还特意复盘了一下项目，不过好在那些八股里面说到的技术我多少了解一些而且用过，所以大部分都讲出来了，最重要的是，双方都没有开摄像头，我也不太紧张


## 第二次面试-2025年4月9日-扬州博学

1. 自我介绍
2. 后台管理项目登录，路由鉴权怎么做的？
3. 使用echarts有没有遇到过更新数据后页面数据没更新的情况，怎么做的？
4. ts有哪些泛型工具
::: details 点击展开
  - Partial: 将属性变为可选
  - Required: 将属性变为必填
  - Readonly: 将属性变为只读
  - Record<K,T>: 将属性类型映射到新的类型
  - Pick<T,K>: 从类型 T 中选择一组属性 K 来构造新类型
  - Omit<T,K>: 从 T 中排出 K 属性，跟Pick相反
    ...
:::
5. 小程序项目里你怎么封装的Promise？
6. es6有哪些新特性（class，箭头函数、async/await等）
::: details 点击展开
箭头函数、扩展运算符、Proxy/Reflect、for...of、Symbol、Map/Set...

[ES2015-ES2025](https://juejin.cn/post/7509424983740760079?searchId=20250822132516D10AAD9E62A7101E4EF2) 这个文章总结的全

回答的时候不要混淆ES6和ES6以外的新特性
:::
7. let,const,var区别？const定义的变量一定不能改变吗？
::: details 点击展开
| 特性 | var | let | const |
| --- | --- | --- | --- |
| 作用域 | 函数作用域 | 块级作用域 | 块级作用域 |
| 变量提升 | 会被提升到作用域顶部，声明提升后默认值为 undefined，可在声明前使用（值为 undefined）。 | 提升到会被提升到作用域顶部，但存在 “暂时性死区”（TDZ），在声明前使用会报错。块顶部 | 会被提升到作用域顶部，但存在 “暂时性死区”（TDZ），在声明前使用会报错。 |
| 重复声明 | 允许在同一作用域内重复声明同一变量，后声明的会覆盖前声明的。 | 不允许在同一作用域内重复声明同一变量（包括与 var 或 const 声明的变量重名），否则会报错。 | 不允许在同一作用域内重复声明同一变量（包括与 var 或 const 声明的变量重名），否则会报错。 |
| 赋值规则 | 声明时可以不赋值，后续可随时修改值 | 声明时可以不赋值，后续可随时修改值 | 声明时必须赋值（否则报错），且赋值后不能修改指向的内存地址（对于基本类型，值不可改；对于引用类型，可修改内部属性，但不能重新赋值为其他对象 / 值）。 |
| 全局变量影响 | 在全局作用域中声明时，会成为 window 对象的属性（浏览器环境）。 | 在全局作用域中声明时，不会成为 window 对象的属性，仅作为全局变量存在。 | 在全局作用域中声明时，不会成为 window 对象的属性，仅作为全局变量存在。 |

const 声明的变量如果是基本数据类型，值不能改变；如果是引用数据类型，引用地址不能改变，但是引用地址指向的内存空间可以改变。
比如：

```js
const a = 1
a = 2 // 报错
const obj = {
  name:'陈下饭',
  age:20
}
obj.name = '陈下饭2' // 不报错
obj.age = 21 // 不报错
obj = {
  name:'陈下饭3',
  age:22
} // 报错
```
:::

这个面试通过了，但我拒绝了，因为我那时在准备两个比赛还有个自己的项目，所以没去，而且这家公司蛮小的，也不是专门搞互联网的，还不如沉淀一下。


## 第一次面试-2025年3月5日-泛在能源

1. 自我介绍
2. 项目提问
  - 大屏数据展示怎么做的屏幕适应
  - 有什么难点？
3. 八股
  - 了解闭包吗？有什么使用场景？

    ::: details 点击展开
    闭包是指内部函数访问外部函数的变量。使用场景：实现共有变量、柯理化函数、防抖节流、存储缓存结果避免重复计算、封装模块防止全局作用域污染。
    [JavaScript知识点-闭包](https://juejin.cn/post/7373488886460366900)
    :::

  - vue有哪些API？

    ::: details 点击展开
    [vue3的API](https://cn.vuejs.org/api/) 直接看这个链接里的就行了，回答的时候区分一下全局API和组合式API,除了回答一些常用的还可以答几个特殊的，比如回答有nextTick，toRef如果有在项目用到可以稍微说一下吧
    :::

  - vue生命周期钩子
    ::: details 点击展开
    生命周期图示：
    ![生命周期图示](/images/lifecycle.png)

    [vue3的生命周期钩子](https://cn.vuejs.org/api/composition-api-lifecycle.html)

    回答的时候要分清面试官说的是生命周期过程还是要你回答有哪些生命周期钩子，我就是没有分清，有时候太紧张了，回答的时候顺便说一下这个钩子什么时候用的
    :::

4. 反问

   ...省略，我问的没有含金量


总结：这是我第一次面试，那时写完简历才看了几天的八股，项目还是临时复习的，忽略了自我介绍，所以没准备这个，不到30s就说完了，然后陷入一阵尴尬...
但这次面完后自己根据表现回去调整了一下，在第二次面试的时候还是准备了一些东西的
