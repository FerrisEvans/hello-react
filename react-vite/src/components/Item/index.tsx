import React, {Component} from "react";
import './index.css'

export default class Item extends Component<any, any> {
    render() {
        return (
            <li>
                <label>
                    <input type='checkbox'/>
                    <span>ssss</span>
                </label>
                <button className='btn btn-danger'>delete</button>
            </li>
        )
    }
}