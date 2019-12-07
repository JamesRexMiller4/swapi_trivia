import React, { Component } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container.js';
import Header from './components/Header/Header.js';
import Landing from './components/Landing/Landing.js';
import Loader from './components/Loader/Loader.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      path: '/',
      user: {
        name: '',
        quote: '',
        ranking: ''
      },
      movies: [],
      characters: ['Luke']
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
              title: movie.title.toUpperCase(),
              date: date,
              characters: movie.characters,
              openingCrawl: movie.opening_crawl,
              type: 'movie'
            })
          })
          console.log(movies)
        return movies.sort((a,b) => a.id - b.id)
      })
      .then(movies => this.setState({isLoading: false, movies: movies}))
      .catch(error => console.log(error))
  }

  componentDidUpdate(prevState) {
    if (this.state.characters.length > 2 && this.state !== prevState) {
      const fetchChars = this.state.movies.characters.map(character => {
        return fetch(character)
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })
      })
      Promise.all(fetchChars)
        .then(data => console.log(data))
    }
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
    let characterPage;
    this.state.isLoading ? moviePage = <Loader /> :
    moviePage = <>
      <Header {...this.state.user} />
      <Container movies={this.state.movies} />
     </>
     !this.state.characters.length ? characterPage = <Loader /> :
     characterPage = <>
       <Header {...this.state.user} />
       <Container movies={this.state.characters} />
      </>
    return (
      <div className="App">
        <Redirect to={this.state.path} />
        <Route exact path='/' render={() => <Landing updateLogin={this.updateLogin} />} />
        <Route exact path='/movies' render={() => moviePage} />
        <Route exact path='/movies/:movie_id' render={() => characterPage} />
        <Route path='/favorite' render={() => <Container />} />
      </div>
    );
  }
}

export default App;
