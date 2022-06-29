import apiClient from './client';

const getInfo = () => apiClient.get('/vehicles');

export default {
    getInfo
};
