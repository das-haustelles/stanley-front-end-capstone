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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: SyntaxError: /Users/Stanley/Desktop/HR/stanley-front-end-capstone/package.json: Error while parsing JSON - Unexpected end of JSON input\\n    at JSON.parse (<anonymous>)\\n    at ConfigChainBuilder.addConfig (/Users/Stanley/Desktop/HR/stanley-front-end-capstone/node_modules/babel-core/lib/transformation/file/options/build-config-chain.js:150:65)\\n    at ConfigChainBuilder.findConfigs (/Users/Stanley/Desktop/HR/stanley-front-end-capstone/node_modules/babel-core/lib/transformation/file/options/build-config-chain.js:102:30)\\n    at buildConfigChain (/Users/Stanley/Desktop/HR/stanley-front-end-capstone/node_modules/babel-core/lib/transformation/file/options/build-config-chain.js:61:13)\\n    at OptionManager.init (/Users/Stanley/Desktop/HR/stanley-front-end-capstone/node_modules/babel-core/lib/transformation/file/options/option-manager.js:354:58)\\n    at File.initOptions (/Users/Stanley/Desktop/HR/stanley-front-end-capstone/node_modules/babel-core/lib/transformation/file/index.js:212:65)\\n    at new File (/Users/Stanley/Desktop/HR/stanley-front-end-capstone/node_modules/babel-core/lib/transformation/file/index.js:135:24)\\n    at Pipeline.transform (/Users/Stanley/Desktop/HR/stanley-front-end-capstone/node_modules/babel-core/lib/transformation/pipeline.js:46:16)\\n    at transpile (/Users/Stanley/Desktop/HR/stanley-front-end-capstone/node_modules/babel-loader/lib/index.js:46:20)\\n    at Object.module.exports (/Users/Stanley/Desktop/HR/stanley-front-end-capstone/node_modules/babel-loader/lib/index.js:163:20)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);