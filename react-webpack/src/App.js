import './App.css';
import {useState} from "react";
import store from "./redux/store";
import {Provider} from "react-redux";
import {createDecrementAction, createIncrementAction} from "./redux/action/count";

function App() {

  const {count} = store.getState();

  const [param, setParam] = useState(1)

  const add = () => {
    store.dispatch(createIncrementAction(param))
  }

  const subtract = () => {
    store.dispatch(createDecrementAction(param))
  }

  const changeParam = (e) => {
    setParam(parseInt(e.target.value))
  }

  const addIfOdd = () => {
    if (count % 2 === 0) return;
    store.dispatch(createIncrementAction(param))
  }

  const addAsync = () => {
    setTimeout(() => {
      store.dispatch(createIncrementAction(param))
    }, 500)
  }

  return (
    <Provider store={store}>
      <div className='App'>
        <h2>sum: {count}</h2>
        <div className='operation'>
          <select value={param} onChange={changeParam} name='param' id='sum-param'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
          <button onClick={add}>+</button>
          <button onClick={subtract}>-</button>
          <button onClick={addIfOdd}>inc if odd</button>
          <button onClick={addAsync}>inc async</button>
        </div>
      </div>
    </Provider>
  );
}

export default App;
