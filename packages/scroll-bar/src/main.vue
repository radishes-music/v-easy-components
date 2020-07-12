<template>
  <div class="v-easy-scroll">
    <div ref="wrap" class="v-easy-scroll-wrap">
      <div class="v-easy-scroll-wrap--view">
        <slot />
      </div>
    </div>
    <div class="v-easy-scroll-bar is-horizontal">
      <bar horizontal :always="always" :style="horizontal" />
    </div>
    <div class="v-easy-scroll-bar is-vertical">
      <bar vertical :always="always" :style="vertical" />
    </div>
  </div>
</template>

<script>
import Bar from './bar'

export default {
  name: 'VeScroll',
  components: {
    Bar
  },
  props: {
    size: {
      type: [Number, String],
      default: 6
    },
    always: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const size = this.size + 'px'
    return {
      vertical: {
        width: size
      },
      horizontal: {
        height: size
      }
    }
  },
  computed: {
    wrap() {
      return this.$refs.wrap
    }
  },
  watch: {},
  mounted() {
    this.$nextTick(this.update)
  },
  methods: {
    update() {
      const wrap = this.wrap
      if (wrap) {
        const sizeHeight = (wrap.clientHeight * 100) / wrap.scrollHeight
        const sizeWidth = (wrap.clientWidth * 100) / wrap.scrollWidth
        if (sizeHeight < 100) {
          this.$set(this.vertical, 'height', sizeHeight + '%')
        }
        if (sizeWidth < 100) {
          this.$set(this.horizontal, 'width', sizeWidth + '%')
        }
        wrap.addEventListener('scroll', this.scroll)
      }
    },
    scroll() {
      Promise.resolve().then(() => {
        const wrap = this.wrap
        const moveY = (wrap.scrollTop * 100) / wrap.clientHeight
        const moveX = (wrap.scrollLeft * 100) / wrap.clientWidth
        this.$set(this.vertical, 'transform', `translateY(${moveY}%)`)
        this.$set(this.horizontal, 'transform', `translateX(${moveX}%)`)
      })
    }
  }
}
</script>
