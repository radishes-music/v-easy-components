<template>
  <ve-route-indicator>
    <template slot="first-stop">
      <h2>第一站</h2>
    </template>
    <template slot="middle-stop">
      <ve-collapse :list="list">
        <template slot="control">
          <h4>控制器</h4>
        </template>
        <template v-slot:item="{item}">
          <h4 class="text">{{ item.a }} + {{ item.b }}</h4>
        </template>
      </ve-collapse>
    </template>
    <template slot="last-stop">
      <h2>最后一站</h2>
    </template>
    <template slot="tag"></template>
  </ve-route-indicator>
</template>

<script>
  export default {
    name: 'RouteIndicator',
    data() {
      return {
        list: [
          { a: 1, b: 2 },
          { a: 1, b: 2 },
          { a: 1, b: 2 }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  h2 {
    margin: 0;
  }
  .text {
    text-indent: 50px;
  }
</style>
