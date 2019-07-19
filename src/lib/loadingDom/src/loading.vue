<template>
  <div class="ve-loading"
       data-loading-id="ve-loading-dom"
       v-if="domVisible">
    <span v-if="type === 'rect'" class="ve-loading-dom-rect">{{ content }}</span>
    <span v-else class="ve-loading-dom-circle" :style="circleStyle"></span>
  </div>
</template>

<script>
  import { _initArray } from '../../../utils/ArrayExtend'

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

<style lang="less">
  @color-dom: rgb(230, 236, 241);

  @keyframes rect-flicker {
    100% {
      opacity: 0.5;
    }
  }

  .ve-loading-parent--relative {
    position: relative;
  }

  .ve-loading {
    display: inline-block;
    font-size: 2em;
    span {
      color: @color-dom;
      font-family: Flow-Rounded, sans-serif;
      animation-duration: 0.6s;
      user-select: none;
      animation-name: rect-flicker;
      animation-direction: alternate-reverse;
      animation-iteration-count: infinite;
      animation-timing-function: ease-out;
    }
    .ve-loading-dom-rect {
      font-size: 1.3em;
      line-height: 0.5em;
      letter-spacing: -2px;
      font-weight: 700;
      white-space: pre-wrap;
      overflow-wrap: break-word;
    }
    .ve-loading-dom-circle {
      display: inline-block;
      background-color: @color-dom;
      border-radius: 50%;
    }
  }
</style>
