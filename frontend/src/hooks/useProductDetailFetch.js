import { useState, useEffect } from 'react';
import API from '../API';

export const useProductDetailFetch = (productKey) => {
    const [product, setProduct] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchProduct = async (productKey) => {
        try {
            setError(false);
            setLoading(true);

            const productInfo = await API.fetchProduct(productKey);
            setProduct(productInfo);
        } catch(error) {
            setError(true);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProduct(productKey);
    }, [productKey]);

    return { product, loading, error };
}