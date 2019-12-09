<template>
  <div class="v-color-picker">
    <div class="v-color-simple-placeholder" :style="sizeStyle" v-tooltip="{VNode: RenderContent, placement: 'bottom', offset: 10, target: 'click'}">
      <div class="simple-placeholder"></div>
    </div>
  </div>
</template>

<script>
  import { directive } from '@packages/tool-tip/src/directive'
  import { formatCss } from "@/utils/css";
  import ColorPicker from './color-picker'

  export default {
    name: "VeColorPicker",
    directives: {
      tooltip: directive
    },
    props: {
      simple: {
        type: Boolean,
        default: false
      },
      size: {
        type: [String, Number],
        default: 34
      },
      width: {
        type: [String, Number],
        default: 300
      },
      height: {
        type: [String, Number],
        default: 150
      },
    },
    provide() {
      return {
        width: this.width,
        height: this.height
      }
    },
    computed: {
      sizeStyle() {
        const size = formatCss(this.size);
        return {
          width: size,
          height: size
        }
      }
    },
    methods: {
      RenderContent() {
        const h = this.$createElement;
        return h(ColorPicker);
      }
    }
  }
</script>
