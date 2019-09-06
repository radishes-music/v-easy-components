<template>
  <div style="position:relative;padding: 20px;">
    <ve-button v-tip="{placement: 'bottom', offset: 12, vNode: render, enterable: true, hideAfter: 100, Class: 'my-tip'}">target</ve-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      render() {
        var h = this.$createElement;
        var vnode = h('h1', 'Link')
        return vnode
      },
      handleClick() {
        this.$msg({
          type: 'success',
          message: 'ok'
        })
      },
    },
    mounted() {
    }
  }
</script>

<style>
  * {margin: 0;padding: 0;box-sizing: border-box}
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
</style>
