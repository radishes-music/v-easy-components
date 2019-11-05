<template>
  <div>
    <ve-button @click="img.push(require('../assets/3-max.png'))">动态添加一个img</ve-button>
    <div v-image>
      <img src="../assets/1-min.png" :data-preview-src="require('../assets/1-max.png')" alt="1-max">
      <img v-for="(item, index) in img" :key="index" :src="item" alt="">
    </div>
    <div v-image="config">
      <img src="../assets/2-min.png" alt="">
      <img src="../assets/1-min.png" alt="" class="image">
      <img src="../assets/3-min.png" alt="">
      <img src="../assets/2-min.png" alt="" class="image">
    </div>
  </div>
</template>

<script>
  export default {
    name: "image-preview",
    data() {
      return {
        img: [require('../assets/1-max.png'), require('../assets/2-max.png')],
        config: {
          el: '.image',
          rule(item, index) {
            return require(`../assets/${index + 1}-max.png`)
          }
        }
      }
    },
  }
</script>

<style scoped>

</style>
