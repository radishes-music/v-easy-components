---
meta:
  - name: description
    content: v-easy-components ip-input page
  - name: keywords
    content: v-easy-components ip-input
---

# IP / Subnet 输入框

Here's how to use VEasy's IP input box in our pages

## Usage method

#### Ip Usage method

Similar to the IP input box of Windows system, the cursor position can be controlled by the left and right keys of the keyboard, and the decimal point can be typed or the next cursor can be automatically placed if the condition is satisfied. And if the input error occurs, it will be prompted and the error location will be notified in real time.

<div>
  <preview-code _id="0">
    <template #default>
      <ve-ip v-model="value" maxWidth="220" @input="$msg(value.join('.'))"></ve-ip>
    </template>
  </preview-code>
</div>

::: slot code0
```vue
<template>
  <ve-ip v-model="value" maxWidth="220" @input="$msg(value.join('.'))"></ve-ip>
</template>

<script>
  export default {
    data() {
      return {
        value: [],
      }
    }
  }
</script>
```
:::

#### Subnet Usage method

The subnet mask is similar to the IP / DNS input box, except that the rules are slightly different

<div>
  <preview-code _id="4">
    <template #default>
      <ve-subnet v-model="subnet" maxWidth="180"></ve-subnet>
    </template>
    <template #txt>
      <div>Note:
        <ul>
          <li>The subnet mask is different from the normal IP address, so the IP component and the Subnet component have certain behavioral differences. </li>
          <li>When the previous bit value of the subnet mask is not <em>255</em>, the latter bit can only be filled with one digit, and the previous bit must conform to the standard subnet mask rule. Otherwise, the error is directly indicated.</li>
        </ul>
      </div>
    </template>
  </preview-code>
</div>

::: slot code4
```vue
<template>
  <ve-subnet v-model="value" maxWidth="180"></ve-subnet>
</template>

<script>
  export default {
    data() {
      return {
        value: [],
      }
    }
  }
</script>
```
:::

## Disable/Read-Only Input Box

Make IP Input Box Unable to Type

<div>
  <preview-code _id="1">
    <template #default>
      <ve-ip v-model="value1" maxWidth="220" :disabled="true"></ve-ip>
      <ve-ip v-model="value2" maxWidth="220" :readonly="true"></ve-ip>
    </template>
  </preview-code>
</div>

::: slot code1
```vue
<template>
  <ve-ip v-model="value" maxWidth="220" @input="inputTest" disabled></ve-ip>
  <ve-ip v-model="value1" maxWidth="220" @input="inputTest" readonly></ve-ip>
</template>

<script>
  export default {
    data() {
      return {
        value: [172, 0, 0, 1],
        value2: [255, 255, 255, 255],
      }
    }
  }
</script>
```
:::

## Use `@error`

Adding `@error="error"` to attributes can make corresponding processing when an error occurs.

<div>
  <preview-code _id="2">
    <template #default>
      <ve-ip
        v-model="value3"
        format="ipv4"
        maxWidth="220"
        :message="`IP format error, (${value3.join('.')})`"
        @error="handleError"></ve-ip>
    </template>
  </preview-code>
</div>

::: slot code2
```vue
<template>
  <ve-ip
    v-model="value"
    format="ipv4"
    maxWidth="220"
    :message="`IP format error, (${value.join('.')})`"
    @error="handleError"></ve-ip>
</template>

<script>
  export default {
    data() {
      return {
        value: [],
      }
    },

    methods: {
      handleError(value) {
        this.$msg({
          message: value.join('.'),
          type: 'error'
        });
      },
    },
  }
</script>
```
:::

## Use `@status`

IP Format State Switching Triggers Callback

<div>
  <preview-code _id="3">
    <template #default>
      <ve-ip
        v-model="value4"
        format="ipv4"
        maxWidth="220"
        message="IP format error"
        @status="handleStatus"></ve-ip>
    </template>
  </preview-code>
</div>

::: slot code3
```vue
<template>
  <ve-ip
    v-model="ipv4"
    format="ipv4"
    maxWidth="220"
    message="IP format error"
    @status="handleStatus"></ve-ip>
</template>

<script>
  export default {
    data() {
      return {
        ipv4: [],
      }
    },

    methods: {
      handleStatus(status) {
        this.$msg('IP format error：' + status)
      },
    },
  }
</script>
```
:::

<script>
  export default {
    data() {
      return {
        value: [],
        value1: [172, 0, 0, 1],
        value2: [255, 255, 255, 255],
        value3: [],
        value4: [],
        subnet: [],
      }
    },

    methods: {
      handleError(value) {
        this.$msg({
          message: value.join('.'),
          type: 'error'
        });
      },

      handleStatus(status) {
        this.$msg('IP format error：' + status)
      },
    },
  }
</script>

## Attributes

<div-box _id="tableAttributes"></div-box>

::: slot tableAttributes
| Parameter | Description | Type | Optional value | Defaults |
| :--- | :--- | :--- | :--- | :--- |
| max-width | Maximum width of Component | string |	- |	- |
| width |	The width of the Component	| string | - | - |
| disabled | Whether to disable the component, if it is disabled, you can not write data | boolean / string	true / false | false |
| readonly | Read-only component, users cannot directly change |	boolean / string	true / false | false |
| spliceChar | Delimiter, specifying the incoming IP string to use for splitting | string | - | . |
| message	| Error message, used in the wrong situation	| string | - | Please enter the correct IP address |
| format | Specify input box type | string | ipv4 / ipv6 | ipv4 |
:::

## Ip-Input Events

| Event name | Event Description | Callback parameter |
| :--- | :--- | :--- |
| input | Input trigger | {$event: Event, index: Number} |
| blur | Triggered when a component loses focus | {$event: Event, index: Number} |
| focus | Triggered when a component gains focus | {$event: Event, index: Number} |
| keyUp | Triggered when the button is raised | {$event: Event, index: Number} |
| keyDown | Triggered when the button is pressed | {$event: Event, index: Number} |
