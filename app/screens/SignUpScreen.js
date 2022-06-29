/* eslint-disable no-unused-vars */
import {StyleSheet, ScrollView, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {Screen, Block, Typography, Button } from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import * as Yup from 'yup';
import {colors} from '../theme/index';
import Header from '../navigation/Header';
import {useNavigation} from '@react-navigation/native';
import routes from '../navigation/routes';

// API
import useAuth from '../auth/authHook';
import authApi from '../api/auth';
import verifyKeyApi from '../api/key';

// Form Components
import { ErrorMessage, Form, FormInput, SubmitButton } from '../components/Form/index';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  name: Yup.string().required().min(3).label('Name'),
  nic: Yup.string().required().min(10).max(12).label('Nic').matches(/^([0-9]{9}[x|X|v|V]|[0-9]{12})$/),
  phone: Yup.string().required().min(3).label('Phone'),
  password: Yup.string().required().min(6).label('Password').matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    'Type Strong Password!'
  ) ,
  confirmPassword: Yup.string().required().label('ConfirmPassword').oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const SignInScreen = ({route}) => {
  const id = route.params.id;
  const [signUpError, setSignUpError] = useState();
  const auth = useAuth();
  const navigation = useNavigation();

  const handleSignUp = async (formData) => {
    setSignUpError(false);
    const verification = await verifyKeyApi.updateKey({verificationToken : id});
    if (!verification.ok) {return setSignUpError(verification.data);}

    const info = {
      username : formData.name,
      email : formData.email,
      password : formData.password,
      nic : formData.nic,
      phone : formData.phone
    };

    const result = await authApi.register(info);
    if (!result.ok) {
        if (result.data) {setSignUpError(result.data);}
        else {
            setSignUpError('An unexpected error occurred.');
            console.log(result);
        }
        return;
    }

    if (result.ok) {
        const loginResult = await authApi.login(info.email, info.password);
        auth.logIn(loginResult.data);
    }
  };

  return (
    <Screen>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <LinearGradient
        colors={[colors.secondary, colors.primary]}
        style={styles.linearBg}>
            <Header back/>
        <Block flex={0.2} center middle>
          <Typography bold white size={30}>
          Create Account
          </Typography>
          <Typography bold white>
          Sign up to get started!
          </Typography>
        </Block>
        <Animatable.View
          animation="fadeInUp"
          duration={2000}
          style={styles.animationBlock}>
          <ScrollView showsVerticalScrollIndicator={false}>
          <Form
              initialValues={{
                email: '',
                name : '',
                phone : '',
                nic : '',
                password: '',
                confirmPassword : ''
              }}
              validationSchema={validationSchema}
              onSubmit={handleSignUp}>
              <ErrorMessage error={signUpError} visible={signUpError} />
              <FormInput
                  name="email"
                  icon="mail"
                  placeholder="Email"
                  email
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="emailAddress"
              />
              <FormInput
                  name="name"
                  icon="person"
                  placeholder="Name"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="username"
              />
              <FormInput
                name="phone"
                icon="phone-portrait-sharp"
                number
                placeholder="Phone"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="telephoneNumber"
              />
              <FormInput
                  name="nic"
                  icon="pricetag"
                  placeholder="National Identity Card"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="username"
              />
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
              <SubmitButton title="SIGN UP" />
            </Form>
            <Typography center primary bold size={12}>
              Already have an Account?
            </Typography>
            <Button white shadow onPress={() => navigation.navigate(routes.SIGNIN)}>
              <Typography black bold center body>SIGN IN</Typography>
            </Button>
          </ScrollView>
        </Animatable.View>
      </LinearGradient>
    </Screen>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  linearBg: {
    flex: 1
  },
  animationBlock: {
    flex: 0.8,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  formBlock: {
    paddingLeft: 10,
    paddingRight: 10
  },
  headerBlock: {
    backgroundColor: 'red'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  label: {
    paddingLeft: 5,
    marginBottom: 0,
    fontSize: 13
  }
});
