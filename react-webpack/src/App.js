import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [count, setCount] = useState(1)
  /*
  useEffect()是一个钩子函数
    需要一个函数作为参数，这个函数将会在组件渲染完毕后执行，可以避免这些代码影响组件的渲染。
    第二个参数是个数组。当数组中的元素发生变化时，useEffect才会被触发。
      通常会将useEffect中使用的所有变量都设置为依赖项。
      如果设置的是空数组，则useEffect只会在组件初始化的时候渲染一次。
   */
  useEffect(() => {
    setCount(1)
    /*
    在Effect的回调函数中，可以指定一个函数作为返回值，可以称其为清理函数，他会在下次useEffect执行前调用。可以在这个函数中，做一些工作来清除上一次useEffect执行所带来的影响。
     */
    return () => {}
  }, [])

  return (
    <div className="App" style={{
      fontSize: '20px'
    }}>
      {count}
    </div>
  );
}

export default App;
