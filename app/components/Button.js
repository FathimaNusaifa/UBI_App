import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {colors, sizes} from '../theme/index';
import LinearGradient from 'react-native-linear-gradient';

const Button = props => {
  const {
    style,
    opacity,
    shadow,
    border,
    gradient,
    primary,
    accent,
    white,
    onPress,
    children,
    ...otherProps
  } = props;

  const buttonStyles = [
    styles.button,
    shadow && styles.shadow,
    primary && styles.primary,
    accent && styles.accent,
    white && styles.white,
    style
  ];

  if (gradient) {
    return (
      <LinearGradient colors={[colors.secondary, colors.primary]} style={buttonStyles}>
        <TouchableOpacity
          {...otherProps}
          activeOpacity={opacity}
          onPress={onPress}>
          {children}
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  if (border) {
    return (
      <TouchableOpacity
        style={styles.borderbutton}
        {...otherProps}
        activeOpacity={opacity}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
  if (white) {
    return (
      <TouchableOpacity
        style={buttonStyles}
        {...otherProps}
        activeOpacity={opacity}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
  if (primary) {
    return (
      <TouchableOpacity
        style={buttonStyles}
        {...otherProps}
        activeOpacity={opacity}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
  if (accent) {
    return (
      <TouchableOpacity
        style={buttonStyles}
        {...otherProps}
        activeOpacity={opacity}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

Button.prototypes = {
  onPress: PropTypes.func.isRequired
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: sizes.radius,
    height: 50,
    justifyContent: 'center',
    marginVertical: 8
  },
  borderbutton: {
    borBerRadius: sizes.radius,
    height: 50,
    justifyContent: 'center',
    marginVertical: 8,
    borderColor: colors.primary,
    borderWidth: 1,
    backgroundColor: colors.white,
    shadowColor: colors.lightblack,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 1
  },
  shadow: {
    shadowColor: colors.lightblack,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 1
  },
  primary: {backgroundColor: colors.primary},
  accent: {backgroundColor: colors.accent},
  white: {backgroundColor: colors.white}
});
