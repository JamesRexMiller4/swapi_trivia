import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      ranking: '',
      className: 'hidden'
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
    setTimeout(() => {this.checkErrorStatus()}, 100)
  }

  validateForm = event => {
    (event.target.getAttribute('id') === 'form-submit')
    && this.state.name.length > 0 && this.state.quote.length > 0
    && this.state.ranking.length > 0 ?
    this.props.updateLogin(this.state)
    : this.setState({className: 'error-p'})
  }

  checkErrorStatus = () => {
    this.state.name.length > 0 && this.state.quote.length > 0 && this.state.ranking.length > 0 ?
    this.setState({className: 'hidden'}) : console.log(null);
  }

  render() {
    console.log(this.state);
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
        <p className={this.state.className}>Please fill out all form fields</p>
        <button id="form-submit" onClick={event => this.validateForm(event)}>Sign In</button>
      </div>
    )
  }
}

export default Form;
