<template>
  <div>
    <ve-button mask="true" mask-type="success">circle</ve-button>
    <ve-button mask="true" mask-type="warning">circle</ve-button>
    <ve-button mask="true" mask-type="error">circle</ve-button>
    <ve-button type="primary" :loading="loading">circle</ve-button>
    <ve-button @click="loading = !loading">加载完成</ve-button>
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
