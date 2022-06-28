import { StyleSheet, StatusBar, Alert } from 'react-native';
import React, {useState} from 'react';
import {Screen, Block, Loader} from '../components/index';
import {colors} from '../theme/index';

// Form Components
import {
  ErrorMessage,
  Form,
  FormInput,
  SubmitButton
} from '../components/Form/index';
import * as Yup from 'yup';

// API
import authApi from '../api/auth';

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required().min(6).label('Current Password').matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    'Password Not Strong'
  ) ,
  newPassword: Yup.string().required().min(6).label('New Password').matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    'Password Not Strong'
  ) ,
  confirmPassword: Yup.string().required().label('Confirm Password').oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
});

const PasswordChangeScreen = () => {
  const [updateFailed, setUpdateFailed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);
    setUpdateFailed(false);
    const info = {
      currentPassword: formData.currentPassword,
      newPassword: formData.newPassword
    };

    const result = await authApi.changePassword(info);

    if (result.problem) {
      setUpdateFailed(result.data);
      setLoading(false);
      Alert.alert('Password Change Failed! Try Again!');
      console.log(result);
    }

    if (result.ok) {
      setLoading(false);
      Alert.alert('Password Updated Succesfully!');
    }
  };

  return (
    <Screen>
      <StatusBar backgroundColor={colors.white} barStyle="light-content" />
      {
        loading ? (
          <Loader/>
        ) : (
          <Block flex={1} column style={styles.mainBlock}>
            <Form
              initialValues={{ currentPassword: '', newPassword: '', confirmPassword : '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}>
              <ErrorMessage error={updateFailed} visible={updateFailed} />
              <FormInput
                  name="currentPassword"
                  icon="lock-closed"
                  placeholder="Current Password"
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="password"
              />
              <FormInput
                  name="newPassword"
                  icon="lock-closed-outline"
                  placeholder="New Password"
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
              <SubmitButton title="CHANGE PASSWORD" />
            </Form>
      </Block>
        )
      }
    </Screen>
  );
};

export default  PasswordChangeScreen;

const styles = StyleSheet.create({
  mainBlock : {
        paddingLeft : 15,
        paddingRight : 15
    },
    label: {
      paddingLeft: 5,
      marginBottom: 0,
      fontSize: 13
    }
});
