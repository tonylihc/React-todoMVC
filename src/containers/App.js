// containers --> App
import React, { PropTypes } from 'react'
// bindActionCreators 返回值 --> (Function or Object): 一个与原对象类似的对象，只不过这个对象中的的每个函数值都可以直接 dispatch action。
// 如果传入的是一个函数，返回的也是一个函数
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

const App = ({ todos, actions }) => (
  <div>
    <Header addTodo={ actions.addTodo } />
    <MainSection todos={todos} actions={actions} />
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

// connect to store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)