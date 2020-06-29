---
pageClass: custom-icon-class
meta:
  - name: description
    content: v-easy-components route-indicator
  - name: keywords
    content: v-easy-components route-indicator
---

# RouteIndicator

Route indicators are usually used to express the relationship between lines, similar to the results of the high moral map search.


<div>
    <preview-code _id="0">
        <template #default>
            <ve-route-indicator>
                <template slot="first-stop">
                  <div>Chinese Art Palace</div>
                </template>
                <template slot="middle-stop">
                  <ve-collapse :list="list">
                    <template slot="control">
                      <div><ve-icon name="sort-down"></ve-icon>Take the {{ list.length + 1 }} stop</div>
                    </template>
                    <template v-slot:item="{ item }">
                      <div class="collapse-text">【{{ item.time }}】{{ item.name }}</div>
                    </template>
                  </ve-collapse>
                </template>
                <template slot="last-stop">
                  <div>Tangqiao</div>
                </template>
                <template slot="tag">
                  <ve-button size="small" type="primary">Details</ve-button>
                </template>
            </ve-route-indicator>
        </template>
        <template #txt>
            <div>Distribute content in different areas in the form of slots</div>
        </template>
    </preview-code>
</div>

::: slot code0
```vue
<template>
  <ve-route-indicator>
    <template slot="first-stop">
      <div>Chinese Art Palace</div>
    </template>
    <template slot="middle-stop">
      <ve-collapse :list="list">
        <template slot="control">
          <div><ve-icon name="sort-down"></ve-icon>Take the {{ list.length + 1 }} stop</div>
        </template>
        <template v-slot:item="{ item }">
          <div class="collapse-text">【{{ item.time }}】{{ item.name }}</div>
        </template>
      </ve-collapse>
    </template>
    <template slot="last-stop">
      <div>Tangqiao</div>
    </template>
    <template slot="tag">
      <ve-button size="small" type="primary">Details</ve-button>
    </template>
  </ve-route-indicator>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          { name: 'Tibet South Road', time: '10:05', id: 0 },
          { name: 'Nanpu Bridge', time: '10:15', id: 1 }
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
          { name: 'Tibet South Road', time: '10:05', id: 0 },
          { name: 'Nanpu Bridge', time: '10:15', id: 1 }
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


