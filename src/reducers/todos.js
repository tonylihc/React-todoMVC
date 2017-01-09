// reducers todos
import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETE } from '../constants/ActionTypes'

// 初始化 state
const initialState = [
  {
    text: '我在学习呢， 别@我',
    completed: false,
    id: 0
  },
  {
    text: '学了Redux， 还要弄一下异步',
    completed: false,
    id: 1
  }
];

export default function todos(state = initialState, action){
  switch (action.type){
    case ADD_TODO:
      return [
        {
          text: action.text,
          completed: false,
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        },
        ...state
      ]
    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )
    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      )
    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }))
    case CLEAR_COMPLETE:
      return state.filter(todo => todo.completed === false)
    default:
      return state

  }
}
