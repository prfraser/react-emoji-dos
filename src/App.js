import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoItem completed={ true } description='First' />
        <TodoItem completed={ false } description='Second' />
        <TodoItem completed={ true } description='Third' />
      </div>
    );
  }
}

export default App;
