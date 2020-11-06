<template>
  <div
    ref="bar"
    :class="{
      'v-easy-scroll-bar--thumb': true,
      'v-easy-scroll-bar--thumb__always': always,
      'v-easy-scroll-bar--thumb__show': cursorDown,
    }"
    @mousedown="handleMouseDown"
  />
</template>

<script>
import { BAR_MAP } from './bar-type'
import { on, off } from '@/utils/dom'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Bar',
  props: {
    horizontal: Boolean,
    vertical: Boolean,
    always: Boolean,
  },
  emits: ['scroll', 'mousedown', 'mouseup'],
  data() {
    return {
      Y: 0,
      cursorDown: false,
    }
  },
  computed: {
    wrap() {
      return this.$parent.wrap
    },
    bar() {
      return this.horizontal ? BAR_MAP.horizontal : BAR_MAP.vertical
    },
  },
  beforeUnmount() {
    off(document, 'mouseup', this.handleMouseMove)
  },
  methods: {
    handleMouseDown(e) {
      e.stopImmediatePropagation()
      this.cursorDown = true
      this[this.bar.axis] =
        this.$el.getBoundingClientRect()[this.bar.size] - e[this.bar.offsetSize]
      document.onselectstart = () => false
      this.$emit('mousedown')
      on(document, 'mousemove', this.handleMouseMove)
      on(document, 'mouseup', this.handleMouseUp)
    },
    handleMouseMove(e) {
      const { direction, client, offset, scroll, scrollSize, axis } = this.bar
      const parentOffset =
        (this.$el.offsetParent.getBoundingClientRect()[direction] - e[client]) *
        -1
      const thumbClickPosition = this.$el[offset] - this[axis]
      const thumbPositionPercentage =
        ((parentOffset - thumbClickPosition) * 100) /
        this.$el.offsetParent[offset]

      this.wrap[scroll] =
        (thumbPositionPercentage * this.wrap[scrollSize]) / 100
      this.$emit('scroll')
    },
    handleMouseUp() {
      this.cursorDown = false
      off(document, 'mousemove', this.handleMouseMove)
      document.onselectstart = null
      this.$emit('mouseup')
    },
  },
})
</script>
