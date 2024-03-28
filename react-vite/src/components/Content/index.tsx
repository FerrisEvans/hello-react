import React from 'react';

import './index.css'

interface ContentProps {
    desc: string
    time: number
}
const Content: React.FC<ContentProps> = ({desc, time}) => {
    return (
        <div className="content">
            <h2 className="desc">{desc}</h2>
            <div className="time">{time}分钟</div>
        </div>
    );
};

export default Content;