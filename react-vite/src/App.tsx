// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Component} from "react";
import TaskInput from "./components/TaskInput";

export default class App extends Component<any, any> {

    render() {
        return (
            <div>
                <TaskInput></TaskInput>
            </div>
        )
    }
}
