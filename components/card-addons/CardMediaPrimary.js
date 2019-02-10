import React from 'react';
import PropTypes from 'prop-types';
import {CardMedia} from 'react-toolbox/lib/card';
import classnames from 'classnames';

const CardMediaPrimary = ({children, className, theme, overflow, ...other}) => {
    const classes = classnames({[theme.overflow]: overflow}, className);
    return (
        <CardMedia {...other} theme={theme} className={classes}>
            {children}
        </CardMedia>
    );
};
CardMediaPrimary.propTypes = {
    aspectRatio: PropTypes.oneOf(['wide', 'square']),
    children: PropTypes.any,
    className: PropTypes.string,
    color: PropTypes.string,
    contentOverlay: PropTypes.bool,
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    overflow: PropTypes.bool,
    theme: PropTypes.shape({
        cardMedia: PropTypes.string,
        content: PropTypes.string,
        contentOverlay: PropTypes.string,
        square: PropTypes.string,
        wide: PropTypes.string
    })
};

export {CardMediaPrimary};
export default CardMediaPrimary;
