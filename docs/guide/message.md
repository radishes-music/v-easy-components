---
meta:
  - name: description
    content: v-easy-components input page
  - name: keywords
    content: v-easy-components input
---

# Message

Commonly used for feedback prompts after active operation.

## Basic usage

Appears from the top and disappears automatically after 3 seconds. Move in and remove automatically disappears, and the removal starts automatically disappearing

<div>
  <preview-code _id="0">
    <template #default>
      <ve-button @click="send('info', 3000)" :plain="true">info</ve-button>
      <ve-button @click="send('success', 3000)" :plain="true" type="success">success</ve-button>
      <ve-button @click="send('warning', 3000)" :plain="true" type="warning">warning</ve-button>
      <ve-button @click="send('error', 3000)" :plain="true" type="error">error</ve-button>
    </template>
  </preview-code>
</div>

::: slot code0
```vue
<template>
  <ve-button @click="send('info')" plain>info</ve-button>
  <ve-button @click="send('success')" plain type="success">success</ve-button>
  <ve-button @click="send('warning')" plain type="warning">warning</ve-button>
  <ve-button @click="send('error')" plain type="error">error</ve-button>
</template>

<script>
  export default {
    methods: {
      send(type) {
        this.$msg({
          type,
          message :'Message',
          duration: 2000,
        });
      },
    },
  };
</script>
```
:::

## Cannot be closed

Shadow close button.

<div>
  <preview-code _id="1">
    <template #default>
      <ve-button @click="sendNotClose('info', 0, true)" :plain="true">info</ve-button>
      <ve-button @click="sendNotClose('success', 2000)" :plain="true" type="success">success</ve-button>
      <ve-button @click="sendNotClose('warning', 2000)" :plain="true" type="warning">warning</ve-button>
      <ve-button @click="sendNotClose('error', 2000)" :plain="true" type="error">error</ve-button>
    </template>
    <template #txt>
      <div>The default <em>Message</em> has a close button that can pass <em>showClose</em> to hide the close button. And you can pass <em>duration</em> to <em>0</em> to prevent <em>Message</em> from automatically closing. The default is <em>3000</em> milliseconds.</div>
    </template>
  </preview-code>
</div>

::: slot code1
```vue
<template>
  <ve-button @click="send('info', 0, true)" plain>info</ve-button>
  <ve-button @click="send('success', 2000)" plain type="success">success</ve-button>
  <ve-button @click="send('warning', 2000)" plain type="warning">warning</ve-button>
  <ve-button @click="send('error', 2000)" plain type="error">error</ve-button>
</template>

<script>
  export default {
    methods: {
      send(type, duration, showClose) {
        this.$msg({
          type,
          showClose,
          message :'Message',
          duration: duration || 0,
        });
      },
    },
  };
</script>
```
:::

## Callback after closing

use `onClose: e => console.log(e)` Discovery information is turned off

<div>
  <preview-code _id="2">
    <template #default>
      <ve-button @click="sendOnClose('info')" type="success">关闭后的回调</ve-button>
      <p :style="{color: color}">{{ msg }}</p>
    </template>
    <template #txt>
      <div>In some scenarios it may be necessary to catch the <em>Message</em> close event, we can configure an <em>onClose</em> function on <a href="#options">option</a> , triggered after <em>Message</em> is closed</div>
    </template>
  </preview-code>
</div>

::: slot code2
```vue
<template>
  <ve-button @click="sendOnClose('info')" type="success">关闭后的回调</ve-button>
  <p :style="{color: color}">{{ msg }}</p>
</template>

<script>
  export default {
    methods: {
      sendOnClose(type) {
        this.msg = 'Be opened';
        this.color = '#5e6d82';
        this.$msg({
          type,
          message: 'Mesage',
          duration: 5000,
          onClose: () => {
            this.msg = 'Is closed';
            this.color = '#f53939';
          },
        });
      },
    },
  };
</script>
```
:::

## Global method

`v-easy-components` added the global method $msg to Vue.prototype. So in the vue instance you can call `Message` in the same way as this page.

## Options

<div-box _id="tableAttributes"></div-box>

::: slot tableAttributes
| Parameter | Description | Type | Optional value | Defaults |
| :--- | :--- | :--- | :--- | :--- |
| type | theme | string	| success/warning/info/error | info |
| message | Message text | string | - | - |
| duration | Display time, milliseconds | number | - | 3000 |
| showClose | Whether to display the close button | boolean | - | true |
| onClose | Callback function when closed, parameter is the message instance being closed	| function | - | - |
:::

## Message Methods

| Method name | Description |
| :--- | :--- |
| close | Close the current Message |

<script>
  export default {
    data() {
      return {
        msg: '',
        color: '',
      }
    },
    methods: {
      sendNotClose(type, duration, showClose) {
        this.$msg({
          type,
          duration,
          showClose,
          message :'Message',
        });
      },
      send(type) {
        this.$msg({
          type,
          message :'Message',
        });
      },
      sendOnClose(type) {
        this.msg = 'Be opened';
        this.color = '#5e6d82';
        this.$msg({
          type,
          message: 'Mesage',
          duration: 5000,
          onClose: () => {
            this.msg = 'Is closed';
            this.color = '#f53939';
          },
        });
      },
    },
  };
</script>
