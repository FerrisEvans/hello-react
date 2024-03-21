import {Header} from './components/Header'
import {List} from './components/List'
import {Footer} from './components/Footer'
import './App.css'
import React, {useState} from "react";

const App: React.FC = () => {
    const [todos, setTodos] = useState<Array<Todo>>([
        {
            text: 'My First Todo',
            complete: false
        },
        {
            text: 'My Second Todo',
            complete: false
        },
        {
            text: 'My Third Todo',
            complete: false
        }
    ])

    const toggleComplete: ToggleComplete = selectedTodo => {
        const updatedTodos = todos?.map(todo => {
            if (todo === selectedTodo) {
                return {...todo, complete: !todo.complete}
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    const addTodo: AddTodo = newTodo => {
        newTodo.trim() !== '' && setTodos([...todos, {text: newTodo, complete: false}])
    }

    const clearDone: ClearDone = () => {
        let notDone = new Array<Todo>()
        if (todos.length <= 0) {
            return
        }
        todos.map(todo => {
            if (!todo.complete) {
                notDone = [...notDone, todo]
            }
        })
        setTodos(notDone)
    }

    return (
        <div className='todo-container'>
            <div className='todo-wrap'>
                <Header addTodo={addTodo}></Header>
                <List todos={todos} toggleComplete={toggleComplete}></List>
                <Footer todos={todos} clearDone={clearDone}></Footer>
            </div>
        </div>
    )
}

export default App