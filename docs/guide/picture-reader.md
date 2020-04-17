---
meta:
  - name: description
    content: v-easy-components v-image page
  - name: keywords
    content: v-easy-components v-image
---

# Picture Reader

When we make a picture similar to a blog, news, or document, the image loaded is large, affecting the user's reading. You can use the `v-image` command to pass the appropriate parameters to achieve the lazy loading effect.

## Basic usage

In some cases we need to do a lazy loading of an image, just mount the `v-image` directive on the `img` tag and pass the `data-preview-src` property, which will get when you click on the image. The value of `data-preview-src` is then given to the popup.

<div>
  <preview-code _id="0">
    <template #default>
      <img v-image data-preview-src="/CSS.jpg" src="/CSS-min.jpg" alt="CSS">
    </template>
    <template #txt>
      <div>Note: In the <em>img</em> tag you can use `data-preview-src` to specify the image to load or specify on the <em>v-image</em> directive</div>
    </template>
  </preview-code>
</div>

::: slot code0
```vue
<template>
  <img v-image data-preview-src="/CSS.jpg" src="/CSS-min.jpg" alt="CSS">
  <img v-image="'/CSS.jpg'" src="/CSS-min.jpg" alt="CSS">
</template>
```
:::

## Used in chapters <Badge type="warning" text="Pending"/>

If there are multiple images in the article and it takes a lot of bandwidth to load, then we can split the resources into compressed and uncompressed versions, then use `rule` to configure the loading rules to load different resources to optimize the loading speed of the article.

<div>
  <preview-code _id="1">
    <template #default>
      <div class="article" v-image>
        <img src="/CSS-min.jpg" alt="https://linkorg.club" :data-preview-src="img[0]">
        HTML is well known as the native language for web content—but its close counterpart CSS (Cascading Style Sheets) is the language used to style, format, and present it. CSS is incredibly powerful. It also has a reputation for being tricky to learn and even harder to master, but that’s not necessarily true. CSS is straightforward to learn if you slow down and take it step by step. And it’s extremely helpful to know, even if you aren’t planning a career in web design.
        <img src="/CSS-min.jpg" alt="https://linkorg.club" :data-preview-src="img[1]">
      </div>
    </template>
    <template #txt>
      <div></div>
    </template>
  </preview-code>
</div>

::: slot code1
```vue
<template>
  <div v-image>
    <img src="/CSS.jpg" alt="https://linkorg.club" :data-preview-src="img[0]">
    HTML is well known as the native language for web content—but its close counterpart CSS (Cascading Style Sheets) is the language used to style, format, and present it. CSS is incredibly powerful. It also has a reputation for being tricky to learn and even harder to master, but that’s not necessarily true. CSS is straightforward to learn if you slow down and take it step by step. And it’s extremely helpful to know, even if you aren’t planning a career in web design.
    <img src="/CSS-1.jpg" alt="https://linkorg.club" :data-preview-src="img[1]">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        img: ['/CSS-min.jpg', '/CSS-min-1.jpg']
      }
    }
  }
</script>
```
:::

## Options

<div-box _id="optionsAttributes"></div-box>

::: slot optionsAttributes
| Attributes | Description | Type | Defaults |
| :--- | :--- | :--- | :--- |
| el | Specify the elements in the article that need to be replaced | String | image |
| rule | Resource loading rules, you need to return the resource path to be loaded | Function | - |
:::

<script>
  export default {
    data() {
      return {
        img: ['/CSS-min.jpg', '/CSS-min-1.jpg']
      }
    },
  }
</script>

<style scoped lang="sass">
  .article
    line-height: 2
    img
      width: 100px
</style>
