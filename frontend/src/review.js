import fullStar from './icons/rate-star.png';
import halfStar from './icons/half-star.png';
import emptyStar from './icons/empty-star.png';
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
        <img src={ getSource(1) } />
        <img src={ getSource(2) } />
        <img src={ getSource(3) } />
        <img src={ getSource(4) } />
        <img src={ getSource(5) } />
        <span className='review-value'>{ props.value }</span>
        {
            props.short
            ?
            <span>({ props.countReview })</span>
            :
            <span>({props.countReview} Reviews)</span>
        }
    </div>);
}

export default Review;