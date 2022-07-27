import { useState, useEffect } from "react";
import API from '../API';
import PConst from '../appConstants';

export const useAlsoViewedFetch = (productKey) => {
    const [products, setProducts] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAlsoViewedProducts = async (productKey) => {
            try {
                setError(false);
                setLoading(true);
    
                const result = await API.fetchAlsoViewed(productKey);
                if('errorCode' in result) {
                    setError(true);
                    return;
                }

                var alsoViewedInfo = [];
                result['results'].forEach((item) => {
                    var productInfo = {};
                    productInfo[PConst.PRODUCT_IDENTITY_KEY] = item['sku'];
                    productInfo[PConst.PRODUCT_CUSTOMER_REVIEW_AVERAGE] = item['customerReviews']['averageScore'];
                    productInfo[PConst.PRODUCT_CUSTOMER_REVIEW_COUNT] = item['customerReviews']['count'];
                    productInfo[PConst.PRODUCT_REGULAR_PRICE] = item['prices']['regular'];
                    productInfo[PConst.PRODUCT_NAME] = item['names']['title'];
                    productInfo[PConst.PRODUCT_STANDARD_IMAGE] = item['images']['standard'];
                    
                    alsoViewedInfo.push(productInfo);
                });
                setProducts(alsoViewedInfo);
    
            } catch(error) {
                setError(true);
            }
            setLoading(false);
        }

        if(!productKey) return;
        fetchAlsoViewedProducts(productKey);
    }, [productKey]);

    return { products, loading, error };
}