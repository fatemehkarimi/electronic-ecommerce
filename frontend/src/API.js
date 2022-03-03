import APIConst from './apiConstants';

export default {
    categories: [
        {
            'name': 'TV & Home Theater',
            'path': '#'
        },
        {
            'name': 'Computer & Tablets',
            'path': '#'
        },
        {
            'name': 'Cameras, Camcoders & Drones',
            'path': '#'
        },
        {
            'name': 'Cell Phones',
            'path': '#'
        },
        {
            'name': 'Audio',
            'path': '#'
        },
        {
            'name': 'Video Games',
            'path': '#'
        },
        {
            'name': 'Wearable Technology',
            'path': '#'
        }
    ],
    fetchProduct: async(productKey) => {
        const endpoint = 
            `/${ APIConst.PRODUCTS_URL }/${productKey}.json?apiKey=${ APIConst.API_KEY }`;
        return await (await fetch(endpoint)).json();
    },
    fetchProductWarranty: async(productKey) => {
        const endpoint =
            `/${ APIConst.PRODUCTS_URL }/${ productKey }/${ APIConst.WARRANTIES_URL }.json?apiKey=${APIConst.API_KEY}`;
        return await (await fetch(endpoint)).json();
    },
    fetchAlsoViewed: async(productKey) => {
        const endpoint =
        `/${ APIConst.PRODUCTS_URL }/${ productKey }/${ APIConst.ALSO_VIEWED_URL }?apiKey=${ APIConst.API_KEY }`;
        return await (await fetch(endpoint)).json();
    },
    fetchAlsoBought: async(productKey) => {
        const endpoint = 
        `/${ APIConst.PRODUCTS_URL }/${ productKey }/${ APIConst.ALSO_BOUGHT_URL }?apiKey=${ APIConst.API_KEY }`;
        return await (await fetch(endpoint)).json();
    },
    fetchTrending: async() => {
        const endpoint = `/${ APIConst.PRODUCTS_URL }/${ APIConst.TRENDING_URL }.json?apiKey=${APIConst.API_KEY}`;
        return await (await fetch(endpoint)).json();
    }
};