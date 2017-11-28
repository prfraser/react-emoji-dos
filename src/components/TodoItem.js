import React from 'react'

const TodoItem = ({
  description,
  completed,
  onToggle
}) => (
  <label onClick={ onToggle }>
  	{(completed) ? '✅' : '❎'}
    { description }
  </label>
)

export default TodoItem