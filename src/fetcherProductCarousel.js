import React, { useState, useEffect } from 'react';
import ProductCarousel from './productCarousel';
import './fetcherProductCarousel.css';

function ProductAlsoViewed({ fetch, productKey, onEmpty }) {
  const { products, loading, error } = fetch(productKey);

  useEffect(() => {
    if(error || (products && products.length == 0))
      onEmpty(true);
  }, [error, products, onEmpty]);

    return (
    <>
      {
      products && products.length > 0 ?
        <div className='fetcher-product-carousel'>
          <ProductCarousel products={ products } />
        </div>
      : undefined
      }
    </>);
}

export default ProductAlsoViewed;