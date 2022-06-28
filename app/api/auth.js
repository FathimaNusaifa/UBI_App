import apiClient from './client';

const login = (email, password) => apiClient.post('/auth', { email, password });

const register = (info) => apiClient.post('/users', info);

const getUserInfo = () => apiClient.get('/users/me');

const updateUser = (info) => apiClient.put('/users', info);

const changePassword = (info) => apiClient.put('/users/changepassword', info);

const deleteAccount = () => apiClient.delete('/users/deleteaccount');

export default {
    login,
    register,
    getUserInfo,
    updateUser,
    changePassword,
    deleteAccount
};
