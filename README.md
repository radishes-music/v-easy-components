<p align="center">
  <img src="https://linkorg.club/logo.png" alt="v-easy-components">
</p>

# v-easy-components (support Vue3)

[![Build Status](https://travis-ci.com/Linkontoask/v-easy-components.svg?token=DxCbMdsVpziN8id5YUJs&branch=master)](https://travis-ci.com/Linkontoask/v-easy-components)
<a href="https://www.npmjs.com/package/v-easy-components"><img src="https://img.shields.io/badge/2.0.0-npm-brightgreen" alt=""></a>
<a href="https://github.com/Linkontoask/v-easy-components"><img src="https://img.shields.io/badge/dev-v2.0.0-blue" alt=""></a>
<a href="https://www.npmjs.com/package/v-easy-components"><img src="https://img.shields.io/badge/size-158kb-green" alt=""></a>
<a href="https://github.com/Linkontoask/v-easy-components"><img src="https://img.shields.io/badge/vue-3.x-orange" alt=""></a>
<a href="https://github.com/Linkontoask/v-easy-components/blob/dev-vue-next/LICENSE"><img src="https://img.shields.io/badge/license-MIT-red" alt=""></a>

### Document (not up-to-date)

- Homepage and documentation
  - [International users](https://linkorg.club)
  - [Chinese users](https://linkorg.club/zh/)
- [fontawesome](https://fontawesome.com/start)

### Install

```
npm install v-easy-components@next -D
```

or

```
yarn add v-easy-components@next -D
```

### Quick Start

```javascript
import { createApp } from 'vue'
import 'v-easy-components/dist/theme-chalk/index.css'
import VEasyComponents from 'v-easy-components'

const app = createApp()

app.use(VEasyComponents)
```

### Browser Start

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>v-easy-components</title>
    <script src="https://unpkg.com/vue@3.0.0/dist/vue.global.js"></script>
    <script src="https://unpkg.com/v-easy-components/dist/index.js"></script>
    <link
      rel="stylesheet"
      href="https://unpkg.com/v-easy-components/dist/theme-chalk/index.css"
    />
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script>
    const { createApp } = Vue

    const App = createApp({
      template: `<ve-button @click="$message('Test')">Click</ve-button>`
    })
    App.use(VEASY)

    App.mount('#root')
  </script>
</html>
```

### Browser Support (IE is currently not supported)

Modern browsers and Internet Explorer 11+.

### Changelog

Detailed changes for each release are documented in the [release notes](CHANGELOG.md).

### LICENSE

[MIT](./src/LICENSE)
