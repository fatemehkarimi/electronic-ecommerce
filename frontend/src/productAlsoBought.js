import React, { useState } from "react";
import ProductCarousel from "./productCarousel";
import { useAlsoBoughtFetch } from "./hooks/useAlsoBoughtFetch";
import './productAlsoBought.css';

function ProductAlsoBought({productKey}) {
    const { products, loading, error } = useAlsoBoughtFetch(productKey);

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
