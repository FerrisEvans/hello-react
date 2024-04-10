import React from "react";
import Card from "../../ui/card";

import './index.css'
import {BaseSyntheticEvent, useState} from "react";

interface FormProps {
  add: Add
}

const Form = ({add} : FormProps) => {

  const [item, setItem] = useState<Items>()

  const change = (event: BaseSyntheticEvent) => {
    setItem({date: new Date(), desc: "", time: 0, ...item, [event.target.id]: event.target.value})
  }

  const submit = (event: BaseSyntheticEvent) => {
    event.preventDefault()
    add(item)
  }

  /**
   * React.Fragment 是一个专门用来作为父容器的组件，他只会将他里边的子元素直接返回，不会创建任何多余的元素。
   * 使用 <></> 幽灵标签也可以达到一样的效果。
   */
  return (
    <React.Fragment>
      <Card className="form">
        <form>
          <div className='form-item'>
            <label htmlFor='date'>Date</label>
            <input onChange={change} id='date' type='date'/>
          </div>
          <div className='form-item'>
            <label htmlFor='desc'>Desc</label>
            <input onChange={change} id='desc' type='text'/>
          </div>
          <div className='form-item'>
            <label htmlFor='time'>Time</label>
            <input onChange={change} id='time' type='number'/>
          </div>
          <button onClick={submit}>Create</button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default Form;