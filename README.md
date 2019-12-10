### Setup

- Fork and/or clone the repo. 
- Run `npm install` & `npm start` from inside the directory.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Overview

  Swapi_Trivia uses the [SWAPI Star Wars API](https://swapi.co/) to show Star Wars movies and characters along with some facts about each and was built to demonstrate some of the functioanlity and features of React. 
  
### How to use

Once you have naviagted to the landing page you can sign in with a name, favorite quote, and knowledge level. 

https://user-images.githubusercontent.com/47998896/70556951-1bb5a480-1b3f-11ea-9869-78fec54525bb.png

Upon sign in you will be greeted with a header that includes info on your profile as well as a logout button. You will also see a list of the star wars films. Each movie card will also have a button that allows you to view some of the characters that appear in this movie. 

After clicking a "View Characters" button you will likely see a loading screen that includes the opening text of the selected film. Once loading has completed you will see new cards appear that represent different characters that appear in the selected movie. You will also have the ability to favorite characters by clicking the heart button that appears on the top right of each card. 

You can view your favorites by clicking the "View Favorites" button in the header. This will then filter characters so that only ones you have favorited are displayed. 

### Dev Dependencies 

1. Enzyme ^3.10.0
2. enzyme-adapter-react-16 ^1.15.1
3. node_sass ^4.13.0
4. prop-types ^15.7.2
5. react ^16.12.0
6. react-dom ^16.12.0
7. react-router-dom ^5.1.2
8. react-scripts 3.2.0
9. sass ^1.23.7
10. typescript ^3.7.3
