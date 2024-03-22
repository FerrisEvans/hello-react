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

    const deleteItem: DeleteItem = item => {
        let notDel = new Array<Todo>()
        todos.map(todo => {
            if (todo.text !== item.text) {
                notDel = [...notDel, todo]
            }
        })
        setTodos(notDel)
    }

    const selectAll: SelectAll = () => {
        if (todos.length <= 0) {
            return
        }
        let all = new Array<Todo>()
        if (todos.length == 1) {
            all = [{
                text: todos[0].text,
                complete: !todos[0].complete
            }]
            setTodos(all)
            return
        }

        let same = true
        for (let i = 1; i < todos.length; i++) {
            if (todos[i].complete !== todos[0].complete) {
                same = false
                break
            }
        }

        if (same) {
            todos.map(todo => {
                all = [...all, {
                    text: todo.text,
                    complete: !todo.complete
                }]
            })
        } else {
            todos.map(todo => {
                all = [...all, {
                    text: todo.text,
                    complete: true
                }]
            })
        }

        setTodos(all)
    }

    return (
        <div className='todo-container'>
            <div className='todo-wrap'>
                <Header addTodo={addTodo}></Header>
                <List todos={todos} toggleComplete={toggleComplete} deleteItem={deleteItem}></List>
                <Footer todos={todos} clearDone={clearDone} selectAll={selectAll}></Footer>
            </div>
        </div>
    )
}

export default App