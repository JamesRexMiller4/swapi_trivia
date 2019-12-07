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
    let card;
    props.type === 'movie' ? card =
      <div className="wrapper-card-div">
        <ul className="card-details-ul">
          <li><strong className="episode-title">Episode {props.id}:</strong> {props.title}</li>
          <li><strong>Release Year:</strong> {props.date}</li>
        </ul>
        <Link to={`/movies/${props.id}`} key={props.id}>
          <button className="character-btn">View Characters</button>
        </Link>
      </div> :
    card =
      <div className="wrapper-card-div">
        <ul className="card-details-ul">
          <li><strong>Name:</strong> Luke SkyWalker</li>
          <li><strong>Homeworld:</strong> Tattoiine</li>
          <li><strong>Population of Tatootine:</strong> 400 million</li>
          <li><strong>Species:</strong> Human</li>
          <li><strong>Other Films:</strong> all seven</li>
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
