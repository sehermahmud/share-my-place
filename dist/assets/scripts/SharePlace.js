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
/******/ 	__webpack_require__.p = "assets/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/SharePlace.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/SharePlace.js":
/*!***************************!*\
  !*** ./src/SharePlace.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Modal */ "./src/UI/Modal.js");
/* harmony import */ var _Utility_Location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility/Location */ "./src/Utility/Location.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var PlaceFinder = /*#__PURE__*/function () {
  function PlaceFinder() {
    _classCallCheck(this, PlaceFinder);

    var addressForm = document.querySelector('form');
    var locateUserBtn = document.getElementById('locate-btn');
    locateUserBtn.addEventListener('click', this.locateUserHandler);
    addressForm.addEventListener('submit', this.findAddressHandler);
  }

  _createClass(PlaceFinder, [{
    key: "locateUserHandler",
    value: function locateUserHandler() {
      if (!navigator.geolocation) {
        alert('Location feature is not available in your browser - please use a more modern browser or manually enter an address.');
        return;
      }

      var modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__["Modal"]('loading-modal-content', 'Loading location - please wait!');
      modal.show();
      navigator.geolocation.getCurrentPosition(function (successResult) {
        modal.hide();
        var coordinates = {
          lat: successResult.coords.latitude + Math.random() * 50,
          lng: successResult.coords.longitude + Math.random() * 50
        };
        console.log(coordinates);
      }, function (error) {
        modal.hide();
        alert('Could not locate you unfortunately. Please enter an address manually!');
      });
    }
  }, {
    key: "findAddressHandler",
    value: function findAddressHandler(event) {
      event.preventDefault();
      var address = event.target.querySelector('input').value;

      if (!address || address.trim().length === 0) {
        alert('Invalid address entered - please try again!');
        return;
      } else {
        alert("it a success but it won't work because it's a fake map and location, address demo project.");
      }

      var modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__["Modal"]('loading-modal-content', 'Loading location - please wait!');
    }
  }]);

  return PlaceFinder;
}();

var placeFinder = new PlaceFinder();

/***/ }),

/***/ "./src/UI/Modal.js":
/*!*************************!*\
  !*** ./src/UI/Modal.js ***!
  \*************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Modal = /*#__PURE__*/function () {
  function Modal(contentId, fallbackText) {
    _classCallCheck(this, Modal);

    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById('modal-template');
  }

  _createClass(Modal, [{
    key: "show",
    value: function show() {
      if ('content' in document.createElement('template')) {
        var modalElements = document.importNode(this.modalTemplateEl.content, true);
        this.modalElement = modalElements.querySelector('.modal');
        this.backdropElement = modalElements.querySelector('.backdrop');
        var contentElement = document.importNode(this.contentTemplateEl.content, true);
        this.modalElement.appendChild(contentElement);
        document.body.insertAdjacentElement('afterbegin', this.modalElement);
        document.body.insertAdjacentElement('afterbegin', this.backdropElement);
      } else {
        // fallback code
        alert(this.fallbackText);
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this.modalElement) {
        document.body.removeChild(this.modalElement); // this.modalElement.remove()

        document.body.removeChild(this.backdropElement);
        this.modalElement = null;
        this.backdropElement = null;
      }
    }
  }]);

  return Modal;
}();

/***/ }),

/***/ "./src/Utility/Location.js":
/*!*********************************!*\
  !*** ./src/Utility/Location.js ***!
  \*********************************/
/*! exports provided: getAddressFromCoords, getCoordsFromAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddressFromCoords", function() { return getAddressFromCoords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoordsFromAddress", function() { return getCoordsFromAddress; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getAddressFromCoords(_x) {
  return _getAddressFromCoords.apply(this, arguments);
}

function _getAddressFromCoords() {
  _getAddressFromCoords = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(coords) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", '6th Avenue');

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAddressFromCoords.apply(this, arguments);
}

function getCoordsFromAddress(_x2) {
  return _getCoordsFromAddress.apply(this, arguments);
}

function _getCoordsFromAddress() {
  _getCoordsFromAddress = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(address) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", {
              lat: 47.01,
              lng: 33.55
            });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getCoordsFromAddress.apply(this, arguments);
}

/***/ })

/******/ });
//# sourceMappingURL=SharePlace.js.map