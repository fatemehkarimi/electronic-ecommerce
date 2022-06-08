import { useState, useEffect } from 'react';
import API from '../API';
import PConst from './../productConstants';

export const useMostViewedFetch = () => {
    const [products, setProducts] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchMostViewedProducts = async () => {
            try {
                setLoading(true);
                setError(false);

                const result = await API.fetchMostViewed();
                if('errorCode' in result) {
                    setError(true);
                    return;
                }

                var mostViewedInfo = [];
                result['results'].forEach((item) => {
                    var productInfo = {};
                    productInfo[PConst.PRODUCT_IDENTITY_KEY] = item['sku'];
                    productInfo[PConst.PRODUCT_CUSTOMER_REVIEW_AVERAGE] = item['customerReviews']['averageScore'];
                    productInfo[PConst.PRODUCT_CUSTOMER_REVIEW_COUNT] = item['customerReviews']['count'];
                    productInfo[PConst.PRODUCT_REGULAR_PRICE] = item['prices']['regular'];
                    productInfo[PConst.PRODUCT_NAME] = item['names']['title'];
                    productInfo[PConst.PRODUCT_STANDARD_IMAGE] = item['images']['standard'];
    
                    mostViewedInfo.push(productInfo);
                });
                setProducts(mostViewedInfo);
                
            }
            catch(err) {
                setError(true);
            }
            setLoading(false);
        }

        fetchMostViewedProducts();
    }, []);

    return { products, error, loading };
}