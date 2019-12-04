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

  handleChange = event => {
    event.target.getAttribute('id') === 'name-input' ?
    this.setState({name: event.target.value})
    : event.target.getAttribute('id') === 'quote-input' ? 
    this.setState({quote: event.target.value})
    : event.target.getAttribute('id') === 'novice-input' ? 
    this.setState({ranking: 'novice'})
    : event.target.getAttribute('id') === 'intermediate-input' ? 
    this.setState({ranking: 'intermediate'})
    : event.target.getAttribute('id') === 'expert-input' ?
    this.setState({ranking: 'expert'}) : console.log(null)
  }

  validateForm = () => {
    
  }
  render() {
    return (
      <div id="form-wrapper">
        <span>Please sign in to continue.</span>
        <div className="input-wrapper">
          <label>Name:</label>
          <input type="text" id="name-input" onChange={event => this.handleChange(event)}></input>
        </div>
        <div className="input-wrapper">
          <label>Favorite Quote:</label>
          <input type="text" id="quote-input" onChange={event => this.handleChange(event)}></input>
        </div>
        <div className="input-wrapper">
          <label id="button-main-label">Knowledge Ranking:</label>
          <div id="radio-wrapper">
            <div className="radio-wrapper-sm">
              <input className="radio-input" type="radio" name="Novice" id="novice-input" onClick={event => this.handleChange(event)}></input>
              <label className="radio-label" htmlFor="novice-input">Novice</label>
            </div>
            <div className="radio-wrapper-sm">
              <input className="radio-input" type="radio" name="Intermediate" id="intermediate-input" onClick={event => this.handleChange(event)}></input>
              <label className="radio-label" htmlFor="intermediate-input">Intermediate</label>
            </div>
            <div className="radio-wrapper-sm">
              <input className="radio-input" type="radio" name="Expert" id="expert-input" onClick={event => this.handleChange(event)}></input>
              <label className="radio-label" htmlFor="expert-input">Expert</label>
            </div>
          </div>
        </div>
        <button id="form-submit" onClick={this.validateForm()}>Sign In</button>
      </div>
    )
  }
}

export default Form;
