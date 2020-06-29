<template>
  <div>
    <h1 v-loading-preload.2="visible[0]">{{ title }}</h1>
    <!--<h1 v-loading-preload.a="visible[0]">{{ title }}</h1>-->
    <p v-loading-preload.68="visible[1]">{{ content }}</p>
    <div>
      <ve-button @click="retry">重新加载</ve-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading-dom',
  data: function() {
    return {
      title: '',
      content: '',
      visible: Array.from({ length: 10 }).fill(true)
    }
  },
  methods: {
    promise(ms, data) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(data)
        }, ms)
      })
    },
    retry() {
      this.task(0)
    },
    async task(index) {
      this.visible = this.visible.map(() => false)
      this.title = this.content = ''
      this.title = await this.promise(1600, 'Little Red Riding Hood')
      this.visible[index] = true
      this.content = await this.promise(
        500,
        'Once upon a time there was a sweet little girl.' +
          ' Everyone who saw her liked her, but most of all her grandmother, who did not know what to give the child next. ' +
          'Once she gave her a little cap made of red velvet. Because it suited her so well, and she wanted to wear it all the time, ' +
          'she came to be known as Little Red Riding Hood.'
      )
      this.visible[index + 1] = true
    }
  },
  mounted() {
    this.task(0)
  }
}
</script>

<style scoped></style>
