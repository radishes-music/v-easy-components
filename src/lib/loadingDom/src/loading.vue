<template>
  <div class="ve-loading"
       data-loading-id="ve-loading-dom"
       v-if="domVisible">
    <span>{{ content }}</span>
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
  @keyframes rect-flicker {
    100% {
      opacity: 0.5;
    }
  }

  .ve-loading-parent--relative {
    position: relative;
  }

  .ve-loading {
    font-size: 2em;
    span {
      color: rgb(230, 236, 241);
      font-size: 1.3em;
      font-family: Flow-Rounded, sans-serif;
      line-height: 0.75em;
      letter-spacing: -2px;
      animation-duration: 0.6s;
      user-select: none;
      animation-name: rect-flicker;
      animation-direction: alternate-reverse;
      animation-iteration-count: infinite;
      animation-timing-function: ease-out;
      font-weight: 700;
      white-space: pre-wrap;
      overflow-wrap: break-word;
    }
  }
</style>
