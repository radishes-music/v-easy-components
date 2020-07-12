<template>
  <div
    :class="['v-easy-input', 'input', 'input-ip']"
    :style="{
      'max-width': maxWidth + 'px',
      width: width + 'px'
    }"
  >
    <ul ref="box" :class="disabled ? 'disabled' : ''">
      <li v-for="(item, index) in VHtml" :key="index" :class="format">
        <label>
          <input
            type="text"
            :maxLength="item"
            :value="result[index]"
            :readonly="readonly"
            :class="errorClass[index]"
            :disabled="disabled"
            v-bind="$attrs"
            @keydown="handleKeyDown(index, $event)"
            @input="handleInput(index, $event)"
            @focus="handleFocus(index, $event)"
            @blur="handelBlur(index, $event)"
            @paste="handlePaste(index, $event)"
          />
        </label>
        <span v-if="index !== VHtml.length - 1">{{ splitChar }}</span>
      </li>
    </ul>
    <transition name="v-easy-error">
      <div v-show="conformity" class="error inspection">{{ msg }}</div>
    </transition>
  </div>
</template>

<script>
import { t } from '@/locale/index'
import { _initArray } from '@/utils/array-extend'
import merge from '@/mixins/merge'

export default {
  name: 'VeIp',
  mixins: [merge],
  model: {
    event: 'change'
  },

  props: {
    format: { type: String, default: 'ipv4' }
  },

  computed: {
    msg() {
      return this.message || t('ip.err')
    },
    splitChar() {
      if (this.spliceChar !== '.') {
        return this.spliceChar
      }
      return this.format === 'ipv4' ? '.' : ':'
    },
    VHtml() {
      if (this.format === 'ipv4') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.maxLength = _initArray(4, '3')
      } else if (this.format === 'ipv6') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.maxLength = _initArray(8, '4')
      }
      return this.maxLength
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
        this.errorClass = [] // 如果数据全部为空，那么对错误信息进行隐藏
      }
      if (statusSuccess && val.length > 3)
        this.$emit('status', this.isIpv4Reg(val.join('.')))
    }
  },

  methods: {
    handlePaste(index, $event) {
      $event.preventDefault()
      let paste = ($event.clipboardData || window.clipboardData).getData('text')
      if (this.isIpv4Reg(paste)) {
        this.$emit('change', paste.split('.'))
      }
    },

    handleInput(index, $event) {
      this.setCurrentValue($event.target.value, index)

      this.format === 'ipv4' ? this.isIpv4(index) : this.isIpv6(index, $event)

      if ($event.target.value === 0) {
        this.maxLength[index] = '1'
      } else {
        this.maxLength[index] = this.format === 'ipv4' ? '3' : '4'
      }

      // 自动对焦
      if (
        !this.conformity &&
        this.result[index] &&
        this.result[index].length === Number(this.maxLength[index]) &&
        index < this.VHtml.length - 1
      ) {
        this.$refs.box.getElementsByTagName('input')[index + 1].focus()
      }

      this.$emit('input', { $event, index })
    },

    isIpv4(index) {
      // 正则检验

      if (this.result[index] && this.result[index].length > 3 && index === 3) {
        this.result[index] = this.result[index].substring(4, 1)
      }

      if (this.result[index] > 255) {
        this.errorClass[index] = 'red'
        this.conformity = true
        this.$emit('error', this.result)
      } else {
        this.errorClass[index] = ''
        this.conformity = false
        this.errorClass.forEach(item => {
          if (item === 'red') {
            this.conformity = true
          }
        })
      }
    },

    handelBlur(index, $event) {
      if (this.readonly) return false
      if (index === 7 && this.format === 'ipv6') {
        let regexp = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/
        if (regexp.test(this.result.join(':'))) {
          this.conformity = false
        } else {
          this.conformity = true
          this.$emit('error', this.result)
        }
      }
      if (this.format === 'ipv4' && index === 3) {
        let isCheck =
          this.result.length > 3 && this.result.every(item => item !== '')
        if (isCheck && !this.isIpv4Reg(this.result.join('.'))) {
          this.conformity = true
        }
      }
      this.$emit('blur', { $event, index })
    }
  }
}
</script>
