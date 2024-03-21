import React from "react";

import './index.css'

interface ItemProps {
    todo: Todo
    toggleComplete: ToggleComplete
}

export const Item: React.FC<ItemProps> = ({todo, toggleComplete}) => {
//style={{display:'none'}}
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
            <button className='btn btn-danger'>delete</button>
        </li>
    )
}