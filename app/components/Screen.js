/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView } from 'react-native';
import React from 'react';
import { useHeaderHeight } from '@react-navigation/elements';

const Screen = (props) => {
    const {
        children,
        style
    } = props;

    const statusBarHeight = useHeaderHeight();

  return (
    <SafeAreaView style={{ flex : 1, paddingTop:statusBarHeight, style}}>
        {children}
    </SafeAreaView>
  );
};

export default Screen;
