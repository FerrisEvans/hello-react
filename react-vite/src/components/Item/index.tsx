import React from 'react';

import './index.css'
import Date from "../Date";
import Content from "../Content";

const Item: React.FC<Items> = ({date, desc, time}) => {
    return (
        <div className='item'>
            <Date date={date}></Date>
            <Content desc={desc} time={time}></Content>
        </div>
    );
};

export default Item;