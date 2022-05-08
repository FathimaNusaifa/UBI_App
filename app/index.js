import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Authnavigator from './navigation/Authnavigator';
import DrawerNavigator from './navigation/DrawerNavigator';
import NavigationTheme from './navigation/NavigationTheme';

const Index = () => {
  const authStatus = true;

  return (
    <NavigationContainer theme={NavigationTheme}>
      {
        authStatus ? <DrawerNavigator/> : <Authnavigator/>
      }
    </NavigationContainer>
  );
};

export default Index;

