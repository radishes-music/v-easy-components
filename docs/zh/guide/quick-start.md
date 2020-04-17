---
meta:
  - name: description
    content: v-easy-components Quick start page
  - name: keywords
    content: v-easy-components QuickStart
---

# 快速开始

本章节介绍了如何在项目中使用 `v-easy-components`

## 使用 `v-easy-components`

你可以引入整个 `v-easy-components`，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 `v-easy-components`。

## 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import VEasy from 'v-easy-components';
import 'v-easy-components/lib/theme-chalk/index.css';

Vue.use(VEasy);
```

## 拆分引入 <Badge text="0.5.15+"/>

按需实现有两种方法，第一种是使用 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们只加载所需的组件来达到减少代码的引入。

#### 首先

安装 `babel-plugin-component`:

```sh
yarn install babel-plugin-component -D
```

#### 然后

在 `.babelrc` 中写入:

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "v-easy-components",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

下面介绍比第一个更直接的方法，不需要任何额外的配置。

```javascript
import Vue from 'vue'
import { Button } from 'v-easy-components'
import 'v-easy-components/lib/theme-chalk/button.css'

Vue.use(Button);
```

## 完整组件列表和引入方式

```javascript
import Vue from 'vue';
import 'v-easy-components/lib/theme-chalk/index.css';
import {
  version,
  Icon,
  Message,
  Button,
  InputIp,
  InputSubnet,
  InputPlain,
  Switch,
  Steps,
  Step,
  Skeleton,
  ImagePreview,
  ToolTip,
  ColorPicker,
  ScrollBar
} from 'v-easy-components';

Vue.prototype.$msg = Message;
Vue.use(Icon);
Vue.use(Message);
Vue.use(Button);
Vue.use(InputIp);
Vue.use(InputSubnet);
Vue.use(InputPlain);
Vue.use(Switch);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Skeleton);
Vue.use(ImagePreview);
Vue.use(ToolTip);
Vue.use(ColorPicker);
Vue.use(ScrollBar);
```
