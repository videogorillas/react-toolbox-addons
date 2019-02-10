'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardActionsRight = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by mitya on 8/23/16.
                                                                                                                                                                                                                                                                   */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _card = require('react-toolbox/lib/card');

var _theme = require('./theme.scss');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardActionsRight = function CardActionsRight(props) {
    return _react2.default.createElement(
        _card.CardActions,
        _extends({}, props, { theme: _theme2.default }),
        props.children
    );
};
CardActionsRight.propTypes = {
    children: _propTypes2.default.array
};
exports.default = CardActionsRight;
exports.CardActionsRight = CardActionsRight;