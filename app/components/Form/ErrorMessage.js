import React from 'react';
import {Typography} from '../index';

const ErrorMessage = (props) => {
    const { error, visible } = props;
    if (!visible || !error) {return null;}
    return (
        <Typography size={16} accent>
            {error}
        </Typography>
    );
};

export default ErrorMessage;
