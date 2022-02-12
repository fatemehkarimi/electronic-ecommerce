import React, { useState } from 'react';
import  { useNavigate, useParams } from 'react-router-dom';
import APIConst from './apiConstants';
import ProductAlbum from "./productAlbum";
import ProductInfo from "./productInfo";
import ProductAlsoViewed from './productAlsoViewed';
import { useProductDetailFetch } from './hooks/useProductDetailFetch';
import './productDetail.css';

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
                <ProductAlsoViewed
                productKey={ productId } />
            }
        </div>
    </div>);
}

export default ProductDetail;