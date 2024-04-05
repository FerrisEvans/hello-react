import './App.css'
import React from "react";
import Item from "./components/Item";
import Card from "./ui/card";
import Form from "./components/Form";

const App: React.FC = () => {
  const items: Array<Items> = [
    {
      key: 1,
      date: new Date(),
      desc: '学习React',
      time: 20
    }, {
      key: 2,
      date: new Date(2021, 10, 20),
      desc: '学习Vue',
      time: 45
    }
  ]

  return (
    <div className='app'>
      <Form></Form>
      <Card className='logs'>
        {
          items.map((item, index) => <Item key={index} date={item.date} desc={item.desc} time={item.time}/>)
        }
      </Card>
    </div>
  )
}

export default App