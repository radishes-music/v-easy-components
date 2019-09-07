<template>
  <div style="margin-top: 30px">
    <ve-button v-tip="{placement: 'top', vNode: render, enterable: true, hideAfter: 100, Class: 'my-tip'}">target</ve-button>
    <ve-button v-tip="{placement: 'bottom', vNode: render, enterable: true, hideAfter: 100, Class: 'my-tip'}">target</ve-button>
    <ve-button v-tip="{placement: 'left', content: 'Link'}">target</ve-button>
    <ve-button v-tip="{placement: 'right', content: 'Link'}">target</ve-button>
    <ve-button v-tip="{placement: 'top', Class: 'h360', content: 'Link'}">target</ve-button>
    <ve-button v-tip="{placement: 'bottom', Class: 'h360', content: 'Link'}">target</ve-button>
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
        var vnode = h('div', null, [
          h('ve-input'),
          h('ve-button', {
            on: {
              click: () => {
                this.$msg({type: 'success', message: 'hello'})
              }
            }
          }, ['submit'])
        ])
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
  .h360 {
    height: 520px;
  }
</style>
