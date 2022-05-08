import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MessageScreen</Text>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
});
