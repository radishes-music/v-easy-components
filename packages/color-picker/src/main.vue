<template>
  <div class="v-color-picker">
    <div class="v-color-simple-placeholder" :style="sizeStyle" v-tooltip="{VNode: RenderContent, placement: 'bottom', offset: 10, effect: 'light', target: 'click'}">
      <div class="simple-placeholder"></div>
    </div>
  </div>
</template>

<script>
  import { directive } from '@packages/tool-tip/src/directive'
  import Color from './color'
  import bus from "@/utils/bus";
  import { formatCss } from "@/utils/css"
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
      value: {
        type: String,
        default: 'hsl(50, 100%, 50%)'
      },
      colorFormat: {
        type: String,
        default: 'rgb'
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

      return {
        color,
      }
    },
    methods: {
      setColor(value) {
        bus.$on('color-picker:change', value => {
          this.color.set({
            value,
          });
        });
        this.$emit('value', value)
      },
      RenderContent() {
        const h = this.$createElement;
        return h(ColorPicker);
      }
    },
    created() {
      this.setColor(this.value)
    },
    beforeMount() {

    },
    mounted() {
      console.log('parent:mounted')
      bus.$emit('color-picker:get', this.color.fromString())
    }
  }
</script>
