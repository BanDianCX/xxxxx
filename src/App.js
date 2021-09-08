import React, { Component } from 'react'

import Head from './components/Head'
import List from './components/List'
import Foot from './components/Foot'

import './App.css'
export default class App extends Component {
    //状态在哪里   方法写在哪里

    //初始化状态
    state = {todos:[
        {id:'001',name:"吃饭",done:true},
        {id:'002',name:"睡觉",done:false},
        {id:'003',name:"打代码",done:false}
    ]}
    //添加一个todo的回调
    addTodo = (todoObj)=>{
        //获取原有todos
        const {todos} = this.state
        //将传过来的todoObj 添加的todos
        const newTodos = [todoObj,...todos]
        //更新状态
        this.setState({todos:newTodos})

    }
    //改变todo的回调
    changeDone = (id)=>{
        //获取原有todos
        const {todos} = this.state
        const newTodos = todos.map((todo)=>{
            if(todo.id === id){
                todo.done = !todo.done
            }
            return todo
        })
        this.setState({todos:newTodos})
    }
    //删除一个todo 
    deleteTodo = (id)=>{
        //获取到原状态
        const {todos} = this.state
        //过滤
        const newTodos = todos.filter((todo)=>{
            return todo.id !== id
        })
        //更新状态
        this.setState({todos:newTodos})

    }
    //全选
    handleCheckAll = (flag)=>{
        //获取到原有todos
        const {todos} = this.state
        //更改done
        const newTodos = todos.map((todo)=>{
            todo.done = flag
            return todo
        })
        //更新状态哦
        this.setState({todos:newTodos})
    }

    //全部删除
    clearAllTodo = ()=>{
        //获取到原有todos
        const {todos} = this.state
        //过滤掉已完成的
        const newTodos = todos.filter((todo)=>{
            return !todo.done
        })
        //更新状态
        this.setState({todos:newTodos})
    }



    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                <Head addTodo={this.addTodo}/>
                <List deleteTodo={this.deleteTodo} changeDone={this.changeDone} todos={this.state.todos}/>
                <Foot clearAllTodo={this.clearAllTodo} handleCheckAll={this.handleCheckAll} todos={this.state.todos}/>
                
                
                </div>
            </div>
        )
    }
}
