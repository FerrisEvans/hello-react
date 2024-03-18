// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {Component} from "react";

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default function App() {

    return (
        <div className='todo-container'>
            <div className='todo-wrap'>
                <Header></Header>
                <List></List>
                <Footer></Footer>
            </div>
        </div>
    );
}
