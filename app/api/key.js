import apiClient from './client';

const verifyKey = (key) => apiClient.post('/verifykey/key',{ verificationKey : key});

const updateKey = (info) => apiClient.put('/verifykey', info);

export default {
    verifyKey,
    updateKey
};
