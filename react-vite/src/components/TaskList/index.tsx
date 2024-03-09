import {Component} from "react";

export default class TaskList extends Component {

    state = {
        finish: 0,
        total: 0
    }

    del = () => {
        this.setState({
            total: this.state.total - 1
        })
    }

    componentDidMount() {
        const {list} = this.props
        this.state.total = list.length
    }

    render() {
        const {list} = this.props
        console.log(list);

        return (
            <div>
                <ul>
                    {
                        list.map((item: any, index: any) => {
                            return <li key={index}><input type='checkbox'/>{item}&nbsp;
                                <button onClick={this.del}>delete</button></li>
                        })
                    }
                </ul>
                <p>finish: {this.state.finish}</p>
                <p>total: {this.state.total}</p>
            </div>
        )
    }
}