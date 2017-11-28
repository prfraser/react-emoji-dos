import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'
import TodoItemsStatus from './components/TodoItemsStatus'

const countIncompleteItems = (items) => items.filter((item) => item.completed === false).length
const toggleItemAtIndex = (items, indexToToggle) => {
  const item = items[indexToToggle]
  item.completed = !item.completed
  // items[indexToToggle] = { ...item, completed: !item.completed }
  return items
}
const changeDescriptionOfItemAtIndex = (items, index, description) => {
  const item = items[index]
  item.description = description
  return items
}

class App extends Component {
  state = {
    items: [
      { description: 'First', completed: true },
      { description: 'Second', completed: false },
      { description: 'Third', completed: true },
      { description: 'Fourth', completed: false },
      { description: 'Fifth', completed: false }
    ]
  }

  onToggleItemAtIndex = (index) => {
    this.setState((prevState) => {
      let items = prevState.items
      items = toggleItemAtIndex(items, index)
      return { items }
    })
  }

  onChangeItemDescriptionAtIndex = (index, description) => {
    this.setState((prevState) => {
      let items = prevState.items
      items = changeDescriptionOfItemAtIndex(items, index, description)
      return { items }
    })
  }

  render() {
    const items = this.state.items

    return (
      <div className="App">
        <h2>Complete</h2>
        {
          items.map((item, index) => {
            if (!item.completed) {
              return null
            }
            return (
              <TodoItem
                key={ index }
                { ...item }
                onToggle={ () => this.onToggleItemAtIndex(index) }
                onChangeDescription={ (description) => this.onChangeItemDescriptionAtIndex(index, description) }
              />
            )
          })
        }
        <h2>Incomplete</h2>
        {
          items.map((item, index) => {
            if (item.completed) {
              return null
            }
            return (
              <TodoItem
                key={ index }
                { ...item }
                onToggle={ () => this.onToggleItemAtIndex(index) }
                onChangeDescription={ (description) => this.onChangeItemDescriptionAtIndex(index, description) }
              />
            )
          })
        }
        <TodoItemsStatus
          totalCount={ items.length }
          incompletedCount={ countIncompleteItems(items) }
        />
      </div>
    );
  }
}

export default App;
