<template>
  <div class="app">
    <aside class="aside">
      <ul>
        <li
          v-for="item in aside"
          :key="item.name"
          :class="{ active: router.currentRoute.name === item.name }"
          @click="handlerChange(item.name)"
        >
          {{ item.meta.formatter }}
        </li>
      </ul>
    </aside>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import router, { routes } from './router'

export default {
  data() {
    return {
      aside: routes,
      router: router
    }
  },
  mounted() {
    console.log(router)
  },
  methods: {
    handlerChange(name) {
      console.log(name)
      router.push({
        name
      })
    }
  }
}
</script>

<style scoped lang="less">
::v-deep(*) {
  box-sizing: border-box;
}
.aside {
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 10px;
    border-bottom: 1px solid #606266;
    li {
      list-style-type: none;
      cursor: pointer;
      &:hover {
        color: #3a8ee6;
      }
    }
    li.active {
      color: #3a8ee6;
    }
  }
}
section {
  padding: 20px;
}
</style>
