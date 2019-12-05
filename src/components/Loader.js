import React from 'react';
import './Loader.scss';


const Loader = () =>  {
  return (
    <section className='loader-section'>
      <h2 className='loader-h2'>A long time ago in a galaxy far far away
      <div className="loader-div-wave">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div></h2>
    </section>
  )
}

export default Loader;
