<h1 align="center">v-easy-ui</h1>

<p align="center">
    <a href="https://github.com/Linkontoask/v-easy"><img src="https://img.shields.io/badge/v-easy-ui-v0.3.5-blue.svg" alt=""></a>
    <a href="https://github.com/Linkontoask/v-easy"><img src="https://img.shields.io/badge/size-239kb-green.svg" alt=""></a>
    <a href="https://github.com/Linkontoask/v-easy"><img src="https://img.shields.io/badge/vue-2.x-orange.svg" alt=""></a>
    <a href="https://github.com/Linkontoask/v-easy"><img src="https://img.shields.io/badge/license-MIT-red.svg" alt=""></a>
</p>

### Demo
[OnlineDemo](https://linkontoask.github.io/demo/v-easy/index.html)

### Document
[Official website](https://linkorg.club)

### Install
```
npm install v-easy-ui -s
```

### Quick Start
``` javascript
import vEasy from 'v-easy-ui'

Vue.use(vEasy);
```

### use I18n
```javascript
import vEasy from 'v-easy-ui'
import locale from 'v-easy-ui/local/en'

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
        include: [resolve('/node_modules/v-easy-ui')]
      }
    ]
},

// vue.config.js (vue-cli3)
transpileDependencies: ['v-easy-ui']
```

### Demo
``` javascript
<template>
    <VEButton @click="send('info')" class="center" type="primary" icon="chrome" :rotate="true" :circle="true"></VEButton>
    <VEPlainInput v-model="str" message="字符超出范围" 
        :options="{min: 20,max: 30}" 
        @input="plainInput"></VEPlainInput>
</template>

<script>
export default {
    data() {
        return: {
            str: ''
        }
    },
    methods: {
        plainInput(val) {
            console.log(`%c input ${this.str}`, 'color: blue');
        },
        send(type) {
            this.$msg({
                type: type, //'success', 'error','info','warning'
                message: 'infomation',
                duration: 3000,
                onClose: () => {
                    console.log('callback');
                }
            });
        }
    }
}
</script>
```

### Update
+ 0.3.5 (2019.6.23)
    + v-easy-message更名为v-easy-ui，更新项目打包方式以及其它优化
+ 0.2.41 (2019.2.16)
    + 优化 `v-tip` 字体模糊问题
+ 0.2.25 (2019.1.28)
    + `ve-ip` 和 `ve-subnet` 发生错误不会自动对焦到下一位
    + 新增v-tip信息框
+ 0.1.48 (2019.1.17)
    + 新增 `ve-plain-input` 触发接收类型，支持多种类型触发检测
    + 支持多语言版本
+ 0.1.18 (2018.10.5)
    + `ve-ip` 和 `ve-subnet` 类似于windows输入框，可使用鼠标操作，小数点偏移
+ 0.1.16 (2018.9.29)
    + 修复 `ve-ip`、`ve-plain-input`、`ve-subnet` 绑定数据的问题
+ 0.1.13 (2018.9.28)
    + 新增 `ve-plain-input` 组件
+ 0.1.12 (2018.9.27)
    + 优化 `ve-ip` 和 `ve-subnet` 组件
+ 0.0.8 (2018.9.27)
    + 新增 `ve-subnet` 组件，优化样式代码
+ 0.0.5 (2018.8.29)
    + 新增 `ve-ip` 组件
+ 0.0.4 (2018.8.25)
    + 新增 `ve-button` 组件
+ 0.0.1 (2018.8.23)
    + 建立仓库，编写架构
    + 支持使用 `this.$msg` 呼叫message信息

### LICENSE
[MIT](https://raw.githubusercontent.com/Linkontoask/v-easy/master/src/components/v-easy/LICENSE)
