<template>
  <div class="v-easy-collapse">
    <div class="v-easy-collapse-control" @click="open = !open">
      <slot name="control" />
    </div>
    <div class="v-easy-collapse-content">
      <transition name="collapse" mode="out-in">
        <ul v-show="open" :style="{ height: list.length * 24 + 'px' }">
          <li v-for="(item, index) in list" :key="index">
            <slot name="item" :item="item" />
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VeCollapse',
  props: {
    list: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  data() {
    return {
      open: false
    }
  }
}
</script>
