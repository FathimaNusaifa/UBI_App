import {StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import React, {useState, useEffect} from 'react';
import { Block, Typography, Loader, Message } from '../components/index';
import {colors} from '../theme';
import LinearGradient from 'react-native-linear-gradient';

// API
import policyApi from '../api/policy';
import Header from '../navigation/Header';

const PolicyDetailsScreen = () => {
  const [loading, setLoading] = useState(true);
  const [policy, setPolicy] = useState({});
  const [loadingError, setLoadingError] = useState(null);

  const getPolicyInfo = async () => {
    setLoading(true);
    const result = await policyApi.getInfo();

    setPolicy(result.data);


    if (!result.problem) {
        setPolicy(result.data);
        setLoading(false);
        setLoadingError(null);
    }

    if (!result.ok) {
      console.log(result.data);
        setLoading(false);
        setLoadingError('Server Failed to Response!');
        return;
    }
  };

  useEffect(() => {
    getPolicyInfo();
  }, []);

  return (
    <ScrollView style={styles.scrollBlock}>
      {
        loading ? (
          <Loader />
        ) : loadingError ? (
          <Message error={loadingError} visible={loadingError} />
        ) : (
          <>
          <LinearGradient
        colors={[colors.secondary, colors.primary]}
        style={styles.linearBg}>
          <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
          <Header back />
          <Block style={styles.textBlock}>
            <Typography white title>Policy Details</Typography>
          </Block>
      </LinearGradient>
      <Block style={styles.mainBlock}>
        <Block row style={styles.infoBlock}>
          <Typography dark  title>Policy Number</Typography>
          <Typography dark bold title>{policy.number}</Typography>
        </Block>
        <Block row style={styles.infoBlock}>
          <Typography dark  title>Date of Issue</Typography>
          <Typography dark bold title>{policy.dateOfIssue}</Typography>
        </Block>
        <Block row style={styles.infoBlock}>
          <Typography dark  title>Expiry Date</Typography>
          <Typography dark bold title>{policy.expiryDate}</Typography>
        </Block>
        <Block row style={styles.infoBlock}>
          <Typography dark  title>Covering Range</Typography>
          <Typography dark bold title>{policy.coveringRange}</Typography>
        </Block>
        <Block row style={styles.infoBlock}>
          <Typography dark  title>Value</Typography>
          <Typography dark bold title>{policy.policyValue}</Typography>
        </Block>
      </Block>
          </>
        )
      }
    </ScrollView>
  );
};

export default  PolicyDetailsScreen;

const styles = StyleSheet.create({
    scrollBlock: {
      flex : 1,
      padding: 0
  },
  linearBg: {
    height : 150,
    padding: 0,
    marginBottom : 10
  },
  textBlock : {
    alignItems : 'center',
    justifyContent : 'center'
  },
    mainBlock:{
      flex:8
    },
infoBlock: {
  justifyContent: 'space-between',
  marginTop: 10,
  paddingBottom: 15,
  padding : 10
}
});
