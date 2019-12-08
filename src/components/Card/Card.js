import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = (props) => {
// For character cards the props being spread out and passed down will need to be grabbed
// as {id, name, homeworld, species}

  // homeworld, population of homeworld is a url for another fetch request
  // species is another fetch request
  // films is another fetch request
  
  let movieList;
 if (props.type !== 'movie') {
    let movies = props[2]
    console.log(movies[0])
    movieList = props[2].map(movie => {
      console.log(movie)
    return <li>{movie}</li>
      })
 }
   
    let card;
    props.type === 'movie' ? card =
      <div className="wrapper-card-div">
        <ul className="card-details-ul">
          <li><strong className="episode-title">Episode {props.id}:</strong> {props.title}</li>
          <li><strong>Release Year:</strong> {props.date}</li>
        </ul>
        <Link to={`/movies/${props.id}`} key={props.id}>
          <button className="character-btn" id={props.id} onClick={props.setPath}>View Characters</button>
        </Link>
      </div> :
    card =
      <div className="wrapper-card-div">
        <ul className="card-details-ul">
          <li><strong className="character-name">Name:</strong>{props[0].name}</li>
          <li><strong className="character-detail">Homeworld:</strong>{props[0].homeworld}</li>
          <li><strong className="character-detail">Population of Tatootine:</strong>{props[0].population}</li>
          <li><strong className="character-detail">Species:</strong>{props[1].species}</li>
          <li><strong className="character-detail">Other Films:</strong>{movieList}</li>
        </ul>
      </div>

    return (
      <section className="section-card">
      {card}
      </section>
    )
  }
// }

// For character cards
// return (
//   <section className="section-card">
//   <div className="wrapper-card-div">
//     <ul className="card-details-ul">
//       <li><strong>Name:</strong> Luke SkyWalker</li>
//       <li><strong>Homeworld:</strong> Tattoiine</li>
//       <li><strong>Population of Tatootine:</strong> 400 million</li>
//       <li><strong>Species:</strong> Human</li>
//       <li><strong>Other Films:</strong> all seven</li>
//     </ul>
//   </div>
// </section>
// )

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  date: PropTypes.string,
  characters: PropTypes.array
}



export default Card
