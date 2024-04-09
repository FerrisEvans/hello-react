import './App.css'
import React, {useState} from "react";
import Item from "./components/Item";
import Card from "./ui/card";
import Form from "./components/Form";
import Filter from "./components/Filter";

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
    }, {
      date: new Date(2022, 5, 6),
      desc: '九阳神功',
      time: 45
    }, {
      date: new Date(2023, 2, 12),
      desc: '吸星大法',
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

  const [year, setYear] = useState(2024)
  const changeYear = (year: number) => {
    setYear(year)
  }

  let filterData = items.filter(item => item.date.getFullYear() == year)

  return (
    <div className='app'>
      <Form add={add}></Form>
      <Card className='logs'>
        <Filter
          year={year}
          changeYear={changeYear}
        ></Filter>
        {
          filterData.map((item, index) => {
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