import {StyleSheet, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Screen, Block, Typography, Button, TextBox} from '../components/index';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import * as Yup from 'yup';
import {colors} from '../theme';
import routes from '../navigation/routes';
import Header from '../navigation/Header';

// Form Components
import { ErrorMessage, Form, FormInput, SubmitButton } from '../components/Form/index';

// API
import verifyKeyApi from '../api/key';

const validationSchema = Yup.object().shape({
  key: Yup.string().required().min(6).label('Key')
});

const  ForgotPassword = () => {
  const [verifyFailed, setverifyFailed] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = async ({key}) => {
    setverifyFailed(false);
    const result = await verifyKeyApi.verifyKey(key);
    if (!result.ok) {return setverifyFailed(result.data);}

    setverifyFailed(false);
    navigation.navigate(routes.SIGNUP, {id : result.data._id});
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
            <Typography bold black>
            Welcome...!
            </Typography>
            <Typography light size={15}>
            PAY YOUR INSURANCE BILLS WITH US
            </Typography>
            <Typography primary bold size={13}>
            Reduce your car insurance bills by up to 30%.
            </Typography>
        <Form
              initialValues={{ key: ''}}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}>
              <ErrorMessage error={verifyFailed} visible={verifyFailed} />
              <FormInput
                  name="key"
                  icon="key"
                  placeholder="Verification Key"
                  phone
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="telephoneNumber"
              />
              <SubmitButton title="VERIFY" />
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
  label : {
    paddingLeft : 5,
    marginBottom : 0,
    fontSize : 13
  }
});
