import { StyleSheet, Text, Platform } from 'react-native';
import React from 'react';
import {colors, sizes} from '../theme/index';

const Typography = (props) => {
    const {
        h1,
        h2,
        h3,
        title,
        body,
        caption,
        small,
        size,
        transform,
        align,
        bold,
        regular,
        semibold,
        medium,
        center,
        right,
        color,
        accent,
        primary,
        secondary,
        tertiary,
        black,
        white,
        dark,
        light,
        style,
        children,
        ...otherProps
    } = props;

    const textStyles = [
        styles.text,
        transform && { textTransform: transform },
        align && { textAlign: align },
        bold && styles.bold,
        regular && styles.regular,
        semibold && styles.semibold,
        medium && styles.medium,
        right && styles.right,
        center && styles.center,
        accent && styles.accent,
        primary && styles.primary,
        secondary && styles.secondary,
        tertiary && styles.tertiary,
        black && styles.black,
        white && styles.white,
        dark && styles.dark,
        light && styles.light,
        h1 && styles.h1,
        h2 && styles.h2,
        h3 && styles.h3,
        title && styles.title,
        body && styles.body,
        caption && styles.caption,
        small && styles.small,
        size && { fontSize: size },
        style
    ];

  return (
      <Text style={textStyles} {...otherProps}>
          {children}
      </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({
    // default style
    text: {
        fontSize: sizes.h3,
        color: colors.black,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    },
    // variations
    regular: {
        fontWeight: 'normal'
    },
    bold: {
        fontWeight: 'bold'
    },
    semibold: {
        fontWeight: '500'
    },
    medium: {
        fontWeight: '500'
    },
    // position
    center: { textAlign: 'center' },
    right: { textAlign: 'right' },
    // colors
    accent: { color: colors.accent },
    primary: { color: colors.primary },
    secondary: { color: colors.secondary },
    tertiary: { color: colors.tertiary },
    black: { color: colors.black },
    white: { color: colors.white },
    dark: { color: colors.dark },
    light: { color: colors.light },
    // sizes
    h1: sizes.h1,
    h2: sizes.h2,
    h3: sizes.h3,
    title: sizes.title,
    body: sizes.body,
    caption: sizes.caption
});
