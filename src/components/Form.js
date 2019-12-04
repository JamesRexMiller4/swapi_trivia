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
      <div id="form-wrapper">
        <span>Please sign in to continue.</span>
        <div className="input-wrapper">
          <label>Name:</label>
          <input type="text" id="name-input"></input>
        </div>
        <div className="input-wrapper">
          <label>Favorite Quote:</label>
          <input type="text" id="quote-input"></input>
        </div>
        <div className="input-wrapper">
          <label id="button-main-label">Knowledge Ranking:</label>
          <div id="radio-wrapper">
            <div className="radio-wrapper-sm">
              <input className="radio-input" type="radio" name="Novice" id="novice-input"></input>
              <label className="radio-label" for="novice-input">Novice</label>
            </div>
            <div className="radio-wrapper-sm">
              <input className="radio-input" type="radio" name="Novice" id="intermediate-input"></input>
              <label className="radio-label" for="intermediate-input">Intermediate</label>
            </div>
            <div className="radio-wrapper-sm">
              <input className="radio-input" type="radio" name="Novice" id="expert-input"></input>
              <label className="radio-label" for="expert-input">Expert</label>
            </div>
          </div>
        </div>
        <button id="form-submit">Sign In</button>
      </div>
    )
  }
}

export default Form;
