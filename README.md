## 说明

`auto-element` 全面兼容 `element-ui v2.15.14`，该库主要用于大屏缩放方案页面缩放计算后，弹出层偏移的情况（例如 autofit.js 等）。

以 **autofit.js** 为例：

```javascript
// 目前只支持 autofit 挂载至 body
autofit.init({
  el: 'body',
  ...
})
// 弹出层组件例如 el-select 
// popper-append-to-body 只能为 false（挂载至 body）
```

`main.js`

```javascript
// offset 指定 autofit 挂载的dom，目前也只能支持 body
Vue.use(AutoElement, { offset: 'body' })
```

## 安装

```shell
npm install auto-element -S
```

## 使用
``` javascript
import Vue from 'vue'
import AutoElement from 'auto-element'

Vue.use(AutoElement, { offset: 'body' })

// or
import {
  Select,
  Button
  // ...
} from 'auto-element'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```

## 感谢
方案来自 ！[issue](https://github.com/Auto-Plugin/autofit.js/issues/55) 

thanks 
  [wanglei1020](https://github.com/wanglei1020)
  [LarryZhu-dev](https://github.com/LarryZhu-dev)
