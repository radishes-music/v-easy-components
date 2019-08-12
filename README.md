<h1 align="center">v-easy-components</h1>

[![Build Status](https://travis-ci.com/Linkontoask/v-easy-components.svg?token=DxCbMdsVpziN8id5YUJs&branch=master)](https://travis-ci.com/Linkontoask/v-easy-components)
<a href="https://github.com/Linkontoask/v-easy"><img src="https://img.shields.io/badge/dev-v0.5.3-blue.svg" alt=""></a>
<a href="https://github.com/Linkontoask/v-easy"><img src="https://img.shields.io/badge/size-44kb-green.svg" alt=""></a>
<a href="https://github.com/Linkontoask/v-easy"><img src="https://img.shields.io/badge/vue-2.x-orange.svg" alt=""></a>
<a href="https://github.com/Linkontoask/v-easy"><img src="https://img.shields.io/badge/license-MIT-red.svg" alt=""></a>

### Demo
[OnlineDemo](https://linkontoask.github.io/demo/v-easy/index.html)

### Document
[Official website](https://linkorg.club)

### Install
```
npm install v-easy-components -s
```

### Quick Start
``` javascript
import 'v-easy-components/bin/index.css'
import vEasy from 'v-easy-components'

Vue.use(vEasy);
```

### Use CDN
```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/v-easy-components/bin/index.css">
<!-- 引入组件库 -->
<script src="https://cdn.jsdelivr.net/npm/v-easy-components"></script>
```

### use I18n
```javascript
import vEasy from 'v-easy-components'
import locale from 'v-easy-components/local/en'

Vue.use(vEasy, { locale });
```

### use babel
``` javascript
// webpack.base.conf.js
module: {
  rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('/node_modules/v-easy-components')]
    }
  ]
},

// vue.config.js (vue-cli3)
transpileDependencies: ['v-easy-components']
```

### Update
[Change Log](./ChangeLog.md)

### Plan
- [ ] 支持 `TypeScript`
- [ ] 支持按需加载
- [x] 支持 `script` 标签引入

### LICENSE
[MIT](./src/LICENSE)
