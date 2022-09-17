<h1 align="center">Welcome to rc-seamless-scroll 👋</h1>

![](https://img.shields.io/badge/License-MIT-yellow.svg) ![](https://img.shields.io/badge/npm-0.12-orange.svg) ![](https://img.shields.io/github/issues/crazylxr/3dtagcloudforeact.svg) ![](https://img.shields.io/github/forks/crazylxr/3dtagcloudforeact.svg) ![](https://img.shields.io/github/stars/crazylxr/3dtagcloudforeact.svg) ![](https://img.shields.io/github/license/crazylxr/3dtagcloudforeact.svg)

### 🏠 [Homepage](https://github.com/llq0802/rc-seamless-scroll)

React Component based on `requestAnimationFrame` function for transportation element.

## Install

```sh
yarn add rc-seamless-scroll

# or

npm i rc-seamless-scroll
```

## Usage

```jsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactSeamlessScroll from 'rc-seamless-scroll';

const listData = [
  {
    title: '无缝滚动组件展示数据第1条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第2条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第3条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第4条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第5条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第6条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第7条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第8条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第9条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第10条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第11条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第12条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第13条',
    date: Date.now(),
  },
  {
    title: '无缝滚动组件展示数据第14条',
    date: Date.now(),
  },
];
const App = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  return (
    <ReactSeamlessScroll list={listData} ref={ref}>
      {listData.map((item, index) => (
        <div key={index} style={{ height: 22 }}>
          <span style={{ marginRight: 22 }}>{item.title}</span>
          <span>{item.date}</span>
        </div>
      ))}
    </ReactSeamlessScroll>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## 组件方法

- **onReset** 重置滚动
- **onCancel**  取消滚动

## Props

|       属性       |                     描述                     |           类型            | 是否必需 |   默认值   |
| :--------------: | :------------------------------------------: | :-----------------------: | :------: | :--------: |
|   isAutoScroll   |               是否开启自动滚动               |         *boolean*         |    否    |    true    |
|       list       |                 原始数据列表                 | Record<*string*, *any*>[] |    是    |            |
|       ref        |                   引用组件方法                   |            any            |    否    |            |
|       step       |       步进速度，step也是单步大小的约数       |         *number*          |    否    |     1      |
|  limitScrollNum  |              开启滚动的数据大小              |         *number*          |    否    |     3      |
|      hover       |               是否开启鼠标悬停               |         *boolean*         |    否    |   false    |
|    direction     |                 控制滚动方向                 |    up ,down,left,right    |    否    |    'up'    |
|   singleHeight   |       单步运动停止的高度(每一项的高度)       |         *number*          |    否    |            |
|   singleWidth    |       单步运动停止的宽度 每一项的宽度)       |         *number*          |    否    |            |
|  singleWaitTime  |               单步停止等待时间               |         *number*          |    否    |   1000ms   |
|    isRemUnit     |              是否开启 rem 单位               |         *boolean*         |    否    |   false    |
|      delay       |                 动画延迟时间                 |         *number*          |    否    |    0ms     |
|       ease       |       动画方式(与css过度效果配置一致)        |          string           |    否    |  ease-in   |
|      count       | 动画循环次数，默认-1表示一直动画 0表示不循环 |         *number*          |    否    |     -1     |
|     copyNum      |               拷贝几份滚动列表               |         *number*          |    否    |     1      |
|      wheel       |          开启鼠标悬停时支持滚轮滚动          |         *boolean*         |    否    |   false    |
| wrapperClassName |                最外层盒子类名                |         *string*          |    否    |            |
|  wrapperHeight   |                最外层盒子高度                |         *number*          |    否    | 列表的高度 |
|     children     |                   列表节点                   |         ReactNode         |    是    |            |

## Contributions Welcome

```sh
git clone git@github.com:worldzhao/react-easy-popup.git
cd react-easy-popup
yarn
yarn start
```

open another terminal tab

```sh
cd example
yarn
yarn start
```

## Run tests

```sh
yarn test
```

## Author

👤 **llq0802**

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
