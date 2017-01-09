// Todo 文本输入框
import React, { Component, PropTypes } from 'react'
// 为了使用 官方 提供的 todomvc css
import classnames from 'classnames'

export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }

  state = {
    text: this.props.text || ''
  }

  handleBlur = e => {
    // newTodo --> false
    if(!this.props.newTodo){
      this.props.onSave(e.target.value)
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    if(e.which === 13){
      // 传递参数 text 到父组件
      this.props.onSave(text)
      if(this.props.newTodo){
        this.setState({ text: '' })
      }
    }
  }

  render(){
    return (
      <input type="text"
        className={ classnames({ edit: this.props.editing, 'new-todo': this.props.newTodo })}
        placeholder={ this.props.placeholder }
        autoFocus="true"
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    )
  }
}

