import React, { useState, useEffect } from 'react';
import ProductAlbum from "./productAlbum";
import ProductInfo from "./productInfo";
import API from './API';
import './productDetail.css';

function ProductDetail(props) {
    const [product, setProduct] = useState();
    const [productKey, setProductKey] = useState('6360241');

    const handleProductChange = (productKey) => {
        setProductKey(productKey);
    }

    const fetchProduct = async (productKey) => {
        try {
            const productInfo = await API.fetchProduct(productKey);
            setProduct(productInfo);
        } catch(error) {

        }
    }

    useEffect(() => {
        fetchProduct(productKey);
    }, [productKey]);

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
            : <></>
        }
    </div>);
}

export default ProductDetail;