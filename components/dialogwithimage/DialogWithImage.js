import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'react-toolbox/lib/dialog';
import {themr} from 'react-css-themr';
import {DIALOGWITHIMAGE} from '../identifiers';
import theme from './theme.scss';

const factory = () => {
    class DialogWithImage extends Dialog {

        static propTypes = {
            /**
             * Sets color for background rectangle.
             */
            background: PropTypes.string,
            /**
             * Path to image capture.
             */
            imageCapture: PropTypes.string
        };

        render () {
            const {children, background, imageCapture, ...other} = this.props;
            return (
                <Dialog {...other}
                    theme={theme}>
                    {children}
                    <div className={theme.imageCapture} style={{background}}>
                        <img src={imageCapture}/>
                    </div>
                </Dialog>
            );
        }
    }
    return DialogWithImage;
};

const DialogwithImage = factory();
export default themr(DIALOGWITHIMAGE)(DialogwithImage);
export {factory as dialogImageFactory};
export {DialogwithImage};
