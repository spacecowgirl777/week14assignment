import React, {Component} from 'react';
import Movie from './Movie';

export default class MovieList extends Component {

constructor (props) {
    super(props);
    this.state= {
        movieList:[]
    }  
}

render () {
    return ( 
        <div className="container">
            <div className="card">
            <div className="card-header">
                <img className="card-img-top" src="https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" alt="Spirited Away"></img>
                <h3>Spirited Away</h3>
                <p>Synopsis...</p>
            </div>
            <Movie />
            </div>
        </div> 
        )
    }
}