---
pageClass: custom-icon-class
meta:
  - name: description
    content: v-easy-components Brands-icon page
  - name: keywords
    content: v-easy-components Brands-icon
---

# Brands icons

Here are all the `Brands` font icons

<div class="icon-box">
  <icon v-for="item in Brands" icon-style="brands" :key="item" :icon="item"></icon>
</div>

<script>
  import ttf from "static/ttf";
  
  export default {
    data() {
      return {
        Brands: ttf.Brands.split(',')
      }
    }
  }
</script>
