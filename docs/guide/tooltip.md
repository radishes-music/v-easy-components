---
meta:
  - name: description
    content: v-easy-components v-tip page
  - name: keywords
    content: v-easy-components v-tip
---

# Tooltip

Hover message after mouse hover, support vNode node rendering

## Basic usage

Demonstrate the basic usage of vTip. If the input is a string, the default is the content of the message box. You can use placement: to control the direction.

<div>
  <preview-code _id="0">
    <template #default>
      <div class="box">
        <div class="top" v-tip="'i am vTip . top'">TOP</div>
        <div class="left" v-tip="{content: 'i am vTip . left', placement: 'left'}">LEFT</div>
        <div class="right" v-tip="{content: 'i am vTip . right', placement: 'right'}">RIGHT</div>
        <div class="bottom" v-tip="{content: 'i am vTip . bottom', placement: 'bottom'}">BOTTOM</div>
      </div>
    </template>
    <template #txt>
      <div>The <em>v-tip</em> command supports passing in both <em>String</em> and <em>Object</em> data. <a href="#options">Object</a> configuration reference to the documentation below</div>
    </template>
  </preview-code>
</div>

::: slot code0
```vue
<template>
  <div v-tip="'i am vTip . top'">TOP</div>
  <div v-tip="{content: 'i am vTip . left', placement: 'left'}">LEFT</div>
  <div v-tip="{content: 'i am vTip . right', placement: 'right'}">RIGHT</div>
  <div v-tip="{content: 'i am vTip . bottom', placement: 'bottom'}">BOTTOM</div>
</template>
```
:::

## Use `v-tip` modifier

If `placement` is also specified on the bound value, then the definition of the modifier is

<div>
  <preview-code _id="4">
    <template #default>
      <div class="box">
        <div class="top" v-tip.top="'Top'">TOP</div>
        <div class="left" v-tip.left="'Left'">LEFT</div>
        <div class="right" v-tip.right="'Right'">RIGHT</div>
        <div class="bottom" v-tip.bottom="'Bottom'">BOTTOM</div>
      </div>
    </template>
  </preview-code>
</div>

::: slot code4
```vue
<template>
  <div class="box">
    <div class="top" v-tip.top="'Top'">TOP</div>
    <div class="left" v-tip.left="'Left'">LEFT</div>
    <div class="right" v-tip.right="'Right'">RIGHT</div>
    <div class="bottom" v-tip.bottom="'Bottom'">BOTTOM</div>
  </div>
</template>
```
:::

## Theme

Using different themes in the context of some web pages can have better visual effects

<div>
  <preview-code _id="5">
    <template #default>
      <div class="box">
        <div class="inline" v-tip.top="{content: 'i am light vTip', effect: 'light'}">TOP light</div>
        <div class="inline" v-tip.top="{content: 'i am dark vTip', effect: 'dark'}">TOP dark</div>
      </div>
    </template>
  </preview-code>
</div>

::: slot code5
```vue
<template>
  <div class="inline" v-tip.top="{content: 'i am light vTip', effect: 'light'}">TOP light</div>
  <div class="inline" v-tip.top="{content: 'i am dark vTip', effect: 'dark'}">TOP dark</div>
</template>
```
:::

## Triggering conditions

Use the pop-up tip content to have more interactive ways and more application scenarios

<div>
  <preview-code _id="6">
    <template #default>
      <div class="box">
        <div class="inline" v-tip.top="{content: 'i am click vTip', target: 'click'}">Using click events</div>
        <div class="inline" v-tip.top="{content: 'i am mouseenter vTip'}">TOP</div>
      </div>
    </template>
  </preview-code>
</div>

::: slot code6
```vue
<template>
  <div class="inline" v-tip.top="{content: 'i am click vTip', target: 'click'}">Using click events</div>
  <div class="inline" v-tip.top="{content: 'i am mouseenter vTip'}">TOP</div>
</template>
```
:::

## Custom animation

use `transition:` to define the info box to pop and hide the animation

<div>
  <preview-code _id="1">
    <template #default>
      <div class="box">
        <div class="top" v-tip="{content: 'i am vTip . top', transition: 'animation-top'}">TOP</div>
      </div>
    </template>
    <template #txt>
      <div>Note:
      <ul>
        <li>The component has a default style. To override the style, please increase css <a href="https://gitbook.linkorg.club/css/cssweights" target="_blank">Weights</a></li>
        <li><em>v-tip</em> instances will be mounted directly to <em>body</em> , so <em>animation-top</em> can't have <i>scope</i></li>
      </ul>
      </div>
    </template>
  </preview-code>
</div>

::: slot code1
```vue
<template>
  <div class="top" v-tip="{content: 'i am vTip . top', transition: 'animation-top'}">TOP</div>
</template>

<style lang="sass">
  .animation-top-enter-active, .animation-top-leave-active
    transition: top .2s, opacity .2s !important
    z-index: 9
  .animation-top-enter, .animation-top-leave-to
    top: -12px !important
    opacity: 0
</style>
```
:::

## The delay disappears and the mouse moves in and off automatically disappears

use hideAfter `enterable` Control delay time and mouse shift in to turn off automatic disappearance

<div>
  <preview-code _id="2">
    <template #default>
      <div class="box">
        <div class="inline" v-tip="{content: 'i am vTip . hideAfter', enterable: true, hideAfter: 1000}">Disappear after one second</div>
        <div class="inline" v-tip="{content: 'i am vTip . enterable', enterable: true}">Mouse moves in and off automatically disappears</div>
      </div>
    </template>
  </preview-code>
</div>

::: slot code2
```vue
<template>
  <div class="inline" v-tip="{content: 'i am vTip . hideAfter', enterable: true, hideAfter: 1000}">Disappear after one second</div>
  <div class="inline" v-tip="{content: 'i am vTip . enterable', enterable: true}">Mouse moves in and off automatically disappears</div>
</template>
```
:::

## customize **VNode** and **html** <Badge text="0.6.1+"/>

Use `VNode`: Custom message box content

Use `html`: you can also customize the content of the message box

<div>
  <preview-code _id="3">
    <template #default>
      <div class="box div-flex">
        <div v-tip="{placement: 'top', VNode: renderVNode}">Target</div>
        <div v-tip.top="{html: '<strong>Hello</strong><p>Say hello</p>'}">Target</div>
      </div>
    </template>
    <template #txt>
      <div>Use the official recommended render function to render a template or use extend to introduce a component template. Let's create a dynamic template using jsx syntax.(
        <a href="https://github.com/vuejs/babel-plugin-transform-vue-jsx" target="_blank">Use with bable plugin</a>),
        <a href="https://cn.vuejs.org/v2/guide/render-function.html" target="_blank">Official document</a>
      </div>
    </template>
  </preview-code>
</div>

::: slot code3
```vue
<template>
  <div>
    <div class="box" v-tip="{placement: 'top', VNode: renderVNode}">Target</div>
    <div v-tip.top="{html: '<strong>Hello</strong><p>Say hello</p>'}">Target</div>
  </div>
</template>

<script>
  export default {
    methods: {
      renderVNode() {
        const h = this.$createElement;
        return h('div', null, [
          h('ve-button', {
            on: {
              click: () => {
                this.$msg({type: 'success', message: 'Hello VEasy'})
              }
            }
          }, ['submit'])
        ])
      },
    }
  }
</script>
```
:::

## Options

<div-box _id="optionsAttributes"></div-box>

::: slot optionsAttributes
| Attribute |	Description |	Type | Default |
| :--- | :--- | :--- | :--- |
| content | The contents of the tip box. If the value of the v-tip is a string, then the string will be used to fill the content.	| any () / Any content that is supported by vue	| - |
| Class | V-tip class, note the uppercase "C"	| Array / String / Object / Function	| - |
| VNode | V-tip content node, supporting dynamic templates.	| VNode	| - |
| placement | V-tip position, optional top / left / bottom / right | String |	top |
| offset | Length of offset	| Number | 0 |
| hideAfter | Automatically hide delay after v-tip appears, in milliseconds	| Number | 200 |
| transition | Define gradient animation | String | fade |
| enterable | Whether the mouse can enter the v-tip	| Boolean | false |
| html | Render the contents of the tip box using `innerHTML` | String | - |
| target | How to trigger pop-up content | String | mouseenter (Optional value: click) |
| effect | What theme to use | String | dark (Optional value: light) |
:::

## v-tip Modifier

| Modifier | Description | Type | Optional value |
| :--- | :--- | :--- | :--- |
| v-tip.[direction] | The direction of the tip box relative to the target content | String | left / right / top / bottom |

<script>
  export default {
    methods: {
      renderVNode() {
        const h = this.$createElement;
        return h('div', null, [
          h('ve-button', {
            on: {
              click: () => {
                this.$msg({type: 'success', message: 'Hello v-easy-components'})
              }
            }
          }, ['submit'])
        ])
      },
    }
  }
</script>

<style scoped lang="sass">
  .div-flex
    display: flex
    justify-content: space-around
    align-items: center
  .box
    max-width: 420px
    margin: 0 auto
    font-size: 14px
    .inline
      display: inline-block
      vertical-align: middle
      padding: 10px
      width: 170px
      text-align: center
    .inline + .inline
      margin-left: 24px
    .top
      margin: 0 auto
    .left
      float: left
    .right
      float: right
    .bottom
      clear: both
      margin: 0 auto
    > div
      width: 96px
      text-align: center
      padding: 8px 0
      cursor: pointer
      border-radius: 4px
      border: 1px solid #dfe2e5
    > div + div
      margin: 12px 0

</style>

