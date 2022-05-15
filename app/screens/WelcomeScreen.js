import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Screen, Block, Typography, Button} from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import routes from '../navigation/routes';
import {colors} from '../theme';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = route => {
    navigation.navigate(route);
  };

  return (
    <Screen>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <LinearGradient colors={[colors.secondary, colors.primary]} style={styles.linearBg}>
        <Block flex={3} middle style={styles.block}>
          <Typography size={35} white bold transform="uppercase">
            Distance
          </Typography>
          <Typography size={35} white bold transform="uppercase">
            Based
          </Typography>
          <Typography size={35} white bold transform="uppercase">
            Insurance
          </Typography>
          <Typography size={35} white bold transform="uppercase">
            Application
          </Typography>
        </Block>
        <Animatable.View animation="fadeInUpBig" style={styles.animationBlock}>
          <Typography size={20} light bold center>
            Welcome to DBI Application!
          </Typography>
          {/* <Typography size={14} light bold center>
            Every One
          </Typography> */}
          <Block flex={1} center row style={styles.buttonsBlock}>
            <Button
              gradient
              shadow
              onPress={() => handleNavigation(routes.SIGNIN)}
              style={styles.button}>
              <Typography center white bold>
                SIGN IN
              </Typography>
            </Button>
            <Button
              white
              shadow
              onPress={() => handleNavigation(routes.KEYVERIFY)}
              style={styles.button}>
              <Typography center black bold>
                SIGN UP
              </Typography>
            </Button>
          </Block>
        </Animatable.View>
      </LinearGradient>
    </Screen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  linearBg : {
    flex : 1
  },
  mainBlock: {
    backgroundColor: colors.primary
  },
  animationBlock: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 30
  },
  buttonsBlock: {
    justifyContent: 'space-between'
  },
  block: {
    paddingLeft: 50
  },
  button: {
    flex: 0.47
  }
});

// eslint-disable-next-line no-lone-blocks
{
  /* <View style={styles.container}>
      <Text>WelcomeScreen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('KeyVerify')}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View> */
}
