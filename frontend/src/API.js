import APIConst from './apiConstants';

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
            `/${ APIConst.PRODUCTS_URL }/${productKey}.json?apiKey=${ APIConst.API_KEY }`;
        return await (await fetch(endpoint)).json();
    },
    fetchProductWarranty: async(productKey) => {
        const endpoint =
            `/${ APIConst.PRODUCTS_URL }/${ productKey }/${ APIConst.WARRANTIES_URL }.json?apiKey=${ APIConst.API_KEY }`;
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
        const endpoint = 
        `/${ APIConst.PRODUCTS_URL }/${ APIConst.TRENDING_URL }?apiKey=${ APIConst.API_KEY }`;
        return await (await fetch(endpoint)).json();
    },
    fetchMostViewed: async() => {
        const endpoint = 
        `/${ APIConst.PRODUCTS_URL }/${ APIConst.MOST_VIEWED_URL }?apiKey=${ APIConst.API_KEY }`;
        return await(await fetch(endpoint)).json();
    },
    fetchProductsOfCategory: async (categoryId, pageNum=1) => {
        const endpoint =
        `/${ APIConst.PRODUCTS_URL }(categoryPath.id=${ categoryId })?format=json&page=${ pageNum }&apiKey=${ APIConst.API_KEY }`;
        return await(await fetch(endpoint)).json();
    }
};