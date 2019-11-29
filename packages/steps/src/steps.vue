<template>
  <div class="ve-steps" v-bind="$attrs">
    <div :class="['ve-steps-nav', 've-steps-nav__' + placement]">
      <ul>
        <li v-for="(item, index) in steps"
            :key="index"
            :class="{
              've-steps-active': active === index,
              've-steps-success': successStatus.includes(index),
              've-steps-error': errorStatus.includes(index),
            }"><i class="fa" :class="['fa-' + item.icon]"></i>{{ item.title }}</li>
      </ul>
    </div>
    <div :class="['ve-steps-content', 've-steps-content__' + placement]">
      <slot></slot>
      <div class="ve-steps-footer">
        <div :class="['ve-steps-btn', 've-steps-btn-' + placement]">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VeSteps",

    props: {
      active: {
        type: Number,
        required: true,
      },
      placement: {
        type: String,
        default: 'left'
      }
    },

    computed: {
      successStatus() {
        /* Documenting steps completed */
        return Object.keys(Array.from({length: this.active})).map(i => +i)
      }
    },

    data() {
      return {
        steps: [],
        errorStatus: [],
        oldActive: 0,
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
    },
  }
</script>
