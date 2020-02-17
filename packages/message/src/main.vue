<template>
  <transition name="v-easy-message-animation" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      :class="['v-easy-message-' + type, 'message']"
      :style="positionStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <slot>
        <i :class="typeIcon" class="message-type fa" />
        <p v-if="html" v-html="message" />
        <p v-else>{{ message }}</p>
      </slot>
      <i
        v-if="showClose"
        class="easy_message_close fa fa-times"
        @click="close"
      />
    </div>
  </transition>
</template>

<script>
let typeMap = {
  success: 'fa-check-circle',
  warning: 'fa-exclamation-circle',
  info: 'fa-info-circle',
  error: 'fa-times-circle'
}
export default {
  name: 'Message',
  data: function() {
    return {
      visible: false,
      type: 'info',
      message: '',
      html: false,
      duration: 3000,
      showClose: true,
      onClose: null,
      timer: null,
      verticalOffset: 20
    }
  },

  computed: {
    typeIcon() {
      return typeMap[this.type]
    },
    positionStyle() {
      return {
        top: `${this.verticalOffset}px`
      }
    }
  },

  methods: {
    handleAfterLeave() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    clearTimer() {
      clearTimeout(this.timer)
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (this.visible) {
            this.close()
          }
        }, this.duration)
      }
    },
    close() {
      this.visible = false
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },
    change() {
      this.visible = !this.visible
    }
  },

  mounted() {
    this.startTimer()
  }
}
</script>
