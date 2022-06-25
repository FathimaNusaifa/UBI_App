import { Formik } from 'formik';
import React from 'react';

const Form = (props) => {
    const { initialValues, validationSchema, onSubmit, children } = props;
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {() => <>{children}</>}
        </Formik>
    );
};

export default Form;
