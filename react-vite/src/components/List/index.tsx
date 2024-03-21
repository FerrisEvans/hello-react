import React from 'react';

import {Item} from '../Item'
import './index.css'

interface ListProps {
    todos: Array<Todo>
    toggleComplete: ToggleComplete
}

export const List: React.FC<ListProps> = ({todos, toggleComplete}) => {

    return (
        <ul className='todo-main'>
            {
                todos.map(todo => (<Item key={todo.text} todo={todo} toggleComplete={toggleComplete}/>))
            }
        </ul>
    )
}

