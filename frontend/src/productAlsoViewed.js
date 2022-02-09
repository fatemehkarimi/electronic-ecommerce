import React, { useState, useEffect } from 'react';
import ProductCarousel from './productCarousel';
import { useAlsoViewedFetch } from './hooks/useAlsoViewedFetch';
import API from './API';
import './productAlsoViewed.css';

function ProductAlsoViewed({ productKey }) {
    const { products, loading, error } = useAlsoViewedFetch(productKey);

    return (<div className='product-also-viewed'>
        <h2>Customers also viewed these products</h2>
        <div className='product-also-viewed-product-carousel-wrapper'>
            {products &&
                <ProductCarousel products={ products } />
            }
        </div>
    </div>);
}

export default ProductAlsoViewed;