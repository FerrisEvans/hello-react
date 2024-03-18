import React, {Component} from "react";

import './index.css'
export default function Item() {
    return (
        <li>
            <label>
                <input type='checkbox'/>
                <span>ssss</span>
            </label>
            <button className='btn btn-danger' style={{display:'none'}}>delete</button>
        </li>
    )
}