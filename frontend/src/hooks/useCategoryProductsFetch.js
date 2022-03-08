import { useState, useEffect } from 'react';
import API from '../API';
import PConst from '../productConstants';


export const useCategoryProductsFetch = (categoryId, pageNum=1) => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [totalPages, setTotalPages] = useState(1);


    useEffect(() => {
        const fetchCategoryProducts = async (id, pageNum) => {
            try {
                setError(false);
                setLoading(true);
                const result = await API.fetchProductsOfCategory(id, pageNum);
                if('errorCode' in result) {
                    setError(true);
                    return;
                }

                var categoryProducts = [];
                result['products'].forEach((item) => {
                    var productInfo = {};

                    productInfo[PConst.PRODUCT_IDENTITY_KEY] = item['sku'];
                    productInfo[PConst.PRODUCT_CUSTOMER_REVIEW_AVERAGE] = item['customerReviewAverage'];
                    productInfo[PConst.PRODUCT_CUSTOMER_REVIEW_COUNT] = item['customerReviewCount'];
                    productInfo[PConst.PRODUCT_REGULAR_PRICE] = item['regularPrice'];
                    productInfo[PConst.PRODUCT_NAME] = item['name'];
                    productInfo[PConst.PRODUCT_STANDARD_IMAGE] = item['images'][0]['href'];

                    categoryProducts.push(productInfo);
                });

                setTotalPages(result['totalPages']);
                setProducts(categoryProducts);

            }catch(err) {
                setError(true);
            }

            setLoading(false);
        };

        fetchCategoryProducts(categoryId, pageNum);
    }, [categoryId, pageNum]);

    return { products, totalPages, loading, error };
}