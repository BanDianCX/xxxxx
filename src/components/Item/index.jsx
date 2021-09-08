import React, { Component } from 'react'

import './index.css'
export default class Item extends Component {
    //初始化状态
    state = {mouse:false}

    //移入、移出的回调函数
    handleMouse = (flag)=>{
        return ()=>{
            //更新状态
            this.setState({mouse:flag})
        }
    }
    //删除一个todo的回调
    handleDeleteTodo = (id)=>{
        return ()=>{
           if(window.confirm("你确定删除吗")){
              this.props.deleteTodo(id)
           }else{
               return 
           }
            
        }
    }
    

    render() {
        const {id,name,done} = this.props.todo
        const {mouse} = this.state
        console.log(this)
        const {changeDone} = this.props
        return (
            <li style={{backgroundColor:mouse ? "#ccc" : "#fff"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} >
                <label>
                    <input checked={done} type="checkbox" onChange={()=>{changeDone(id)}}  />
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDeleteTodo(id)} className="btn btn-danger" style={{display:mouse? "block" : "none"}}>删除</button>
            </li>
        )
    }
}
