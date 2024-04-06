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

  return (
    <>
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
    </>
  );
};

export default Form;