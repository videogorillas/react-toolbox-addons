import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-toolbox/lib/button';
import {CARDTITLEBUTTONS} from '../identifiers';
import {themr} from 'react-css-themr';
import classnames from 'classnames';

import {
    CSS_CARD_TITLE_BUTTONS_WRAPPER
} from './constants';

const factory = () => {
    const CardTitleButtons = ({buttons = [], center, theme, className, ...other}) => {
        const classes = classnames({[theme.center]: center}, theme[CSS_CARD_TITLE_BUTTONS_WRAPPER], className);
        return (
            <div className={classes} {...other}>
                {buttons.map((btn, index)=>{
                    return <Button floating mini key={index} theme={theme} {...btn}/>;
                })}
            </div>
        );
    };

    CardTitleButtons.propTypes = {
        buttons: PropTypes.array.isRequired,
        center: PropTypes.bool,
        className: PropTypes.string,
        theme: PropTypes.object
    };
    return CardTitleButtons;
};
const CardTitleButtons = factory();
export default themr(CARDTITLEBUTTONS)(CardTitleButtons);
export {factory as cardTitleButtonsFactory};
export {CardTitleButtons};
