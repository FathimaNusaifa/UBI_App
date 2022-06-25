import {StyleSheet, StatusBar, TouchableOpacity, Text, Switch} from 'react-native';
import React, {useState} from 'react';
import {Screen, Block} from '../components/index';
import {colors} from '../theme';
import Header from '../navigation/Header';
import routes from '../navigation/routes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SettingScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Screen>
      <StatusBar backgroundColor={colors.white} barStyle="light-content" />
      <Header title="Settings" header />
      <Block flex={1} style={styles.container}>
        <Block flex={false} style={styles.button}>
        <Text>Dark Mode</Text>
        <Switch
        trackColor={{ false: colors.light, true: colors.primary }}
        thumbColor={isEnabled ? colors.primary : colors.lightblack}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        </Block>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.HELP)}>
        <Text>About</Text>
        <MaterialIcons name="arrow-forward-ios" size={30} color={colors.lightblack} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.HELP)}>
        <Text>Help</Text>
        <MaterialIcons name="arrow-forward-ios" size={30} color={colors.lightblack} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.PRIVACYPOLICY)}>
        <Text>Privacy Policy</Text>
        <MaterialIcons name="arrow-forward-ios" size={30} color={colors.lightblack} />
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
  height : 55,
  alignItems : 'center',
  flexDirection : 'row',
  backgroundColor: '#f2f2f2',
  justifyContent : 'space-between',
  padding: 10,
  marginBottom : 10,
  borderRadius : 13.75
},
switchContainer: {
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
