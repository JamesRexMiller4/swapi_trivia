import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import {shallow} from 'enzyme';

describe('Header', () => {
  let wrapper, mockLogOut, user;

  beforeEach(() => {
    mockLogOut = jest.fn()

    wrapper = shallow(<Header 
      name={'Leeroy Jenkings'}
      quote={'LEEERRRROOOOYYY JEEEENNNNKKKKIIINNNSSS'}
      ranking={'expert'}
      logout={mockLogOut}
    />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot with all the data passed through', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call logout when a user clicks the logout button', () => {
    wrapper.find('#logout-btn').simulate('click');

    expect(mockLogOut).toHaveBeenCalled();
  })
});