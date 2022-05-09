import { StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Screen,
  Block,
  Typography,
  Button
} from '../components/index';
import routes from '../navigation/routes';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = (route) => {
    navigation.navigate(route);
  };

  return (
    <Screen>
      <Block flex={1} column >
        <Block flex={5}  primary middle style ={styles.block}>
          <Typography size={35}  white bold transform="uppercase">Usage</Typography>
          <Typography size={35}  white bold transform="uppercase">Based</Typography>
          <Typography size={35}  white bold transform="uppercase">Insurance</Typography>
          <Typography size={35}  white bold transform="uppercase">Application</Typography>
        </Block>
        <Block flex={1} center row style={styles.buttonsBlock}>
          <Button white shadow onPress={() => handleNavigation(routes.SIGNIN)} style={styles.button} >
            <Typography center black bold>SIGN IN</Typography>
          </Button>
          <Button primary shadow onPress={() => handleNavigation(routes.SIGNUP)} style={styles.button} >
            <Typography center white bold>SIGN UP</Typography>
          </Button>
        </Block>
      </Block>
    </Screen>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  buttonsBlock:{
    paddingLeft : 10,
    paddingRight : 10,
    justifyContent : 'space-between'
  },
    block : {
        paddingLeft : 50
    },
    button: {
      flex : 0.47
    }
});


// eslint-disable-next-line no-lone-blocks
{/* <View style={styles.container}>
      <Text>WelcomeScreen</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('KeyVerify')}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View> */}
