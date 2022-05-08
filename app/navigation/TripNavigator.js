import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TripHistoryScreen from '../screens/TripHistory';

const stack = createNativeStackNavigator();
const TripNavigator = () => {
  return (
    <stack.Navigator mode="card" screenOptions={{ headerShown: false }} >
        <stack.Screen name="TripHistoryStack" component={TripHistoryScreen} />
    </stack.Navigator>
  );
};

export default TripNavigator;
