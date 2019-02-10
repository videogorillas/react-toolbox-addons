'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardMediaPrimary = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _card = require('react-toolbox/lib/card');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CardMediaPrimary = function CardMediaPrimary(_ref) {
    var children = _ref.children,
        className = _ref.className,
        theme = _ref.theme,
        overflow = _ref.overflow,
        other = _objectWithoutProperties(_ref, ['children', 'className', 'theme', 'overflow']);

    var classes = (0, _classnames3.default)(_defineProperty({}, theme.overflow, overflow), className);
    return _react2.default.createElement(
        _card.CardMedia,
        _extends({}, other, { theme: theme, className: classes }),
        children
    );
};
CardMediaPrimary.propTypes = {
    aspectRatio: _propTypes2.default.oneOf(['wide', 'square']),
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    color: _propTypes2.default.string,
    contentOverlay: _propTypes2.default.bool,
    image: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    overflow: _propTypes2.default.bool,
    theme: _propTypes2.default.shape({
        cardMedia: _propTypes2.default.string,
        content: _propTypes2.default.string,
        contentOverlay: _propTypes2.default.string,
        square: _propTypes2.default.string,
        wide: _propTypes2.default.string
    })
};

exports.CardMediaPrimary = CardMediaPrimary;
exports.default = CardMediaPrimary;