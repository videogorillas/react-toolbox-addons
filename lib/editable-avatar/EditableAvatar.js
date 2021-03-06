'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EditableAvatar = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _avatar = require('react-toolbox/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _UploaderUtil = require('../upload-zone/UploaderUtil');

var _UploaderUtil2 = _interopRequireDefault(_UploaderUtil);

var _constants = require('../upload-zone/constants');

var _constants2 = require('./constants');

var _avatarOverlay = require('../avatar-overlay');

var _avatarOverlay2 = _interopRequireDefault(_avatarOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditableAvatar = function (_Component) {
    _inherits(EditableAvatar, _Component);

    function EditableAvatar(props) {
        _classCallCheck(this, EditableAvatar);

        var _this = _possibleConstructorReturn(this, (EditableAvatar.__proto__ || Object.getPrototypeOf(EditableAvatar)).call(this, props));

        _this.state = {
            progress: 0,
            error: null
        };

        _this._callbacks = {
            onSuccess: function onSuccess(file, result, e) {
                _this.setState({
                    error: null
                }, function () {
                    props.onUpload(file, result, e);
                });
            },
            onProgress: function onProgress(progress) {},
            onBadTypeError: function onBadTypeError(errString) {
                _this.setState({
                    error: errString
                });
            },
            onRequirementsError: function onRequirementsError(errString) {
                _this.setState({
                    error: errString
                });
            },
            showProgress: false,
            requirements: props.requirements,
            uploadType: props.uploadType
        };

        _this._uploader = new _UploaderUtil2.default(_extends({}, _this._callbacks));
        return _this;
    }

    _createClass(EditableAvatar, [{
        key: 'handleOnChange',
        value: function handleOnChange(e) {
            this.onUpload(e);
            this.refs.fileInput.value = '';
        }
    }, {
        key: 'onUpload',
        value: function onUpload(e) {
            this._uploader.upload(e);
        }
    }, {
        key: 'renderAvatar',
        value: function renderAvatar() {
            var _this2 = this;

            var _props = this.props,
                editable = _props.editable,
                theme = _props.theme,
                image = _props.image,
                className = _props.className;

            if (editable) {
                return _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                        _avatarOverlay2.default,
                        { image: image, icon: _constants2.ICON_PHOTO_CAMERA, onClick: function onClick() {
                                _reactDom2.default.findDOMNode(_this2.refs.fileInput).click();
                            } },
                        _react2.default.createElement('input', { ref: 'fileInput',
                            type: 'file',
                            onChange: this.handleOnChange.bind(this),
                            style: { display: 'none' } })
                    ),
                    this.state.error ? _react2.default.createElement(
                        'span',
                        { className: theme.errorMessage },
                        this._uploader.getUploadErrorMessage(this.state.error)
                    ) : null
                );
            } else {
                return _react2.default.createElement(_avatar2.default, { image: image, theme: theme, className: className });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderAvatar();
        }
    }]);

    return EditableAvatar;
}(_react.Component);

EditableAvatar.defaultProps = {
    requirements: {
        min: {
            width: 0,
            height: 0
        },
        max: {
            width: 0,
            height: 0
        }
    },
    uploadType: _constants.UPLOAD_TYPE_AVATAR
};


EditableAvatar.propTypes = {
    className: _propTypes2.default.string,
    editable: _propTypes2.default.bool,
    image: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    onUpload: _propTypes2.default.func,
    theme: _propTypes2.default.object,
    requirements: _propTypes2.default.shape({
        min: _propTypes2.default.shape({
            width: _propTypes2.default.number.isRequired,
            height: _propTypes2.default.number.isRequired
        }),
        max: _propTypes2.default.shape({
            width: _propTypes2.default.number.isRequired,
            height: _propTypes2.default.number.isRequired
        })
    }),
    uploadType: _propTypes2.default.oneOf([_constants.UPLOAD_TYPE_AVATAR, _constants.UPLOAD_TYPE_OVERLAY])
};

exports.EditableAvatar = EditableAvatar;
exports.default = EditableAvatar;