<template>
  <div
    class="v-easy-input input input-subnet"
    :style="{
      'max-width': maxWidth + 'px',
      width: width + 'px'
    }"
  >
    <ul ref="box" :class="disabled ? 'disabled' : ''">
      <li v-for="(val, index) in maxLength" :key="index">
        <label>
          <input
            type="text"
            :value="result[index]"
            :readonly="readonly"
            :class="errorClass[index]"
            :maxlength="val"
            :disabled="disabled"
            v-bind="$attrs"
            @keydown="handleKeyDown(index, $event)"
            @keyup="handleKeyUp(index, $event)"
            @focus="handleFocus(index, $event)"
            @input="handleInput(index, $event)"
            @blur="handleBlur(index, $event)"
            @paste="handlePaste(index, $event)"
          />
        </label>
        <span v-if="index !== maxLength.length - 1">{{ spliceChar }}</span>
      </li>
    </ul>
    <transition name="v-easy-error">
      <div v-show="conformity" class="error inspection">{{ msg }}</div>
    </transition>
  </div>
</template>

<script>
import { t } from '@/locale/index'
import merge from '@/mixins/merge'

export default {
  name: 'VeSubnet',
  mixins: [merge],
  model: {
    event: 'change'
  },

  computed: {
    msg() {
      return this.message || t('subnet.err')
    }
  },

  watch: {
    result(val) {
      let statusSuccess = true
      for (let i = 0; i < 4; i++) {
        if (typeof val[i] === 'undefined') {
          statusSuccess = false
        }
      }
      if (val.every(item => item === '')) {
        this.conformity = false
        this.errorClass = [] // 如果数据全部为空，那么对错误信息进行影藏
      }
      if (statusSuccess && val.length > 3)
        this.$emit('status', this.checkSub(val.join('.')))
    }
  },

  methods: {
    handlePaste(index, $event) {
      $event.preventDefault()
      let paste = ($event.clipboardData || window.clipboardData).getData('text')
      if (this.checkSub(paste)) {
        this.$emit(
          'change',
          paste.split('.').map(n => (n ? Number(n) : n))
        )
      }
    },

    handleInput(index, $event) {
      this.setCurrentValue($event.target.value, index)
      let first = this.result[index - 1] !== 255
      if (index === 0) first = false
      if (first) {
        for (let i = index; i < this.maxLength.length; i++) {
          this.maxLength[i] = '1'
        }
        if (this.result[index] !== 0) {
          this.errorClass[index] = 'red'
          this.conformity = true
        } else {
          this.conformity = false
          this.errorClass[index] = ''
        }
      } else {
        for (let i = index; i < this.maxLength.length; i++) {
          this.maxLength[i] = '3'
        }
        let regexp = /^(255|254|252|248|240|224|192|128|0)$/
        if (
          !regexp.test(this.result[index]) &&
          this.result[index].length === 3
        ) {
          this.errorClass[index] = 'red'
          this.conformity = true
        } else {
          this.conformity = false
          this.errorClass[index] = ''
        }
      }
      if (
        !this.conformity &&
        index !== 3 &&
        $event.target.value &&
        $event.target.value.length >= this.maxLength[index]
      ) {
        this.$refs.box.getElementsByTagName('input')[index + 1].focus()
      }
      if (Number($event.target.value) === 0) {
        this.maxLength[index] = '1'
      }

      this.$emit('input', { $event, index })
    },

    handleBlur(index, $event) {
      let isCheck =
        this.result.length > 3 && this.result.every(item => item !== '')
      if (isCheck && !this.checkSub(this.result.join('.'))) {
        this.conformity = true
      }
      this.$emit('blur', { $event, index })
    }
  }
}
</script>
