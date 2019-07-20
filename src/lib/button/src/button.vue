<template>
  <div class="v-easy-button button"
       :class="[type ? 'easy-button-' + type : '', {
        'button-is-disabled': buttonDisabled,
        'button-is-plain': plain,
        'button-is-circle': circle
     }]">
    <button @click="handleClick" :type="nativeType">
      <i :class="['fa', 'fa-' + icon, { 'is-rotate': rotate }]" v-if="icon"></i>
      <span v-if="$slots.default"><slot></slot></span>
    </button>
    <span class="button-mask" :class="maskType" v-if="mask"></span>
  </div>
</template>

<script>
  export default {
    name: 'VeButton',

    inject: {
      elForm: {
        default: ''
      },
    },

    props: {
      type: {type: String, default: 'default'},
      nativeType: {type: String, default: 'button'},
      maskType: {type: String, default: 'button-default-mask'},
      size: String,
      icon: {type: String},
      disabled: Boolean,
      circle: Boolean,
      plain: Boolean,
      rotate: Boolean,
      mask: {type: Boolean, default: false}
    },

    computed: {
      buttonDisabled() {
        return this.disabled || (this.elForm || {}).disabled;
      }
    },

    methods: {
      handleClick(evt) {
        if (this.buttonDisabled) return false;
        this.$emit('click', evt);
      }
    }
  }
</script>