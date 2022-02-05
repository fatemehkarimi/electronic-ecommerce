import {_API_KEY, API_URL, PRODUCTS_URL} from './apiConstants';

export default {
    fetchProduct: async(productKey) => {
        const endpoint = 
            `${ API_URL }${ PRODUCTS_URL }${productKey}.json?apiKey=${ _API_KEY }`;
        return await (await fetch(endpoint)).json();
    }
};