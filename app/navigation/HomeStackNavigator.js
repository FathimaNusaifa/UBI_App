import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import routes from './routes';

const stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <stack.Navigator mode="card" screenOptions={{ headerShown: false }} >
        <stack.Screen name={routes.HOMEDEFAULT} component={HomeScreen} />
    </stack.Navigator>
  );
};

export default HomeStackNavigator;
