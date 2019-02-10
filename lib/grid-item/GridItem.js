'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _avatar = require('react-toolbox/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var GridItem = function GridItem(_ref) {
    var icon = _ref.icon,
        title = _ref.title,
        theme = _ref.theme,
        selected = _ref.selected,
        master = _ref.master,
        other = _objectWithoutProperties(_ref, ['icon', 'title', 'theme', 'selected', 'master']);

    var styleWrapper = (0, _classnames4.default)(theme.gridItem, _defineProperty({}, theme.selected, selected));
    return _react2.default.createElement(
        'div',
        _extends({}, other, { className: styleWrapper }),
        _react2.default.createElement(_avatar2.default, { className: (0, _classnames4.default)(theme.avatar, _defineProperty({}, theme.master, master)), icon: icon }),
        _react2.default.createElement(
            'span',
            { className: theme.title },
            title
        )
    );
};

GridItem.propTypes = {
    icon: _propTypes2.default.string.isRequired,
    selected: _propTypes2.default.bool.isRequired,
    master: _propTypes2.default.bool.isRequired, // just to set accentColor
    title: _propTypes2.default.string.isRequired,
    theme: _propTypes2.default.object
};

exports.default = GridItem;