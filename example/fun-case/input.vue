<template>
  <div class="input">
    <ve-input type-input="textarea" rows="4" v-model:value="value"></ve-input>
    <ve-input type-input="textarea" rows="4" v-model:value="value"></ve-input>
    <ve-input v-model:value="value1" @change="change" @compositionupdate="handleComposition" @compositionend="handleComposition" @compositionstart="handleComposition"></ve-input>
    <ve-input v-model:value="value" @change="change" type="search" size="large"></ve-input>
    <ve-input :options="[0, 1]" message="Character out of range">
      <template v-slot:prefixIcon>
        <span class="prefix-icon">
          <i :class="['fa', 'fa-' + 'th-large']"></i>
        </span>
      </template>
    </ve-input>
    <ve-input v-model:value="value" @change="change" size="large" prefixIcon="heart"></ve-input>
    <ve-input v-model:value="value" @change="change" size="large" suffixIcon="heart" icon-style="regular"></ve-input>
    <ve-input type-input="number" step="10" size="small"></ve-input>
    <ve-input type-input="number" step="20" :options="[-10, 10]"></ve-input>
  </div>
</template>

<script>
export default {
  name: 'test-input',
  data() {
    return {
      value: '123',
      value1: '123',
    }
  },
  methods: {
    change(v) {
      console.log(v)
    },
    handleComposition(e) {
      console.log(e.type)
    }
  }
}
</script>

<style scoped lang="less">
.input {
  display: flex;
  align-items: center;
  > div {
    margin-right: 10px;
  }
}
</style>
