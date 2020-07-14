---
meta:
  - name: description
    content: v-easy-components install page
  - name: keywords
    content: v-easy-components install
---

# 安装

## 安装

以下代码描述了如何使用NPM安装我们的VEasy

+ 使用 [npm](https://www.npmjs.com/package/v-easy-components)

```sh
npm install v-easy-components --save-dev
```

+ 或者 [yarn](https://yarnpkg.com/en/package/v-easy-components)

```sh
yarn add v-easy-components -D
```

## 直接使用 `<script>` <Badge text="0.5.1+"/>

直接下载并通过`<script>`标签引入，您可以使用全局变量**VEasy**获得**v-easy-components**

+ 压缩版
<div class="v-easy-box">
  <a :href="'https://unpkg.com/v-easy-components@'+ _v_easy_components_version +'/bin/index.min.js'" target="_blank"><ve-button>JavaScript</ve-button></a>
  <a :href="'//unpkg.com/v-easy-components@'+ _v_easy_components_version +'/bin/theme-chalk/index.css'" target="_blank"><ve-button>CSS</ve-button></a>
</div>

+ 非压缩版
<div class="v-easy-box">
  <a :href="'//unpkg.com/v-easy-components@'+ _v_easy_components_version +'/bin/index.js'" target="_blank"><ve-button>JavaScript</ve-button></a>
  <a :href="'//unpkg.com/v-easy-components@'+ _v_easy_components_version +'/bin/theme-chalk/index.css'" target="_blank"><ve-button>CSS</ve-button></a>
</div>

### CDN

您可以通过`unpkg`获取资源的最新版本，并在页面上引入js和css文件以开始使用。  
注意：如果以CDN形式引入，字体文件目前只支持其中一种（solid）

```html
<script src="//unpkg.com/vue@2.6.10/dist/vue.js"></script>
<!-- 组件库 -->
<script src="//unpkg.com/v-easy-components"></script>
<!-- 组件样式 -->
<link rel="stylesheet" href="//unpkg.com/v-easy-components/lib/theme-chalk/index.css">
```

如果要获得稳定的版本，请携带版本号

```html
<script src="//unpkg.com/vue@2.6.10/dist/vue.js"></script>
<!-- 组件库 -->
<script src="//unpkg.com/v-easy-components@1.2.3/lib/index.js"></script>
<!-- 组件样式 -->
<link rel="stylesheet" href="//unpkg.com/v-easy-components@1.2.3/lib/theme-chalk/index.css">
```

## Hello world

一个简单的例子，您可以快速开始制作原型

<div>
  <preview-code _id="1">
    <template #default>
      <ve-input v-model="value" @keyup.native.enter="handlerTargetMessage" placeholder="请输入"></ve-input>
      <ve-button style="margin-left: 20px" @click="handlerTargetMessage">TargetMessage</ve-button>
    </template>
    <template #txt>
      <div>只需按照约定使用它，即可快速制作原型</div>
    </template>
  </preview-code>
</div>

::: slot code1
```vue
<template>
  <div>
    <ve-input v-model="value" @keyup.native.enter="handlerTargetMessage" placeholder="请输入"></ve-input>
    <ve-button style="margin-left: 20px" @click="handlerTargetMessage">TargetMessage</ve-button>
  </div>
</template>

<script>
  export default {
    methods: {
      handlerTargetMessage() {
        if (this.value) {
          this.$msg({
            type: 'success',
            message: this.value
          })
        } else {
          this.$msg({
            type: 'error',
            message: 'please enter text',
          })
        }
      }
    }
  }
</script>
```
:::

<script>
  export default {
    data() {
      return {
        value: ''
      }
    },
    methods: {
      handlerTargetMessage() {
        if (this.value) {
          this.$msg({
            type: 'success',
            message: this.value
          })
        } else {
          this.$msg({
            type: 'error',
            message: 'please enter text',
          })
        }
      }
    }
  }
</script>

<style>
  .v-easy-input-wz.v-easy-input input {
    height: 32px;
  }
</style>
