---
meta:
  - name: description
    content: v-easy-components steps page
  - name: keywords
    content: v-easy-components steps
---

# Steps 步骤条 <Badge text="0.7.0+"/>

A step-by-step navigation bar that guides users to complete tasks in accordance with the process. The steps can be set according to the actual application scenario. The steps must be at least 2 steps.

## Basic usage

Simple steps.

<div>
  <preview-code _id="0">
    <template #default>
      <ve-steps :active="active[0]" class="step-box">
        <ve-step class="step-li" title="Apple">Set Apple</ve-step>
        <ve-step class="step-li" title="Firefox">Set Firefox</ve-step>
        <ve-step class="step-li" title="Google">Set Google</ve-step>
        <ve-step class="step-li" title="Success">Success</ve-step>
        <template #footer>
          <ve-button type="primary" @click="handlerPrev(0)" v-show="active[0] !== 0 && active[0] !== 3">Previous</ve-button>
          <ve-button type="primary" @click="handlerNext(0)" :loading="loading[0]" v-show="active[0] !== 3">Next step</ve-button>
          <ve-button type="primary" @click="handlerSuccess" v-show="active[0] === 3">Complete</ve-button>
        </template>
      </ve-steps>
    </template>
    <template #txt>
       <div>Set the <em>active</em> property, accept a <em>Number</em>, indicating the index of the step, starting from <em>0</em></div>
    </template>
  </preview-code>
</div>

::: slot code0
```vue
<template>
  <ve-steps :active="active" class="step-box">
    <ve-step class="step-li" title="Apple">Set Apple</ve-step>
    <ve-step class="step-li" title="Firefox">Set Firefox</ve-step>
    <ve-step class="step-li" title="Google">Set Google</ve-step>
    <ve-step class="step-li" title="Success">Success</ve-step>
    <template #footer>
      <ve-button type="primary" @click="handlerPrev" v-show="active !== 0 && active !== 3">Previous</ve-button>
      <ve-button type="primary" @click="handlerNext" :loading="loading" v-show="active !== 3">Next step</ve-button>
      <ve-button type="primary" @click="handlerSuccess" v-show="active === 3">Complete</ve-button>
    </template>
  </ve-steps>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
      loading: false
    }
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
      })
    },
    handlerPrev() {
      this.active--
    },
    async handlerNext() {
      this.loading = true
      await this.sleep((Math.random() * 2000 + 100) | 0)
      this.loading = false
      this.active++
    },
    handlerSuccess() {

    }
  }
}
</script>
```
:::

## Step bar with icon

A variety of custom icons can be used in the step bar.

<div>
  <preview-code _id="1">
    <template #default>
      <ve-steps :active="active[1]" class="step-box">
        <ve-step class="step-li" icon-style="brands" title="Apple" icon="apple">Set Apple</ve-step>
        <ve-step class="step-li" icon-style="brands" title="Firefox" icon="firefox">Set Firefox</ve-step>
        <ve-step class="step-li" icon-style="brands" title="Google" icon="google">Set Google</ve-step>
        <ve-step class="step-li" title="Success" icon="check">Success</ve-step>
        <template #footer>
          <ve-button type="primary" @click="handlerPrev(1)" v-show="active[1] !== 0 && active[1] !== 3">Previous</ve-button>
          <ve-button type="primary" @click="handlerNext(1)" :loading="loading[1]" v-show="active[1] !== 3">Next step</ve-button>
          <ve-button type="primary" @click="handlerSuccess" v-show="active[1] === 3">Complete</ve-button>
        </template>
      </ve-steps>
    </template>
    <template #txt>
       <div>Set the icon through the <em>icon</em> property, the color of the icon follows the color of the text</div>
    </template>
  </preview-code>
</div>

::: slot code1
```vue
<template>
  <ve-steps :active="active" class="step-box">
    <ve-step class="step-li" icon-style="brands" title="Apple" icon="apple">Set Apple</ve-step>
    <ve-step class="step-li" icon-style="brands" title="Firefox" icon="firefox">Set Firefox</ve-step>
    <ve-step class="step-li" icon-style="brands" title="Google" icon="google">Set Google</ve-step>
    <ve-step class="step-li" title="Success" icon="check">Success</ve-step>
    <template #footer>
      <ve-button type="primary" @click="handlerPrev" v-show="active !== 0 && active !== 3">Previous</ve-button>
      <ve-button type="primary" @click="handlerNext" :loading="loading" v-show="active !== 3">Next step</ve-button>
      <ve-button type="primary" @click="handlerSuccess" v-show="active === 3">Complete</ve-button>
    </template>
  </ve-steps>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      loading: false
    }
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
      })
    },
    handlerPrev() {
      this.active--
    },
    async handlerNext() {
      this.loading = true
      await this.sleep((Math.random() * 2000 + 100) | 0)
      this.loading = false
      this.active++
    },
    handlerSuccess() {

    }
  }
}
</script>
```
:::

## Set steps direction

Change the position of the title

<div>
  <preview-code _id="2">
    <template #default>
      <ve-steps :active="active[2]" placement="right" class="step-box">
        <ve-step class="step-li" icon-style="brands" title="Apple" icon="apple">Set Apple</ve-step>
        <ve-step class="step-li" icon-style="brands" title="Firefox" icon="firefox">Set Firefox</ve-step>
        <ve-step class="step-li" icon-style="brands" title="Google" icon="google">Set Google</ve-step>
        <ve-step class="step-li" title="Success" icon="check">Success</ve-step>
        <template #footer>
          <ve-button type="primary" @click="handlerPrev(2)" v-show="active[2] !== 0 && active[2] !== 3">Previous</ve-button>
          <ve-button type="primary" @click="handlerNext(2)" :loading="loading[2]" v-show="active[2] !== 3">Next step</ve-button>
          <ve-button type="primary" @click="handlerSuccess" v-show="active[2] === 3">Complete</ve-button>
        </template>
      </ve-steps>
    </template>
    <template #txt>
       <div>By setting the <em>placement</em> to control the position of the navigation bar, it supports three values: <em>left</em>, <em>right</em>, <em>top</em></div>
    </template>
  </preview-code>
</div>

::: slot code2
```vue
<template>
  <ve-steps :active="active" placement="right" class="step-box">
    <ve-step class="step-li" icon-style="brands" title="Apple" icon="apple">Set Apple</ve-step>
    <ve-step class="step-li" icon-style="brands" title="Firefox" icon="firefox">Set Firefox</ve-step>
    <ve-step class="step-li" icon-style="brands" title="Google" icon="google">Set Google</ve-step>
    <ve-step class="step-li" title="Success" icon="check">Success</ve-step>
    <template #footer>
      <ve-button type="primary" @click="handlerPrev" v-show="active !== 0 && active !== 3">Previous</ve-button>
      <ve-button type="primary" @click="handlerNext" :loading="loading" v-show="active !== 3">Next step</ve-button>
      <ve-button type="primary" @click="handlerSuccess" v-show="active === 3">Complete</ve-button>
    </template>
  </ve-steps>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      loading: false
    }
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
      })
    },
    handlerPrev() {
      this.active--
    },
    async handlerNext() {
      this.loading = true
      await this.sleep((Math.random() * 2000 + 100) | 0)
      this.loading = false
      this.active++
    },
    handlerSuccess() {

    }
  }
}
</script>
```
:::

## Steps Attributes

<div-box _id="stepsAttributes"></div-box>

::: slot stepsAttributes
| Parameter | Description | Type | Optional value | Defaults |
| :--- | :--- | :--- | :--- | :--- |
| active | Set the current activation step | number | - | 0 |
| placement | Set navigation bar position | string | left / right / top | left |
| nav-class-name | Set the class name of the navigation bar | string | - | - |
:::

## Step Attributes

<div-box _id="stepAttributes"></div-box>

::: slot stepAttributes
| Parameter | Description | Type | Optional value | Defaults |
| :--- | :--- | :--- | :--- | :--- |
| title | Set the title of the step bar | string | - | - |
| icon | Set the icon to the left of the step bar | string | - | - |
| icon-style | Set the `icon` icon style [details](./icon.md#icon-style-description) | string | brands / regular / solid | solid |
:::

<script>
export default {
  data() {
    return {
      active: [2, 0, 0],
      loading: [false, false, false]
    }
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
      })
    },
    handlerPrev(index) {
      this.$set(this.active, index, this.active[index] - 1)
    },
    async handlerNext(index) {
      this.$set(this.loading, index, true)
      await this.sleep((Math.random() * 2000 + 100) | 0)
      this.$set(this.loading, index, false)
      this.$set(this.active, index, this.active[index] + 1)
    },
    handlerSuccess() {

    }
  }
}
</script>
