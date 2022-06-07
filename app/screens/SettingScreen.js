import {StyleSheet, StatusBar, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {Screen, Block} from '../components/index';
import {colors} from '../theme';
import Header from '../navigation/Header';
import routes from '../navigation/routes';

const SettingScreen = ({navigation}) => {
  return (
    <Screen>
      <StatusBar backgroundColor={colors.white} barStyle="light-content" />
      <Header title="Settings" header />
      <Block flex={1} style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.PRIVACYPOLICY)}>
        <Text>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.HELP)}>
        <Text>Help</Text>
      </TouchableOpacity>
      </Block>
    </Screen>
  );
};

export default SettingScreen;

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
