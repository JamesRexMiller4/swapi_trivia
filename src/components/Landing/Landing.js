import React from 'react';
import './Landing.scss';
import Form from '../Form/Form.js';

const Landing = (props) => {
  return (
    <div id="landing-main">
      <h1>Swapi<br/>WarS</h1>
      <Form updateLogin={props.updateLogin}/>
    </div>
  );
}


export default Landing;
