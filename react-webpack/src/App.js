import './App.css';
import {useState} from "react";

function App() {
  const [sum, setSum] = useState(0)
  const [param, setParam] = useState(1)

  const add = () => {
    setSum(prevSum => prevSum + param)
  }

  const subtract = () => {
    setSum(prevSum => prevSum - param)
  }

  const changeParam = (e) => {
    setParam(parseInt(e.target.value))
  }

  const addIfOdd = () => {
    if (sum % 2 === 0) return;
    setSum(prevSum => prevSum + param)
  }

  const addAsync = () => {
    setTimeout(() => {
      setSum(prevSum => prevSum + param)
    }, 500)
  }

  return (
    <>
      <div className='App'>
        <h2>sum: {sum}</h2>
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
    </>
  );
}

export default App;
