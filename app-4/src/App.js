import React, { Component } from 'react';
import './App.css';

import axios from 'axios'

var APIurl = 'https://api.icndb.com/jokes/'

class App extends Component {
  constructor(){
    super()
    this.state = {
      id: 0,
      joke: ''
    }
  }
  componentWillMount(){
    axios.get(APIurl+this.state.id)
  }
  render() {
    return (
      <div className="App">
        <p>{this.state.joke}</p>
        <button onClick={()=>{this.next()}}>Next</button>
      </div>
    );
  }
}

export default App;
