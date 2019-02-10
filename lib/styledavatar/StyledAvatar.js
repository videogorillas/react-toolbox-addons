'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StyledAvatar = exports.StyledAvatarFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _avatar = require('react-toolbox/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var StyledAvatar = function StyledAvatar(_ref) {
    var _classnames;

    var accent = _ref.accent,
        primary = _ref.primary,
        theme = _ref.theme,
        className = _ref.className,
        other = _objectWithoutProperties(_ref, ['accent', 'primary', 'theme', 'className']);

    var classes = (0, _classnames3.default)(theme.styledavatar, (_classnames = {}, _defineProperty(_classnames, theme.accent, accent), _defineProperty(_classnames, theme.primary, primary), _classnames), className);
    return _react2.default.createElement(_avatar2.default, _extends({}, other, { className: classes, theme: theme }));
};
StyledAvatar.propTypes = {
    /**
     * set to make background color accent
     * Boolean accent
     */
    accent: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    /**
     * set to make background color primary
     * Boolean primary
     */
    primary: _propTypes2.default.bool,
    theme: _propTypes2.default.object
};
var factory = function factory() {
    return StyledAvatar;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.STYLEDAVATAR)(StyledAvatar);
exports.StyledAvatarFactory = factory;
exports.StyledAvatar = StyledAvatar;