---
tags: ScrollBar
meta:
  - name: description
    content: v-easy-components scroll-bar page
  - name: keywords
    content: v-easy-components scroll-bar
---

# ScrollBar 滚动条 <Badge text="1.0.0+"/>

`ScrollBar`组件是为了统一浏览器滚动条的样式，解决内置滚动条样式丑陋。  
`ScrollBar`是通过监听内置滚动条，在滚动任务中使用Promise改变其位置信息，既解决了实时性的问题，也优化了`ScrollBar`的性能。

## 基本用法

下面介绍基本用法，大多数情况你不需要关系内部发生了什么。

<div>
    <preview-code _id="0">
        <template #default>
            <div style="width: 300px;margin: 0 auto">
                <ve-scroll>
                  <ul style="height: 300px">
                    <li v-for="item in array" :key="item" >
                      {{ item + str}}
                    </li>
                  </ul>
                </ve-scroll>
            </div>
        </template>
        <template #txt>
            <div>你只需要将接管滚动条的元素放置于<em>ScrollBar</em>组件下，并且给定宽高。后面的事情就交给它。注意：<em>ScrollBar</em>里面只能有一个根元素</div>
        </template>
    </preview-code>
</div>

::: slot code0
```vue
<template>
    <div style="width: 300px;margin: 0 auto">
        <ve-scroll>
            <ul style="height: 300px">
                <li v-for="item in array" :key="item" >
                    {{ item + str }}
                </li>
            </ul>
        </ve-scroll>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                array: Array(100).fill(null).map((o, i) => i),
                str: Array(20).fill(0).join('+')
            }
        },
    }
</script>
```
:::

## Bar 样式

在某些场景下，可能要一直显示滚动条，或者控制滚动条的大小。

<div>
    <preview-code _id="1">
        <template #default>
            <div style="width: 300px;margin: 0 auto">
                <ve-scroll size="8" always>
                  <ul style="height: 300px">
                    <li v-for="item in array" :key="item" >
                      {{ item }}
                    </li>
                  </ul>
                </ve-scroll>
            </div>
        </template>
        <template #txt>
            <div>如果要控制滚动条的大小，可以传入<em>size</em>，它支持字符串或数字。如果要一直显示滚动条，可以传入<em>always</em>，它接受一个<em>Boolean</em>类型的值</div>
        </template>
    </preview-code>
</div>

::: slot code1
```vue
<template>
    <div style="width: 300px;margin: 0 auto">
        <ve-scroll size="8" always>
            <ul style="height: 300px">
                <li v-for="item in array" :key="item" >
                    {{ item }}
                </li>
            </ul>
        </ve-scroll>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                array: Array(100).fill(null).map((o, i) => i)
            }
        },
    }
</script>
```
:::

<script>
    export default {
        data() {
            return {
                array: Array(100).fill(null).map((o, i) => i),
                str: Array(20).fill(0).join('+')
            }
        },
    }
</script>

## ScrollBar 属性

<div-box _id="tableAttributes"></div-box>

::: slot tableAttributes
| Parameter | Description | Type | Optional value | Defaults |
| :--- | :--- | :--- | :--- | :--- |
| size | 滚动条大小 | string / number | - | 6 |
| always | 是否要一直显示滚动条 | boolean | true / false | false |
:::
