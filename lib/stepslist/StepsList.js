'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StepsList = exports.stepsListFactory = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = require('react-css-themr');

var _avatar = require('react-toolbox/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _grid = require('../../lib/grid');

var _ChipTransparent = require('../chips/ChipTransparent');

var _ChipTransparent2 = _interopRequireDefault(_ChipTransparent);

var _Checkmark = require('../checkmark/Checkmark');

var _Checkmark2 = _interopRequireDefault(_Checkmark);

var _identifiers = require('../identifiers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var factory = function factory(ChipTransparent) {
    var StepsList = function StepsList(_ref) {
        var steps = _ref.steps,
            theme = _ref.theme;


        var renderNavigationChip = function renderNavigationChip(step, index, arr) {

            var last = arr.length - 1 === index;
            var classes = (0, _classnames3.default)(theme.chip, _defineProperty({}, theme.chip_last, last));
            return _react2.default.createElement(
                _grid.Col,
                { key: index, shrink: last && true },
                _react2.default.createElement(
                    ChipTransparent,
                    { active: step.active, className: classes },
                    step.done ? _react2.default.createElement(_Checkmark2.default, null) : _react2.default.createElement(_avatar2.default, { title: index + 1 + '' }),
                    _react2.default.createElement(
                        'span',
                        {
                            className: theme.name },
                        step.name
                    ),
                    _react2.default.createElement('span', { className: theme.line })
                )
            );
        };

        return _react2.default.createElement(
            _grid.Row,
            { expanded: true },
            steps.map(renderNavigationChip)
        );
    };
    StepsList.propTypes = {
        steps: _propTypes2.default.arrayOf(_propTypes2.default.shape({
            active: _propTypes2.default.bool,
            done: _propTypes2.default.bool,
            name: _propTypes2.default.string
        })),
        theme: _propTypes2.default.shape({
            avatar: _propTypes2.default.string,
            chip: _propTypes2.default.string,
            line: _propTypes2.default.string,
            name: _propTypes2.default.string
        })
    };

    return StepsList;
};
var StepsList = factory(_ChipTransparent2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.STEPSLIST)(StepsList);
exports.stepsListFactory = factory;
exports.StepsList = StepsList;