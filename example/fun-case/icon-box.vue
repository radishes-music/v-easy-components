<template>
  <div class="preview-icon" @click="handlerCopy">
    <textarea
      style="opacity: 0;height: 0;padding: 0;position: absolute;z-index: -1"
      ref="code"
      :value="icon"
    />
    <ve-icon
      :style="{ opacity: Copied ? 0.4 : 1 }"
      :name="icon"
      size="34"
    ></ve-icon>
    <span>{{ icon }}</span>
    <transition name="fade1">
      <p class="p-box" style="color: white" v-if="Copied">{{ copyTxt }}</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'icon',
  data() {
    return {
      Copied: false,
      copyTxt: 'Copied'
    }
  },
  props: {
    icon: String
  },
  methods: {
    sleep(ms) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, ms)
      })
    },
    async handlerCopy() {
      this.Copied = true
      try {
        this.copyTxt = 'Copied'
        this.$refs.code.select()
        document.execCommand('Copy')
      } catch (e) {
        this.copyTxt = 'Copy failed'
      }
      await this.sleep(1200)
      this.Copied = false
    }
  }
}
</script>

<style scoped lang="less">
.p-box {
  position: absolute;
  height: 24px;
  top: -16px;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  margin: auto;
  line-height: 1 !important;
}
.preview-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 14%;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 10px;
  padding: 10px 4px;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}
.v-icon {
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
}
.preview-icon:hover,
.preview-icon:hover .v-icon {
  color: #fff;
  background-color: #1890ff;
}
.preview-icon:hover .v-icon {
  transform: scale(1.2);
}
.preview-icon span {
  display: block;
  text-align: center;
  width: 100%;
  margin-top: 6px;
  font-size: 14px;
}
</style>
