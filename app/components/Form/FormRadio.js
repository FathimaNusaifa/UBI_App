import { useFormikContext } from 'formik';
import React from 'react';


//
import {RadioButton} from '../index';
import ErrorMessage from './ErrorMessage';

const FormRadio = (props) => {
    const { name } = props;
    const { errors, setFieldValue, touched, values } = useFormikContext();
    return (
        <>
            <RadioButton
                selectedGender={values[name]}
                onSelect={(value) => setFieldValue(name, value)}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
};

export default FormRadio;
