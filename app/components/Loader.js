import React from 'react';
import {
    StyleSheet,
    ActivityIndicator
} from 'react-native';


// Components
import Block from './Block';
import { colors } from '../theme/index';

const Loader = () => (
    <Block style={styles.loadingBlock}>
        <ActivityIndicator size="large" color={colors.primary} />
    </Block>
);
export default Loader;

const styles = StyleSheet.create({
    loadingBlock: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
