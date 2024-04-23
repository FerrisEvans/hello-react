import './index.css'
import * as Redux from "redux";
import '../../store'
const reducer = (prev, action) => {
  switch(action.type.toUpperCase()) {
    case 'ADD': return prev + 1;
    case 'SUB': return prev - 1;
    default: return prev;
  }
}
const Dux = () => {

  /*
  网页中使用Redux的步骤
  1. 引入Redux核心包
  2. 创建reducer整合函数
  3. 通过reducer对象创建store
  4. 对store中对state进行订阅
  5. 通过dispatch派发state的操作指令
  */
  const store = Redux.createStore(reducer)
  store.subscribe(() => {
    console.log(store.getState());
  });

  const add = () => {
    store.dispatch({
      type: 'ADD',
    })
  }
  const sub = () => {
    store.dispatch({
      type: 'SUB',
    })
  }


  return (
    <div className="dux">
      <div>
        <h2>Redux</h2>
      </div>
      <div>
        <button onClick={sub}>-</button>
        <h1>{store.getState()}</h1>
        <button onClick={add}>+</button>
      </div>
    </div>
  );
};

export default Dux;