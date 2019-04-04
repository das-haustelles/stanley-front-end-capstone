/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/App.jsx":
/*!****************************!*\
  !*** ./client/src/App.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Calendar_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Calendar.jsx */ \"./client/src/components/Calendar.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(_components_Calendar_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null);\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL0FwcC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL0FwcC5qc3g/ZDk4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9jb21wb25lbnRzL0NhbGVuZGFyLmpzeCdcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDYWxlbmRhci8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFBQTtBQUNBO0FBR0E7Ozs7QUFSQTtBQUNBO0FBVUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/App.jsx\n");

/***/ }),

/***/ "./client/src/components/Calendar.jsx":
/*!********************************************!*\
  !*** ./client/src/components/Calendar.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dates_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dates.jsx */ \"./client/src/components/Dates.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Calendar =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Calendar, _React$Component);\n\n  function Calendar(props) {\n    var _this;\n\n    _classCallCheck(this, Calendar);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Calendar).call(this, props)); //state holds the first day of the month\n\n    _this.state = {\n      firstDay: ''\n    };\n    return _this;\n  }\n\n  _createClass(Calendar, [{\n    key: \"weekDays\",\n    value: function weekDays() {\n      return React.createElement(\"div\", null, React.createElement(\"span\", null, \" S \"), React.createElement(\"span\", null, \" M \"), React.createElement(\"span\", null, \" T \"), React.createElement(\"span\", null, \" W \"), React.createElement(\"span\", null, \" T \"), React.createElement(\"span\", null, \" F \"), React.createElement(\"span\", null, \" S \"));\n    } //PROBLEM IS HERE!!!!!!!!!!!!!!!!!!\n\n  }, {\n    key: \"changeStateToFirst\",\n    value: function changeStateToFirst() {\n      var day = new Date();\n      day.setDate(1);\n      this.state.firstDay = day;\n      console.log(\"this.state.firstDay = \", this.state.firstDay);\n    } //NOTE: might not need these lines of code. Will delete if not needed\n    // firstDayOfMonth() {\n    //   var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n    //   var weekday = new Date();\n    //   return weekdays[weekday.getDay()];\n    // }\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, this.changeStateToFirst(), React.createElement(\"div\", null, this.weekDays()), React.createElement(_Dates_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        firstday: this.state.firstDay\n      }));\n    }\n  }]);\n\n  return Calendar;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQ2FsZW5kYXIuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0NhbGVuZGFyLmpzeD9mMDBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRlcyBmcm9tICcuL0RhdGVzLmpzeCc7XG5cbmNsYXNzIENhbGVuZGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy9zdGF0ZSBob2xkcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSBtb250aFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaXJzdERheTogJycsXG4gICAgfVxuICB9XG4gIHdlZWtEYXlzKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3Bhbj4gUyA8L3NwYW4+XG4gICAgICAgIDxzcGFuPiBNIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4+IFQgPC9zcGFuPlxuICAgICAgICA8c3Bhbj4gVyA8L3NwYW4+XG4gICAgICAgIDxzcGFuPiBUIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4+IEYgPC9zcGFuPlxuICAgICAgICA8c3Bhbj4gUyA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgLy9QUk9CTEVNIElTIEhFUkUhISEhISEhISEhISEhISEhISFcbiAgY2hhbmdlU3RhdGVUb0ZpcnN0KCkge1xuICAgIHZhciBkYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGRheS5zZXREYXRlKDEpO1xuICAgIHRoaXMuc3RhdGUuZmlyc3REYXkgPSBkYXk7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzLnN0YXRlLmZpcnN0RGF5ID0gXCIsIHRoaXMuc3RhdGUuZmlyc3REYXkpXG4gIH1cblxuICAvL05PVEU6IG1pZ2h0IG5vdCBuZWVkIHRoZXNlIGxpbmVzIG9mIGNvZGUuIFdpbGwgZGVsZXRlIGlmIG5vdCBuZWVkZWRcbiAgLy8gZmlyc3REYXlPZk1vbnRoKCkge1xuICAvLyAgIHZhciB3ZWVrZGF5cyA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcbiAgLy8gICB2YXIgd2Vla2RheSA9IG5ldyBEYXRlKCk7XG4gIC8vICAgcmV0dXJuIHdlZWtkYXlzW3dlZWtkYXkuZ2V0RGF5KCldO1xuICAvLyB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+e3RoaXMuY2hhbmdlU3RhdGVUb0ZpcnN0KCl9XG4gICAgICAgIDxkaXY+e3RoaXMud2Vla0RheXMoKX08L2Rpdj5cbiAgICAgICAgPERhdGVzIGZpcnN0ZGF5PXt0aGlzLnN0YXRlLmZpcnN0RGF5fS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBOzs7QUFBQTtBQUNBO0FBV0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUdBOzs7O0FBM0NBO0FBQ0E7QUE2Q0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/Calendar.jsx\n");

/***/ }),

/***/ "./client/src/components/Dates.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Dates.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Dates =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Dates, _React$Component);\n\n  function Dates(props) {\n    var _this;\n\n    _classCallCheck(this, Dates);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dates).call(this, props));\n    _this.state = {\n      day: ''\n    };\n    return _this;\n  } //---CURRENT IDEA----\n  //we're gonna setState to firstDay - getDay. \n  //we'll set the key to the date...?\n  //can't do that because there might be two 1st, or two 29th's\n\n\n  _createClass(Dates, [{\n    key: \"firstDayOfMonth\",\n    value: function firstDayOfMonth() {\n      console.log(\"this.props.firstday = \", this.props.firstday);\n      var firstOfMonth = this.props.firstday;\n      firstOfMonth.setDate(firstOfMonth.getDate() - firstOfMonth.getDay());\n      this.state.day = firstOfMonth;\n      console.log(\"this.state.day = \", this.state.day);\n    } //dateMaker makes the Dates in the calendar\n\n  }, {\n    key: \"dateMaker\",\n    value: function dateMaker() {\n      console.log('props in Dates has ', this.props);\n      var dates = [];\n\n      for (var i = 0; i < 6; i++) {\n        dates.push(React.createElement(\"div\", null));\n\n        for (var j = 0; j < 7; j++) {\n          //key will give coordinates to each date\n          dates.push(React.createElement(\"span\", {\n            key: i.toString() + j.toString()\n          }, \" Date \"));\n        }\n      }\n\n      return dates;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, this.firstDayOfMonth(), React.createElement(\"div\", null, this.dateMaker()));\n    }\n  }]);\n\n  return Dates;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dates);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvRGF0ZXMuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0RhdGVzLmpzeD9kZGFhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jbGFzcyBEYXRlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXk6ICcnLFxuICAgIH1cbiAgfVxuXG4gIC8vLS0tQ1VSUkVOVCBJREVBLS0tLVxuICAvL3dlJ3JlIGdvbm5hIHNldFN0YXRlIHRvIGZpcnN0RGF5IC0gZ2V0RGF5LiBcbiAgLy93ZSdsbCBzZXQgdGhlIGtleSB0byB0aGUgZGF0ZS4uLj9cbiAgICAvL2Nhbid0IGRvIHRoYXQgYmVjYXVzZSB0aGVyZSBtaWdodCBiZSB0d28gMXN0LCBvciB0d28gMjl0aCdzXG4gIGZpcnN0RGF5T2ZNb250aCgpIHtcbiAgICBjb25zb2xlLmxvZyhcInRoaXMucHJvcHMuZmlyc3RkYXkgPSBcIiwgdGhpcy5wcm9wcy5maXJzdGRheSlcbiAgICB2YXIgZmlyc3RPZk1vbnRoID0gdGhpcy5wcm9wcy5maXJzdGRheTtcbiAgICBmaXJzdE9mTW9udGguc2V0RGF0ZShmaXJzdE9mTW9udGguZ2V0RGF0ZSgpIC0gZmlyc3RPZk1vbnRoLmdldERheSgpKVxuICAgIHRoaXMuc3RhdGUuZGF5ID0gZmlyc3RPZk1vbnRoO1xuICAgIGNvbnNvbGUubG9nKFwidGhpcy5zdGF0ZS5kYXkgPSBcIiwgdGhpcy5zdGF0ZS5kYXkpXG4gIH1cblxuICAvL2RhdGVNYWtlciBtYWtlcyB0aGUgRGF0ZXMgaW4gdGhlIGNhbGVuZGFyXG4gIGRhdGVNYWtlcigpIHtcbiAgICBjb25zb2xlLmxvZygncHJvcHMgaW4gRGF0ZXMgaGFzICcsIHRoaXMucHJvcHMpXG4gICAgbGV0IGRhdGVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgIGRhdGVzLnB1c2goPGRpdj48L2Rpdj4pXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDc7IGorKykge1xuICAgICAgICAvL2tleSB3aWxsIGdpdmUgY29vcmRpbmF0ZXMgdG8gZWFjaCBkYXRlXG4gICAgICAgIGRhdGVzLnB1c2goPHNwYW4ga2V5PXtpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCl9PiBEYXRlIDwvc3Bhbj4pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRlcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj57dGhpcy5maXJzdERheU9mTW9udGgoKX1cbiAgICAgICAgPGRpdj57dGhpcy5kYXRlTWFrZXIoKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRGF0ZXM7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFLQTs7OztBQXhDQTtBQUNBO0FBeUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/Dates.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.jsx */ \"./client/src/App.jsx\");\n// this is the entry point for webpack\n\nReactDOM.render(React.createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgZm9yIHdlYnBhY2tcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAuanN4J1xuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });