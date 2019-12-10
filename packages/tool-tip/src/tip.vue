<template>
  <transition :name="transition">
    <div :class="['v-easy-tip', 've-tip-'+placement, 've-tip--' + effect, Class]" v-show="domVisible" @mouseenter="enter" @mouseleave="handleMouseLeave" @click="handleClick">
      <p v-if="html" v-html="html"></p>
      <p v-else-if="content">{{ content }}</p>
      <render-node v-else></render-node>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'v-tip',
    data() {
      return {
        placement: 'top',
        Class: [],
        content: '',
        domVisible: false,
        hover: false,
        hideAfter: 200,
        transition: 'fade',
        enterable: true,
        target: '',
        html: '',
        effect: 'dark',
      };
    },
    components: {
      renderNode: {
        render (h) {
          const parent = this.$parent;
          let VNode = h('span');
          if (typeof parent.VNode === 'function') {
            VNode = parent.VNode()
          } else {
            console.warn('VNode is not a function')
          }
          return VNode
        },
      }
    },
    methods: {
      handleClick(event) {
        event.stopPropagation();
      },
      handleMouseLeave() {
        if (this.target === 'click') {

        } else {
          this.leave()
        }
      },
      enter() {
        if (!this.enterable) return false;
        this.hover = true;
        this.domVisible = true;
      },
      leave() {
        this.hover = false;
        if (this.enterable) {
          setTimeout(() => {
            !this.hover && (this.domVisible = false);
          }, this.hideAfter);
        } else {
          this.domVisible = false;
        }
      }
    },
    mounted() {

    },
    beforeCreate() {

    }
  }
</script>
