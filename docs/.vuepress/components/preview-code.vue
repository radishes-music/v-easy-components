<template>
  <div class="preview-code">
    <textarea
      style="opacity: 0;height: 0;padding: 0;position: absolute;z-index: -1"
      name=""
      ref="code"
      cols="30"
      rows="10"
      v-model="code"
    ></textarea>
    <div class="preview">
      <slot></slot>
    </div>
    <div
      class="code"
      :style="{
        height: height,
        opacity: showCode ? 1 : 0,
        marginTop: showCode ? '24px' : 0
      }"
    >
      <div ref="description" v-if="$slots.txt">
        <slot name="txt"></slot>
      </div>
      <Content ref="codeBox" :slot-key="'code' + _id" />
    </div>
    <div class="show">
      <ve-button style="flex: 1" type="text" icon="code" @click="changeShow"
        >{{ showCode ? language.hide : language.show
        }}{{ language.code }}</ve-button
      >
      <div class="control">
        <ClientOnly>
          <ve-button
            type="text"
            icon="copy"
            @click="copyCode"
            @mouseenter.native="isCopy = false"
            v-tip="{ VNode: renderTip, Class: tip.class, offset: 12 }"
          ></ve-button>
          <ve-button
            v-if="$page.frontmatter.tags === 'skeleton'"
            type="text"
            icon="sync"
            @click="retry"
            v-tip="{ content: language.retry, offset: 12 }"
          ></ve-button>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script>
const language = {
  'zh-CN': {
    show: '显示',
    hide: '隐藏',
    copy: '拷贝',
    code: '代码',
    success: '成功',
    fail: '失败',
    retry: '重新加载'
  },
  'en-US': {
    show: 'Display ',
    hide: 'Hide ',
    copy: 'Copy ',
    code: 'Code',
    success: 'success',
    fail: 'fail',
    retry: 'Reload'
  }
}
export default {
  name: 'preview-code',
  data() {
    return {
      showCode: false,
      height: 0,
      cache: 0,
      copyStatus: false,
      isCopy: false,
      code: ''
    }
  },
  computed: {
    language() {
      return language[this.$lang]
    },
    tip() {
      const { language, isCopy, copyStatus } = this
      return {
        content:
          language.copy +
          (isCopy
            ? copyStatus
              ? language.success
              : language.fail
            : language.code),
        class: isCopy ? (copyStatus ? 'copy-success' : 'copy-error') : ''
      }
    }
  },
  props: {
    className: {
      type: String,
      default: 'js'
    },
    _id: {
      type: String
    }
  },
  methods: {
    renderTip() {
      const { tip, $createElement } = this
      return $createElement(
        'div',
        {
          class: {
            [tip.class]: true
          }
        },
        [tip.content]
      )
    },
    retry() {
      typeof this.$parent.task === 'function' &&
        this.$parent.task(+this._id * 2, +this._id)
    },
    changeShow() {
      this.showCode = !this.showCode
      this.height = this.showCode ? this.cache + 'px' : 0
    },
    copyCode: function() {
      this.isCopy = true
      try {
        this.$refs.code.select()
        document.execCommand('Copy')
        this.copyStatus = true
      } catch (e) {
        this.copyStatus = false
      }
    },
    declatationConvertNumber(el, css) {
      const desElementStyle = window.getComputedStyle(el)
      return +desElementStyle[css].replace(/px$/, '')
    },
    initHeight() {
      let desPaddingMargin = 0
      if (this.$refs.description) {
        ;[
          'paddingTop',
          'paddingBottom',
          'marginTop',
          'marginBottom',
          'height'
        ].forEach(item => {
          desPaddingMargin += this.declatationConvertNumber(
            this.$refs.description,
            item
          )
        })
      }
      let codeBox = 0
      ;[
        'paddingTop',
        'paddingBottom',
        'marginTop',
        'marginBottom',
        'height'
      ].forEach(item => {
        codeBox += this.declatationConvertNumber(this.$refs.codeBox.$el, item)
      })
      this.cache = codeBox + desPaddingMargin + 4
      this.code = this.$refs.codeBox.$el.textContent
    }
  },
  mounted() {
    this.$nextTick(this.initHeight)
    // console.log(this.$site, this.$page)
  }
}
</script>

<style scoped>
.preview-code {
  position: relative;
  padding: 16px 16px 0;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  overflow: hidden;
}
.show {
  position: relative;
  text-align: center;
  margin-top: 12px;
  padding: 12px 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #e6e6e6;
  background-color: white;
}
.control {
  margin-left: auto;
}
.code {
  height: 0;
  border-top: 1px solid #e6e6e6;
  transition: all 0.4s;
  overflow: hidden;
}
.code > div {
  width: calc(100% - 32px);
  margin: 16px auto 0;
  font-size: 14px;
  color: #5e6d82;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
}
.code > pre {
  line-height: 22px;
}
.code em {
  font-style: normal;
  color: #149298;
  background-color: #e5f3ff;
  border-radius: 2px;
  padding: 2px;
}
</style>
