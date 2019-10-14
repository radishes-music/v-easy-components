<template>
  <transition :name="transition">
    <div :class="['tip', 've-tip-'+placement, Class]" v-show="domVisible" @mouseenter="enter" @mouseleave="leave">
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
        html: ''
      };
    },
    components: {
      renderNode: {
        render (h) {
          return this.$parent.VNode()
        }
      }
    },
    methods: {
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
