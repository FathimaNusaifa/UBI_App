import {StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import React from 'react';
import { Block, Typography } from '../components/index';
import {colors} from '../theme';

const VehicleInfoScreen = () => {
  return (
    <ScrollView style={styles.scrollBlock}>
      <StatusBar backgroundColor={colors.white} barStyle="light-content" />
      <Block flex={1} center>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={require('../assets/public/vehicle.jpg')}
    />
      </Block>
      <Block column>
        <Block row style={styles.infoBlock}>
          <Typography dark  title>Owner's Name</Typography>
          <Typography dark bold title>John Wick</Typography>
        </Block>
        <Block row style={styles.infoBlock}>
          <Typography dark  title>Brand</Typography>
          <Typography dark bold title>Toyota</Typography>
        </Block>
        <Block row style={styles.infoBlock}>
          <Typography dark  title>Category</Typography>
          <Typography dark bold title>SUV</Typography>
        </Block>
        <Block row style={styles.infoBlock}>
          <Typography dark  title>Model</Typography>
          <Typography dark bold title>CH-R</Typography>
        </Block>
        <Block row style={styles.infoBlock}>
          <Typography dark  title>Year</Typography>
          <Typography dark bold title>2018</Typography>
        </Block>
        <Block row style={styles.infoBlock}>
          <Typography dark  title>Chassis No</Typography>
          <Typography dark bold title>SV30-0169266</Typography>
        </Block>
      </Block>
    </ScrollView>
  );
};

export default  VehicleInfoScreen;

const styles = StyleSheet.create({
    container : {
      flex: 1
    },
    block:{
      flex:1
    },
    scrollBlock: {
      padding: 10
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100
},
infoBlock: {
  justifyContent: 'space-between',
  marginTop: 10,
  paddingBottom: 15
}
});
