import './App.css'
import React, {useState} from "react";

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