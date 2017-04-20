import React from 'react';
import classnames from 'classnames';
import {themr} from 'react-css-themr';
import {BOTTOMSHEET} from '../identifiers.js';
import InjectOverlay from 'react-toolbox/lib/overlay/Overlay.js';
import InjectIconButton from 'react-toolbox/lib/button/IconButton.js';
import {BottomSheet} from '../bottomsheet/BottomSheet';

const factory = (Overlay) => {
    class BottomSheetPlus extends BottomSheet {
        constructor (props) {
            super(props);
        }

        renderVisibleContent (header) {
            const {theme} = this.props;
            return (
                <div className={theme.bottomsheet_plus__header}>{header}</div>
            );
        }

        render () {
            const {theme, children, className, active, style, visibleBody} = this.props;

            const header = Array.isArray(children) ? children[0] : null;
            const content = Array.isArray(children) ? children.slice(1) : children;

            const _className = classnames({
                [theme.active]: active,
                [theme.visibleBody]: visibleBody
            }, theme.bottomsheet_plus__item);
            const classes = classnames(theme.bottomsheet_plus, className);

            return (
                <div data-react-toolbox='bottomsheetplus' className={classes} style={style}>
                    {this.renderVisibleContent(header)}
                    <div className={_className}>
                        <div className={theme.bottomsheet_plus__children}>
                            {content}
                        </div>
                    </div>
                </div>);
        }


    }

    return BottomSheetPlus;
};

const BottomSheetPlus = factory(InjectOverlay, InjectIconButton);
export default themr(BOTTOMSHEET)(BottomSheetPlus);
export {factory as bottomsheetFactory};
export {BottomSheetPlus};
