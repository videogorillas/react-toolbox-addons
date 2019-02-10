/**
 * Created by mitya on 8/23/16.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {CardActions} from 'react-toolbox/lib/card';
import theme from './theme.scss';

const CardActionsRight = (props) => (
    <CardActions {...props} theme={theme}>
        {props.children}
    </CardActions>
);
CardActionsRight.propTypes = {
    children: PropTypes.array
};
export default CardActionsRight;
export {CardActionsRight as CardActionsRight};
