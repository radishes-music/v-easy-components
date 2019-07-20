<template>
  <div class="ve-loading"
       data-loading-id="ve-loading-dom"
       v-if="domVisible">
    <span v-if="type === 'text'" class="ve-loading-dom-rect">{{ content }}</span>
    <span v-if="type === 'circle'" class="ve-loading-dom ve-loading-dom-circle" :style="circleStyle"></span>
    <span v-if="type === 'rect'" class="ve-loading-dom ve-loading-dom-rect" :style="circleStyle"></span>
  </div>
</template>

<script>
  import {_initArray} from '../../../utils/ArrayExtend'

  const char = '—';
  const map = [2, 0, 2, 0, 2, 0, 1, 0, 2, 0, 5, 0, 5, 0, 2, 0, 1, 0, 3, 0,
    3, 0, 5, 0, 1, 0, 3, 0, 1, 0, 3, 0, 3, 0, 3, 0, 1, 0, 2, 0, 1, 0, 2, 0,
    4, 0, 2, 0, 3, 0, 6, 0, 4, 0, 4, 0, 3, 0, 2, 0, 1, 0, 3, 0, 1, 0, 1, 0,
    4, 0, 5, 0, 2, 0, 2, 0, 3, 0, 3, 0, 1, 0, 6, 0, 1, 0, 4, 0,
    3, 0, 2, 0, 2, 0, 1, 0, 2, 0, 2, 0, 4];

  export default {
    name: 'v-tip',
    data() {
      return {
        width: 0,
        height: 0,
        nodeNum: 0,
        type: '',
        circleStyle: {},
        domVisible: true
      };
    },
    computed: {
      content() {
        let content = char;
        if (this.nodeNum) {
          content = '';
          map.filter((o, i) => i < this.nodeNum).forEach(item => {
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
    mounted() {

    }
  }
</script>
