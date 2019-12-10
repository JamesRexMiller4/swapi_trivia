import React from 'react';
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

  it('should match the snapshot with all the data passed through', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call logout when a user clicks the logout button', () => {
    wrapper.find('#logout-btn').simulate('click');

    expect(mockLogOut).toHaveBeenCalled();
  })
  
});