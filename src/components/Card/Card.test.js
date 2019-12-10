import React from 'react';
import Card from './Card';
import {shallow} from 'enzyme';

describe('Card', () => {

  describe('Movie Card', () => {
    let wrapper, charactersArr, mocksetPath;

    beforeEach(() => {
      charactersArr = [
        "https://swapi.co/api/people/1/",
        "https://swapi.co/api/people/2/",
        "https://swapi.co/api/people/3/",
        "https://swapi.co/api/people/4/"
      ];
      mocksetPath = jest.fn();

      wrapper = shallow(<Card 
        id={4}
        title={'A NEW HOPE'}
        date={'1977'}
        characters={charactersArr}
        type="movie"
        setPath={mocksetPath}
        />)
    });

    it('should match the snapshot with all the movie data passed through', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should call setPath when the "View Characters" button is clicked', () => {
        wrapper.find('.character-btn').simulate('click');
        expect(mocksetPath).toHaveBeenCalled();
    })
  });

  describe('Character Card', () => {
    let wrapper, filmsArr, mockCheckFavorite;

    beforeEach(() => {
      mockCheckFavorite = jest.fn();
      filmsArr = ['A NEW HOPE', 'RETURN OF THE JEDI', 'THE FORCE AWAKENS'];
      const data = [[{name: 'Luke', homeworld: 'Tatooine', population: '200000'}], [{species: 'human'}], filmsArr];
      wrapper = shallow(<Card {...data} favorite={mockCheckFavorite}/>);
    });
    
    it('should match the snapshot with all the character data passed through', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should call checkFavorite when a heart icon is clicked', () => {
      wrapper.find('.heart').simulate('click');
      expect(mockCheckFavorite).toHaveBeenCalled();
    })

  });
});