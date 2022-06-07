import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';
import PersonalInfoScreen from '../screens/PersonalInfoScreen';
import VehicleInfoScreen from '../screens/VehicleInfoScreen';
import PasswordChangeScreen from '../screens/PasswordChangeScreen';
import AccountDeleteScreen from '../screens/AccountDeleteScreen';
import routes from './routes';

const stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <stack.Navigator mode="modal" screenOptions={{ headerShown: false }} >
        <stack.Screen name={routes.PROFILEHOME} component={ProfileScreen}/>
        <stack.Screen name={routes.PERSONALINFO} component={PersonalInfoScreen}  />
        <stack.Screen name={routes.VEHICLEINFO} component={VehicleInfoScreen} />
        <stack.Screen name={routes.PASSWORDCHANGE} component={PasswordChangeScreen} />
        <stack.Screen name={routes.DELETEACCOUNT} component={AccountDeleteScreen} />
    </stack.Navigator>
  );
};

export default ProfileNavigator;
