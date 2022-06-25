import { useFormikContext } from 'formik';
import React from 'react';

//
import {TextBox} from '../index';
import ErrorMessage from './ErrorMessage';

const FormInput = (props) => {
    const { handleChange, setFieldTouched, errors, touched } = useFormikContext();

    const { name, ...otherProps } = props;
    return (
        <>
            <TextBox
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
};

export default FormInput;
