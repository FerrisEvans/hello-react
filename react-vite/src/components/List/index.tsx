import React from 'react';
import Item from "../Item";

import './index.css'
export default class List extends React.Component<any, any> {
    render() {
        return (
            <ul className='todo-main'>
                <Item></Item>
            </ul>
        )
    }
}
