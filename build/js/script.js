(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Util = /*#__PURE__*/function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: "fillSelectElementOfRoles",
    value: function fillSelectElementOfRoles(element, roles) {
      var checkedRoles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      element = $(element);
      element.text("");
      roles.forEach(function (role) {
        var valueAttribute = role.authority;
        var text = role.authority.replace("ROLE_", "");
        var selected = "";
        if (checkedRoles) selected = checkedRoles.includes(text) ? "selected" : "";
        var option = "<option ".concat(selected, " value=\"").concat(valueAttribute, "\">\n                                ").concat(text, "\n                            </option>");
        element.append(option);
      });
    }
  }]);

  return Util;
}();

exports["default"] = Util;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlV0aWwuanMiXSwibmFtZXMiOlsiVXRpbCIsImVsZW1lbnQiLCJyb2xlcyIsImNoZWNrZWRSb2xlcyIsIiQiLCJ0ZXh0IiwiZm9yRWFjaCIsInJvbGUiLCJ2YWx1ZUF0dHJpYnV0ZSIsImF1dGhvcml0eSIsInJlcGxhY2UiLCJzZWxlY3RlZCIsImluY2x1ZGVzIiwib3B0aW9uIiwiYXBwZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQXFCQSxJOzs7Ozs7OzZDQUNlQyxPLEVBQVNDLEssRUFBNEI7QUFBQSxVQUFyQkMsWUFBcUIsdUVBQU4sSUFBTTtBQUNqRUYsTUFBQUEsT0FBTyxHQUFHRyxDQUFDLENBQUNILE9BQUQsQ0FBWDtBQUNBQSxNQUFBQSxPQUFPLENBQUNJLElBQVIsQ0FBYSxFQUFiO0FBRUFILE1BQUFBLEtBQUssQ0FBQ0ksT0FBTixDQUFjLFVBQUNDLElBQUQsRUFBVTtBQUNwQixZQUFNQyxjQUFjLEdBQUdELElBQUksQ0FBQ0UsU0FBNUI7QUFDQSxZQUFNSixJQUFJLEdBQUdFLElBQUksQ0FBQ0UsU0FBTCxDQUFlQyxPQUFmLENBQXVCLE9BQXZCLEVBQWdDLEVBQWhDLENBQWI7QUFDQSxZQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUVBLFlBQUdSLFlBQUgsRUFDSVEsUUFBUSxHQUFHUixZQUFZLENBQUNTLFFBQWIsQ0FBc0JQLElBQXRCLElBQThCLFVBQTlCLEdBQTJDLEVBQXREO0FBRUosWUFBTVEsTUFBTSxxQkFBY0YsUUFBZCxzQkFBaUNILGNBQWpDLGtEQUNVSCxJQURWLDRDQUFaO0FBR0FKLFFBQUFBLE9BQU8sQ0FBQ2EsTUFBUixDQUFlRCxNQUFmO0FBQ0gsT0FaRDtBQWFIIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbCB7XHJcbiAgICBzdGF0aWMgZmlsbFNlbGVjdEVsZW1lbnRPZlJvbGVzKGVsZW1lbnQsIHJvbGVzLCBjaGVja2VkUm9sZXMgPSBudWxsKSB7XHJcbiAgICAgICAgZWxlbWVudCA9ICQoZWxlbWVudCk7XHJcbiAgICAgICAgZWxlbWVudC50ZXh0KFwiXCIpO1xyXG5cclxuICAgICAgICByb2xlcy5mb3JFYWNoKChyb2xlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlQXR0cmlidXRlID0gcm9sZS5hdXRob3JpdHk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSByb2xlLmF1dGhvcml0eS5yZXBsYWNlKFwiUk9MRV9cIiwgXCJcIik7XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBpZihjaGVja2VkUm9sZXMpXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZCA9IGNoZWNrZWRSb2xlcy5pbmNsdWRlcyh0ZXh0KSA/IFwic2VsZWN0ZWRcIiA6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBgPG9wdGlvbiAke3NlbGVjdGVkfSB2YWx1ZT1cIiR7dmFsdWVBdHRyaWJ1dGV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+YDtcclxuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmQob3B0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api() {
    _classCallCheck(this, Api);

    this.headers = {};
    this.headers.contentType = "application/json";
    this.apiUrl = "http://localhost:8080/api/v1";
  }

  _createClass(Api, [{
    key: "fetchRequest",
    value: function () {
      var _fetchRequest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, method) {
        var body,
            response,
            content,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                body = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
                _context.next = 3;
                return fetch(url, {
                  method: method,
                  headers: {
                    "Content-type": this.headers.contentType
                  },
                  body: body ? JSON.stringify(body) : null
                });

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                content = _context.sent;

                if (!(content.code !== 200)) {
                  _context.next = 9;
                  break;
                }

                throw new Exception("Request failed: " + content.message);

              case 9:
                return _context.abrupt("return", content.data);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchRequest(_x, _x2) {
        return _fetchRequest.apply(this, arguments);
      }

      return fetchRequest;
    }()
  }]);

  return Api;
}();

exports["default"] = Api;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwaUNsYXNzLmpzIl0sIm5hbWVzIjpbIkFwaSIsImhlYWRlcnMiLCJjb250ZW50VHlwZSIsImFwaVVybCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJmZXRjaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJjb250ZW50IiwiY29kZSIsIkV4Y2VwdGlvbiIsIm1lc3NhZ2UiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztJQUFxQkEsRztBQUVqQixpQkFBYztBQUFBOztBQUNWLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS0EsT0FBTCxDQUFhQyxXQUFiLEdBQTJCLGtCQUEzQjtBQUNBLFNBQUtDLE1BQUwsR0FBYyw4QkFBZDtBQUNIOzs7OzttR0FFa0JDLEcsRUFBS0MsTTs7Ozs7Ozs7O0FBQVFDLGdCQUFBQSxJLDJEQUFPLEk7O3VCQUVkQyxLQUFLLENBQUNILEdBQUQsRUFBTTtBQUM1QkMsa0JBQUFBLE1BQU0sRUFBRUEsTUFEb0I7QUFFNUJKLGtCQUFBQSxPQUFPLEVBQUU7QUFDTCxvQ0FBZ0IsS0FBS0EsT0FBTCxDQUFhQztBQUR4QixtQkFGbUI7QUFLNUJJLGtCQUFBQSxJQUFJLEVBQUVBLElBQUksR0FBR0UsSUFBSSxDQUFDQyxTQUFMLENBQWVILElBQWYsQ0FBSCxHQUEwQjtBQUxSLGlCQUFOLEM7OztBQUF0QkksZ0JBQUFBLFE7O3VCQVFrQkEsUUFBUSxDQUFDQyxJQUFULEU7OztBQUFoQkMsZ0JBQUFBLE87O3NCQUVIQSxPQUFPLENBQUNDLElBQVIsS0FBaUIsRzs7Ozs7c0JBQ1YsSUFBSUMsU0FBSixDQUFjLHFCQUFxQkYsT0FBTyxDQUFDRyxPQUEzQyxDOzs7aURBR0hILE9BQU8sQ0FBQ0ksSSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5oZWFkZXJzLmNvbnRlbnRUeXBlID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XHJcbiAgICAgICAgdGhpcy5hcGlVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjFcIjtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmZXRjaFJlcXVlc3QodXJsLCBtZXRob2QsIGJvZHkgPSBudWxsKSB7XHJcblxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogdGhpcy5oZWFkZXJzLmNvbnRlbnRUeXBlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBib2R5ID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBudWxsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmKGNvbnRlbnQuY29kZSAhPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oXCJSZXF1ZXN0IGZhaWxlZDogXCIgKyBjb250ZW50Lm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQuZGF0YTtcclxuICAgIH1cclxufSJdfQ==
},{}],3:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClass = _interopRequireDefault(require("./ApiClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RoleApi = /*#__PURE__*/function (_Api) {
  _inherits(RoleApi, _Api);

  var _super = _createSuper(RoleApi);

  function RoleApi() {
    var _this;

    _classCallCheck(this, RoleApi);

    _this = _super.call(this);
    _this.apiUrl = _this.apiUrl + "/role";
    return _this;
  }

  _createClass(RoleApi, [{
    key: "loadAllRoles",
    value: function () {
      var _loadAllRoles = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.fetchRequest(this.apiUrl + "/all", "GET");

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadAllRoles() {
        return _loadAllRoles.apply(this, arguments);
      }

      return loadAllRoles;
    }()
  }]);

  return RoleApi;
}(_ApiClass["default"]);

exports["default"] = RoleApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJvbGVBcGlDbGFzcy5qcyJdLCJuYW1lcyI6WyJSb2xlQXBpIiwiYXBpVXJsIiwiZmV0Y2hSZXF1ZXN0IiwiQXBpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7QUFDakIscUJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLEdBQWMsT0FBNUI7QUFGVTtBQUdiOzs7Ozs7Ozs7Ozt1QkFHZ0IsS0FBS0MsWUFBTCxDQUFrQixLQUFLRCxNQUFMLEdBQWMsTUFBaEMsRUFBd0MsS0FBeEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVBnQkUsb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBpIGZyb20gXCIuL0FwaUNsYXNzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2xlQXBpIGV4dGVuZHMgQXBpIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5hcGlVcmwgPSB0aGlzLmFwaVVybCArIFwiL3JvbGVcIjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYXN5bmMgbG9hZEFsbFJvbGVzKCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoUmVxdWVzdCh0aGlzLmFwaVVybCArIFwiL2FsbFwiLCBcIkdFVFwiKVxyXG4gICAgfVxyXG59Il19
},{"./ApiClass":2}],4:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClass = _interopRequireDefault(require("./ApiClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var UserApi = /*#__PURE__*/function (_Api) {
  _inherits(UserApi, _Api);

  var _super = _createSuper(UserApi);

  function UserApi() {
    var _this;

    _classCallCheck(this, UserApi);

    _this = _super.call(this);
    _this.apiUrl = _this.apiUrl + "/user";
    return _this;
  }

  _createClass(UserApi, [{
    key: "loadAllUsers",
    value: function () {
      var _loadAllUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.fetchRequest(this.apiUrl + "/all", "GET");

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadAllUsers() {
        return _loadAllUsers.apply(this, arguments);
      }

      return loadAllUsers;
    }()
  }, {
    key: "loadUser",
    value: function () {
      var _loadUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.fetchRequest(this.apiUrl + "/" + id, "GET");

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadUser(_x) {
        return _loadUser.apply(this, arguments);
      }

      return loadUser;
    }()
  }, {
    key: "saveUser",
    value: function () {
      var _saveUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(user) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                user.enabled = true;
                _context3.next = 3;
                return this.fetchRequest(this.apiUrl, "POST", user);

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function saveUser(_x2) {
        return _saveUser.apply(this, arguments);
      }

      return saveUser;
    }()
  }, {
    key: "editUser",
    value: function () {
      var _editUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id, user) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                user.enabled = true;
                _context4.next = 3;
                return this.fetchRequest(this.apiUrl + "/" + id, "PUT", user);

              case 3:
                return _context4.abrupt("return", _context4.sent);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function editUser(_x3, _x4) {
        return _editUser.apply(this, arguments);
      }

      return editUser;
    }()
  }, {
    key: "deleteUser",
    value: function () {
      var _deleteUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log("Delete " + id);
                _context5.next = 3;
                return this.fetchRequest(this.apiUrl + "/" + id, "DELETE");

              case 3:
                return _context5.abrupt("return", _context5.sent);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteUser(_x5) {
        return _deleteUser.apply(this, arguments);
      }

      return deleteUser;
    }()
  }]);

  return UserApi;
}(_ApiClass["default"]);

exports["default"] = UserApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVzZXJBcGkuanMiXSwibmFtZXMiOlsiVXNlckFwaSIsImFwaVVybCIsImZldGNoUmVxdWVzdCIsImlkIiwidXNlciIsImVuYWJsZWQiLCJjb25zb2xlIiwibG9nIiwiQXBpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7QUFDakIscUJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLEdBQWMsT0FBNUI7QUFGVTtBQUdiOzs7Ozs7Ozs7Ozt1QkFHZ0IsS0FBS0MsWUFBTCxDQUFrQixLQUFLRCxNQUFMLEdBQWMsTUFBaEMsRUFBd0MsS0FBeEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnR0FHRkUsRTs7Ozs7O3VCQUNFLEtBQUtELFlBQUwsQ0FBa0IsS0FBS0QsTUFBTCxHQUFjLEdBQWQsR0FBb0JFLEVBQXRDLEVBQTBDLEtBQTFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBR0ZDLEk7Ozs7O0FBQ1hBLGdCQUFBQSxJQUFJLENBQUNDLE9BQUwsR0FBZSxJQUFmOzt1QkFDYSxLQUFLSCxZQUFMLENBQWtCLEtBQUtELE1BQXZCLEVBQStCLE1BQS9CLEVBQXVDRyxJQUF2QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dHQUdGRCxFLEVBQUlDLEk7Ozs7O0FBQ2ZBLGdCQUFBQSxJQUFJLENBQUNDLE9BQUwsR0FBZSxJQUFmOzt1QkFDYSxLQUFLSCxZQUFMLENBQWtCLEtBQUtELE1BQUwsR0FBYyxHQUFkLEdBQW9CRSxFQUF0QyxFQUEwQyxLQUExQyxFQUFpREMsSUFBakQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FHQUQsRTs7Ozs7QUFDYkcsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVlKLEVBQXhCOzt1QkFDYSxLQUFLRCxZQUFMLENBQWtCLEtBQUtELE1BQUwsR0FBYyxHQUFkLEdBQW9CRSxFQUF0QyxFQUEwQyxRQUExQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMUJnQkssb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBpIGZyb20gJy4vQXBpQ2xhc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckFwaSBleHRlbmRzIEFwaSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYXBpVXJsID0gdGhpcy5hcGlVcmwgKyBcIi91c2VyXCI7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbG9hZEFsbFVzZXJzKCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoUmVxdWVzdCh0aGlzLmFwaVVybCArIFwiL2FsbFwiLCBcIkdFVFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2FkVXNlcihpZCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoUmVxdWVzdCh0aGlzLmFwaVVybCArIFwiL1wiICsgaWQsIFwiR0VUXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNhdmVVc2VyKHVzZXIpIHtcclxuICAgICAgICB1c2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoUmVxdWVzdCh0aGlzLmFwaVVybCwgXCJQT1NUXCIsIHVzZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGVkaXRVc2VyKGlkLCB1c2VyKSB7XHJcbiAgICAgICAgdXNlci5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaFJlcXVlc3QodGhpcy5hcGlVcmwgKyBcIi9cIiArIGlkLCBcIlBVVFwiLCB1c2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBkZWxldGVVc2VyKGlkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEZWxldGUgXCIgKyBpZCk7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2hSZXF1ZXN0KHRoaXMuYXBpVXJsICsgXCIvXCIgKyBpZCwgXCJERUxFVEVcIik7XHJcbiAgICB9XHJcbn0iXX0=
},{"./ApiClass":2}],5:[function(require,module,exports){
"use strict";

var _UserInfoTableClass = _interopRequireDefault(require("./ui/UserInfoTableClass"));

var _UserApi = _interopRequireDefault(require("./api/UserApi"));

var _SaveUserForm = _interopRequireDefault(require("./ui/SaveUserForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var saveUserForm;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return loadAdminUserTable();

        case 2:
          document.addEventListener("usersChanged", function () {
            loadAdminUserTable();
          });
          saveUserForm = new _SaveUserForm["default"]($("#new-user form"));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();

function loadAdminUserTable() {
  return _loadAdminUserTable.apply(this, arguments);
}

function _loadAdminUserTable() {
  _loadAdminUserTable = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var userInfoTable, users;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            userInfoTable = new _UserInfoTableClass["default"]("#admin-page .user-info-table");
            _context2.next = 3;
            return new _UserApi["default"]().loadAllUsers();

          case 3:
            users = _context2.sent;
            userInfoTable.init(users);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loadAdminUserTable.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibG9hZEFkbWluVXNlclRhYmxlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2F2ZVVzZXJGb3JtIiwiU2F2ZVVzZXJGb3JtIiwiJCIsInVzZXJJbmZvVGFibGUiLCJVc2VySW5mb1RhYmxlIiwiVXNlckFwaSIsImxvYWRBbGxVc2VycyIsInVzZXJzIiwiaW5pdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFHQSx3REFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNTQSxrQkFBa0IsRUFEM0I7O0FBQUE7QUFFR0MsVUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixjQUExQixFQUEwQyxZQUFZO0FBQ2xERixZQUFBQSxrQkFBa0I7QUFDckIsV0FGRDtBQUlNRyxVQUFBQSxZQU5ULEdBTXdCLElBQUlDLHdCQUFKLENBQWlCQyxDQUFDLENBQUMsZ0JBQUQsQ0FBbEIsQ0FOeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBRDs7U0FTZUwsa0I7Ozs7O2dGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNVTSxZQUFBQSxhQURWLEdBQzBCLElBQUlDLDhCQUFKLENBQWtCLDhCQUFsQixDQUQxQjtBQUFBO0FBQUEsbUJBRXdCLElBQUlDLG1CQUFKLEdBQWNDLFlBQWQsRUFGeEI7O0FBQUE7QUFFVUMsWUFBQUEsS0FGVjtBQUdJSixZQUFBQSxhQUFhLENBQUNLLElBQWQsQ0FBbUJELEtBQW5COztBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlckluZm9UYWJsZSBmcm9tICcuL3VpL1VzZXJJbmZvVGFibGVDbGFzcyc7XHJcbmltcG9ydCBVc2VyQXBpIGZyb20gJy4vYXBpL1VzZXJBcGknO1xyXG5pbXBvcnQgU2F2ZVVzZXJGb3JtIGZyb20gXCIuL3VpL1NhdmVVc2VyRm9ybVwiO1xyXG5cclxuXHJcbihhc3luYyBmdW5jdGlvbigpe1xyXG4gICAgYXdhaXQgbG9hZEFkbWluVXNlclRhYmxlKCk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidXNlcnNDaGFuZ2VkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsb2FkQWRtaW5Vc2VyVGFibGUoKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2F2ZVVzZXJGb3JtID0gbmV3IFNhdmVVc2VyRm9ybSgkKFwiI25ldy11c2VyIGZvcm1cIikpO1xyXG59KSgpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZEFkbWluVXNlclRhYmxlKCkge1xyXG4gICAgY29uc3QgdXNlckluZm9UYWJsZSA9IG5ldyBVc2VySW5mb1RhYmxlKFwiI2FkbWluLXBhZ2UgLnVzZXItaW5mby10YWJsZVwiKTtcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgbmV3IFVzZXJBcGkoKS5sb2FkQWxsVXNlcnMoKTtcclxuICAgIHVzZXJJbmZvVGFibGUuaW5pdCh1c2Vycyk7XHJcbn1cclxuIl19
},{"./api/UserApi":4,"./ui/SaveUserForm":9,"./ui/UserInfoTableClass":10}],6:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Modal2 = _interopRequireDefault(require("./Modal.js"));

var _UserApi = _interopRequireDefault(require("../api/UserApi"));

var _RoleApiClass = _interopRequireDefault(require("../api/RoleApiClass"));

var _UsersChangedEvent = _interopRequireDefault(require("./UsersChangedEvent"));

var _FormClass = _interopRequireDefault(require("./FormClass"));

var _Util = _interopRequireDefault(require("../Util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var EditUserModal = /*#__PURE__*/function (_Modal) {
  _inherits(EditUserModal, _Modal);

  var _super = _createSuper(EditUserModal);

  function EditUserModal(selector) {
    var _this;

    _classCallCheck(this, EditUserModal);

    _this = _super.call(this, selector);
    _this.form = _this.modal.find("form");
    _this.submitButton = _this.modal.find("#user-form-modal-submit");
    _this.isDeleteAction = false;
    _this.user = {};
    _this.userApi = new _UserApi["default"]();
    _this.roleApi = new _RoleApiClass["default"]();
    return _this;
  }

  _createClass(EditUserModal, [{
    key: "fillForm",
    value: function () {
      var _fillForm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var roles, item, input;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.roleApi.loadAllRoles();

              case 2:
                roles = _context.sent;

                for (item in this.user) {
                  if (this.user.hasOwnProperty(item)) {
                    input = this.form.find("input[name=" + item + "]," + "select[name=" + item + "]");

                    if (item !== "authorities") {
                      input.val(this.user[item]);
                    } else {
                      _Util["default"].fillSelectElementOfRoles(input, roles, this.user[item]);
                    }
                  }
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fillForm() {
        return _fillForm.apply(this, arguments);
      }

      return fillForm;
    }()
  }, {
    key: "toggleModal",
    value: function () {
      var _toggleModal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var idInput, passwordFormGroup;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.fillForm();

              case 2:
                this.modal.find(".modal-title").text(this.isDeleteAction ? "Delete user" : "Edit user");
                this.form.find("input, select").attr("disabled", this.isDeleteAction);
                this.form.find("button[type=submit]").hide();
                idInput = this.form.find("input[name=id]");
                idInput.attr("disabled", true);
                idInput.closest(".form-group").removeClass("d-none");
                passwordFormGroup = this.form.find("input[type=password]").closest(".form-group");
                this.isDeleteAction ? passwordFormGroup.hide() : passwordFormGroup.show();
                this.submitButton.removeClass(this.isDeleteAction ? "btn-primary" : "btn-danger").addClass(this.isDeleteAction ? "btn-danger" : "btn-primary");
                this.submitButton.text(this.isDeleteAction ? "Delete" : "Edit user");

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function toggleModal() {
        return _toggleModal.apply(this, arguments);
      }

      return toggleModal;
    }()
  }, {
    key: "submitDeleteHandler",
    value: function () {
      var _submitDeleteHandler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event, instanceOfModal) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return instanceOfModal.userApi.deleteUser(instanceOfModal.user.id);

              case 2:
                _UsersChangedEvent["default"].trigger();

                $(event.target).off("click");
                delete this;

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function submitDeleteHandler(_x, _x2) {
        return _submitDeleteHandler.apply(this, arguments);
      }

      return submitDeleteHandler;
    }()
  }, {
    key: "submitEditHandler",
    value: function () {
      var _submitEditHandler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(event, instanceOfModal) {
        var formData;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                formData = new _FormClass["default"](instanceOfModal.form).getDataFromInputs();
                _context4.next = 3;
                return instanceOfModal.userApi.editUser(formData.id, formData);

              case 3:
                _UsersChangedEvent["default"].trigger();

                $(event.target).off("click");
                delete this;

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function submitEditHandler(_x3, _x4) {
        return _submitEditHandler.apply(this, arguments);
      }

      return submitEditHandler;
    }()
  }, {
    key: "addSubmitListener",
    value: function addSubmitListener() {
      var _this2 = this;

      var handler = this.isDeleteAction ? this.submitDeleteHandler : this.submitEditHandler;
      $(this.submitButton).on("click", /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _this2.hide();

                  _context5.next = 3;
                  return handler(e, _this2);

                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x5) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "hide",
    value: function hide() {
      this.modalInstance.hide();
    }
  }, {
    key: "show",
    value: function () {
      var _show = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data, isDeleteAction) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.user = data;
                this.isDeleteAction = isDeleteAction;
                _context6.next = 4;
                return this.toggleModal();

              case 4:
                this.modalInstance.show();
                this.addSubmitListener();

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function show(_x6, _x7) {
        return _show.apply(this, arguments);
      }

      return show;
    }()
  }]);

  return EditUserModal;
}(_Modal2["default"]);

exports["default"] = EditUserModal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVkaXRVc2VyTW9kYWxDbGFzcy5qcyJdLCJuYW1lcyI6WyJFZGl0VXNlck1vZGFsIiwic2VsZWN0b3IiLCJmb3JtIiwibW9kYWwiLCJmaW5kIiwic3VibWl0QnV0dG9uIiwiaXNEZWxldGVBY3Rpb24iLCJ1c2VyIiwidXNlckFwaSIsIlVzZXJBcGkiLCJyb2xlQXBpIiwiUm9sZUFwaSIsImxvYWRBbGxSb2xlcyIsInJvbGVzIiwiaXRlbSIsImhhc093blByb3BlcnR5IiwiaW5wdXQiLCJ2YWwiLCJVdGlsIiwiZmlsbFNlbGVjdEVsZW1lbnRPZlJvbGVzIiwiZmlsbEZvcm0iLCJ0ZXh0IiwiYXR0ciIsImhpZGUiLCJpZElucHV0IiwiY2xvc2VzdCIsInJlbW92ZUNsYXNzIiwicGFzc3dvcmRGb3JtR3JvdXAiLCJzaG93IiwiYWRkQ2xhc3MiLCJldmVudCIsImluc3RhbmNlT2ZNb2RhbCIsImRlbGV0ZVVzZXIiLCJpZCIsIlVzZXJzQ2hhbmdlZEV2ZW50IiwidHJpZ2dlciIsIiQiLCJ0YXJnZXQiLCJvZmYiLCJmb3JtRGF0YSIsIkZvcm0iLCJnZXREYXRhRnJvbUlucHV0cyIsImVkaXRVc2VyIiwiaGFuZGxlciIsInN1Ym1pdERlbGV0ZUhhbmRsZXIiLCJzdWJtaXRFZGl0SGFuZGxlciIsIm9uIiwiZSIsIm1vZGFsSW5zdGFuY2UiLCJkYXRhIiwidG9nZ2xlTW9kYWwiLCJhZGRTdWJtaXRMaXN0ZW5lciIsIk1vZGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQkEsYTs7Ozs7QUFDakIseUJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFBQTs7QUFDbEIsOEJBQU1BLFFBQU47QUFDQSxVQUFLQyxJQUFMLEdBQVksTUFBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCLE1BQWhCLENBQVo7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtGLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQix5QkFBaEIsQ0FBcEI7QUFDQSxVQUFLRSxjQUFMLEdBQXNCLEtBQXRCO0FBQ0EsVUFBS0MsSUFBTCxHQUFZLEVBQVo7QUFHQSxVQUFLQyxPQUFMLEdBQWUsSUFBSUMsbUJBQUosRUFBZjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxJQUFJQyx3QkFBSixFQUFmO0FBVGtCO0FBVXJCOzs7Ozs7Ozs7Ozs7dUJBR3VCLEtBQUtELE9BQUwsQ0FBYUUsWUFBYixFOzs7QUFBZEMsZ0JBQUFBLEs7O0FBRU4scUJBQVFDLElBQVIsSUFBZ0IsS0FBS1AsSUFBckIsRUFBMkI7QUFDdkIsc0JBQUcsS0FBS0EsSUFBTCxDQUFVUSxjQUFWLENBQXlCRCxJQUF6QixDQUFILEVBQWtDO0FBRXhCRSxvQkFBQUEsS0FGd0IsR0FFaEIsS0FBS2QsSUFBTCxDQUFVRSxJQUFWLENBQ1YsZ0JBQWVVLElBQWYsR0FBcUIsSUFBckIsR0FDQSxjQURBLEdBQ2dCQSxJQURoQixHQUNzQixHQUZaLENBRmdCOztBQU85Qix3QkFBR0EsSUFBSSxLQUFLLGFBQVosRUFBMkI7QUFDdkJFLHNCQUFBQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxLQUFLVixJQUFMLENBQVVPLElBQVYsQ0FBVjtBQUNILHFCQUZELE1BRU87QUFDSEksdUNBQUtDLHdCQUFMLENBQThCSCxLQUE5QixFQUFxQ0gsS0FBckMsRUFBNEMsS0FBS04sSUFBTCxDQUFVTyxJQUFWLENBQTVDO0FBQ0g7QUFDSjtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJTSxLQUFLTSxRQUFMLEU7OztBQUVOLHFCQUFLakIsS0FBTCxDQUFXQyxJQUFYLENBQWdCLGNBQWhCLEVBQ0tpQixJQURMLENBQ1UsS0FBS2YsY0FBTCxHQUFzQixhQUF0QixHQUFzQyxXQURoRDtBQUVBLHFCQUFLSixJQUFMLENBQVVFLElBQVYsQ0FBZSxlQUFmLEVBQWdDa0IsSUFBaEMsQ0FBcUMsVUFBckMsRUFBaUQsS0FBS2hCLGNBQXREO0FBQ0EscUJBQUtKLElBQUwsQ0FBVUUsSUFBVixDQUFlLHFCQUFmLEVBQXNDbUIsSUFBdEM7QUFFTUMsZ0JBQUFBLE8sR0FBVSxLQUFLdEIsSUFBTCxDQUFVRSxJQUFWLENBQWUsZ0JBQWYsQztBQUNoQm9CLGdCQUFBQSxPQUFPLENBQUNGLElBQVIsQ0FBYSxVQUFiLEVBQXlCLElBQXpCO0FBQ0FFLGdCQUFBQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsYUFBaEIsRUFBK0JDLFdBQS9CLENBQTJDLFFBQTNDO0FBRU1DLGdCQUFBQSxpQixHQUFvQixLQUFLekIsSUFBTCxDQUFVRSxJQUFWLENBQWUsc0JBQWYsRUFBdUNxQixPQUF2QyxDQUErQyxhQUEvQyxDO0FBRTFCLHFCQUFLbkIsY0FBTCxHQUFzQnFCLGlCQUFpQixDQUFDSixJQUFsQixFQUF0QixHQUFpREksaUJBQWlCLENBQUNDLElBQWxCLEVBQWpEO0FBRUEscUJBQUt2QixZQUFMLENBQ0txQixXQURMLENBQ2lCLEtBQUtwQixjQUFMLEdBQXNCLGFBQXRCLEdBQXNDLFlBRHZELEVBRUt1QixRQUZMLENBRWMsS0FBS3ZCLGNBQUwsR0FBc0IsWUFBdEIsR0FBcUMsYUFGbkQ7QUFJQSxxQkFBS0QsWUFBTCxDQUNLZ0IsSUFETCxDQUNVLEtBQUtmLGNBQUwsR0FBc0IsUUFBdEIsR0FBaUMsV0FEM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkdBSXFCd0IsSyxFQUFPQyxlOzs7Ozs7dUJBQ3ZCQSxlQUFlLENBQUN2QixPQUFoQixDQUF3QndCLFVBQXhCLENBQW1DRCxlQUFlLENBQUN4QixJQUFoQixDQUFxQjBCLEVBQXhELEM7OztBQUNOQyw4Q0FBa0JDLE9BQWxCOztBQUNBQyxnQkFBQUEsQ0FBQyxDQUFDTixLQUFLLENBQUNPLE1BQVAsQ0FBRCxDQUFnQkMsR0FBaEIsQ0FBb0IsT0FBcEI7QUFDQSx1QkFBTyxJQUFQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lHQUdvQlIsSyxFQUFPQyxlOzs7Ozs7QUFDckJRLGdCQUFBQSxRLEdBQVcsSUFBSUMscUJBQUosQ0FBU1QsZUFBZSxDQUFDN0IsSUFBekIsRUFBK0J1QyxpQkFBL0IsRTs7dUJBQ1hWLGVBQWUsQ0FBQ3ZCLE9BQWhCLENBQXdCa0MsUUFBeEIsQ0FBaUNILFFBQVEsQ0FBQ04sRUFBMUMsRUFBOENNLFFBQTlDLEM7OztBQUNOTCw4Q0FBa0JDLE9BQWxCOztBQUNBQyxnQkFBQUEsQ0FBQyxDQUFDTixLQUFLLENBQUNPLE1BQVAsQ0FBRCxDQUFnQkMsR0FBaEIsQ0FBb0IsT0FBcEI7QUFDQSx1QkFBTyxJQUFQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBR2U7QUFBQTs7QUFDZixVQUFNSyxPQUFPLEdBQUcsS0FBS3JDLGNBQUwsR0FBc0IsS0FBS3NDLG1CQUEzQixHQUFpRCxLQUFLQyxpQkFBdEU7QUFDQVQsTUFBQUEsQ0FBQyxDQUFDLEtBQUsvQixZQUFOLENBQUQsQ0FBcUJ5QyxFQUFyQixDQUF3QixPQUF4QjtBQUFBLDJFQUFpQyxrQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzdCLGtCQUFBLE1BQUksQ0FBQ3hCLElBQUw7O0FBRDZCO0FBQUEseUJBRXZCb0IsT0FBTyxDQUFDSSxDQUFELEVBQUksTUFBSixDQUZnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFqQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlIOzs7MkJBRU07QUFDSCxXQUFLQyxhQUFMLENBQW1CekIsSUFBbkI7QUFDSDs7Ozs0RkFFVTBCLEksRUFBTTNDLGM7Ozs7O0FBQ2IscUJBQUtDLElBQUwsR0FBWTBDLElBQVo7QUFDQSxxQkFBSzNDLGNBQUwsR0FBc0JBLGNBQXRCOzt1QkFDTSxLQUFLNEMsV0FBTCxFOzs7QUFDTixxQkFBS0YsYUFBTCxDQUFtQnBCLElBQW5CO0FBQ0EscUJBQUt1QixpQkFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXpGbUNDLGtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsLmpzXCJcclxuaW1wb3J0IFVzZXJBcGkgZnJvbSBcIi4uL2FwaS9Vc2VyQXBpXCI7XHJcbmltcG9ydCBSb2xlQXBpIGZyb20gXCIuLi9hcGkvUm9sZUFwaUNsYXNzXCI7XHJcbmltcG9ydCBVc2Vyc0NoYW5nZWRFdmVudCBmcm9tIFwiLi9Vc2Vyc0NoYW5nZWRFdmVudFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtQ2xhc3NcIjtcclxuaW1wb3J0IFV0aWwgZnJvbSBcIi4uL1V0aWxcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0VXNlck1vZGFsIGV4dGVuZHMgTW9kYWwge1xyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcclxuICAgICAgICBzdXBlcihzZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5tb2RhbC5maW5kKFwiZm9ybVwiKTtcclxuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbiA9IHRoaXMubW9kYWwuZmluZChcIiN1c2VyLWZvcm0tbW9kYWwtc3VibWl0XCIpO1xyXG4gICAgICAgIHRoaXMuaXNEZWxldGVBY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVzZXIgPSB7fTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMudXNlckFwaSA9IG5ldyBVc2VyQXBpKCk7XHJcbiAgICAgICAgdGhpcy5yb2xlQXBpID0gbmV3IFJvbGVBcGkoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmaWxsRm9ybSgpIHtcclxuICAgICAgICBjb25zdCByb2xlcyA9IGF3YWl0IHRoaXMucm9sZUFwaS5sb2FkQWxsUm9sZXMoKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpdGVtIGluIHRoaXMudXNlcikge1xyXG4gICAgICAgICAgICBpZih0aGlzLnVzZXIuaGFzT3duUHJvcGVydHkoaXRlbSkpe1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5mb3JtLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJpbnB1dFtuYW1lPVwiKyBpdGVtICtcIl0sXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0W25hbWU9XCIrIGl0ZW0gK1wiXVwiXHJcbiAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoaXRlbSAhPT0gXCJhdXRob3JpdGllc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsKHRoaXMudXNlcltpdGVtXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFV0aWwuZmlsbFNlbGVjdEVsZW1lbnRPZlJvbGVzKGlucHV0LCByb2xlcywgdGhpcy51c2VyW2l0ZW1dKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB0b2dnbGVNb2RhbCgpe1xyXG4gICAgICAgICBhd2FpdCB0aGlzLmZpbGxGb3JtKCk7XHJcblxyXG4gICAgICAgICB0aGlzLm1vZGFsLmZpbmQoXCIubW9kYWwtdGl0bGVcIilcclxuICAgICAgICAgICAgIC50ZXh0KHRoaXMuaXNEZWxldGVBY3Rpb24gPyBcIkRlbGV0ZSB1c2VyXCIgOiBcIkVkaXQgdXNlclwiKTtcclxuICAgICAgICAgdGhpcy5mb3JtLmZpbmQoXCJpbnB1dCwgc2VsZWN0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0aGlzLmlzRGVsZXRlQWN0aW9uKTtcclxuICAgICAgICAgdGhpcy5mb3JtLmZpbmQoXCJidXR0b25bdHlwZT1zdWJtaXRdXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgIGNvbnN0IGlkSW5wdXQgPSB0aGlzLmZvcm0uZmluZChcImlucHV0W25hbWU9aWRdXCIpO1xyXG4gICAgICAgICBpZElucHV0LmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICAgaWRJbnB1dC5jbG9zZXN0KFwiLmZvcm0tZ3JvdXBcIikucmVtb3ZlQ2xhc3MoXCJkLW5vbmVcIik7XHJcblxyXG4gICAgICAgICBjb25zdCBwYXNzd29yZEZvcm1Hcm91cCA9IHRoaXMuZm9ybS5maW5kKFwiaW5wdXRbdHlwZT1wYXNzd29yZF1cIikuY2xvc2VzdChcIi5mb3JtLWdyb3VwXCIpO1xyXG5cclxuICAgICAgICAgdGhpcy5pc0RlbGV0ZUFjdGlvbiA/IHBhc3N3b3JkRm9ybUdyb3VwLmhpZGUoKSA6IHBhc3N3b3JkRm9ybUdyb3VwLnNob3coKTtcclxuXHJcbiAgICAgICAgIHRoaXMuc3VibWl0QnV0dG9uXHJcbiAgICAgICAgICAgICAucmVtb3ZlQ2xhc3ModGhpcy5pc0RlbGV0ZUFjdGlvbiA/IFwiYnRuLXByaW1hcnlcIiA6IFwiYnRuLWRhbmdlclwiKVxyXG4gICAgICAgICAgICAgLmFkZENsYXNzKHRoaXMuaXNEZWxldGVBY3Rpb24gPyBcImJ0bi1kYW5nZXJcIiA6IFwiYnRuLXByaW1hcnlcIik7XHJcblxyXG4gICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvblxyXG4gICAgICAgICAgICAgLnRleHQodGhpcy5pc0RlbGV0ZUFjdGlvbiA/IFwiRGVsZXRlXCIgOiBcIkVkaXQgdXNlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdWJtaXREZWxldGVIYW5kbGVyKGV2ZW50LCBpbnN0YW5jZU9mTW9kYWwpIHtcclxuICAgICAgICBhd2FpdCBpbnN0YW5jZU9mTW9kYWwudXNlckFwaS5kZWxldGVVc2VyKGluc3RhbmNlT2ZNb2RhbC51c2VyLmlkKTtcclxuICAgICAgICBVc2Vyc0NoYW5nZWRFdmVudC50cmlnZ2VyKCk7XHJcbiAgICAgICAgJChldmVudC50YXJnZXQpLm9mZihcImNsaWNrXCIpO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHN1Ym1pdEVkaXRIYW5kbGVyKGV2ZW50LCBpbnN0YW5jZU9mTW9kYWwpIHtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtKGluc3RhbmNlT2ZNb2RhbC5mb3JtKS5nZXREYXRhRnJvbUlucHV0cygpO1xyXG4gICAgICAgIGF3YWl0IGluc3RhbmNlT2ZNb2RhbC51c2VyQXBpLmVkaXRVc2VyKGZvcm1EYXRhLmlkLCBmb3JtRGF0YSk7XHJcbiAgICAgICAgVXNlcnNDaGFuZ2VkRXZlbnQudHJpZ2dlcigpO1xyXG4gICAgICAgICQoZXZlbnQudGFyZ2V0KS5vZmYoXCJjbGlja1wiKTtcclxuICAgICAgICBkZWxldGUgdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRTdWJtaXRMaXN0ZW5lcigpe1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmlzRGVsZXRlQWN0aW9uID8gdGhpcy5zdWJtaXREZWxldGVIYW5kbGVyIDogdGhpcy5zdWJtaXRFZGl0SGFuZGxlcjtcclxuICAgICAgICAkKHRoaXMuc3VibWl0QnV0dG9uKS5vbihcImNsaWNrXCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICAgICBhd2FpdCBoYW5kbGVyKGUsIHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbEluc3RhbmNlLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzaG93KGRhdGEsIGlzRGVsZXRlQWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gZGF0YTtcclxuICAgICAgICB0aGlzLmlzRGVsZXRlQWN0aW9uID0gaXNEZWxldGVBY3Rpb247XHJcbiAgICAgICAgYXdhaXQgdGhpcy50b2dnbGVNb2RhbCgpO1xyXG4gICAgICAgIHRoaXMubW9kYWxJbnN0YW5jZS5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5hZGRTdWJtaXRMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG59Il19
},{"../Util":1,"../api/RoleApiClass":3,"../api/UserApi":4,"./FormClass":7,"./Modal.js":8,"./UsersChangedEvent":11}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Form = /*#__PURE__*/function () {
  function Form(selector) {
    _classCallCheck(this, Form);

    this.element = $(selector);
    this.data = {
      action: "",
      method: "",
      params: {}
    };
  }

  _createClass(Form, [{
    key: "getData",
    value: function getData() {
      this.data.action = this.element.attr("action");
      this.data.method = this.element.attr("method");
      this.data.params = this.getDataFromInputs();
      return this.data;
    }
  }, {
    key: "getDataFromInputs",
    value: function getDataFromInputs() {
      var inputs = this.element.find("input, select");
      var data = {};
      inputs.each(function (idx, elem) {
        var name = $(elem).attr("name");
        var val = $(elem).val();

        if (name !== "authorities") {
          data[name] = val;
        } else {
          data[name] = [];
          val.forEach(function (elem) {
            data[name].push({
              authority: elem
            });
          });
        }
      });
      return data;
    }
  }]);

  return Form;
}();

exports["default"] = Form;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1DbGFzcy5qcyJdLCJuYW1lcyI6WyJGb3JtIiwic2VsZWN0b3IiLCJlbGVtZW50IiwiJCIsImRhdGEiLCJhY3Rpb24iLCJtZXRob2QiLCJwYXJhbXMiLCJhdHRyIiwiZ2V0RGF0YUZyb21JbnB1dHMiLCJpbnB1dHMiLCJmaW5kIiwiZWFjaCIsImlkeCIsImVsZW0iLCJuYW1lIiwidmFsIiwiZm9yRWFjaCIsInB1c2giLCJhdXRob3JpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBcUJBLEk7QUFDakIsZ0JBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDbEIsU0FBS0MsT0FBTCxHQUFlQyxDQUFDLENBQUNGLFFBQUQsQ0FBaEI7QUFDQSxTQUFLRyxJQUFMLEdBQVk7QUFDUkMsTUFBQUEsTUFBTSxFQUFFLEVBREE7QUFFUkMsTUFBQUEsTUFBTSxFQUFFLEVBRkE7QUFHUkMsTUFBQUEsTUFBTSxFQUFFO0FBSEEsS0FBWjtBQUtIOzs7OzhCQUVTO0FBQ04sV0FBS0gsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQUtILE9BQUwsQ0FBYU0sSUFBYixDQUFrQixRQUFsQixDQUFuQjtBQUNBLFdBQUtKLElBQUwsQ0FBVUUsTUFBVixHQUFtQixLQUFLSixPQUFMLENBQWFNLElBQWIsQ0FBa0IsUUFBbEIsQ0FBbkI7QUFDQSxXQUFLSixJQUFMLENBQVVHLE1BQVYsR0FBbUIsS0FBS0UsaUJBQUwsRUFBbkI7QUFFQSxhQUFPLEtBQUtMLElBQVo7QUFDSDs7O3dDQUVtQjtBQUNoQixVQUFNTSxNQUFNLEdBQUcsS0FBS1IsT0FBTCxDQUFhUyxJQUFiLENBQWtCLGVBQWxCLENBQWY7QUFDQSxVQUFNUCxJQUFJLEdBQUcsRUFBYjtBQUVBTSxNQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWSxVQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUN2QixZQUFNQyxJQUFJLEdBQUdaLENBQUMsQ0FBQ1csSUFBRCxDQUFELENBQVFOLElBQVIsQ0FBYSxNQUFiLENBQWI7QUFDQSxZQUFNUSxHQUFHLEdBQUdiLENBQUMsQ0FBQ1csSUFBRCxDQUFELENBQVFFLEdBQVIsRUFBWjs7QUFFQSxZQUFHRCxJQUFJLEtBQUssYUFBWixFQUEyQjtBQUN2QlgsVUFBQUEsSUFBSSxDQUFDVyxJQUFELENBQUosR0FBYUMsR0FBYjtBQUNILFNBRkQsTUFFTztBQUNIWixVQUFBQSxJQUFJLENBQUNXLElBQUQsQ0FBSixHQUFhLEVBQWI7QUFDQUMsVUFBQUEsR0FBRyxDQUFDQyxPQUFKLENBQVksVUFBQUgsSUFBSSxFQUFJO0FBQ2hCVixZQUFBQSxJQUFJLENBQUNXLElBQUQsQ0FBSixDQUFXRyxJQUFYLENBQWdCO0FBQUNDLGNBQUFBLFNBQVMsRUFBRUw7QUFBWixhQUFoQjtBQUNILFdBRkQ7QUFHSDtBQUNKLE9BWkQ7QUFjQSxhQUFPVixJQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gJChzZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICAgICAgICBhY3Rpb246IFwiXCIsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJcIixcclxuICAgICAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YS5hY3Rpb24gPSB0aGlzLmVsZW1lbnQuYXR0cihcImFjdGlvblwiKTtcclxuICAgICAgICB0aGlzLmRhdGEubWV0aG9kID0gdGhpcy5lbGVtZW50LmF0dHIoXCJtZXRob2RcIik7XHJcbiAgICAgICAgdGhpcy5kYXRhLnBhcmFtcyA9IHRoaXMuZ2V0RGF0YUZyb21JbnB1dHMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhRnJvbUlucHV0cygpIHtcclxuICAgICAgICBjb25zdCBpbnB1dHMgPSB0aGlzLmVsZW1lbnQuZmluZChcImlucHV0LCBzZWxlY3RcIik7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHt9XHJcblxyXG4gICAgICAgIGlucHV0cy5lYWNoKChpZHgsIGVsZW0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9ICQoZWxlbSkuYXR0cihcIm5hbWVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9ICQoZWxlbSkudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBpZihuYW1lICE9PSBcImF1dGhvcml0aWVzXCIpIHtcclxuICAgICAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhW25hbWVdID0gW107XHJcbiAgICAgICAgICAgICAgICB2YWwuZm9yRWFjaChlbGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW25hbWVdLnB1c2goe2F1dGhvcml0eTogZWxlbX0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function Modal(selector) {
  _classCallCheck(this, Modal);

  this.modal = $(selector);
  this.modalInstance = new bootstrap.Modal(this.modal[0]);
};

exports["default"] = Modal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsLmpzIl0sIm5hbWVzIjpbIk1vZGFsIiwic2VsZWN0b3IiLCJtb2RhbCIsIiQiLCJtb2RhbEluc3RhbmNlIiwiYm9vdHN0cmFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFBcUJBLEssR0FDakIsZUFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNsQixPQUFLQyxLQUFMLEdBQWFDLENBQUMsQ0FBQ0YsUUFBRCxDQUFkO0FBQ0EsT0FBS0csYUFBTCxHQUFxQixJQUFJQyxTQUFTLENBQUNMLEtBQWQsQ0FBb0IsS0FBS0UsS0FBTCxDQUFXLENBQVgsQ0FBcEIsQ0FBckI7QUFDSCxDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcclxuICAgICAgICB0aGlzLm1vZGFsID0gJChzZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy5tb2RhbEluc3RhbmNlID0gbmV3IGJvb3RzdHJhcC5Nb2RhbCh0aGlzLm1vZGFsWzBdKTtcclxuICAgIH1cclxufSJdfQ==
},{}],9:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _FormClass = _interopRequireDefault(require("./FormClass"));

var _UserApi = _interopRequireDefault(require("../api/UserApi"));

var _RoleApiClass = _interopRequireDefault(require("../api/RoleApiClass"));

var _Util = _interopRequireDefault(require("../Util"));

var _UsersChangedEvent = _interopRequireDefault(require("./UsersChangedEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SaveUserForm = /*#__PURE__*/function (_Form) {
  _inherits(SaveUserForm, _Form);

  var _super = _createSuper(SaveUserForm);

  function SaveUserForm(selector) {
    var _this;

    _classCallCheck(this, SaveUserForm);

    _this = _super.call(this, selector);
    _this.userApi = new _UserApi["default"]();
    _this.roleApi = new _RoleApiClass["default"]();
    _this.submitButton = _this.element.find("button[type=submit]");

    _this.init();

    return _this;
  }

  _createClass(SaveUserForm, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var roles, selectElementOfRoles;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.roleApi.loadAllRoles();

              case 2:
                roles = _context.sent;
                selectElementOfRoles = this.element.find("select[name=authorities]");

                _Util["default"].fillSelectElementOfRoles(selectElementOfRoles, roles);

                _context.next = 7;
                return this.addSubmitListener();

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "addSubmitListener",
    value: function () {
      var _addSubmitListener = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.element.on("submit", /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            e.preventDefault();
                            _context2.next = 3;
                            return _this2.submitHandler(e);

                          case 3:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function addSubmitListener() {
        return _addSubmitListener.apply(this, arguments);
      }

      return addSubmitListener;
    }()
  }, {
    key: "submitHandler",
    value: function () {
      var _submitHandler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
        var user;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                user = this.getDataFromInputs();
                console.log(window.location.href);
                _context4.next = 4;
                return this.userApi.saveUser(user);

              case 4:
                _UsersChangedEvent["default"].trigger();

                $('#myTab li:first-child a').tab('show');

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function submitHandler(_x2) {
        return _submitHandler.apply(this, arguments);
      }

      return submitHandler;
    }()
  }]);

  return SaveUserForm;
}(_FormClass["default"]);

exports["default"] = SaveUserForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNhdmVVc2VyRm9ybS5qcyJdLCJuYW1lcyI6WyJTYXZlVXNlckZvcm0iLCJzZWxlY3RvciIsInVzZXJBcGkiLCJVc2VyQXBpIiwicm9sZUFwaSIsIlJvbGVBcGkiLCJzdWJtaXRCdXR0b24iLCJlbGVtZW50IiwiZmluZCIsImluaXQiLCJsb2FkQWxsUm9sZXMiLCJyb2xlcyIsInNlbGVjdEVsZW1lbnRPZlJvbGVzIiwiVXRpbCIsImZpbGxTZWxlY3RFbGVtZW50T2ZSb2xlcyIsImFkZFN1Ym1pdExpc3RlbmVyIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXRIYW5kbGVyIiwidXNlciIsImdldERhdGFGcm9tSW5wdXRzIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNhdmVVc2VyIiwiVXNlcnNDaGFuZ2VkRXZlbnQiLCJ0cmlnZ2VyIiwiJCIsInRhYiIsIkZvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7OztBQUNqQix3QkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsUUFBTjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxJQUFJQyxtQkFBSixFQUFmO0FBQ0EsVUFBS0MsT0FBTCxHQUFlLElBQUlDLHdCQUFKLEVBQWY7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtDLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixxQkFBbEIsQ0FBcEI7O0FBQ0EsVUFBS0MsSUFBTDs7QUFMa0I7QUFNckI7Ozs7Ozs7Ozs7Ozt1QkFHdUIsS0FBS0wsT0FBTCxDQUFhTSxZQUFiLEU7OztBQUFkQyxnQkFBQUEsSztBQUNBQyxnQkFBQUEsb0IsR0FDRixLQUFLTCxPQUFMLENBQWFDLElBQWIsQ0FBa0IsMEJBQWxCLEM7O0FBRUpLLGlDQUFLQyx3QkFBTCxDQUE4QkYsb0JBQTlCLEVBQW9ERCxLQUFwRDs7O3VCQUVNLEtBQUtJLGlCQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSU4scUJBQUtSLE9BQUwsQ0FBYVMsRUFBYixDQUFnQixRQUFoQjtBQUFBLHFGQUEwQixrQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3RCQSw0QkFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBRHNCO0FBQUEsbUNBRWhCLE1BQUksQ0FBQ0MsYUFBTCxDQUFtQkYsQ0FBbkIsQ0FGZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQTFCOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FHQU1nQkEsQzs7Ozs7O0FBQ1ZHLGdCQUFBQSxJLEdBQU8sS0FBS0MsaUJBQUwsRTtBQUNiQyxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBNUI7O3VCQUNNLEtBQUt4QixPQUFMLENBQWF5QixRQUFiLENBQXNCUCxJQUF0QixDOzs7QUFDTlEsOENBQWtCQyxPQUFsQjs7QUFDQUMsZ0JBQUFBLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCQyxHQUE3QixDQUFpQyxNQUFqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQS9Ca0NDLHFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybUNsYXNzXCI7XHJcbmltcG9ydCBVc2VyQXBpIGZyb20gXCIuLi9hcGkvVXNlckFwaVwiO1xyXG5pbXBvcnQgUm9sZUFwaSBmcm9tIFwiLi4vYXBpL1JvbGVBcGlDbGFzc1wiO1xyXG5pbXBvcnQgVXRpbCBmcm9tIFwiLi4vVXRpbFwiO1xyXG5pbXBvcnQgVXNlcnNDaGFuZ2VkRXZlbnQgZnJvbSBcIi4vVXNlcnNDaGFuZ2VkRXZlbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhdmVVc2VyRm9ybSBleHRlbmRzIEZvcm0ge1xyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcclxuICAgICAgICBzdXBlcihzZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy51c2VyQXBpID0gbmV3IFVzZXJBcGkoKTtcclxuICAgICAgICB0aGlzLnJvbGVBcGkgPSBuZXcgUm9sZUFwaSgpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uID0gdGhpcy5lbGVtZW50LmZpbmQoXCJidXR0b25bdHlwZT1zdWJtaXRdXCIpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoKSB7XHJcbiAgICAgICAgY29uc3Qgcm9sZXMgPSBhd2FpdCB0aGlzLnJvbGVBcGkubG9hZEFsbFJvbGVzKCk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0RWxlbWVudE9mUm9sZXMgPVxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZmluZChcInNlbGVjdFtuYW1lPWF1dGhvcml0aWVzXVwiKTtcclxuXHJcbiAgICAgICAgVXRpbC5maWxsU2VsZWN0RWxlbWVudE9mUm9sZXMoc2VsZWN0RWxlbWVudE9mUm9sZXMsIHJvbGVzKTtcclxuXHJcbiAgICAgICAgYXdhaXQgdGhpcy5hZGRTdWJtaXRMaXN0ZW5lcigpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWRkU3VibWl0TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm9uKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zdWJtaXRIYW5kbGVyKGUpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzdWJtaXRIYW5kbGVyKGUpIHtcclxuICAgICAgICBjb25zdCB1c2VyID0gdGhpcy5nZXREYXRhRnJvbUlucHV0cygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICBhd2FpdCB0aGlzLnVzZXJBcGkuc2F2ZVVzZXIodXNlcik7XHJcbiAgICAgICAgVXNlcnNDaGFuZ2VkRXZlbnQudHJpZ2dlcigpO1xyXG4gICAgICAgICQoJyNteVRhYiBsaTpmaXJzdC1jaGlsZCBhJykudGFiKCdzaG93JylcclxuICAgIH1cclxufSJdfQ==
},{"../Util":1,"../api/RoleApiClass":3,"../api/UserApi":4,"./FormClass":7,"./UsersChangedEvent":11}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _EditUserModalClass = _interopRequireDefault(require("./EditUserModalClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserInfoTable = /*#__PURE__*/function () {
  function UserInfoTable(selector) {
    _classCallCheck(this, UserInfoTable);

    this.table = $(selector);
    this.body = this.table.find("tbody");
    this.modal = new _EditUserModalClass["default"]("#user-form-modal");
  }

  _createClass(UserInfoTable, [{
    key: "fillTable",
    value: function fillTable(users) {
      var _this = this;

      this.body.text("");
      users.forEach(function (user) {
        var authorities = "";
        user.authorities.forEach(function (item) {
          var authority = item.authority.replace("ROLE_", "");
          authorities += " " + authority;
        });
        authorities = authorities.trim();
        var userRow = "\n                <tr>\n                    <td data-name=\"id\">".concat(user.id, "</td>\n                    <td data-name=\"firstName\">").concat(user.firstName, "</td>\n                    <td data-name=\"lastName\">").concat(user.lastName, "</td>\n                    <td data-name=\"age\">").concat(user.age, "</td>\n                    <td data-name=\"email\">").concat(user.email, "</td>\n                    <td data-name=\"authorities\">").concat(authorities, "</td>\n                    <td><button class=\"btn btn-primary user-info-table__button\"\n                                data-delete=\"false\">Edit</button></td>\n                    <td><button class=\"btn btn-danger user-info-table__button\"\n                                data-delete=\"true\">Delete</button></td>\n                </tr>\n            ");

        _this.body.append(userRow);
      });
    }
  }, {
    key: "addButtonListeners",
    value: function addButtonListeners() {
      var _this2 = this;

      $(".user-info-table__button").on("click", function (e) {
        return _this2.clickButtonHandler(e);
      });
    }
  }, {
    key: "clickButtonHandler",
    value: function clickButtonHandler(e) {
      var button = $(e.target);
      var isDeleteButton = !!button.data("delete");
      var tableRow = button.closest("tr");
      var data = {};
      $(tableRow).find("td[data-name]").each(function (idx, item) {
        var name = $(item).data("name");
        var value = $(item).text();

        if (name !== "authorities") {
          data[name] = value;
        } else {
          var rolesArr = value.split(" ");
          data[name] = value.split(" ");
        }
      });
      this.modal.show(data, isDeleteButton).then();
    }
  }, {
    key: "init",
    value: function init(users) {
      this.fillTable(users);
      this.addButtonListeners();
    }
  }]);

  return UserInfoTable;
}();

exports["default"] = UserInfoTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVzZXJJbmZvVGFibGVDbGFzcy5qcyJdLCJuYW1lcyI6WyJVc2VySW5mb1RhYmxlIiwic2VsZWN0b3IiLCJ0YWJsZSIsIiQiLCJib2R5IiwiZmluZCIsIm1vZGFsIiwiRWRpdFVzZXJNb2RhbCIsInVzZXJzIiwidGV4dCIsImZvckVhY2giLCJ1c2VyIiwiYXV0aG9yaXRpZXMiLCJpdGVtIiwiYXV0aG9yaXR5IiwicmVwbGFjZSIsInRyaW0iLCJ1c2VyUm93IiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImFnZSIsImVtYWlsIiwiYXBwZW5kIiwib24iLCJlIiwiY2xpY2tCdXR0b25IYW5kbGVyIiwiYnV0dG9uIiwidGFyZ2V0IiwiaXNEZWxldGVCdXR0b24iLCJkYXRhIiwidGFibGVSb3ciLCJjbG9zZXN0IiwiZWFjaCIsImlkeCIsIm5hbWUiLCJ2YWx1ZSIsInJvbGVzQXJyIiwic3BsaXQiLCJzaG93IiwidGhlbiIsImZpbGxUYWJsZSIsImFkZEJ1dHRvbkxpc3RlbmVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0lBRXFCQSxhO0FBQ2pCLHlCQUFZQyxRQUFaLEVBQXFCO0FBQUE7O0FBQ2pCLFNBQUtDLEtBQUwsR0FBYUMsQ0FBQyxDQUFDRixRQUFELENBQWQ7QUFDQSxTQUFLRyxJQUFMLEdBQVksS0FBS0YsS0FBTCxDQUFXRyxJQUFYLENBQWdCLE9BQWhCLENBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWEsSUFBSUMsOEJBQUosQ0FBa0Isa0JBQWxCLENBQWI7QUFDSDs7Ozs4QkFFU0MsSyxFQUFPO0FBQUE7O0FBQ2IsV0FBS0osSUFBTCxDQUFVSyxJQUFWLENBQWUsRUFBZjtBQUVBRCxNQUFBQSxLQUFLLENBQUNFLE9BQU4sQ0FBYyxVQUFBQyxJQUFJLEVBQUk7QUFDbEIsWUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0FELFFBQUFBLElBQUksQ0FBQ0MsV0FBTCxDQUFpQkYsT0FBakIsQ0FBeUIsVUFBQUcsSUFBSSxFQUFJO0FBQzdCLGNBQU1DLFNBQVMsR0FBR0QsSUFBSSxDQUFDQyxTQUFMLENBQWVDLE9BQWYsQ0FBdUIsT0FBdkIsRUFBZ0MsRUFBaEMsQ0FBbEI7QUFDQUgsVUFBQUEsV0FBVyxJQUFJLE1BQU1FLFNBQXJCO0FBQ0gsU0FIRDtBQUtBRixRQUFBQSxXQUFXLEdBQUdBLFdBQVcsQ0FBQ0ksSUFBWixFQUFkO0FBRUEsWUFBTUMsT0FBTyw4RUFFZ0JOLElBQUksQ0FBQ08sRUFGckIsb0VBR3VCUCxJQUFJLENBQUNRLFNBSDVCLG1FQUlzQlIsSUFBSSxDQUFDUyxRQUozQiw4REFLaUJULElBQUksQ0FBQ1UsR0FMdEIsZ0VBTW1CVixJQUFJLENBQUNXLEtBTnhCLHNFQU95QlYsV0FQekIseVdBQWI7O0FBZ0JBLFFBQUEsS0FBSSxDQUFDUixJQUFMLENBQVVtQixNQUFWLENBQWlCTixPQUFqQjtBQUNILE9BMUJEO0FBMkJIOzs7eUNBRW9CO0FBQUE7O0FBQ2pCZCxNQUFBQSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QnFCLEVBQTlCLENBQWlDLE9BQWpDLEVBQTBDLFVBQUNDLENBQUQ7QUFBQSxlQUFPLE1BQUksQ0FBQ0Msa0JBQUwsQ0FBd0JELENBQXhCLENBQVA7QUFBQSxPQUExQztBQUNIOzs7dUNBRWtCQSxDLEVBQUc7QUFDbEIsVUFBTUUsTUFBTSxHQUFHeEIsQ0FBQyxDQUFDc0IsQ0FBQyxDQUFDRyxNQUFILENBQWhCO0FBQ0EsVUFBTUMsY0FBYyxHQUFHLENBQUMsQ0FBQ0YsTUFBTSxDQUFDRyxJQUFQLENBQVksUUFBWixDQUF6QjtBQUNBLFVBQU1DLFFBQVEsR0FBR0osTUFBTSxDQUFDSyxPQUFQLENBQWUsSUFBZixDQUFqQjtBQUVBLFVBQU1GLElBQUksR0FBRyxFQUFiO0FBRUEzQixNQUFBQSxDQUFDLENBQUM0QixRQUFELENBQUQsQ0FBWTFCLElBQVosQ0FBaUIsZUFBakIsRUFBa0M0QixJQUFsQyxDQUF1QyxVQUFTQyxHQUFULEVBQWNyQixJQUFkLEVBQW9CO0FBQ3ZELFlBQU1zQixJQUFJLEdBQUdoQyxDQUFDLENBQUNVLElBQUQsQ0FBRCxDQUFRaUIsSUFBUixDQUFhLE1BQWIsQ0FBYjtBQUNBLFlBQU1NLEtBQUssR0FBR2pDLENBQUMsQ0FBQ1UsSUFBRCxDQUFELENBQVFKLElBQVIsRUFBZDs7QUFFQSxZQUFHMEIsSUFBSSxLQUFLLGFBQVosRUFBMkI7QUFDdkJMLFVBQUFBLElBQUksQ0FBQ0ssSUFBRCxDQUFKLEdBQWFDLEtBQWI7QUFDSCxTQUZELE1BRU87QUFDSCxjQUFNQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0UsS0FBTixDQUFZLEdBQVosQ0FBakI7QUFDQVIsVUFBQUEsSUFBSSxDQUFDSyxJQUFELENBQUosR0FBYUMsS0FBSyxDQUFDRSxLQUFOLENBQVksR0FBWixDQUFiO0FBQ0g7QUFDSixPQVZEO0FBWUEsV0FBS2hDLEtBQUwsQ0FBV2lDLElBQVgsQ0FBZ0JULElBQWhCLEVBQXNCRCxjQUF0QixFQUFzQ1csSUFBdEM7QUFDSDs7O3lCQUVJaEMsSyxFQUFPO0FBQ1IsV0FBS2lDLFNBQUwsQ0FBZWpDLEtBQWY7QUFDQSxXQUFLa0Msa0JBQUw7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFZGl0VXNlck1vZGFsIGZyb20gXCIuL0VkaXRVc2VyTW9kYWxDbGFzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm9UYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvcil7XHJcbiAgICAgICAgdGhpcy50YWJsZSA9ICQoc2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuYm9keSA9IHRoaXMudGFibGUuZmluZChcInRib2R5XCIpO1xyXG4gICAgICAgIHRoaXMubW9kYWwgPSBuZXcgRWRpdFVzZXJNb2RhbChcIiN1c2VyLWZvcm0tbW9kYWxcIik7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbFRhYmxlKHVzZXJzKSB7XHJcbiAgICAgICAgdGhpcy5ib2R5LnRleHQoXCJcIik7XHJcblxyXG4gICAgICAgIHVzZXJzLmZvckVhY2godXNlciA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhdXRob3JpdGllcyA9IFwiXCI7XHJcbiAgICAgICAgICAgIHVzZXIuYXV0aG9yaXRpZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF1dGhvcml0eSA9IGl0ZW0uYXV0aG9yaXR5LnJlcGxhY2UoXCJST0xFX1wiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgYXV0aG9yaXRpZXMgKz0gXCIgXCIgKyBhdXRob3JpdHk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBhdXRob3JpdGllcyA9IGF1dGhvcml0aWVzLnRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBgXHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbmFtZT1cImlkXCI+JHt1c2VyLmlkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGRhdGEtbmFtZT1cImZpcnN0TmFtZVwiPiR7dXNlci5maXJzdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1uYW1lPVwibGFzdE5hbWVcIj4ke3VzZXIubGFzdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgZGF0YS1uYW1lPVwiYWdlXCI+JHt1c2VyLmFnZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLW5hbWU9XCJlbWFpbFwiPiR7dXNlci5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLW5hbWU9XCJhdXRob3JpdGllc1wiPiR7YXV0aG9yaXRpZXN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSB1c2VyLWluZm8tdGFibGVfX2J1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxldGU9XCJmYWxzZVwiPkVkaXQ8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgdXNlci1pbmZvLXRhYmxlX19idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsZXRlPVwidHJ1ZVwiPkRlbGV0ZTwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICBgO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYm9keS5hcHBlbmQodXNlclJvdyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQnV0dG9uTGlzdGVuZXJzKCkge1xyXG4gICAgICAgICQoXCIudXNlci1pbmZvLXRhYmxlX19idXR0b25cIikub24oXCJjbGlja1wiLCAoZSkgPT4gdGhpcy5jbGlja0J1dHRvbkhhbmRsZXIoZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsaWNrQnV0dG9uSGFuZGxlcihlKSB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gJChlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgaXNEZWxldGVCdXR0b24gPSAhIWJ1dHRvbi5kYXRhKFwiZGVsZXRlXCIpO1xyXG4gICAgICAgIGNvbnN0IHRhYmxlUm93ID0gYnV0dG9uLmNsb3Nlc3QoXCJ0clwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHt9O1xyXG5cclxuICAgICAgICAkKHRhYmxlUm93KS5maW5kKFwidGRbZGF0YS1uYW1lXVwiKS5lYWNoKGZ1bmN0aW9uKGlkeCwgaXRlbSkge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gJChpdGVtKS5kYXRhKFwibmFtZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkKGl0ZW0pLnRleHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKG5hbWUgIT09IFwiYXV0aG9yaXRpZXNcIikge1xyXG4gICAgICAgICAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm9sZXNBcnIgPSB2YWx1ZS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbC5zaG93KGRhdGEsIGlzRGVsZXRlQnV0dG9uKS50aGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCh1c2Vycykge1xyXG4gICAgICAgIHRoaXMuZmlsbFRhYmxlKHVzZXJzKTtcclxuICAgICAgICB0aGlzLmFkZEJ1dHRvbkxpc3RlbmVycygpO1xyXG4gICAgfVxyXG59Il19
},{"./EditUserModalClass":6}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UsersChangedEvent = /*#__PURE__*/function () {
  function UsersChangedEvent() {
    _classCallCheck(this, UsersChangedEvent);
  }

  _createClass(UsersChangedEvent, null, [{
    key: "trigger",
    value: function trigger() {
      var event = new CustomEvent("usersChanged");
      document.dispatchEvent(event);
    }
  }]);

  return UsersChangedEvent;
}();

exports["default"] = UsersChangedEvent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVzZXJzQ2hhbmdlZEV2ZW50LmpzIl0sIm5hbWVzIjpbIlVzZXJzQ2hhbmdlZEV2ZW50IiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImRvY3VtZW50IiwiZGlzcGF0Y2hFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFxQkEsaUI7Ozs7Ozs7OEJBRUE7QUFDYixVQUFNQyxLQUFLLEdBQUcsSUFBSUMsV0FBSixDQUFnQixjQUFoQixDQUFkO0FBQ0FDLE1BQUFBLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkgsS0FBdkI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzQ2hhbmdlZEV2ZW50IHtcclxuXHJcbiAgICBzdGF0aWMgdHJpZ2dlcigpIHtcclxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChcInVzZXJzQ2hhbmdlZFwiKTtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgIH1cclxufSJdfQ==
},{}]},{},[5])