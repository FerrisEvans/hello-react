import React, {Component} from "react";

import './index.css'

interface AddProps {
    addTodo: AddTodo
}

export const Header: React.FC<AddProps> = ({addTodo}) => {

    return (
        <div className='todo-header'>
            <input type='text' placeholder='请输入任务名称，按回车确认' />
        </div>
    )
}