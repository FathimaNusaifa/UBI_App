import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const  ForgotPassword = () => {
    const navigation =  useNavigation();
  return (
    <View style={styles.container}>
      <Text>ForgotPassword</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems:'center',
        justifyContent : 'center'
    }
});
