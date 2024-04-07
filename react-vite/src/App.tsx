import './App.css'
import React, {useState} from "react";
import Item from "./components/Item";
import Card from "./ui/card";
import Form from "./components/Form";

const App: React.FC = () => {

  const [items, setItems] = useState<Array<Items>>([
    {
      date: new Date(),
      desc: '学习React',
      time: 20
    }, {
      date: new Date(2021, 10, 20),
      desc: '学习Vue',
      time: 45
    }
  ])

  const add: Add = (item: Items) => {
    setItems([...items, {
      date: new Date(item.date),
      desc: item.desc,
      time: +item?.time
    }])
  }

  const del: Del = (index: number) => {
    return () => {
      setItems(prev => {
        const logs = [...prev]
        logs.splice(index, 1)
        return logs
      })
    }
  }

  return (
    <div className='app'>
      <Form add={add}></Form>
      <Card className='logs'>
        {
          items.map((item, index) => {
            return <Item
              key={index}
              date={item.date}
              desc={item.desc}
              time={item.time}
              del={del}
              index={index}
            />
          })
        }
      </Card>
    </div>
  )
}

export default App