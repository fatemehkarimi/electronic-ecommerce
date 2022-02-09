import {_API_KEY, API_URL, PRODUCTS_URL, ALSO_VIEWED_URL } from './apiConstants';

export default {
    fetchProduct: async(productKey) => {
        const endpoint = 
            `/${ PRODUCTS_URL }/${productKey}.json?apiKey=${ _API_KEY }`;
        return await (await fetch(endpoint)).json();
    },
    fetchAlsoViewed: async(productKey) => {
        const endpoint =
        `/${ PRODUCTS_URL }/${ productKey }/${ ALSO_VIEWED_URL }?apiKey=${ _API_KEY }`;
        return await (await fetch(endpoint)).json();
    }
};