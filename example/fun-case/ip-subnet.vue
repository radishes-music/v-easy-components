<template>
  <div>
    <li>ip:{{ ip }}
      <ve-ip port v-model="ip"></ve-ip>
      {{ ip1 }}
      <ve-ip v-model="ip1"></ve-ip>
    </li>
    <li>subnet:{{ subnet }}
      <ve-subnet v-model="subnet"></ve-subnet>
    </li>
  </div>
</template>

<script>
  export default {
    name: 'test-ip',
    data() {
      return {
        ip: '172.15.1.1:10001',
        ip1: [172, 15, 1, 1, 10001],
        subnet: []
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
