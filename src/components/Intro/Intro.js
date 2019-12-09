import React from 'react';
import './Intro.scss';

const Intro = (props) => {
  let mov = props.movie();
  return (
    <section className='text-section'>
      <h1 className='title'>{mov.title}</h1>
      <p className='text'>{mov.text}</p>
    </section>
  )
}

export default Intro;
