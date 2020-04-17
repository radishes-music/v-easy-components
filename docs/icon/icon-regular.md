---
pageClass: custom-icon-class
meta:
  - name: description
    content: v-easy-components Regular-icon page
  - name: keywords
    content: v-easy-components Regular-icon
---

# Regular icons

Here are all the `Regular` font icons

<div class="icon-box">
  <icon v-for="item in Regular" icon-style="regular" :key="item" :icon="item"></icon>
</div>

<script>
  import ttf from "static/ttf";
  
  export default {
    data() {
      return {
        Regular: ttf.Regular.split(',')
      }
    }
  }
</script>
