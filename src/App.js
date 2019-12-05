import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing.js';
import Loader from './components/Loader.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    }
  }
  render = () => {
    return (
      <div className="App">
        <Landing updateLogin={this.updateLogin}/>
        {!this.state && <Loader />}
      </div>
    );
  }
  updateLogin = ({ name, quote, ranking }) => {
    this.setState({ user: { name, quote, ranking } });
  }
}

export default App;
