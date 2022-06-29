import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
  Image
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {Block, Loader, Typography} from '../components/index';
import {colors} from '../theme';
import Header from '../navigation/Header';
import routes from '../navigation/routes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// API
import authApi from '../api/auth';

const ProfileScreen = ({navigation}) => {
  const scrollView = useRef();
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
    <Block flex={1}>
      <StatusBar backgroundColor={colors.white} barStyle="light-content" />
      <Header title="Profile" header />
      <Block flex={1} style={styles.container}>
        <ScrollView
          ref={scrollView}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollview}>
          <Block flex={false}>
            <Block flex={false} center middle style={styles.imageActionBlock}>
              {!loading ? (
                <>
                  <Block flex={false} center middle style={styles.imageBlock}>
                    <TouchableOpacity>
                      <Image
                        style={styles.profilePic}
                        resizeMode="cover"
                        source={require('../assets/public/new-profile.png')}
                      />
                    </TouchableOpacity>
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
              ) : (
                <Loader />
              )}
            </Block>
          </Block>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(routes.PERSONALINFO)}>
            <Text>Personal Info</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={30}
              color={colors.lightblack}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(routes.VEHICLEINFO)}>
            <Text>Vehicle Info</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={30}
              color={colors.lightblack}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(routes.PASSWORDCHANGE)}>
            <Text>Change Password</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={30}
              color={colors.lightblack}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(routes.DELETEACCOUNT)}>
            <Text>Delete Account</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={30}
              color={colors.lightblack}
            />
          </TouchableOpacity>
        </ScrollView>
      </Block>
    </Block>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  scrollview: {
    flex: 1
  },
  button: {
    height: 55,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    borderRadius: 13.75
  },
  loadingBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageActionBlock: {
    height: 260,
    marginBottom: 10
  },
  imageBlock: {
    height: 180,
    width: 180,
    borderRadius: 90,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.light,
    marginBottom: 10,
    marginTop : 10
  },
  profilePic: {
    height: 180,
    width: 180,
    borderRadius: 90
  }
});
