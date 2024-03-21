import React, {Component, useState} from "react";

import './index.css'

interface AddProps {
    addTodo: AddTodo
}

export const Header: React.FC<AddProps> = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState<string>('')

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTodo(newTodo)
            setNewTodo('')
        }
    }

    return (
        <div className='todo-header'>
            <input
                type='text'
                placeholder='请输入任务名称，按回车确认'
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyDown={handleKeyPress}
            />
        </div>
    )
}