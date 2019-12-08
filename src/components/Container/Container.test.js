import React from 'react';
import Container from './Container';
import Card from '../Card/Card'
import {shallow} from 'enzyme';

describe('Container', () => {
  let wrapper, data;

  it('should match the snapshot with all the movie data passed through', () => {
    data = [
    {key: 4, id: 4, title: 'A NEW HOPE', date: '1977', characters: ['Luke', 'RD-D2', 'Chewie'],
    openingCrawl: 'In the beginning, there was Jack', type: 'movie'}, 
    {key: 5, id: 5, title: 'THE EMPIRE STRIKES BACK', date: '1980', characters: ['Han', 'Vadar', 'C3PO'],
    openingCrawl: 'And Jack had a groove', type: 'movie'}, 
    {key: 5, id: 6, title: 'RETURN OF THE JEDI', date: '1983', characters: ['Yoda', 'RD-D2', 'Luke'],
    openingCrawl: 'And from this groove, came the groove of all grooves', type: 'movie'}, 
    {key: 5, id: 7, title: 'THE FORCE AWAKENS', date: '2015', characters: ['B-B8', 'Chewi', 'Snope'],
    openingCrawl: 'And while one day viciously throwing down on his box, Jack boldly declared LET THERE BE HOUSE', type: 'movie'}
  ]
    wrapper = shallow(<Container data= {data} />)

    expect(wrapper).toMatchSnapshot()
  })

});