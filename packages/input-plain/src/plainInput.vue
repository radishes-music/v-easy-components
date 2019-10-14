<template>
  <div class="v-easy-input input input-plain"
       :style="{'max-width': maxWidth + 'px'}">
    <input :type="typeInput"
           :value="currentVal"
           @compositionstart="handleComposition"
           @compositionupdate="handleComposition"
           @compositionend="handleComposition"
           :class="error && 'red'"
           :disabled="disabled"
           :readonly="readonly"
           v-bind="$attrs"
           @input="handleInput"
           @blur="handleBlur"
           @focus="handleFocus"
           @change="handleChange"
    >
    <transition name="v-easy-error">
      <div class="error inspection" v-show="error" :style="errorOptions">{{ msg }}</div>
    </transition>
  </div>
</template>

<script>
  import {t} from '@/local/index'
  import {contain} from '@/utils/ArrayExtend'

  export default {
    model: {
      event: 'changeResult'
    },
    name: 'VeInput',
    data() {
      return {
        currentVal: this.value === undefined || this.value === null
          ? ''
          : this.value,
        error: false,
        eventContainer: '',
        isOnComposition: false,
        valueBeforeComposition: null
      }
    },

    watch: {
      value(val) {
        this.setCurrentValue(val);

        this.mergeTarget('modify');
      },
      eventContainer(val) {
        this.mergeMesh(val);
      },
      error(val) {
        this.$emit('status', !val)
      }
    },

    props: {
      maxWidth: {type: String},
      errorOptions: {type: Object},
      disabled: {type: [Boolean, String], default: false},
      readonly: {type: [Boolean, String], default: false},
      message: {type: String},
      inspect: {type: String, default: '/^.?$/g'},
      type: {type: String, default: 'length'},
      typeInput: {type: String, default: 'text'},
      target: {type: [String, Array], default: 'blur'},
      options: [Object, Array],
      value: {default: ''}
    },

    computed: {
      opt_type() {
        return this.options
          ? (Array.isArray(this.options) ? {min: this.options[0], max: this.options[1]} : this.options)
          : null
      },
      msg() {
        return this.options
          ? `${this.message}(${this.options.min} - ${this.options.max})`
          : (this.message || t('plain.err'))
      },
    },

    methods: {
      err() {
        return t('plain.err');
      },
      handleInput(event) {
        this.setCurrentValue(event.target.value);

        this.mergeTarget('input');

        this.$emit('input', event);

      },
      handleBlur(event) {
        this.$emit('blur', event);

        this.mergeTarget('blur')
      },
      handleFocus(event) {
        this.$emit('focus', event);

        this.mergeTarget('focus')
      },
      handleChange(event) {
        this.$emit('change', event.target.value);
      },
      mergeTarget(type) {
        if (Array.isArray(this.target))
          contain(this.target, type) && this.mergeMesh(type);
        else
          this.target === type && this.mergeMesh(type);
      },
      handleComposition(event) {
        if (event.type === 'compositionend') {
          this.isOnComposition = false;
          this.currentVal = this.valueBeforeComposition;
          this.valueBeforeComposition = null;
          this.handleInput(event);
        } else {
          const text = event.target.value;
          const lastCharacter = text[text.length - 1] || '';
          this.isOnComposition = !/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(lastCharacter);
          if (this.isOnComposition && event.type === 'compositionstart') {
            this.valueBeforeComposition = text;
          }
        }
      },
      mergeMesh(val) {
        if (this.opt_type) {
          if (val === this.target) {
            this.error = (this.currentVal.length < this.options.min || this.currentVal.length > this.options.max);
          }
        } else if (this.type === 'reg' && contain(this.target, val)) {
          let regexp = new RegExp(this.inspect);
          this.error = !regexp.test(this.currentVal);
        }
      },
      setCurrentValue(value) {
        if (value === this.currentVal) return;
        this.currentVal = value;
        this.$emit('changeResult', this.currentVal);
      },
    }
  }
</script>
