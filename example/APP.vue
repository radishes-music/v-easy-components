<template>
  <div class="app">
    <ve-button type="mask" :disabled="true">Link</ve-button>
    <ve-button type="mask">Link</ve-button>
    <ve-button :disabled="true" >成功按钮</ve-button>
    <ve-button type="primary" @click="$msg({message: 'Link'})">成功按钮</ve-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {

    },
    mounted() {
    }
  }
</script>

<style>
  * {margin: 0;padding: 0;box-sizing: border-box}
  .app {
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .ve-loading-parent--relative {
    position: relative;
  }
  .title {

  }
  .title > * {
    vertical-align: middle;
  }
  .title span {
    font-size: 1.4em;
  }
  h1 {
    display: inline-block;
  }
  .hr {
    height: 2px;
    outline: none;
    border: none;
    background-color: rgb(230, 236, 241);
  }
  .main {
    margin: 0.67em 0;
  }
  .h360 {
    height: 520px;
  }
</style>
