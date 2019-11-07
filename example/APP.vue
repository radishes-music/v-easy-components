<template>
  <div class="app">
    <aside class="aside">
      <ul>
        <li v-for="item in aside" :key="item.name" :class="{active: $route.name === item.name}" @click="handlerChange(item.name)">{{ item.meta.formatter }}</li>
      </ul>
    </aside>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
  import { routes } from './router'

  export default {
    data() {
      return {
        aside: routes
      }
    },
    methods: {
      handlerChange(name) {
        this.$router.push({
          name
        })
      }
    },
    mounted() {

    }
  }
</script>

<style scoped lang="less">
  /deep/ * {box-sizing: border-box}
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
