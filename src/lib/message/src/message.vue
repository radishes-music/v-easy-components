<template>
  <transition name="easy-message-animation">
    <div :class="['easy_message_' + type, 'message']"
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

    methods:{
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../../style/webFont.css";
  @success: #67c23a;
  @warning: #e6a23c;
  @error: #f56c6c;
  @info: #909399;
  .message {
    min-width: 340px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    position: fixed;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    background-color: #edf2fc;
    transition: opacity .3s,transform .4s;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    display: flex;
    align-items: center;
    z-index: 9999;
    p {
      margin: 0;
      padding: 0;
      font-size: 14px;
      line-height: 1;
      color: @info;
    }
    .message-type {
      margin-right: 10px;
    }
    .easy_message_close {
      position: absolute;
      right: 15px;
      top: 15px;
    }
    .fa-times {
      cursor: pointer;
    }
  }
  .easy_message_success {
      background-color: #f0f9eb;
      border-color: #e1f3d8;
      color: @success;
      .message-type, p {
          color: @success;
      }
  }
  .easy_message_warning {
      background-color: #fdf6ec;
      border-color: #faecd8;
      color: @warning;
      .message-type, p {
          color: @warning;
      }
  }
  .easy_message_error {
      background-color: #fef0f0;
      border-color: #fde2e2;
      color: @error;
      .message-type, p {
          color: @error;
      }
  }
  .easy-message-animation-enter, .easy-message-animation-leave-to {
    transform: translate(-50%, -100%);
    opacity: 0;
  }
</style>
