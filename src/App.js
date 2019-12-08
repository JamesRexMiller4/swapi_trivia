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
      movieID: null,
      characters: []
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
    if (this.state.characters.length < 1 && this.state.isLoading && this.state !== prevState) {
      const movie = this.state.movies.find(movie => movie.id === parseInt(this.state.movieID))
      const fetchChars = movie.characters.map(character => {
        return fetch(character)
          .then(res => res.json())
          .then(char => {
            const charHomeData = fetch(char.homeworld)
              .then(res => res.json())
              .then(homeworld => {
                console.log('Resolved')
                return {name: char.name, homeworld: homeworld.name, population: homeworld.population}
              })
              .catch(error => console.log('homeworld fetch failed'))

            const species = fetch(char.species)
              .then(res => res.json())
              .then(species => {
                return {species: species.name}
              })
              .catch(error => console.log('species fetch failed'))

            const charMovies = char.films.map(film => {
              return fetch(film)
              .then(res => res.json())
              .then(film => film.title)
              .catch(error => 'films failed')
            })

            return Promise.all([charHomeData, species, Promise.all(charMovies)])
          })
          })
      Promise.all(fetchChars)
        .then(characters => this.setState({characters}))
        .catch(error => console.log("Something has gone wrong"))
    }
  }

  updateLogin = ({ name, quote, ranking }) => {
    this.setState({ user: { name, quote, ranking },
    path: '/movies'});
  }

  logout = () => {
    this.setState({path: '/'});
  }

  setPath = (e) => {
    let url = '/movies/' + e.target.id
    this.setState({path: url, isLoading: true, movieID: e.target.id})
  }



  render = () => {
    let moviePage;
    let characterPage;
    this.state.isLoading ? moviePage = <Loader /> :
    moviePage = <>
      <Header {...this.state.user} logout={this.logout} />
      <Container data={this.state.movies} setPath={this.setPath}/>
     </>
     !this.state.characters.length ? characterPage = <Loader /> :
     characterPage = <>
       <Header {...this.state.user} logout={this.logout} />
       <Container data={this.state.characters} setPath={this.setPath}/>
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
