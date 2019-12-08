import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = (props) => {

  let movieList;
 if (props.type !== 'movie') {
    movieList = props[2].map(movie => {
    return <li>{movie}</li>
      })
 }
   
    let card;
    props.type === 'movie' ? 
    card =
      <div className="wrapper-card-div">
        <ul className="card-details-ul">
          <li><strong className="episode-title">Episode {props.id}:</strong> {props.title}</li>
          <li><strong>Release Year:</strong> {props.date}</li>
        </ul>
        <Link to={`/movies/${props.id}`} key={props.id}>
          <button className="character-btn" id={props.id} onClick={props.setPath}>View Characters</button>
        </Link>
      </div> 
      :
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

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  date: PropTypes.string,
  characters: PropTypes.array
}



export default Card
