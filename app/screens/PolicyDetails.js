import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PolicyDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PolicyDetailsScreen</Text>
    </View>
  );
};

export default PolicyDetailsScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
         justifyContent: 'center',
         alignItems : 'center'
    }
});
