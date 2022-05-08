import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TripHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Trip History</Text>
    </View>
  );
};

export default TripHistoryScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
         justifyContent: 'center',
         alignItems : 'center'
    }
});
