import { useContext } from 'react';
//import jwtDecode from "jwt-decode";

import AuthContext from './Context';
import authStorage from './Storage';

// eslint-disable-next-line no-undef
export default useAuth = () => {
    const { user, setUser } = useContext(AuthContext);

    const logIn = (authToken) => {
        //const user = jwtDecode(authToken);
        setUser(authToken);
        authStorage.storeToken(authToken);
    };

    const logOut = () => {
        setUser(null);
        authStorage.removeToken();
    };

    return { user, logIn, logOut };
};
