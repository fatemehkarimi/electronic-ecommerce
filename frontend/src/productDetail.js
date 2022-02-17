import React, { useState, Suspense } from 'react';
import  { useNavigate, useParams } from 'react-router-dom';
import { useProductDetailFetch } from './hooks/useProductDetailFetch';
import ProductAlbum from "./productAlbum";
import ProductInfo from "./productInfo";
import BuyBox from './buyBox';
import Spinner from './components/spinner';
import PConst from './productConstants';
import './productDetail.css';

const LazyAlsoViewed = React.lazy(() => {
    const p = new Promise((resolve) => {
        setTimeout(() => {
            return resolve(import('./productAlsoViewed'));
        })
    }, 3000);
    return p;
});

const LazyAlsoBought = React.lazy(() => {
    const p = new Promise((resolve) => {
        setTimeout(() => {
            return resolve(import('./productAlsoBought'));
        })
    }, 6000);
    return p;
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

    return (<div className='product-detail'>
        <div className="product-detail-info">
            {
                product ?
                <>
                    <div className="product-detail-left-col">
                        <ProductAlbum images={ product[PConst.PRODUCT_IMAGES] } />
                    </div>
                    <div className="product-detail-middle-col">
                        <ProductInfo
                        info={ product }
                        onProductVariantChange={ handleProductChange } />
                    </div>
                    <div className='product-detail-right-col'>
                        <BuyBox
                         shipping={ getShippingInfo(product) }
                         price={ product[PConst.PRODUCT_REGULAR_PRICE] }
                         availability={ product[PConst.PRODUCT_INSTORE_AVAILABILITY] } />
                    </div>
                </>
                :
                <div>Loading</div>
            }
        </div>
        { (product && !emptyProductAlsoViewed) ?
            <div className='product-detail-also-viewed-wrapper'>
                <Suspense fallback={ <Spinner /> }>
                    <LazyAlsoViewed
                     productKey={ productId }
                     onEmpty={ setEmptyProductAlsoViewed } />
                </Suspense>
            </div>
            : undefined
        }
        {
            product && !emptyProductAlsoBought ?
            <div className='product-detail-also-bought-wrapper'>
                <Suspense fallback={ <Spinner /> }>
                    <LazyAlsoBought
                        productKey={ productId }
                        onEmpty={ setEmptyProductAlsoBought } />
                </Suspense>
            </div>
            : undefined
        }
    </div>);
}

export default ProductDetail;