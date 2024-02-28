import {Component} from "react";
import hello from './index.module.css'
export default class Hello extends Component {
    render() {
        return (
            <div className={hello.title}>
                <p>Hello Component</p>
            </div>
        )
    }
}