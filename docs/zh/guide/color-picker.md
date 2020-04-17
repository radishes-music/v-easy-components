---
meta:
  - name: description
    content: v-easy-components color-picker page
  - name: keywords
    content: v-easy-components color-picker
---

# ColorPicker 颜色选择器 <Badge text="0.8.1+"/>

此组件类似于 [Element](https://element.eleme.io/#/zh-CN/component/color-picker)，只是在其基础上做了一些修改，在项目中尽量使用 [Element](https://element.eleme.io/#/zh-CN/component/color-picker) 提供的颜色选择器。

## 与 [Element](https://element.eleme.io/#/zh-CN/component/color-picker) 组件的比较

### 优点

+ 可与 `v-tip` 命令结合，使用在任何组件或自定义DOM结构中。
+ 支持 `simple` 属性，并不需要点击触发，直接渲染在视图中。

### 缺点

+ 只有作者一个人维护，相应的Bug修改不及时，当然你也可以 [Pull](https://github.com/Linkontoask/v-easy-components/pulls)
+ 没有相应的设计资源

## 基本用法

<div>
    <preview-code _id="0">
        <template #default>
          <ve-color-picker v-model="value"></ve-color-picker>
          <ve-color-picker v-model="value1"></ve-color-picker>
        </template>
        <template #txt>
            <div>使用 <em>v-model</em> 绑定颜色的值，绑定的值需要一个字符串类型。外部修改此变量也会影响到选择器的颜色</div>
        </template>
    </preview-code>
</div>

::: slot code0
``` vue
<template>
  <ve-color-picker v-model="value"></ve-color-picker>
  <ve-color-picker v-model="value1"></ve-color-picker>
</template>

<script>
  export default {
    data() {
      return {
        value: '#166AE0',
        value1: ''
      }
    },
  }
</script>
```
:::

## simple 的使用

<div>
    <preview-code _id="1">
        <template #default>
          <div style="width: 100px;height: 100px;" :style="{background: value2}"></div>
          <ve-color-picker v-model="value2" simple @change="handleChange"></ve-color-picker>
        </template>
        <template #txt>
            <div>点击确定按钮之后会发出 <em>change</em> 事件</div>
        </template>
    </preview-code>
</div>

::: slot code1
``` vue
<template>
  <div style="width: 100px;height: 100px;" :style="{background: value}"></div>
  <ve-color-picker v-model="value" simple @change="handleChange"></ve-color-picker>
</template>

<script>
  export default {
    data() {
      return {
        value: '#166AE0',
      }
    },
    methods: {
      handleChange() {},
    }
  }
</script>
```
:::

## 与 `v-tip` 结合

这里只是介绍了如何在 `v-tip` 中使用 `ColorPicker` ，`v-tip` 的 `VNode` 属性还有更多妙用，因为它需要的是一个 `VNode`

<div>
    <preview-code _id="2">
        <template #default>
          <div style="width: 100px;height: 100px;" :style="{background: value3}" v-tip.right="{VNode: renderColorPicker, effect: 'light', target: 'click'}"></div>
        </template>
    </preview-code>
</div>

::: slot code2
``` vue
<template>
  <div style="width: 100px;height: 100px;" 
       :style="{background: value3}" 
       v-tip.right="{VNode: renderColorPicker, effect: 'light', target: 'click'}"></div>
</template>

<script>
  import { ColorPicker } from 'v-easy-components';

  export default {
    data() {
      return {
        value: 'hsl(50, 84%, 64%)',
      }
    },
    methods: {
      clickHandler(value) {
        this.value = value;
      },
      renderColorPicker() {
        const h = this.$createElement;
        return h(ColorPicker, {
          props: {
            value: this.value,
            simple: true,
            'color-format': 'hsl'
          },
          on: {
            input: this.clickHandler,
          },
        })
      }
    }
  }
</script>
```
:::

## ColorPicker Attributes

<div-box _id="tableAttributes"></div-box>

::: slot tableAttributes
| Parameter | Description | Type | Optional value | Defaults |
| :--- | :--- | :--- | :--- | :--- |
| simple | 是否为弹出式的风格 | boolean | true / false | false |
| size | 设置颜色触发器的大小 | number | - | 34 |
| width | 颜色选择器主题部分的宽度 | number | - | 300 |
| height | 颜色选择器主题部分的高度 | number | - | 150 |
| color-format | 绑定颜色的格式 | string | hsl / hsv / hex / rgb | hex |

:::

## ColorPicker Event

| Event name | Event Description | Callback parameter |
| :--- | :--- | :--- |
| change | 当绑定值变化时触发 | 当前值 |

<script>
  import { ColorPicker } from '@/index.js';
  
  export default {
    data() {
      return {
        value: '#166AE0',
        value1: '',
        value2: '#166AE0',
        value3: 'hsl(50, 84%, 64%)',
      }
    },
    methods: {
      handleChange() {},
      handleInput() {},
      clickHandler(value) {
        this.value3 = value;
      },
      renderColorPicker() {
        const h = this.$createElement;
        return h(ColorPicker, {
          props: {
            value: this.value3,
            simple: true,
            'color-format': 'hsl'
          },
          on: {
            input: this.clickHandler,
          },
        })
      }
    }
  }
</script>
