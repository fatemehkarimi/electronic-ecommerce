import { useState, useEffect } from "react";
import PConst from '../productConstants';
import API from '../API';

export const useTrendingFetch = () => {
    const [products, setProducts] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTrendingProducts = async () => {
            try {
                setError(false);
                setLoading(true);
    
                const result = await API.fetchTrending();
                if('errorCode' in result) {
                    setError(true);
                    return;
                }
    
                var trendingInfo = [];
                result['results'].forEach((item) => {
                    var productInfo = {};
                    productInfo[PConst.PRODUCT_IDENTITY_KEY] = item['sku'];
                    productInfo[PConst.PRODUCT_CUSTOMER_REVIEW_AVERAGE] = item['customerReviews']['averageScore'];
                    productInfo[PConst.PRODUCT_CUSTOMER_REVIEW_COUNT] = item['customerReviews']['count'];
                    productInfo[PConst.PRODUCT_REGULAR_PRICE] = item['prices']['regular'];
                    productInfo[PConst.PRODUCT_NAME] = item['names']['title'];
                    productInfo[PConst.PRODUCT_STANDARD_IMAGE] = item['images']['standard'];
    
                    trendingInfo.push(productInfo);
                });
                setProducts(trendingInfo);
    
            }catch(err) {
                setError(true);
            }
            setLoading(false);
        }

        fetchTrendingProducts();
    }, []);

    return { products, loading, error };
}
