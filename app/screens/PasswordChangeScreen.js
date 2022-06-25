import { StyleSheet, StatusBar } from 'react-native';
import React, {useState} from 'react';
import {Screen, Block, Typography, Button, TextBox} from '../components/index';
import {colors} from '../theme/index';

const PasswordChangeScreen = () => {
  const [password, setPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmPassword, setconfirmPassword] = useState(null);

  const handleChange = () => {
    console.log(password, newPassword, confirmPassword);
  };

  return (
    <Screen>
      <StatusBar backgroundColor={colors.white} barStyle="light-content" />
      <Block flex={1} column style={styles.mainBlock}>
            <Typography black style={styles.label}>
              Password
            </Typography>
            <TextBox
              onChangeText={setPassword}
              autoCapitalize="none"
              placeholder="Enter password"
              secureTextEntry
            />
            <Typography black style={styles.label}>
              New Password
            </Typography>
            <TextBox
              onChangeText={setNewPassword}
              autoCapitalize="none"
              placeholder="Enter password"
              secureTextEntry
            />
            <Typography black style={styles.label}>
              Conform Password
            </Typography>
            <TextBox
              onChangeText={setconfirmPassword}
              autoCapitalize="none"
              placeholder="Confirm password"
              secureTextEntry
            />
            <Button primary shadow onPress={() => handleChange()}>
              <Typography center white bold size={15}>
                CONFIRM
              </Typography>
            </Button>
      </Block>
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
