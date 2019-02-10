'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _avatar = require('react-toolbox/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _statusComponent = require('../../components/status-component');

var _statusComponent2 = _interopRequireDefault(_statusComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var StatusAvatar = function StatusAvatar(_ref) {
    var status = _ref.status,
        theme = _ref.theme,
        other = _objectWithoutProperties(_ref, ['status', 'theme']);

    return _react2.default.createElement(
        _avatar2.default,
        _extends({}, other, { theme: theme }),
        _react2.default.createElement(_statusComponent2.default, { status: status, className: theme.status })
    );
};
StatusAvatar.propTypes = {
    image: _propTypes2.default.string,
    status: _propTypes2.default.string.isRequired,
    theme: _propTypes2.default.shape({
        avatar: _propTypes2.default.string,
        status: _propTypes2.default.string
    })
};
exports.default = StatusAvatar;