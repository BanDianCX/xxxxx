import React, { Component } from 'react'
import {nanoid} from 'nanoid'

import './index.css'
export default class Head extends Component {
    // 键盘事件的回调
    handleKeyUp = (event)=>{
        const {keyCode,target} = event
        //判断用户是否按下 回车键
        if(keyCode === 13 && target.value !== ''){
            const todoObj = {id:nanoid(),name:target.value,done:false}

            this.props.addTodo(todoObj)

            //清空value
            target.value=''
        }
        
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
