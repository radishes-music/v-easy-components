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

+ Homepage and documentation
  + [International users](https://linkorg.club)
  + [Chinese users](https://linkorg.club/zh/)
+ [fontawesome](https://fontawesome.com/start)

### Install
```
npm install v-easy-components -D
```
or
```
yarn add v-easy-components -D
```

### Quick Start
``` javascript
import 'v-easy-components/lib/theme-chalk/index.css'
import VEasy from 'v-easy-components'

Vue.use(VEasy);
```

### Browser Start
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>v-easy-components</title>
    <script src="https://unpkg.com/vue@2.6.10/dist/vue.js"></script>
    <script src="https://unpkg.com/v-easy-components@1.2.4/lib/index.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/v-easy-components@1.2.4/lib/theme-chalk/index.css">
  </head>
  <body>
    <div id="root">
      <ve-button @click="$msg('Test')">Click</ve-button>
    </div>
  </body>
  <script>
    new Vue({
      el: '#root'
    })
  </script>
</html>
```

### Browser Support

Modern browsers and Internet Explorer 10+.

### Changelog

Detailed changes for each release are documented in the [release notes](CHANGELOG.md).

### LICENSE

[MIT](./src/LICENSE)
