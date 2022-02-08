import React from 'react';
import Review from './review';
import './globalStyle.css';
import './productCarousel.css';
import arrowDownIcon from './icons/arrow-down.png';

function ProductCard(props) {
    return (<div className='product-carousel-product-card'>
        <div className='product-carousel-product-card-img-wrapper'>
            <img src={ arrowDownIcon }></img>
        </div>
        <div className='product-carousel-product-card-info'>
            <div className='product-carousel-product-card-title'>
                <a href='#'>
                    MacBook Pro 13.3" Laptop - Apple M1 chip - 8GB Memory - 512GB SSD (Latest Model) - Space Gray
                </a>
            </div>
            <div className='product-carousel-product-card-review-wrapper'>
                <Review value='5' short='true' countReview='21' />
            </div>
            <div className='product-carousel-product-card-price'>
                <span className='price-symbol'>$</span>
                <span>1500</span>
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
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
        <button className='product-carousel-button product-carousel-next-button'>
            <img src={ arrowDownIcon }/>
        </button>
    </div>);
}

export default ProductCarousel;