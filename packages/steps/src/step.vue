<template>
  <div v-show="isActive" class="ve-step" v-bind="$attrs">
    <slot />
  </div>
</template>

<script>
import { computedIconStyle } from '@/utils/icon-style.ts'
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'VeStep',

  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    iconStyle: {
      type: String,
      default: 'solid',
    },
  },

  setup(props, context) {
    const isActive = ref(false)

    return {
      isActive,
    }
  },

  methods: {
    updateStatus(status) {
      this.isActive = status
    },
  },

  beforeMount() {
    if (Array.isArray(this.$parent?.steps)) {
      this.$parent.steps.push({
        title: this.title,
        icon: this.icon,
        iconClass: computedIconStyle(this.iconStyle),
        self: this,
      })
    }
  },
})
</script>
