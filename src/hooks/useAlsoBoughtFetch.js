import { useState, useEffect } from 'react';
import API from '../API';
import PConst from '../productConstants';

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
                    productInfo[PConst.PRODUCT_IDENTITY_KEY] = item['sku'];
                    productInfo[PConst.PRODUCT_CUSTOMER_REVIEW_AVERAGE] = item['customerReviews']['averageScore'];
                    productInfo[PConst.PRODUCT_CUSTOMER_REVIEW_COUNT] = item['customerReviews']['count'];
                    productInfo[PConst.PRODUCT_REGULAR_PRICE] = item['prices']['regular'];
                    productInfo[PConst.PRODUCT_NAME] = item['names']['title'];
                    productInfo[PConst.PRODUCT_STANDARD_IMAGE] = item['images']['standard'];

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