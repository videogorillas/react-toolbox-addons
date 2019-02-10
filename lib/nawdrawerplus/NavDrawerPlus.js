'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NavDrawerPlus = exports.navDrawerPlusFactory = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssThemr = require('react-css-themr');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _index = require('../card-addons/index');

var _identifiers = require('../identifiers');

var _reactToolbox = require('react-toolbox');

var _rtcomponentsprops = require('../rtcomponentsprops');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var factory = function factory() {
    var NavDrawerPlus = function NavDrawerPlus(_ref) {
        var title = _ref.title,
            children = _ref.children,
            theme = _ref.theme,
            className = _ref.className,
            _onClick = _ref.onClick,
            openState = _ref.openState,
            pinned = _ref.pinned,
            buttons = _ref.buttons;

        var btns = [].concat(_toConsumableArray(buttons || []), [{ icon: 'unfold_less', onClick: function onClick(e) {
                return _onClick(e);
            } }]);
        var classes = (0, _classnames3.default)(className, theme.navDrawerPlus, _defineProperty({}, theme.preview, openState === NavDrawerPlus.PREVIEW));
        return _react2.default.createElement(
            _reactToolbox.NavDrawer,
            { active: openState === NavDrawerPlus.OPEN, pinned: pinned, theme: theme, className: classes },
            _react2.default.createElement(
                _reactToolbox.AppBar,
                { theme: theme },
                _react2.default.createElement(
                    'h5',
                    null,
                    title
                ),
                _react2.default.createElement(_index.CardTitleButtons, { center: true, buttons: btns, theme: theme })
            ),
            children
        );
    };
    NavDrawerPlus.propTypes = {
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
        title: _propTypes2.default.string,
        width: _propTypes2.default.oneOf(['normal', 'wide'])
    };
    NavDrawerPlus.OPEN = 1;
    NavDrawerPlus.PREVIEW = 2;
    NavDrawerPlus.CLOSED = 0;
    return NavDrawerPlus;
};
var NavDrawerPlus = factory();
exports.default = (0, _reactCssThemr.themr)(_identifiers.NAVDRAWER_PLUS)(NavDrawerPlus);
exports.navDrawerPlusFactory = factory;
exports.NavDrawerPlus = NavDrawerPlus;