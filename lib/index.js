'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var getDisplayName = function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
};

exports['default'] = function (WrappedComponent) {
  return (function (_WrappedComponent) {
    _inherits(_class, _WrappedComponent);

    function _class() {
      _classCallCheck(this, _class);

      _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_class, [{
      key: 'traverse',
      value: function traverse(element) {
        console.log(element, element.props && element.props.children);
        if (element.props && element.props.children && !Array.isArray(element.props.children) || element.props && element.props.children && Array.isArray(element.props.children) && element.props.children.length === 1) {
          return this.traverse(element.props.children);
        } else {
          return _react2['default'].cloneElement(this.props.wrapper, { children: element });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var element = _get(Object.getPrototypeOf(_class.prototype), 'render', this).apply(this, args);

        if (element.props && element.props.children) {
          if (element.props.children) {
            return _react2['default'].cloneElement(element, {
              children: _react2['default'].cloneElement(this.props.wrapper, {
                children: element.props.children
              })
            });
          }
        }

        return element;
      }
    }], [{
      key: 'displayName',
      value: 'wrapChildren(' + getDisplayName(WrappedComponent) + ')',
      enumerable: true
    }]);

    return _class;
  })(WrappedComponent);
};

module.exports = exports['default'];