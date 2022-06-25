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
        <stack.Screen name={routes.PERSONALINFO} component={PersonalInfoScreen} options = {{headerShown : true , title:'Personal Info'}}  />
        <stack.Screen name={routes.VEHICLEINFO} component={VehicleInfoScreen} options = {{headerShown : true , title:'Vehicle Info'}} />
        <stack.Screen name={routes.PASSWORDCHANGE} component={PasswordChangeScreen} options = {{headerShown : true , title:'Change Password'}} />
        <stack.Screen name={routes.DELETEACCOUNT} component={AccountDeleteScreen} options = {{headerShown : true , title:'Delete Account'}} />
    </stack.Navigator>
  );
};

export default ProfileNavigator;
