import { create } from 'apisauce';
import authStorage from '../auth/Storage';

const apiClient = create({
    baseURL: 'http://192.168.8.126:3000/api'
});

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken();
    if (!authToken) {return;}

    request.headers['auth-token'] = authToken;
});

export default apiClient;
