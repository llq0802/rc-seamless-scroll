import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactSeamlessScroll, { SeamlessScrollProps } from '../.'; // 需要注意的是 example 的入口文件index.tsx引入的是我们打包后的文件，即dist/index.js。
// import '../dist/rc-seamless-scroll.min.css'; // 此处不存在parcel alias 写好相对路径

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
  const [list, setList] = React.useState(listData);

  React.useEffect(() => {
    setInterval(() => {
      setList(item => {
        return [
          ...item,
          {
            title: '我是新增的数据',
            date: Math.random()
              .toString(16)
              .slice(2),
          },
        ];
      });
    }, 2000);
  }, []);

  return (
    <ReactSeamlessScroll<SeamlessScrollProps>
      wrapperHeight={250}
      list={list}
      step={1}
      singleHeight={22}
      hover
      wheel
      wrapperClassName="scroll-wrapper"
    >
      {list.map((item, index) => (
        <div key={index} style={{ height: 22 }}>
          <span style={{ marginRight: 22 }}>{item.title}</span>
          <span>{item.date}</span>
        </div>
      ))}
    </ReactSeamlessScroll>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
