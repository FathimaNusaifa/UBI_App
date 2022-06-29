/* eslint-disable no-unused-vars */
import {StyleSheet, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Screen, Block} from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import * as Yup from 'yup';
import {colors} from '../theme';
import routes from '../navigation/routes';
import Header from '../navigation/Header';

// Form Components
import { ErrorMessage, Form, FormInput, SubmitButton } from '../components/Form/index';

// API
import passwordApi from '../api/password';

const validationSchema = Yup.object().shape({
  password: Yup.string().required().min(6).label('Password').matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    'Password Not Strong'
  ) ,
  confirmPassword: Yup.string().required().label('ConfirmPassword').oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const  ResetPassScreen = ({route}) => {
  const email = route.params.email;
  const otp = route.params.otp;
  const [resetError, setResetError] = useState(false);
  const navigation = useNavigation();

  const handleReset = async ({ password}) => {
    setResetError(false);

    const info = {
      verificationKey : otp,
      email : email,
      newPassword : password
    };
    const result = await passwordApi.resetPassword(info);

    if (result.ok) {
      console.log(result.data);
      setResetError(false);
      navigation.navigate(routes.SIGNIN);
    }
    if (result.problem) {
      console.log(result.data);
      return setResetError(result.data);
    }

    setResetError(false);
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
              initialValues={{
                password: '',
                confirmPassword : ''
              }}
              validationSchema={validationSchema}
              onSubmit={handleReset}>
              <ErrorMessage error={resetError} visible={resetError} />
              <FormInput
                  name="password"
                  icon="lock-closed"
                  placeholder="Password"
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="password"
              />
              <FormInput
                  name="confirmPassword"
                  icon="lock-closed-outline"
                  placeholder="Confirm Password"
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="password"
              />
              <SubmitButton title="RESET PASSWORD" />
            </Form>
        </Animatable.View>
        <Block flex={1} />
      </LinearGradient>
    </Screen>
  );
};

export default ResetPassScreen;

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
