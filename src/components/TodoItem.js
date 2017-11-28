import React from 'react'

const TodoItem = ({
  description,
  completed,
  onToggle,
  onChangeDescription
}) => (
  <div className='todo-item'>
    <button className='todo-item-button' onClick={ onToggle }>
      { completed ? '😎' : '😶' }
    </button>
    &nbsp;&nbsp;
    <input
      className='todo-item-description-field'
      type='text'
      value={ description }
      onChange={ (event) => {
        onChangeDescription(event.target.value)
      } }
    />
  </div>
)

export default TodoItem