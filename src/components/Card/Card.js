import React from 'react';
import './Card.scss';

const Card = () => {
// For movie cards the props being passed down will be 


// For character cards the props being spread out and passed down will need to be grabbed
// as {id, name, homeworld, species}

  // homeworld, population of homeworld is a url for another fetch request
  // species is another fetch request 
  // films is another fetch request

  return (
    <div className="div-wrapper">
    <section className="section-card">
      <div className="wrapper-card-div">
        <ul className="card-details-ul">
          <li>Name: Luke SkyWalker</li>
          <li>Homeworld: Tattoiine</li>
          <li>Population of Tatootine: 400 million</li>
          <li>Species: Human</li>
          <li>Other Films: all seven</li>
        </ul>
      </div>
    </section>
    <section className="section-card">
      <div className="wrapper-card-div">
        <ul className="card-details-ul">
          <li>Name: Luke SkyWalker</li>
          <li>Homeworld: Tattoiine</li>
          <li>Population of Tatootine: 400 million</li>
          <li>Species: Human</li>
          <li>Other Films: all seven</li>
        </ul>
      </div>
    </section>
    <section className="section-card">
    <div className="wrapper-card-div">
      <ul className="card-details-ul">
        <li>Name: Luke SkyWalker</li>
        <li>Homeworld: Tattoiine</li>
        <li>Population of Tatootine: 400 million</li>
        <li>Species: Human</li>
        <li>Other Films: all seven</li>
      </ul>
    </div>
  </section>
  <section className="section-card">
  <div className="wrapper-card-div">
    <ul className="card-details-ul">
      <li>Name: Luke SkyWalker</li>
      <li>Homeworld: Tattoiine</li>
      <li>Population of Tatootine: 400 million</li>
      <li>Species: Human</li>
      <li>Other Films: all seven</li>
    </ul>
  </div>
</section>
<section className="section-card">
      <div className="wrapper-card-div">
        <ul className="card-details-ul">
          <li>Name: Luke SkyWalker</li>
          <li>Homeworld: Tattoiine</li>
          <li>Population of Tatootine: 400 million</li>
          <li>Species: Human</li>
          <li>Other Films: all seven</li>
        </ul>
      </div>
    </section>
    <section className="section-card">
    <div className="wrapper-card-div">
      <ul className="card-details-ul">
        <li>Name: Luke SkyWalker</li>
        <li>Homeworld: Tattoiine</li>
        <li>Population of Tatootine: 400 million</li>
        <li>Species: Human</li>
        <li>Other Films: all seven</li>
      </ul>
    </div>
  </section>
  <section className="section-card">
  <div className="wrapper-card-div">
    <ul className="card-details-ul">
      <li>Name: Luke SkyWalker</li>
      <li>Homeworld: Tattoiine</li>
      <li>Population of Tatootine: 400 million</li>
      <li>Species: Human</li>
      <li>Other Films: all seven</li>
    </ul>
  </div>
</section>
</div>
  )
}

export default Card