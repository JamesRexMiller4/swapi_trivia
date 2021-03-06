import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { Link } from 'react-router-dom';

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
        <button className="button-header" id="logout-btn" onClick={logout}>Log Out</button>
        <Link to={'/favorites'} key={'favs'}>
          <button className="button-header" id="toggle-fav-btn">View Favs</button>
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  name: PropTypes.string,
  quote: PropTypes.string,
  ranking: PropTypes.string,
  logout: PropTypes.func
}

export default Header;
