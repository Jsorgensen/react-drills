import React, { Component } from 'react';
import './App.css';

import View from './View'
import Login from './Login'
import Image from './Image'
import Todo from './Todo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      value: '',
      todos: [
        'make dinner',
        'fix door'
      ]
    }
  }
  render() {
    var imageSrc = 'https://lh5.googleusercontent.com/-9p41vQQ4OPna40Y1tSTKwXXg5JVwDDNEE_O_MuwtGVbjAuMysGgblhUJpN6q9oq3YBwnw3l5gc07AI=w1366-h637-rw'
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input onChange={(e)=>{this.setState({value: e.target.value})}} value={this.state.value}></input>
        <button onClick={()=>{this.setState({todos: [...this.state.todos, this.state.value], value: ''})}}>Add</button>
        <Todo todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
