import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-toolbox/lib/button';
import theme from './theme.scss';

const ButtonOutline = (props) => {

    return (
        <Button {...props} theme={theme}/>
    );
};
ButtonOutline.propTypes = {
    props: PropTypes.object
};

export {ButtonOutline};
