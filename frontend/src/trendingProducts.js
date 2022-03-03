import React from 'react';
import { useTrendingFetch } from './hooks/useTrendingFetch';
import ProductCarousel from './productCarousel';
import './trendingProducts.css';


function TrendingProducts() {
    const { products, loading, error } = useTrendingFetch();

    return (
        <>
        {
        products && products.length > 0 ?
            <div className='trending-products'>
                <h2>Trending products</h2>
                <ProductCarousel products= { products } />
            </div>
            : undefined
        }
        </>
    );
}

export default TrendingProducts;