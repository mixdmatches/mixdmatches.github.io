---
layout: post
title: Vue+ts项目引入css文件报错问题解决
date: 2026-03-16
updated: 2026-03-16
categories:
  - 问题
  - 技术
tags:
  - 笔记
---

### 问题

在做AI对话项目时处理代码高亮，引入highlight的css文件报错
![alt text](/images/image.png)

### 解决办法

在 `tsconfig.app.json` 文件里的 `include` 中加入 `env.d.ts` 文件

![alt text](/images/ts_env.png)

### 技术原理
1. TypeScript 编译过程 ：TypeScript 编译器会根据 tsconfig.json 及其引用的配置文件来确定要编译的文件
2. 类型声明查找 ：编译器会查找所有包含在 include 选项中的文件，包括类型声明文件
3. 模块解析 ：当遇到 import 'highlight.js/styles/atom-one-dark.css' 这样的导入时，编译器会查找对应的类型声明
4. 类型检查 ：如果找到类型声明，编译器会验证导入是否正确；如果没有找到，就会报错

### env.d.ts文件是做什么的

`env.d.ts` 是 TypeScript 项目中的类型声明文件，在 Vue 项目中扮演着重要角色。下面详细解释它的作用：

#### 1. 基本概念

`env.d.ts` 是一个 TypeScript 声明文件（以 `.d.ts` 为扩展名），用于：
- 声明全局类型
- 扩展内置类型
- 为第三方模块添加类型声明
- 解决 TypeScript 编译时的类型问题

#### 2. 在 Vue 项目中的作用

在 Vue 3 + TypeScript 项目中，`env.d.ts` 文件通常包含以下内容：

```typescript
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
```

这段代码的作用是：
- 引用 Vite 客户端类型定义
- 为 `.vue` 文件添加类型声明，使 TypeScript 能够正确识别 Vue 组件


### tsconfig.app.json 文件是做什么的

`tsconfig.app.json` 是 Vue 3 + TypeScript 项目中的 TypeScript 配置文件，专门用于配置应用程序代码的编译选项。

#### 1. 基本概念

`tsconfig.app.json` 是 TypeScript 配置文件的一种，用于：
- 配置应用程序代码的 TypeScript 编译选项
- 定义需要编译的文件范围
- 指定类型声明文件的查找路径
- 与其他 tsconfig 文件（如 tsconfig.json、tsconfig.node.json）配合使用


#### 2. 主要作用

1. **继承基础配置**：通过 `extends` 字段继承 `tsconfig.json` 中的基础配置
2. **指定包含文件**：通过 `include` 字段指定需要编译的文件范围，包括：
   - TypeScript 源文件（.ts）
   - 类型声明文件（.d.ts）
   - TypeScript JSX 文件（.tsx）
   - Vue 单文件组件（.vue）
   - 环境类型声明文件（env.d.ts）
3. **排除文件**：通过 `exclude` 字段排除不需要编译的文件，如测试文件

#### 3. 与 CSS 导入问题的关系

在解决 CSS 文件导入报错问题时，`tsconfig.app.json` 的作用是：
- 确保 `include` 数组中包含了 `env.d.ts` 文件
- 让 TypeScript 编译器能够找到并加载 `env.d.ts` 中的类型声明
- 从而使编译器能够正确识别 CSS 文件的导入，避免类型错误

#### 4. 与其他 tsconfig 文件的关系

- `tsconfig.json`：基础配置文件，定义通用的 TypeScript 编译选项
- `tsconfig.app.json`：应用程序配置文件，专门用于应用程序代码
- `tsconfig.node.json`：Node.js 配置文件，用于 Vite 等构建工具的配置代码

