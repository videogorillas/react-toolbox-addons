import React from 'react';
import PropTypes from 'prop-types';
import Input from 'react-toolbox/lib/input';
import {themr} from 'react-css-themr';
import {DISABLED_INPUT} from '../identifiers.js';

const factory = () => {
    const DisabledInput = ({label, value, theme, ...other})=> {
        return (
            <Input {...other} type='text' label={label} name={label} value={value} disabled theme={theme}/>
        );
    };

    DisabledInput.propTypes = {
        label: PropTypes.string,
        theme: PropTypes.object,
        value: PropTypes.string
    };

    return DisabledInput;
};
const DisabledInput = factory();
export default themr(DISABLED_INPUT)(DisabledInput);
export {factory as disabledInputFactory};
export {DisabledInput};
