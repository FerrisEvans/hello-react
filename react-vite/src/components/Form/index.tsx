import React from 'react';
import Card from "../../ui/card";

import './index.css'
const Form = () => {
  return (
    <Card className="form">
      <form>
        <div className='form-item'>
          <label htmlFor='date'>Date</label>
          <input id='date' type='date'/>
        </div>
        <div className='form-item'>
          <label htmlFor='desc'>Desc</label>
          <input id='desc' type='text'/>
        </div>
        <div className='form-item'>
          <label htmlFor='time'>Time</label>
          <input id='time' type='number'/>
        </div>
        <button>Create</button>
      </form>
    </Card>
  );
};

export default Form;