import React from "react";

import './index.css'

interface ItemProps {
    todo: Todo
    toggleComplete: ToggleComplete
    deleteItem: DeleteItem
}

export const Item: React.FC<ItemProps> = ({todo, toggleComplete, deleteItem}) => {

    return (
        <li>
            <label>
                <input
                    type='checkbox'
                    onChange={() => toggleComplete(todo)}
                    checked={todo.complete}
                />
                <span>{todo.text}</span>
            </label>
            <button className='btn btn-danger' onClick={() => deleteItem(todo)}>delete</button>
        </li>
    )
}