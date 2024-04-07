import React from 'react';

import './index.css'
import Date from "../Date";
import Content from "../Content";
import Card from "../../ui/card";

interface ItemProps {
  date: Date,
  desc: string,
  time: number,
  del: Del,
  index: number
}

const Item: React.FC<ItemProps> = ({date, desc, time, del, index}) => {

  return (
    <>
      <Card className='item'>
        <Date date={date}></Date>
        <Content desc={desc} time={time}></Content>
        <div>
          <div className='delete' onClick={del(index)}>⤬</div>
        </div>
      </Card>
    </>
  );
};

export default Item;