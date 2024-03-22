import React, {Component, useState} from "react";

import './index.css'

interface FooterProps {
    todos: Array<Todo>
    clearDone: ClearDone
    selectAll: SelectAll
}

export const Footer: React.FC<FooterProps> = ({todos, clearDone, selectAll}) => {

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
                <input
                    type='checkbox'
                    onChange={selectAll}
                />
            </label>
            <span>
                <span>已完成：{done}</span> / 全部：{allTask}
            </span>
            <button className='btn btn-danger' onClick={clearDone}>清除已完成任务</button>
        </div>
    )
}