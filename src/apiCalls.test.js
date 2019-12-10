import { getData } from './apiCalls'

describe('getData', () => {

  let mockFullResponse, mockCleanedResponse;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () =>  {return Promise.resolve(mockFullResponse)}
      });
    });


    mockFullResponse = [{
      
    "characters": [
      "https://swapi.co/api/people/1/"
  ],
  "created": "2014-12-10T14:23:31.880000Z",
  "director": "George Lucas",
  "edited": "2014-12-12T11:24:39.858000Z",
  "episode_id": 4,
  "opening_crawl": "It is a period of civil war.\n\nRebel spaceships, striking\n\nfrom a hidden base, have won\n\ntheir first victory against\n\nthe evil Galactic Empire.\n\n\n\nDuring the battle, Rebel\n\nspies managed to steal secret\r\nplans to the Empire's\n\nultimate weapon, the DEATH\n\nSTAR, an armored space\n\nstation with enough power\n\nto destroy an entire planet.\n\n\n\nPursued by the Empire's\n\nsinister agents, Princess\n\nLeia races home aboard her\n\nstarship, custodian of the\n\nstolen plans that can save her\n\npeople and restore\n\nfreedom to the galaxy....",
  "planets": [
      "https://swapi.co/api/planets/1/"
  ],
  "producer": "Gary Kurtz, Rick McCallum",
  "release_date": "1977-05-25",
  "species": [
      "https://swapi.co/api/species/1/"
  ],
  "starships": [
      "https://swapi.co/api/starships/2/"
  ],
  "title": "A New Hope",
  "url": "https://swapi.co/api/films/1/",
  }]

  mockCleanedResponse = [{
    key: 1,
    id: 4, 
    title: 'A NEW HOPE',
    date: '1980',
    characters: [
      "https://swapi.co/api/people/1/",
      "https://swapi.co/api/people/2/",
      "https://swapi.co/api/people/3/"
    ],
    openingCrawl: 
    'It is a dark time for the rebellion... the price of avocado toast has gone up.',
    type: 'movie'
  }]


  });


it('should be passed(and call) the correct url', () => {
    getData();
    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films/');
});

it('should return an array of movies', () => {
    expect(getData()).resolves.toEqual(mockFullResponse)
})

it('should throw an exception when a response is invalid', () => {
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: false,
    });
  });

  expect(getData()).rejects.toEqual(Error('Error resolving movies fetch'));
});

it('SAD: should return an error if the promise rejects', () => {
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.reject(Error('Error resolving fetch'));
  });

  expect(getData()).rejects.toEqual(Error('Error resolving fetch'));

});

})