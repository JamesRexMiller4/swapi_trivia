import React from 'react';
import './Header.scss';

const Header = ({name, quote, ranking}) => {
  return (
    <header className="header">
      <div className="logo-btn-wrapper">
      <h1 className="logo-h1-header">Swapi WarS</h1>
      <button className="logout-button-header" id="logout-btn">Log Out</button>
      </div>
      <div className="profile-wrapper-header">
        <h2>Welcome {name}!</h2>
        <h3 className="quote-h3-header">"{quote}"</h3>
        <h3 className="ranking-h3-header">Ranking: <span>{ranking}</span></h3>
      </div>
    </header>
  )
}

export default Header;