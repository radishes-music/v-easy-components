<template>
  <transition :name="transition">
    <div :class="['v-easy-tip', 've-tip-'+placement, Class]" v-show="domVisible" @mouseenter="enter" @mouseleave="handleMouseLeave" @click="handleClick">
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
        html: ''
      };
    },
    components: {
      renderNode: {
        render (h) {
          const VNode = this.$parent.VNode();
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
