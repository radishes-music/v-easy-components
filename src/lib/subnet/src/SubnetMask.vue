<template>
  <div class="v-easy-input input input-subnet"
       :style="{
                'max-width': maxWidth + 'px',
                'width': width + 'px'
         }">
    <ul ref="box" :class="disabled
                              ? 'disabled'
                              : ''">
      <li v-for="(val, index) in maxs" :key="index">
        <input type="text"
               :value="result[index]"
               :readonly="readonly"
               :class="errorClass[index]"
               :maxlength="maxs[index]"
               :disabled="disabled"
               v-bind="$attrs"
               @keydown="handleKeyDown(index, $event)"
               @keyup="handleKeyUp(index, $event)"
               @focus="handleFocus(index, $event)"
               @input="handleInput(index, $event)"
               @blur="handleBlur(index, $event)"
        >
        <span v-if="index !== (maxs.length - 1)">{{ spliceChar }}</span>
      </li>
    </ul>
    <transition name="v-easy-error">
      <div class="error inspection" v-show="conformity">{{ msg }}</div>
    </transition>
  </div>
</template>

<script>
  import {t} from '../../../local/index'
  import {_initArray} from '../../../utils/ArrayExtend'
  import merge from '../../../mixins/merge'

  export default {
    model: {
      event: 'changeResult'
    },
    name: 'VeSubnet',
    mixins: [merge],
    data() {
      return {
        maxs: _initArray(4, '3'),
      }
    },

    watch: {
      result(val) {
        let statusSuccess = true;
        for (let i = 0; i < 4; i++) {
          if (typeof val[i] === 'undefined') {
            statusSuccess = false;
          }
        }
        if (val.every(item => item === '')) {
          this.conformity = false;
          this.errorClass = []; // 如果数据全部为空，那么对错误信息进行影藏
        }
        if (statusSuccess && val.length > 3) this.$emit('status', this.checkSub(val.join('.')));
      }
    },

    props: {
      maxWidth: {type: String},
      width: [String],
      disabled: {type: [Boolean, String], default: false},
      spliceChar: {type: String, default: '.'},
      message: {type: String},
      readonly: {type: [Boolean, String], default: false},
      value: [String, Array],
    },

    computed: {
      msg() {
        return this.message || t('subnet.err')
      },
    },

    methods: {
      handleInput(index, $event) {

        this.setCurrentValue($event.target.value, index);

        let first = this.result[index - 1] !== '255';
        if (index === 0) first = false;
        if (first) {
          for (let i = index; i < this.maxs.length; i++) {
            this.maxs[i] = '1'
          }
          if (this.result[index] !== '0') {
            this.errorClass[index] = 'red';
            this.conformity = true;
          } else {
            this.conformity = false;
            this.errorClass[index] = 'none'
          }
        } else {
          for (let i = index; i < this.maxs.length; i++) {
            this.maxs[i] = '3'
          }
          let regexp = /^(255|254|252|248|240|224|192|128|0)$/;
          if (!regexp.test(this.result[index]) && this.result[index].length === 3) {
            this.errorClass[index] = 'red';
            this.conformity = true;
          } else {
            this.conformity = false;
            this.errorClass[index] = 'none';
          }
        }
        if (!this.conformity && index !== 3 && this.result[index] && this.result[index].length >= this.maxs[index]) {
          this.$refs.box.getElementsByTagName('input')[index + 1].focus();
        }
        if (Number($event.target.value) === 0) {
          this.maxs[index] = '1';
        }

        this.$emit('input', {$event, index});

      },

      handleBlur(index, $event) {
        let isCheck = this.result.length > 3 && this.result.every(item => item !== '');
        if (isCheck && !this.checkSub(this.result.join('.'))) {
          this.conformity = true;
        }
        this.$emit('blur', {$event, index});
      },

      checkSub(mask) {
        let regexp = /^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/;
        return regexp.test(mask);
      },

      handleKeyDown(index, $event) {
        if ($event.keyCode === 8 && this.currentIndex !== 0 && (!this.result[this.currentIndex] || this.result[this.currentIndex].length === 0)) {
          this.$refs.box.getElementsByTagName('input')[this.currentIndex - 1].focus();
        }
        if ($event.keyCode === 110 && index !== 3 && $event.target.value !== '') {
          this.$refs.box.getElementsByTagName('input')[this.currentIndex + 1].focus();
        }
        let obj = this.$refs.box.getElementsByTagName('input'),
          current = this.getCursortPosition(obj[index]),
          len = $event.target.value.length;
        if ($event.keyCode === 39 && current >= len && index !== 3) { // 往后
          obj[index + 1].focus();
          setTimeout(() => {
            this.setCaretPosition(obj[index + 1], 0)
          }, 0);
        }
        if ($event.keyCode === 37 && current === 0 && index !== 0) { // 往前
          this.$refs.box.getElementsByTagName('input')[index - 1].focus();
          setTimeout(() => {
            this.setCaretPosition(obj[index - 1], this.result[index - 1] ? this.result[index - 1].length : 0)
          }, 0);
        }
        this.$emit('keyDown', {$event, index});
      },
    }
  }
</script>