'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputGroup = exports.InputGroupFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var InputGroup = function InputGroup(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      shadow = _ref.shadow,
      rightIcon = _ref.rightIcon,
      theme = _ref.theme,
      accent = _ref.accent,
      primary = _ref.primary,
      white = _ref.white,
      other = _objectWithoutProperties(_ref, ['children', 'className', 'shadow', 'rightIcon', 'theme', 'accent', 'primary', 'white']);

  var classes = (0, _classnames3.default)(theme.inputgroup, (_classnames = {}, _defineProperty(_classnames, theme.accent, accent), _defineProperty(_classnames, theme.primary, primary), _defineProperty(_classnames, theme.rightIcon, rightIcon), _defineProperty(_classnames, theme.shadow, shadow), _defineProperty(_classnames, theme.white, white), _classnames), className);
  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, other, { 'data-react-toolbox': 'inputgroup' }),
    children
  );
};
InputGroup.propTypes = {
  /**
   * set accent text color to all children
   * Boolean accent
   */
  accent: _propTypes2.default.bool,
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  /**
   * set primary text color to all children
   * Boolean primary
   */
  primary: _propTypes2.default.bool,
  /**
   * set to place any font icon to the right inside the preceding input
   * Boolean rightIcon
   */
  rightIcon: _propTypes2.default.bool,
  /**
   * set to add bottom shadow to the input group
   * Boolean shadow
   */
  shadow: _propTypes2.default.bool,
  theme: _propTypes2.default.shape({
    inputgroup: _propTypes2.default.string,
    rightIcon: _propTypes2.default.string,
    shadow: _propTypes2.default.string
  }),
  /**
   * set white text color to all children
   * Boolean white
   */
  white: _propTypes2.default.bool
};
var factory = function factory() {
  return InputGroup;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.INPUTGROUP)(InputGroup);
exports.InputGroupFactory = factory;
exports.InputGroup = InputGroup;