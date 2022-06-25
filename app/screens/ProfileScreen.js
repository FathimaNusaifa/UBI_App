import {StyleSheet, StatusBar, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {Screen, Block} from '../components/index';
import {colors} from '../theme';
import Header from '../navigation/Header';
import routes from '../navigation/routes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = ({navigation}) => {
  return (
    <Screen>
      <StatusBar backgroundColor={colors.white} barStyle="light-content" />
      <Header title="Profile" header />
      <Block flex={1} style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.PERSONALINFO)}>
        <Text>Personal Info</Text>
        <MaterialIcons name="arrow-forward-ios" size={30} color={colors.lightblack} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.VEHICLEINFO)}>
        <Text>Vehicle Info</Text>
        <MaterialIcons name="arrow-forward-ios" size={30} color={colors.lightblack} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.PASSWORDCHANGE)}>
        <Text>Change Password</Text>
        <MaterialIcons name="arrow-forward-ios" size={30} color={colors.lightblack} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.DELETEACCOUNT)}>
        <Text>Delete Account</Text>
        <MaterialIcons name="arrow-forward-ios" size={30} color={colors.lightblack} />
      </TouchableOpacity>
      </Block>
    </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container : {
      flex : 1,
      padding : 10
  },
  button: {
    height : 55,
    alignItems : 'center',
    flexDirection : 'row',
    backgroundColor: '#f2f2f2',
    justifyContent : 'space-between',
    padding: 10,
    marginBottom : 10,
    borderRadius : 13.75
  }
});
