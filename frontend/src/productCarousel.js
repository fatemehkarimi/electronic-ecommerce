import React, { useCallback, useEffect, useState } from 'react';
import { useWindowDimensions } from './hooks/useWindowDimensions';
import Review from './review';
import {
    PRODUCT_IDENTITY_KEY,
    PRODUCT_CUSTOMER_REVIEW_AVERAGE,
    PRODUCT_CUSTOMER_REVIEW_COUNT,
    PRODUCT_REGULAR_PRICE,
    PRODUCT_NAME,
    PRODUCT_STANDARD_IMAGE
} from './productConstants';

import './globalStyle.css';
import './productCarousel.css';

import arrowDownIcon from './icons/arrow-down.png';

function ProductCard({ product }) {
    return (<div className='product-carousel-product-card'>
            <a href={ `/product/${product[PRODUCT_IDENTITY_KEY]}` }>
                <div className='product-carousel-product-card-img-wrapper'>
                    <img src={ product[PRODUCT_STANDARD_IMAGE] } />
                </div>
            </a>
        <div className='product-carousel-product-card-info'>
            <div className='product-carousel-product-card-title'>
                <a href={ `/product/${product[PRODUCT_IDENTITY_KEY]}` }>
                    { 
                        product[PRODUCT_NAME].length > 40
                        ? product[PRODUCT_NAME].slice(0, 40) + '...'
                        : product[PRODUCT_NAME]
                    }
                </a>
            </div>
            <div className='product-carousel-product-card-review-wrapper'>
                <Review
                 value={ product[PRODUCT_CUSTOMER_REVIEW_AVERAGE] }
                 countReview={ product[PRODUCT_CUSTOMER_REVIEW_COUNT] }
                 short='true' />
            </div>
            <div className='product-carousel-product-card-price'>
                <span className='price-symbol'>$</span>
                <span>{ product[PRODUCT_REGULAR_PRICE] }</span>
            </div>
        </div>
    </div>);
}

function ProductCarousel(props) {
    const {width, height} = useWindowDimensions();
    const [leftIndex, setLeftIndex] = useState(0);

    const calcCarouselSize = useCallback(() => {
        if(width >= 1600) return 6;
        if(width >= 1350) return 5;
        if(width >= 1100) return 4;
        if(width >= 850)  return 3;
        if(width >= 600)  return 2;
        else return 1; 
    });

    const [carouselSize, setCarouselSize] = useState(calcCarouselSize());

    const moveNext = (e) => {
        if(leftIndex + carouselSize < props.products.length)
            setLeftIndex(leftIndex + carouselSize);
        else
            setLeftIndex(0);
    }

    const movePrevious = (e) => {
        if(leftIndex - carouselSize >= 0)
            setLeftIndex(leftIndex - carouselSize);
        else
            setLeftIndex(
                Math.floor(props.products.length / carouselSize) * carouselSize);
    }

    useEffect(() => {
        const size = calcCarouselSize();
        setCarouselSize(size);
    }, [calcCarouselSize, setCarouselSize]);

    return (<div className='product-carousel'>
        <button
         className='product-carousel-button product-carousel-prev-button'
         onClick={ movePrevious }>
            <img src={ arrowDownIcon }/>
        </button>
        <div className='product-carousel-image-container'>
            {
                props.products
                .slice(
                    leftIndex,
                    Math.min(props.products.length, leftIndex +carouselSize))
                    .map(p => (
                    <ProductCard key={ p[PRODUCT_IDENTITY_KEY] } product={ p } />
                ))
            }
        </div>
        <button
         className='product-carousel-button product-carousel-next-button'
         onClick={ moveNext }>
            <img src={ arrowDownIcon }/>
        </button>
    </div>);
}

export default ProductCarousel;