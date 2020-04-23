import React, { Component } from 'react'
import TodoElement from './TodoElement'
import TodoAPI from '../apis/TodoAPI'

export default class TodoList extends Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this)
        this.onAddItem = this.onAddItem.bind(this)
        this.onDeleteItem = this.onDeleteItem.bind(this)
        this.onMarkDone = this.onMarkDone.bind(this)

        this.state = {
            id: 0,
            toDos: [],
            newItem: ""
        }
    }

    componentDidMount() {
        TodoAPI.get().then(response => this.setState({
                id: response.data[response.data.length - 1].id + 1,
                toDos: response.data})
            ).catch(console.log("Cannot fetch from API"))
    }

    onChange(event) {
        const inputString = event.target.value.length > 0? event.target.value : "";
        this.setState({ newItem: inputString })
    }

    onAddItem() {
        if (this.state.newItem.length > 0) {
            this.setState(prevState => {
                return this.setState({
                    id: prevState.id + 1,
                    toDos: prevState.toDos.concat({
                        id: prevState.id + 1,
                        content: this.state.newItem,
                        status: false}),
                    newItem: ""
                })
            })
        }
    }

    onDeleteItem(idForDelete) {
        this.setState(prevState => ({
            toDos: prevState.toDos.filter(item => {
                return item.id != idForDelete
            })
        }))
    }

    onMarkDone(idForMarkDone) {
        this.setState(prevState => {
            let item = prevState.toDos.find(item => item.id == idForMarkDone)
            if (item !== null) {
                item.status = true
            }
            return prevState
        })
    }

    render() {
        let toDos = this.state.toDos
        return (
            <div>
                <h>To-do List</h><p></p>
                <input type="text" onChange={this.onChange} value={this.state.newItem} />
                <button onClick={this.onAddItem}>Add Item</button>
                {toDos.map((item, index) => {
                    return <TodoElement key={index} id={item.id} content={item.content} status={item.status} onDelete={this.onDeleteItem} onMarkDone={this.onMarkDone}/>
                })}
            </div>
        )
    }
}
