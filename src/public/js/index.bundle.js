webpackJsonp([2],{

/***/ 83:
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


var IndexPage = function (_React$Component) {
  _inherits(IndexPage, _React$Component);

  function IndexPage() {
    _classCallCheck(this, IndexPage);

    return _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).apply(this, arguments));
  }

  _createClass(IndexPage, [{
    key: 'render',
    value: function render() {
      var user = this.props.user;
      var polls = this.props.polls;

      console.log('Pinta el IndexPage');
      console.log('User:');
      console.log(user);

      return _react2.default.createElement(
        'div',
        { className: 'app-root' },
        _react2.default.createElement(_Navbar2.default, { user: user }),
        _react2.default.createElement(
          'h1',
          null,
          'Voting App'
        ),
        _react2.default.createElement(
          'ul',
          null,
          polls.map(function (poll, id) {
            return _react2.default.createElement(
              'li',
              { key: id },
              _react2.default.createElement(
                'a',
                { href: '/poll/' + poll.id },
                poll.name,
                ' ',
                _react2.default.createElement(
                  'span',
                  null,
                  poll.dateCreated
                )
              )
            );
          })
        )
      );
    }
  }]);

  return IndexPage;
}(_react2.default.Component);

IndexPage.contextTypes = {
  router: function router() {
    return _react2.default.PropTypes.object.isRequired;
  }
};

exports.default = IndexPage;

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _IndexPage = __webpack_require__(83);

var _IndexPage2 = _interopRequireDefault(_IndexPage);

var _common = __webpack_require__(21);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = { name: 'Peter la anguila', username: 'peteruser' };
var polls = [{ name: 'gordita', id: 1 }, { name: 'guapa', id: 2 }, { name: 'gordito', id: 3 }, { name: 'feo', id: 4 }];

window.onload = function () {
  _reactDom2.default.render(_react2.default.createElement(_IndexPage2.default, { user: user, polls: polls }), document.getElementById('main'));
};

/***/ })

},[86]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JbmRleFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNsaWVudC5qcyJdLCJuYW1lcyI6WyJJbmRleFBhZ2UiLCJ1c2VyIiwicHJvcHMiLCJwb2xscyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwb2xsIiwiaWQiLCJuYW1lIiwiZGF0ZUNyZWF0ZWQiLCJDb21wb25lbnQiLCJjb250ZXh0VHlwZXMiLCJyb3V0ZXIiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwidXNlcm5hbWUiLCJ3aW5kb3ciLCJvbmxvYWQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTs7O0lBR01BLFM7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsVUFBTUMsT0FBTyxLQUFLQyxLQUFMLENBQVdELElBQXhCO0FBQ0EsVUFBTUUsUUFBUSxLQUFLRCxLQUFMLENBQVdDLEtBQXpCOztBQUVBQyxjQUFRQyxHQUFSLENBQVksb0JBQVo7QUFDQUQsY0FBUUMsR0FBUixDQUFZLE9BQVo7QUFDQUQsY0FBUUMsR0FBUixDQUFZSixJQUFaOztBQUVBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxVQUFmO0FBQ0UsMERBQVEsTUFBTUEsSUFBZCxHQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUZGO0FBR0U7QUFBQTtBQUFBO0FBRUVFLGdCQUFNRyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxFQUFQO0FBQUEsbUJBQ1I7QUFBQTtBQUFBLGdCQUFJLEtBQUtBLEVBQVQ7QUFBYTtBQUFBO0FBQUEsa0JBQUcsaUJBQWVELEtBQUtDLEVBQXZCO0FBQ1ZELHFCQUFLRSxJQURLO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBT0YsdUJBQUtHO0FBQVo7QUFERDtBQUFiLGFBRFE7QUFBQSxXQUFWO0FBRkY7QUFIRixPQURGO0FBZUQ7Ozs7RUF4QnFCLGdCQUFNQyxTOztBQTJCOUJYLFVBQVVZLFlBQVYsR0FBeUI7QUFDdkJDLFVBQVEsa0JBQVk7QUFDbEIsV0FBTyxnQkFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLFVBQTlCO0FBQ0Q7QUFIc0IsQ0FBekI7O2tCQU1laEIsUzs7Ozs7Ozs7QUN4Q2Y7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1DLE9BQU8sRUFBQ1EsTUFBTSxrQkFBUCxFQUEyQlEsVUFBVSxXQUFyQyxFQUFiO0FBQ0EsSUFBTWQsUUFBUSxDQUNaLEVBQUNNLE1BQU0sU0FBUCxFQUFrQkQsSUFBSSxDQUF0QixFQURZLEVBRVosRUFBQ0MsTUFBTSxPQUFQLEVBQWdCRCxJQUFJLENBQXBCLEVBRlksRUFHWixFQUFDQyxNQUFNLFNBQVAsRUFBa0JELElBQUksQ0FBdEIsRUFIWSxFQUlaLEVBQUNDLE1BQU0sS0FBUCxFQUFjRCxJQUFJLENBQWxCLEVBSlksQ0FBZDs7QUFPQVUsT0FBT0MsTUFBUCxHQUFnQixZQUFNO0FBQ3BCLHFCQUFTQyxNQUFULENBQWdCLHFEQUFXLE1BQU1uQixJQUFqQixFQUF1QixPQUFPRSxLQUE5QixHQUFoQixFQUF3RGtCLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBeEQ7QUFDRCxDQUZELEMiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcic7XG4vL2ltcG9ydCBOb3RGb3VuZFBhZ2UgZnJvbSAnLi9Ob3RGb3VuZFBhZ2UnO1xuXG5cbmNsYXNzIEluZGV4UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy51c2VyO1xuICAgIGNvbnN0IHBvbGxzID0gdGhpcy5wcm9wcy5wb2xscztcblxuICAgIGNvbnNvbGUubG9nKCdQaW50YSBlbCBJbmRleFBhZ2UnKTtcbiAgICBjb25zb2xlLmxvZygnVXNlcjonKTtcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1yb290XCI+XG4gICAgICAgIDxOYXZiYXIgdXNlcj17dXNlcn0vPlxuICAgICAgICA8aDE+Vm90aW5nIEFwcDwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAge1xuICAgICAgICAgIHBvbGxzLm1hcCgocG9sbCwgaWQpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2lkfT48YSBocmVmPXtgL3BvbGwvJHtwb2xsLmlkfWB9PlxuICAgICAgICAgICAgICB7cG9sbC5uYW1lfSA8c3Bhbj57cG9sbC5kYXRlQ3JlYXRlZH08L3NwYW4+XG4gICAgICAgICAgICA8L2E+PC9saT5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkluZGV4UGFnZS5jb250ZXh0VHlwZXMgPSB7XG4gIHJvdXRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQ7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0luZGV4UGFnZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEluZGV4UGFnZSBmcm9tICcuL2NvbXBvbmVudHMvSW5kZXhQYWdlJztcbmltcG9ydCBjb21tb25TdHlsZSBmcm9tICcuL3B1YmxpYy9zdHlsZXMvY29tbW9uLnNhc3MnO1xuXG5jb25zdCB1c2VyID0ge25hbWU6ICdQZXRlciBsYSBhbmd1aWxhJywgdXNlcm5hbWU6ICdwZXRlcnVzZXInfTtcbmNvbnN0IHBvbGxzID0gW1xuICB7bmFtZTogJ2dvcmRpdGEnLCBpZDogMX0sXG4gIHtuYW1lOiAnZ3VhcGEnLCBpZDogMn0sXG4gIHtuYW1lOiAnZ29yZGl0bycsIGlkOiAzfSxcbiAge25hbWU6ICdmZW8nLCBpZDogNH0sXG5dO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBSZWFjdERPTS5yZW5kZXIoPEluZGV4UGFnZSB1c2VyPXt1c2VyfSBwb2xscz17cG9sbHN9Lz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5jbGllbnQuanMiXSwic291cmNlUm9vdCI6IiJ9