<template>
  <button class="v-easy-button button"
          :class="[type ? 'easy-button-' + type : '', {
          'button-is-disabled': buttonDisabled,
          'button-is-plain': plain,
          'button-is-circle': circle,
          'button-is-mask': mask,
          ['button-is-mask-' + maskType]: mask
        }]"
          ref="button"
          @mouseleave="leave"
          @mouseenter="enter"
          @click="handleClick"
          :type="nativeType">
    <i :class="['fa', 'fa-' + icon, {'button-icon-normal': $slots.default}, { 'is-rotate': rotate }]" v-if="icon"></i>
    <span v-if="$slots.default" class="button-text button-mask-text">
      <slot></slot>
    </span>
    <span class="button-mask" :class="'button-mask-' + maskType" v-if="mask" :style="style"></span>
  </button>
</template>

<script>

  export default {
    name: 'VeButton',

    data() {
      return {
        style: {},
        rect: {},
        d: 0
      }
    },

    props: {
      type: {type: String, default: 'default'},
      nativeType: {type: String, default: 'button'},
      maskType: {type: String, default: 'primary'},
      size: String,
      icon: {type: String},
      disabled: Boolean,
      circle: Boolean,
      plain: Boolean,
      rotate: Boolean,
      mask: {type: [Boolean, String], default: false}
    },

    computed: {
      buttonDisabled() {
        return this.disabled;
      }
    },

    methods: {
      calc(parent) {
        const w = parent.offsetHeight,
          h = parent.offsetWidth;
        this.d = Math.floor(Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2)))

        this.rect = {
          width: this.d * 2,
          height: this.d * 2
        }

      },
      leave(e) {
        if (this.maskType === 'default') return false

        this.style = {
          left: e.offsetX,
          top: e.offsetY,
          transition: 'all .2s linear'
        }
      },
      enter(e) {
        if (this.maskType === 'default') return false

        this.rect['left'] = -(Math.abs(this.d - e.offsetX))
        this.rect['top'] = -(Math.abs(this.d - e.offsetY))

        this.style = {
          left: e.offsetX,
          top: e.offsetY,
          transition: ''
        }

        // Last position offset problem
        setTimeout(() => {
          this.style = {
            ...this.rect,
            transition: 'all .2s linear'
          }
        }, 14)

      },
      handleClick(evt) {
        if (this.buttonDisabled) return false;
        this.$emit('click', evt);
      }
    },

    mounted() {
      if (this.maskType !== 'default') {
        this.$nextTick(this.calc(this.$refs.button))
      }
    }
  }
</script>
