/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, StatusBar, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Block, Typography, Loader, Message} from '../components/index';
import {colors} from '../theme';
import LinearGradient from 'react-native-linear-gradient';

// API
import paymentApi from '../api/payment';
import Header from '../navigation/Header';

const PaymentHistoryScreen = () => {
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);
  const [loadingError, setLoadingError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const getHistory = async () => {
    if (history.length > 0) {
      setRefreshing(true);
      setLoading(false);
    }
    if (history.length < 0) {
      setRefreshing(false);
      setLoading(true);
    }
    const result = await paymentApi.gethistory();

    if (result.ok) {
      setHistory(result.data);
      setLoading(false);
      setLoadingError(null);
    }

    if (result.problem) {
      console.log(result.data);
      setLoading(false);
      setLoadingError('Server Failed to Response!');
      return;
    }
    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <Block style={styles.scrollBlock}>
      <LinearGradient
        colors={[colors.secondary, colors.primary]}
        style={styles.linearBg}>
          <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
          <Header back />
          <Block style={styles.textBlock}>
            <Typography white title>Payment History</Typography>
          </Block>
      </LinearGradient>
      <Block style={styles.listBlock}>
        {loading ? (
          <Loader />
        ) : loadingError ? (
          <Message error={loadingError} visible={loadingError} />
        ) : (
          <>
            <FlatList
              data={history}
              keyExtractor={payment => payment._id.toString()}
              refreshing={refreshing}
              onRefresh={getHistory}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <Block style={styles.infoBlock}>
                  <Typography size={15} block bold>
                    {item.date}
                  </Typography>
                  <Typography size={15} block bold>
                    {item.time}
                  </Typography>
                  <Typography size={15} block bold>
                    {item.amount}
                  </Typography>
                  {item.status ? (
                    <Typography primary size={15} block bold>
                      Success
                    </Typography>
                  ) : (
                    <Typography accent size={15} block bold>
                      Pending
                    </Typography>
                  )}
                </Block>
              )}
              contentContainerStyle={styles.flatlist}
              ListEmptyComponent={
                <Block flex={1} center middle>
                  <Typography accent title>Emprty Payment History</Typography>
                </Block>
              }
            />
          </>
        )}
      </Block>
    </Block>
  );
};

export default PaymentHistoryScreen;

const styles = StyleSheet.create({
  linearBg: {
    flex: 0.2,
    padding: 0,
    marginBottom : 10
  },
  textBlock : {
    alignItems : 'center',
    justifyContent : 'center'
  },
  listBlock: {
    flex: 0.8,
    padding : 10
  },
  scrollBlock: {
    flex: 1,
    padding: 0
  },
  infoBlock: {
    flexDirection: 'row',
    padding: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    borderColor: colors.lightblack,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 15
  },
  flatlist: {
    flexGrow: 1
  }
});
