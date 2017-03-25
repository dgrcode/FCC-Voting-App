webpackJsonp([0],{

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Navbar = __webpack_require__(34);

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import NotFoundPage from './NotFoundPage';


var PollPage = function (_React$Component) {
  _inherits(PollPage, _React$Component);

  function PollPage() {
    _classCallCheck(this, PollPage);

    return _possibleConstructorReturn(this, (PollPage.__proto__ || Object.getPrototypeOf(PollPage)).apply(this, arguments));
  }

  _createClass(PollPage, [{
    key: 'render',
    value: function render() {
      console.log('Pinta el Poll');

      var user = this.props.user;

      return _react2.default.createElement(
        'div',
        { className: 'app-root' },
        _react2.default.createElement(_Navbar2.default, { user: user }),
        _react2.default.createElement(
          'h1',
          null,
          this.props.params.id
        )
      );
    }
  }]);

  return PollPage;
}(_react2.default.Component);

exports.default = PollPage;

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _PollPage = __webpack_require__(85);

var _PollPage2 = _interopRequireDefault(_PollPage);

var _common = __webpack_require__(21);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = { name: 'Peter la anguila', username: 'peteruser' };
var polls = [{ name: 'gordita' }, { name: 'guapa' }, { name: 'gordito' }, { name: 'feo' }];

window.onload = function () {
  _reactDom2.default.render(_react2.default.createElement(_PollPage2.default, { user: user, polls: polls }), document.getElementById('main'));
};

/***/ })

},[88]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2xsUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9sbC5jbGllbnQuanMiXSwibmFtZXMiOlsiUG9sbFBhZ2UiLCJjb25zb2xlIiwibG9nIiwidXNlciIsInByb3BzIiwicGFyYW1zIiwiaWQiLCJDb21wb25lbnQiLCJuYW1lIiwidXNlcm5hbWUiLCJwb2xscyIsIndpbmRvdyIsIm9ubG9hZCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBOzs7SUFHcUJBLFE7Ozs7Ozs7Ozs7OzZCQUNWO0FBQ1BDLGNBQVFDLEdBQVIsQ0FBWSxlQUFaOztBQUVBLFVBQU1DLE9BQU8sS0FBS0MsS0FBTCxDQUFXRCxJQUF4Qjs7QUFFQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsVUFBZjtBQUNFLDBEQUFRLE1BQU1BLElBQWQsR0FERjtBQUVFO0FBQUE7QUFBQTtBQUFLLGVBQUtDLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkM7QUFBdkI7QUFGRixPQURGO0FBTUQ7Ozs7RUFabUMsZ0JBQU1DLFM7O2tCQUF2QlAsUTs7Ozs7Ozs7QUNQckI7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1HLE9BQU8sRUFBQ0ssTUFBTSxrQkFBUCxFQUEyQkMsVUFBVSxXQUFyQyxFQUFiO0FBQ0EsSUFBTUMsUUFBUSxDQUNaLEVBQUNGLE1BQU0sU0FBUCxFQURZLEVBRVosRUFBQ0EsTUFBTSxPQUFQLEVBRlksRUFHWixFQUFDQSxNQUFNLFNBQVAsRUFIWSxFQUlaLEVBQUNBLE1BQU0sS0FBUCxFQUpZLENBQWQ7O0FBT0FHLE9BQU9DLE1BQVAsR0FBZ0IsWUFBTTtBQUNwQixxQkFBU0MsTUFBVCxDQUFnQixvREFBVSxNQUFNVixJQUFoQixFQUFzQixPQUFPTyxLQUE3QixHQUFoQixFQUF1REksU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUF2RDtBQUNELENBRkQsQyIsImZpbGUiOiJwb2xsLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInO1xuLy9pbXBvcnQgTm90Rm91bmRQYWdlIGZyb20gJy4vTm90Rm91bmRQYWdlJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2xsUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygnUGludGEgZWwgUG9sbCcpO1xuXG4gICAgY29uc3QgdXNlciA9IHRoaXMucHJvcHMudXNlcjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1yb290XCI+XG4gICAgICAgIDxOYXZiYXIgdXNlcj17dXNlcn0vPlxuICAgICAgICA8aDE+e3RoaXMucHJvcHMucGFyYW1zLmlkfTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Qb2xsUGFnZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFBvbGxQYWdlIGZyb20gJy4vY29tcG9uZW50cy9Qb2xsUGFnZSc7XG5pbXBvcnQgY29tbW9uU3R5bGUgZnJvbSAnLi9wdWJsaWMvc3R5bGVzL2NvbW1vbi5zYXNzJztcblxuY29uc3QgdXNlciA9IHtuYW1lOiAnUGV0ZXIgbGEgYW5ndWlsYScsIHVzZXJuYW1lOiAncGV0ZXJ1c2VyJ307XG5jb25zdCBwb2xscyA9IFtcbiAge25hbWU6ICdnb3JkaXRhJ30sXG4gIHtuYW1lOiAnZ3VhcGEnfSxcbiAge25hbWU6ICdnb3JkaXRvJ30sXG4gIHtuYW1lOiAnZmVvJ30sXG5dO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBSZWFjdERPTS5yZW5kZXIoPFBvbGxQYWdlIHVzZXI9e3VzZXJ9IHBvbGxzPXtwb2xsc30vPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BvbGwuY2xpZW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==