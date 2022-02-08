import React from 'react';
import Review from './review';
import './globalStyle.css';
import './productCarousel.css';
import arrowDownIcon from './icons/arrow-down.png';

function ProductCard({ product }) {
    return (<div className='product-carousel-product-card'>
        <div className='product-carousel-product-card-img-wrapper'>
            <img src={ product['image'] }></img>
        </div>
        <div className='product-carousel-product-card-info'>
            <div className='product-carousel-product-card-title'>
                <a href='#'>
                    { product['longDescription'] }
                </a>
            </div>
            <div className='product-carousel-product-card-review-wrapper'>
                <Review
                 value={ product['customerReviewAverage'] }
                 countReview={ product['customerReviewCount'] }
                 short='true' />
            </div>
            <div className='product-carousel-product-card-price'>
                <span className='price-symbol'>$</span>
                <span>{ product['regularPrice'] }</span>
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