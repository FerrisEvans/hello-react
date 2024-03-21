import React, {Component} from "react";

import './index.css'

interface FooterProps {
    todos: Array<Todo>
}

export const Footer: React.FC<FooterProps> = ({todos}) => {

    const allTask = todos.length
    let done = 0
    todos.forEach(todo => {
        if (todo.complete) {
            done++
        }
    })

    return (
        <div className='todo-footer'>
            <label>
                <input type='checkbox'/>
            </label>
            <span>
                <span>已完成：{done}</span> / 全部：{allTask}
            </span>
            <button className='btn btn-danger'>清除已完成任务</button>
        </div>
    )
}