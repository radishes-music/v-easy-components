<template>
  <div class="auto">
    <div>
      <div>已经初始化DataSource</div>
      <ve-auto-complete v-model:value="value" :data-source="data" />
    </div>
    <div>
      <div>ajax初始化DataSource</div>
      <ve-auto-complete v-model:value="value2" :data-source="data2" @focus="handleFocus" />
    </div>
    <div>
      <div>远程搜索DataSource</div>
      <ve-auto-complete v-model:value="value1" :data-source="data1" type="search" @search="handleChange" :loading="loading" />
    </div>
    <div>
      <div>远程搜索DataSource + 多选</div>
      <ve-auto-complete v-model:value="value3" multiple :data-source="data3" type="search" @search="handleChange1" :loading="loading1" />
    </div>
  </div>
</template>

<script>
import { contain } from '@/utils/utils'
import { debounce } from 'lodash'
export default {
  name: 'test-input',
  data() {
    return {
      value: '',
      value1: '',
      value2: '',
      value3: '',
      loading: false,
      loading1: false,
      data: ['gmail.com', '163.com', 'qq.com'],
      data1: [],
      data2: [],
      data3: [],
    }
  },
  methods: {
    search() {
      if (this.value1) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.data1 = ['gmail.com', '163.com', 'qq.com']
        }, (Math.random() * 2000) | 0 + 1000)
      }
    },
    search1() {
      if (this.value3) {
        this.loading1 = true
        setTimeout(() => {
          this.loading1 = false
          this.data3 = ['gmail.com', '163.com', 'qq.com']
        }, (Math.random() * 2000) | 0 + 1000)
      }
    },
    handleFocus() {
      if (this.data2.length) return
      setTimeout(() => {
        this.data2 = ['gmail.com', '163.com', 'qq.com']
      }, 3000)
    }
  },
  beforeMount() {
    this.handleChange = debounce(this.search, 500)
    this.handleChange1 = debounce(this.search1, 500)
  }
}
</script>

<style lang="less" scoped>
  .auto {
    display: flex;
    align-items: center;
    /deep/ div {
      margin-right: 10px;
    }
  }
</style>
