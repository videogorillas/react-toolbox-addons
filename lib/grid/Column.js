'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Column = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.joinWithHyphen = joinWithHyphen;
exports.classMaps = classMaps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function joinWithHyphen() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return args.join('-');
}

function classMaps(names, theme) {
    return (names || '').split(' ').map(function (str) {
        return theme[str];
    });
}
var Column = function Column(props) {
    var _classnames;

    var className = props.className,
        theme = props.theme,
        children = props.children,
        offset = props.offset,
        align = props.align,
        small = props.small,
        medium = props.medium,
        large = props.large,
        order = props.order,
        shrink = props.shrink,
        other = _objectWithoutProperties(props, ['className', 'theme', 'children', 'offset', 'align', 'small', 'medium', 'large', 'order', 'shrink']);

    var classes = (0, _classnames3.default)(theme.card, theme[_constants.CSS_COLUMN_CLASS], (_classnames = {}, _defineProperty(_classnames, theme[joinWithHyphen(_constants.CSS_SMALL, small)], small), _defineProperty(_classnames, theme[joinWithHyphen(_constants.CSS_MEDIUM, medium)], medium), _defineProperty(_classnames, theme[joinWithHyphen(_constants.CSS_LARGE, large)], large), _defineProperty(_classnames, theme[joinWithHyphen(_constants.CSS_ALIGN, align)], align), _defineProperty(_classnames, theme[_constants.CSS_SHRINK], shrink), _classnames), classMaps(offset, theme), classMaps(order, theme), className);

    return _react2.default.createElement(
        'div',
        _extends({ 'data-react-toolbox': 'col', className: classes }, other),
        children
    );
};
Column.propTypes = {
    align: _propTypes2.default.string,
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    large: _propTypes2.default.number,
    medium: _propTypes2.default.number,
    offset: _propTypes2.default.string,
    order: _propTypes2.default.string,
    shrink: _propTypes2.default.bool,
    small: _propTypes2.default.number,
    theme: _propTypes2.default.object
};
exports.Column = Column;