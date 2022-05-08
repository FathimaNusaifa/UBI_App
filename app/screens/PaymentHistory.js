import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PaymentHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PaymentHistory</Text>
    </View>
  );
};

export default PaymentHistoryScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
         justifyContent: 'center',
         alignItems : 'center'
    }
});
