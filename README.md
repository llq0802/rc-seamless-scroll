<h1 align="center">Welcome to react-easy-popup 👋</h1>
<p>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

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
  return (
    <ReactSeamlessScroll list={listData}>
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

## API

| Property       | Description                                                                                    | Type                                           | Default  |
| -------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------- | -------- |
| visible        | Optional，control content visibility                                                           | boolean                                        | false    |
| position       | Optional，determines where the content will pop up                                             | 'center' / 'top' / 'bottom' / 'left' / 'right' | 'center' |
| mask           | Optional，decide whether to display the background layer                                       | boolean                                        | true     |
| maskClosable   | Optional，if the value is true, clicking on the background layer will trigger onClose function | boolean                                        | false    |
| onClose        | Optional，a function to set the visible to false                                               | function                                       | ()=>{}   |
| node           | Optional，the mounted node                                                                     | HTMLElement                                    | -        |
| destroyOnClose | Optional，whether content nodes are unloaded when closed                                       | boolean                                        | false    |
| wrapClassName  | Optional，className for the container node                                                     | string                                         | ''       |

## Contributions Welcome!

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
