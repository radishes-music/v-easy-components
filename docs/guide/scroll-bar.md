---
tags: ScrollBar
meta:
  - name: description
    content: v-easy-components scroll-bar page
  - name: keywords
    content: v-easy-components scroll-bar
---

# ScrollBar <Badge text="1.0.0+"/>

The `ScrollBar` component is to unify the style of the browser scroll bar and solve the ugly style of the built-in scroll bar.  
`ScrollBar` is to monitor the built-in scroll bar and use Promise to change its position information in the scroll task, which not only solves the real-time problem, but also optimizes the performance of` ScrollBar`.

## Basic usage

The basic usage is described below. In most cases, you don't need what happens inside the relationship.

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
            <div>You only need to place the element that takes over the scroll bar under the <em>ScrollBar</em> component, and give it a width and height. The latter will be left to it. Note: There can only be one root element in <em>ScrollBar</em></div>
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

## Bar Style

In some scenarios, it may be necessary to always display the scroll bar, or control the size of the scroll bar.

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
            <div>If you want to control the size of the scroll bar, you can pass in <em>size</em>, which supports strings or numbers. If you want to display the scroll bar all the time, you can pass in <em>always</em>, which accepts a value of type <em>Boolean</em></div>
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

## ScrollBar Attributes

<div-box _id="tableAttributes"></div-box>

::: slot tableAttributes
| Parameter | Description | Type | Optional value | Defaults |
| :--- | :--- | :--- | :--- | :--- |
| size | Scroll bar size | string / number | - | 6 |
| always | Whether to keep displaying scroll bars | boolean | true / false | false |
:::
