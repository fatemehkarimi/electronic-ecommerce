import React, { useState } from 'react';
import ProductAlbum from "./productAlbum";
import ProductInfo from "./productInfo";
import { useProductDetailFetch } from './hooks/useProductDetailFetch';
import './productDetail.css';

function ProductDetail(props) {
    const [productKey, setProductKey] = useState('6443336');
    const {product, loading, error} = useProductDetailFetch(productKey);

    const handleProductChange = (productKey) => {
        setProductKey(productKey);
    }

    return (<div className="product-detail">
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
    </div>);
}

export default ProductDetail;