import React from 'react';
import Review from '../review/review';
import { formatLongString } from '../../utils';
import "./card.css";


function Card(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={ props.image } alt="image" />
            </div>
            <div className="card-container">
                <span>{ formatLongString(props.title) }</span>
                <Review
                    countReview={ props.review.countReview }
                    value={ props.review.value }
                    short="true" />
            </div>
        </div>
    );
}

export default Card;