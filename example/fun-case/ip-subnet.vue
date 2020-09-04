<template>
  <div>
    <li>
      ip:{{ ip }}
      <ve-ip port v-model:value="ip"></ve-ip>
      {{ ip1 }}
      <ve-ip v-model:value="ip1"></ve-ip>
    </li>
    <li>
      subnet:{{ subnet }}
      <ve-subnet v-model:value="subnet"></ve-subnet>
      <ve-subnet v-model:value="subnet1"></ve-subnet>
    </li>
  </div>
</template>

<script>
export default {
  name: 'test-ip',
  data() {
    return {
      ip: '172.1',
      ip1: [172, 15, 1],
      subnet: '252.0.0.0',
      subnet1: []
    }
  }
}
</script>

<style scoped lang="less">
li {
  display: flex;
  align-items: center;
  margin: 40px;
}
</style>
