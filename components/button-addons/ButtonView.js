import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-toolbox/lib/button';
import theme from './theme.scss';

const ButtonView = (props) => {
    const ICON_VISIBILITY = 'visibility';

    return (
        <Button {...props} neutral={false} icon={ICON_VISIBILITY} theme={theme}/>
    );
};
ButtonView.propTypes = {
    props: PropTypes.object
};

export {ButtonView};
