import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const KeyVerifyScreen = () => {
    const navigation =  useNavigation();

  return (
    <View style={styles.container}>
      <Text>KeyVerifyScreen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
        <Text>Verify</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default KeyVerifyScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 10,
        justifyContent : 'center'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    }
});
