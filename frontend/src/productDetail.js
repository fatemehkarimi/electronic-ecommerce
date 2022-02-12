import React, { useState } from 'react';
import ProductAlbum from "./productAlbum";
import ProductInfo from "./productInfo";
import ProductAlsoViewed from './productAlsoViewed';
import { useProductDetailFetch } from './hooks/useProductDetailFetch';
import APIConst from './apiConstants';
import './productDetail.css';

function ProductDetail(props) {
    const [productKey, setProductKey] = useState('6494426');
    const {product, loading, error} = useProductDetailFetch(productKey);

    const handleProductChange = (productKey) => {
        setProductKey(productKey);
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
                productKey={ product[APIConst.PRODUCT_IDENTITY_KEY] } />
            }
        </div>
    </div>);
}

export default ProductDetail;