import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js'
import './Container.scss';

const Container = (props) => {
  let cardData;

  if (props.data.type !== 'movie') {
  const tenToDisplay = props.data.slice(0, 10)
    cardData = tenToDisplay.map((data, index) => {
  return (<Card {...data} setPath={props.setPath} key={index} favorite={props.favorite}/>)

  })

  } else {
    cardData = props.data.map((data, index) => {
      return (<Card {...data} setPath={props.setPath} key={index}/>)
      })
    }

    return (
      <section className="container-section">
        <div className="grid-container">
          {cardData}
        </div>
      </section>
    )
}

Container.propTypes = {
  data: PropTypes.array,
  setPath: PropTypes.func, 
  favorite: PropTypes.func
}


export default Container;
