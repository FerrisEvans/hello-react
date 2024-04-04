import './App.css'
import React, {useRef, useState} from "react";

/*
state 是一个被React管理的变量。当我们通过setState()修改变量的值时，会触发组件的重新渲染
  只有state值发生变化时，组件才会重新渲染。
  当state值是一个对象时，修改时是使用新的对象替换原有对象。
  当通过setState()去修改一个state时，并不表示当前的state。他修改的是组件下一次渲染时的state值。

setState()会触发组件的重新渲染，是异步的。
  当调用setState()需要用到旧state值时，一定要注意有可能出现计算错误的情况。
  为避免这种情况，可以通过为setState()传递回调函数的形式来修改state。回调函数的返回值将会成为新的state值。
 */
/*
获取原生dom对象
1. 可以使用原生document来对dom进行操作
2. 直接从React处获取dom对象
  创建一个存储dom对象对容器，使用useRef()钩子函数。
    React的钩子函数只能用于函数组件或自定义钩子
    钩子函数只能直接在函数组件中调用
  将容器设置为想要获取dom对象元素的ref属性，React会自动将当前元素的dom对象设置为容器的current属性
 */
const App: React.FC = () => {
  const [count, setCount] = useState(1)

  const add = () => {
    setCount(perv => perv + 1)
  }

  const minus = () => {
    setCount(perv => perv - 1)
  }

  let r = useRef<HTMLHeadingElement>()
  console.log(r.current)
  return (
    <div className='app'>
      <h1>{count}</h1>
      <button onClick={minus}>-</button>
      <button onClick={add}>+</button>
      <h1 ref={r}>我是标题</h1>
    </div>
  )
}

export default App