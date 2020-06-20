<template>
  <div :class="['ve-steps', 've-steps__' + placement]" v-bind="$attrs">
    <div :class="['ve-steps-nav', 've-steps-nav__' + placement, navClassName]">
      <ul>
        <li
          v-for="(item, index) in steps"
          :key="index"
          :class="{
            've-steps-active': active === index,
            've-steps-success': successStatus.includes(index),
            've-steps-error': errorStatus.includes(index)
          }"
        >
          <i v-if="item.icon" :class="[item.iconClass, 'fa-' + item.icon]" />{{
            item.title
          }}
        </li>
      </ul>
    </div>
    <div :class="['ve-steps-content', 've-steps-content__' + placement]">
      <slot />
      <div class="ve-steps-footer">
        <div :class="['ve-steps-btn', 've-steps-btn-' + placement]">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VeSteps',

  props: {
    active: {
      type: Number,
      required: true
    },
    placement: {
      type: String,
      default: 'left'
    },
    navClassName: {
      type: String
    },
    iconStyle: {
      type: String,
      default: 'solid'
    }
  },

  data() {
    return {
      steps: [],
      errorStatus: [],
      oldActive: 0
    }
  },

  computed: {
    successStatus() {
      /* Documenting steps completed */
      return Object.keys(Array.from({ length: this.active })).map(i => +i)
    }
  },

  watch: {
    active: {
      handler: async function(index) {
        await this.$nextTick()
        const steps = this.$slots.default.filter(o => o.componentInstance)
        if (steps.length) {
          const oldComponentInstance = steps[this.oldActive].componentInstance
          const componentInstance = steps[index].componentInstance
          oldComponentInstance.updateStatus(false)
          componentInstance.updateStatus(true)

          this.oldActive = index
        }
      },
      immediate: true
    }
  }
}
</script>
