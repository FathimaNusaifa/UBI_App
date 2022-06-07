import {StyleSheet} from 'react-native';
import React from 'react';
import {Block, Typography} from '../components/index';
import {colors, sizes} from '../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const Header = props => {
  const {title, header, back, label} = props;
  const navigation = useNavigation();

  if (header) {
    return (
      <Block flex={false} style={styles.header}>
        <Block style={styles.left}>
          <Ionicons
            name="menu"
            size={25}
            color={colors.lightblack}
            onPress={() => navigation.toggleDrawer()}
          />
        </Block>
        <Block style={styles.title}>
          <Typography h3 bold>
            {title}
          </Typography>
        </Block>
        <Block style={styles.right}>
          <FontAwesome name="sign-out" size={25} color={colors.lightblack} />
        </Block>
      </Block>
    );
  }

  if (back) {
    return (
      <Block flex={false} style={styles.headerBack}>
        <Block>
          <Ionicons
            name="ios-arrow-back-sharp"
            size={25}
            color={colors.lightblack}
            onPress={() => navigation.goBack()}
          />
        </Block>
      </Block>
    );
  }
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: sizes.radius,
    borderColor: colors.light,
    shadowColor: colors.black,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 1
  },
  left: {
    flex: 1,
    paddingLeft: 5,
    alignItems: 'flex-start'
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5
  },
  title: {
    flex: 1,
    alignItems: 'center'
  },
  headerBack: {
    backgroundColor: colors.white,
    justifyContent : 'center',
    alignItems: 'center',
    height: 50,
    width : 50,
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 25,
    shadowColor: colors.black,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 5
  }
});

// eslint-disable-next-line no-lone-blocks
{
  /* <Block flex={false} style={styles.header}>
        <Block style={styles.left}>
          <Ionicons
            name="ios-arrow-back-sharp"
            size={25}
            color={colors.lightblack}
            onPress={() => navigation.goBack()}
          />
        </Block>
        <Block style={styles.title}>
          <Typography h3 bold>
            {label}
          </Typography>
        </Block>
        <Block style={styles.right}>
          {null}
        </Block>
      </Block> */
}
