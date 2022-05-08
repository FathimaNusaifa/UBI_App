import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('KeyVerify')}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      marginBottom : 10
    }
});
