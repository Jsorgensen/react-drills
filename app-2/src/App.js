import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import View from './View'

class App extends Component {
  constructor(){
    super()
    this.state = {
      values: [
        'Mike',
        'Emily',
        'Emma',
        'Katie',
        'Scott',
        'Michelle',
        'Halley',
        'Jane'
      ]
    }
  }
  render() {
    return (
      <ul className="App">
        <View values={this.state.values}/>
      </ul>
    );
  }
}

export default App;
