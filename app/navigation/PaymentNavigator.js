import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import PaymentHistoryScreen from '../screens/PaymentHistory';
import routes from './routes';

const stack = createNativeStackNavigator();

const PaymentNavigator = () => {
  return (
    <stack.Navigator mode="card" screenOptions={{ headerShown: false }} >
        <stack.Screen name={routes.PAYMENTHOME} component={PaymentHistoryScreen} />
    </stack.Navigator>
  );
};

export default PaymentNavigator;
