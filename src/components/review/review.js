import fullStar from './../../icons/rate-star.png';
import halfStar from './../../icons/half-star.png';
import emptyStar from './../../icons/empty-star.png';
import './review.css';

function Review(props) {
    const getSource = (idx) => {
        if(props.value >= idx)
            return fullStar;
        if(idx - props.value > 0 && idx - props.value < 1)
            return halfStar;
        return emptyStar;
    }

    return (<div className='review'>
        <div className='review-img-wrapper'>
            <img src={ getSource(1) } />
        </div>
        <div className='review-img-wrapper'>
            <img src={ getSource(2) } />
        </div>
        <div className='review-img-wrapper'>
            <img src={ getSource(3) } />
        </div>
        <div className='review-img-wrapper'>
            <img src={ getSource(4) } />
        </div>
        <div className='review-img-wrapper'>
            <img src={ getSource(5) } />
        </div>
        <span className='review-value'>{ props.value }</span>
        {
            props.short
            ?
            <span>({ props.countReview })</span>
            :
            <span>{ props.countReview > 0
                    ?`(${props.countReview} Reviews)`
                    : 'Not yet reviewed' }</span>
        }
    </div>);
}

export default Review;