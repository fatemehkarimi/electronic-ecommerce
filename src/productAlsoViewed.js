import React, { useState, useEffect } from 'react';
import ProductCarousel from './productCarousel';
import { useAlsoViewedFetch } from './hooks/useAlsoViewedFetch';
import './productAlsoViewed.css';

function ProductAlsoViewed({ productKey, onEmpty }) {
    const { products, loading, error } = useAlsoViewedFetch(productKey);

    useEffect(() => {
        if(error || (products && products.length == 0))
            onEmpty(true);
    }, [error, products, onEmpty]);

    return (
    <>
        {
        products && products.length > 0 ?
        <div className='product-also-viewed'>
            <h2>Customers also viewed these products</h2>
            <div className='product-also-viewed-product-carousel-wrapper'>
                <ProductCarousel products={ products } />
            </div>
        </div>
        : undefined
        }
    </>);
}

export default ProductAlsoViewed;