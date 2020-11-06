<template>
  <div class="v-easy-scroll">
    <div ref="wrap" class="v-easy-scroll-wrap">
      <div ref="contanier" class="v-easy-scroll-wrap--view">
        <slot />
      </div>
    </div>
    <div class="v-easy-scroll-bar is-horizontal">
      <bar
        horizontal
        :always="always"
        :style="horizontal"
        @mouseup="$emit('stop')"
        @mousedown="$emit('start')"
        @scroll="$emit('scroll', 'horizontal')"
      />
    </div>
    <div class="v-easy-scroll-bar is-vertical">
      <bar
        vertical
        :always="always"
        :style="vertical"
        @mouseup="$emit('stop')"
        @mousedown="$emit('start')"
        @scroll="$emit('scroll', 'vertical')"
      />
    </div>
  </div>
</template>

<script>
import Bar from './bar'
import { defineComponent } from 'vue'
import { TweenMap } from '@/utils/tween'

export default defineComponent({
  name: 'VeScroll',
  components: {
    Bar,
  },
  props: {
    size: {
      type: [Number, String],
      default: 6,
    },
    always: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [Number, Object],
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 300
    },
    offset: {
      type: Number,
      default: 0
    },
    easing: {
      type: String,
      default: 'Quad-easeOut'
    }
  },
  emits: ['scroll', 'start', 'stop', 'mousedown'],
  data() {
    const size = this.size + 'px'
    return {
      vertical: {
        width: size,
      },
      horizontal: {
        height: size,
      }
    }
  },
  computed: {
    easingFn() {
      return TweenMap[this.easing]
    },
    wrap() {
      return this.$refs.wrap
    },
    wrapTop() {
      return this.wrap.getBoundingClientRect().top
    },
    contanier() {
      return this.$refs.contanier
    },
    contanierChildren() {
      if (this.contanier.children.length <= 1) {
        return this.contanier.children[0]
      }
      return null
    },
    currentTop() {
      if (this.contanierChildren) {
        try {
          return this.contanierChildren.children[this.to].getBoundingClientRect().top - this.wrapTop
        } catch (e) {
          // eslint-disable-next-line no-console
          console.warn(e)
        }
      }
      return 0
    }
  },
  watch: {
    to(v) {
      if (!this.disabled) {
        if (typeof v === 'number') {
          // The left and right displacements are temporarily not supported
          const top = this.currentTop + this.wrap.scrollTop
          
          this.animation(this.wrap.scrollTop, top - this.offset, (v) => {
            this.wrap.scrollTop = v
          })
        } else {

        }
      }
      
    }
  },
  mounted() {
    this.$nextTick(this.update)
    const contanier = this.contanier
    if (contanier) {
      if (contanier.children.length > 1) {
        // eslint-disable-next-line no-console
        console.warn('ve-scroll accepts a follow element')
      }
    }
  },
  updated() {
    this.update()
  },
  methods: {
    animation(from, to, cb) {
      let start = 0
      var step = () => {
        var value = this.easingFn(start, from, to - from, this.duration / 10)
        cb(Number(value.toFixed(2)))
        start++
        if (start <= this.duration / 10) {
          requestAnimationFrame(step)
        }
      }
      step()
    },
    update() {
      const wrap = this.wrap
      
      if (wrap) {
        const sizeHeight = (wrap.clientHeight * 100) / wrap.scrollHeight
        const sizeWidth = (wrap.clientWidth * 100) / wrap.scrollWidth
        if (sizeHeight < 100) {
          this.vertical.height = sizeHeight + '%'
        }
        if (sizeWidth < 100) {
          this.horizontal.width = sizeWidth + '%'
        }
        wrap.addEventListener('scroll', this.scroll)
      }
    },
    scroll() {
      Promise.resolve().then(() => {
        const wrap = this.wrap
        const moveY = (wrap.scrollTop * 100) / wrap.clientHeight
        const moveX = (wrap.scrollLeft * 100) / wrap.clientWidth
        this.vertical.transform = `translateY(${moveY}%)`
        this.horizontal.transform = `translateX(${moveX}%)`
      })
    },
  },
})
</script>
