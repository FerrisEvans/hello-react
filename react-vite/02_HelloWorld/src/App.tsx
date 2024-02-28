// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Component} from "react";
import Hello from "./components/Hello";

export default class App extends Component<any, any> {

    render() {
        return (
            <>
                <Hello></Hello>
            </>
        )
    }
}
