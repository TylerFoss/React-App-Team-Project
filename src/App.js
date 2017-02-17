import React, { Component } from 'react';
import './App.css';
import TodoApp from "./components/TodoApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Song List</h2>
        </div>
        <TodoApp />  
        </div>
    );
  }
}

export default App;
