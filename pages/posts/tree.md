---
title: 树形控件
date: 2025-08-27
categories:
  - 技术
  - 实习
---


## 树形控件

先贴代码：

treeNode:

``` vue
<script setup lang="ts">
import { computed } from 'vue'

interface TreeNodeType {
  id: string | number
  label: string
  children?: TreeNodeType[]
  isExpanded?: boolean
}

const props = defineProps<{
  node: TreeNodeType
  level: number
  nodeKey: string | number
}>()
const emit = defineEmits<{
  nodeClick: [node: TreeNodeType]
}>()

const tree_node = computed(() => props.node)

const toggleNode = () => {
  if (tree_node.value.children?.length) {
    tree_node.value.isExpanded = !tree_node.value.isExpanded
  }
}

const handleClick = () => {
  emit('nodeClick', tree_node.value)
}
</script>

<template>
  <li :key="nodeKey" class="tree-node">
    <div
      class="node-content"
      :class="{
        'node-expanded': tree_node.isExpanded
      }"
      :style="{ paddingLeft: `${level * 16}px` }"
    >
      <span
        :class="[
          'toggle-icon',
          tree_node.isExpanded ? 'icon-add' : 'icon-sub',
          {
            'icon-none': !tree_node.children?.length
          }
        ]"
        @click="toggleNode"
      ></span>

      <span
        v-if="tree_node.children?.length > 0"
        :class="[
          'node-icon',
          tree_node.isExpanded ? 'icon-open' : 'icon-close'
        ]"
      >
      </span>

      <span v-else :class="['node-icon', 'icon-doc']"></span>

      <span class="node-label" @click="handleClick">{{ tree_node.label }}</span>
    </div>

    <ul
      v-if="tree_node.children?.length && tree_node.isExpanded"
      class="tree-children"
    >
      <TreeNode
        v-for="child in tree_node.children"
        :key="child.id"
        :node="child"
        :node-key="child.id"
        :level="level + 1"
        @node-click="$emit('nodeClick', $event)"
      />
    </ul>
  </li>
</template>

<style scoped>
.tree-node {
  user-select: none;
}

.node-content {
  display: flex;
  align-items: center;
  padding: 2px 8px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
  .toggle-icon {
    width: 18px;
    height: 18px;
    display: inline-block;
    vertical-align: middle;
    border: 0 none;
    cursor: pointer;
    outline: none;
    background-color: transparent;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-image: url(@/assets/images/zTreeStandard.png);
  }
  .icon-none {
    background: none;
  }
  .icon-add {
    background-position: -92px 0;
  }
  .icon-sub {
    background-position: -74px -18px;
  }
  .icon-open {
    background-position: -110px -16px;
    vertical-align: top;
  }
  .icon-close {
    background-position: -110px 0;
    vertical-align: top;
  }
}

.node-icon {
  line-height: 0;
  margin: 0;
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: middle;
  border: 0 none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-image: url(@/assets/images/zTreeStandard.png);
}

.icon-doc {
  background-position: -110px -32px;
  vertical-align: top;
}

.node-label {
  color: #333;
  padding-left: 4px;
  &:hover {
    text-decoration: underline;
  }
}

.tree-children {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
</style>

```

treeView:

``` vue
<script setup lang="ts">
import TreeNode from './TreeNode.vue'

interface TreeNodeType {
  id: string | number
  label: string
  children?: TreeNodeType[]
  isExpanded?: boolean
}

defineProps({
  treeData: {
    type: Array as () => TreeNodeType[],
    required: true
  }
})

const emit = defineEmits<{
  nodeClick: [node: TreeNodeType]
}>()

const handleNodeClick = (node: TreeNodeType) => {
  emit('nodeClick', node)
}
</script>

<template>
  <div class="tree-view">
    <ul class="tree-list">
      <TreeNode
        v-for="node in treeData"
        :key="node.id"
        :node-key="node.id"
        :node="node"
        :level="0"
        @node-click="handleNodeClick"
      />
    </ul>
  </div>
</template>

<style scoped>
.tree-view {
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 14px;
}

.tree-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
</style>

```
