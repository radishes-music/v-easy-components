<h1 align="center">v-easy-components</h1>

[![Build Status](https://travis-ci.com/Linkontoask/v-easy-components.svg?token=DxCbMdsVpziN8id5YUJs&branch=master)](https://travis-ci.com/Linkontoask/v-easy-components)
<a href="https://github.com/Linkontoask/v-easy"><img src="https://img.shields.io/badge/dev-v0.5.4-blue.svg" alt=""></a>
<a href="https://github.com/Linkontoask/v-easy"><img src="https://img.shields.io/badge/size-48kb-green.svg" alt=""></a>
<a href="https://github.com/Linkontoask/v-easy"><img src="https://img.shields.io/badge/vue-2.x-orange.svg" alt=""></a>
<a href="https://github.com/Linkontoask/v-easy"><img src="https://img.shields.io/badge/license-MIT-red.svg" alt=""></a>

### Document
[Official website](https://linkorg.club)

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
import 'v-easy-components/bin/theme-chalk/index.css'
import vEasy from 'v-easy-components'

Vue.use(vEasy);
```

### Separation
[所有组件分离方法](https://linkorg.club/#/view/quickstart)
```javascript
import Button from 'v-easy-components/bin/button.js'
import 'v-easy-components/bin/theme-chalk/button.css'

Vue.use(Button);
```

### Use CDN
```html
<!-- 引入组件库 -->
<script src="https://unpkg.com/v-easy-components"></script>
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/v-easy-components/bin/theme-chalk/index.css">
```

### use I18n
```javascript
import vEasy from 'v-easy-components'
import locale from 'v-easy-components/local/en'

Vue.use(vEasy, { locale });
```

### Update
[Change Log](./ChangeLog.md)

### Plan
- [ ] 支持 `TypeScript`
- [x] 支持按需加载
- [x] 支持 `script` 标签引入

### LICENSE
[MIT](./src/LICENSE)
