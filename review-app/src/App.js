import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './MovieList';



/* App should be one page, users can vote and leave movie reviews
Needs: movie list container (for movie components & data)
       movie components (image, synopsis, rating, etc)
       stars (1-5 star reusable component)
       review list container (container in each movie component)
       review (dynamic text review per movie)
       review form (user fills out to submit review, 
       store in array don't need networking/databases)*/


  export default class App extends Component {

  render () {
    return (
      <div className="App">
        <MovieList />
        
      </div>
      );
    }

  }
