'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DisabledInput = exports.disabledInputFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _input = require('react-toolbox/lib/input');

var _input2 = _interopRequireDefault(_input);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var factory = function factory() {
    var DisabledInput = function DisabledInput(_ref) {
        var label = _ref.label,
            value = _ref.value,
            theme = _ref.theme,
            other = _objectWithoutProperties(_ref, ['label', 'value', 'theme']);

        return _react2.default.createElement(_input2.default, _extends({}, other, { type: 'text', label: label, name: label, value: value, disabled: true, theme: theme }));
    };

    DisabledInput.propTypes = {
        label: _propTypes2.default.string,
        theme: _propTypes2.default.object,
        value: _propTypes2.default.string
    };

    return DisabledInput;
};
var DisabledInput = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.DISABLED_INPUT)(DisabledInput);
exports.disabledInputFactory = factory;
exports.DisabledInput = DisabledInput;