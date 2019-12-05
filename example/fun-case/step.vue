<template>
  <div class="step">
    <ve-steps :active="active" placement="top" class="step-box">
      <ve-step class="step-li" title="Apple" icon-style="brands" icon="apple">HTML is a well-accepted format for internal publishing at most companies. From project plans to schedules to checklists and more, you can easily export or post HTML content in many ways and from many tools. Sure, HTML supports basic text formatting, but CSS gives you a lot more to work with visually: page layout, typography, animation, effects, and more. With a little custom CSS, you can make mundane messages look marvelous, stark business reports look stunning, and your HTML emails look exceptional.</ve-step>
      <ve-step class="step-li" title="Firefox" icon-style="brands" icon="firefox">WordPress, Tumblr, Squarespace … modern content management systems can provide endless varieties of pre-built themes and skins to customize their look and feel, but eventually you’ll want to step out of the box and make your themes more personal. It can be tempting to hire a designer or front-end developer, but you might be surprised at how easy it is to customize your CMS with a little CSS savvy. Give it a shot!</ve-step>
      <ve-step class="step-li" title="Google" icon-style="brands" icon="google">HTML is a well-accepted format for internal publishing at most companies. From project plans to schedules to checklists and more, you can easily export or post HTML content in many ways and from many tools. Sure, HTML supports basic text formatting, but CSS gives you a lot more to work with visually: page layout, typography, animation, effects, and more. With a little custom CSS, you can make mundane messages look marvelous, stark business reports look stunning, and your HTML emails look exceptional.</ve-step>
      <ve-step class="step-li" title="Success" icon="check">Success</ve-step>
      <template #footer>
        <ve-button type="primary" @click="handlerPrev" v-show="active !== 0 && active !== 3" :disabled="active === 0">上一步</ve-button>
        <ve-button type="primary" @click="handlerNext" :loading="loading" v-show="active !== 3">下一步</ve-button>
        <ve-button type="primary" @click="handlerSuccess" v-show="active === 3">完成</ve-button>
      </template>
    </ve-steps>
  </div>
</template>

<script>
  export default {
    name: "step",
    data() {
      return {
        active: 2,
        loading: false
      }
    },
    methods: {
      sleep(ms) {
        return new Promise((resolve, reject) => {
          setTimeout(resolve, ms)
        })
      },
      handlerPrev() {
        this.active--
      },
      async handlerNext() {
        this.loading = true
        await this.sleep((Math.random() * 2000 + 100) | 0)
        this.loading = false
        this.active++
      },
      handlerSuccess() {

      }
    }
  }
</script>

<style lang="less">
  .nav-box {
    width: 180px;
    ul {
      li {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>

<style lang="less" scoped>
  .step {
    width: 60%;
    margin: 0 auto;
    box-shadow: 0 2px 4px 1px #e2e2e2;
  }
  .step-box {
    height: 360px;
  }
  .step-li {
    line-height: 2;
    text-indent: 1em;
  }
</style>
