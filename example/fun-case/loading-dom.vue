<template>
  <div>
    <h1 v-loading-preload="visible" data-loading-text="2">{{ title }}</h1>
    <p v-loading-preload="visible1" data-loading-text="14">{{ content }}</p>
  </div>
</template>

<script>
  export default {
    name: "loading-dom",
    data: function() {
      return {
        title: '',
        content: '',
        visible: false,
        visible1: false
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
      async task() {
        this.title = await this.promise(3200, 'Link');
        this.visible = true;
        this.content = await this.promise(12000, 'v-easy-conponents ui');
        this.visible1 = true;
      }
    },
    mounted() {
      this.task()
    }
  }
</script>

<style scoped>

</style>
