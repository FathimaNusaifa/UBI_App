import apiClient from './client';

const gethistory = () => apiClient.get('/payments');

export default {
    gethistory
};
