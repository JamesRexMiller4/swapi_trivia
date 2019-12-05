import React, { Component } from 'react';
import './App.css';
import Container from './components/Container.js';
import Header from './components/Header.js';
import Landing from './components/Landing.js';
import Loader from './components/Loader.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      user : {
        name: 'Jimbo',
        quote: "There's a rattlesnake in my boot",
        ranking: "Expert"
      }
    }
  }
  render = () => {
    return (
      <div className="App">
        {/* <Landing updateLogin={this.updateLogin}/> */}
        {/* {!this.state && <Loader />} */}
        <Header 
          name={this.state.user.name} 
          quote={this.state.user.quote}
          ranking={this.state.user.ranking}
          />
        <Container />
      </div>
    );
  }
  updateLogin = ({ name, quote, ranking }) => {
    this.setState({ user: { name, quote, ranking }});
  }
}

export default App;
