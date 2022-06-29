import apiClient from './client';

const verifyKey = (key) => apiClient.post('/reset/vefifykey',{ verificationKey : key});

const resetPassword = (info) => apiClient.post('/reset/resetpassword', info);

export default {
    verifyKey,
    resetPassword
};
