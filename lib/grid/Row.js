'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Row = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _constants = require('./constants');

var _Column = require('./Column.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Row = function Row(_ref) {
    var _classnames;

    var className = _ref.className,
        children = _ref.children,
        theme = _ref.theme,
        align = _ref.align,
        expanded = _ref.expanded,
        collapse = _ref.collapse;


    var classes = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, theme[_constants.CSS_ROW_CLASS], true), _defineProperty(_classnames, theme[(0, _Column.joinWithHyphen)(_constants.CSS_ROW_ALIGN, align)], align), _defineProperty(_classnames, theme[_constants.CSS_ROW_EXPANDED], expanded), _defineProperty(_classnames, theme[_constants.CSS_ROW_COLLAPSE], collapse), _classnames), className);

    return _react2.default.createElement(
        'div',
        { className: classes },
        children
    );
};
Row.propTypes = {
    align: _propTypes2.default.oneOf(['right', 'center', 'justify', 'spaced', 'top', 'middle', 'bottom']),
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    collapse: _propTypes2.default.bool,
    expanded: _propTypes2.default.bool,
    theme: _propTypes2.default.object
};
exports.Row = Row;