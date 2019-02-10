import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DialogPanel = ({children, className, theme, ...other}) => {
    const classes = classnames(theme.dialogPanel, className);
    return (
        <div className={classes} {...other}>{children}</div>
    );
};
DialogPanel.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    theme: PropTypes.object
};

export default DialogPanel;
