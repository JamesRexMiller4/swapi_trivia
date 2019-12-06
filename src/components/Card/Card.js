import React from 'react';
import './Card.scss';

const Card = (props) => {
// For movie cards the props being passed down will be


// For character cards the props being spread out and passed down will need to be grabbed
// as {id, name, homeworld, species}

  // homeworld, population of homeworld is a url for another fetch request
  // species is another fetch request
  // films is another fetch request
    return (
      <section className="section-card">
          <div className="wrapper-card-div">
            <ul className="card-details-ul">
              <li><strong>Episode {props.id}:</strong> {props.title}</li>
              <li><strong>Release Year:</strong> {props.date}</li>
            </ul>
            <button className="character-btn">View Characters</button>
          </div>
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

export default Card
