<template>
  <div class="app">
    <ve-button :disabled="true">Link</ve-button>
    <ve-button @click="a = {}">Link</ve-button>
    <ve-button :disabled="true" >成功按钮</ve-button>
    <ve-button type="primary" @click="a = {
        width: '1200px',
        height: '1200px',
        left: '-390px',
        top: '-480px'
      }">成功按钮</ve-button>
    <div class="abc">
      <span :style="a"></span>
    </div>
    <ve-button mask="true">Link</ve-button>
    <ve-button type="primary">circle</ve-button>
    <ve-button mask="true" mask-type="success">circle</ve-button>
    <ve-button mask="true" mask-type="warning">circle</ve-button>
    <ve-button mask="true" mask-type="error">circle</ve-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        a: {}
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
  .abc {
    position: relative;
    width: 350px;
    height: 560px;
    border: 1px solid;
    overflow: hidden;
  }
  .abc .mask {

  }
  .abc span {
    position: absolute;
    left: 210px;
    top: 120px;
    width: 0;
    height: 0;
    background-color: #f56c6c;
    border-radius: 50%;
    transition: all 1s linear;
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
