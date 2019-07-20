<template>
  <transition :name="transition">
    <div :class="['tip', 've-tip-'+placement, Class]" v-show="domVisible" @mouseenter="enter" @mouseleave="leave">
      <p ref="_tip_content__">{{ content }}</p>
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
        vNode: '',
        content: '',
        domVisible: false,
        hover: false,
        hideAfter: 200,
        transition: 'fade',
        enterable: false,
      };
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
      if (typeof this.vNode === 'object') {
        this.content = '';
        this.vNode.$mount(this.$refs._tip_content__);
      }
    }
  }
</script>