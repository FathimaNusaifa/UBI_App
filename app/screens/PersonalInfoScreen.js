import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {Screen, Block, Typography} from '../components/index';
import {colors} from '../theme';
import Header from '../navigation/Header';

const PersonalInfoScreen = () => {
  return (
    <Screen>
      <StatusBar backgroundColor={colors.white} barStyle="light-content" />
      <Header back label="Profile" />
      <Block flex={1} style={styles.container}>
        <Typography>
          Profile info screen
        </Typography>
      </Block>
    </Screen>
  );
};

export default  PersonalInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center'
  }
});
