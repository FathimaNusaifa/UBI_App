import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import routes from '../navigation/routes';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
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
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container : {
      flex : 1,
       justifyContent: 'center',
       alignItems : 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom : 10
  }
});
