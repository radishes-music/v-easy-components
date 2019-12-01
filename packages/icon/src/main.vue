<template>
  <i :class="['v-icon', 'fa', 'fa-' + name]" :style="{fontSize: size + 'px'}"></i>
</template>

<script>
  export default {
    name: "VeIcon",
    props: {
      name: String,
      size: {
        type: [String, Number],
        default: 12
      }
    },
  }
</script>
