import { useFormikContext } from 'formik';
import React from 'react';

// Components
import {Button, Typography} from '../index';

const SubmitButton = (props) => {
    const { handleSubmit } = useFormikContext();
    const { title } = props;
    return (
        <Button
            gradient
            onPress={handleSubmit}
        >
            <Typography center white body bold>{title}</Typography>
        </Button>
    );
};
export default SubmitButton;
