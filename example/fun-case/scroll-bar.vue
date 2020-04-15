<template>
  <div style="width: 300px;margin: 0 auto">
    <ve-scroll
      size="8"
    >
      <ul>
        <li
          v-for="item in array"
          :key="item"
        >
          {{ item + str }}
        </li>
      </ul>
    </ve-scroll>
  </div>
</template>

<script>
  export default {
    name: 'ScrollBar1',
    data() {
      return {
        array: Array(100).fill(null).map((o, i) => i),
        str: Array(20).fill(0).join('+')
      }
    }
  }
</script>

<style scoped lang="less">
  ul {
    height: 400px;
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
    margin-bottom: 10px;
  }
</style>