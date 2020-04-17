---
pageClass: custom-icon-class
meta:
  - name: description
    content: v-easy-components Solid-icon page
  - name: keywords
    content: v-easy-components Solid-icon
---

# Solid icons

Here are all the `Solid` font icons

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
