<template>
  <div style="margin-top: 300px;display: flex;justify-content: space-around">
    <ve-button @click="deleteButton">删除Left Button</ve-button>
    <ve-button v-if="leftButton" v-tip.left="{html: '<h1>hello</h1>', effect: 'light'}">Left</ve-button>
    <ve-button v-if="leftButton" v-tip.left="'i am link'">Left</ve-button>
    <ve-button @click="rightButton = !rightButton">删除Right Button 不移除绑定的 Tip</ve-button>
    <ve-button v-if="rightButton" v-tip="{placement: 'right', content: 'hello', autoRemoveTip: false, effect: 'light'}">Right</ve-button>
    <ve-button v-tip="{placement: 'bottom', content: 'hello', effect: 'light'}">Bottom</ve-button>
    <div class="box" v-tip.bottom="{VNode: render}">Target</div>
  </div>
</template>

<script>
  export default {
    name: "tool-tip",
    data() {
      return {
        leftButton: true,
        rightButton: true,
      }
    },
    methods: {
      deleteButton() {
        this.leftButton = !this.leftButton
      },
      render() {
        const h = this.$createElement
        return h('h1', 'Link')
      }
    }
  }
</script>

<style scoped>

</style>
