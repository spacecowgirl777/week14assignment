import React, {Component} from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css'

export default class Review extends Component {
    constructor (props) {
        super(props);
        this.state = {
            typeStars:0,
            typeValue:""
        }
    }

    handleChange = (event) => {
        this.setState({
            typeValue: event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addReview(this.state);
    }

    rater = (rating) => {
        this.setState({
            typeStars:rating
        });
    }

    render () {
        return (
            <div>
                <form className="card-footer">
                    <Rater onRate={({rating}) => {this.rater(rating)}}></Rater>
                    <input type="text" value={this.typeValue} onChange={this.handleChange} placeholder="leave a review" />
                    <button className="btn btn-primary" onClick={this.onSubmit}>Post</button>
                </form>
            </div>
        )
    }
   
}