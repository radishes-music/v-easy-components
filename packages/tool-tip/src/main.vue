<template>
  <transition :name="transition">
    <div
      v-show="domVisible"
      :class="['v-easy-tip', 've-tip-' + placement, 've-tip--' + effect, Class]"
      @mouseenter="enter"
      @mouseleave="handleMouseLeave"
      @click="handleClick"
    >
      <p v-if="html" v-html="html" />
      <p v-else-if="content">
        {{ content }}
      </p>
      <render-node v-else />
      <div :class="['popper__arrow', 'popper__arrow--' + effect]"></div>
    </div>
  </transition>
</template>

<script>
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'VTip',

  components: {
    renderNode: {
      render() {
        const tipVNde = this.$root?.VNode
        let VNode = h('span')
        if (typeof tipVNde === 'function') {
          VNode = tipVNde()
        } else {
          // eslint-disable-next-line no-console
          console.warn('VNode is not a function')
        }
        return VNode
      }
    }
  },
  mounted() {},
  beforeCreate() {},
  methods: {
    handleClick(event) {
      event.stopPropagation()
    },
    handleMouseLeave() {
      if (this.target !== 'click') {
        this.leave()
      }
    },
    enter() {
      if (!this.enterable || this.target === 'click') return false
      this.hover = true
      this.domVisible = true
    },
    leave() {
      this.hover = false
      if (this.enterable) {
        setTimeout(() => {
          !this.hover && (this.domVisible = false)
        }, this.hideAfter)
      } else {
        this.domVisible = false
      }
    }
  }
})
</script>
