import React, { Component } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container.js';
import Header from './components/Header/Header.js';
import Landing from './components/Landing/Landing.js';
import Loader from './components/Loader/Loader.js'

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

  updateLogin = ({ name, quote, ranking }) => {
    this.setState({ user: { name, quote, ranking }});
  }

  render = () => {
    return (
      <div className="App">
        <Route exact path='/' render={() => !this.state ? 
        <Loader /> : <Landing updateLogin={this.updateLogin}/>} />
        <Route path='/movies' render={() => 
        <Header 
          name={this.state.user.name} 
          quote={this.state.user.quote}
          ranking={this.state.user.ranking}/>} 
        />
        <Route exact path='/movies' render={() => <Container />} />
        <Route path='/movies/:movie_id' render={() => <Container />} />
        <Route path='/favorite' render={() => <Container />} />
      </div>
    );
  }
}

export default App;
