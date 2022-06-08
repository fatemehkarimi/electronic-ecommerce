import React, { useState, Suspense } from 'react';
import  { useNavigate, useParams } from 'react-router-dom';
import { useProductDetailFetch } from './hooks/useProductDetailFetch';
import ProductAlbum from "./productAlbum";
import ProductInfo from "./productInfo";
import BuyBox from './buyBox';
import Spinner from './components/spinner/spinner';
import PConst from './productConstants';
import './productDetail.css';


const LoadingCover = () => (
    <div className='product-detail-loading-cover'>
        <Spinner />
    </div>
);

const LazyAlsoViewed = React.lazy(() => {
    return Promise.all([
        import('./productAlsoViewed'),
        new Promise(resolve => setTimeout(resolve, 2000))
    ]).then(([moduleExports]) => moduleExports);
});

const LazyAlsoBought = React.lazy(() => {
    return Promise.all([
        import('./productAlsoBought'),
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

    return (<div className='product-detail'>
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