<template>
  <div class="v-color-picker">
    <div v-if="!simple" class="v-color-simple-placeholder" :style="sizeStyle">
      <div
        class="simple-placeholder"
        :style="{
          background: currentColor
        }"
        @click.stop="display = !display"
      >
        <ve-icon name="chevron-down" />
      </div>
    </div>
    <color-picker
      :display="display"
      :width="width"
      :height="height"
      :color="color"
      @confirm="handleConfirm"
    />
    <div class="v-stretch-enter" />
  </div>
</template>

<script>
import Color from './color'
import { formatCss } from '@/utils/css'
import VeIcon from '@packages/icon/src/main'
import ColorPicker from './color-picker'

export default {
  name: 'VeColorPicker',
  components: {
    ColorPicker,
    VeIcon
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
  data() {
    const color = new Color({
      format: this.colorFormat
    })

    return {
      color,
      display: this.simple,
      currentColor: this.value
    }
  },
  computed: {
    sizeStyle() {
      const size = formatCss(this.size)
      return {
        width: size,
        height: size
      }
    }
  },
  watch: {
    value(val) {
      if (val && val !== this.color.value) {
        this.color.fromString(val)
        this.currentColor = this.color.value
      }
    }
  },
  beforeMount() {
    const value = this.value
    if (value) {
      this.color.fromString(value)
    }
  },
  mounted() {
    if (!this.simple) {
      document.documentElement.addEventListener('click', this.handleDocument)
    }
  },
  beforeDestroy() {
    document.documentElement.removeEventListener('click', this.handleDocument)
  },
  methods: {
    handleConfirm() {
      const { value } = this.color
      this.currentColor = value
      this.$emit('input', value)
      this.$emit('change', value)
      if (!this.simple) {
        this.display = false
      }
    },
    handleDocument() {
      if (this.display) {
        this.display = false
      }
    }
  }
}
</script>
