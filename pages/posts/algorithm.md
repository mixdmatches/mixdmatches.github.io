---
layout: post
title: 算法日记
date: 2025-09-08
categories:
  - 技术
tags:
  - 算法
---

### 1. 27.移除元素 （简单）

链接：[27. 移除元素](https://leetcode.cn/problems/remove-element/)

题目描述：

给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素。元素的顺序可能发生改变。然后返回 nums 中与 val 不同的元素的数量。

假设 nums 中不等于 val 的元素数量为 k，要通过此题，您需要执行以下操作：

- 更改 nums 数组，使 nums 的前 k 个元素包含不等于 val 的元素。nums 的其余元素和 nums 的大小并不重要。
- 返回 k。


::: details 暴力解法-双循环
```js:line-numbers
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let size = nums.length
  for(let i = 0; i < size;i++){
    if(nums[i] === val){
      for(let j = i;j < size;j++){
        nums[j] = nums[j + 1]
      }
      size-- // [!code warning] // 这里我一开始忘记-1了
      i-- // [!code warning] // 这里也是要注意，因为前面的元素都向前移动了一位，所以这里要-1
    }
  }
  return size
}
```
我一开始忘了要 `size--` ，因为删除了一个元素，所以需要减1

然后因为 `i` 后面的所有元素都向前移动了一位，所以这里要-1，`i` 处的元素是被覆盖的，所以 `i` 也要往前移动一位，避免下次循环漏掉了覆盖了 `i` 处的元素

:::


::: details 双指针-快慢指针
```js:line-numbers
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let slowIndex = 0
  for(let fastIndex = 0; fastIndex < nums.length;fastIndex++){
    if(nums[fastIndex] !== val){
      nums[slowIndex++] = nums[fastIndex]
    }
  }
  return slowIndex
}
```

为什么条件是等于 不是 不等于呢
:::
