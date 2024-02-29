import {Component} from "react";
import TaskList from "../TaskList";
export default class TaskInput extends Component {
    inputDom: HTMLInputElement | null | undefined

    state = {
        task: '',
        taskList: []
    }

    addTask = (event: any) => {
        const keyCode: string = event.key
        if (keyCode === 'Enter') {
            this.setState({
                task: this.inputDom?.value,
                taskList: [this.inputDom?.value, ...this.state.taskList]
            })
        }
    }

    render() {
        const tip: string  = 'input your task, and press enter'
        return (
            <>
                <div>
                    <input placeholder={tip} onKeyDown={this.addTask} ref={c => this.inputDom = c}/>
                </div>
                <TaskList list={this.state.taskList}></TaskList>
            </>
        )
    }
}