import './App.css';
import {useEffect, useReducer} from "react";
import Dux from "./components/dux";
import {Provider} from "react-redux";
import {store} from "./store";

const reducer = (prev, action) => {
  switch(action.type.toUpperCase()) {
    case 'ADD': return prev + 1;
    case 'SUB': return prev - 1;
    default: return prev;
  }
}

function App() {

  /*
  useEffect()是一个钩子函数
    需要一个函数作为参数，这个函数将会在组件渲染完毕后执行，可以避免这些代码影响组件的渲染。
    第二个参数是个数组。当数组中的元素发生变化时，useEffect才会被触发。
      通常会将useEffect中使用的所有变量都设置为依赖项。
      如果设置的是空数组，则useEffect只会在组件初始化的时候渲染一次。
   */
  useEffect(() => {
  //   fetch('http://localhost:8080/stu/list')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err));
    /*
    在Effect的回调函数中，可以指定一个函数作为返回值，可以称其为清理函数，他会在下次useEffect执行前调用。可以在这个函数中，做一些工作来清除上一次useEffect执行所带来的影响。
     */
    return () => {}
  }, [])

  /*
  useReducer()
  参数：
    1：函数 对于我们当前state的所有操作都应该在该函数中定义。该函数的返回值会成为state的新值。
      参数1: 当前最新的state，也就是prevState
      参数2: 一个对象，会存储dispatcher发出的指令
    为了避免这个函数被重复创建，通常会定义到组件的外部
    2：state初始值
    3：
  返回值：数组
  第一个元素：state，用来获取state的值
  第二个元素：state修改的派发器 通过派发器，可以发送操作state的命令。具体的修改行为将会由传入的函数执行。
   */
  const [count, countDispatch] = useReducer(reducer, 1)

  const sub = () => {
    countDispatch({
      type: 'SUB',
    })
  }
  const add = () => {
    countDispatch({
      type: 'ADD',
    })
  }

  return (
    <Provider store={store}>
      <div className="App">
        <button onClick={sub}>-</button>
        <h1>{count}</h1>
        <button onClick={add}>+</button>
      </div>
      <Dux></Dux>
    </Provider>
  );
}

export default App;
