import './App.css'
import React from "react";
import Item from "./components/Item";

const App: React.FC = () => {
    const items: Array<Items> = [
        {
            date: new Date(),
            desc: '学习React',
            time: 20
        }, {
            date: new Date(2021, 10, 20),
            desc: '学习Vue',
            time: 45
        }
    ]

    return (
        <div className='logs'>
            {
                items.map(item => <Item date={item.date} desc={item.desc} time={item.time}/>)
            }
        </div>
    )
}

export default App