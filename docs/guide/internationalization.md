---
meta:
  - name: description
    content: v-easy-components Internationalization page
  - name: keywords
    content: v-easy-components Internationalization
---

# Internationalization

Chinese is used by default in the `v-easy-components` component. We only provide Chinese and English at present. For example, in main.js:

```javascript
import Vue from 'vue'
import VEasy from 'v-easy-components'
import locale from 'v-easy-components/src/locale/en'

Vue.use(VEasy, { locale });

new Vue({
render: h => h(App)
}).$mount('#app')
```

## Load language files by CDN

```html
<script src="//unpkg.com/vue"></script>
<script src="//unpkg.com/v-easy-components"></script>
<script src="//unpkg.com/v-easy-components/src/locale/en.js"></script>

<script>
  VEasy.locale(VEasy.lang.en)
</script>
```

## Currently VEasy has the following built-in languages:

+ English
+ Chinese
