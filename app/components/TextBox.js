import { StyleSheet, TextInput, View, Platform } from 'react-native';
import React from 'react';
import {colors, sizes} from '../theme/index';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TextBox = (props) => {
    const { icon, email, phone, number, ...otherprops } = props;

    const inputType =
        email ? 'email-address'
            : number ? 'numeric'
                : phone
                    ? 'phone-pad'
                    : 'default';

    return (
        <View style={styles.block}>
            <TextInput
                placeholderTextColor={colors.light}
                style={styles.input}
                keyboardType={inputType}
                {...otherprops}
            />
            {icon && (
                <Ionicons
                    name={icon}
                    size={20}
                    color={colors.lightblack}
                    style={styles.icon}
                />
            )}
        </View>
    );
};

export default TextBox;

const styles = StyleSheet.create({
    block: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.light,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height : 45,
        marginVertical: 7
    },
    icon: {
        marginLeft: 10
    },
    input: {
        width : '90%',
        color: colors.black,
        fontSize: sizes.font,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    }
});
