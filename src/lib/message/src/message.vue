<template>
  <transition name="easy-message-animation">
    <div :class="['easy-message-' + type, 'message']"
         v-show="visible"
         @mouseenter="clearTimer"
         @mouseleave="startTimer">
      <slot>
        <i :class="typeIcon" class="message-type fa"></i>
        <p>{{ message }}</p>
      </slot>
      <i v-if="showClose" class="easy_message_close fa fa-times" @click="close"></i>
    </div>
  </transition>
</template>

<script>
  let typeMap = {
    success: 'fa-thumbs-up',
    warning: 'fa-hand-paper-o',
    info: 'fa-info',
    error: 'fa-thumbs-down'
  };
  export default {
    name: 'Message',
    data: function () {
      return {
        visible: false,
        type: 'info',
        message: '',
        duration: 3000,
        showClose: true,
        onClose: null,
        timer: null,
      }
    },

    computed: {
      typeIcon() {
        return typeMap[this.type];
      }
    },

    watch: {
      visible(val) {
        if (!val) {
          this.$el.addEventListener('transitionend', this.destoryElement);
        }
      },
    },

    methods: {
      destoryElement() {
        this.$el.removeEventListener('transitionend', this.destoryElement);
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },
      clearTimer() {
        clearTimeout(this.timer);
      },
      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (this.visible) {
              this.close();
            }
          }, this.duration)
        }
      },
      close() {
        this.visible = false;
        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
      },
      change() {
        this.visible = !this.visible;
      }
    },

    mounted() {
      this.startTimer();
    }
  }
</script>