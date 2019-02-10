'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Banner = exports.bannerFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssThemr = require('react-css-themr');

var _card = require('react-toolbox/lib/card');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _identifiers = require('../identifiers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Banner props extend CardMedia props
 */
var Banner = function Banner(_ref) {
    var _classnames;

    var children = _ref.children,
        className = _ref.className,
        theme = _ref.theme,
        primary = _ref.primary,
        accent = _ref.accent,
        opacity = _ref.opacity,
        other = _objectWithoutProperties(_ref, ['children', 'className', 'theme', 'primary', 'accent', 'opacity']);

    var classes = (0, _classnames3.default)(theme.banner, (_classnames = {}, _defineProperty(_classnames, theme.primary, primary), _defineProperty(_classnames, theme.accent, accent), _defineProperty(_classnames, theme['opacity-' + opacity], opacity), _classnames), className);

    return _react2.default.createElement(
        _card.CardMedia,
        _extends({}, other, { className: classes, theme: theme }),
        children
    );
};
Banner.propTypes = {
    /**
     * add for item to have accent background color
     * Boolean accent
     */
    accent: _propTypes2.default.bool,
    aspectRatio: _propTypes2.default.oneOf(['wide', 'square']),
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    color: _propTypes2.default.string,
    contentOverlay: _propTypes2.default.bool,
    image: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    /**
     * integer from 0 to 10 to set opacity to the background
     * Integer opacity
     */
    opacity: _propTypes2.default.number,
    /**
     * add for item to have primary background color
     * Boolean primary
     */
    primary: _propTypes2.default.bool,
    theme: _propTypes2.default.shape({
        cardMedia: _propTypes2.default.string,
        content: _propTypes2.default.string,
        contentOverlay: _propTypes2.default.string,
        square: _propTypes2.default.string,
        wide: _propTypes2.default.string
    })
};

var factory = function factory() {
    return Banner;
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.BANNER)(Banner);
exports.bannerFactory = factory;
exports.Banner = Banner;