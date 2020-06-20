<template>
  <div
    v-show="domVisible"
    class="v-easy-loading"
    data-loading-id="v-easy-loading-dom"
  >
    <span v-if="type === 'text'" class="v-easy-loading-dom--rect">{{
      content
    }}</span>
    <span
      v-if="type === 'circle'"
      class="v-easy-loading-dom v-easy-loading-dom--circle"
      :style="circleStyle"
    />
    <span
      v-if="type === 'rect'"
      class="v-easy-loading-dom v-easy-loading-dom--rect"
      :style="circleStyle"
    />
  </div>
</template>

<script>
import { _initArray } from '@/utils/array-extend'

const char = '—'
const map = [
  2,
  0,
  2,
  0,
  2,
  0,
  1,
  0,
  2,
  0,
  5,
  0,
  5,
  0,
  2,
  0,
  1,
  0,
  3,
  0,
  3,
  0,
  5,
  0,
  1,
  0,
  3,
  0,
  1,
  0,
  3,
  0,
  3,
  0,
  3,
  0,
  1,
  0,
  2,
  0,
  1,
  0,
  2,
  0,
  4,
  0,
  2,
  0,
  3,
  0,
  6,
  0,
  4,
  0,
  4,
  0,
  3,
  0,
  2,
  0,
  1,
  0,
  3,
  0,
  1,
  0,
  1,
  0,
  4,
  0,
  5,
  0,
  2,
  0,
  2,
  0,
  3,
  0,
  3,
  0,
  1,
  0,
  6,
  0,
  1,
  0,
  4,
  0,
  3,
  0,
  2,
  0,
  2,
  0,
  1,
  0,
  2,
  0,
  2,
  0,
  4
]

export default {
  name: 'VLoadingPreloadStyle',
  data() {
    return {
      width: 0,
      height: 0,
      nodeNum: 0,
      type: '',
      circleStyle: {},
      domVisible: true,
      map: map
    }
  },
  computed: {
    content() {
      let placeholder = char
      if (this.nodeNum) {
        placeholder = ''
        if (this.nodeNum > this.map.length) {
          const copyCount = ~~(this.nodeNum / this.map.length)
          let i = 0,
            temp = this.map
          for (; i < copyCount; i++) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.map = [].concat(this.map, temp)
          }
        }
        this.map
          .filter((o, i) => i < this.nodeNum)
          .forEach(item => {
            if (item) {
              placeholder += _initArray(item, char).join('')
            } else {
              placeholder += ' '
            }
          })
      }
      return placeholder
    }
  },
  methods: {
    showHide(visible) {
      this.domVisible = visible
    }
  }
}
</script>
