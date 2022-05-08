import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
//import { createDrawerNavigator,  DrawerContentScrollView,DrawerItemList, DrawerItem, useDrawerProgress } from '@react-navigation/drawer';
//import Animated from 'react-native-reanimated';
import PolicyDetailsScreen from '../screens/PolicyDetails';
import MessageScreen from '../screens/MessageScreen';
import NotoficationScreen from '../screens/NotoficationScreen';
import PaymentNavigator from './PaymentNavigator';
import TabNavigator from './TabNavigator';
import TripNavigator from './TripNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import routes from './routes';
import { colors } from '../theme/colors';

const Drawer = createDrawerNavigator();

/* function CustomDrawerContent(props) {
  const progress = useDrawerProgress();

  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0]
  });

  return (
    <DrawerContentScrollView {...props}>
      <Animated.View style={{ transform: [{ translateX }] }}>
        <DrawerItemList {...props} />
        <DrawerItem label="Trip" onPress={() => console.log(props.navigation.navigate('TripHistoryStack'))} />
      </Animated.View>
    </DrawerContentScrollView>
  );
} */
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="home" screenOptions={{
      headerShown : false,
      drawerType: 'slide',
      drawerActiveTintColor : colors.primary,
      drawerActiveBackgroundColor : colors.white,
      drawerInactiveTintColor : colors.black,
      drawerInactiveBackgroundColor : colors.white
    }}
    //useLegacyImplementation
      //drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
        <Drawer.Screen name={routes.UBIAPP} component={TabNavigator} options={{
          drawerIcon : ({color,size}) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
        )
        }} />
        <Drawer.Screen name={routes.PAYMENTHISTORY} component={PaymentNavigator} options={{
          drawerIcon : ({color,size}) => (
            <FontAwesome5 name="cc-amazon-pay" size={size} color={color} />
        )
        }} />
        <Drawer.Screen name={routes.TRIPHISTORY} component={TripNavigator} options={{
          drawerIcon : ({color,size}) =>(
            <FontAwesome5 name="car" size={size} color={color} />
        )
        }} />
        <Drawer.Screen name={routes.POLICYDETAILS} component={PolicyDetailsScreen} options={{
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
