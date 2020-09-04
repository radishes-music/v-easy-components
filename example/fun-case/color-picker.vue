<template>
  <div class="flex">
    <ve-color-picker
      style="margin: 0 auto"
      v-model:value="value"
      color-format="hsl"
    />
    <div>
      <div
        class="preview"
        :style="{
          backgroundColor: value1
        }"
      ></div>
      <ve-color-picker
        style="margin: 0 auto"
        simple
        v-model:value="value1"
        color-format="hsl"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'color-picker',
  data() {
    return {
      value: 'rgb(0, 87, 209)',
      value1: 'hsl(68, 87%, 60%)'
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
.preview {
  width: 200px;
  height: 200px;
}
</style>
