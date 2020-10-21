<template>
  <div>
    <ve-input type-input="textarea" rows="4" v-model="value"></ve-input>
    <ve-input v-model="value" @change="change"></ve-input>
    <ve-input :options="[0, 1]" message="Character out of range"></ve-input>
    <ve-input type-input="number" step="10"></ve-input>
    <ve-input type-input="number" step="20" :options="[-10, 10]"></ve-input>
  </div>
</template>

<script>
export default {
  name: 'test-input',
  data() {
    return {
      value: '123'
    }
  },
  methods: {
    change(v) {
      console.log(v)
    }
  }
}
</script>

<style scoped></style>
