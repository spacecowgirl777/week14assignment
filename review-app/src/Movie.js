import React, {Component} from 'react';
import Review from './Review';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css'

export default class Movie extends Component {

    constructor (props) {
        super(props);
        this.state= {
            reviewList:[]
        }
    }

    addReview = (newReview) => {
        const review = newReview.typeValue.toString()
        const rating = newReview.typeStars
        const addition = [
            <div>
            <Rater rating={rating} interactive={false}></Rater>
            <p>{review}</p>
            </div>
        ]
        const copy = [...this.state.reviewList,addition]
        this.setState({reviewList:copy})
    }   
    
    removeReview = (content) => {
        this.setState({reviewList:this.state.reviewList.filter(order => order !== content)})  
    }

    render () {
        return (
            <div className="card-body">
                <div>
                {this.state.reviewList.map(review => 
                    <div className="reviewBox">
                    {review}
                    <button className="btn btn-danger" onClick={() => this.removeReview(review)}>Delete</button>
                    </div>)}
                </div>
                <Review rater={this.rater} addReview={this.addReview}/>
                </div>
        )
    }

}