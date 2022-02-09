import React from 'react';
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
        <div className='product-carousel-product-card-img-wrapper'>
            <img src={ product[PRODUCT_STANDARD_IMAGE] }></img>
        </div>
        <div className='product-carousel-product-card-info'>
            <div className='product-carousel-product-card-title'>
                <a href='#'>
                    { product[PRODUCT_NAME] }
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
    return (<div className='product-carousel'>
        <button className='product-carousel-button product-carousel-prev-button'>
            <img src={ arrowDownIcon }/>
        </button>
        <div className='product-carousel-image-container'>
            <ProductCard product={ props.products[0] } />
            <ProductCard product={ props.products[1] } />
            <ProductCard product={ props.products[2] } />
            <ProductCard product={ props.products[3] } />
            <ProductCard product={ props.products[4] } />
            <ProductCard product={ props.products[5] } />
        </div>
        <button className='product-carousel-button product-carousel-next-button'>
            <img src={ arrowDownIcon }/>
        </button>
    </div>);
}

export default ProductCarousel;