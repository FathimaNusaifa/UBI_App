import apiClient from './client';

const getInfo = () => apiClient.get('/policies');

export default {
    getInfo
};
