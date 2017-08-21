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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BoxShower_js__ = __webpack_require__(1);
/**
 * Created by akenoq on 21.08.17.
 */



"use strict";

class MainClass {
    constructor() {
        this.boxShower = new __WEBPACK_IMPORTED_MODULE_0__BoxShower_js__["a" /* default */]();
        this.boxShower.addToArr("main-menu_blue-color");
        this.boxShower.addToArr("box-sum_grey-color");
        this.boxShower.addToArr("box-residual_grey-color");

        this.boxShower.showBox("main-menu_blue-color");

        console.log("Main Object was created");
    }
}

// новый способ добавления события загрузки страницы
window.addEventListener("load",function () {
    let mainObject = new MainClass();
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ElementGetter_js__ = __webpack_require__(2);
/**
 * Created by akenoq on 21.08.17.
 */



"use strict";

class BoxShower {
    constructor() {
        this.nameBoxArr = [];
        this.len = 0;
    }

    addToArr(s) {
        s = s.toString();

        this.nameBoxArr.push(s);
        this.len = this.nameBoxArr.length;
    }

    //пробегаемся по всем элементам и скрываем их
    hiddenAll() {
        let elByName = new __WEBPACK_IMPORTED_MODULE_0__ElementGetter_js__["a" /* default */]();

        for (let i=0; i<this.len; ++i){
            let boxName = this.nameBoxArr[i];
            let myEl = elByName.takeElement(boxName);
            myEl.hidden = true;
        }
    }

    showBox(s) {
        s = s.toString();

        this.hiddenAll();

        let elByName = new __WEBPACK_IMPORTED_MODULE_0__ElementGetter_js__["a" /* default */]();

        let myEl = elByName.takeElement(s);
        myEl.hidden = false;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BoxShower;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by akenoq on 21.08.17.
 */



class ElementGetter {
    takeElement(s) {

        s = s.toString();

        let elArr = document.getElementsByClassName(s);
        let myEl = elArr[0];

        return myEl;

    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ElementGetter;


/***/ })
/******/ ]);