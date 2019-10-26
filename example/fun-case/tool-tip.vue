<template>
  <div>
    <ve-button type="success">aaaa</ve-button>
    <ve-button v-tip="{placement: 'left', html: '<h1>hello</h1>'}">aaaa</ve-button>
    <ve-button v-tip="{placement: 'right', content: 'hello'}">aaaa</ve-button>
    <ve-button v-tip="{placement: 'bottom', content: 'hello'}">aaaa</ve-button>
    <div class="box" v-tip="{placement: 'top', VNode: render}">Target</div>
    <div class="box" v-tip="{placement: 'top', content: 'Hello'}">Target</div>
  </div>
</template>

<script>
  export default {
    name: "tool-tip",
    data() {
      return {}
    },
  }
</script>

<style scoped>

</style>
