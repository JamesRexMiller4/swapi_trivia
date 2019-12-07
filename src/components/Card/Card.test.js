import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import {shallow} from 'enzyme';

describe('Card', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('Movie Card', () => {
    let wrapper, charactersArr;

    beforeEach(() => {
      charactersArr = [
        "https://swapi.co/api/people/1/",
        "https://swapi.co/api/people/2/",
        "https://swapi.co/api/people/3/",
        "https://swapi.co/api/people/4/"
      ]

      wrapper = shallow(<Card 
        id={4}
        title={'A NEW HOPE'}
        date={'1977'}
        characters={charactersArr}
        />)
    })

    it('should match the snapshot with all the data passed through', () => {
      expect(wrapper).toMatchSnapshot()
  })


  })
 
})