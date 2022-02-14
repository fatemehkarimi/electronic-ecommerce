import React, { useState, useEffect } from "react";
import ProductCarousel from "./productCarousel";
import { useAlsoBoughtFetch } from "./hooks/useAlsoBoughtFetch";
import './productAlsoBought.css';

function ProductAlsoBought({ productKey, onEmpty }) {
    const { products, loading, error } = useAlsoBoughtFetch(productKey);

    useEffect(() => {
        if(error || (products && products.length == 0))
            onEmpty(true);
    }, [error, products, onEmpty]);

  return <>{
      products && products.length > 0 ?
      <div className="product-also-bought">
          <h2>Frequently bought togather</h2>
          <div className="product-also-bought-product-carousel-wrapper">
              <ProductCarousel products={ products } />
          </div>
      </div>
      : undefined
  }</>;
}

export default ProductAlsoBought;
