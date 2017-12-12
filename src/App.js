import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      todos: [{
        name: 'Take the bins out',
        done: true
      },
      {
        name: 'Take the bins out',
        done: false
      }],
      name: 'Joseph and Juan'
    }

    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.handleRemoveTodos = this.handleRemoveTodos.bind(this);
  }

  handleCheckBoxChange(event) {
    const target = event.target;
    const value = this.state.todos[target.id].done;
    console.log(value);

    var newTodos = this.state.todos;
    newTodos[target.id].done = !value;

    this.setState({
      todos: newTodos
    });
  }

  handleRemoveTodos() {
    var newTodos = this.state.todos.filter((todo) => {
      return !todo.done;
    });

    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <input type="text" placeholder="New Todo"/>
        <button type="button">Add</button>
        <button type="button" onClick={this.handleRemoveTodos}>Remove done Todos</button>
        <ul>
          {
            this.state.todos.map((todo, index) => (
              <li><input type="checkbox" checked={todo.done} id={index} onChange={this.handleCheckBoxChange}/><label>{todo.name}</label></li>
            ))
          }
          
        </ul>
        <span>This app was made by {this.state.name}</span>
      </div>
    );
  }
}

export default App;
