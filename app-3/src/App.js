import React, { Component } from 'react';
import './App.css';

import View from './View'
import Login from './Login'
import Image from './Image'

class App extends Component {
  render() {
    var imageSrc = 'https://lh5.googleusercontent.com/-9p41vQQ4OPna40Y1tSTKwXXg5JVwDDNEE_O_MuwtGVbjAuMysGgblhUJpN6q9oq3YBwnw3l5gc07AI=w1366-h637-rw'
    return (
      <div className="App">
        <Image imageSRC={imageSrc}/>
      </div>
    );
  }
}

export default App;
