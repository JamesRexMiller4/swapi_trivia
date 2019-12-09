import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

describe('App', () => {
  let wrapper, defaultState, formState;

  beforeEach(() => {
    defaultState = {
      isLoading: true,
      path: '/',
      user: {
        name: '',
        quote: '',
        ranking: ''
      },
      movies: [],
      movieID: null,
      characters: [],
      favoriteChars: []
    };

    formState = {
      name: 'Rick Sanchez', 
      quote: 'Wubbalubbadubdub', 
      ranking: 'expert'
    };

    wrapper = shallow(<App />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state upon mounting', () => {
    expect(wrapper.state()).toEqual(defaultState);
  });

  it('should update state when updateLogin is called', () => {
    wrapper.instance().componentDidMount = jest.fn();
    wrapper.instance().componentDidUpdate = jest.fn();
    
    expect(wrapper.state()).toEqual(defaultState);
    wrapper.instance().setState(formState);
    wrapper.instance().updateLogin(wrapper.state());
    expect(wrapper.state('user')).toEqual(formState);
  });

  it('should update the path in state when logout is called', () => {
    wrapper.instance().componentDidMount = jest.fn();
    wrapper.instance().componentDidUpdate = jest.fn();

    wrapper.instance().setState(formState);
    wrapper.instance().updateLogin(wrapper.state());
    expect(wrapper.state('path')).toEqual('/movies');
    wrapper.instance().logout();
    expect(wrapper.state('path')).toEqual('/');
  });

  it('should update the path in state when setPath is called', () => {
    const mockEvent = {target: {id: 4}};
    wrapper.instance().componentDidMount = jest.fn();
    wrapper.instance().componentDidUpdate = jest.fn();

    wrapper.instance().setState(formState);
    wrapper.instance().updateLogin(wrapper.state());
    expect(wrapper.state('path')).toEqual('/movies');
    wrapper.instance().setPath(mockEvent);
    expect(wrapper.state('path')).toEqual('/movies/4')
  })

  it('should add a favorite character to state.favoriteChars when addFavorite is called', () => {
    const filmsArr = ['A NEW HOPE', 'RETURN OF THE JEDI', 'THE FORCE AWAKENS'];
      const favChars = [
      [{name: 'Luke', homeworld: 'Tatooine', population: '200000'}, {species: 'human'}, filmsArr],
      [{name: 'Vadar', homeworld: 'Tatooine', population: '200000'}, {species: 'human'}, filmsArr],
      [{name: 'C3PO', homeworld: 'Tatooine', population: '200000'}, {species: 'droid'}, filmsArr]
      ];
    const hanSOLO = [{name: 'Han', homeworld: 'Dagoba', population: '4000000'}, {species: 'human'}, filmsArr]
    const mockEvent = { preventDefault: jest.fn(), target: {id: 'Han', setAttribute: jest.fn()} };
    const expected = [favChars, hanSOLO];
  
    wrapper.instance().setState({characters: [favChars, hanSOLO]})
    wrapper.instance().setState({favoriteChars: [favChars]});
    wrapper.instance().addFavorite(mockEvent);

    expect(wrapper.state('favoriteChars')).toEqual(expected)
  });

  it('should remove a favorite character from state.favoriteChars when removeFavorite is called', () => {
    wrapper.instance().componentDidMount = jest.fn();
    wrapper.instance().componentDidUpdate = jest.fn();

    const filmsArr = ['A NEW HOPE', 'RETURN OF THE JEDI', 'THE FORCE AWAKENS'];
    const favChars = [
      [{name: 'Luke', homeworld: 'Tatooine', population: '200000'}, {species: 'human'}, filmsArr],
      [{name: 'Vadar', homeworld: 'Tatooine', population: '200000'}, {species: 'human'}, filmsArr],
      [{name: 'C3PO', homeworld: 'Tatooine', population: '200000'}, {species: 'droid'}, filmsArr]
      ];
    const mockEvent = { preventDefault: jest.fn(), target: {id: 'C3PO', setAttribute: jest.fn()} };
    const expected = [[{name: 'Luke', homeworld: 'Tatooine', population: '200000'}, {species: 'human'}, filmsArr],
      [{name: 'Vadar', homeworld: 'Tatooine', population: '200000'}, {species: 'human'}, filmsArr]];
  
    wrapper.instance().setState({favoriteChars: favChars});
    wrapper.instance().removeFavorite(mockEvent);
    expect(wrapper.state('favoriteChars')).toEqual(expected);
  })

  it('should call either addFavorite or removeFavorite when checkFavorite is called', () => {
    wrapper.instance().componentDidMount = jest.fn();
    wrapper.instance().componentDidUpdate = jest.fn();
    wrapper.instance().addFavorite = jest.fn();
    wrapper.instance().removeFavorite = jest.fn();

    const mockEvent1 = { preventDefault: jest.fn(), target: {id: 'C3PO', class: 'heart', setAttribute: jest.fn()} };

    wrapper.instance().checkFavorite(mockEvent1);
    expect(wrapper.instance().addFavorite).toHaveBeenCalled();

    const mockEvent2 = { preventDefault: jest.fn(), target: {id: 'C3PO', class: 'heart-2', setAttribute: jest.fn()} };
    wrapper.instance().checkFavorite(mockEvent2);
    expect(wrapper.instance().removeFavorite).toHaveBeenCalled();
  });

  it.skip('should test fetch data when component did mount', () => {

  });



});
