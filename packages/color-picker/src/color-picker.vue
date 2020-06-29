<template>
  <transition name="v-stretch">
    <div v-show="display" class="v-color-main" @click.stop="noop">
      <div class="v-color-top">
        <div class="v-color-content" ref="content" :style="mergeStyle">
          <div class="v-color-white"></div>
          <div class="v-color-black"></div>
          <div class="v-color-pointer" :style="pointerStyle"></div>
        </div>
        <color-hue ref="hue" :color="color" />
      </div>
      <div class="v-color-bottom">
        <div
          class="v-color-preview"
          :style="{ backgroundColor: previewColor }"
        ></div>
        <ve-input
          v-model="formatString"
          @change="handleChange"
          @keyup.native.enter="handleChange"
        />
        <ve-button @click="handleConfirm">{{ t('button.confirm') }}</ve-button>
      </div>
    </div>
  </transition>
</template>

<script>
import { formatCss } from '@/utils/css'
import { t } from '@/locale/index'
import draggable from '@packages/color-picker/src/draggable'
import VeInput from '@packages/input/src/main'
import VeButton from '@packages/button/src/main'
import ColorHue from '@packages/color-picker/src/color-hue'

export default {
  name: 'ColorPicker',
  components: {
    VeInput,
    ColorHue,
    VeButton
  },
  props: {
    width: {
      required: true
    },
    height: {
      required: true
    },
    color: {
      required: true
    },
    display: Boolean
  },
  computed: {
    mergeStyle() {
      const width = formatCss(this.width)
      const height = formatCss(this.height)
      return {
        width,
        height,
        backgroundColor: 'hsl(' + this.color.get('hue') + ', 100%, 50%)'
      }
    },
    previewColor() {
      return this.color.value
    },
    pointerStyle() {
      const left = formatCss(this.cursorLeft)
      const top = formatCss(this.cursorTop)
      return {
        left,
        top
      }
    }
  },
  data() {
    return {
      formatString: this.color.value,
      cursorLeft: '',
      cursorTop: '',
      background: '',
      t: t
    }
  },
  watch: {
    color: {
      deep: true,
      handler: function(value) {
        this.formatString = value.value
      }
    },
    display(v) {
      if (v) {
        this.tickUpdate()
      }
    }
  },
  methods: {
    noop() {},
    handleChange() {
      this.color.fromString(this.formatString)
      this.tickUpdate()
      this.handleConfirm()
    },
    handleConfirm() {
      this.$emit('confirm')
    },
    async tickUpdate() {
      await this.$nextTick()
      const { hue } = this.$refs
      this.update()
      hue.update()
    },
    update() {
      const saturation = this.color.get('saturation')
      const value = this.color.get('value')

      const el = this.$refs.content
      let { clientWidth: width, clientHeight: height } = el

      this.cursorLeft = (saturation * width) / 100 - 4
      this.cursorTop = ((100 - value) * height) / 100 - 4

      this.background = 'hsl(' + this.color.get('hue') + ', 100%, 50%)'
    },

    handleDrag(event) {
      this.handleGetPointer(event)
    },
    handleGetPointer(event) {
      const el = this.$refs.content
      const rect = el.getBoundingClientRect()

      let left = event.clientX - rect.left
      let top = event.clientY - rect.top
      left = Math.max(0, left)
      left = Math.min(left, rect.width)

      top = Math.max(0, top)
      top = Math.min(top, rect.height)

      const value = 100 - (top / rect.height) * 100

      this.color.set({
        saturation: (left / rect.width) * 100,
        value: value
      })

      this.cursorLeft = left - 4
      this.cursorTop = top - 4
    }
  },
  mounted() {
    draggable(this.$refs.content, {
      drag: event => {
        this.handleDrag(event)
      },
      end: event => {
        this.handleDrag(event)
      }
    })

    if (this.$parent.simple) {
      this.tickUpdate()
    } else {
      this.update()
    }
  }
}
</script>
