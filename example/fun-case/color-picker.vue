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
        value: ''
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
