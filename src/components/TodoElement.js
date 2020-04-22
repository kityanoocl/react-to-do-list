import React, { Component } from 'react'
import { Typography } from 'antd'
const { Text } = Typography;

export default class TodoElement extends Component {
    constructor(props) {
        super(props)

        this.onClick = this.onClick.bind(this)
        this.onDelete = this.onDelete.bind(this)

        this.state = {
            id: this.props.id,
            content: this.props.content,
            status: this.props.status
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.id !== this.props.id) {
            this.setState({
                id: this.props.id,
                content: this.props.content,
                status: this.props.status
            })
        }
    }

    onClick() {
        if (this.state.status == false) {
            this.setState({ status: true })
            this.props.onMarkDone(this.state.id)
        }
    }

    onDelete() {
        this.props.onDelete(this.state.id)
    }

    render() {
        return (
            <tr>
                <td>
                    <Text delete={this.state.status} onClick={this.onClick}>{this.state.content}</Text>
                </td>
                <td>
                    <button onClick={this.onDelete}>Delete</button>
                </td>
            </tr>
        )
    }
}
