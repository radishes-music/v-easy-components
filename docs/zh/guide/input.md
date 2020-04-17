---
  meta:
  - name: description
    content: v-easy-components input page
  - name: keywords
    content: v-easy-components input
---

# Input 输入框

通过键盘输入字符，并遵循规则进行执行和反馈

## 基本用法

传递一些参数来控制输入框禁用和只读

<div>
    <preview-code _id="0">
        <template #default>
            <ve-input max-width="180" placeholder="Normal input box"></ve-input>
            <ve-input max-width="180" disabled="true" placeholder="Disable input box"></ve-input>
            <ve-input max-width="180" :readonly="true" placeholder="Read-only input box"></ve-input>
        </template>
    </preview-code>
</div>

::: slot code0
```vue
<template>
  <ve-input max-width="180" placeholder="Normal input box"></ve-input>
  <ve-input max-width="180" disabled placeholder="Disable input box"></ve-input>
  <ve-input max-width="180" readonly placeholder="Read-only input box"></ve-input>
</template>
```
:::

## 常规检查输入框

编写配置以完成输入框检查，例如给定的类型。 `:type ="reg"`和`:inspect ="Regular"`表达式完成常规测试

<div>
  <preview-code _id="1">
    <template #default>
      <ve-input max-width="180" placeholder="Please enter phone number" target="blur" message="please enter a valid phone number" type="reg" inspect="^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$"></ve-input>
    </template>
    <template #txt>
      <div>使用正则表达式<em>^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$</em>实现对手机格式的检测</div>
    </template>
  </preview-code>
</div>

::: slot code1
```vue
<template>
  <ve-input max-width="180" placeholder="Please enter phone number"
            target="blur"
            message="please enter a valid phone number"
            type="reg"
            inspect="^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$"></ve-input>
</template>
```
:::

## 检查输入框的内容长度

使用`:options="{min：20, max：30}"`参数

<div>
  <preview-code _id="2">
    <template #default>
      <ve-input max-width="180" placeholder="Please enter 1 to 8 characters" message="Character out of range" :options="{min: 1, max: 8}"></ve-input>
    </template>
    <template #txt>
      <div>传递<em>options</em>属性。<br>注意：传入的值必须是一个对象，并使用<em> min </em>和<em> max </em>来控制输入的长度。
      </div>
    </template>
  </preview-code>
</div>

::: slot code2
```vue
<template>
  <ve-input max-width="180" placeholder="Please enter 1 to 8 characters"
            message="Character out of range"
            :options="{min: 1, max: 8}"></ve-input>
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  }
</script>
```
:::

## 弹出错误的信息风格

<div>
  <preview-code _id="3">
    <template #default>
      <ve-input :error-options="{width: '220px','color': '#ef8f13'}" max-width="180"
                placeholder="Please key in numbers"
                message="Can only enter numbers" type="reg" inspect="^\d+$"></ve-input>
    </template>
    <template #txt>
      <div>使用<em>:error-options="{width：'220px', 'color'：'＃ef8f13'}"</em>参数</div>
    </template>
  </preview-code>
</div>

::: slot code3
```vue
<template>
  <ve-input :error-options="{width: '220px','color': '#ef8f13'}"
            max-width="180"
            placeholder="Please key in numbers"
            message="Can only enter numbers" type="reg" inspect="^\d+$"></ve-input>
</template>
```
:::

## 触发方式

传递几个不同的字符串可以控制在什么情况下可以触发测试

<div>
  <preview-code _id="4">
    <template #default>
      <ve-input target="blur" placeholder="Lose focus trigger" max-width="180" message="Lose focus trigger" type="reg" inspect="^\d+$"></ve-input>
      <ve-input :target="['modify', 'blur']" placeholder="The value is modified and the focus is lost." max-width="180" message="The value is modified and the focus is lost." type="reg" inspect="^\d+$"></ve-input>
    </template>
    <template #txt>
      <div>使用<em>:target="['modify', 'blur']"</em>更改此触发行为。可用值请参考以下文档<a href="#attributes">目标</a></div>
    </template>
  </preview-code>
</div>

::: slot code4
```vue
<template>
  <ve-input v-model="value" placeholder="Lose focus trigger"
            max-width="180"
            target="blur"
            message="Lose focus trigger"
            type="reg"
            inspect="^\d+$"></ve-input>
  <ve-input v-model="value1" placeholder="The value is modified and the focus is lost."
            max-width="180"
            :target="['modify', 'blur']"
            message="The value is modified and the focus is lost."
            type="reg"
            inspect="^\d+$"></ve-input>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        value1: ''
      }
    }
  }
</script>
```
:::

## 数字 <Badge text="0.6.1+"/>

当本机输入框将类型指定为`number`时，默认样式与界面不协调。

`ve-input` 不仅是样式的包装，还可以优化用户体验。

<div>
  <preview-code _id="5">
    <template #default>
      <ve-input type-input="number" style="width: 240px" placeholder="Please key in numbers"></ve-input>
      <ve-input type-input="number" :options="[-10, 10]" style="width: 240px" placeholder="Please key in numbers -10 to 10"></ve-input>
      <ve-input type-input="number" :options="{min: -10, max: 10}" step="2" style="width: 240px" placeholder="-10 to 10 and step 2"></ve-input>
    </template>
    <template #txt>
      <div>有时我们需要指定<em> step </em>来控制变量的值。它不仅支持两个小数，而且在超出限制时会立即响应UI。</div>
    </template>
  </preview-code>
</div>

::: slot code5
```vue
<template>
  <ve-input v-model.number="value" type-input="number" placeholder="Please key in numbers"></ve-input>
  <ve-input v-model.number="value1" type-input="number" :options="[-10, 10]" placeholder="Please key in numbers -10 to 10"></ve-input>
  <ve-input v-model.number="value2" type-input="number" :options="{min: -10, max: 10}" step="2" max-width="180" placeholder="-10 to 10 and step 2"></ve-input>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        value1: '',
        value2: '',
      }
    }
  }
</script>
```
:::

## Textarea <Badge type="warning" text="Pending"/>

指定`type-input` 的值为 `textarea`以实现多行输入，但这只是一些简单的UI优化，不建议使用

<div>
  <preview-code _id="6">
    <template #default>
      <ve-input type-input="textarea" placeholder="Enter something"></ve-input>
    </template>
  </preview-code>
</div>

::: slot code6
```vue
<template>
  <ve-input v-model="value" type-input="textarea" placeholder="Enter something"></ve-input>
</template>
<script>
  export default {
    data() {
      return {
        value: '',
      }
    }
  }
</script>
```
:::

## Attributes

<div-box _id="tableAttributes"></div-box>

::: slot tableAttributes
| Parameter | Description | Type | Optional value | Defaults |
| :--- | :--- | :--- | :--- | :--- |
| max-width | 组件最大宽度 | width | string | -	| - |
| error-options | 错误消息的样式 | object |	- | - |
| disabled | 禁用组件，使其无法被操纵 | boolean | true/false | false |
| readonly | 只读组件，用户不能直接重写 |	boolean	| true/false | false |
| message	| 错误消息，在错误情况下使用 | string | - | Incorrect input |
| inspect |	常规字符串，需要与`type="reg"`一起使用	| RegExp | /^.?$/g | - |
| type-input | 输入框的原生属性 | string |	length/reg | length |
| step | `type-input`为`number`时，每次增加与减少的基本量 | string/number | - | 1 |
| type | 组件类型，指定如何测试组件 | string |	length/reg | length |
| target | 检验触发类型 | string/array | blur/input/focus/modify | blur |
| options |	验证输入框的长度。配置此属性将使常规检查无效 | object/array | - | - |
:::

## Input 事件

| Event name | Event Description | Callback parameter |
| :--- | :--- | :--- |
| status | 组件状态更改触发器	| (value: boolean) |
| input | 组件输入值的时候触发 | (event: Event) |
| blur | 组件失去焦点时触发 | (event: Event) |
| focus | 组件获得焦点时触发 |	{$event: Event, index: Number} |
| change | 值被更改的时候触发	| (value: any) |
