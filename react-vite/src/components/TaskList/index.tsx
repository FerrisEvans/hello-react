import {Component} from "react";

export default class TaskList extends Component {
    render() {
        const {list} = this.props
        console.log(list);
        return (
            <div>
                <ul>
                    {
                        list.map((item: any, index: any) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}