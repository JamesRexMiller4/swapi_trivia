import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      ranking: ''
    }
  }
  render() {
    return (
      <div>
        <span>Please sign in to continue.</span>
        <label>Name:</label>
        <input type="text" id="name-input"></input>
        <label>Favorite Quote:</label>
        <input type="text" id="quote-input"></input>
      </div>
    )
  }
}

export default Form;
