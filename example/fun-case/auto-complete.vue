<template>
  <div class="auto">
    <div>
      <div>已经初始化DataSource</div>
      <ve-auto-complete v-model:value="value" :data-source="data" prefix-icon="twitter-square" icon-style="brands">
        <template #suffix>
          <i class="fa fa-search"></i>
        </template>
      </ve-auto-complete>
    </div>
    <div>
      <div>ajax初始化DataSource</div>
      <ve-auto-complete v-model:value="value2" :data-source="data2" @focus="handleFocus" suffix-icon="search">
        <template #noneData>
          <div>
            <h3 style="text-align: center">没有数据哦</h3>
          </div>
        </template>
      </ve-auto-complete>
    </div>
    <div>
      <div>远程搜索DataSource</div>
      <ve-auto-complete v-model:value="value1" :data-source="data1" type="search" @compositionend="handleChange" :loading="loading">
        <template #noneData>
          <div>
            <h3>没有数据哦</h3>
          </div>
        </template>
      </ve-auto-complete>
    </div>
    <div>
      <div>远程搜索DataSource + render</div>
      <ve-auto-complete v-model:value="value4" :data-source="data4" type="search" @search="handleChange2" :loading="loading2" :visible="visible" @focus="visible = true" @blur="visible = false">
        <template v-slot:popper>
          <div>
            <li v-for="(i, index) in data4" :key="index" @click="value4 = i">{{i}}</li>
          </div>
        </template>
      </ve-auto-complete>
    </div>
    <div>
      <div>远程搜索DataSource + 多选</div>
      <ve-auto-complete v-model:value="value3" multiple :data-source="data3" type="search" @search="handleChange1" :loading="loading1" />
    </div>
  </div>
</template>

<script>
import { h } from 'vue'
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
      value4: '',
      loading: false,
      loading1: false,
      loading2: false,
      data: ['gmail.com', '163.com', 'qq.com'],
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      visible: false
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
    search2() {
      if (this.value4) {
        this.loading2 = true
        setTimeout(() => {
          this.loading2 = false
          this.data4 = ['gmail.com', '163.com', 'qq.com']
        }, (Math.random() * 2000) | 0 + 1000)
      }
    },
    handleFocus() {
      if (this.data2.length) return
      setTimeout(() => {
        this.data2 = ['gmail.com', '163.com', 'qq.com']
      }, 3000)
    },
  },
  beforeMount() {
    this.handleChange = debounce(this.search, 500)
    this.handleChange1 = debounce(this.search1, 500)
    this.handleChange2 = debounce(this.search2, 500)
  }
}
</script>

<style lang="less" scoped>
  .auto {
    display: flex;
    align-items: center;
    > div {
      margin-right: 20px;
      > div {
        margin-bottom: 10px;
      }
    }
  }
</style>
