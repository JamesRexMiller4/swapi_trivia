import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';
import {shallow} from 'enzyme';

describe('Landing', () => {
  let wrapper, mockLoginUpdate;

  beforeEach(() => {
    mockLoginUpdate = jest.fn()

    wrapper = shallow(<Landing 
      mockLoginUpdate={mockLoginUpdate}
    />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Landing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot with all the data passed through', () => {
    expect(wrapper).toMatchSnapshot()
  });

});