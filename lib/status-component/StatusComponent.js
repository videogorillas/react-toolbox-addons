'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StatusComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('./constants');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatusComponent = function StatusComponent(_ref) {
    var status = _ref.status,
        theme = _ref.theme,
        className = _ref.className;

    var classes = (0, _classnames2.default)(theme[_constants.CSS_CLASS_STATUS_COMPONENT], theme[_constants.CSS_CLASS_STATUS_COMPONENT + '--' + status], className);
    return _react2.default.createElement('span', { className: classes });
};
StatusComponent.propTypes = {
    className: _propTypes2.default.string,
    status: _propTypes2.default.oneOf(['error', 'ready', 'warning', 'idle']).isRequired,
    theme: _propTypes2.default.object
};
exports.StatusComponent = StatusComponent;