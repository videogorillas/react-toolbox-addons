'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavDrawerPlusChildren = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _index = require('../card-addons/index');

var _reactToolbox = require('react-toolbox');

var _rtcomponentsprops = require('../rtcomponentsprops');

var _ExpandIcon = require('../cardexpandable/ExpandIcon.js');

var _ExpandIcon2 = _interopRequireDefault(_ExpandIcon);

var _constants = require('./constants.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavDrawerPlusChildren = function (_Component) {
    _inherits(NavDrawerPlusChildren, _Component);

    _createClass(NavDrawerPlusChildren, null, [{
        key: 'eq',
        value: function eq(a, b) {
            return a === b;
        }
    }, {
        key: 'getNextStatus',
        value: function getNextStatus(currentStatus) {
            var resultStatus = '';
            switch (currentStatus) {
                case _constants.OPEN_STATUS:
                    resultStatus = _constants.CLOSE_STATUS;
                    break;
                case _constants.CLOSE_STATUS:
                    resultStatus = _constants.MIDDLE_STATUS;
                    break;
                case _constants.MIDDLE_STATUS:
                    resultStatus = _constants.OPEN_STATUS;
                    break;
                default:
                    resultStatus = _constants.MIDDLE_STATUS;
                    break;
            }
            return resultStatus;
        }
    }, {
        key: 'getPreviousStatus',
        value: function getPreviousStatus(currentStatus) {
            var resultStatus = '';
            switch (currentStatus) {
                case _constants.OPEN_STATUS:
                    resultStatus = _constants.MIDDLE_STATUS;
                    break;
                case _constants.CLOSE_STATUS:
                    resultStatus = _constants.OPEN_STATUS;
                    break;
                case _constants.MIDDLE_STATUS:
                    resultStatus = _constants.CLOSE_STATUS;
                    break;
                default:
                    resultStatus = _constants.MIDDLE_STATUS;
                    break;
            }
            return resultStatus;
        }
    }]);

    function NavDrawerPlusChildren(props) {
        _classCallCheck(this, NavDrawerPlusChildren);

        var _this = _possibleConstructorReturn(this, (NavDrawerPlusChildren.__proto__ || Object.getPrototypeOf(NavDrawerPlusChildren)).call(this, props));

        _this.state = {
            next: _constants.MIDDLE_STATUS,
            prev: _constants.MIDDLE_STATUS
        };
        return _this;
    }

    _createClass(NavDrawerPlusChildren, [{
        key: 'handleClick',
        value: function handleClick(e) {
            this.setState({
                next: NavDrawerPlusChildren.getNextStatus(this.state.next),
                prev: NavDrawerPlusChildren.getPreviousStatus(this.state.prev)
            });
        }
    }, {
        key: 'renderTitle',
        value: function renderTitle(isFirstElement, index) {
            var _props = this.props,
                titleForFirstChild = _props.titleForFirstChild,
                titleForSecondChild = _props.titleForSecondChild,
                buttons = _props.buttons,
                _onClick = _props.onClick,
                theme = _props.theme;

            var btns = [].concat(_toConsumableArray(buttons || []), [{ icon: 'close', onClick: function onClick(e) {
                    return _onClick(e);
                } }]);
            if (isFirstElement) {
                return _react2.default.createElement(
                    _reactToolbox.AppBar,
                    { key: 'navDrawerAppBar_' + index, theme: theme },
                    _react2.default.createElement(
                        'h5',
                        null,
                        titleForFirstChild
                    ),
                    _react2.default.createElement(_index.CardTitleButtons, { center: true, buttons: btns })
                );
            } else {
                var _icon = _react2.default.createElement(_ExpandIcon2.default, { isOpen: !NavDrawerPlusChildren.eq(this.state.next, _constants.OPEN_STATUS) });
                var _btn = [{ icon: _icon, onClick: this.handleClick.bind(this) }];
                return _react2.default.createElement(
                    _reactToolbox.AppBar,
                    { key: 'navDrawerAppBar_' + index, theme: theme },
                    _react2.default.createElement(
                        'h5',
                        null,
                        titleForSecondChild
                    ),
                    _react2.default.createElement(_index.CardTitleButtons, { center: true, buttons: _btn })
                );
            }
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this2 = this;

            var _props2 = this.props,
                theme = _props2.theme,
                children = _props2.children,
                openState = _props2.openState;

            return _react2.default.Children.map(children, function (c, i) {
                var topOrBottom = NavDrawerPlusChildren.eq(i, 0) ? _constants.TOP_ELEMENT : _constants.BOTTOM_ELEMENT;
                var clsForTop = (0, _classnames4.default)(theme.top_element, [theme[_this2.state.next]], _defineProperty({}, theme.open, openState === 0));
                var clsForBottom = (0, _classnames4.default)(theme.bottom_element, theme[_this2.state.prev]);
                if (!((openState === 2 || openState === 0) && i === 1)) {
                    return _react2.default.createElement(
                        'div',
                        { key: i + topOrBottom, className: NavDrawerPlusChildren.eq(i, 0) ? clsForTop : clsForBottom },
                        _this2.renderTitle(NavDrawerPlusChildren.eq(i, 0), i),
                        _react2.default.createElement(
                            'div',
                            { className: theme.columnContent, style: { overflow: i === 1 && 'hidden' } },
                            c
                        )
                    );
                } else {
                    return null;
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                theme = _props3.theme,
                className = _props3.className,
                openState = _props3.openState,
                pinned = _props3.pinned;

            var classes = (0, _classnames4.default)(className, theme.navDrawerPlus, _defineProperty({}, theme.preview, openState === NavDrawerPlusChildren.modes.PREVIEW));
            return _react2.default.createElement(
                _reactToolbox.NavDrawer,
                { active: openState === NavDrawerPlusChildren.modes.OPEN,
                    pinned: pinned,
                    theme: theme,
                    className: classes },
                _react2.default.createElement(
                    'div',
                    { className: theme.wrapper },
                    this.renderChildren()
                )
            );
        }
    }]);

    return NavDrawerPlusChildren;
}(_react.Component);

NavDrawerPlusChildren.propTypes = {
    active: _propTypes2.default.bool,
    buttons: _propTypes2.default.arrayOf(_rtcomponentsprops.ButtonProps),
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    onOverlayClick: _propTypes2.default.func,
    openState: _propTypes2.default.oneOf([0, 1, 2]),
    permanentAt: _propTypes2.default.oneOf(['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
    pinned: _propTypes2.default.bool,
    primary: _propTypes2.default.bool,
    scrollY: _propTypes2.default.bool,
    theme: _propTypes2.default.shape({
        active: _propTypes2.default.string,
        drawerContent: _propTypes2.default.string,
        lgPermanent: _propTypes2.default.string,
        mdPermanent: _propTypes2.default.string,
        navDrawer: _propTypes2.default.string,
        pinned: _propTypes2.default.string,
        scrim: _propTypes2.default.string,
        scrollY: _propTypes2.default.string,
        smPermanent: _propTypes2.default.string,
        wide: _propTypes2.default.string,
        xlPermanent: _propTypes2.default.string,
        xxlPermanent: _propTypes2.default.string,
        xxxlPermanent: _propTypes2.default.string
    }),
    titleForFirstChild: _propTypes2.default.string,
    titleForSecondChild: _propTypes2.default.string,
    width: _propTypes2.default.oneOf(['normal', 'wide'])
};
NavDrawerPlusChildren.modes = {
    OPEN: 1,
    PREVIEW: 2,
    CLOSED: 0
};
exports.default = NavDrawerPlusChildren;
exports.NavDrawerPlusChildren = NavDrawerPlusChildren;