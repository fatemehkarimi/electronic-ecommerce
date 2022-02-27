import React from 'react';
import './banner.css';
import poster1 from './../images/poster1.jpg';
import arrowIcon from './../icons/arrow-down.png';

function Button({ role }) {
    const imgStyle = {
        transform: `rotate(${role == "previous" ? 90 : 270 }deg)`
    };

    return (
        <div tabIndex='0' className='button-wrapper'>
            <img
             style={ imgStyle }
             className='banner-controller-previous'
             src={ arrowIcon } />
        </div>
    );
}


function Banner({ images }) {
    return (
        <div className='banner'>
            <img src={ poster1 } />
            <div className='banner-controller'>
                <Button role={ 'previous' } />
                <Button role={ 'next' } />
            </div>
        </div>
    );
}

export default Banner;