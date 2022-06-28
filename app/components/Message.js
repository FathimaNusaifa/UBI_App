import React from 'react';
import {
    StyleSheet
} from 'react-native';


// Components
import {Block, Typography} from './index';

const Loader = (props) => {
    const { error, visible } = props;
    if (!visible || !error) {return null;}

    return (
        <Block style={styles.errorBlock}>
            <Typography title accent>
                {error}
            </Typography>
        </Block>
    );
};
export default Loader;

const styles = StyleSheet.create({
    errorBlock: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
