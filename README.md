<h1 align="center">Welcome to rc-seamless-scroll 👋</h1>
<div align="center"> 
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  <img src="https://img.shields.io/badge/npm-0.12-orange.svg" />
  <img src="https://img.shields.io/github/issues/crazylxr/3dtagcloudforeact.svg" />
  <img src="https://img.shields.io/github/forks/crazylxr/3dtagcloudforeact.svg" />
  <img src="https://img.shields.io/github/stars/crazylxr/3dtagcloudforeact.svg" />
  <img src="https://img.shields.io/github/license/crazylxr/3dtagcloudforeact.svg" />
</div>

 <!-- ![](https://img.shields.io/github/license/crazylxr/3dtagcloudforeact.svg) -->

### 🏠 [主页地址](https://github.com/llq0802/rc-seamless-scroll)

React Component based on `requestAnimationFrame` API for transportation element.

## 安装

```sh
yarn add rc-seamless-scroll

# or

npm i rc-seamless-scroll
```

## 快速上手

```jsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactSeamlessScroll, { SeamlessScrollInctance } from 'rc-seamless-scroll';

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
  const ref = React.useRef < SeamlessScrollInctance > null;
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

## SeamlessScrollInstance

- **onReset** 重置滚动
- **onStopMove** 停止滚动
- **onStartMove** 开始滚动

## Props

|       属性       |                        描述                        |                         类型                          | 是否必需 |       默认值        |
| :--------------: | :------------------------------------------------: | :---------------------------------------------------: | :------: | :-----------------: |
|   isAutoScroll   |                  是否开启自动滚动                  |                       _boolean_                       |    否    |        true         |
|       list       |                    原始数据列表                    |               Record<_string_, _any_>[]               |    是    |          -          |
|       ref        |                    引用组件方法                    |                SeamlessScrollInstance                 |    否    |          -          |
|       step       |         步进速度，step 也是单步大小的约数          |                       _number_                        |    否    |          1          |
|  limitScrollNum  |                 开启滚动的数据大小                 |                       _number_                        |    否    |          3          |
|      hover       |                  是否开启鼠标悬停                  |                       _boolean_                       |    否    |        false        |
|    direction     |                    控制滚动方向                    |               up , down , left , right                |    否    |        'up'         |
|   singleHeight   |          单步运动停止的高度(每一项的高度)          |                       _number_                        |    否    |          -          |
|   singleWidth    |          单步运动停止的宽度(每一项的宽度)          |                       _number_                        |    否    |          -          |
|  singleWaitTime  |                  单步停止等待时间                  |                       _number_                        |    否    |       1000ms        |
|    isRemUnit     |                 是否开启 rem 单位                  |                       _boolean_                       |    否    |        false        |
|      delay       |                    动画延迟时间                    |                       _number_                        |    否    |         0ms         |
|       ease       |         动画方式(与 css 过度效果配置一致)          | *string*或者{x1:number,x2:number,y1:number,y2:number} |    否    |       ease-in       |
|      count       |   动画循环次数，默认-1 表示一直动画 0 表示不循环   |                       _number_                        |    否    |         -1          |
|     copyNum      |                  拷贝几份滚动列表                  |                       _number_                        |    否    |          1          |
|      wheel       | 开启鼠标悬停时支持滚轮滚动`(hover 为 true 时生效)` |                       _boolean_                       |    否    |        false        |
| wrapperClassName |                   最外层盒子类名                   |                       _string_                        |    否    |          -          |
|  wrapperHeight   |                   最外层盒子高度                   |                       _number_                        |    否    | children 列表的高度 |
|     children     |                      列表节点                      |                       ReactNode                       |    是    |          -          |

---

> **注意 :** `singleHeight/singleWidth`设置的值必须和 item 每一项的高度(宽度)值一样 , 否则可能会引起单步滚动不准!

## 参与贡献

```sh
git clone https://github.com/llq0802/rc-seamless-scroll.git
#or
git clone git@github.com:llq0802/rc-seamless-scroll.git

cd rc-seamless-scroll
yarn
yarn start
```

打开一个新的终端

```sh
cd example
yarn
yarn start
访问`http://localhost:1234`
```

## 测试

```sh
yarn test
```

## 联系我

👤 **VX :** **llq958614130** | **E-mail :** **958614130@qq.com**

## 支持

❤️ ❤️ ❤️ 觉得还行的话请不吝啬你的小心心奥 ❤️ ❤️ ❤️

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
