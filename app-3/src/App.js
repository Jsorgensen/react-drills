import React, { Component } from 'react';
import './App.css';

import View from './View'
import Login from './Login'
import Image from './Image'
import Todo from './Todo'
import NewTask from './NewTask'
import List from './List'

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

    this.updateValue = this.updateValue.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  render() {
    var imageSrc = 'https://lh5.googleusercontent.com/-9p41vQQ4OPna40Y1tSTKwXXg5JVwDDNEE_O_MuwtGVbjAuMysGgblhUJpN6q9oq3YBwnw3l5gc07AI=w1366-h637-rw'
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <Todo updateValue={this.updateValue}/>
        <NewTask addTask={this.addTask}/>
        <List todos={this.state.todos}/>
      </div>
    );
  }
  updateValue(value){
    this.setState({
      value: value
    })
  }
  addTask(){
    this.setState({
      todos: [...this.state.todos, this.state.value],
      value: ''
    })
  }
}

export default App;
