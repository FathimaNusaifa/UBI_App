import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import KeyVerifyScreen from '../screens/KeyVerifyScreen';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassScreen from '../screens/ResetPassScreen';
import OTPScreen from '../screens/OTPScreen';
import routes from './routes';

const Stack = createNativeStackNavigator();

const Authnavigator = () => (
    <Stack.Navigator mode="modal" initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.WELCOME} component={WelcomeScreen}  />
        <Stack.Screen name={routes.SIGNIN} component={SignInScreen}  />
        <Stack.Screen name={routes.KEYVERIFY} component={KeyVerifyScreen}  />
        <Stack.Screen name={routes.SIGNUP} component={SignUpScreen}  />
        <Stack.Screen name={routes.FORGOTPASSWORD} component={ForgotPassword}  />
        <Stack.Screen name={routes.OTPSCREEN} component={OTPScreen}  />
        <Stack.Screen name={routes.RESETPASSSCREEN} component={ResetPassScreen}  />
    </Stack.Navigator>
);

export default Authnavigator;
