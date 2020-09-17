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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ImageBox',

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
    },
  },
})
</script>
