import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './Intro';
import { shallow } from 'enzyme';

describe('Intro', () => {
  let wrapper, movie;

  beforeEach(() => {
    movie = jest.fn(() => {
      return {title: 'some title',
      text: 'some text'}
    })
    wrapper = shallow(<Intro movie={movie}/>)

  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Intro movie={movie}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot with all the data passed through', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
});
