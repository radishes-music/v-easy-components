<template>
  <div class="app">
    <ve-button type="success">aaaa</ve-button>
    <ve-button v-tip="{placement: 'left', html: '<h1>hello</h1>'}">aaaa</ve-button>
    <ve-button v-tip="{placement: 'right', content: 'hello'}">aaaa</ve-button>
    <ve-button v-tip="{placement: 'bottom', content: 'hello'}">aaaa</ve-button>
    <ve-button v-image :data-preview-src="require('./assets/1.JPG')" type="text">点击预览图片</ve-button>
    <ve-button @click="f = !f">移除第一个image</ve-button>
    <img v-image v-tip="'hello'" v-if="f" src="./assets/1.JPG" alt="">
    <img v-image :data-preview-src="img[0]" src="./assets/1-min.png" alt="">
    <ve-button @click="img.push(require('./assets/3-max.png'))">动态添加一个img</ve-button>
    <div v-image>
      <img src="./assets/1-min.png" :data-preview-src="require('./assets/1-max.png')" alt="1-max">
      <img v-for="item in img" :key="item" :src="item" alt="">
    </div>
    <div v-image="config">
      <img src="./assets/2-min.png" alt="">
      <img src="./assets/1-min.png" alt="" class="image">
      <img src="./assets/3-min.png" alt="">
      <img src="./assets/2-min.png" alt="" class="image">
    </div>
    <ve-button @click="ch">change ip</ve-button>
    <ve-ip v-model="c"></ve-ip>
    <ve-subnet v-model="c"></ve-subnet>
    <ve-button mask="true" mask-type="success">circle</ve-button>
    <ve-button mask="true" mask-type="warning">circle</ve-button>
    <ve-button mask="true" mask-type="error">circle</ve-button>
    <div class="box" v-tip="{placement: 'top', VNode: render}">Target</div>
    <div class="box" v-tip="{placement: 'top', content: 'Hello'}">Target</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        a: {},
        f: true,
        b: 123,
        c: [],
        img: [require('./assets/1-max.png'), require('./assets/2-max.png')],
        config: {
          el: '.image',
          rule (item, index) {
            return require(`./assets/${index+1}-max.png`)
          }
        }
      }
    },
    methods: {
      ch() {
        this.c = [1,3,1,1]
      },
      render() {
        const h = this.$createElement;
        return h('div', null, [
          h('ve-button', {
            on: {
              click: () => {
                this.$msg({type: 'success', message: 'Hello VEasy'})
              }
            }
          }, ['submit'])
        ])
      },
    },
    mounted() {
    }
  }
</script>

<style scoped lang="less">
  * {margin: 0;padding: 0;box-sizing: border-box}
  .app {
    padding: 40px;
  }
  .abc {
    position: relative;
    width: 350px;
    height: 560px;
    border: 1px solid;
    overflow: hidden;
  }
  .box {
    margin-top: 10px;
    text-align: center;
  }
  img {
    width: 50px;
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
