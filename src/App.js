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
      path: '/',
      user : {
        name: '',
        quote: '',
        ranking: ''
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
        return movies.sort((a,b) => a.id - b.id)
      })
      .then(movies => this.setState({movies}))
      .catch(error => console.log(error))
  }


  updateLogin = ({ name, quote, ranking }) => {
    this.setState({ user: { name, quote, ranking },
    path: '/movies'});
  }

  logout = () => {
    this.setState({path: '/'});
  }

  render = () => {
    let moviePage;
    !this.state.movies ? moviePage = <Loader /> :
    moviePage = <>
      <Header
      logout={this.logout}
      name={this.state.user.name}
      quote={this.state.user.quote}
      ranking={this.state.user.ranking} />
      <Container movies={this.state.movies} />
     </>
    return (
      <div className="App">
        <Redirect to={this.state.path} />
        <Route exact path='/' render={() => <Landing updateLogin={this.updateLogin} />} />
        <Route exact path='/movies' render={() =>
          moviePage} />
        <Route path='/movies/:movie_id' render={() => <Container />} />
        <Route path='/favorite' render={() => <Container />} />
      </div>
    );
  }
}

export default App;
