<template>
  <div class="flex">
    <ve-color-picker style="margin: 0 auto" v-model="value" />
  </div>
</template>

<script>
  export default {
    name: "color-picker",
    data() {
      return {
        value: 'hsl(50, 100%, 50%)'
      }
    },
    watch: {
      value(val) {
        console.log(val)
      }
    }
  }
</script>

<style scoped lang="less">
.flex {
  display: flex;
  align-content: center;
  justify-items: center;
}
</style>
