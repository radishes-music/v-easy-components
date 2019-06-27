<template>
  <div>
    <ve-button @click="handleClick">TEST</ve-button>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        this.$msg({
          type: 'success',
          message: '分离组件《测试成功》'
        })
      }
    }
  }
</script>
