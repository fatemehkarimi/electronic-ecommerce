import APIURL from './apiURL';

export default {
    categories: [
        {
            'id': 'abcat0100000',
            'name': 'TV & Home Theater'
        },
        {
            'id': 'abcat0500000',
            'name': 'Computer & Tablets'
        },
        {
            'id': 'abcat0400000',
            'name': 'Cameras, Camcoders & Drones'
        },
        {
            'id': 'abcat0800000',
            'name': 'Cell Phones'
        },
        {
            'id': 'abcat0200000',
            'name': 'Audio'
        },
        {
            'id': 'abcat0700000',
            'name': 'Video Games'
        },
        {
            'id': 'pcmcat332000050000',
            'name': 'Wearable Technology'
        }
    ],
    fetchProduct: async(productKey) => {
        const endpoint = 
            `/${ APIURL.PRODUCTS_URL }/${productKey}.json?apiKey=${ APIURL.API_KEY }`;
        return await (await fetch(endpoint)).json();
    },
    fetchProductWarranty: async(productKey) => {
        const endpoint =
            `/${ APIURL.PRODUCTS_URL }/${ productKey }/${ APIURL.WARRANTIES_URL }.json?apiKey=${ APIURL.API_KEY }`;
        return await (await fetch(endpoint)).json();
    },
    fetchAlsoViewed: async(productKey) => {
        const endpoint =
        `/${ APIURL.PRODUCTS_URL }/${ productKey }/${ APIURL.ALSO_VIEWED_URL }?apiKey=${ APIURL.API_KEY }`;
        return await (await fetch(endpoint)).json();
    },
    fetchAlsoBought: async(productKey) => {
        const endpoint = 
        `/${ APIURL.PRODUCTS_URL }/${ productKey }/${ APIURL.ALSO_BOUGHT_URL }?apiKey=${ APIURL.API_KEY }`;
        return await (await fetch(endpoint)).json();
    },
    fetchTrending: async() => {
        const endpoint = 
        `/${ APIURL.PRODUCTS_URL }/${ APIURL.TRENDING_URL }?apiKey=${ APIURL.API_KEY }`;
        return await (await fetch(endpoint)).json();
    },
    fetchMostViewed: async() => {
        const endpoint = 
        `/${ APIURL.PRODUCTS_URL }/${ APIURL.MOST_VIEWED_URL }?apiKey=${ APIURL.API_KEY }`;
        return await(await fetch(endpoint)).json();
    },
    fetchProductsOfCategory: async (categoryId, pageNum=1) => {
        const endpoint =
        `/${ APIURL.PRODUCTS_URL }(categoryPath.id=${ categoryId })?format=json&page=${ pageNum }&apiKey=${ APIURL.API_KEY }`;
        return await(await fetch(endpoint)).json();
    }
};