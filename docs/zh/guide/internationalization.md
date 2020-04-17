---
meta:
  - name: description
    content: v-easy-components Internationalization page
  - name: keywords
    content: v-easy-components Internationalization
---

# 国际化

`v-easy-components`组件内部默认使用中文，我们目前仅提供中文和英文。切换英文为例，在 main.js 中：

```javascript
import Vue from 'vue'
import VEasy from 'v-easy-components'
import locale from 'v-easy-components/src/locale/en'

Vue.use(VEasy, { locale });

new Vue({
render: h => h(App)
}).$mount('#app')
```

## 通过`CDN`加载语言文件

```html
<script src="//unpkg.com/vue"></script>
<script src="//unpkg.com/v-easy-components"></script>
<script src="//unpkg.com/v-easy-components/src/locale/en.js"></script>

<script>
  VEasy.locale(VEasy.lang.en)
</script>
```

## 目前 VEasy 内置了以下语言：

+ 英语
+ 中文
