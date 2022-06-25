/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import RadioForm, { RadioButtonInput, RadioButton as Button, RadioButtonLabel } from 'react-native-simple-radio-button';

//Imports
import { colors } from '../theme/index';

let genderProps = [
    { label: 'Male', value: true },
    { label: 'Female', value: false }
];

const RadioButton = (props) => {
    const {
        selectedGender,
        onSelect
    } = props;
    return (
        <View style={styles.radioContainer}>
            <RadioForm
                formHorizontal={true}
                animation={false}
            >
                {
                    genderProps.map((gender, i) => (
                        <Button labelHorizontal={true} key={i} style={{ marginRight: 90, marginLeft: 15}} >
                            <RadioButtonInput
                                obj={gender}
                                index={i}
                                isSelected={selectedGender === gender.value}
                                onPress={() => {
                                    onSelect(gender.value);
                                }}
                                borderWidth={1}
                                buttonInnerColor={colors.primary}
                                buttonOuterColor={colors.secondary}
                                buttonSize={10}
                                buttonOuterSize={20}
                                buttonStyle={{}}
                                buttonWrapStyle={styles.buttonWrapper}
                            />
                            <RadioButtonLabel
                                obj={gender}
                                index={i}
                                labelHorizontal={true}
                                onPress={() => {
                                    onSelect(gender.value);
                                }}
                                labelStyle={{ fontSize: 17, color: selectedGender === gender.value ? colors.black : colors.light }}
                                labelWrapStyle={styles.labelWrapper}
                            />
                        </Button>
                    ))
                }
            </RadioForm>
        </View>
    );
};

export default RadioButton;

const styles = StyleSheet.create({
    radioContainer: {
        flex: 1,
        paddingLeft: 0,
        paddingBottom: 10,
        paddingTop : 19,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.light
    },
    buttonWrapper: {
        alignItems: 'center'
    },
    labelWrapper: {
        justifyContent: 'center',
        marginRight: 10
    }
});
