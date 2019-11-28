<template>
  <div class="ve-step" v-bind="$attrs" v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "VeStep",

    props: {
      title: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: false
      },
    },

    data() {
      return {
        isActive: false
      }
    },

    methods: {
      updateStatus(status) {
        this.isActive = status
      }
    },

    created() {
      if (Array.isArray(this.$parent.steps)) {
        this.$parent.steps.push({
          title: this.title,
          icon: this.icon,
        })
      }
    }
  }
</script>
