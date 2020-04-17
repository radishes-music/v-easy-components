---
  meta:
  - name: description
    content: v-easy-components input page
  - name: keywords
    content: v-easy-components input
---

# Input

Enter characters through the keyboard and follow the rules to perform and feedback

## Basic usage

Pass some parameters to control the input box to disable and read only

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

## Regular Check Input Box

Write the configuration to complete the input box checking, such as the type given. `:type="reg"` and `:inspect=""Regular` expression completes regular test

<div>
  <preview-code _id="1">
    <template #default>
      <ve-input max-width="180" placeholder="Please enter phone number" target="blur" message="please enter a valid phone number" type="reg" inspect="^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$"></ve-input>
    </template>
    <template #txt>
      <div>Using the regular expression<em>^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$</em>implements detection of mobile phone formats</div>
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

## Check the content length of the input box

Use `:options="{min: 20,max: 30}` parameters

<div>
  <preview-code _id="2">
    <template #default>
      <ve-input max-width="180" placeholder="Please enter 1 to 8 characters" message="Character out of range" :options="{min: 1, max: 8}"></ve-input>
    </template>
    <template #txt>
      <div>Pass in the<em>options</em>attribute.<br>
        Note: The value passed in must be an object and use <em>min</em> and <em>max</em>to control the length of the input.
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

## Pop up the wrong message style

<div>
  <preview-code _id="3">
    <template #default>
      <ve-input :error-options="{width: '220px','color': '#ef8f13'}" max-width="180"
                placeholder="Please key in numbers"
                message="Can only enter numbers" type="reg" inspect="^\d+$"></ve-input>
    </template>
    <template #txt>
      <div>Use<em>:error-options="{width: '220px','color': '#ef8f13'}"</em>parameters</div>
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

## Trigger type

Passing a few different strings can control under what circumstances the test can be triggered

<div>
  <preview-code _id="4">
    <template #default>
      <ve-input target="blur" placeholder="Lose focus trigger" max-width="180" message="Lose focus trigger" type="reg" inspect="^\d+$"></ve-input>
      <ve-input :target="['modify', 'blur']" placeholder="The value is modified and the focus is lost." max-width="180" message="The value is modified and the focus is lost." type="reg" inspect="^\d+$"></ve-input>
    </template>
    <template #txt>
      <div>Use <em>:target="['modify', 'blur']"</em>to change this triggering behavior. Available values refer to the following document <a href="#attributes">target</a></div>
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

## Number <Badge text="0.6.1+"/>

When the native input box specifies the type as `number`, the default style is not coordinated with the interface.

`ve-input` is not just a wrapper around the style, it also optimizes the user experience.

<div>
  <preview-code _id="5">
    <template #default>
      <ve-input type-input="number" style="width: 240px" placeholder="Please key in numbers"></ve-input>
      <ve-input type-input="number" :options="[-10, 10]" style="width: 240px" placeholder="Please key in numbers -10 to 10"></ve-input>
      <ve-input type-input="number" :options="{min: -10, max: 10}" step="2" style="width: 240px" placeholder="-10 to 10 and step 2"></ve-input>
    </template>
    <template #txt>
      <div>Sometimes we need to specify <em>step</em> to control the value of the variable.It doesn't just support two decimals, it will respond to UI performance immediately when the limit is exceeded.</div>
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

Specify `type-input` for `textarea` to achieve multiple input, but this is just some simple UI optimization, not recommended

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
| max-width | Maximum width of Component | width | string | -	| - |
| error-options | The style of the error message | object |	- | - |
| disabled | Disable components so they can't be manipulated | boolean | true/false | false |
| readonly | Read-only component, users can not directly rewrite |	boolean	| true/false | false |
| message	| Error message, used in the wrong situation | string | - | Incorrect input |
| inspect |	Regular strings, which need to be used with `type="reg"`	| RegExp | /^.?$/g | - |
| type-input | Input native property | string |	length/reg | length |
| step | Number Input step | string/number | - | 1 |
| type | Component type, specifying how the component has been tested | string |	length/reg | length |
| target | Trigger type | string/array | blur/input/focus/modify | blur |
| options |	Verify the length of the input box. Configuring this property will invalidate regular checking  | object/array | - | - |
:::

## Input Events

| Event name | Event Description | Callback parameter |
| :--- | :--- | :--- |
| status | Component state change trigger	| (value: boolean) |
| input | Triggered on Input input | (event: Event) |
| blur | Triggered when Input loses focus | (event: Event) |
| focus | Triggered when Input gets focus |	{$event: Event, index: Number} |
| change | Triggered when the Input value changes	| (value: any) |
