'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InputProps = exports.CardMediaProps = exports.SidebarProps = exports.NavDrawerProps = exports.ButtonProps = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonProps = exports.ButtonProps = _propTypes2.default.shape({
    accent: _propTypes2.default.bool,
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    flat: _propTypes2.default.bool,
    floating: _propTypes2.default.bool,
    href: _propTypes2.default.string,
    icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    inverse: _propTypes2.default.bool,
    label: _propTypes2.default.string,
    mini: _propTypes2.default.bool,
    neutral: _propTypes2.default.bool,
    onMouseLeave: _propTypes2.default.func,
    onMouseUp: _propTypes2.default.func,
    primary: _propTypes2.default.bool,
    raised: _propTypes2.default.bool,
    theme: _propTypes2.default.shape({
        accent: _propTypes2.default.string,
        button: _propTypes2.default.string,
        flat: _propTypes2.default.string,
        floating: _propTypes2.default.string,
        icon: _propTypes2.default.string,
        inverse: _propTypes2.default.string,
        mini: _propTypes2.default.string,
        neutral: _propTypes2.default.string,
        primary: _propTypes2.default.string,
        raised: _propTypes2.default.string,
        rippleWrapper: _propTypes2.default.string,
        toggle: _propTypes2.default.string
    }),
    type: _propTypes2.default.string
});

var NavDrawerProps = exports.NavDrawerProps = _propTypes2.default.shape({
    active: _propTypes2.default.bool,
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    onOverlayClick: _propTypes2.default.func,
    permanentAt: _propTypes2.default.oneOf(['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
    pinned: _propTypes2.default.bool,
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
    width: _propTypes2.default.oneOf(['normal', 'wide'])
});

var SidebarProps = exports.SidebarProps = _propTypes2.default.shape({
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    pinned: _propTypes2.default.bool,
    scrollY: _propTypes2.default.bool,
    theme: _propTypes2.default.shape({
        pinned: _propTypes2.default.string,
        scrollY: _propTypes2.default.string,
        sidebar: _propTypes2.default.string,
        sidebarContent: _propTypes2.default.string
    }),
    width: _propTypes2.default.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 25, 33, 50, 66, 75, 100])
});

var CardMediaProps = exports.CardMediaProps = {
    aspectRatio: _propTypes2.default.oneOf(['wide', 'square']),
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    color: _propTypes2.default.string,
    contentOverlay: _propTypes2.default.bool,
    image: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    theme: _propTypes2.default.shape({
        cardMedia: _propTypes2.default.string,
        content: _propTypes2.default.string,
        contentOverlay: _propTypes2.default.string,
        square: _propTypes2.default.string,
        wide: _propTypes2.default.string
    })
};

var InputProps = exports.InputProps = {
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    error: _propTypes2.default.string,
    floating: _propTypes2.default.bool,
    hint: _propTypes2.default.string,
    icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    label: _propTypes2.default.string,
    maxLength: _propTypes2.default.number,
    multiline: _propTypes2.default.bool,
    name: _propTypes2.default.string,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    onKeyPress: _propTypes2.default.func,
    required: _propTypes2.default.bool,
    theme: _propTypes2.default.shape({
        bar: _propTypes2.default.string,
        counter: _propTypes2.default.string,
        disabled: _propTypes2.default.string,
        error: _propTypes2.default.string,
        errored: _propTypes2.default.string,
        hidden: _propTypes2.default.string,
        hint: _propTypes2.default.string,
        icon: _propTypes2.default.string,
        input: _propTypes2.default.string,
        inputElement: _propTypes2.default.string,
        required: _propTypes2.default.string,
        withIcon: _propTypes2.default.string
    }),
    type: _propTypes2.default.string,
    value: _propTypes2.default.any
};