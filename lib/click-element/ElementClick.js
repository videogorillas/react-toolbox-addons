'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _button = require('react-toolbox/lib/button');

var _constants = require('./constants.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementClick = function (_Component) {
    _inherits(ElementClick, _Component);

    function ElementClick(props) {
        _classCallCheck(this, ElementClick);

        var _this = _possibleConstructorReturn(this, (ElementClick.__proto__ || Object.getPrototypeOf(ElementClick)).call(this, props));

        _this.state = {
            show: false
        };
        return _this;
    }

    _createClass(ElementClick, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            window.document.addEventListener(_constants.EVENT_CLICK_WINDOW, this.handleClick.bind(this), false);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.document.removeEventListener(_constants.EVENT_CLICK_WINDOW, this.handleClick.bind(this), false);
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            var _refs = this.refs,
                appearElement = _refs.appearElement,
                child = _refs.child;
            var show = this.state.show;

            if (appearElement && child) {
                var hasElem = appearElement.contains(e.target);
                var _child = _reactDom2.default.findDOMNode(child);
                var notChild = !_child.contains(e.target);
                if (show && notChild && !hasElem) {
                    this.setState({
                        show: false
                    });
                }
            }
        }
    }, {
        key: 'renderElement',
        value: function renderElement(bool) {
            var _props = this.props,
                theme = _props.theme,
                element = _props.element,
                position = _props.position;

            var cls = (0, _classnames3.default)(theme.element, _defineProperty({}, theme[position], position));
            if (bool) {
                return _react2.default.createElement(
                    'div',
                    { className: cls, ref: _constants.REF_APPEAR_ELEMENT },
                    element
                );
            } else {
                return null;
            }
        }
    }, {
        key: 'handleOnWrapperClick',
        value: function handleOnWrapperClick(e) {
            var show = this.state.show;

            this.setState({
                show: !show
            });
            e.stopPropagation();
        }
    }, {
        key: 'renderChildren',
        value: function renderChildren() {
            var _this2 = this;

            var show = this.state.show;
            var theme = this.props.theme;

            return _react2.default.Children.map(this.props.children, function (child, i) {
                var icon = _react2.default.createElement(_button.IconButton, { icon: !show ? _constants.ICON_ARROW_DROP_DOWN : _constants.ICON_ARROW_DROP_UP });
                var el = _react2.default.cloneElement(child);
                return _react2.default.createElement(_constants.DIV, {
                    key: _constants.DIV_KEY + '_' + i,
                    ref: _constants.REF_CHILD,
                    className: theme.child,
                    onClick: _this2.handleOnWrapperClick.bind(_this2)
                }, el, icon);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var theme = this.props.theme;
            var show = this.state.show;

            return _react2.default.createElement(
                'div',
                { className: theme.wrapper },
                this.renderChildren(),
                this.renderElement(show)
            );
        }
    }]);

    return ElementClick;
}(_react.Component);

ElementClick.propTypes = {
    children: _propTypes2.default.array,
    element: _propTypes2.default.element,
    position: _propTypes2.default.string,
    theme: _propTypes2.default.object
};

ElementClick.defaultProps = {
    position: _constants.DEFAULT_POSITION
};

exports.default = ElementClick;