import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Authnavigator from './navigation/Authnavigator';
import DrawerNavigator from './navigation/DrawerNavigator';
import NavigationTheme from './navigation/NavigationTheme';

// Context
import AuthContext from './auth/Context';
import authStorage from './auth/Storage';

const Index = () => {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const loggeduser = await authStorage.getUser();
    if (loggeduser) {
      console.log(loggeduser);
      setUser(user);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      restoreUser();
    }, 5000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={NavigationTheme}>
      {
        user ? <DrawerNavigator/> : <Authnavigator/>
      }
    </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Index;

