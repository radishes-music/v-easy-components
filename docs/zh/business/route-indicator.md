---
pageClass: custom-icon-class
meta:
  - name: description
    content: v-easy-components route-indicator
  - name: keywords
    content: v-easy-components route-indicator h5
---

# 路线指示器

路线指示器通常运用于表示线路之间的关系，类似于高德地图搜索出来的结果。


<div>
    <preview-code _id="0">
        <template #default>
            <ve-route-indicator>
                <template slot="first-stop">
                  <div>中华艺术宫</div>
                </template>
                <template slot="middle-stop">
                  <ve-collapse :list="list">
                    <template slot="control">
                      <div><ve-icon name="sort-down"></ve-icon> 乘坐{{ list.length + 1 }}站</div>
                    </template>
                    <template v-slot:item="{ item }">
                      <div class="collapse-text">【{{ item.time }}】{{ item.name }}</div>
                    </template>
                  </ve-collapse>
                </template>
                <template slot="last-stop">
                  <div>塘桥</div>
                </template>
                <template slot="tag">
                  <ve-button size="small" type="primary">详情</ve-button>
                </template>
            </ve-route-indicator>
        </template>
        <template #txt>
            <div>以插槽的形式去分发不同区域的内容</div>
        </template>
    </preview-code>
</div>

::: slot code0
```vue
<template>
  <ve-route-indicator>
    <template slot="first-stop">
      <div>中华艺术宫</div>
    </template>
    <template slot="middle-stop">
      <ve-collapse :list="list">
        <template slot="control">
          <div><ve-icon name="sort-down"></ve-icon> 乘坐{{ list.length + 1 }}站</div>
        </template>
        <template v-slot:item="{ item }">
          <div class="collapse-text">【{{ item.time }}】{{ item.name }}</div>
        </template>
      </ve-collapse>
    </template>
    <template slot="last-stop">
      <div>塘桥</div>
    </template>
    <template slot="tag">
      <ve-button size="small" type="primary">详情</ve-button>
    </template>
  </ve-route-indicator>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          { name: '西藏南路', time: '10:05', id: 0 },
          { name: '南浦大桥', time: '10:15', id: 1 }
        ]
      }
    }
  };
</script>

<style>
.collapse-text {
  text-indent: 60px;
}
</style>
```
:::

<script>
  export default {
    data() {
      return {
        list: [
          { name: '西藏南路', time: '10:05', id: 0 },
          { name: '南浦大桥', time: '10:15', id: 1 }
        ]
      }
    }
  };
</script>

<style>
.collapse-text {
  text-indent: 60px;
}
</style>

