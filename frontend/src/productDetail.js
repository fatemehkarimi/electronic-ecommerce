import React, { useState, Suspense } from 'react';
import  { useNavigate, useParams } from 'react-router-dom';
import ProductAlbum from "./productAlbum";
import ProductInfo from "./productInfo";
import { useProductDetailFetch } from './hooks/useProductDetailFetch';
import './productDetail.css';

const LazyAlsoViewed = React.lazy(() => {
    const p = new Promise((resolve) => {
        setTimeout(() => {
            return resolve(import('./productAlsoViewed'));
        })
    }, 3000);
    return p;
});


function ProductDetail(props) {
    const navigate = useNavigate();
    const { productId } = useParams();
    const {product, loading, error} = useProductDetailFetch(productId);

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
                </>
                :
                <div>Loading</div>
            }
        </div>
        <div className='product-detail-also-viewed-wrapper'>
            {   product &&
                <Suspense fallback={ <div>Loading...</div> }>
                    <LazyAlsoViewed
                    productKey={ productId } />
                </Suspense>
            }
        </div>
    </div>);
}

export default ProductDetail;