import React from 'react';
import './Intro.scss';

const Intro = ({ title, text}) => {
  return (
    <section className='text-section'>
      <h1 className='title'>{title}</h1>
      <p className='text'>{text}</p>
    </section>
  )
}

export default Intro;
