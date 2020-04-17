---
meta:
  - name: description
    content: v-easy-components button page
  - name: keywords
    content: v-easy-components button
---

# Button 按钮

常用的操作按钮。

## 基本用法

基本按钮用法。

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
            <div>使用<em> type </em>，<em> plain </em>，<em> round </em>和<em> circle </em>属性定义<em> Button的样式</em>。</div>
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

## 按钮尺寸

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
      <div>额外的尺寸：<em>large</em>、<em>small</em>，通过设置 <em>size</em> 属性来配置它们。</div>
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

## 禁用状态

让按钮不可用

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
            <div>您可以使用<em> disabled </em>属性来定义按钮是否可用，该按钮接受<em> Boolean </em>值。</div>
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

## 按钮图标

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
            <div>使用<em> icon </em>属性定义<em> Button </em>的图标。 <a href="https://fontawesome.com">可用的图标地址</a></div>
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

## 文字按钮

<div>
    <preview-code _id="3">
        <template #default>
            <div>
              <ve-button type="text">Button</ve-button>
            </div>
        </template>
        <template #txt>
            <div>将<em> type </em>属性的值更改为<em> text </em>。</div>
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

## 圆形按钮旋转

<div>
    <preview-code _id="4">
        <template #default>
            <span>
                <ve-button icon="asterisk" :circle="true" :rotate="true"></ve-button>
                <ve-button type="primary" icon="circle" :rotate="true" :circle="true"></ve-button>
            </span>
        </template>
        <template #txt>
            <div>设置<em> rotate </em>的值。 注意：仅支持带有<em>:circle ="true"</em>的按钮</div>
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

## 按钮动画

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
            <div>首先设置<em> mask </em>为 <em>true</em>，然后再设置<em> mask-type </em>的值改变按钮动画风格</div>
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

## 按钮属性

<div-box _id="tableAttributes"></div-box>

::: slot tableAttributes
| Parameter | Description | Type | Optional value | Defaults |
| :--- | :--- | :--- | :--- | :--- |
| type | 按钮风格 | string | default / success / primary / warning / error | default |
| native-type | 原生type属性 | string | button / submit / reset | button |
| icon | 按钮图标 | string | [fontawesome 5.6.3](https://fontawesome.com/start) | None |
| disabled | 是否禁用按钮 | boolean | true / false | false |
| circle | 是否为圆形按钮 | boolean | true / false | false |
| plain | 是否普通按钮 | boolean | true / false | false |
| rotate | 按钮是否旋转 | boolean | true / false | false |
| mask | 是否显示遮罩 | boolean | true / false | false |
| mask-type | 按钮遮罩类型 | string | success / primary / warning / error | primary |
| icon-style | 设置`icon`图标风格[详情](./icon.md#icon-style-说明) | string | brands / regular / solid | solid |
:::

## 按钮事件

| Event name | Event Description | Callback parameter |
| :--- | :--- | :--- |
| click | 鼠标点击事件 | (event: Event) |
