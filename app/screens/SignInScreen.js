import {StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Screen, Block, Typography, Button} from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import * as Yup from 'yup';
import {colors} from '../theme';
import routes from '../navigation/routes';
import Header from '../navigation/Header';

// API
import useAuth from '../auth/authHook';
import authApi from '../api/auth';

// Form Components
import { ErrorMessage, Form, FormInput, SubmitButton } from '../components/Form/index';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(6).label('Password')
});

const SignInScreen = () => {
  const navigation = useNavigation();
  const auth = useAuth();
  const [loginFailed, setloginFailed] = useState(false);

  const handleSubmit = async ({email, password}) => {
    setloginFailed(false);
    const result = await authApi.login(email, password);
    if (!result.ok) {return setloginFailed(result.data);}

    setloginFailed(false);
    auth.logIn(result.data);
};

  return (
    <Screen>
      <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
      <LinearGradient
        colors={[colors.secondary, colors.primary]}
        style={styles.linearBg}>
          <Header back/>
        <Block flex={0.5} center middle>
          <Typography bold white size={30}>
            Welcome to UBI!
          </Typography>
          <Typography bold white>
            Sign In
          </Typography>
        </Block>
        <Animatable.View animation="fadeInUpBig" style={styles.animationBlock}>
          <Form
              initialValues={{ email: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}>
              <ErrorMessage error={loginFailed} visible={loginFailed} />
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
                  name="password"
                  icon="lock-closed"
                  placeholder="Password"
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="password"
              />
              <SubmitButton title="SIGN IN" />
            </Form>
          <Block flex={false} style={styles.forgotBlock}>
            <Button white shadow onPress={() => navigation.navigate(routes.KEYVERIFY)}>
              <Typography black bold center body>SIGN UP</Typography>
            </Button>
            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate(routes.FORGOTPASSWORD)}>
              <Typography center primary bold size={12}>
              Forgot Password?
            </Typography>
            </TouchableOpacity>
          </Block>
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
    flex: 0.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 30
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
  label : {
    paddingLeft : 5,
    marginBottom : 0,
    fontSize : 13
  },
  forgotBlock : {
    flex : 1,
    justifyContent : 'center',
    paddingTop : 0
  },
  forgotButton : {
    width : '100%',
    height: 30,
    alignItems : 'center',
    justifyContent : 'center'
  }
});
