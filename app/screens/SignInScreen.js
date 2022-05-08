import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const navigation =  useNavigation();

  return (
    <View style={styles.container}>
      <Text>SignInScreen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ForgotPassword')}>
        <Text>Forgot Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    }
});
