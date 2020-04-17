---
meta:
  - name: description
    content: v-easy-components Quick start page
  - name: keywords
    content: v-easy-components QuickStart
---

# Quick start

This article describes how to use `v-easy-components` in a project

## Use `v-easy-components`

You can introduce the entire `v-easy-components` or just introduce some components as needed. We will first introduce how to introduce complete `v-easy-components`.

## Complete introduction

Write the following in main.js:

```javascript
import Vue from 'vue';
import VEasy from 'v-easy-components';
import 'v-easy-components/lib/theme-chalk/index.css';

Vue.use(VEasy);
```

## Split introduction <Badge text="0.5.15+"/>

There are two ways to achieve on-demand, the first is to use [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component), we can only introduce the required components to achieve the purpose of reducing the volume of the project.

#### The first

First, install `babel-plugin-component`:

```sh
npm install babel-plugin-component -D
```

#### Second

Then, modify the `.babelrc` to:

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

More direct than the first one, no extra configuration is required.

```javascript
import Vue from 'vue'
import { Button } from 'v-easy-components'
import 'v-easy-components/lib/theme-chalk/button.css'

Vue.use(Button);
```

## Complete component list and introduction

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
