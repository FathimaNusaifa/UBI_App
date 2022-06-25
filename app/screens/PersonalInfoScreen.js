import { StyleSheet, StatusBar, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import {Screen, Block, Typography } from '../components/index';
import {colors} from '../theme/index';

// Form Components
import { ErrorMessage, Form, FormInput, SubmitButton, FormRadio as RadioButton } from '../components/Form/index';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().min(3).label('First Name'),
  lastName: Yup.string().min(3).label('Last Name'),
  userName: Yup.string().min(3).label('User Name'),
  email: Yup.string().email().label('Email'),
  phone: Yup.string().min(3).label('Phone'),
  address: Yup.string().label('Address'),
  gender: Yup.boolean().required()
});

const PersonalInfoScreen = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const [loadingError, setLoadingError] = useState(null);

  const handleUpdate = async (userinfo) => {
    console.log(userinfo);
  };

  const getUserInfo = async () => {
    setLoading(true);
    //const result = await usersApi.getUserInfo();

    const data = {
      firstName :'Fathima Nusaifa',
      lastName : 'Noushad Mohammed',
      userName : 'Nusaifa',
      address : '233/2 ABC Road, Kandy',
      phone : '075 - 8965321',
      gender : false
    };

    setProfile(data);


    // if (!result.problem) {
    //     setProfile(result.data);
    //     setLoading(false);
    //     setLoadingError(null);
    // }

    // if (!result.ok) {
    //     setLoading(false);
    //     setLoadingError('Server Failed to Response!');
    //     return;
    // }
}

    useEffect(() => {
      getUserInfo();
    }, []);
  return (
    <Screen>
      <StatusBar backgroundColor={colors.white} barStyle="light-content" />
      <Block flex={1} column style={styles.mainBlock}>
        <Typography primary body> Edit fields and click Update profile!</Typography>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Form
              initialValues={{
                firstName : profile.firstName,
                lastName : profile.lastName,
                userName : profile.userName,
                address : profile.address,
                phone : profile.phone,
                gender : profile.gender
              }}
              validationSchema={validationSchema}
              onSubmit={handleUpdate}>
              <ErrorMessage error={error} visible={error} />
              <FormInput
                  name="firstName"
                  icon="person"
                  placeholder={profile.firstName}
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="username"
              />
              <FormInput
                  name="lastName"
                  icon="person"
                  placeholder={profile.lastName}
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="username"
              />
              <FormInput
                  name="userName"
                  icon="person"
                  placeholder={profile.userName}
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
              <RadioButton
                  name="gender"
              />
              <SubmitButton title="UPDATE PROFILE" />
            </Form>
          </ScrollView>
      </Block>
    </Screen>
  );
};

export default  PersonalInfoScreen;

const styles = StyleSheet.create({
  mainBlock : {
    paddingLeft : 15,
    paddingRight : 15
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
