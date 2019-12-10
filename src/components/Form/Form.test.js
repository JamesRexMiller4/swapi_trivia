import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import {shallow} from 'enzyme';

describe('Form', () => {

let wrapper, mockUpdateLogin;

beforeEach(() => {
  mockUpdateLogin = jest.fn()
  wrapper = shallow(<Form updateLogin={mockUpdateLogin}/>)
})

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when handleChange is called', () => {
    const mockEvent = {
      target: {
        name: 'name',
        id: 'name-input',
        value: 'Jerry'}
    };

    const expected = {className: 'hidden', name: 'Jerry', quote: '', ranking: ''};

    wrapper.instance().handleChange(mockEvent);

    expect(wrapper.state()).toEqual(expected);
  });

  it.skip('should call the method checkErrorStatus when handleChange is called', () => {
    // wrapper.instance().checkErrorStatus = jest.fn()
    const spy = jest.spyOn(wrapper.instance(), 'checkErrorStatus')
    const mockCheckErr = wrapper.instance().checkErrorStatus


    const mockEvent = {
      target: {
        name: 'name',
        id: 'name-input',
        value: 'Jerry'}
    };

    wrapper.instance().handleChange(mockEvent)
  
    expect(spy).toHaveBeenCalled()
    expect(mockCheckErr).toBe(true)
  })

  it('should call the method validateForm when the submit button is clicked', () => {
    wrapper.instance().validateForm = jest.fn();
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.find('#form-submit').simulate('click', mockEvent);

    expect(wrapper.instance().validateForm).toHaveBeenCalledWith(mockEvent)
  });

  it('should call updateLogin when validate form has been called, and all inputs are filled out', () => {
    const userInfo = {name: 'Jerry', quote: "Wasn't me", ranking: 'novice', className: 'hidden'};
    const mockEvent = { preventDefault: jest.fn(), target: {id: 'form-submit'} };
    const expected = {name: 'Jerry', quote: "Wasn't me", ranking: 'novice', className: 'hidden'};

    wrapper.instance().setState(userInfo);
    wrapper.instance().validateForm(mockEvent);

    expect(wrapper.instance().props.updateLogin).toHaveBeenCalledWith(expected)
  })

  it('should update state and display error when validateForm has been called and not all inputs are filled out', () => {
    const defaultState = {name: '', quote: '', ranking: '', className: 'hidden'};
    const expected = {name: '', quote: '', ranking: '', className: 'error-p'};
    const mockEvent = { preventDefault: jest.fn(), target: {id: 'form-submit'} };

    wrapper.instance().setState(defaultState);
    wrapper.instance().validateForm(mockEvent);

    expect(wrapper.state()).toEqual(expected);
  });

  it('should update state.className after displaying error message, as user fills out all inputs', () => {
    const defaultState = {name: '', quote: "Wasn't me", ranking: 'novice', className: 'hidden'};
    const errState = {name: '', quote: "Wasn't me", ranking: 'novice', className: 'error-p'};
    const mockEvent = { preventDefault: jest.fn(), target: {id: 'form-submit'} };
    const validState = {name: 'Jerry', quote: "Wasn't me", ranking: 'novice', className: 'hidden'};
    const mockDetails = {
      target: {
        name: 'name',
        id: 'name-input',
        value: 'Jerry'}
    };

    wrapper.instance().setState(defaultState)
    wrapper.instance().validateForm(mockEvent)
    expect(wrapper.state()).toEqual(errState)
    wrapper.instance().handleChange(mockDetails)
    wrapper.instance().checkErrorStatus()
    expect(wrapper.state()).toEqual(validState)
  });

});