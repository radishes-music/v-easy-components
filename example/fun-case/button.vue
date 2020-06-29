<template>
  <div>
    <div>
      <ve-button plain>Success button</ve-button>
      <ve-button plain type="success">Success button</ve-button>
      <ve-button plain type="primary">Main button</ve-button>
      <ve-button plain type="warning">Warning button</ve-button>
      <ve-button plain type="error">Danger button</ve-button>
      <ve-button type="primary">Main button</ve-button>
      <ve-button mask mask-type="success">circle</ve-button>
      <ve-button mask mask-type="warning">circle</ve-button>
      <ve-button mask mask-type="error">circle</ve-button>
      <ve-button type="primary" :loading="loading">circle</ve-button>
      <ve-button @click="loading = !loading">加载完成</ve-button>
    </div>
    <div style="margin-top: 10px">
      <ve-button circle icon="magic"></ve-button>
      <div class="icon-box">
        <icon v-for="item in web" :key="item" :icon="item" />
      </div>
      <div class="icon-box">
        <icon v-for="item in editor" :key="item" :icon="item" />
      </div>
      <div class="icon-box">
        <icon v-for="item in direction" :key="item" :icon="item" />
      </div>
    </div>
  </div>
</template>

<script>
import icon from './icon-box'
export default {
  name: 'test-button',
  components: {
    icon
  },
  data() {
    return {
      loading: true,
      web: [
        'adjust',
        'edit',
        'magic',
        'share',
        'asterisk',
        'envelope',
        'magnet',
        'share-alt',
        'map-marker',
        'shopping-cart',
        'minus',
        'signal',
        'barcode',
        'bell',
        'bolt',
        'film',
        'filter',
        'fire'
      ],
      editor: [
        'file',
        'text-height',
        'font',
        'table',
        'paste',
        'text-width',
        'bold',
        'th-large',
        'cut',
        'align-left',
        'italic',
        'th',
        'copy',
        'align-center',
        'strikethrough',
        'th-list',
        'align-right',
        'underline',
        'list',
        'save',
        'align-justify',
        'link',
        'list-ol',
        'undo'
      ],
      direction: [
        'angle-left',
        'angle-right',
        'angle-up',
        'angle-down',
        'arrow-left',
        'arrow-right',
        'arrow-up',
        'arrow-down',
        'caret-left',
        'caret-right',
        'caret-up',
        'caret-down',
        'chevron-left',
        'chevron-right',
        'chevron-up',
        'chevron-down'
      ]
    }
  }
}
</script>

<style scoped lang="less">
.icon-box {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: -10px;
}
</style>
