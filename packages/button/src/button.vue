<template>
  <button class="v-easy-button button"
          :class="[type ? 'easy-button-' + type : '', 'easy-button__' + size, {
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
    <i :class="[iconClass, 'fa-' + icon, {'button-icon-normal': $slots.default}, { 'fa-spin': rotate }]" v-else-if="icon"></i>
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
        rect: 0,
        iconS: {
          brands: 'fab',
          regular: 'far',
          solid: 'fa',
        }
      }
    },

    props: {
      type: {type: String, default: 'default'},
      nativeType: {type: String, default: 'button'},
      maskType: {type: String, default: 'default'},
      size: {type: String, default: 'default'},
      icon: {type: String},
      iconStyle: {type: [String, Array], default: 'solid'},
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
      },
      iconClass() {
        let className = '';
        if (Array.isArray(this.iconStyle)) {
          className = this.iconStyle.map(item => this.iconS[item]).join(' ')
        } else {
          switch (this.iconStyle) {
            case 'brands': className = 'fab'; break;
            case 'regular': className = 'far'; break;
            case 'solid': className = 'fa'; break;
            default: className = 'fa';
          }
        }
        return className;
      }
    },

    methods: {
      calc() {
        const parent = this.$refs.ButtonBox;
        const w = parent.offsetHeight,
          h = parent.offsetWidth;
        this.rect = Math.floor(Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2)))

        this.maskPosition = {
          width: this.rect * 2 + 'px',
          height: this.rect * 2 + 'px'
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

        this.maskPosition.left = -(Math.abs(this.rect - e.offsetX)) + 'px';
        this.maskPosition.top = -(Math.abs(this.rect - e.offsetY)) + 'px';

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
