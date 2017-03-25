webpackJsonp([1],{

/***/ 84:
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
          'New Poll'
        )
      );
    }
  }]);

  return PollPage;
}(_react2.default.Component);

exports.default = PollPage;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _NewPollPage = __webpack_require__(84);

var _NewPollPage2 = _interopRequireDefault(_NewPollPage);

var _common = __webpack_require__(21);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = { name: 'Peter la anguila', username: 'peteruser' };
var polls = [{ name: 'gordita' }, { name: 'guapa' }, { name: 'gordito' }, { name: 'feo' }];

window.onload = function () {
  _reactDom2.default.render(_react2.default.createElement(_NewPollPage2.default, { user: user }), document.getElementById('main'));
};

/***/ })

},[87]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXdQb2xsUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3cG9sbC5jbGllbnQuanMiXSwibmFtZXMiOlsiUG9sbFBhZ2UiLCJjb25zb2xlIiwibG9nIiwidXNlciIsInByb3BzIiwiQ29tcG9uZW50IiwibmFtZSIsInVzZXJuYW1lIiwicG9sbHMiLCJ3aW5kb3ciLCJvbmxvYWQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTs7O0lBR3FCQSxROzs7Ozs7Ozs7Ozs2QkFDVjtBQUNQQyxjQUFRQyxHQUFSLENBQVksZUFBWjs7QUFFQSxVQUFNQyxPQUFPLEtBQUtDLEtBQUwsQ0FBV0QsSUFBeEI7O0FBRUEsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFVBQWY7QUFDRSwwREFBUSxNQUFNQSxJQUFkLEdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0FERjtBQU1EOzs7O0VBWm1DLGdCQUFNRSxTOztrQkFBdkJMLFE7Ozs7Ozs7O0FDUHJCOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNRyxPQUFPLEVBQUNHLE1BQU0sa0JBQVAsRUFBMkJDLFVBQVUsV0FBckMsRUFBYjtBQUNBLElBQU1DLFFBQVEsQ0FDWixFQUFDRixNQUFNLFNBQVAsRUFEWSxFQUVaLEVBQUNBLE1BQU0sT0FBUCxFQUZZLEVBR1osRUFBQ0EsTUFBTSxTQUFQLEVBSFksRUFJWixFQUFDQSxNQUFNLEtBQVAsRUFKWSxDQUFkOztBQU9BRyxPQUFPQyxNQUFQLEdBQWdCLFlBQU07QUFDcEIscUJBQVNDLE1BQVQsQ0FBZ0IsdURBQWEsTUFBTVIsSUFBbkIsR0FBaEIsRUFBNENTLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBNUM7QUFDRCxDQUZELEMiLCJmaWxlIjoibmV3UG9sbC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcbi8vaW1wb3J0IE5vdEZvdW5kUGFnZSBmcm9tICcuL05vdEZvdW5kUGFnZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9sbFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ1BpbnRhIGVsIFBvbGwnKTtcblxuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLnVzZXI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtcm9vdFwiPlxuICAgICAgICA8TmF2YmFyIHVzZXI9e3VzZXJ9Lz5cbiAgICAgICAgPGgxPk5ldyBQb2xsPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL05ld1BvbGxQYWdlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgTmV3UG9sbFBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL05ld1BvbGxQYWdlJztcbmltcG9ydCBjb21tb25TdHlsZSBmcm9tICcuL3B1YmxpYy9zdHlsZXMvY29tbW9uLnNhc3MnO1xuXG5jb25zdCB1c2VyID0ge25hbWU6ICdQZXRlciBsYSBhbmd1aWxhJywgdXNlcm5hbWU6ICdwZXRlcnVzZXInfTtcbmNvbnN0IHBvbGxzID0gW1xuICB7bmFtZTogJ2dvcmRpdGEnfSxcbiAge25hbWU6ICdndWFwYSd9LFxuICB7bmFtZTogJ2dvcmRpdG8nfSxcbiAge25hbWU6ICdmZW8nfSxcbl07XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIFJlYWN0RE9NLnJlbmRlcig8TmV3UG9sbFBhZ2UgdXNlcj17dXNlcn0vPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL25ld3BvbGwuY2xpZW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==