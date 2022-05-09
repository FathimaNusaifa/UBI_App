import { StyleSheet, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {colors, sizes} from '../theme/index';

const Block = (props) => {
    const {
        flex,
        white,
        row,
        column,
        center,
        middle,
        left,
        right,
        top,
        bottom,
        card,
        shadow,
        primary,
        accent,
        secondary,
        style,
        children,
        ...otherProps
    } = props;

    const blockStyles = [
        flex && { flex },
        flex === false && { flex: 0 }, // reset / disable flex
        white && styles.white,
        primary && styles.primary,
        secondary && styles.secondary,
        accent && styles.accent,
        row && styles.row,
        column && styles.column,
        center && styles.center,
        middle && styles.middle,
        left && styles.left,
        right && styles.right,
        top && styles.top,
        bottom && styles.bottom,
        card && styles.card,
        shadow && styles.shadow,
        style
    ];
  return (
    <View style={blockStyles} {...otherProps}>
      {children}
    </View>
  );
};

Block.prototypes = {
    flex : PropTypes.number.isRequired,
    primary : PropTypes.string
};

export default Block;

const styles = StyleSheet.create({
    block: {
        flex: 1
    },
    row: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column'
    },
    card: {
        borderRadius: sizes.radius
    },
    center: {
        alignItems: 'center'
    },
    middle: {
        justifyContent: 'center'
    },
    left: {
        justifyContent: 'flex-start'
    },
    right: {
        justifyContent: 'flex-end'
    },
    top: {
        justifyContent: 'flex-start'
    },
    bottom: {
        justifyContent: 'flex-end'
    },
    shadow: {
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 13,
        elevation: 2
    },
    accent: { backgroundColor: colors.accent },
    primary: { backgroundColor: colors.primary },
    secondary: { backgroundColor: colors.secondary },
    white: { backgroundColor: colors.white }
});
