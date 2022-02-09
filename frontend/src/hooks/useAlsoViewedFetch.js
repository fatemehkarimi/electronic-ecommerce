import { useState, useEffect } from "react";
import API from '../API';
import {
    PRODUCT_IDENTITY_KEY,
    PRODUCT_CUSTOMER_REVIEW_AVERAGE,
    PRODUCT_CUSTOMER_REVIEW_COUNT,
    PRODUCT_REGULAR_PRICE,
    PRODUCT_NAME,
    PRODUCT_STANDARD_IMAGE
} from '../productConstants';

export const useAlsoViewedFetch = (productKey) => {
    const [products, setProducts] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const fetchAlsoViewedProducts = async (productKey) => {
        try {
            setError(false);
            setLoading(true);

            const result = await API.fetchAlsoViewed(productKey);
            
            var alsoViewedInfo = [];
            result['results'].forEach((item) => {
                var productInfo = {};
                productInfo[PRODUCT_IDENTITY_KEY] = item['sku'];
                productInfo[PRODUCT_CUSTOMER_REVIEW_AVERAGE] = item['customerReviews']['averageScore'];
                productInfo[PRODUCT_CUSTOMER_REVIEW_COUNT] = item['customerReviews']['count'];
                productInfo[PRODUCT_REGULAR_PRICE] = item['prices']['regular'];
                productInfo[PRODUCT_NAME] = item['names']['title'];
                productInfo[PRODUCT_STANDARD_IMAGE] = item['images']['standard'];
                
                alsoViewedInfo.push(productInfo);
            });
            setProducts(alsoViewedInfo);

        } catch(error) {
            setError(true);
        }
        setLoading(false);
    }

    useEffect(() => {
        if(!productKey) return;
        fetchAlsoViewedProducts(productKey);
    }, [productKey]);

    return { products, loading, error };
}