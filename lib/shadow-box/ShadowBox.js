'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShadowBox = function ShadowBox(_ref) {
    var theme = _ref.theme,
        children = _ref.children;

    return _react2.default.createElement(
        'div',
        { className: theme[_identifiers.SHADOW_BOX] },
        children
    );
};

ShadowBox.propTypes = {
    children: _propTypes2.default.any,
    theme: _propTypes2.default.shape({
        shadowBox: _propTypes2.default.string
    })
};

exports.default = ShadowBox;