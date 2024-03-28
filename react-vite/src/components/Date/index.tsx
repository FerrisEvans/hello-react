import React from 'react';

import './index.css'

const Date: React.FC<{date: Date}> = ({date}) => {
    return (
        <div className='date'>
            <div className="month">{date.toLocaleString('zh-CN', {month: 'long'})}</div>
            <div className="day">{date.getDate()}</div>
        </div>
    );
};

export default Date;