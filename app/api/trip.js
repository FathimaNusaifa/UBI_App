import apiClient from './client';

const gethistory = () => apiClient.get('/trips');

export default {
    gethistory
};
