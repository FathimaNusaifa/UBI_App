import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SettingScreen from '../screens/SettingScreen';
import PrivacyScreen from '../screens/PrivacyScreen';
import HelpScreen from '../screens/HelpScreen';
import routes from './routes';
import AboutScreen from '../screens/AboutScreen';

const stack = createNativeStackNavigator();

const SettingsStackNavigator = () => {
  return (
    <stack.Navigator mode="card" screenOptions={{ headerShown: false }} >
        <stack.Screen name="SettingHome" component={SettingScreen} />
        <stack.Screen name={routes.PRIVACYPOLICY} component={PrivacyScreen} options = {{headerShown : true , title:'Privacy Policy'}} />
        <stack.Screen name={routes.HELP} component={HelpScreen} options = {{headerShown : true , title:'Help'}}  />
        <stack.Screen name={routes.ABOUT} component={AboutScreen} options = {{headerShown : true , title:'About Us'}}  />
    </stack.Navigator>
  );
};

export default SettingsStackNavigator;
