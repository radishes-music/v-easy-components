<template>
  <div class="image-pre">
    <!--<ve-button @click="img.push(require('../assets/3-max.png'))">动态添加一个img</ve-button>
    <div v-image>
      <img src="../assets/1-min.png" :data-preview-src="require('../assets/1-max.png')" alt="1-max">
      <img v-for="(item, index) in img" :key="index" :src="item" alt="">
    </div>
    <div v-image="config">
      <img src="../assets/2-min.png" alt="">
      <img src="../assets/1-min.png" alt="" class="image">
      <img src="../assets/3-min.png" alt="">
      <img src="../assets/2-min.png" alt="" class="image">
    </div>-->
    <img v-image :data-preview-src="require('../assets/CSS.jpg')" src="../assets/CSS-min.jpg" alt="CSS">
    <img v-image="require('../assets/CSS.jpg')" src="../assets/CSS-min.jpg" alt="CSS">
    <div v-image>
      <img src="../assets/1-min.png" alt="https://linkorg.club" :data-preview-src="img[0]">
      HTML is well known as the native language for web content—but its close counterpart CSS (Cascading Style Sheets) is the language used to style, format, and present it. CSS is incredibly powerful. It also has a reputation for being tricky to learn and even harder to master, but that’s not necessarily true. CSS is straightforward to learn if you slow down and take it step by step. And it’s extremely helpful to know, even if you aren’t planning a career in web design. Here’s why you should add a little CSS coding to your skills, and have some fun in the process:
      <img src="../assets/2-min.png" alt="https://linkorg.club" :data-preview-src="img[1]">
    </div>
    <h2>1. Make business content beautiful.</h2>
    <div>
      HTML is a well-accepted format for internal publishing at most companies. From project plans to schedules to checklists and more, you can easily export or post HTML content in many ways and from many tools. Sure, HTML supports basic text formatting, but CSS gives you a lot more to work with visually: page layout, typography, animation, effects, and more. With a little custom CSS, you can make mundane messages look marvelous, stark business reports look stunning, and your HTML emails look exceptional.
    </div>
    <h2>2. Customize content management systems.</h2>
    <div>
      WordPress, Tumblr, Squarespace … modern content management systems can provide endless varieties of pre-built themes and skins to customize their look and feel, but eventually you’ll want to step out of the box and make your themes more personal. It can be tempting to hire a designer or front-end developer, but you might be surprised at how easy it is to customize your CMS with a little CSS savvy. Give it a shot!
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

<style scoped lang="less">
  .image-pre {
    width: 60%;
    margin: 0 auto;
    line-height: 2;
    div {
      text-indent: 2em;
    }
    > img {
      display: block;
      margin: 0 auto;
    }
  }
</style>
