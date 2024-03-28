import Header from '../04_todolist_component/components/Header'
import List from '../04_todolist_component/components/List'
import Footer from '../04_todolist_component/components/Footer'
import './App.css'
import React from "react";

export default class App extends React.Component<any, any> {
    render() {
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header></Header>
                    <List></List>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}