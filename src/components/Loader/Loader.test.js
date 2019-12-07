import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import {shallow} from 'enzyme';

describe('Loader', () => {

  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
});