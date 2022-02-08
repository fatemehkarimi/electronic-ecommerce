import React from 'react';
import ProductCarousel from './productCarousel';
import './productAlsoViewed.css';

function ProductAlsoViewed(props) {
    return (<div className='product-also-viewed'>
        <h2>Customers also viewed these products</h2>
        <div className='product-also-viewed-product-carousel-wrapper'>
            <ProductCarousel />
        </div>
    </div>);
}

export default ProductAlsoViewed;