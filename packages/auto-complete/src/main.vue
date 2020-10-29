<template>
  <div class="auto-complete">
    <ve-input
      ref="target"
      v-model="value"
      v-bind="$attrs"
      type="text"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
    />
    <teleport to="body">
      <transition name="auto-complete-fade">
        <div
          v-show="showPopper"
          ref="popper"
          class="auto-complete-template"
          @mouseenter="canHidePopper = false"
          @mouseleave="canHidePopper = true"
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
          <div
            v-else
            class="auto-complete-template-none-data"
            @click="handleScroll"
          >
            <p class="fa fa-inbox"></p>
            <p>暂无数据</p>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script>
import { ref, h, toRefs } from 'vue'
import VeInput from '@packages/input/src/main'
import { createPopper } from '@popperjs/core'
import VeScroll from '@packages/scroll-bar/src/main'
import { contain } from '@/utils/utils'
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
  },

  beforeMount() {
    if (this.popper) {
      this.$slots.default = [this.popper]
    }
  },

  mounted() {
    this.$nextTick(() => {})
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
      this.canHidePopper && (this.showPopper = false)
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
    const { type, loading, dataSource } = toRefs(props)
    return {
      showPopper: ref(false),
      canShowPopper: ref(type.value !== 'search'),
      canHidePopper: ref(true),
      loadingComputed: ref(
        type.value === 'search' ? loading.value : !dataSource.value.length,
      ),
      popperInstance: ref(null),
    }
  },
}
</script>
