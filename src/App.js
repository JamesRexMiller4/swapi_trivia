import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing.js';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render = () => {
    return (
      <div className="App">
        <Landing updateLogin={this.updateLogin}/>
      </div>
    );
  }
  updateLogin = ({ name, quote, ranking }) => {
    this.setState({ user: { name, quote, ranking } });
  }
}

export default App;
