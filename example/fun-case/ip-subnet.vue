<template>
  <div>
    <li>ip:{{ ip }}
      <ve-ip v-model="ip"></ve-ip></li>
    <li>subnet:{{ subnet }}
      <ve-subnet v-model="subnet"></ve-subnet></li>
  </div>
</template>

<script>
export default {
  name: 'test-ip',
  data() {
    return {
      ip: [],
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
