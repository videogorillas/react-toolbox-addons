'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DropdownPlus = exports.dropdownFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dropdown2 = require('react-toolbox/lib/dropdown/Dropdown');

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers.js');

var _Input = require('react-toolbox/lib/input/Input.js');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Input) {
    var DropdownPlus = function (_Dropdown) {
        _inherits(DropdownPlus, _Dropdown);

        function DropdownPlus(props) {
            _classCallCheck(this, DropdownPlus);

            return _possibleConstructorReturn(this, (DropdownPlus.__proto__ || Object.getPrototypeOf(DropdownPlus)).call(this, props));
        }

        _createClass(DropdownPlus, [{
            key: 'renderAddAnother',
            value: function renderAddAnother(className) {
                var _props = this.props,
                    theme = _props.theme,
                    onAddAnother = _props.onAddAnother;

                var _className = (0, _classnames3.default)(className, theme['add-another']);
                return _react2.default.createElement(
                    'li',
                    { key: 'plus-item', className: _className, onClick: onAddAnother },
                    'Add another...'
                );
            }
        }, {
            key: 'render',
            value: function render() {
                var _classnames;

                var _props2 = this.props,
                    template = _props2.template,
                    theme = _props2.theme,
                    source = _props2.source,
                    onAddAnother = _props2.onAddAnother,
                    allowBlank = _props2.allowBlank,
                    auto = _props2.auto,
                    others = _objectWithoutProperties(_props2, ['template', 'theme', 'source', 'onAddAnother', 'allowBlank', 'auto']); //eslint-disable-line no-unused-vars


                var selected = this.getSelectedItem();
                var className = (0, _classnames3.default)(theme.dropdown, (_classnames = {}, _defineProperty(_classnames, theme.up, this.state.up), _defineProperty(_classnames, theme.active, this.state.active), _defineProperty(_classnames, theme.disabled, this.props.disabled), _classnames), this.props.className);

                return _react2.default.createElement(
                    'div',
                    { 'data-react-toolbox': 'dropdown', className: className },
                    _react2.default.createElement(Input, _extends({}, others, {
                        className: theme.value,
                        onMouseDown: this.handleMouseDown,
                        readOnly: true,
                        type: template && selected ? 'hidden' : null,
                        value: selected && selected.label ? selected.label : ''
                    })),
                    template && selected ? this.renderTemplateValue(selected) : null,
                    _react2.default.createElement(
                        'ul',
                        { className: theme.values, ref: 'values' },
                        source.map(this.renderValue.bind(this)),
                        onAddAnother ? this.renderAddAnother(className) : null
                    )
                );
            }
        }]);

        return DropdownPlus;
    }(_Dropdown2.Dropdown);

    DropdownPlus.propTypes = {
        allowBlank: _propTypes2.default.bool,
        auto: _propTypes2.default.bool,
        className: _propTypes2.default.string,
        disabled: _propTypes2.default.bool,
        error: _propTypes2.default.string,
        label: _propTypes2.default.string,
        name: _propTypes2.default.string,
        onAddAnother: _propTypes2.default.func,
        onBlur: _propTypes2.default.func,
        onChange: _propTypes2.default.func,
        onFocus: _propTypes2.default.func,
        source: _propTypes2.default.array.isRequired,
        template: _propTypes2.default.func,
        theme: _propTypes2.default.shape({
            active: _propTypes2.default.string,
            disabled: _propTypes2.default.string,
            dropdown: _propTypes2.default.string,
            error: _propTypes2.default.string,
            errored: _propTypes2.default.string,
            field: _propTypes2.default.string,
            label: _propTypes2.default.string,
            selected: _propTypes2.default.string,
            templateValue: _propTypes2.default.string,
            up: _propTypes2.default.string,
            value: _propTypes2.default.string,
            values: _propTypes2.default.string
        }),
        value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
    };

    return DropdownPlus;
};
//
var DropdownPlus = factory(_Input2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.DROPDOWNPLUS)(DropdownPlus);
exports.dropdownFactory = factory;
exports.DropdownPlus = DropdownPlus;
// export default DropdownPlus;