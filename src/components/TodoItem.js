import React from 'react'

const TodoItem = ({
  description,
  completed,
  onToggle
}) => (
  <button className='todo-item-button' onClick={ onToggle }>
    { completed ? '✅' : '❎' }
    &nbsp;&nbsp;
    { description }
  </button>
)

export default TodoItem