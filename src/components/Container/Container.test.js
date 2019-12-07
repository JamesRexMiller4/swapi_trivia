import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';
import {shallow} from 'enzyme';

describe('Container', () => {

  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Container />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});