import React, { useState, Suspense } from 'react';
import  { useNavigate, useParams } from 'react-router-dom';
import { useProductDetailFetch } from './hooks/useProductDetailFetch';
import ProductAlbum from "./productAlbum";
import ProductInfo from "./productInfo";
import BuyBox from './buyBox';
import Spinner from './components/spinner';
import APIConst from './apiConstants';
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

    return (<div className='product-detail'>
        <div className="product-detail-info">
            {
                product ?
                <>
                    <div className="product-detail-left-col">
                        <ProductAlbum images={ product.images } />
                    </div>
                    <div className="product-detail-middle-col">
                        <ProductInfo
                        info={ product }
                        onProductVariantChange={ handleProductChange } />
                    </div>
                    <div className='product-detail-right-col'>
                        <BuyBox
                         shipping={ product }
                         price={ product.regularPrice } />
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