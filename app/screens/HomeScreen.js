import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Usage Based Insurance Application</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container : {
      flex : 1,
       justifyContent: 'center',
       alignItems : 'center'
  }
});
