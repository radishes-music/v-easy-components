<template>
  <div class="v-easy-route">
    <div class="v-easy-route-process" />
    <div class="v-easy-route-content">
      <div class="v-easy-route-content--name">
        <slot name="first-stop" />
      </div>
      <div v-if="$slots.tag" class="v-easy-route-content--tag">
        <slot name="tag" />
      </div>
      <div v-if="$slots['middle-stop']" class="v-easy-route-content--middle">
        <slot name="middle-stop" />
      </div>
      <div class="v-easy-route-content--name">
        <slot name="last-stop" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VeRouteIndicator'
}
</script>
