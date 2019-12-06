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

  componentDidMount() {
    this.state.user &&
    fetch('https://swapi.co/api/films/')
      .then(res => res.json())
      .then(data => {
        let movies = data.results.map((movie, index) => {
          let arr = movie.release_date.split('-')
          let date = arr[0]
            return ({
              key: index,
              id: movie.episode_id,
              title: movie.title,
              date: date,
              characters: movie.characters
            })
          })
        return movies
      })
      .then(movies => this.setState({movies}))
      .catch(error => console.log(error))
  }


  updateLogin = ({ name, quote, ranking }) => {
    this.setState({ user: { name, quote, ranking }});
  }


  render = () => {
    return (
      <div className="App">
        <Route exact path='/' render={() => !this.state ?
        <Loader /> : <Landing updateLogin={this.updateLogin} />} />
        <Route path='/movies' render={() =>
        <Header
          name={this.state.user.name}
          quote={this.state.user.quote}
          ranking={this.state.user.ranking}/>}
        />
        <Route exact path='/movies' render={() => !this.state.movies ? 
        <Loader /> : <Container movies={this.state.movies} />} />
        <Route path='/movies/:movie_id' render={() => <Container />} />
        <Route path='/favorite' render={() => <Container />} />
      </div>
    );
  }
}

export default App;
