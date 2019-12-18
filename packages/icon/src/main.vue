<template>
  <i
    :class="['v-icon', iconClass, 'fa-' + name]"
    :style="{ fontSize: size + 'px' }"
  />
</template>

<script>
import { computedIconStyle } from '@/utils/icon-style'

export default {
  name: 'VeIcon',
  props: {
    name: String,
    iconStyle: { type: String, default: 'solid' },
    size: {
      type: [String, Number],
      default: 12
    }
  },
  computed: {
    iconClass() {
      return computedIconStyle(this.iconStyle)
    }
  }
}
</script>
