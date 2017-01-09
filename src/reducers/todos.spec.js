import todos from './todos'
import * as types from '../constants/ActionTypes'

describe('todos reducers', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })


})