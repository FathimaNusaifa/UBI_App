import {StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import React, {useState, useEffect} from 'react';
import { Block, Typography, Loader, Message } from '../components/index';
import {colors} from '../theme';

// API
import vehiclesApi from '../api/vehicle';

const VehicleInfoScreen = () => {
  const [loading, setLoading] = useState(true);
  const [vehicle, setVehicle] = useState({});
  const [loadingError, setLoadingError] = useState(null);

  const getVehicleInfo = async () => {
    setLoading(true);
    const result = await vehiclesApi.getInfo();

    setVehicle(result.data);


    if (!result.problem) {
        setVehicle(result.data);
        setLoading(false);
        setLoadingError(null);
    }

    if (!result.ok) {
        setLoading(false);
        setLoadingError('Server Failed to Response!');
        return;
    }
  };

  useEffect(() => {
    getVehicleInfo();
  }, []);

  return (
    <ScrollView style={styles.scrollBlock}>
      <StatusBar backgroundColor={colors.white} barStyle="light-content" />
      {
        loading ? (
          <Loader />
        ) : loadingError ? (
          <Message error={loadingError} visible={loadingError} />
        ) : (
          <>
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
          <Typography dark bold title>{vehicle.name}</Typography>
        </Block>
        <Block row style={styles.infoBlock}>
          <Typography dark  title>Brand</Typography>
          <Typography dark bold title>{vehicle.brand}</Typography>
        </Block>
        <Block row style={styles.infoBlock}>
          <Typography dark  title>Category</Typography>
          <Typography dark bold title>{vehicle.category}</Typography>
        </Block>
        <Block row style={styles.infoBlock}>
          <Typography dark  title>Model</Typography>
          <Typography dark bold title>{vehicle.model}</Typography>
        </Block>
        <Block row style={styles.infoBlock}>
          <Typography dark  title>Year</Typography>
          <Typography dark bold title>{vehicle.year}</Typography>
        </Block>
        <Block row style={styles.infoBlock}>
          <Typography dark  title>Chassis No</Typography>
          <Typography dark bold title>{vehicle.chassisNo}</Typography>
        </Block>
      </Block>
          </>
        )
      }
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
