import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import {Block, Typography, Loader} from '../components/index';
import {colors} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';

// API
import authApi from '../api/auth';

const DraweContent = props => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});

  const getUserInfo = async () => {
    setLoading(true);
    const result = await authApi.getUserInfo();

    setProfile(result.data);


    if (!result.problem) {
        setProfile(result.data);
        setLoading(false);
    }

    if (!result.ok) {
      console.log(result.data);
        setLoading(false);
        return;
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <Block flex={false} style={styles.headercontainer}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Block>
              <Image
                style={styles.profilePicture}
                source={require('../assets/public/new-profile.png')}
              />
            </Block>
            <TouchableOpacity>
                    <Typography center bold dark title>
                      {profile.firstname}{' '}{profile.lastname}
                    </Typography>
                    <Typography center light body>
                      {profile.email}
                    </Typography>
                  </TouchableOpacity>
          </>
        )}
      </Block>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default DraweContent;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headercontainer: {
    height: 200,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center'
    // borderBottomColor : colors.light,
    // borderBottomWidth : StyleSheet.hairlineWidth
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10
  },
  bottomNavbar: {
    height: 50,
    position: 'absolute'
  }
});
