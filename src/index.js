// 总入口
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'

const store = createStore(reducer)

/*
<Provider store> 使组件层级中的 connect() 方法都能够获得 Redux store。
正常情况下，你的根组件应该嵌套在 <Provider> 中才能使用 connect() 方法
*/

render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
)