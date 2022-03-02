import React, { useState, useEffect } from 'react';
import './banner.css';
import arrowIcon from './../../icons/arrow-down.png';


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


function Banner({ images, interval }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if(!images || images.length == 0)
            return;

        const timer = setTimeout(() => {
            setCurrent((current + 1) % images.length);
        }, interval);

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