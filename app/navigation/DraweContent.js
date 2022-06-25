import { StyleSheet, Image } from 'react-native';
import React from 'react';

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import {Block, Typography} from '../components/index';
import { colors } from '../theme/colors';
import {useNavigation} from '@react-navigation/native';

const DraweContent = (props) => {
    const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
        <Block flex={false} style={styles.headercontainer}>
            <Block>
                <Image style={styles.profilePicture} source={require('../assets/public/profile.jpg')}/>
            </Block>
            <Typography bold>John Wick</Typography>
        </Block>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  );
};

export default DraweContent;

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    headercontainer : {
        height : 200,
        backgroundColor : colors.white,
        alignItems : 'center',
        justifyContent : 'center'
        // borderBottomColor : colors.light,
        // borderBottomWidth : StyleSheet.hairlineWidth
    },
    profilePicture: {
        width: 150,
        height: 150,
        borderRadius : 75,
        marginBottom : 10
    },
    bottomNavbar : {
        height : 50,
        position : 'absolute'
    }
});
