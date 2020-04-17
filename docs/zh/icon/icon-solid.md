---
pageClass: custom-icon-class
meta:
  - name: description
    content: v-easy-components Solid-icon page
  - name: keywords
    content: v-easy-components Solid-icon
---

# Solid 图标

这里展示了所有 `Solid` 字体图标

<div class="icon-box">
  <icon v-for="item in Solid" :key="item" :icon="item"></icon>
</div>

<script>
  import ttf from "static/ttf";
  
  export default {
    data() {
      return {
        Solid: ttf.Solid.split(',')
      }
    }
  }
</script>
