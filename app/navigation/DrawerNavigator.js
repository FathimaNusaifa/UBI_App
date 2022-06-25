import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PolicyDetailsScreen from '../screens/PolicyDetails';
import MessageScreen from '../screens/MessageScreen';
import NotoficationScreen from '../screens/NotoficationScreen';
import PaymentNavigator from './PaymentNavigator';
import TabNavigator from './TabNavigator';
import TripNavigator from './TripNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import routes from './routes';
import { colors } from '../theme/colors';
import DraweContent from '../navigation/DraweContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="home" screenOptions={({navigation}) => ({
      headerShown : false,
      drawerType: 'slide',
      drawerActiveTintColor : colors.primary,
      drawerActiveBackgroundColor : colors.white,
      drawerInactiveTintColor : colors.black,
      drawerInactiveBackgroundColor : colors.white
    })}
      useLegacyImplementation
      drawerContent={(props) => <DraweContent {...props} />}
    >
        <Drawer.Screen name={routes.UBIAPP} component={TabNavigator} options={{
          drawerIcon : ({color,size}) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
        )
        }} />
        <Drawer.Screen name={'Payment History'} component={PaymentNavigator} options={{
          drawerIcon : ({color,size}) => (
            <FontAwesome5 name="cc-amazon-pay" size={size} color={color} />
        )
        }} />
        <Drawer.Screen name={'Trip History'}  component={TripNavigator} options={{
          drawerIcon : ({color,size}) =>(
            <FontAwesome5 name="car" size={size} color={color} />
        )
        }} />
        <Drawer.Screen name={'Policy Details'}  component={PolicyDetailsScreen} options={{
          drawerIcon : ({color,size}) => (
            <FontAwesome5 name="file-powerpoint" size={size + 5} color={color} />
        )
        }} />
        <Drawer.Screen name={routes.MESSAGES} component={MessageScreen} options={{
          drawerIcon : ({color,size}) => (
            <MaterialCommunityIcons name="android-messages" size={size} color={color} />
        )
        }} />
        <Drawer.Screen name={routes.NOTIFICATIONS} component={NotoficationScreen} options={{
          drawerIcon : ({color,size}) => (
            <MaterialIcons name="notifications" size={size} color={color} />
        )
        }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500'
  },
  headerRight: {
    marginRight: 15
  },
  // drawer content
  drawerLabel: {
    fontSize: 14
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500'
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center'
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490'
  }
});
