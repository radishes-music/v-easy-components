<template>
  <transition name="fade">
    <div
      v-show="visible"
      class="image-read-box"
      @click.stop="handlerClose"
      @mousemove="stopEvent"
      @touchmove="stopEvent"
    >
      <button v-show="isDisabledPrev" class="prev" @click.stop="handlerPrev">
        <i class="fa fa-angle-left fa-4x" aria-hidden="true" />
      </button>
      <div class="box">
        <ul>
          <div :style="computedStyle">
            <li v-for="item in src" :key="item">
              <img
                :style="{ width: fullScreen ? '100%' : '' }"
                :src="item"
                alt
              />
            </li>
          </div>
        </ul>
      </div>
      <button v-show="isDisabledNext" class="next" @click.stop="handlerNext">
        <i class="fa fa-angle-right fa-4x" aria-hidden="true" />
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ImageBox',
  data() {
    return {
      visible: false,
      targetAnimate: true,
      src: [],
      current: 0,
      isOut: false,
      fullScreen: false,
      stop: false
    }
  },
  computed: {
    computedStyle() {
      return {
        transform: `translateX(${this.current * -100}%)`
      }
    },
    isDisabledNext() {
      return this.current < this.src.length - 1
    },
    isDisabledPrev() {
      return this.current > 0
    }
  },
  methods: {
    stopEvent(e) {
      if (this.stop) {
        e.preventDefault()
      }
    },
    addImage(src) {
      this.src.push(src)
    },
    clearImage() {
      this.src = []
    },
    handlerClose() {
      this.visible = false
    },
    handlerPrev() {
      this.current--
    },
    handlerNext() {
      this.current++
    }
  }
}
</script>
