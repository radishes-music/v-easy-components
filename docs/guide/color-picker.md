---
meta:
  - name: description
    content: v-easy-components color-picker page
  - name: keywords
    content: v-easy-components color-picker
---

# ColorPicker <Badge text="0.8.1+"/>

This component is similar to [Element](https://element.eleme.io/#/zh-CN/component/color-picker), except that some modifications have been made to it, and [Element](https://element.eleme.io/#/en-GB/component/color-picker).

## Comparison with [Element](https://element.eleme.io/#/en-GB/component/color-picker) component

### Advantage

+ Can be combined with `v-tip` command to use in any component or custom DOM structure.
+ Support `simple` property, no need to click to trigger, render directly in the view.

### Disadvantage

+ Only the author maintains it, and the corresponding bug modification is not timely. Of course, you can also [Pull](https://github.com/Linkontoask/v-easy-components/pulls)
+ No corresponding design resources

## Basic usage

<div>
    <preview-code _id="0">
        <template #default>
          <ve-color-picker v-model="value"></ve-color-picker>
          <ve-color-picker v-model="value1"></ve-color-picker>
        </template>
        <template #txt>
            <div>Use <em>v-model</em> to bind the value of the color. The bound value needs to be a string type. Modifying this variable externally will also affect the color of the selector</div>
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

## Use of simple

<div>
    <preview-code _id="1">
        <template #default>
          <div style="width: 100px;height: 100px;" :style="{background: value2}"></div>
          <ve-color-picker v-model="value2" simple @change="handleChange"></ve-color-picker>
        </template>
        <template #txt>
            <div>The <em>change</em> event is emitted after clicking the OK button</div>
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

## Combined with `v-tip`

Here is just how to use `ColorPicker` in` v-tip`. The `VNode` property of` v-tip` has more usefulness, because what it needs is a `VNode`.

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
| simple | Whether it is pop-up style | boolean | true / false | false |
| size | Set the size of the color trigger | number | - | 34 |
| width | Color picker theme section width | number | - | 300 |
| height | The height of the color picker theme | number | - | 150 |
| color-format | Format of bound colors | string | hsl / hsv / hex / rgb | hex |

:::

## ColorPicker Event

| Event name | Event Description | Callback parameter |
| :--- | :--- | :--- |
| change | Triggered when the binding value changes | The current value |

<script>
  import { ColorPicker } from '@/index.js'
  
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
