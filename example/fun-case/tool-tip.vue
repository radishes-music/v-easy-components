<template>
  <div style="margin-top: 300px;display: flex;justify-content: space-around">
    <ve-button @click="deleteButton">删除Left Button</ve-button>
    <ve-button v-if="leftButton" v-tip.top="{html: '<h1>hello</h1>', effect: 'light'}">Left</ve-button>
    <ve-button v-if="leftButton" v-tip.left="'i am link'">Left</ve-button>
    <div class="color-picker" :style="{
      backgroundColor: color
    }" v-tip.top="{VNode: renderColor, effect: 'light', target: 'click'}"></div>
    <ve-button @click="rightButton = !rightButton">删除Right Button 不移除绑定的 Tip</ve-button>
    <ve-button v-if="rightButton" v-tip="{placement: 'right', content: 'hello', autoRemoveTip: false, effect: 'light'}">Right</ve-button>
    <ve-button v-tip="{placement: 'bottom', content: 'hello', effect: 'light'}">Bottom</ve-button>
    <div class="box" v-tip.bottom="{VNode: render}">Target</div>
  </div>
</template>

<script>
  import ColorPicker from '@packages/color-picker/src/main'
  export default {
    name: "tool-tip",
    data() {
      return {
        leftButton: true,
        rightButton: true,
        color: 'hsl(100, 65%, 32%)'
      }
    },
    watch: {
      color(v) {
        console.log(v)
      }
    },
    methods: {
      deleteButton() {
        this.leftButton = !this.leftButton
      },
      render() {
        const h = this.$createElement;
        return h('h1', 'Link')
      },
      clickHandler(value) {
        this.color = value;
      },
      renderColor() {
        const h = this.$createElement;
        return h(ColorPicker, {
          props: {
            value: this.color,
            simple: true,
            'color-format': 'hsl'
          },
          on: {
            input: this.clickHandler,
          },
        })
      }
    },
    components: {

    }
  }
</script>

<style scoped lang="less">
.color-picker {
  width: 100px;
  height: 100px;
}
</style>
