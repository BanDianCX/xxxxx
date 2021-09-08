import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
export default class List extends Component {
    render() {
        const {todos,changeDone,deleteTodo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo)=>{
                        return <Item deleteTodo={deleteTodo} changeDone={changeDone} key={todo.id} todo={todo} />
                    })
                }
            
            </ul>
        )
    }
}
