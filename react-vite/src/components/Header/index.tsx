import React, {Component} from "react";

import './index.css'

export default class Header extends Component<any, any> {
    render() {
        return (
            <div className='todo-header'>
                <input
                    type='text'
                    placeholder='请输入任务名称，按回车确认'
                />
            </div>
        )
    }
}