import {StyleSheet, StatusBar, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {Screen, Block} from '../components/index';
import {colors} from '../theme';
import Header from '../navigation/Header';
import routes from '../navigation/routes';

const ProfileScreen = ({navigation}) => {
  return (
    <Screen>
      <StatusBar backgroundColor={colors.white} barStyle="light-content" />
      <Header title="Profile" header />
      <Block flex={1} style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.PERSONALINFO)}>
        <Text>Personal Info</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.VEHICLEINFO)}>
        <Text>Vehicle Info</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.PASSWORDCHANGE)}>
        <Text>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.DELETEACCOUNT)}>
        <Text>Delete Account</Text>
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
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom : 10
  }
});
