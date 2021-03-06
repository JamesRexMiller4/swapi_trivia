import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container.js';
import Header from './components/Header/Header.js';
import Landing from './components/Landing/Landing.js';
import Loader from './components/Loader/Loader.js';
import Intro from './components/Intro/Intro.js';
import { getData } from './apiCalls';


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
      characters: [],
      favoriteChars: []
    }
  }

  componentDidMount() {
    this.state.user &&
    getData()
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
        return movies.sort((a,b) => a.id - b.id)
      })
      .then(movies => this.setState({isLoading: false, movies: movies}))
      .catch(error => console.log('movies fetch failed'))
  }

  componentDidUpdate(prevState) {
    if (this.state.characters.length < 1 && this.state.isLoading && this.state !== prevState) {
      // find the selected movie from the array in state
      const movie = this.state.movies.find(movie => movie.id === parseInt(this.state.movieID))
      // fetch all the characters from the selected movie
      const fetchChars = movie.characters.map(character => {
        return fetch(character)
          .then(res => res.json())
          .then(char => {
            // fetch all the homeworld and population data for a particular character
            const charHomeData = fetch(char.homeworld)
              .then(res => res.json())
              .then(homeworld => {
                return {name: char.name, homeworld: homeworld.name, population: homeworld.population}
              })
              .catch(error => console.log('homeworld fetch failed'))
            // fetch all the species data for each particular character
            const species = fetch(char.species)
              .then(res => res.json())
              .then(species => {
                return {species: species.name}
              })
              .catch(error => console.log('species fetch failed'))
            // fetch all the other movies the particular character appears in 
            const charMovies = char.films.map(film => {
              return fetch(film)
              .then(res => res.json())
              .then(film => film.title)
              .catch(error => 'films failed')
            })

            return Promise.all([charHomeData, species, Promise.all(charMovies)])
          })
          })
      // fetch all the data, and only until everything resolves, setState
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
    this.setState({path: '/', isLoading: false});
  }

  setPath = (e) => {
    let url = '/movies/' + e.target.id
    this.setState({path: url, isLoading: true, movieID: e.target.id})
  }

  addFavorite = (event) => {
    let charName = event.target.id;
    event.target.setAttribute('class', 'heart-2');
    let charDetails = this.state.characters.find(char => {
      return char[0].name === charName;
    });
    let newFavs = [...this.state.favoriteChars, charDetails]
    this.setState({favoriteChars: newFavs});
  }

  checkFavorite = (event) => {
    let curClass = event.target.className;
     curClass === 'heart-2' ? this.removeFavorite(event) : this.addFavorite(event);
  }

  removeFavorite = (event) => {
    let charName = event.target.id
    event.target.setAttribute('class', 'heart');
    let newFavs = this.state.favoriteChars.filter(char => {
      return char[0].name !== charName
    });
    this.setState({favoriteChars: newFavs})
  }

  grabMovieIntro = () => {
    let num = this.state.movieID;
    let mov = this.state.movies.find(mov => {
      return mov.id === parseInt(num);
    })
    return {
      title: mov.title,
      text: mov.openingCrawl
    }
  }

  render = () => {
    let favorites = <>
      <Header {...this.state.user} logout={this.logout} />
      <Container data={this.state.favoriteChars} setPath={this.setPath} favorite={this.removeFavorite}
      cardType={'heart-2'}/>
     </>
    let moviePage;
    let characterPage;
    this.state.isLoading ? moviePage = <Loader /> :
    moviePage = <>
      <Header {...this.state.user} logout={this.logout} />
      <Container data={this.state.movies} setPath={this.setPath}/>
     </>
     !this.state.characters.length ? characterPage = <Intro movie={this.grabMovieIntro}/> :
     characterPage = <>
       <Header {...this.state.user} logout={this.logout} />
       <Container data={this.state.characters} setPath={this.setPath} favorite={this.checkFavorite}
       cardType={'heart'}/>
      </>
    return (
      <div className="App">
        <Redirect to={this.state.path} />
        <Route exact path='/' render={() => <Landing updateLogin={this.updateLogin} />} />
        <Route exact path='/movies' render={() => moviePage} />
        <Route exact path='/movies/:movie_id' render={() => characterPage} />
        <Route path='/favorites' render={() => favorites} />
      </div>
    );
  }
}

export default App;
