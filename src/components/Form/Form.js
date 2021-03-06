import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
    event.target.id === 'name-input' ?
    this.setState({name: event.target.value})
    : event.target.id === 'quote-input' ?
    this.setState({quote: event.target.value})
    : event.target.id === 'novice-input' ?
    this.setState({ranking: 'novice'})
    : event.target.id === 'intermediate-input' ?
    this.setState({ranking: 'intermediate'})
    : event.target.id === 'expert-input' ?
    this.setState({ranking: 'expert'}) : console.log(null)
    setTimeout(() => {this.checkErrorStatus()}, 100)
  }

  validateForm = event => {
    event.preventDefault();
    (event.target.id === 'form-submit')
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
    return (
      <form id="form-wrapper" autoComplete="off">
        <span>Please sign in to continue.</span>
        <div className="input-wrapper">
          <label>Name:</label>
          <input type="text" id="name-input" name='name' onChange={event => this.handleChange(event)}></input>
        </div>
        <div className="input-wrapper">
          <label>Favorite Quote:</label>
          <input type="text" id="quote-input" name='quote' onChange={event => this.handleChange(event)}></input>
        </div>
        <div className="input-wrapper">
          <label id="button-main-label">Knowledge Ranking:</label>
          <div id="radio-wrapper">
            <div className="radio-wrapper-sm">
              <input className="radio-input" type="radio" name="ranking" id="novice-input" onClick={event => this.handleChange(event)}></input>
              <label className="radio-label" htmlFor="novice-input">Novice</label>
            </div>
            <div className="radio-wrapper-sm">
              <input className="radio-input" type="radio" name="ranking" id="intermediate-input" onClick={event => this.handleChange(event)}></input>
              <label className="radio-label" htmlFor="intermediate-input">Intermediate</label>
            </div>
            <div className="radio-wrapper-sm">
              <input className="radio-input" type="radio" name="ranking" id="expert-input" onClick={event => this.handleChange(event)}></input>
              <label className="radio-label" htmlFor="expert-input">Expert</label>
            </div>
          </div>
        </div>
        <p className={this.state.className}>Please fill out all form fields</p>
        <button id="form-submit" onClick={event => this.validateForm(event)}>Sign In</button>
      </form>
    )
  }
}

export default Form;
