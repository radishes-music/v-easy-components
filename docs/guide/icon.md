---
meta:
  - name: description
    content: v-easy-components icon page
  - name: keywords
    content: v-easy-components icon
---

# Icon <Badge text="0.7.2+"/>

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

## `icon-style` Description

::: warning
`v-easy-components` This property can be set for all components and icons used by commands. This property has three values:` brands` `regular`` solid` (default). They each indicate which font file is used, and the corresponding icon can be seen in the description below
:::

## Rapid positioning

+ [Solid icons](#solid-icons)
+ [Regular icons](#regular-icons)
+ [Brands icons](#brands-icons)

## Solid icons

`Solid` font files available by default

``` vue
<ve-icon icon-style="solid" name="apple" size="16"></ve-icon>
```

All icon [addresses](/icon/icon-solid.md)

Some icons are shown below: 

<div class="icon-box">
  <icon v-for="item in Solid" :key="item" :icon="item"></icon>
</div>

## Regular icons

`Regular` font files available by default

``` vue
<ve-icon icon-style="regular" name="apple" size="16"></ve-icon>
```

All icon [addresses](/icon/icon-regular.md)

Some icons are shown below:

<div class="icon-box">
  <icon v-for="item in Regular" :key="item" :icon="item"></icon>
</div>

## Brands icons

Use `Brands` font file

``` vue
<ve-icon icon-style="brands" name="apple" size="16"></ve-icon>
```

All icon [addresses](/icon/icon-brands.md)

Some icons are shown below:

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
| icon-style | Set the font file for `icon`. In order to save the space occupied by` ttf`, different icons are displayed.[detail](#icon-style-description) | string | `brands` `regular` `solid` | solid |
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
