---
meta:
  - name: description
    content: v-easy-components install page
  - name: keywords
    content: v-easy-components install
---

# Installation

## Installation

The following code describes how to use NPM to install our VEasy

+ Use [npm](https://www.npmjs.com/package/v-easy-components)

```sh
npm install v-easy-components --save-dev
```

+ or [yarn](https://yarnpkg.com/en/package/v-easy-components)

```sh
yarn add v-easy-components -D
```

## Introduced directly with `<script>` <Badge text="0.5.1+"/>

Directly downloaded and introduced with the `<script>` tag, you can use the global variable **VEasy** to get **v-easy-components**

+ Compressed version
<div class="v-easy-box">
  <a :href="'https://unpkg.com/v-easy-components@'+ _v_easy_components_version +'/lib/index.min.js'" target="_blank"><ve-button>JavaScript</ve-button></a>
  <a :href="'//unpkg.com/v-easy-components@'+ _v_easy_components_version +'/lib/theme-chalk/index.css'" target="_blank"><ve-button>CSS</ve-button></a>
</div>

+ Uncompressed version
<div class="v-easy-box">
  <a :href="'//unpkg.com/v-easy-components@'+ _v_easy_components_version +'/lib/index.js'" target="_blank"><ve-button>JavaScript</ve-button></a>
  <a :href="'//unpkg.com/v-easy-components@'+ _v_easy_components_version +'/lib/theme-chalk/index.css'" target="_blank"><ve-button>CSS</ve-button></a>
</div>

### CDN

Currently you can get the latest version of the resource through unpkg, and introduce js and css files on the page to get started.  
Note: If introduced in the form of CDN, font files currently only support one of them (solid)

```html
<script src="//unpkg.com/vue@2.6.10/dist/vue.js"></script>
<!-- Introducing component library -->
<script src="//unpkg.com/v-easy-components"></script>
<!-- Introducing style -->
<link rel="stylesheet" href="//unpkg.com/v-easy-components/lib/theme-chalk/index.css">
```

If you want to get a stable version, please bring the version number

```html
<script src="//unpkg.com/vue@2.6.10/dist/vue.js"></script>
<!-- Introducing component library -->
<script src="//unpkg.com/v-easy-components@1.2.3/lib/index.js"></script>
<!-- Introducing style -->
<link rel="stylesheet" href="//unpkg.com/v-easy-components@1.2.3/lib/theme-chalk/index.css">
```

## Hello world

A simple example, you can quickly start prototyping

<div>
  <preview-code _id="1">
    <template #default>
      <ve-input v-model="value" @keyup.native.enter="handlerTargetMessage" placeholder="please enter"></ve-input>
      <ve-button style="margin-left: 20px" @click="handlerTargetMessage">TargetMessage</ve-button>
    </template>
    <template #txt>
      <div>Just use it as agreed, and you can quickly prototype</div>
    </template>
  </preview-code>
</div>

::: slot code1
```vue
<template>
  <div>
    <ve-input v-model="value" @keyup.native.enter="handlerTargetMessage" placeholder="please enter"></ve-input>
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
