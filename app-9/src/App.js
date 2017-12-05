import React, { Component } from 'react';
import './App.css';

import {Link} from 'react-router-dom';
import Router from './Router'

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <nav>
          <ul className='Navs'>
            <Link to='/'>Home</Link>
            <Link to='/signup'>Signup</Link>
            <Link to='/details'>Details</Link>
          </ul>
        </nav>
        <br/>
        {Router}
      </div>
    );
  }
  switchFocus(focus){
    this.setState({
      focus: focus
    })
  }
}

export default App;
