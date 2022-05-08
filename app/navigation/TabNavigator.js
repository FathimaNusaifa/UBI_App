import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStackNavigator from './HomeStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';
import { colors } from '../theme/colors';
import ProfileNavigator from './ProfileNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel : false,
      tabBarActiveTintColor : colors.primary,
      tabBarActiveBackgroundColor : colors.white,
      tabBarInactiveTintColor : colors.black,
      tabBarInactiveBackgroundColor : colors.white
    }}>
      <Tab.Screen
      name="Home"
      component={HomeStackNavigator}
      options={{
          tabBarIcon : ({color,size}) => (
              <Icon name="home" size={size} color={color}/>
          ),
          headerShown : false
      }} />
      <Tab.Screen
      name="Profile"
      component={ProfileNavigator}
      options={{
        tabBarIcon : ({color,size}) => (
            <MaterialCommunityIcons name="account" size={size} color={color}/>
        ),
        headerShown:false
    }} />
      <Tab.Screen
      name="Settings"
      component={SettingsStackNavigator}
      options={{
        tabBarIcon : ({color,size}) => (
            <Feather name="settings" size={size} color={color}/>
        ),
        headerShown : false
    }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
