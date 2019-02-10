'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StyledDropdown = exports.styledDropdownFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dropdown = require('react-toolbox/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _reactCssThemr = require('react-css-themr');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * StyledDropdown props extend Dropdown props
 */
var StyledDropdown = function StyledDropdown(_ref) {
    var _classnames;

    var theme = _ref.theme,
        className = _ref.className,
        primary = _ref.primary,
        collapse = _ref.collapse,
        black = _ref.black,
        align = _ref.align,
        other = _objectWithoutProperties(_ref, ['theme', 'className', 'primary', 'collapse', 'black', 'align']);

    var classes = (0, _classnames3.default)(theme.dropdown_styled, (_classnames = {}, _defineProperty(_classnames, theme.primary, primary), _defineProperty(_classnames, theme.collapse, collapse), _defineProperty(_classnames, theme.black, black), _defineProperty(_classnames, theme[align], align), _classnames), className);
    return _react2.default.createElement(_dropdown2.default, _extends({ className: classes }, other, { theme: theme }));
};

StyledDropdown.propTypes = {
    /**
     * set to align text of selected item
     * one of ['right', 'center']
     * String align
     */
    align: _propTypes2.default.oneOf(['right', 'center']),
    black: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    /**
     * set to remove top and bottom padding
     * Boolean collapse
     */
    collapse: _propTypes2.default.bool,
    /**
     * set color of selected item text to primary
     * Boolean primary
     */
    primary: _propTypes2.default.bool,
    theme: _propTypes2.default.shape({
        active: _propTypes2.default.string,
        disabled: _propTypes2.default.string,
        dropdown: _propTypes2.default.string,
        error: _propTypes2.default.string,
        errored: _propTypes2.default.string,
        field: _propTypes2.default.string,
        label: _propTypes2.default.string,
        selected: _propTypes2.default.string,
        templateValue: _propTypes2.default.string,
        up: _propTypes2.default.string,
        value: _propTypes2.default.string,
        values: _propTypes2.default.string
    })
};

var factory = function factory() {
    return StyledDropdown;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.STYLED_DROPDOWN)(StyledDropdown);
exports.styledDropdownFactory = factory;
exports.StyledDropdown = StyledDropdown;