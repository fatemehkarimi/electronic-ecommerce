import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useWindowDimensions } from './hooks/useWindowDimensions';
import Review from './components/review/review';
import PConst from './appConstants';
import Card from './components/card/card';
import Grid from './components/grid/grid';
import { formatLongString } from './utils';
import arrowDownIcon from './icons/arrow-down.png';
import './productCarousel.css';
import './globalStyle.css';


function ProductCard({ product }) {
  return (
    <div className='product-carousel-product-card'>
      <Card image={ product[PConst.PRODUCT_STANDARD_IMAGE] }>
        <span>{ formatLongString(product[PConst.PRODUCT_NAME]) }</span>
        <Review
          countReview={product[PConst.PRODUCT_CUSTOMER_REVIEW_COUNT]}
          value={product[PConst.PRODUCT_CUSTOMER_REVIEW_AVERAGE]}
          short="true"
        />
        <div className='product-carousel-product-card-price'>
          <span className="price-symbol">$</span>
          <span>{product[PConst.PRODUCT_REGULAR_PRICE]}</span>
        </div>
      </Card>
    </div>
  );
}

function ProductCarousel(props) {
    const {width, height} = useWindowDimensions();
    const [leftIndex, setLeftIndex] = useState(0);

    const gridRef = useRef(null);

    const calcCarouselSize = useCallback(() => {
      if(gridRef.current == null)
        return;
      return Math.floor(gridRef.current.offsetWidth / 250);
    });

    const [carouselSize, setCarouselSize] = useState(calcCarouselSize());

    const moveNext = (e) => {
        if(leftIndex + carouselSize < props.products.length)
          setLeftIndex(leftIndex + carouselSize);
        else
          setLeftIndex(0);
    }

    const movePrevious = (e) => {
        if(leftIndex - carouselSize >= 0)
          setLeftIndex(leftIndex - carouselSize);
        else
          setLeftIndex(
              Math.floor(props.products.length / carouselSize) * carouselSize);
    }

    useEffect(() => {
      const size = calcCarouselSize();
      setLeftIndex(0);
      setCarouselSize(size);
    }, [width]);

    return (<div className='product-carousel'>
        <button
         className='product-carousel-button product-carousel-prev-button'
         onClick={ movePrevious }>
            <img src={ arrowDownIcon }/>
        </button>
        <div ref={ gridRef } className="product-carousel-grid-wrapper">
          <Grid className="product-carousel-grid">
              {
                  props.products
                  .slice(
                      leftIndex,
                      Math.min(props.products.length, leftIndex +carouselSize))
                      .map(p => (
                        <a key={ p[PConst.PRODUCT_IDENTITY_KEY] }
                          className="simple-link"
                          href={`/product/${p[PConst.PRODUCT_IDENTITY_KEY]}`}>
                          <ProductCard product={ p } />
                        </a>
                  ))
              }
          </Grid>
        </div>
        <button
         className='product-carousel-button product-carousel-next-button'
         onClick={ moveNext }>
            <img src={ arrowDownIcon }/>
        </button>
    </div>);
}

export default ProductCarousel;