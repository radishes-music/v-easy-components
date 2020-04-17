---
meta:
  - name: description
    content: v-easy-components icon page
  - name: keywords
    content: v-easy-components icon
---

# Icon 图标 <Badge text="0.7.2+"/>

[fontawesome](https://fontawesome.com/) icon collection

`v-easy-components` uses` 3.0.0` version of `fontawesome`. If you need to use a higher version of` fontawesome`, you only need to introduce the corresponding version yourself.

::: warning
`v-easy-components` does not currently support separation `fontawesome`
Since versions before 0.7.2 used `fontawesome 3.0.0`, most new icons cannot be used, so `0.7.2` will use `fontawesome 5.11.2`
:::

::: tip
`v-easy-components` is expected to support separation of `fontawesome` in ~~`1.0.0`~~ `0.7.3` version, because `ttf` files are really too large, and `fontawesome` already supports custom icon sets
:::

## Basic usage

``` vue
<ve-icon name="apple" size="16"></ve-icon>
```

## `icon-style` 说明

::: warning
`v-easy-components` 所有组件和命令用到的图标都可以设置此属性，这个属性有三种值：`brands` `regular` `solid`(默认值)。他们分别表示了使用哪种字体文件，对应的图标可见下面的说明
:::

## 快速定位

+ [Solid icons](#solid-icons)
+ [Regular icons](#regular-icons)
+ [Brands icons](#brands-icons)

## Solid icons

默认可用`Solid`字体文件

``` vue
<ve-icon icon-style="solid" name="apple" size="16"></ve-icon>
```

全部图标[地址](/zh/icon/icon-solid.md)

部分可用的图标如下所示：

<div class="icon-box">
  <icon v-for="item in Solid" :key="item" :icon="item"></icon>
</div>

## Regular icons

默认可用`Regular`字体文件

``` vue
<ve-icon icon-style="regular" name="apple" size="16"></ve-icon>
```

全部图标[地址](/zh/icon/icon-regular.md)

部分可用的图标如下所示：

<div class="icon-box">
  <icon v-for="item in Regular" :key="item" :icon="item"></icon>
</div>

## Brands icons

使用`Brands`字体文件

``` vue
<ve-icon icon-style="brands" name="apple" size="16"></ve-icon>
```

全部图标[地址](/zh/icon/icon-brands.md)

部分可用的图标如下所示：

<div class="icon-box">
  <icon v-for="item in Brands" :key="item" :icon="item" icon-style="brands"></icon>
</div>

## Icon Attributes

<div-box _id="iconAttributes"></div-box>

::: slot iconAttributes
| Parameter | Description | Type | Optional value | Defaults |
| :--- | :--- | :--- | :--- | :--- |
| name | Set icon for icon | string | - | - |
| size | Set the size of the icon | string / number | - | 14 |
| icon-style | 设置`icon`的字体文件，为了节省`ttf`占用的空间，显示不同的图标。[详情](#icon-style-说明) | string | `brands` `regular` `solid` | solid |
:::

<script>
  import ttf from "static/ttf";
  
  export default {
    data() {
      return {
        Solid: ttf.Solid.split(',').slice(0, 30),
        Regular: ttf.Regular.split(',').slice(0, 30),
        Brands: ttf.Brands.split(',').slice(0, 30)
      }
    }
  }
</script>

<style>
.icon-box {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: -10px;
}
</style>
