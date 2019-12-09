<template>
  <div class="v-color-content" :style="mergeStyle">
    <div class="v-color-white"></div>
    <div class="v-color-black"></div>
    <div class="v-color-pointer"></div>
  </div>
</template>

<script>
  import {formatCss} from "@/utils/css";

  export default {
    name: "color-picker",
    inject: {
      width: {
        default: 300
      },
      height: {
        default: 150
      }
    },
    computed: {
      mergeStyle() {
        const width = formatCss(this.width);
        const height = formatCss(this.height);
        return {
          width,
          height,
          backgroundColor: 'red'
        }
      },
    }
  }
</script>
