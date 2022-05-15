import {StyleSheet, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Screen, Block, Typography, Button, TextBox} from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../theme';
import routes from '../navigation/routes';

const  ForgotPassword = () => {
  const [key, setKey] = useState(null);
  const navigation = useNavigation();

  const handleVerification = () => {
    console.log(key);
    navigation.navigate(routes.SIGNUP);
  };

  return (
    <Screen>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <LinearGradient
        colors={[colors.secondary, colors.primary]}
        style={styles.linearBg}>
        <Animatable.View animation="zoomIn" style={styles.animationBlock}>
          <Block center>
            <Block white style={styles.logo}>
            <Typography black center bold size={25}>UBIA</Typography>
          </Block>
          </Block>
          <Block>
            <Typography black style={styles.label} >Enter Key</Typography>
            <TextBox
              icon="key"
              onChangeText={setKey}
              autoCapitalize="none"
              placeholder="Your key"
            />
            <Button gradient shadow onPress={() => handleVerification()}>
              <Typography center white bold size={15}>
                VERIFY
              </Typography>
            </Button>
            <Button white shadow onPress={() => navigation.goBack()}>
              <Typography center black bold size={15}>
                BACK
              </Typography>
            </Button>
          </Block>
        </Animatable.View>
      </LinearGradient>
    </Screen>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  linearBg: {
    flex: 1,
    paddingHorizontal : 10,
    justifyContent : 'center'
  },
  animationBlock: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius : 30,
    borderBottomRightRadius : 30,
    paddingVertical: 30,
    paddingHorizontal: 30
  },
  logo : {
    width : 200,
    height : 100,
    marginTop : -75,
    justifyContent : 'center',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100
  },
  label : {
    paddingLeft : 5,
    marginBottom : 0,
    fontSize : 13
  }
});
