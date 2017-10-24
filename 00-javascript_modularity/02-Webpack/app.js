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
Object(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* log */])(new __WEBPACK_IMPORTED_MODULE_2__classes_js__["Person"]("Hans", 3, "purple") )

let Tipsi = new __WEBPACK_IMPORTED_MODULE_2__classes_js__["Cat"]("Tipsi", "orange")
Object(__WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* log */])(Tipsi.name, Tipsi.furrColor)
Tipsi.purr(3)

// try out setPref from functions.js
// setPref assigns a random Fruit to each Person from People
Object(__WEBPACK_IMPORTED_MODULE_3__functions_js__["a" /* setPref */])(__WEBPACK_IMPORTED_MODULE_1__data_js__["People"], __WEBPACK_IMPORTED_MODULE_1__data_js__["Fruit"])
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
  p1: new Person("George", 21, "the lightest hue of Sky-Blue"),
  p2: new Person("Dieter", 22, "bright and burning: Orange"),
  p3: new Person("Emily", 23, "a very dark bloody Red")
}

// =============================================================================

//
//  Exports from DATA.JS
//




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setPref; });

//
//
//    FUNCTIONS.JS
//    This module contains all the cool functions
//
//

// =============================================================================

//
//  Definitions
//

// return a random number
function rand(){
  return Math.random()
}

// return a random Index from an array
function returnRandomIndex(array){
  let length = array.length
  let randomNumber = rand()
  let randomIndex

  // find the index corresponding to the random number
  for(var i=1; i<=length; i++){
    if(randomNumber <= (i/length)){
      randomIndex = i-1
      break
    }
  }

  return randomIndex

  /*
    Explanation
      the array's length defines fractions between 0 and 1
      the random number falls into one of the intervals between the fractions
      since the intervals correspond to the fractions, they correspond to the indices in the array
      the interval the rand falls into is found, it's corresponding index is returned

    Example
      length = 3; rand = 0.4

      i=1
      i/length = 1/3
        --> rand > 1/3

      i=2
      i/length = 2/3 = 0.6666
        --> rand < 2/3
        ==> return "second position of Array has been chosen"
  */
}

// get an object's keys
function keys(obj){
  return Object.keys(obj)
}

// set People's fruit preferences
function setPref(peopleObject, fruitObject){
  let people = keys(peopleObject)

  people.forEach( val => {
    let fruitInd = returnRandomIndex(fruitObject)
    peopleObject[val].setFruitPreference(fruitObject, fruitInd)
  })
}

// =============================================================================

//
//  Exports from FUNCTIONS.JS
//


/* Note:
    setPref requires all the other functions in FUNCTIONS.JS, but those aren't exported
    Those necessary functions are HIDDEN INFORMATION
*/


/***/ })
/******/ ]);