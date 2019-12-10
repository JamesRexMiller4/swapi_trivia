import React from 'react';
import './Intro.scss';
import PropTypes from 'prop-types';

const Intro = (props) => {
  let mov = props.movie();
  return (
    <section className='text-section'>
      <h1 className='title'>{mov.title}</h1>
      <p className='text'>{mov.text}</p>
    </section>
  )
}

Intro.propTypes = {
  movie: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string
}

export default Intro;
