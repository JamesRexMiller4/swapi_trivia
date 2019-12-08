import React from 'react';
import Card from '../Card/Card.js'
import './Container.scss';

const Container = (props) => {
  // For movie: Container will be passed an array of 7 movies

  // For characters in a movie: Container will be passed an array of character objects,
  // they will need to have promise alls done to fetch all the necessary data, than have
  // map methods or a for loop performed to only render 10 cards at a time.
  console.log(props)
  const tentoDisplay = props.movies.slice(0, 10)
  const movieCards = tentoDisplay.map((movie) => {
  return (<Card {...movie} setPath={props.setPath}/>)
  })
  return (
    <section className="container-section">
      <div className="grid-container">
        {movieCards}
      </div>
    </section>
  )
}


export default Container;
