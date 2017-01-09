import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'
// 过滤行为 。。。 全部，完成，活跃
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilter'

// 过滤  转为  标题
const FILTER_TITLES={
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

export default class Footer extends Component {
  static propTypes={
    // 验证
    completedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
    onShow: PropTypes.func.isRequired
  }
  // 渲染 Todo 待办数目
  renderTodoCount(){
    // const activeCount = todos.length - completedCount
    const { activeCount }=this.props
    const itemWord = activeCount === 1 ? 'item' : 'items'

    return (
      <span className="todo-count">
        <strong > {activeCount || 'NO'} </strong>{itemWord} left
      </span>
    )
  }

  renderFilterLink(filter){
    const title=FILTER_TITLES[filter]
    const { filter: selectedFilter, onShow }=this.props

    return(
      <a className={classnames({ selected: filter === selectedFilter })}
         style={{ cursor: 'pointer' }}
         onClick={ () => onShow(filter) }
      >
        {title}
      </a>
    )
  }
  renderClearButton(){
    const { completeCount, onClearComplete } = this.props
    if(completeCount > 0){
      return (
        <button className="clear-completed"
                onClick={onClearComplete}
        >
          Clear complete
        </button>
      )
    }
  }

  render(){
    return(
      <footer className="footer">
        {this.renderTodoCount()}
        <ul className="filters">
          {[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map(filter =>
            <li key={filter}>
              { this.renderFilterLink(filter) }
            </li>
          )}
        </ul>
        { this.renderClearButton() }
      </footer>
    )
  }
}