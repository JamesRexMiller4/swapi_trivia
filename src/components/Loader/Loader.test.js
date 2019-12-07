import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import {shallow} from 'enzyme';

describe('Loader', () => {
  const wrapper = shallow(<Loader />)

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot with all the data passed through', () => {
    expect(wrapper).toMatchSnapshot()
})
  
});