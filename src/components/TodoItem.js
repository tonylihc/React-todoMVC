import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }

  state = {
    editing: false
  }
  // 处理 双击 事件
  handleDoubleClick = () => {
    this.setState({ editing: true })
  }
  // 保存
  handleSave = (id, text) => {
    if(text.length === 0){
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render(){
    const { todo, completeTodo, deleteTodo } = this.props
    let element
    if(this.state.editing){
      element = (
        <TodoTextInput text={todo.text}
                       onSave={ (text) => this.handleSave(todo.id, text) }
                       editing={ this.state.editing }
        />
      )
    } else {
      element = (
        <div className="view">
          <input type="checkbox" className="toggle" checked={todo.completed} onChange={ () => completeTodo(todo.id) } />
          <label htmlFor="" onDoubleClick={ this.handleDoubleClick } onClick={ () => completeTodo(todo.id) }> {todo.text} </label>
          <button className="destroy" onClick={ () => deleteTodo(todo.id) } />
        </div>
      )
    }

    return (
      <li className={ classnames({ completed: todo.completed, editing: this.state.editing })} key={this.props.todo.id}>
        { element }
      </li>
    )
  }


}