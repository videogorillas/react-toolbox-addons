'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _grid = require('../grid');

var _card = require('react-toolbox/lib/card');

var _StreamCard = require('../streams/StreamCard');

var _StreamNewHardware = require('../streams/StreamNewHardware');

var _constants = require('./constants');

var _cardactionsspaced = require('../cardactionsspaced');

var _cardAddons = require('../card-addons');

var _bottomsheetplus = require('../bottomsheetplus');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StreamPanel = function (_Component) {
    _inherits(StreamPanel, _Component);

    function StreamPanel(props) {
        _classCallCheck(this, StreamPanel);

        var _this = _possibleConstructorReturn(this, (StreamPanel.__proto__ || Object.getPrototypeOf(StreamPanel)).call(this, props));

        _this.state = {
            streams: props.streams,
            editable: false,
            active: true
        };
        return _this;
    }

    _createClass(StreamPanel, [{
        key: 'renderTopPanel',
        value: function renderTopPanel() {
            var _this2 = this;

            var _props = this.props,
                user = _props.user,
                theme = _props.theme;
            var name = user.name,
                avatar = user.avatar;

            var ICON_EXPAND = 'arrow_drop_down';
            var ICON_LESS = 'arrow_drop_up';
            return _react2.default.createElement(
                _grid.Row,
                { expanded: true, align: 'middle' },
                _react2.default.createElement(
                    _grid.Col,
                    { small: 2 },
                    _react2.default.createElement(
                        _card.CardText,
                        { theme: theme },
                        _react2.default.createElement(
                            'span',
                            { className: 'material-icons' },
                            'cast_connected'
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            'Active stream #name'
                        )
                    )
                ),
                _react2.default.createElement(
                    _grid.Col,
                    { small: 10, className: theme['streamPanel--borderLeft'] },
                    _react2.default.createElement(
                        _cardactionsspaced.CardActionsSpaced,
                        { className: theme[_constants.CSS_NO_PADDING] },
                        _react2.default.createElement(_card.CardTitle, { title: name,
                            avatar: avatar || _constants.DEFAULT_AVATAR,
                            theme: theme
                        }),
                        _react2.default.createElement(_card.CardText, { theme: theme, className: theme[_constants.CSS_OFFSET_RIGHT] }),
                        _react2.default.createElement(_cardAddons.CardTitleButtons, {
                            buttons: [{
                                icon: this.state.active ? ICON_EXPAND : ICON_LESS,
                                onClick: function onClick() {
                                    return _this2.setState({ active: !_this2.state.active });
                                }
                            }] })
                    )
                )
            );
        }
    }, {
        key: 'renderBottomPanel',
        value: function renderBottomPanel() {
            var _props2 = this.props,
                theme = _props2.theme,
                activeStream = _props2.activeStream,
                onAdd = _props2.onAdd;
            var streams = this.state.streams;

            var containerClass = (0, _classnames2.default)(theme[_constants.CSS_SCROLL_CONTAINER], theme['streamPanel--borderLeft']);
            return _react2.default.createElement(
                _grid.Row,
                { expanded: true },
                _react2.default.createElement(
                    _grid.Col,
                    { small: 2 },
                    _react2.default.createElement(_StreamCard.StreamCard, _extends({}, streams[activeStream], {
                        theme: theme
                    }))
                ),
                _react2.default.createElement(
                    _grid.Col,
                    { small: 10, className: containerClass },
                    streams.map(function (stream, index) {
                        return _react2.default.createElement(_StreamCard.StreamCard, _extends({ key: index }, stream, {
                            theme: theme }));
                    }),
                    _react2.default.createElement(_StreamNewHardware.StreamNewHardware, { theme: theme, onClick: onAdd })
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                _bottomsheetplus.BottomSheetPlus,
                { active: this.state.active,
                    iconClick: function iconClick() {
                        return _this3.setState({ active: !_this3.state.active });
                    } },
                _react2.default.createElement(
                    'div',
                    null,
                    this.renderTopPanel()
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    this.renderBottomPanel()
                )
            );
        }
    }]);

    return StreamPanel;
}(_react.Component);

StreamPanel.propTypes = {
    /**
     * set index of the active stream
     * int activeStream
     */
    activeStream: _propTypes2.default.number,
    /**
     * on add stream event listener
     * Callback1<DOMEvent> onAdd
     */
    onAdd: _propTypes2.default.func,
    /**
     * array of streams
     * Array streams
     */
    streams: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        /**
         * String image
         */
        image: _propTypes2.default.string,
        /**
         * String location
         */
        location: _propTypes2.default.string,
        /**
         * String status
         */
        status: _propTypes2.default.string,
        /**
         * String streamName
         */
        streamName: _propTypes2.default.string,
        /**
         * on view button click callback
         * Callback1<DOMEvent> onClick
         */
        onClick: _propTypes2.default.func,
        /**
         * on stream name change callback
         * Callback1<DOMEvent> onChange
         */
        onChange: _propTypes2.default.func
    })),
    theme: _propTypes2.default.object,
    user: _propTypes2.default.shape({
        /**
         * String name
         */
        name: _propTypes2.default.string,
        /**
         * url of user avatar
         * String avatar
         */
        avatar: _propTypes2.default.string
    })
};

exports.default = StreamPanel;