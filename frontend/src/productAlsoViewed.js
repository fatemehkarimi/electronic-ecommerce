import React, { useState, useEffect } from 'react';
import ProductCarousel from './productCarousel';
import API from './API';
import './productAlsoViewed.css';

function ProductAlsoViewed({ productKey }) {
    const [alsoViewedProducts, setAlsoViewedProducts] = useState();

    const fetchAlsoViewed = async (pKey) => {
        try {
            const result = await API.fetchAlsoViewed(pKey);
            var alsoViewedInfo = [];
            result['results'].forEach((item) => {
                var productInfo = {};
                productInfo['sku'] = item['sku'];
                productInfo['customerReviewAverage'] = item['customerReviews']['averageScore'];
                productInfo['customerReviewCount'] = item['customerReviews']['count'];
                productInfo['regularPrice'] = item['prices']['regular'];
                productInfo['longDescription'] = item['names']['title'];
                productInfo['image'] = item['images']['standard'];

                alsoViewedInfo.push(productInfo);
            });
            setAlsoViewedProducts(alsoViewedInfo);
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(!productKey)
            return;

        fetchAlsoViewed(productKey);
    }, [productKey]);

    return (<div className='product-also-viewed'>
        <h2>Customers also viewed these products</h2>
        <div className='product-also-viewed-product-carousel-wrapper'>
            {alsoViewedProducts &&
                <ProductCarousel products={ alsoViewedProducts } />
            }
        </div>
    </div>);
}

export default ProductAlsoViewed;