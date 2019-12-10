<template>
  <div>
    <div class="v-color-content"
         :style="mergeStyle"
         @mousedown.left="handleMouseDown"
         @mouseup.left="handleMouseUp"
         @mousemove.capture="handleMove"
    >
      <div class="v-color-white"></div>
      <div class="v-color-black"></div>
      <div class="v-color-pointer" :style="pointerStyle"></div>
    </div>
    <div class="v-color-bottom">
      <div class="v-color-preview" :style="{backgroundColor: previewColor}"></div>
    </div>
  </div>
</template>

<script>
  import { formatCss } from "@/utils/css";
  import bus from '@/utils/bus'

  export default {
    name: "color-picker",
    computed: {
      mergeStyle() {
        const width = formatCss(300);
        const height = formatCss(100);
        return {
          width,
          height,
          backgroundColor: this.color
        }
      },
      previewColor() {
        return this.color;
      }
    },
    data() {
      return {
        pointerStyle: {},
        focus: false,
        color: ''
      }
    },
    methods: {
      handleMouseDown(event) {
        this.focus = true;
        this.handleGetPointer(event);
        document.documentElement.addEventListener('mouseup', event => {
          this.focus = false;
        }, {
          once: true
        });
      },
      handleMouseUp(event) {
        this.focus = false;
      },
      handleMove(event) {
        if (!this.focus) return false;
        this.handleGetPointer(event);
      },
      handleGetPointer(event) {
        const el = this.$el;
        const rect = el.getBoundingClientRect();

        let left = event.clientX - rect.left;
        let top = event.clientY - rect.top;
        left = Math.max(0, left);
        left = Math.min(left, rect.width);

        top = Math.max(0, top);
        top = Math.min(top, rect.height);

        const value = 100 - top / rect.height * 100;

        bus.$emit('color-picker:change', value);

        ['left', 'top'].forEach(item => {
          this.$set(this.pointerStyle, item, formatCss(item === 'left' ? left - 2 : top - 2))
        });
      }
    },
    mounted() {
      console.log('mounted')
      bus.$on('color-picker:get', value => {
        console.log(value)
        this.color = value
      })
    }
  }
</script>
