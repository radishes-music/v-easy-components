<template>
  <button class="v-easy-button button"
          :class="[type ? 'easy-button-' + type : '', {
          'button-is-disabled': buttonDisabled,
          'button-is-plain': plain,
          'button-is-circle': circle,
          'button-is-mask': mask,
          ['button-is-mask-' + maskType]: mask
        }]"
          ref="ButtonBox"
          @mouseleave="leave"
          @mouseenter="enter"
          @click="handleClick"
          :type="nativeType">
    <i class="fa fa-spinner fa-spin fa-pulse" v-if="loading"></i>
    <i :class="['fa', 'fa-' + icon, {'button-icon-normal': $slots.default}, { 'fa-spin': rotate }]" v-else-if="icon"></i>
    <span v-if="$slots.default" :class="['button-text', {'button-mask-text': mask}]">
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
        maskPosition: {},
        d: 0,

      }
    },

    props: {
      type: {type: String, default: 'default'},
      nativeType: {type: String, default: 'button'},
      maskType: {type: String, default: 'default'},
      size: String,
      icon: {type: String},
      disabled: {type: Boolean, default: false},
      circle: Boolean,
      plain: Boolean,
      rotate: Boolean,
      mask: {type: [Boolean, String], default: false},
      loading: {type: Boolean, default: false},
    },

    computed: {
      buttonDisabled() {
        return this.disabled || this.loading;
      }
    },

    methods: {
      calc() {
        const parent = this.$refs.ButtonBox;
        const w = parent.offsetHeight,
          h = parent.offsetWidth;
        this.d = Math.floor(Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2)))

        this.maskPosition = {
          width: this.d * 2 + 'px',
          height: this.d * 2 + 'px'
        }

      },
      leave(e) {
        if (this.maskType === 'default') return false

        this.style = {
          left: e.offsetX + 'px',
          top: e.offsetY + 'px',
          transition: 'all .2s linear'
        }
      },
      enter(e) {
        if (this.maskType === 'default') return false;

        this.maskPosition.left = -(Math.abs(this.d - e.offsetX)) + 'px';
        this.maskPosition.top = -(Math.abs(this.d - e.offsetY)) + 'px';

        this.style = {
          left: e.offsetX + 'px',
          top: e.offsetY + 'px',
          transition: ''
        };

        // Last position offset problem
        setTimeout(() => {
          this.style = {
            ...this.maskPosition,
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
        this.$nextTick(this.calc)
      }
    }
  }
</script>
