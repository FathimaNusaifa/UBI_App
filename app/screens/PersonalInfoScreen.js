import {StyleSheet, StatusBar, ScrollView, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Screen, Block, Typography, Loader, Message} from '../components/index';
import {colors} from '../theme/index';

// Form Components
import {
  ErrorMessage,
  Form,
  FormInput,
  SubmitButton,
  FormRadio as RadioButton
} from '../components/Form/index';
import * as Yup from 'yup';

// API
import authApi from '../api/auth';

const validationSchema = Yup.object().shape({
  firstname: Yup.string().min(3).label('First Name'),
  lastname: Yup.string().min(3).label('Last Name'),
  username: Yup.string().min(3).label('User Name'),
  email: Yup.string().email().label('Email'),
  phone: Yup.string().min(3).label('Phone'),
  address: Yup.string().label('Address'),
  gender: Yup.boolean()
});

const PersonalInfoScreen = () => {
  const [updateError, setUpdateError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const [loadingError, setLoadingError] = useState(null);

  const handleSubmit = async (formData) => {
    setUpdateError(false);
    const info = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      username: formData.username,
      address: formData.address,
      phone: formData.phone,
      gender: formData.gender
    };

    const result = await authApi.updateUser(info);

    if (result.problem) {
      setUpdateError(result.data);
      Alert.alert('Update Failed! Try Again!');
      console.log(result);
    }

    if (result.ok) {
      setProfile(result.data);
      Alert.alert('Profile Updated Succesfully!');
      getUserInfo();
    }
  };

  const getUserInfo = async () => {
    setUpdateError(false);
    setLoading(true);
    const result = await authApi.getUserInfo();

    setProfile(result.data);


    if (!result.problem) {
        setProfile(result.data);
        setLoading(false);
        setLoadingError(null);
    }

    if (!result.ok) {
        setLoading(false);
        setLoadingError('Server Failed to Response!');
        return;
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Screen>
      <StatusBar backgroundColor={colors.white} barStyle="light-content" />
      {loading ? (
        <Loader />
      ) : loadingError ? (
        <Message error={loadingError} visible={loadingError} />
      ) : (
        <Block flex={1} column style={styles.mainBlock}>
          <Typography primary body>
            Edit fields and click Update profile!
          </Typography>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Form
              initialValues={{
                firstname: profile.firstname,
                lastname: profile.lastname,
                username: profile.username,
                address: profile.address,
                phone: profile.phone,
                gender: profile.gender
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}>
              <ErrorMessage error={updateError} visible={updateError} />
              <FormInput
                name="firstName"
                icon="person"
                placeholder={profile.firstname}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="username"
              />
              <FormInput
                name="lastName"
                icon="person"
                placeholder={profile.lastname}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="username"
              />
              <FormInput
                name="userName"
                icon="person"
                placeholder={profile.username}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="username"
              />
              <FormInput
                name="phone"
                icon="phone-portrait-sharp"
                number
                placeholder={profile.phone}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="telephoneNumber"
              />
              <FormInput
                name="address"
                icon="ios-logo-playstation"
                placeholder={profile.address}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="streetAddressLine1"
              />
              <RadioButton name="gender" />
              <SubmitButton title="UPDATE PROFILE" />
            </Form>
          </ScrollView>
        </Block>
      )}
    </Screen>
  );
};

export default PersonalInfoScreen;

const styles = StyleSheet.create({
  mainBlock: {
    paddingLeft: 15,
    paddingRight: 15
  },
  label: {
    paddingLeft: 5,
    marginBottom: 0,
    fontSize: 13
  },
  genderblock: {
    justifyContent: 'space-between',
    marginVertical: 10
  }
});
