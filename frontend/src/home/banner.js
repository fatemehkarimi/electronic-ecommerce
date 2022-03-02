import React, { useState, useEffect } from 'react';
import './banner.css';

import poster1 from './../images/poster1.jpg';
import poster2 from './../images/poster2.jpg';
import poster3 from './../images/poster3.jpg';

import arrowIcon from './../icons/arrow-down.png';

const images = [poster1, poster2, poster3];

function Button({ role, handleClick }) {
    const imgStyle = {
        transform: `rotate(${role == "previous" ? 90 : 270 }deg)`
    };

    return (
        <div tabIndex='0' className='button-wrapper' onClick={ handleClick }>
            <img
             style={ imgStyle }
             src={ arrowIcon }
            />
        </div>
    );
}


function Banner() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent((current + 1) % images.length);
        }, 4000);

        return () => clearTimeout(timer);
    }, [current, images]);

    const nextSlide = () => {
        setCurrent((current + 1) % images.length);
    }

    const previousSlide = () => {
        if(current - 1 < 0)
            setCurrent(images.length - 1);
        else
            setCurrent(current - 1);
    }

    return (
        <div className='banner'>
            {
                images.map(
                    (image, i) => 
                        <div 
                          className={ `slide ${current == i ? 'active-slide' : ''}` }
                          key={ i }>
                            <img src={ image } />
                        </div>)
            }
            <div className='banner-controller'>
                <Button role={ 'previous' } handleClick={ nextSlide } />
                <Button role={ 'next' }  handleClick={ previousSlide } />
            </div>
        </div>
    );
}

export default Banner;