import React, { Component } from 'react'
import './index.css'

export default class Foot extends Component {
    render() {
        const {todos,handleCheckAll,clearAllTodo} = this.props
        //总数
        const total = todos.length
        //完成数
        const complete = todos.reduce((pre,todo)=>{
            return pre + (todo.done ? 1 : 0)
        },0)
        return (
            <div className="todo-footer">
                <label>
                <input onChange={(event)=>{handleCheckAll(event.target.checked)}} checked={total===complete && total !== 0 ? true : false} type="checkbox"/>
                </label>
                <span>
                <span>已完成{complete}</span> / 全部{total}
                </span>
                <button onClick={clearAllTodo} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
