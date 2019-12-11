<template>
  <div class="ve-loading"
       data-loading-id="ve-loading-dom"
       v-show="domVisible">
    <span v-if="type === 'text'" class="ve-loading-dom-rect">{{ content }}</span>
    <span v-if="type === 'circle'" class="ve-loading-dom ve-loading-dom-circle" :style="circleStyle"></span>
    <span v-if="type === 'rect'" class="ve-loading-dom ve-loading-dom-rect" :style="circleStyle"></span>
  </div>
</template>

<script>
  import { _initArray } from '@/utils/array-extend'

  const char = '—';
  const map = [
    2, 0, 2, 0, 2, 0, 1, 0, 2, 0, 5, 0, 5, 0, 2, 0, 1, 0, 3, 0,
    3, 0, 5, 0, 1, 0, 3, 0, 1, 0, 3, 0, 3, 0, 3, 0, 1, 0, 2, 0, 1, 0, 2, 0,
    4, 0, 2, 0, 3, 0, 6, 0, 4, 0, 4, 0, 3, 0, 2, 0, 1, 0, 3, 0, 1, 0, 1, 0,
    4, 0, 5, 0, 2, 0, 2, 0, 3, 0, 3, 0, 1, 0, 6, 0, 1, 0, 4, 0,
    3, 0, 2, 0, 2, 0, 1, 0, 2, 0, 2, 0, 4
  ];

  export default {
    name: 'v-loading-preload-style',
    data() {
      return {
        width: 0,
        height: 0,
        nodeNum: 0,
        type: '',
        circleStyle: {},
        domVisible: true,
        map: map,
      };
    },
    computed: {
      content() {
        let content = char;
        if (this.nodeNum) {
          content = '';
          if (this.nodeNum > this.map.length) {
            const copyCount = ~~(this.nodeNum / this.map.length)
            let i = 0, temp = this.map
            for (; i < copyCount; i++) {
              this.map = [].concat(this.map, temp)
            }
          }
          this.map.filter((o, i) => i < this.nodeNum).forEach(item => {
            if (item) {
              content += _initArray(item, char).join('')
            } else {
              content += ' '
            }
          })
        }
        return content
      }
    },
    methods: {
      showHide(visible) {
        this.domVisible = visible
      }
    },
  }
</script>
