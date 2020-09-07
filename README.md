<p align="center">
  <img src="https://linkorg.club/logo.png" alt="v-easy-components">
</p>

# v-easy-components

[![Build Status](https://travis-ci.com/Linkontoask/v-easy-components.svg?token=DxCbMdsVpziN8id5YUJs&branch=master)](https://travis-ci.com/Linkontoask/v-easy-components)
<a href="https://github.com/Linkontoask/v-easy-components"><img src="https://img.shields.io/badge/dev-v1.2.4-blue.svg" alt=""></a>
<a href="https://github.com/Linkontoask/v-easy-components"><img src="https://img.shields.io/badge/size-151kb-green.svg" alt=""></a>
<a href="https://github.com/Linkontoask/v-easy-components"><img src="https://img.shields.io/badge/vue-2.x-orange.svg" alt=""></a>
<a href="https://github.com/Linkontoask/v-easy-components"><img src="https://img.shields.io/badge/license-MIT-red.svg" alt=""></a>

### Document

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
import 'v-easy-components/lib/theme-chalk/index.css'
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
    <script src="https://unpkg.com/v-easy-components@next/lib/index.js"></script>
    <link
      rel="stylesheet"
      href="https://unpkg.com/v-easy-components@next/lib/theme-chalk/index.css"
    />
  </head>
  <body>
    <div id="root">
      <ve-button @click="$msg('Test')">Click</ve-button>
    </div>
  </body>
  <script type="module">
    import { createApp } from 'https://unpkg.com/vue@3.0.0-rc.9/dist/vue.esm-browser.js'
    const app = createApp()
    app.use(VEASY)
  </script>
</html>
```

### Browser Support

Modern browsers and Internet Explorer 11+.

### Changelog

Detailed changes for each release are documented in the [release notes](CHANGELOG.md).

### LICENSE

[MIT](./src/LICENSE)
