---
meta:
  - name: description
    content: v-easy-components button page
  - name: keywords
    content: v-easy-components button
---

# Button

Commonly used operation buttons.

## Basic usage

Basic button usage.

<div>
  <preview-code _id="0">
      <template #default>
          <span>
              <div>
                <ve-button :plain="true">Plain button</ve-button>
                <ve-button :plain="true" type="success">Success button</ve-button>
                <ve-button :plain="true" type="primary">Main button</ve-button>
                <ve-button :plain="true" type="warning">Warning button</ve-button>
                <ve-button :plain="true" type="error">Danger button</ve-button>
              </div>
              <div style="margin-top: 12px">
                <ve-button type="success">Success button</ve-button>
                <ve-button type="primary">Main button</ve-button>
                <ve-button type="warning">Warning button</ve-button>
                <ve-button type="error">Danger button</ve-button>
              </div>
              <div style="margin-top: 12px">
                <ve-button icon="asterisk" :circle="true"></ve-button>
                <ve-button type="success" icon="circle" :circle="true"></ve-button>
                <ve-button type="primary" icon="shopping-cart" :circle="true"></ve-button>
                <ve-button type="warning" icon="table" :circle="true"></ve-button>
                <ve-button type="error" icon="compress" :circle="true"></ve-button>
              </div>
          </span>
      </template>
      <template #txt>
          <div>Use the <em>type</em>、<em>plain</em>、<em>round</em> 和 <em>circle</em> properties to define the style of the <em>Button</em> .</div>
      </template>
  </preview-code>
</div>

::: slot code0
```vue
<template>
  <div>
    <ve-button plain>Plain button</ve-button>
    <ve-button plain type="success">Success button</ve-button>
    <ve-button plain type="primary">Main button</ve-button>
    <ve-button plain type="warning">Warning button</ve-button>
    <ve-button plain type="error">Danger button</ve-button>
  </div>
  <div style="margin-top: 12px">
    <ve-button type="success">Success button</ve-button>
    <ve-button type="primary">Main button</ve-button>
    <ve-button type="warning">Warning button</ve-button>
    <ve-button type="error">Danger button</ve-button>
  </div>
  <div style="margin-top: 12px">
    <ve-button icon="asterisk" circle></ve-button>
    <ve-button type="success" icon="circle" circle></ve-button>
    <ve-button type="primary" icon="shopping-cart" circle></ve-button>
    <ve-button type="warning" icon="table" circle></ve-button>
    <ve-button type="error" icon="compress" circle></ve-button>
  </div>
</template>
```
:::

## Button size

<div>
  <preview-code _id="6">
    <template #default>
      <span>
          <div>
            <ve-button size="small" type="success">Success small</ve-button>
            <ve-button size="small" type="primary">Main small</ve-button>
            <ve-button size="small" type="warning">Warning small</ve-button>
            <ve-button size="small" type="error">Danger small</ve-button>
          </div>
          <div style="margin-top: 12px">
            <ve-button type="success">Success default</ve-button>
            <ve-button type="primary">Main default</ve-button>
            <ve-button type="warning">Warning default</ve-button>
            <ve-button type="error">Danger default</ve-button>
          </div>
          <div style="margin-top: 12px">
            <ve-button size="large" type="success">Success large</ve-button>
            <ve-button size="large" type="primary">Main large</ve-button>
            <ve-button size="large" type="warning">Warning large</ve-button>
            <ve-button size="large" type="error">Danger large</ve-button>
          </div>
      </span>
    </template>
    <template #txt>
      <div>Extra sizes: <em>large</em>, <em>small</em>, configure them by setting the <em>size</em> attribute.</div>
    </template>
  </preview-code>
</div>

::: slot code6
```vue
<template>
  <div>
    <ve-button size="small" type="success">Success small</ve-button>
    <ve-button size="small" type="primary">Main small</ve-button>
    <ve-button size="small" type="warning">Warning small</ve-button>
    <ve-button size="small" type="error">Danger small</ve-button>
  </div>
  <div style="margin-top: 12px">
    <ve-button type="success">Success default</ve-button>
    <ve-button type="primary">Main default</ve-button>
    <ve-button type="warning">Warning default</ve-button>
    <ve-button type="error">Danger default</ve-button>
  </div>
  <div style="margin-top: 12px">
    <ve-button size="large" type="success">Success large</ve-button>
    <ve-button size="large" type="primary">Main large</ve-button>
    <ve-button size="large" type="warning">Warning large</ve-button>
    <ve-button size="large" type="error">Danger large</ve-button>
  </div>
</template>
```
:::

## Disabled state

The button is not available.

<div>
    <preview-code _id="1">
        <template #default>
            <span>
                <div>
                  <ve-button :plain="true" :disabled="true">Plain button</ve-button>
                  <ve-button :plain="true" type="success" :disabled="true">Success button</ve-button>
                  <ve-button :plain="true" type="primary" :disabled="true">Main button</ve-button>
                  <ve-button :plain="true" type="warning" :disabled="true">Warning button</ve-button>
                  <ve-button :plain="true" type="error" :disabled="true">Danger button</ve-button>
                </div>
                <div style="margin-top: 12px">
                  <ve-button :disabled="true">Normal button</ve-button>
                  <ve-button type="success" :disabled="true">Success button</ve-button>
                  <ve-button type="primary" :disabled="true">Main button</ve-button>
                  <ve-button type="warning" :disabled="true">Warning button</ve-button>
                  <ve-button type="error" :disabled="true">Danger button</ve-button>
                </div>
                <div style="margin-top: 12px">
                  <ve-button icon="asterisk" :circle="true" :disabled="true"></ve-button>
                  <ve-button type="success" icon="circle" :circle="true" :disabled="true"></ve-button>
                  <ve-button type="primary" icon="shopping-cart" :circle="true" :disabled="true"></ve-button>
                  <ve-button type="warning" icon="table" :circle="true" :disabled="true"></ve-button>
                  <ve-button type="error" icon="compress" :circle="true" :disabled="true"></ve-button>
                </div>
            </span>
        </template>
        <template #txt>
            <div>You can use the <em>disabled</em> property to define whether a button is available, which accepts a <em>Boolean</em> value.</div>
        </template>
    </preview-code>
</div>

::: slot code1
```vue
<template>
  <div>
    <ve-button plain disabled>Plain button</ve-button>
    <ve-button plain type="success" disabled>Success button</ve-button>
    <ve-button plain type="primary" disabled>Main button</ve-button>
    <ve-button plain type="warning" disabled>Warning button</ve-button>
    <ve-button plain type="error" disabled>Danger button</ve-button>
  </div>
  <div style="margin-top: 12px">
    <ve-button disabled>Normal button</ve-button>
    <ve-button type="success" disabled>Success button</ve-button>
    <ve-button type="primary" disabled>Main button</ve-button>
    <ve-button type="warning" disabled>Warning button</ve-button>
    <ve-button type="error" disabled>Danger button</ve-button>
  </div>
  <div style="margin-top: 12px">
    <ve-button icon="asterisk" circle disabled></ve-button>
    <ve-button type="success" icon="circle" circle disabled></ve-button>
    <ve-button type="primary" icon="shopping-cart" circle disabled></ve-button>
    <ve-button type="warning" icon="table" circle disabled></ve-button>
    <ve-button type="error" icon="compress" circle disabled></ve-button>
  </div>
</template>
```
:::

## Icon button

<div>
    <preview-code _id="2">
        <template #default>
            <div>
              <ve-button type="primary" icon="asterisk" :rotate="true" :disabled="true">Button</ve-button>
              <ve-button type="primary" icon="circle"></ve-button>
              <ve-button type="primary" icon="shopping-cart"></ve-button>
              <ve-button type="primary" icon="compress"></ve-button>
            </div>
        </template>
        <template #txt>
            <div>Use the <em>icon</em> property to define the icon for the  <em>Button</em> . <a href="https://fontawesome.com">Available icon address</a></div>
        </template>
    </preview-code>
</div>

::: slot code2
```vue
<template>
  <ve-button type="primary" icon="asterisk" rotate disabled>Button</ve-button>
  <ve-button type="primary" icon="circle"></ve-button>
  <ve-button type="primary" icon="shopping-cart"></ve-button>
  <ve-button type="primary" icon="compress"></ve-button>
</template>
```
:::

## Text button

<div>
    <preview-code _id="3">
        <template #default>
            <div>
              <ve-button type="text">Button</ve-button>
            </div>
        </template>
        <template #txt>
            <div>Change the value of the <em>type</em> attribute to <em>text</em> .</div>
        </template>
    </preview-code>
</div>

::: slot code3
```vue
<template>
  <ve-button type="text">Button</ve-button>
</template>
```
:::

## Round button rotation

<div>
    <preview-code _id="4">
        <template #default>
            <span>
                <ve-button icon="asterisk" :circle="true" :rotate="true"></ve-button>
                <ve-button type="primary" icon="circle" :rotate="true" :circle="true"></ve-button>
            </span>
        </template>
        <template #txt>
            <div>Set the value of <em>rotate</em> . Note：only supports buttons with <em>:circle="true"</em></div>
        </template>
    </preview-code>
</div>

::: slot code4
```vue
<template>
  <ve-button icon="asterisk" circle rotate></ve-button>
  <ve-button type="primary" icon="circle" rotate circle></ve-button>
</template>
```
:::

## Button animation

<div>
    <preview-code _id="5">
        <template #default>
            <span>
                <ve-button mask="true" mask-type="primary">Main button</ve-button>
                <ve-button mask="true" mask-type="success">Success button</ve-button>
                <ve-button mask="true" mask-type="warning">Warning button</ve-button>
                <ve-button mask="true" mask-type="error">Danger button</ve-button>
            </span>
        </template>
        <template #txt>
            <div>Set the <em>mask</em> to indicate the <em>mask-type</em> type</div>
        </template>
    </preview-code>
</div>

::: slot code5
```vue
<template>
  <ve-button mask mask-type="primary">Main button</ve-button>
  <ve-button mask mask-type="success">Success button</ve-button>
  <ve-button mask mask-type="warning">Warning button</ve-button>
  <ve-button mask mask-type="error">Danger button</ve-button>
</template>
```
:::

## Button Attributes

<div-box _id="tableAttributes"></div-box>

::: slot tableAttributes
| Parameter | Description | Type | Optional value | Defaults |
| :--- | :--- | :--- | :--- | :--- |
| type | Button type | string | default / success / primary / warning / error | default |
| native-type | Native type attribute | string | button / submit / reset | button |
| icon | Button icon | string | [fontawesome 5.6.3](https://fontawesome.com/start) | None |
| disabled | Whether to disable the button and make it unavailable | boolean | true / false | false |
| circle | Whether round button | boolean | true / false | false |
| plain | Whether plain button | boolean | true / false | false |
| rotate | Whether the icon rotates | boolean | true / false | false |
| mask | Whether to display mask animation | boolean | true / false | false |
| mask-type | Mask animation type | string | success / primary / warning / error | primary |
| icon-style | Set the `icon` icon style [details](./icon.md#icon-style-description) | string | brands / regular / solid | solid |
:::

## Button Events

| Event name | Event Description | Callback parameter |
| :--- | :--- | :--- |
| click | Mouse click event trigger | (event: Event) |
