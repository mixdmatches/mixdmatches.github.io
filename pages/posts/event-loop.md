---
layout: post
title: 关于事件循环
date: 2025-08-15
updated: 2025-08-25
categories:
  - 技术
tags:
  - 事件循环
---

### 前言

关于这个事件循环，最初在慧策笔试的时候碰到过，美团一面的时候也被拷打过，面试官建议我再多去了解一下，所以写这篇文章加深一下对事件循环的理解

### 事件循环概念

事件循环（Event Loop）是 JavaScript 运行时的核心机制，用于处理异步操作、用户交互等事件，保证代码按顺序执行。
JavaScript 是单线程语言，意味着同一时间只能执行一个任务。为了处理异步操作（如网络请求、定时器等），
JavaScript 引入了事件循环机制。事件循环负责执行代码、收集和处理事件以及执行队列中的子任务。

### 工作原理
JavaScript 运行时主要包含以下几个部分：

- 调用栈（Call Stack）：用于执行同步代码，遵循后进先出（LIFO）原则。当函数被调用时，会在调用栈中创建一个新的栈帧，函数执行完毕后，栈帧出栈。
- 任务队列（Task Queue）：存放异步操作完成后待执行的回调函数。任务队列又分为宏任务队列（MacroTask Queue）和微任务队列（MicroTask Queue）。
- 事件循环（Event Loop）：持续检查调用栈是否为空，若为空，则从任务队列中取出任务放入调用栈执行。

事件循环的工作流程如下：

- 检查调用栈是否为空，如果不为空，执行调用栈中的任务。
- 若调用栈为空，检查微任务队列是否有任务，若有则依次执行，直到微任务队列为空。
- 微任务队列清空后，从宏任务队列中取出一个任务放入调用栈执行，执行完成后，重复步骤 2 和 3。

### 宏任务与微任务
 - 宏任务（MacroTask）：常见的宏任务有 setTimeout、setInterval、setImmediate（Node.js）、requestAnimationFrame（浏览器）、I/O 操作、UI 渲染等。
 - 微任务（MicroTask）：常见的微任务有 Promise.then、async/await（本质上是基于 Promise）、MutationObserver（浏览器）、process.nextTick（Node.js）等。

### 输出代码题练习

最简单的：

``` js
console.log('script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('promise1');
  })
  .then(() => {
    console.log('promise2');
  });

console.log('script end');
```

::: details 点击查看输出顺序
script start

script end

promise1

promise2

setTimeout
:::

执行过程：
1. 执行全局代码，将 `console.log('script start')` 压入调用栈，执行完毕后出栈。
2. 遇到 `setTimeout` 定时器，将其回调函数压入宏任务队列。
3. 遇到 `Promise.resolve()`，将其回调函数压入微任务队列。
4. 执行 `console.log('script end')`，将其压入调用栈，执行完毕后出栈。
5. 调用栈为空，检查微任务队列，发现有 `Promise.then` 回调函数，将其压入调用栈，执行完毕后出栈。
6. 再次检查微任务队列，发现还有 `Promise.then` 回调函数，将其压入调用栈，执行完毕后出栈。
7. 微任务队列清空，从宏任务队列中取出 `setTimeout` 回调函数，将其压入调用栈，执行完毕后出栈。
8. 调用栈为空，事件循环结束。

``` js
async function async1() {
  console.log('async1 start');
  await new Promise(resolve => {
    console.log('promise1');
    setTimeout(() => {
      resolve();
      console.log('setTimeout1');
    }, 0);
  });
  console.log('async1 end');
}

async function async2() {
  console.log('async2 start');
  await new Promise(resolve => {
    setTimeout(() => {
      resolve();
      console.log('setTimeout2');
    }, 0);
  });
  console.log('async2 end');
}

console.log('script start');
async1();
async2();
new Promise(resolve => {
  console.log('promise2');
  resolve();
}).then(() => {
  console.log('promise3');
});
console.log('script end');
```
::: details 点击查看输出顺序

script start

async1 start

promise1

async1 end

setTimeout1

async2 start

async2 end

setTimeout2

promise2

script end

promise3
:::

执行过程：
1. 执行全局代码，将 `console.log('script start')` 压入调用栈，执行完毕后出栈。
2. 遇到 `async1` 函数，将其压入调用栈，执行 async1 函数内部代码。
3. 执行 `console.log('async1 start')`，将其压入调用栈，执行完毕后出栈。
4. 遇到 `await` 关键字，将 `await` 后面的 `Promise` 压入微任务队列，将 `async1` 函数的剩余代码压入调用栈。
5. 执行 `console.log('promise1')`，将其压入调用栈，执行完毕后出栈。
6. 遇到 `setTimeout` 定时器，将其回调函数压入宏任务队列。
7. 执行 `console.log('async1 end')`，将其压入调用栈，执行完毕后出栈。
8. 调用栈为空，检查微任务队列，发现有 `Promise.then` 回调函数，将其压入调用栈，执行完毕后出栈。
9. 再次检查微任务队列，为空，从宏任务队列中取出 `setTimeout` 回调函数，将其压入调用栈，执行完毕后出栈。
10. 调用栈为空，事件循环结束。

如果没有 `await` 关键字的话，输出顺序如下

::: details 点击查看输出顺序
script start

async1 start

promise1

async1 end

async2 start

async2 end

promise2

script end

promise3

setTimeout1

setTimeout2
:::

**await 的作用**：
由于await会暂停当前async函数，将后续的代码包装成微任务，只有当promise改变状态（promise完成后），才会恢复执行

``` js
console.log("🚀 开始");

Promise.resolve()
  .then(() => console.log("1️⃣ 第一个.then"))
  .then(() => console.log("2️⃣ 第二个.then"))

Promise.resolve().then(() => console.log("3️⃣ 外部.then"))
```

::: details 点击查看输出顺序
``` text
🚀 开始
1️⃣ 第一个.then
3️⃣ 外部.then
2️⃣ 第二个.then
```
:::

这题是我之前做错的，我当时误以为第二个then会在外部then之前执行，但是实际上是在外部then之后执行的。正确理解是每个.then只有在前一个Promise解决后才会注册

### 相关资料

https://www.ruanyifeng.com/blog/2014/10/event-loop.html

https://segmentfault.com/a/1190000046362554

https://zhuanlan.zhihu.com/p/33058983

https://juejin.cn/post/6844904079353708557?searchId=20250815220628C3C5642C55BE65D2B440#heading-0
