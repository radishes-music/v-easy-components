<template>
  <div
    class="v-easy-input input v-easy-input-plain"
    :style="{ 'max-width': maxWidth + 'px' }"
  >
    <textarea v-if="typeInput === 'textarea'" v-bind="$attrs" />
    <template v-else>
      <input
        :type="typeInput"
        :value="currentVal"
        :max="propertyMaxMin ? propertyMaxMin.max : null"
        :min="propertyMaxMin ? propertyMaxMin.min : null"
        :step="typeInput === 'number' ? step : null"
        :disabled="disabled"
        :class="{ 'v-easy-input--error': error }"
        :readonly="readonly"
        v-bind="$attrs"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
        @change="handleChange"
      />
      <div v-if="isNumberPrefix" class="input-inner-spin">
        <i class="fa fa-chevron-up" @click="handleIncrease" />
        <i class="fa fa-chevron-down" @click="handleDecrease" />
      </div>
      <transition name="v-easy-error">
        <div v-if="error" class="error inspection" :style="errorOptions">
          {{ msg }}
        </div>
      </transition>
    </template>
  </div>
</template>

<script>
import { t } from '@/locale/index'
import { contain } from '@/utils/array-extend'

export default {
  name: 'VeInput',

  props: {
    maxWidth: { type: String },
    errorOptions: { type: Object },
    disabled: { type: [Boolean, String], default: false },
    readonly: { type: [Boolean, String], default: false },
    message: { type: String },
    inspect: { type: String, default: '/^.?$/g' },
    type: { type: String, default: 'length' },
    typeInput: { type: String, default: 'text' },
    step: { type: [Number, String], default: 1 },
    target: { type: [String, Array], default: 'blur' },
    options: [Object, Array],
    value: { default: '' }
  },

  data() {
    return {
      currentVal:
        this.value === undefined || this.value === null ? '' : this.value,
      error: false,
      eventContainer: '',
      isOnComposition: false,
      valueBeforeComposition: null
    }
  },

  computed: {
    normalizedOptions() {
      return Array.isArray(this.options)
        ? { min: this.options[0], max: this.options[1] }
        : this.options
    },
    opt_type() {
      return this.options
        ? this.normalizedOptions
        : { min: -Infinity, max: Infinity }
    },
    propertyMaxMin() {
      if (this.typeInput === 'number') {
        return this.normalizedOptions
      }
      return null
    },
    msg() {
      return this.options
        ? `${this.message}(${this.opt_type.min} - ${this.opt_type.max})`
        : this.message || t('plain.err')
    },
    isNumberPrefix() {
      return this.typeInput === 'number'
    }
  },

  watch: {
    value(val) {
      this.setCurrentValue(val)

      this.mergeTarget('modify')
    },
    eventContainer(val) {
      this.mergeMesh(val)
    },
    error(val) {
      this.$emit('status', !val)
    }
  },

  methods: {
    handleIncrease() {
      if (this.exceedMax()) {
        this.setCurrentValue(+this.currentVal + +this.step)
      }
    },
    handleDecrease() {
      if (this.exceedMin()) {
        this.setCurrentValue(+this.currentVal - +this.step)
      }
    },
    exceedMax() {
      return +this.currentVal < this.opt_type?.max
    },
    exceedMin() {
      return +this.currentVal > this.opt_type?.min
    },
    err() {
      return t('plain.err')
    },
    handleInput(event) {
      this.setCurrentValue(event.target.value)
      this.mergeTarget('input')
      this.$emit('input', event.target.value)
    },
    handleBlur(event) {
      this.$emit('blur', event)
      this.mergeTarget('blur')
    },
    handleFocus(event) {
      this.$emit('focus', event)
      this.mergeTarget('focus')
    },
    handleChange(event) {
      this.$emit('change', event.target.value)
    },
    mergeTarget(type) {
      if (Array.isArray(this.target))
        contain(this.target, type) && this.mergeMesh(type)
      else this.target === type && this.mergeMesh(type)
    },
    handleComposition(event) {
      if (event.type === 'compositionend') {
        this.isOnComposition = false
        this.currentVal = this.valueBeforeComposition
        this.valueBeforeComposition = null
        this.handleInput(event)
      } else {
        const text = event.target.value
        const lastCharacter = text[text.length - 1] || ''
        this.isOnComposition = !/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(
          lastCharacter
        )
        if (this.isOnComposition && event.type === 'compositionstart') {
          this.valueBeforeComposition = text
        }
      }
    },
    mergeMesh(val) {
      if (this.type === 'length') {
        if (val === this.target) {
          this.error =
            this.currentVal.length < this.opt_type.min ||
            this.currentVal.length > this.opt_type.max
        }
      } else if (this.type === 'reg' && contain(this.target, val)) {
        let regexp = new RegExp(this.inspect)
        this.error = !regexp.test(this.currentVal)
      }
    },
    setCurrentValue(value) {
      if (value === this.currentVal) return
      this.currentVal = value
      if (this.typeInput === 'number') {
        if (!this.exceedMax()) {
          this.currentVal = this.normalizedOptions.max
        }
        if (!this.exceedMin()) {
          this.currentVal = this.normalizedOptions.min
        }
      }
      this.$emit('input', this.currentVal)
    }
  }
}
</script>
