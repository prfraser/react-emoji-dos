import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'

const incompletedCount = (items) => items.filter((item) => item.completed === false).length
const toggleItemAtIndex = (items, indexToToggle) => {
  const item = items[indexToToggle]
  item.completed = !item.completed
  // items[indexToToggle] = { ...item, completed: !item.completed }
  return items
}

class App extends Component {
  state = {
    items: [
      { description: 'First', completed: true },
      { description: 'Second', completed: false },
      { description: 'Third', completed: true }
    ]
  }

  onToggleItemAtIndex = (index) => {
    this.setState((prevState) => {
      let items = prevState.items
      items = toggleItemAtIndex(items, index)
      return { items }
    })
  }

  render() {
    const items = this.state.items

    return (
      <div className="App">
        {
          items.map((item, index) => (
            <TodoItem
              key={ index }
              { ...item }
              onToggle={ () => this.onToggleItemAtIndex(index) }
            />
          ))
        }
        <p>{ incompletedCount(items) } remaining</p>
      </div>
    );
  }
}

export default App;
