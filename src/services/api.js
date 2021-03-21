import axios from 'axios';

const axiosLinkDefault = () => {
    const params = {
        baseURL: 'http://localhost:1337',
    };
    return axios.create(params);
};

export const fetchProducts = async () => {
    const {data} = await axiosLinkDefault().get('/products');
    return data;
};

export const fetchOrders = async () => {
    const {data} = await axiosLinkDefault().get('/purchases');
    return data;
};
