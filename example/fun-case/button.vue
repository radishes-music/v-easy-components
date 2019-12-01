<template>
  <div>
    <div>
      <ve-button mask="true" mask-type="success">circle</ve-button>
      <ve-button mask="true" mask-type="warning">circle</ve-button>
      <ve-button mask="true" mask-type="error">circle</ve-button>
      <ve-button type="primary" :loading="loading">circle</ve-button>
      <ve-button @click="loading = !loading">加载完成</ve-button>
    </div>
    <div style="margin-top: 10px">
      <ve-button type="primary" size="small">small</ve-button>
      <ve-button type="primary" size="large">large</ve-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "test-button",
    data() {
      return {
        loading: true
      }
    },
  }
</script>

<style scoped>

</style>
