<template>
  <div>
    <li>
      ip:{{ ip }}
      <ve-ip port v-model="ip"></ve-ip>
      {{ ip1 }}
      <ve-ip v-model="ip1"></ve-ip>
    </li>
    <li>
      subnet:{{ subnet }}
      <ve-subnet v-model="subnet"></ve-subnet>
      <ve-subnet v-model="subnet1"></ve-subnet>
    </li>
  </div>
</template>

<script>
export default {
  name: 'test-ip',
  data() {
    return {
      ip: '',
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
