<template>
  <div>
    <button @click="m('info')">Click</button>
    <ve-button @click="m('info')">info</ve-button>
    <ve-button @click="m('warning')">warning</ve-button>
    <ve-button @click="m('error')">error</ve-button>
    <ve-button @click="m('success')">Success</ve-button>
  </div>
</template>

<script>
import Message from '@packages/message/index'

export default {
  name: 'message',
  data() {
    return {}
  },
  methods: {
    m(type) {
      console.log(this)
      Message({
        type: type || 'warning',
        duration: 1000,
        message: 'Hello Word'
      })
    }
  }
}
</script>

<style scoped></style>
