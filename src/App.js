import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing.js';

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
      </div>
    );
  }
}

export default App;
