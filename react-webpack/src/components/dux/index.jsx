import './index.css'
import '../../store'
import {useDispatch, useSelector} from "react-redux";
import {add, sub} from "../../store";
const Dux = () => {

  /*
  网页中使用Redux的步骤
  1. 引入Redux核心包
  2. 创建reducer整合函数
  3. 通过reducer对象创建store
  4. 对store中对state进行订阅
  5. 通过dispatch派发state的操作指令
  */
  // const store = Redux.createStore(reducer)
  // store.subscribe(() => {
  //   console.log(store.getState());
  // });

  const rtkStore = useSelector(state => state.stu)

  const dispatch = useDispatch();

  const plus = () => {
    dispatch(add(3))
  }
  const minus = () => {
    dispatch(sub(2))
  }

  return (
    <div className="dux">
      <div>
        <h2>Redux</h2>
      </div>
      <div>
        <button onClick={minus}>-</button>
        <h1>{rtkStore.count}</h1>
        <button onClick={plus}>+</button>
      </div>
    </div>
  );
};

export default Dux;