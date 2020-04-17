<template>
  <div class="table-box">
    <Content :slot-key="_id"></Content>
  </div>
</template>

<script>
  export default {
    name: "divBox",
    props: {
      _id: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
.table-box {
  width: 100%;
  overflow-x: auto;
}
</style>
