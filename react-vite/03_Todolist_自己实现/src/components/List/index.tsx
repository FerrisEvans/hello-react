import React from 'react';

import {Item} from '../Item'
import './index.css'

interface ListProps {
    todos: Array<Todo>
    toggleComplete: ToggleComplete
    deleteItem: DeleteItem
}

export const List: React.FC<ListProps> = ({todos, toggleComplete, deleteItem}) => {

    return (
        <ul className='todo-main'>
            {
                todos.map(todo => (<Item key={todo.text} todo={todo} toggleComplete={toggleComplete} deleteItem={deleteItem}/>))
            }
        </ul>
    )
}

