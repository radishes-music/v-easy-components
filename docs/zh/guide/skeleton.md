---
tags: skeleton
meta:
  - name: description
    content: v-easy-components v-loading-preload page
  - name: keywords
    content: v-easy-components v-loading-preload
---

# Skeleton 骨架屏

Placeholder style displayed at load, supporting three forms of placeholder expression

`v-loading-preload` is especially suitable for article and image loading, but limited to `Ajax` technology

## Basic usage

use `v-loading-preload` Instruction for placeholder

<div>
  <preview-code _id="0">
    <template #default>
      <article>
        <h1 v-loading-preload.4="visible[0]">{{ title[0] }}</h1>
        <div class="content" v-loading-preload.16="visible[1]">{{ content[0] }}</div>
      </article>
    </template>
    <template #txt>
      <div>We can specify <em>data-loading-text</em> to control the length of the placeholder displayed when loading.</div>
    </template>
  </preview-code>
</div>

::: slot code0
```vue
<template>
  <article>
    <h1 v-loading-preload="visible[0]" data-loading-text="2">{{ title }}</h1>
    <div class="content" v-loading-preload="visible[1]" data-loading-text="16">{{ content }}</div>
  </article>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        content: '',
        visible: [false, false]
      }
    },
    methods: {
      promise(ms, data) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(data)
          }, ms)
        })
      },
      async task() {
        this.title = await this.promise(1600, 'Little Red Riding Hood');
        this.$set(this.visible, 0, true);
        this.content = await this.promise(1800, 'Once upon a time there was a sweet little girl.' +
          ' Everyone who saw her liked her, but most of all her grandmother, ' +
          'who did not know what to give the child next. ' +
          'Once she gave her a little cap made of red velvet. Because it suited her so well, ' +
          'and she wanted to wear it all the time, ' +
          'she came to be known as Little Red Riding Hood.');
        this.$set(this.visible, 1, true);
      }
    },
    mounted() {
      this.task()
    }
  }
</script>
```
:::

## Directive modifier

You can use the `.` (dot) operator after the command, followed by a number, which makes it easier and more beautiful to control the length of the placeholder, and also solves the problem that `dataset` does not exist in IE.

<div>
  <preview-code _id="1">
    <template #default>
      <article>
        <h1 v-loading-preload.4="visible[2]">{{ title[1] }}</h1>
        <div class="content" v-loading-preload.24="visible[3]">{{ content[1] }}</div>
      </article>
    </template>
  </preview-code>
</div>

::: slot code1
```vue
<template>
  <article>
    <h1 v-loading-preload.4="visible[0]">{{ title }}</h1>
    <div class="content" v-loading-preload.24="visible[1]">{{ content }}</div>
  </article>
</template>
```
:::

## Placeholder

Placeholders can be provided in three different types to achieve the effect of loading different resources, such as images can use `data-loading-type`.

<div>
  <preview-code _id="2">
    <template #default>
      <article>
        <i v-loading-preload="visible[4]" data-loading-type="circle" class="fab icon" :class="title[2]"></i>
        <i style="font-size: 36px" v-loading-preload="visible[5]" data-loading-type="rect" data-loading-diameter="36" class="fab icon" :class="content[2]"></i>
      </article>
    </template>
    <template #txt>
      <div>Note: If you use a non-text type placeholder you can specify the size of the placeholder <em>data-loading-diameter</em></div>
    </template>
  </preview-code>
</div>

::: slot code2
```vue
<template>
  <article>
    <i v-loading-preload="visible[0]" data-loading-type="circle" class="fab icon" :class="title"></i>
    <i v-loading-preload="visible[1]" data-loading-type="rect" data-loading-diameter="36"
       style="font-size: 36px" class="fab icon" :class="content"></i>
  </article>
</template>
```
:::

## Options

<div-box _id="optionsAttributes"></div-box>

::: slot optionsAttributes
| Attributes | Description | Type | Defaults |
| :--- | :--- | :--- | :--- |
| data-loading-text | Control the number of display of placeholders (text) | Number / String | 1 |
| data-loading-type | Control the style of placeholders | String | text |
| data-loading-diameter | Control the size of the placeholder, Invalid when type is `text` | Number / String | - |
:::

## v-loading-preload Modifier

| Modifier | Description | Type |
| :--- | :--- | :--- |
| v-loading-preload.[number] | Specify the length of the placeholder when the type is `text` | Number |

<style scoped lang="sass">
  .content
    line-height: 2
    text-indent: 2em
</style>

<script>
  export default {
    name: 'v-load-dom',
    data() {
      return {
        title: [],
        content: [],
        visible: Array.from({length: 10}).fill(false),
        t: ['Little Red Riding Hood', 'Cinderella', 'fa-apple'],
        c: ['Once upon a time there was a sweet little girl.' +
        ' Everyone who saw her liked her, but most of all her grandmother, who did not know what to give the child next. ' +
        'Once she gave her a little cap made of red velvet. Because it suited her so well, and she wanted to wear it all the time, ' +
        'she came to be known as Little Red Riding Hood.', 'There was once a rich man whose wife lay sick, ' +
        'and when she felt her end drawing near she called to her only daughter to come near her bed, ' +
        'and said, "Dear child, be pious and good, and God will always take care of you, ' +
        'and I will look down upon you from heaven, and will be with you." And then she ' +
        'closed her eyes and expired. The maiden went every day to her mother\'s grave and wept, ' +
        'and was always pious and good. When the winter came the snow covered the grave with a white covering, ' +
        'and when the sun came in the early spring and melted it away, the man took to himself another wife', 'fa-apple']
      }
    },
    methods: {
      promise(ms, data) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(data)
          }, ms)
        })
      },
      async task(index, currentIndex) {
        this.$set(this.visible, index, false);
        this.$set(this.visible, index + 1, false);
        this.$set(this.title, currentIndex, '');
        this.$set(this.content, currentIndex, '');
        const t = await this.promise(400, this.t[currentIndex]);
        this.$set(this.title, currentIndex, t);
        this.$set(this.visible, index, true);
        const c = await this.promise(500, this.c[currentIndex]);
        this.$set(this.content, currentIndex, c);
        this.$set(this.visible, index + 1, true);
      }
    },
    async mounted() {
      if (Array.isArray(this.title)) {
        await this.task(0, 0)
        await this.task(2, 1)
        await this.task(4, 2)
      }
    }
  }
</script>
