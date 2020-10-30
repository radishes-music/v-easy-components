<template>
  <div class="auto-complete">
    <ve-input
      ref="target"
      v-model:value="modelValue"
      v-bind="$attrs"
      type="text"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
    >
      <template v-if="prefixIcon" v-slot:prefixIcon>
        <span class="prefix-icon">
          <i :class="[iconClass, 'fa-' + prefixIcon]"></i>
        </span>
      </template>
      <template v-if="suffixIcon" v-slot:suffixIcon>
        <span class="suffix-icon">
          <i :class="[iconClass, 'fa-' + suffixIcon]"></i>
        </span>
      </template>
    </ve-input>
    <teleport to="body">
      <transition name="auto-complete-fade">
        <div
          v-show="showPopper"
          ref="popper"
          :class="['auto-complete-template', classPopper]"
        >
          <ve-scroll v-if="dataComputed.length" @scroll="handleScroll">
            <slot v-if="$slots.popper" name="popper"></slot>
            <ul v-else>
              <li
                v-for="(item, index) in dataComputed"
                :key="index"
                :class="{
                  'auto-complete-template-active': value === item,
                  'auto-complete-template-normal': true,
                }"
                @click="() => handleSelect(item)"
              >
                {{ item }}
              </li>
            </ul>
          </ve-scroll>
          <div
            v-else-if="loadingComputed"
            class="auto-complete-template-loading"
          >
            <i class="fa fa-spinner"></i>
          </div>
          <div v-else class="auto-complete-template-none-data">
            <slot v-if="$slots.noneData" name="noneData"></slot>
            <template v-else>
              <p class="fa fa-inbox"></p>
              <p>暂无数据</p>
            </template>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script>
import { ref, h, toRefs, onMounted } from 'vue'
import VeInput from '@packages/input/src/main'
import VeScroll from '@packages/scroll-bar/src/main'
import { createPopper } from '@popperjs/core'
import { contain } from '@/utils/utils'
import { computedIconStyle } from '@/utils/icon-style.ts'
export default {
  name: 'VeAutoComplete',

  emits: ['focus', 'blur', 'change', 'search', 'update:value'],

  components: {
    VeInput,
    VeScroll,
  },

  props: {
    dataSource: {
      type: Array,
      required: true,
      default: () => [],
    },
    value: {
      type: [Array, String],
    },
    type: {
      type: String,
      default: 'select',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    classPopper: {
      type: String,
      default: '',
    },
    prefixIcon: {
      type: String,
    },
    suffixIcon: {
      type: String,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    iconStyle: { type: String, default: 'solid' },
  },

  computed: {
    dataComputed() {
      if (this.type === 'search') {
        return this.loading ? [] : this.dataSource
      }
      if (this.value === '') {
        return this.dataSource
      }
      return contain(this.value, this.dataSource)
    },
    iconClass() {
      return computedIconStyle(this.iconStyle)
    },
    modelValue: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('update:value', v)
      },
    },
  },

  watch: {
    dataSource(v, oldV) {
      if (v.length && !oldV.length) {
        this.loadingComputed = false
      } else {
        this.loadingComputed = true
      }
      if (this.type === 'search') {
        this.loadingComputed = this.loading
      }
    },
    loading(v) {
      if (this.type === 'search') {
        if (v) {
          this.canShowPopper = true
          this.showPopperFn()
        } else if (!this.dataSource.length) {
        }
        this.loadingComputed = v
      }
    },
    visible(v) {
      this.canShowPopper = v
      this.showPopperFn()
    },
  },

  beforeMount() {
    if (this.popper) {
      this.$slots.default = [this.popper]
    }
  },

  methods: {
    instancePopper() {
      this.popperInstance = createPopper(
        this.$refs.target.$el,
        this.$refs.popper,
        {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 8],
              },
            },
          ],
        },
      )
    },
    async showPopperFn() {
      if (this.canShowPopper) {
        this.showPopper = true
        await this.$nextTick()
        if (!this.popperInstance) this.instancePopper()
        else await this.popperInstance.update()
      } else {
        this.showPopper = false
      }
    },
    async handleFocus(e) {
      e.stopPropagation()
      this.showPopperFn()
      this.$emit('focus', this.value)
    },
    handleBlur() {
      this.showPopper = false
      this.$emit('blur', this.value)
    },
    handleSelect(item) {
      this.showPopper = false
      this.$emit('update:value', item)
    },
    handleInput(v) {
      this.$emit('search', v)
      this.$emit('change', v)
      this.$emit('update:value', v)
    },
    handleScroll() {
      this.$refs.target.$el.querySelector('input').focus()
    },
    noop() {},
  },

  setup(props) {
    const { type, loading, dataSource, visible } = toRefs(props)
    return {
      showPopper: ref(visible.value),
      canShowPopper: ref(type.value !== 'search'),
      loadingComputed: ref(
        type.value === 'search' ? loading.value : !dataSource.value.length,
      ),
      popperInstance: ref(null),
    }
  },
}
</script>
