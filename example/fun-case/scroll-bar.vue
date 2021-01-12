<template>
  <div style="width: 300px;margin: 0 auto;position: relative">
    <div class="tag"></div>
    <ve-scroll size="8" v-model:to="to" :offset="200" :duration="500" easing="Sine-easeOut" 
    :disabled="disabled" @start="disabled = true" @stop="disabled = false"
    @touchStart="start" @touchEnd="stop" 
    >
      <ul>
        <li style="height: 50%"></li>
        <li v-for="item in array" :key="item">
          {{ item + str }}
        </li>
        <li style="height: 50%"></li>
      </ul>
    </ve-scroll>
    <div>{{ disabled }}</div>
    <div>{{ touch }}</div>
  </div>
</template>

<script>
export default {
  name: 'ScrollBar1',
  data() {
    return {
      array: Array(100)
        .fill(null)
        .map((o, i) => i),
      str: Array(20)
        .fill(0)
        .join('+'),
      to: 0,
      disabled: false,
      touch: ''
    }
  },
  mounted() {
    let t = setInterval(() => {
      if (!this.disabled) {
        if (this.to < this.array.length - 1) {
          this.to+=10
        } else {
          clearInterval(t)
        }
      }
      
    }, 2000)
  },
  methods: {
    start() {
      this.touch = 'start'
    },
    stop(i) {
      this.touch = 'stop' + i
    }
  }
}
</script>

<style scoped lang="less">
.tag {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 1px;
  background-color: red;
}
ul {
  position: relative;
  height: 400px;
  padding: 0;
  margin: 0;
}
li {
  height: 40px;
  line-height: 40px;
  list-style-type: none;
}
</style>
