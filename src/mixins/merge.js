import { _initArray } from '../utils/array-extend'
export default {
  data() {
    return {
      errorClass: [],
      currentIndex: 0,
      conformity: false,
      maxLength: _initArray(4, '3')
    }
  },
  watch: {
    conformity(val) {
      this.$emit('status', !val)
    }
  },
  props: {
    maxWidth: { type: String },
    width: { type: [String, Number], default: 240 },
    disabled: { type: [Boolean, String], default: false },
    spliceChar: { type: String, default: '.' },
    message: { type: String },
    value: [String, Array],
    readonly: { type: [Boolean, String], default: false }
  },
  computed: {
    result() {
      let { value } = this
      let data = []
      data = value === undefined || value === null || value === '' ? [] : value
      if (!Array.isArray(value)) {
        const port = value.split(':')
        if (port[0]) {
          data = port[0].split('.')
          data = data[0] === '' ? [] : data
        }
        if (port[1]) {
          data.push(port[1])
        }
      }
      return data
    }
  },
  methods: {
    handleKeyUp(index, $event) {
      this.$emit('keyUp', { $event, index })
    },
    handleFocus(index, $event) {
      this.currentIndex = index
      this.$emit('focus', { $event, index })
    },
    handleKeyDown(index, $event) {
      const input = this.$refs.box.getElementsByTagName('input')
      if (
        $event.keyCode === 8 &&
        index !== 0 &&
        (!$event.target.value || $event.target.value.length === 0)
      ) {
        $event.preventDefault()
        input[index - 1].focus()
        this.setCaretPosition(
          input[index - 1],
          this.result[index - 1] + '' ? (this.result[index - 1] + '').length : 0
        )
      }
      if (
        ($event.keyCode === 110 || $event.keyCode === 190) &&
        index !== 3 &&
        $event.target.value !== ''
      ) {
        $event.preventDefault()
        input[index + 1].focus()
      }
      let current = this.getCursorPosition(input[index]),
        len = $event.target.value.length
      if ($event.keyCode === 39 && current >= len && index !== 3) {
        $event.preventDefault()
        input[index + 1].focus()
        this.setCaretPosition(input[index + 1], 0)
      }
      if ($event.keyCode === 37 && current === 0 && index !== 0) {
        $event.preventDefault()
        input[index - 1].focus()
        this.setCaretPosition(
          input[index - 1],
          this.result[index - 1] + '' ? (this.result[index - 1] + '').length : 0
        )
      }
      this.$emit('keyDown', { $event, index })
    },
    setCurrentValue(value, index) {
      let { result } = this
      const _v = value.replace(/\D/g, '')
      this.$set(result, index, _v ? Number(_v) : '')
      result = result.map(n => (n ? Number(n) : n))
      this.$emit('change', result)
    },
    getCursorPosition(el) {
      let cursorPos = 0
      if (document.selection) {
        var selectRange = document.selection.createRange()
        selectRange.moveStart('character', -el.value.length)
        cursorPos = selectRange.text.length
      } else {
        cursorPos = el.selectionStart
      }
      return cursorPos
    },
    setCaretPosition(el, pos) {
      if (el.setSelectionRange) {
        // IE Support
        el.focus()
        el.setSelectionRange(pos, pos)
      } else if (el.createTextRange) {
        // Firefox support
        const range = el.createTextRange()
        range.collapse(true)
        range.moveEnd('character', pos)
        range.moveStart('character', pos)
        range.select()
      }
    },
    isIpv4Reg(ip) {
      let regexp = /^(?:(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:1[0-9][0-9]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:2[0-4][0-9])|(?:25[0-5])|(?:1[0-9][0-9])|(?:[1-9][0-9])|(?:[0-9]))$/
      return regexp.test(ip)
    },
    isIpv6(index) {
      let regexp = /^[0-9a-fA-F]*$/g
      if (!regexp.test(this.result[index])) {
        this.result[index] =
          this.result[index] &&
          this.result[index].substring(0, this.result[index].length - 1)
      }
    },
    checkSub(mask) {
      let regexp = /^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/
      return regexp.test(mask)
    }
  }
}
