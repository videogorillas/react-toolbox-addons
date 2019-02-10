import React from 'react';
import PropTypes from 'prop-types';
import {CardActions} from 'react-toolbox/lib/card';
import theme from './theme.scss';
import classnames from 'classnames';

const CardActionsSpaced = ({align, verticalAlign, fullheight, className, ...other}) => {
    const classes = classnames({[theme.fullheight]: fullheight}, theme[align], theme['align-' + verticalAlign], className);
    return (<CardActions {...other} theme={theme} className={classes}/>);
};
CardActionsSpaced.propTypes = {
    align: PropTypes.oneOf(['center', 'start', 'end', 'space-around', 'space-between']),
    children: PropTypes.node,
    className: PropTypes.string,
    fullheight: PropTypes.bool,
    verticalAlign: PropTypes.oneOf(['center', 'start', 'end'])
};
export default CardActionsSpaced;
