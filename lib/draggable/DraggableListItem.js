'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DraggableListItem = exports.draggablelistItemFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssThemr = require('react-css-themr');

var _ripple2 = require('react-toolbox/lib/ripple');

var _ripple3 = _interopRequireDefault(_ripple2);

var _list = require('react-toolbox/lib/list');

var _ListItemContent = require('react-toolbox/lib/list/ListItemContent.js');

var _ListItemContent2 = _interopRequireDefault(_ListItemContent);

var _ListItemLayout = require('react-toolbox/lib/list/ListItemLayout.js');

var _ListItemLayout2 = _interopRequireDefault(_ListItemLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ripple = (0, _ripple3.default)({ centered: false, listItemIgnore: true });

var factory = function factory(ripple, ListItemLayout, ListItemContent) {
  var DraggableListItem = function (_ListItem) {
    _inherits(DraggableListItem, _ListItem);

    function DraggableListItem() {
      _classCallCheck(this, DraggableListItem);

      return _possibleConstructorReturn(this, (DraggableListItem.__proto__ || Object.getPrototypeOf(DraggableListItem)).apply(this, arguments));
    }

    _createClass(DraggableListItem, [{
      key: 'groupChildren',
      value: function groupChildren() {
        var children = {
          leftActions: [],
          rightActions: [],
          ignored: []
        };

        _react2.default.Children.forEach(this.props.children, function (child, i) {
          if (!_react2.default.isValidElement(child)) {
            return;
          }

          var _child$props = child.props,
              listItemIgnore = _child$props.listItemIgnore,
              rest = _objectWithoutProperties(_child$props, ['listItemIgnore']);

          var strippedChild = _extends({}, child, { props: rest });

          if (listItemIgnore) {
            children.ignored.push(strippedChild);
            return;
          }
          if (child.type === ListItemContent) {
            children.itemContent = strippedChild;
            return;
          }
          var bucket = children.itemContent ? 'rightActions' : 'leftActions';
          children[bucket].push(_extends({}, strippedChild, { key: i }));
        });

        return children;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            className = _props.className,
            onMouseDown = _props.onMouseDown,
            onTouchStart = _props.onTouchStart,
            to = _props.to,
            onClick = _props.onClick,
            hasRipple = _props.ripple,
            theme = _props.theme,
            onDragStart = _props.onDragStart,
            onDragEnd = _props.onDragEnd,
            onDragOver = _props.onDragOver,
            draggable = _props.draggable,
            other = _objectWithoutProperties(_props, ['className', 'onMouseDown', 'onTouchStart', 'to', 'onClick', 'ripple', 'theme', 'onDragStart', 'onDragEnd', 'onDragOver', 'draggable']); //eslint-disable-line no-unused-vars


        var children = this.groupChildren();
        var content = _react2.default.createElement(ListItemLayout, _extends({ theme: theme }, children, other));
        return _react2.default.createElement(
          'li',
          _extends({ className: theme.listItem + ' ' + className, onClick: this.handleClick, onMouseDown: onMouseDown, onTouchStart: onTouchStart,
            draggable: draggable, onDragEnd: onDragEnd, onDragStart: onDragStart, onDragOver: onDragOver }, other),
          to ? _react2.default.createElement(
            'a',
            { href: this.props.to },
            content
          ) : content,
          children.ignored
        );
      }
    }]);

    return DraggableListItem;
  }(_list.ListItem);

  DraggableListItem.propTypes = {
    children: _propTypes2.default.any,
    className: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    onClick: _propTypes2.default.func,
    ripple: _propTypes2.default.bool,
    theme: _propTypes2.default.shape({
      listItem: _propTypes2.default.string
    }),
    group: _propTypes2.default.string,
    to: _propTypes2.default.string,
    onDragStart: _propTypes2.default.func,
    onDragEnd: _propTypes2.default.func
  };
  DraggableListItem.defaultProps = {
    className: '',
    disabled: false,
    ripple: false
  };

  return ripple(DraggableListItem);
};

var DraggableListItem = factory(_ripple, _ListItemLayout2.default, _ListItemContent2.default);

exports.default = (0, _reactCssThemr.themr)('dragList')(DraggableListItem);
exports.draggablelistItemFactory = factory;
exports.DraggableListItem = DraggableListItem;