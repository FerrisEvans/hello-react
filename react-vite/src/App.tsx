import './App.css'
import React, {useState} from "react";

/*
state 是一个被React管理的变量。当我们通过setState()修改变量的值时，会触发组件的重新渲染
  只有state值发生变化时，组件才会重新渲染。
  当state值是一个对象时，修改时是使用新的对象替换原有对象。
  当通过setState()去修改一个state时，并不表示当前的state。他修改的是组件下一次渲染时的state值。

setState()会触发组件的重新渲染，是异步的。
  当调用setState()需要用到旧state值时，一定要注意有可能出现计算错误的情况。
  为避免这种情况，可以通过为setState()传递回调函数的形式来修改state。回调函数的返回值将会成为新的state值。
 */
const App: React.FC = () => {
  const [count, setCount] = useState(1)

  const add = () => {
    setCount(perv => perv + 1)
  }

  const minus = () => {
    setCount(perv => perv - 1)
  }

  return (
    <div className='app'>
      <h1>{count}</h1>
      <button onClick={minus}>-</button>
      <button onClick={add}>+</button>
    </div>
  )
}

export default App