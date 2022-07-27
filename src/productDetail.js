import React, { useState, Suspense } from 'react';
import  { useNavigate, useParams } from 'react-router-dom';
import { useAlsoBoughtFetch } from "./hooks/useAlsoBoughtFetch";
import { useAlsoViewedFetch } from './hooks/useAlsoViewedFetch';
import { useProductDetailFetch } from './hooks/useProductDetailFetch';
import ProductAlbum from "./productAlbum";
import ProductInfo from "./productInfo";
import BuyBox from './buyBox';
import Spinner from './components/spinner/spinner';
import PConst from './appConstants';
import './productDetail.css';
import NavBar from './navbar';


const LoadingCover = () => (
  <div className='product-detail-loading-cover'>
    <Spinner />
  </div>
);

const LazyAlsoViewed = React.lazy(() => {
  return Promise.all([
    import('./fetcherProductCarousel'),
    new Promise(resolve => setTimeout(resolve, 2000))
  ]).then(([moduleExports]) => moduleExports);
});

const LazyAlsoBought = React.lazy(() => {
  return Promise.all([
    import('./fetcherProductCarousel'),
    new Promise(resolve => setTimeout(resolve, 3000))
  ]).then(([moduleExports]) => moduleExports);
});


function ProductDetail(props) {
  const navigate = useNavigate();
  const { productId } = useParams();
  const {product, loading, error} = useProductDetailFetch(productId);

  const [emptyProductAlsoViewed, setEmptyProductAlsoViewed] = useState(false);
  const [emptyProductAlsoBought, setEmptyProductAlsoBought] = useState(false);

  const handleProductChange = (productKey) => {
    const path = `/product/${productKey}`;
    navigate(path);
  }

  const getShippingInfo = (product) => {
    var result = {};
    result[PConst.PRODUCT_FREE_SHIPPING] = 
      product[PConst.PRODUCT_FREE_SHIPPING];

    result[PConst.PRODUCT_SHIPPING_COST] = 
      product[PConst.PRODUCT_SHIPPING_COST];

    result[PConst.PRODUCT_SHIPPING_WEIGHT] = 
      product[PConst.PRODUCT_SHIPPING_WEIGHT];

    result[PConst.PRODUCT_SHIPPING_LEVELS_OF_SERVICE] = 
      product[PConst.PRODUCT_SHIPPING_LEVELS_OF_SERVICE];
    
    return result;
  }

  return (
    <div className='product-detail'>
      <NavBar />
      {
        loading && product ? <LoadingCover /> : undefined
      }
      {
        loading && !product ? <div>Loading</div> : undefined
      }
      <div className="product-detail-info">
        {
          product ?
          <>
            <div className="product-detail-left-col">
              <ProductAlbum
                images={ product[PConst.PRODUCT_IMAGES] }
                minWidth={ 500 }
                minHeight={ 500 } />
            </div>
            <div className="product-detail-middle-col">
              <ProductInfo
              info={ product }
              onProductVariantChange={ handleProductChange } />
            </div>
            <div className='product-detail-right-col'>
              <BuyBox
                productKey={ productId }
                shipping={ getShippingInfo(product) }
                price={ product[PConst.PRODUCT_REGULAR_PRICE] }
                availability={ product[PConst.PRODUCT_INSTORE_AVAILABILITY] } />
            </div>
          </>
          :
          undefined
        }
      </div>
      { (product && !emptyProductAlsoViewed) ?
        <Suspense fallback={ <Spinner /> }>
          <div className='product-detail-recommends'>
            <h2>Customers also viewed these products</h2>
            <LazyAlsoViewed
            fetch={ useAlsoViewedFetch }
            productKey={ productId }
            onEmpty={ setEmptyProductAlsoViewed } />
          </div>
        </Suspense>
        : undefined
      }
      {
        product && !emptyProductAlsoBought ?
        <Suspense fallback={ <Spinner /> }>
          <div className='product-detail-recommends'>
            <h2>Frequently bought togather</h2>
            <LazyAlsoBought
            fetch={ useAlsoBoughtFetch }
            productKey={ productId }
            onEmpty={ setEmptyProductAlsoBought } />
          </div>
        </Suspense>
        : undefined
      }
  </div>
  );
}

export default ProductDetail;