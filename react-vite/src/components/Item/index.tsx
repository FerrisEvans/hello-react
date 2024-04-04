import React from 'react';

import './index.css'
import Date from "../Date";
import Content from "../Content";
import Card from "../../ui/card";

const Item: React.FC<Items> = ({date, desc, time}) => {
    return (
        <Card className='item'>
            <Date date={date}></Date>
            <Content desc={desc} time={time}></Content>
        </Card>
    );
};

export default Item;