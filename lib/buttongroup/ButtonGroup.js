'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ButtonGroup = exports.buttonGroupFactory = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssThemr = require('react-css-themr');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _identifiers = require('../identifiers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * ButtonGroup - wrapper for buttons or inputs with buttons
 */
var ButtonGroup = function ButtonGroup(_ref) {
    var children = _ref.children,
        className = _ref.className,
        white = _ref.white,
        theme = _ref.theme,
        align = _ref.align;

    var classes = (0, _classnames3.default)(theme.buttonGroup, _defineProperty({}, theme.white, white), theme[align], className);
    return _react2.default.createElement(
        'div',
        { className: classes },
        children
    );
};
ButtonGroup.propTypes = {
    align: _propTypes2.default.oneOf(['center', 'start', 'end']),
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    theme: _propTypes2.default.shape({
        buttonGroup: _propTypes2.default.string,
        white: _propTypes2.default.string
    }),
    /**
     * sets color of containing buttons to white
     * Boolean white
     */
    white: _propTypes2.default.bool
};

var factory = function factory() {
    return ButtonGroup;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.BUTTON_GROUP)(ButtonGroup);
exports.buttonGroupFactory = factory;
exports.ButtonGroup = ButtonGroup;