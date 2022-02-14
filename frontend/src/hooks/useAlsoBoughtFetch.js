import { useState, useEffect } from 'react';
import API from '../API';
import {
    PRODUCT_IDENTITY_KEY,
    PRODUCT_CUSTOMER_REVIEW_AVERAGE,
    PRODUCT_CUSTOMER_REVIEW_COUNT,
    PRODUCT_REGULAR_PRICE,
    PRODUCT_NAME,
    PRODUCT_STANDARD_IMAGE
} from '../productConstants';

export const useAlsoBoughtFetch = (productKey) => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchAlsoBoughtProducts = async (productKey) => {
            try {
                setLoading(true);
                setError(false);
    
                const result = await API.fetchAlsoBought(productKey);
                if('errorCode' in result) {
                    setError(true);
                    return;
                }

                var alsoBoughtInfo = [];
                result['results'].forEach((item) => {
                    var productInfo = {};
                    productInfo[PRODUCT_IDENTITY_KEY] = item['sku'];
                    productInfo[PRODUCT_CUSTOMER_REVIEW_AVERAGE] = item['customerReviews']['averageScore'];
                    productInfo[PRODUCT_CUSTOMER_REVIEW_COUNT] = item['customerReviews']['count'];
                    productInfo[PRODUCT_REGULAR_PRICE] = item['prices']['regular'];
                    productInfo[PRODUCT_NAME] = item['names']['title'];
                    productInfo[PRODUCT_STANDARD_IMAGE] = item['images']['standard'];

                    alsoBoughtInfo.push(productInfo);
                });
                setProducts(alsoBoughtInfo);
    
            }catch(error) {
                setError(true);
            }
            setLoading(false);
        }

        if(!productKey) return;
        fetchAlsoBoughtProducts(productKey);
    }, [productKey]);

    return { products, loading, error };
}