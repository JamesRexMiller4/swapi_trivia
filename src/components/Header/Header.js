import React from 'react';
import './Header.scss';

const Header = ({name, quote, ranking, logout}) => {
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo-h1-header">Swapi WarS</h1>
        <h3 className="quote-h3-header">"{quote}"</h3>
      </div>
      <div className="info-container">
        <h2 className="welcome-message">Welcome, {name}!</h2>
        <h3 className="ranking-h3-header">Ranking: <span className="ranking">{ranking}</span></h3>
        <button className="logout-button-header" id="logout-btn" onClick={logout}>Log Out</button>
      </div>
    </header>
  )
}

export default Header;
