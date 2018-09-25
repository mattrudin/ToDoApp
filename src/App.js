import React, { Component } from 'react';
import './App.css';
import AisleTileContainer from './components/AisleTileContainer/AisleTileContainer';
import TodoListContainer from './components/TodoListContainer/TodoListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AisleTileContainer />
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
