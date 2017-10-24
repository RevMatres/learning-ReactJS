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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cat", function() { return Cat; });

//
//
//    CLASSES.JS
//    This contains classes
//
//

// =============================================================================

//
//  Classes
//

class Person {
  constructor(name, age, color){
    this.name = name
    this.age = age
    this.color = color
  }
  setFruitPreference(arr, ind){
    this.fruitPreference = arr[ind]
  }
}

class Cat {
  constructor(name, furrColor) {
    this.name = name
    this.furrColor = furrColor
  }
  purr(n){
    for(var i=0;i<n;i++){
      console.log("purrrrrrrrrrrrrrrrrrrrr")
    }
  }
}

// =============================================================================

//
//  Exports from CLASSES.JS
//




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__functions_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__functions_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__functions_js__);

//
//
//    THIS IS THE MAIN APP FILE, THAT USES THE OTHER MODULES
//    Execute this file with NodeJS to see fun results!
//
//

// =============================================================================

//
//  Imports from other modules
//

// import the log object from the exports of helpers.js


// import all exports from data.js


// import the class Person from classes.js


// import { Person, Cat } from "classes.js"

// import setPref function from functions.js


// =============================================================================

//
//  TESTS
//

// check the import from helpers.js
Object(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* log */])("Hello World!")

// check the import from data.js
Object(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* log */])(__WEBPACK_IMPORTED_MODULE_1__data_js__)

// try out the class from classes.js
Object(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* log */])(new __WEBPACK_IMPORTED_MODULE_2__classes_js__["default"]("Hans", 3, "purple") )

let Tipsi = new __WEBPACK_IMPORTED_MODULE_2__classes_js__["Cat"]("Tipsi", "orange")
Object(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* log */])(Tipsi.name, Tipsi.furrColor)
Tipsi.purr(3)

// try out setPref from functions.js
// setPref assigns a random Fruit to each Person from People
Object(__WEBPACK_IMPORTED_MODULE_3__functions_js__["default"])(__WEBPACK_IMPORTED_MODULE_1__data_js__["People"], __WEBPACK_IMPORTED_MODULE_1__data_js__["Fruit"])
Object(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* log */])(__WEBPACK_IMPORTED_MODULE_1__data_js__["People"])


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return log; });

//
//
//    HELPERS
//    tiny functions, that may be useful
//
//

// =============================================================================

//
//  Function log()
//  console.log() shorcut
//

function log(){let a=arguments;console.log(...a)}

// =============================================================================

//
//  Exports from HELPERS.JS
//




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fruit", function() { return Fruit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "People", function() { return People; });

//
//
//    DATA.JS
//    This contains objects, that contain Data
//
//

// =============================================================================

//
//  Imports
//

// import Person Class
const { Person } = __webpack_require__(0)

// =============================================================================

//
//  Data Objects
//

// array
let Fruit = ['banana', 'apple', 'tangerine', 'melon', 'cherry']

// object
let People = {
  p1: new Person("George", 21, "blue"),
  p2: new Person("Dieter", 22, "orange"),
  p3: new Person("Emily", 23, "a very dark bloody red")
}

// =============================================================================

//
//  Exports from DATA.JS
//




/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (78:7)\nYou may need an appropriate loader to handle this file type.\n| //\n| \n| export setPref\n| /* Note:\n|     setPref requires all the other functions in FUNCTIONS.JS, but those aren't exported");

/***/ })
/******/ ]);