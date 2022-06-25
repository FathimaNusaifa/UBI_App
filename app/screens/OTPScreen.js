import {StyleSheet, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Screen, Block } from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import * as Yup from 'yup';
import {colors} from '../theme';
import routes from '../navigation/routes';
import Header from '../navigation/Header';

// Form Components
import { ErrorMessage, Form, FormInput, SubmitButton } from '../components/Form/index';

const validationSchema = Yup.object().shape({
  otp: Yup.string().required().min(6).label('OTP')
});

const  ForgotPassword = () => {
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  const handleReset = async ({otp}) => {
    console.log(otp);
    navigation.navigate(routes.RESETPASSSCREEN);

  };

  return (
    <Screen>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <LinearGradient
        colors={[colors.secondary, colors.primary]}
        style={styles.linearBg}>
          <Block flex={1}>
            <Header back/>
          </Block>
        <Animatable.View animation="fadeInUpBig" style={styles.animationBlock}>
        <Form
              initialValues={{ otp: ''}}
              validationSchema={validationSchema}
              onSubmit={handleReset}>
              <ErrorMessage error={error} visible={error} />
              <FormInput
                  name="otp"
                  icon="ios-keypad"
                  placeholder="OTP Code"
                  phone
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="telephoneNumber"
              />
              <SubmitButton title="PROCEED" />
            </Form>
        </Animatable.View>
        <Block flex={1} />
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
