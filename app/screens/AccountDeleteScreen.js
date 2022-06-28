import { StyleSheet, StatusBar, Alert } from 'react-native';
import React, {useState} from 'react';
import {Screen, Block, Loader, Typography, Button} from '../components/index';
import {colors} from '../theme/index';

// API
import authApi from '../api/auth';
import useAuth from '../auth/authHook';

const AccountDeleteScreen = () => {
  const [loading, setLoading] = useState(false);
  const auth = useAuth();

  const handleDelete = async () => {
    setLoading(true);

    const result = await authApi.deleteAccount();

    if (result.problem) {
      Alert.alert('Failed!');
      console.log(result);
      setLoading(false);
    }

    if (result.ok) {
      Alert.alert('Account Succesfully Deleted!');
      setLoading(false);
      auth.logOut();
    }
  }
  return (
    <Screen>
      <StatusBar backgroundColor={colors.white} barStyle="light-content" />
      {
        loading ? (
          <Loader/>
        ) : (
          <Block flex={1} middle>
            <Block style={styles.contentBlock}>
            <Block>
              <Typography accent center bold>Caution</Typography>
              <Typography black center bold>By Deleting this account you won't be able to use this account!</Typography>
              <Typography black center bold>Click below button to Proceed!</Typography>
            </Block>
            <Block>
            <Button
              accent
              onPress={handleDelete}
            >
            <Typography center white body bold>Delete Account</Typography>
        </Button>
            </Block>
          </Block>
          </Block>
        )
      }
    </Screen>
  );
};

export default  AccountDeleteScreen;

const styles = StyleSheet.create({
    contentBlock : {
        height : 250,
        justifyContent : 'center',
        padding : 20
    }
});
