import APIConst from './apiConstants';

export default {
    fetchProduct: async(productKey) => {
        const endpoint = 
            `/${ APIConst.PRODUCTS_URL }/${productKey}.json?apiKey=${ APIConst.API_KEY }`;
        return await (await fetch(endpoint)).json();
    },
    fetchAlsoViewed: async(productKey) => {
        const endpoint =
        `/${ APIConst.PRODUCTS_URL }/${ productKey }/${ APIConst.ALSO_VIEWED_URL }?apiKey=${ APIConst.API_KEY }`;
        return await (await fetch(endpoint)).json();
    }
};