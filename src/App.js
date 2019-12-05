import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing.js';
import Loader from './components/Loader.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
     
    }
  }
  render() {
    return (
      <div className="App">
        <Landing />
        {!this.state && <Loader />}
      </div>
    );
  }
}

export default App;
