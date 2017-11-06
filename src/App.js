import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'

const items = [
  { description: 'First', completed: true },
  { description: 'Second', completed: false },
  { description: 'Third', completed: true }
]

const incompletedCount = (items) => items.filter((item) => item.completed == false).length

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          items.map((item, index) => (
            <TodoItem key={ index } { ...item } />
          ))
        }
        <p>{ incompletedCount(items) } remaining</p>
      </div>
    );
  }
}

export default App;
