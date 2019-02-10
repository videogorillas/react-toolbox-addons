'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StreamCardMedia = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cardAddons = require('../card-addons');

var _CardActionsHover = require('../card-addons/CardActionsHover');

var _CardActionsHover2 = _interopRequireDefault(_CardActionsHover);

var _cardactionsspaced = require('../cardactionsspaced');

var _statusComponent = require('../status-component');

var _ButtonOutline = require('../button-addons/ButtonOutline');

var _ButtonView = require('../button-addons/ButtonView');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StreamCardMedia = function StreamCardMedia(props) {
    return _react2.default.createElement(
        _cardAddons.CardMediaPlus,
        { image: props.image, aspectRatio: 'wide' },
        _react2.default.createElement(
            _cardactionsspaced.CardActionsSpaced,
            null,
            _react2.default.createElement(_ButtonView.ButtonView, { label: '10', onClick: function onClick(e) {} }),
            _react2.default.createElement(_statusComponent.StatusComponent, { status: props.status })
        ),
        _react2.default.createElement(
            _CardActionsHover2.default,
            null,
            _react2.default.createElement(_ButtonOutline.ButtonOutline, { label: 'view', flat: true, onClick: props.onClick })
        )
    );
};
StreamCardMedia.propTypes = {
    image: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    status: _propTypes2.default.string
};

exports.StreamCardMedia = StreamCardMedia;
exports.default = StreamCardMedia;