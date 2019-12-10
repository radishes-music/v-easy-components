<template>
  <div class="v-color-picker">
    <div class="v-color-simple-placeholder" :style="sizeStyle">
      <div class="simple-placeholder"></div>
    </div>
    <transition name="stretch">
      <color-picker :width="width" :height="height" :color="color" />
    </transition>
  </div>
</template>

<script>
  import Color from './color'
  import { formatCss } from "@/utils/css"
  import ColorPicker from './color-picker'

  export default {
    name: "VeColorPicker",
    components: {
      ColorPicker
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
      value: {
        type: String,
        required: true
      },
      colorFormat: {
        type: String,
        default: 'hex'
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
    data() {
      const color = new Color({
        format: this.colorFormat
      });
      color.fromString(this.value);

      return {
        color,
      }
    },
    watch: {
      color: {
        deep: true,
        handler: function (value) {
          this.$emit('value', value.value)
        }
      }
    },
    methods: {

    },
  }
</script>
