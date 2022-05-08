import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import routes from '../navigation/routes';

const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.PRIVACYPOLICY)}>
        <Text>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.HELP)}>
        <Text>Help</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;

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
