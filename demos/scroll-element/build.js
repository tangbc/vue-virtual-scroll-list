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
/******/ 	return __webpack_require__(__webpack_require__.s = "./demos/scroll-element/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demos/common/Corner.vue":
/*!*********************************!*\
  !*** ./demos/common/Corner.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Corner_vue_vue_type_template_id_46296b1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Corner.vue?vue&type=template&id=46296b1c& */ "./demos/common/Corner.vue?vue&type=template&id=46296b1c&");
/* harmony import */ var _Corner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Corner.vue?vue&type=script&lang=js& */ "./demos/common/Corner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Corner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Corner.vue?vue&type=style&index=0&lang=css& */ "./demos/common/Corner.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Corner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Corner_vue_vue_type_template_id_46296b1c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Corner_vue_vue_type_template_id_46296b1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "demos/common/Corner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./demos/common/Corner.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./demos/common/Corner.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Corner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./Corner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./demos/common/Corner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Corner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./demos/common/Corner.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************!*\
  !*** ./demos/common/Corner.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Corner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./Corner.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./demos/common/Corner.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Corner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Corner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Corner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Corner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Corner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./demos/common/Corner.vue?vue&type=template&id=46296b1c&":
/*!****************************************************************!*\
  !*** ./demos/common/Corner.vue?vue&type=template&id=46296b1c& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Corner_vue_vue_type_template_id_46296b1c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Corner.vue?vue&type=template&id=46296b1c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./demos/common/Corner.vue?vue&type=template&id=46296b1c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Corner_vue_vue_type_template_id_46296b1c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Corner_vue_vue_type_template_id_46296b1c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./demos/common/Header.vue":
/*!*********************************!*\
  !*** ./demos/common/Header.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_49f9ff54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=49f9ff54& */ "./demos/common/Header.vue?vue&type=template&id=49f9ff54&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./demos/common/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Header_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.vue?vue&type=style&index=0&lang=less& */ "./demos/common/Header.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_49f9ff54___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_49f9ff54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "demos/common/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./demos/common/Header.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./demos/common/Header.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./demos/common/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./demos/common/Header.vue?vue&type=style&index=0&lang=less&":
/*!*******************************************************************!*\
  !*** ./demos/common/Header.vue?vue&type=style&index=0&lang=less& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=0&lang=less& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./demos/common/Header.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./demos/common/Header.vue?vue&type=template&id=49f9ff54&":
/*!****************************************************************!*\
  !*** ./demos/common/Header.vue?vue&type=template&id=49f9ff54& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_49f9ff54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=49f9ff54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./demos/common/Header.vue?vue&type=template&id=49f9ff54&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_49f9ff54___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_49f9ff54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./demos/common/Item.vue":
/*!*******************************!*\
  !*** ./demos/common/Item.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Item_vue_vue_type_template_id_571f449a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item.vue?vue&type=template&id=571f449a& */ "./demos/common/Item.vue?vue&type=template&id=571f449a&");
/* harmony import */ var _Item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item.vue?vue&type=script&lang=js& */ "./demos/common/Item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Item_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item.vue?vue&type=style&index=0&lang=less& */ "./demos/common/Item.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Item_vue_vue_type_template_id_571f449a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Item_vue_vue_type_template_id_571f449a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "demos/common/Item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./demos/common/Item.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./demos/common/Item.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./Item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./demos/common/Item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./demos/common/Item.vue?vue&type=style&index=0&lang=less&":
/*!*****************************************************************!*\
  !*** ./demos/common/Item.vue?vue&type=style&index=0&lang=less& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./Item.vue?vue&type=style&index=0&lang=less& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./demos/common/Item.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./demos/common/Item.vue?vue&type=template&id=571f449a&":
/*!**************************************************************!*\
  !*** ./demos/common/Item.vue?vue&type=template&id=571f449a& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_template_id_571f449a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Item.vue?vue&type=template&id=571f449a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./demos/common/Item.vue?vue&type=template&id=571f449a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_template_id_571f449a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_template_id_571f449a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./demos/common/createApp.js":
/*!***********************************!*\
  !*** ./demos/common/createApp.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue */ "./demos/common/Header.vue");
/* harmony import */ var _Corner_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Corner.vue */ "./demos/common/Corner.vue");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./demos/common/util.js");




/* harmony default export */ __webpack_exports__["default"] = (function (App) {
  vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.devtools = false;
  vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.productionTip = false;
  vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('Header', _Header_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
  vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('GithubCorner', _Corner_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);
  window.app_init_time = Date.now();
  new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
    mounted: function mounted() {
      Object(_util__WEBPACK_IMPORTED_MODULE_3__["reportPerformance"])();
    },
    render: function render(h) {
      return h(App);
    }
  }).$mount('#app');
});

/***/ }),

/***/ "./demos/common/mock.min.js":
/*!**********************************!*\
  !*** ./demos/common/mock.min.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var a = n[r] = {
        exports: {},
        id: r,
        loaded: !1
      };
      return t[r].call(a.exports, a, a.exports, e), a.loaded = !0, a.exports;
    }

    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0);
  }([function (t, e, n) {
    var r,
        a = n(1),
        o = n(3),
        u = n(5),
        i = n(20),
        l = n(23),
        s = n(25);
    "undefined" != typeof window && (r = n(27));
    /*!
    Mock - 模拟请求 & 模拟数据
    https://github.com/nuysoft/Mock
    墨智 mozhi.gyy@taobao.com nuysoft@gmail.com
    */

    var c = {
      Handler: a,
      Random: u,
      Util: o,
      XHR: r,
      RE: i,
      toJSONSchema: l,
      valid: s,
      heredoc: o.heredoc,
      setup: function setup(t) {
        return r.setup(t);
      },
      _mocked: {}
    };
    c.version = "1.0.1-beta2", r && (r.Mock = c), c.mock = function (t, e, n) {
      return 1 === arguments.length ? a.gen(t) : (2 === arguments.length && (n = e, e = void 0), r && (window.XMLHttpRequest = r), c._mocked[t + (e || "")] = {
        rurl: t,
        rtype: e,
        template: n
      }, c);
    }, t.exports = c;
  }, function (module, exports, __webpack_require__) {
    var Constant = __webpack_require__(2),
        Util = __webpack_require__(3),
        Parser = __webpack_require__(4),
        Random = __webpack_require__(5),
        RE = __webpack_require__(20),
        Handler = {
      extend: Util.extend
    };

    Handler.gen = function (t, e, n) {
      e = void 0 == e ? "" : e + "", n = n || {}, n = {
        path: n.path || [Constant.GUID],
        templatePath: n.templatePath || [Constant.GUID++],
        currentContext: n.currentContext,
        templateCurrentContext: n.templateCurrentContext || t,
        root: n.root || n.currentContext,
        templateRoot: n.templateRoot || n.templateCurrentContext || t
      };
      var r,
          a = Parser.parse(e),
          o = Util.type(t);
      return Handler[o] ? (r = Handler[o]({
        type: o,
        template: t,
        name: e,
        parsedName: e ? e.replace(Constant.RE_KEY, "$1") : e,
        rule: a,
        context: n
      }), n.root || (n.root = r), r) : t;
    }, Handler.extend({
      array: function array(t) {
        var e,
            n,
            r = [];
        if (0 === t.template.length) return r;
        if (t.rule.parameters) {
          if (1 === t.rule.min && void 0 === t.rule.max) t.context.path.push(t.name), t.context.templatePath.push(t.name), r = Random.pick(Handler.gen(t.template, void 0, {
            path: t.context.path,
            templatePath: t.context.templatePath,
            currentContext: r,
            templateCurrentContext: t.template,
            root: t.context.root || r,
            templateRoot: t.context.templateRoot || t.template
          })), t.context.path.pop(), t.context.templatePath.pop();else if (t.rule.parameters[2]) t.template.__order_index = t.template.__order_index || 0, t.context.path.push(t.name), t.context.templatePath.push(t.name), r = Handler.gen(t.template, void 0, {
            path: t.context.path,
            templatePath: t.context.templatePath,
            currentContext: r,
            templateCurrentContext: t.template,
            root: t.context.root || r,
            templateRoot: t.context.templateRoot || t.template
          })[t.template.__order_index % t.template.length], t.template.__order_index += +t.rule.parameters[2], t.context.path.pop(), t.context.templatePath.pop();else for (e = 0; e < t.rule.count; e++) {
            for (n = 0; n < t.template.length; n++) {
              t.context.path.push(r.length), t.context.templatePath.push(n), r.push(Handler.gen(t.template[n], r.length, {
                path: t.context.path,
                templatePath: t.context.templatePath,
                currentContext: r,
                templateCurrentContext: t.template,
                root: t.context.root || r,
                templateRoot: t.context.templateRoot || t.template
              })), t.context.path.pop(), t.context.templatePath.pop();
            }
          }
        } else for (e = 0; e < t.template.length; e++) {
          t.context.path.push(e), t.context.templatePath.push(e), r.push(Handler.gen(t.template[e], e, {
            path: t.context.path,
            templatePath: t.context.templatePath,
            currentContext: r,
            templateCurrentContext: t.template,
            root: t.context.root || r,
            templateRoot: t.context.templateRoot || t.template
          })), t.context.path.pop(), t.context.templatePath.pop();
        }
        return r;
      },
      object: function object(t) {
        var e,
            n,
            r,
            a,
            o,
            u,
            i = {};
        if (void 0 != t.rule.min) for (e = Util.keys(t.template), e = Random.shuffle(e), e = e.slice(0, t.rule.count), u = 0; u < e.length; u++) {
          r = e[u], a = r.replace(Constant.RE_KEY, "$1"), t.context.path.push(a), t.context.templatePath.push(r), i[a] = Handler.gen(t.template[r], r, {
            path: t.context.path,
            templatePath: t.context.templatePath,
            currentContext: i,
            templateCurrentContext: t.template,
            root: t.context.root || i,
            templateRoot: t.context.templateRoot || t.template
          }), t.context.path.pop(), t.context.templatePath.pop();
        } else {
          e = [], n = [];

          for (r in t.template) {
            ("function" == typeof t.template[r] ? n : e).push(r);
          }

          for (e = e.concat(n), u = 0; u < e.length; u++) {
            r = e[u], a = r.replace(Constant.RE_KEY, "$1"), t.context.path.push(a), t.context.templatePath.push(r), i[a] = Handler.gen(t.template[r], r, {
              path: t.context.path,
              templatePath: t.context.templatePath,
              currentContext: i,
              templateCurrentContext: t.template,
              root: t.context.root || i,
              templateRoot: t.context.templateRoot || t.template
            }), t.context.path.pop(), t.context.templatePath.pop(), o = r.match(Constant.RE_KEY), o && o[2] && "number" === Util.type(t.template[r]) && (t.template[r] += parseInt(o[2], 10));
          }
        }
        return i;
      },
      number: function number(t) {
        var e, n;

        if (t.rule.decimal) {
          for (t.template += "", n = t.template.split("."), n[0] = t.rule.range ? t.rule.count : n[0], n[1] = (n[1] || "").slice(0, t.rule.dcount); n[1].length < t.rule.dcount;) {
            n[1] += n[1].length < t.rule.dcount - 1 ? Random.character("number") : Random.character("123456789");
          }

          e = parseFloat(n.join("."), 10);
        } else e = t.rule.range && !t.rule.parameters[2] ? t.rule.count : t.template;

        return e;
      },
      "boolean": function boolean(t) {
        var e;
        return e = t.rule.parameters ? Random.bool(t.rule.min, t.rule.max, t.template) : t.template;
      },
      string: function string(t) {
        var e,
            n,
            r,
            a,
            o = "";

        if (t.template.length) {
          for (void 0 == t.rule.count && (o += t.template), e = 0; e < t.rule.count; e++) {
            o += t.template;
          }

          for (n = o.match(Constant.RE_PLACEHOLDER) || [], e = 0; e < n.length; e++) {
            if (r = n[e], /^\\/.test(r)) n.splice(e--, 1);else {
              if (a = Handler.placeholder(r, t.context.currentContext, t.context.templateCurrentContext, t), 1 === n.length && r === o && _typeof(a) != _typeof(o)) {
                o = a;
                break;
              }

              o = o.replace(r, a);
            }
          }
        } else o = t.rule.range ? Random.string(t.rule.count) : t.template;

        return o;
      },
      "function": function _function(t) {
        return t.template.call(t.context.currentContext, t);
      },
      regexp: function regexp(t) {
        var e = "";
        void 0 == t.rule.count && (e += t.template.source);

        for (var n = 0; n < t.rule.count; n++) {
          e += t.template.source;
        }

        return RE.Handler.gen(RE.Parser.parse(e));
      }
    }), Handler.extend({
      _all: function _all() {
        var t = {};

        for (var e in Random) {
          t[e.toLowerCase()] = e;
        }

        return t;
      },
      placeholder: function placeholder(_placeholder, obj, templateContext, options) {
        Constant.RE_PLACEHOLDER.exec("");

        var parts = Constant.RE_PLACEHOLDER.exec(_placeholder),
            key = parts && parts[1],
            lkey = key && key.toLowerCase(),
            okey = this._all()[lkey],
            params = parts && parts[2] || "",
            pathParts = this.splitPathToArray(key);

        try {
          params = eval("(function(){ return [].splice.call(arguments, 0 ) })(" + params + ")");
        } catch (error) {
          params = parts[2].split(/,\s*/);
        }

        if (obj && key in obj) return obj[key];
        if ("/" === key.charAt(0) || pathParts.length > 1) return this.getValueByKeyPath(key, options);
        if (templateContext && "object" == _typeof(templateContext) && key in templateContext && _placeholder !== templateContext[key]) return templateContext[key] = Handler.gen(templateContext[key], key, {
          currentContext: obj,
          templateCurrentContext: templateContext
        }), templateContext[key];
        if (!(key in Random || lkey in Random || okey in Random)) return _placeholder;

        for (var i = 0; i < params.length; i++) {
          Constant.RE_PLACEHOLDER.exec(""), Constant.RE_PLACEHOLDER.test(params[i]) && (params[i] = Handler.placeholder(params[i], obj, templateContext, options));
        }

        var handle = Random[key] || Random[lkey] || Random[okey];

        switch (Util.type(handle)) {
          case "array":
            return Random.pick(handle);

          case "function":
            handle.options = options;
            var re = handle.apply(Random, params);
            return void 0 === re && (re = ""), delete handle.options, re;
        }
      },
      getValueByKeyPath: function getValueByKeyPath(t, e) {
        var n = t,
            r = this.splitPathToArray(t),
            a = [];
        "/" === t.charAt(0) ? a = [e.context.path[0]].concat(this.normalizePath(r)) : r.length > 1 && (a = e.context.path.slice(0), a.pop(), a = this.normalizePath(a.concat(r))), t = r[r.length - 1];

        for (var o = e.context.root, u = e.context.templateRoot, i = 1; i < a.length - 1; i++) {
          o = o[a[i]], u = u[a[i]];
        }

        return o && t in o ? o[t] : u && "object" == _typeof(u) && t in u && n !== u[t] ? (u[t] = Handler.gen(u[t], t, {
          currentContext: o,
          templateCurrentContext: u
        }), u[t]) : void 0;
      },
      normalizePath: function normalizePath(t) {
        for (var e = [], n = 0; n < t.length; n++) {
          switch (t[n]) {
            case "..":
              e.pop();
              break;

            case ".":
              break;

            default:
              e.push(t[n]);
          }
        }

        return e;
      },
      splitPathToArray: function splitPathToArray(t) {
        var e = t.split(/\/+/);
        return e[e.length - 1] || (e = e.slice(0, -1)), e[0] || (e = e.slice(1)), e;
      }
    }), module.exports = Handler;
  }, function (t, e) {
    t.exports = {
      GUID: 1,
      RE_KEY: /(.+)\|(?:\+(\d+)|([\+\-]?\d+-?[\+\-]?\d*)?(?:\.(\d+-?\d*))?)/,
      RE_RANGE: /([\+\-]?\d+)-?([\+\-]?\d+)?/,
      RE_PLACEHOLDER: /\\*@([^@#%&()\?\s]+)(?:\((.*?)\))?/g
    };
  }, function (t, e) {
    var n = {};
    n.extend = function () {
      var t,
          e,
          r,
          a,
          o,
          u = arguments[0] || {},
          i = 1,
          l = arguments.length;

      for (1 === l && (u = this, i = 0); l > i; i++) {
        if (t = arguments[i]) for (e in t) {
          r = u[e], a = t[e], u !== a && void 0 !== a && (n.isArray(a) || n.isObject(a) ? (n.isArray(a) && (o = r && n.isArray(r) ? r : []), n.isObject(a) && (o = r && n.isObject(r) ? r : {}), u[e] = n.extend(o, a)) : u[e] = a);
        }
      }

      return u;
    }, n.each = function (t, e, n) {
      var r, a;
      if ("number" === this.type(t)) for (r = 0; t > r; r++) {
        e(r, r);
      } else if (t.length === +t.length) for (r = 0; r < t.length && e.call(n, t[r], r, t) !== !1; r++) {
        ;
      } else for (a in t) {
        if (e.call(n, t[a], a, t) === !1) break;
      }
    }, n.type = function (t) {
      return null === t || void 0 === t ? String(t) : Object.prototype.toString.call(t).match(/\[object (\w+)\]/)[1].toLowerCase();
    }, n.each("String Object Array RegExp Function".split(" "), function (t) {
      n["is" + t] = function (e) {
        return n.type(e) === t.toLowerCase();
      };
    }), n.isObjectOrArray = function (t) {
      return n.isObject(t) || n.isArray(t);
    }, n.isNumeric = function (t) {
      return !isNaN(parseFloat(t)) && isFinite(t);
    }, n.keys = function (t) {
      var e = [];

      for (var n in t) {
        t.hasOwnProperty(n) && e.push(n);
      }

      return e;
    }, n.values = function (t) {
      var e = [];

      for (var n in t) {
        t.hasOwnProperty(n) && e.push(t[n]);
      }

      return e;
    }, n.heredoc = function (t) {
      return t.toString().replace(/^[^\/]+\/\*!?/, "").replace(/\*\/[^\/]+$/, "").replace(/^[\s\xA0]+/, "").replace(/[\s\xA0]+$/, "");
    }, n.noop = function () {}, t.exports = n;
  }, function (t, e, n) {
    var r = n(2),
        a = n(5);
    t.exports = {
      parse: function parse(t) {
        t = void 0 == t ? "" : t + "";
        var e = (t || "").match(r.RE_KEY),
            n = e && e[3] && e[3].match(r.RE_RANGE),
            o = n && n[1] && parseInt(n[1], 10),
            u = n && n[2] && parseInt(n[2], 10),
            i = n ? n[2] ? a.integer(o, u) : parseInt(n[1], 10) : void 0,
            l = e && e[4] && e[4].match(r.RE_RANGE),
            s = l && parseInt(l[1], 10),
            c = l && parseInt(l[2], 10),
            h = l ? !l[2] && parseInt(l[1], 10) || a.integer(s, c) : void 0,
            p = {
          parameters: e,
          range: n,
          min: o,
          max: u,
          count: i,
          decimal: l,
          dmin: s,
          dmax: c,
          dcount: h
        };

        for (var f in p) {
          if (void 0 != p[f]) return p;
        }

        return {};
      }
    };
  }, function (t, e, n) {
    var r = n(3),
        a = {
      extend: r.extend
    };
    a.extend(n(6)), a.extend(n(7)), a.extend(n(8)), a.extend(n(10)), a.extend(n(13)), a.extend(n(15)), a.extend(n(16)), a.extend(n(17)), a.extend(n(14)), a.extend(n(19)), t.exports = a;
  }, function (t, e) {
    t.exports = {
      "boolean": function boolean(t, e, n) {
        return void 0 !== n ? (t = "undefined" == typeof t || isNaN(t) ? 1 : parseInt(t, 10), e = "undefined" == typeof e || isNaN(e) ? 1 : parseInt(e, 10), Math.random() > 1 / (t + e) * t ? !n : n) : Math.random() >= .5;
      },
      bool: function bool(t, e, n) {
        return this["boolean"](t, e, n);
      },
      natural: function natural(t, e) {
        return t = "undefined" != typeof t ? parseInt(t, 10) : 0, e = "undefined" != typeof e ? parseInt(e, 10) : 9007199254740992, Math.round(Math.random() * (e - t)) + t;
      },
      integer: function integer(t, e) {
        return t = "undefined" != typeof t ? parseInt(t, 10) : -9007199254740992, e = "undefined" != typeof e ? parseInt(e, 10) : 9007199254740992, Math.round(Math.random() * (e - t)) + t;
      },
      "int": function int(t, e) {
        return this.integer(t, e);
      },
      "float": function float(t, e, n, r) {
        n = void 0 === n ? 0 : n, n = Math.max(Math.min(n, 17), 0), r = void 0 === r ? 17 : r, r = Math.max(Math.min(r, 17), 0);

        for (var a = this.integer(t, e) + ".", o = 0, u = this.natural(n, r); u > o; o++) {
          a += u - 1 > o ? this.character("number") : this.character("123456789");
        }

        return parseFloat(a, 10);
      },
      character: function character(t) {
        var e = {
          lower: "abcdefghijklmnopqrstuvwxyz",
          upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          number: "0123456789",
          symbol: "!@#$%^&*()[]"
        };
        return e.alpha = e.lower + e.upper, e.undefined = e.lower + e.upper + e.number + e.symbol, t = e[("" + t).toLowerCase()] || t, t.charAt(this.natural(0, t.length - 1));
      },
      "char": function char(t) {
        return this.character(t);
      },
      string: function string(t, e, n) {
        var r;

        switch (arguments.length) {
          case 0:
            r = this.natural(3, 7);
            break;

          case 1:
            r = t, t = void 0;
            break;

          case 2:
            "string" == typeof arguments[0] ? r = e : (r = this.natural(t, e), t = void 0);
            break;

          case 3:
            r = this.natural(e, n);
        }

        for (var a = "", o = 0; r > o; o++) {
          a += this.character(t);
        }

        return a;
      },
      str: function str() {
        return this.string.apply(this, arguments);
      },
      range: function range(t, e, n) {
        arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1, t = +t, e = +e, n = +n;

        for (var r = Math.max(Math.ceil((e - t) / n), 0), a = 0, o = new Array(r); r > a;) {
          o[a++] = t, t += n;
        }

        return o;
      }
    };
  }, function (t, e) {
    var n = {
      yyyy: "getFullYear",
      yy: function yy(t) {
        return ("" + t.getFullYear()).slice(2);
      },
      y: "yy",
      MM: function MM(t) {
        var e = t.getMonth() + 1;
        return 10 > e ? "0" + e : e;
      },
      M: function M(t) {
        return t.getMonth() + 1;
      },
      dd: function dd(t) {
        var e = t.getDate();
        return 10 > e ? "0" + e : e;
      },
      d: "getDate",
      HH: function HH(t) {
        var e = t.getHours();
        return 10 > e ? "0" + e : e;
      },
      H: "getHours",
      hh: function hh(t) {
        var e = t.getHours() % 12;
        return 10 > e ? "0" + e : e;
      },
      h: function h(t) {
        return t.getHours() % 12;
      },
      mm: function mm(t) {
        var e = t.getMinutes();
        return 10 > e ? "0" + e : e;
      },
      m: "getMinutes",
      ss: function ss(t) {
        var e = t.getSeconds();
        return 10 > e ? "0" + e : e;
      },
      s: "getSeconds",
      SS: function SS(t) {
        var e = t.getMilliseconds();
        return 10 > e && "00" + e || 100 > e && "0" + e || e;
      },
      S: "getMilliseconds",
      A: function A(t) {
        return t.getHours() < 12 ? "AM" : "PM";
      },
      a: function a(t) {
        return t.getHours() < 12 ? "am" : "pm";
      },
      T: "getTime"
    };
    t.exports = {
      _patternLetters: n,
      _rformat: new RegExp(function () {
        var t = [];

        for (var e in n) {
          t.push(e);
        }

        return "(" + t.join("|") + ")";
      }(), "g"),
      _formatDate: function _formatDate(t, e) {
        return e.replace(this._rformat, function r(e, a) {
          return "function" == typeof n[a] ? n[a](t) : n[a] in n ? r(e, n[a]) : t[n[a]]();
        });
      },
      _randomDate: function _randomDate(t, e) {
        return t = void 0 === t ? new Date(0) : t, e = void 0 === e ? new Date() : e, new Date(Math.random() * (e.getTime() - t.getTime()));
      },
      date: function date(t) {
        return t = t || "yyyy-MM-dd", this._formatDate(this._randomDate(), t);
      },
      time: function time(t) {
        return t = t || "HH:mm:ss", this._formatDate(this._randomDate(), t);
      },
      datetime: function datetime(t) {
        return t = t || "yyyy-MM-dd HH:mm:ss", this._formatDate(this._randomDate(), t);
      },
      now: function now(t, e) {
        1 === arguments.length && (/year|month|day|hour|minute|second|week/.test(t) || (e = t, t = "")), t = (t || "").toLowerCase(), e = e || "yyyy-MM-dd HH:mm:ss";
        var n = new Date();

        switch (t) {
          case "year":
            n.setMonth(0);

          case "month":
            n.setDate(1);

          case "week":
          case "day":
            n.setHours(0);

          case "hour":
            n.setMinutes(0);

          case "minute":
            n.setSeconds(0);

          case "second":
            n.setMilliseconds(0);
        }

        switch (t) {
          case "week":
            n.setDate(n.getDate() - n.getDay());
        }

        return this._formatDate(n, e);
      }
    };
  }, function (t, e, n) {
    (function (t) {
      t.exports = {
        _adSize: ["300x250", "250x250", "240x400", "336x280", "180x150", "720x300", "468x60", "234x60", "88x31", "120x90", "120x60", "120x240", "125x125", "728x90", "160x600", "120x600", "300x600"],
        _screenSize: ["320x200", "320x240", "640x480", "800x480", "800x480", "1024x600", "1024x768", "1280x800", "1440x900", "1920x1200", "2560x1600"],
        _videoSize: ["720x480", "768x576", "1280x720", "1920x1080"],
        image: function image(t, e, n, r, a) {
          return 4 === arguments.length && (a = r, r = void 0), 3 === arguments.length && (a = n, n = void 0), t || (t = this.pick(this._adSize)), e && ~e.indexOf("#") && (e = e.slice(1)), n && ~n.indexOf("#") && (n = n.slice(1)), "http://dummyimage.com/" + t + (e ? "/" + e : "") + (n ? "/" + n : "") + (r ? "." + r : "") + (a ? "&text=" + a : "");
        },
        img: function img() {
          return this.image.apply(this, arguments);
        },
        _brandColors: {
          "4ormat": "#fb0a2a",
          "500px": "#02adea",
          "About.me (blue)": "#00405d",
          "About.me (yellow)": "#ffcc33",
          Addvocate: "#ff6138",
          Adobe: "#ff0000",
          Aim: "#fcd20b",
          Amazon: "#e47911",
          Android: "#a4c639",
          "Angie's List": "#7fbb00",
          AOL: "#0060a3",
          Atlassian: "#003366",
          Behance: "#053eff",
          "Big Cartel": "#97b538",
          bitly: "#ee6123",
          Blogger: "#fc4f08",
          Boeing: "#0039a6",
          "Booking.com": "#003580",
          Carbonmade: "#613854",
          Cheddar: "#ff7243",
          "Code School": "#3d4944",
          Delicious: "#205cc0",
          Dell: "#3287c1",
          Designmoo: "#e54a4f",
          Deviantart: "#4e6252",
          "Designer News": "#2d72da",
          Devour: "#fd0001",
          DEWALT: "#febd17",
          "Disqus (blue)": "#59a3fc",
          "Disqus (orange)": "#db7132",
          Dribbble: "#ea4c89",
          Dropbox: "#3d9ae8",
          Drupal: "#0c76ab",
          Dunked: "#2a323a",
          eBay: "#89c507",
          Ember: "#f05e1b",
          Engadget: "#00bdf6",
          Envato: "#528036",
          Etsy: "#eb6d20",
          Evernote: "#5ba525",
          "Fab.com": "#dd0017",
          Facebook: "#3b5998",
          Firefox: "#e66000",
          "Flickr (blue)": "#0063dc",
          "Flickr (pink)": "#ff0084",
          Forrst: "#5b9a68",
          Foursquare: "#25a0ca",
          Garmin: "#007cc3",
          GetGlue: "#2d75a2",
          Gimmebar: "#f70078",
          GitHub: "#171515",
          "Google Blue": "#0140ca",
          "Google Green": "#16a61e",
          "Google Red": "#dd1812",
          "Google Yellow": "#fcca03",
          "Google+": "#dd4b39",
          Grooveshark: "#f77f00",
          Groupon: "#82b548",
          "Hacker News": "#ff6600",
          HelloWallet: "#0085ca",
          "Heroku (light)": "#c7c5e6",
          "Heroku (dark)": "#6567a5",
          HootSuite: "#003366",
          Houzz: "#73ba37",
          HTML5: "#ec6231",
          IKEA: "#ffcc33",
          IMDb: "#f3ce13",
          Instagram: "#3f729b",
          Intel: "#0071c5",
          Intuit: "#365ebf",
          Kickstarter: "#76cc1e",
          kippt: "#e03500",
          Kodery: "#00af81",
          LastFM: "#c3000d",
          LinkedIn: "#0e76a8",
          Livestream: "#cf0005",
          Lumo: "#576396",
          Mixpanel: "#a086d3",
          Meetup: "#e51937",
          Nokia: "#183693",
          NVIDIA: "#76b900",
          Opera: "#cc0f16",
          Path: "#e41f11",
          "PayPal (dark)": "#1e477a",
          "PayPal (light)": "#3b7bbf",
          Pinboard: "#0000e6",
          Pinterest: "#c8232c",
          PlayStation: "#665cbe",
          Pocket: "#ee4056",
          Prezi: "#318bff",
          Pusha: "#0f71b4",
          Quora: "#a82400",
          "QUOTE.fm": "#66ceff",
          Rdio: "#008fd5",
          Readability: "#9c0000",
          "Red Hat": "#cc0000",
          Resource: "#7eb400",
          Rockpack: "#0ba6ab",
          Roon: "#62b0d9",
          RSS: "#ee802f",
          Salesforce: "#1798c1",
          Samsung: "#0c4da2",
          Shopify: "#96bf48",
          Skype: "#00aff0",
          Snagajob: "#f47a20",
          Softonic: "#008ace",
          SoundCloud: "#ff7700",
          "Space Box": "#f86960",
          Spotify: "#81b71a",
          Sprint: "#fee100",
          Squarespace: "#121212",
          StackOverflow: "#ef8236",
          Staples: "#cc0000",
          "Status Chart": "#d7584f",
          Stripe: "#008cdd",
          StudyBlue: "#00afe1",
          StumbleUpon: "#f74425",
          "T-Mobile": "#ea0a8e",
          Technorati: "#40a800",
          "The Next Web": "#ef4423",
          Treehouse: "#5cb868",
          Trulia: "#5eab1f",
          Tumblr: "#34526f",
          "Twitch.tv": "#6441a5",
          Twitter: "#00acee",
          TYPO3: "#ff8700",
          Ubuntu: "#dd4814",
          Ustream: "#3388ff",
          Verizon: "#ef1d1d",
          Vimeo: "#86c9ef",
          Vine: "#00a478",
          Virb: "#06afd8",
          "Virgin Media": "#cc0000",
          Wooga: "#5b009c",
          "WordPress (blue)": "#21759b",
          "WordPress (orange)": "#d54e21",
          "WordPress (grey)": "#464646",
          Wunderlist: "#2b88d9",
          XBOX: "#9bc848",
          XING: "#126567",
          "Yahoo!": "#720e9e",
          Yandex: "#ffcc00",
          Yelp: "#c41200",
          YouTube: "#c4302b",
          Zalongo: "#5498dc",
          Zendesk: "#78a300",
          Zerply: "#9dcc7a",
          Zootool: "#5e8b1d"
        },
        _brandNames: function _brandNames() {
          var t = [];

          for (var e in this._brandColors) {
            t.push(e);
          }

          return t;
        },
        dataImage: function dataImage(e, n) {
          var r;
          if ("undefined" != typeof document) r = document.createElement("canvas");else {
            var a = t.require("canvas");

            r = new a();
          }
          var o = r && r.getContext && r.getContext("2d");
          if (!r || !o) return "";
          e || (e = this.pick(this._adSize)), n = void 0 !== n ? n : e, e = e.split("x");

          var u = parseInt(e[0], 10),
              i = parseInt(e[1], 10),
              l = this._brandColors[this.pick(this._brandNames())],
              s = "#FFF",
              c = 14,
              h = "sans-serif";

          return r.width = u, r.height = i, o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = l, o.fillRect(0, 0, u, i), o.fillStyle = s, o.font = "bold " + c + "px " + h, o.fillText(n, u / 2, i / 2, u), r.toDataURL("image/png");
        }
      };
    }).call(e, n(9)(t));
  }, function (t, e) {
    t.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t;
    };
  }, function (t, e, n) {
    var r = n(11),
        a = n(12);
    t.exports = {
      color: function color(t) {
        return t || a[t] ? a[t].nicer : this.hex();
      },
      hex: function hex() {
        var t = this._goldenRatioColor(),
            e = r.hsv2rgb(t),
            n = r.rgb2hex(e[0], e[1], e[2]);

        return n;
      },
      rgb: function rgb() {
        var t = this._goldenRatioColor(),
            e = r.hsv2rgb(t);

        return "rgb(" + parseInt(e[0], 10) + ", " + parseInt(e[1], 10) + ", " + parseInt(e[2], 10) + ")";
      },
      rgba: function rgba() {
        var t = this._goldenRatioColor(),
            e = r.hsv2rgb(t);

        return "rgba(" + parseInt(e[0], 10) + ", " + parseInt(e[1], 10) + ", " + parseInt(e[2], 10) + ", " + Math.random().toFixed(2) + ")";
      },
      hsl: function hsl() {
        var t = this._goldenRatioColor(),
            e = r.hsv2hsl(t);

        return "hsl(" + parseInt(e[0], 10) + ", " + parseInt(e[1], 10) + ", " + parseInt(e[2], 10) + ")";
      },
      _goldenRatioColor: function _goldenRatioColor(t, e) {
        return this._goldenRatio = .618033988749895, this._hue = this._hue || Math.random(), this._hue += this._goldenRatio, this._hue %= 1, "number" != typeof t && (t = .5), "number" != typeof e && (e = .95), [360 * this._hue, 100 * t, 100 * e];
      }
    };
  }, function (t, e) {
    t.exports = {
      rgb2hsl: function rgb2hsl(t) {
        var e,
            n,
            r,
            a = t[0] / 255,
            o = t[1] / 255,
            u = t[2] / 255,
            i = Math.min(a, o, u),
            l = Math.max(a, o, u),
            s = l - i;
        return l == i ? e = 0 : a == l ? e = (o - u) / s : o == l ? e = 2 + (u - a) / s : u == l && (e = 4 + (a - o) / s), e = Math.min(60 * e, 360), 0 > e && (e += 360), r = (i + l) / 2, n = l == i ? 0 : .5 >= r ? s / (l + i) : s / (2 - l - i), [e, 100 * n, 100 * r];
      },
      rgb2hsv: function rgb2hsv(t) {
        var e,
            n,
            r,
            a = t[0],
            o = t[1],
            u = t[2],
            i = Math.min(a, o, u),
            l = Math.max(a, o, u),
            s = l - i;
        return n = 0 === l ? 0 : s / l * 1e3 / 10, l == i ? e = 0 : a == l ? e = (o - u) / s : o == l ? e = 2 + (u - a) / s : u == l && (e = 4 + (a - o) / s), e = Math.min(60 * e, 360), 0 > e && (e += 360), r = l / 255 * 1e3 / 10, [e, n, r];
      },
      hsl2rgb: function hsl2rgb(t) {
        var e,
            n,
            r,
            a,
            o,
            u = t[0] / 360,
            i = t[1] / 100,
            l = t[2] / 100;
        if (0 === i) return o = 255 * l, [o, o, o];
        n = .5 > l ? l * (1 + i) : l + i - l * i, e = 2 * l - n, a = [0, 0, 0];

        for (var s = 0; 3 > s; s++) {
          r = u + 1 / 3 * -(s - 1), 0 > r && r++, r > 1 && r--, o = 1 > 6 * r ? e + 6 * (n - e) * r : 1 > 2 * r ? n : 2 > 3 * r ? e + (n - e) * (2 / 3 - r) * 6 : e, a[s] = 255 * o;
        }

        return a;
      },
      hsl2hsv: function hsl2hsv(t) {
        var e,
            n,
            r = t[0],
            a = t[1] / 100,
            o = t[2] / 100;
        return o *= 2, a *= 1 >= o ? o : 2 - o, n = (o + a) / 2, e = 2 * a / (o + a), [r, 100 * e, 100 * n];
      },
      hsv2rgb: function hsv2rgb(t) {
        var e = t[0] / 60,
            n = t[1] / 100,
            r = t[2] / 100,
            a = Math.floor(e) % 6,
            o = e - Math.floor(e),
            u = 255 * r * (1 - n),
            i = 255 * r * (1 - n * o),
            l = 255 * r * (1 - n * (1 - o));

        switch (r = 255 * r, a) {
          case 0:
            return [r, l, u];

          case 1:
            return [i, r, u];

          case 2:
            return [u, r, l];

          case 3:
            return [u, i, r];

          case 4:
            return [l, u, r];

          case 5:
            return [r, u, i];
        }
      },
      hsv2hsl: function hsv2hsl(t) {
        var e,
            n,
            r = t[0],
            a = t[1] / 100,
            o = t[2] / 100;
        return n = (2 - a) * o, e = a * o, e /= 1 >= n ? n : 2 - n, n /= 2, [r, 100 * e, 100 * n];
      },
      rgb2hex: function rgb2hex(t, e, n) {
        return "#" + ((256 + t << 8 | e) << 8 | n).toString(16).slice(1);
      },
      hex2rgb: function hex2rgb(t) {
        return t = "0x" + t.slice(1).replace(t.length > 4 ? t : /./g, "$&$&") | 0, [t >> 16, t >> 8 & 255, 255 & t];
      }
    };
  }, function (t, e) {
    t.exports = {
      navy: {
        value: "#000080",
        nicer: "#001F3F"
      },
      blue: {
        value: "#0000ff",
        nicer: "#0074D9"
      },
      aqua: {
        value: "#00ffff",
        nicer: "#7FDBFF"
      },
      teal: {
        value: "#008080",
        nicer: "#39CCCC"
      },
      olive: {
        value: "#008000",
        nicer: "#3D9970"
      },
      green: {
        value: "#008000",
        nicer: "#2ECC40"
      },
      lime: {
        value: "#00ff00",
        nicer: "#01FF70"
      },
      yellow: {
        value: "#ffff00",
        nicer: "#FFDC00"
      },
      orange: {
        value: "#ffa500",
        nicer: "#FF851B"
      },
      red: {
        value: "#ff0000",
        nicer: "#FF4136"
      },
      maroon: {
        value: "#800000",
        nicer: "#85144B"
      },
      fuchsia: {
        value: "#ff00ff",
        nicer: "#F012BE"
      },
      purple: {
        value: "#800080",
        nicer: "#B10DC9"
      },
      silver: {
        value: "#c0c0c0",
        nicer: "#DDDDDD"
      },
      gray: {
        value: "#808080",
        nicer: "#AAAAAA"
      },
      black: {
        value: "#000000",
        nicer: "#111111"
      },
      white: {
        value: "#FFFFFF",
        nicer: "#FFFFFF"
      }
    };
  }, function (t, e, n) {
    function r(t, e, n, r) {
      return void 0 === n ? a.natural(t, e) : void 0 === r ? n : a.natural(parseInt(n, 10), parseInt(r, 10));
    }

    var a = n(6),
        o = n(14);
    t.exports = {
      paragraph: function paragraph(t, e) {
        for (var n = r(3, 7, t, e), a = [], o = 0; n > o; o++) {
          a.push(this.sentence());
        }

        return a.join(" ");
      },
      cparagraph: function cparagraph(t, e) {
        for (var n = r(3, 7, t, e), a = [], o = 0; n > o; o++) {
          a.push(this.csentence());
        }

        return a.join("");
      },
      sentence: function sentence(t, e) {
        for (var n = r(12, 18, t, e), a = [], u = 0; n > u; u++) {
          a.push(this.word());
        }

        return o.capitalize(a.join(" ")) + ".";
      },
      csentence: function csentence(t, e) {
        for (var n = r(12, 18, t, e), a = [], o = 0; n > o; o++) {
          a.push(this.cword());
        }

        return a.join("") + "。";
      },
      word: function word(t, e) {
        for (var n = r(3, 10, t, e), o = "", u = 0; n > u; u++) {
          o += a.character("lower");
        }

        return o;
      },
      cword: function cword(t, e, n) {
        var r,
            a = "的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处队南给色光门即保治北造百规热领七海口东导器压志世金增争济阶油思术极交受联什认六共权收证改清己美再采转更单风切打白教速花带安场身车例真务具万每目至达走积示议声报斗完类八离华名确才科张信马节话米整空元况今集温传土许步群广石记需段研界拉林律叫且究观越织装影算低持音众书布复容儿须际商非验连断深难近矿千周委素技备半办青省列习响约支般史感劳便团往酸历市克何除消构府称太准精值号率族维划选标写存候毛亲快效斯院查江型眼王按格养易置派层片始却专状育厂京识适属圆包火住调满县局照参红细引听该铁价严龙飞";

        switch (arguments.length) {
          case 0:
            t = a, r = 1;
            break;

          case 1:
            "string" == typeof arguments[0] ? r = 1 : (r = t, t = a);
            break;

          case 2:
            "string" == typeof arguments[0] ? r = e : (r = this.natural(t, e), t = a);
            break;

          case 3:
            r = this.natural(e, n);
        }

        for (var o = "", u = 0; r > u; u++) {
          o += t.charAt(this.natural(0, t.length - 1));
        }

        return o;
      },
      title: function title(t, e) {
        for (var n = r(3, 7, t, e), a = [], o = 0; n > o; o++) {
          a.push(this.capitalize(this.word()));
        }

        return a.join(" ");
      },
      ctitle: function ctitle(t, e) {
        for (var n = r(3, 7, t, e), a = [], o = 0; n > o; o++) {
          a.push(this.cword());
        }

        return a.join("");
      }
    };
  }, function (t, e, n) {
    var r = n(3);
    t.exports = {
      capitalize: function capitalize(t) {
        return (t + "").charAt(0).toUpperCase() + (t + "").substr(1);
      },
      upper: function upper(t) {
        return (t + "").toUpperCase();
      },
      lower: function lower(t) {
        return (t + "").toLowerCase();
      },
      pick: function pick(t, e, n) {
        return r.isArray(t) ? (void 0 === e && (e = 1), void 0 === n && (n = e)) : (t = [].slice.call(arguments), e = 1, n = 1), 1 === e && 1 === n ? t[this.natural(0, t.length - 1)] : this.shuffle(t, e, n);
      },
      shuffle: function shuffle(t, e, n) {
        t = t || [];

        for (var r = t.slice(0), a = [], o = 0, u = r.length, i = 0; u > i; i++) {
          o = this.natural(0, r.length - 1), a.push(r[o]), r.splice(o, 1);
        }

        switch (arguments.length) {
          case 0:
          case 1:
            return a;

          case 2:
            n = e;

          case 3:
            return e = parseInt(e, 10), n = parseInt(n, 10), a.slice(0, this.natural(e, n));
        }
      },
      order: function a(t) {
        a.cache = a.cache || {}, arguments.length > 1 && (t = [].slice.call(arguments, 0));
        var e = a.options,
            n = e.context.templatePath.join("."),
            r = a.cache[n] = a.cache[n] || {
          index: 0,
          array: t
        };
        return r.array[r.index++ % r.array.length];
      }
    };
  }, function (t, e) {
    t.exports = {
      first: function first() {
        var t = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Charles", "Joseph", "Thomas", "Christopher", "Daniel", "Paul", "Mark", "Donald", "George", "Kenneth", "Steven", "Edward", "Brian", "Ronald", "Anthony", "Kevin", "Jason", "Matthew", "Gary", "Timothy", "Jose", "Larry", "Jeffrey", "Frank", "Scott", "Eric"].concat(["Mary", "Patricia", "Linda", "Barbara", "Elizabeth", "Jennifer", "Maria", "Susan", "Margaret", "Dorothy", "Lisa", "Nancy", "Karen", "Betty", "Helen", "Sandra", "Donna", "Carol", "Ruth", "Sharon", "Michelle", "Laura", "Sarah", "Kimberly", "Deborah", "Jessica", "Shirley", "Cynthia", "Angela", "Melissa", "Brenda", "Amy", "Anna"]);
        return this.pick(t);
      },
      last: function last() {
        var t = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson", "Martinez", "Anderson", "Taylor", "Thomas", "Hernandez", "Moore", "Martin", "Jackson", "Thompson", "White", "Lopez", "Lee", "Gonzalez", "Harris", "Clark", "Lewis", "Robinson", "Walker", "Perez", "Hall", "Young", "Allen"];
        return this.pick(t);
      },
      name: function name(t) {
        return this.first() + " " + (t ? this.first() + " " : "") + this.last();
      },
      cfirst: function cfirst() {
        var t = "王 李 张 刘 陈 杨 赵 黄 周 吴 徐 孙 胡 朱 高 林 何 郭 马 罗 梁 宋 郑 谢 韩 唐 冯 于 董 萧 程 曹 袁 邓 许 傅 沈 曾 彭 吕 苏 卢 蒋 蔡 贾 丁 魏 薛 叶 阎 余 潘 杜 戴 夏 锺 汪 田 任 姜 范 方 石 姚 谭 廖 邹 熊 金 陆 郝 孔 白 崔 康 毛 邱 秦 江 史 顾 侯 邵 孟 龙 万 段 雷 钱 汤 尹 黎 易 常 武 乔 贺 赖 龚 文".split(" ");
        return this.pick(t);
      },
      clast: function clast() {
        var t = "伟 芳 娜 秀英 敏 静 丽 强 磊 军 洋 勇 艳 杰 娟 涛 明 超 秀兰 霞 平 刚 桂英".split(" ");
        return this.pick(t);
      },
      cname: function cname() {
        return this.cfirst() + this.clast();
      }
    };
  }, function (t, e) {
    t.exports = {
      url: function url(t, e) {
        return (t || this.protocol()) + "://" + (e || this.domain()) + "/" + this.word();
      },
      protocol: function protocol() {
        return this.pick("http ftp gopher mailto mid cid news nntp prospero telnet rlogin tn3270 wais".split(" "));
      },
      domain: function domain(t) {
        return this.word() + "." + (t || this.tld());
      },
      tld: function tld() {
        return this.pick("com net org edu gov int mil cn com.cn net.cn gov.cn org.cn 中国 中国互联.公司 中国互联.网络 tel biz cc tv info name hk mobi asia cd travel pro museum coop aero ad ae af ag ai al am an ao aq ar as at au aw az ba bb bd be bf bg bh bi bj bm bn bo br bs bt bv bw by bz ca cc cf cg ch ci ck cl cm cn co cq cr cu cv cx cy cz de dj dk dm do dz ec ee eg eh es et ev fi fj fk fm fo fr ga gb gd ge gf gh gi gl gm gn gp gr gt gu gw gy hk hm hn hr ht hu id ie il in io iq ir is it jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md mg mh ml mm mn mo mp mq mr ms mt mv mw mx my mz na nc ne nf ng ni nl no np nr nt nu nz om qa pa pe pf pg ph pk pl pm pn pr pt pw py re ro ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr st su sy sz tc td tf tg th tj tk tm tn to tp tr tt tv tw tz ua ug uk us uy va vc ve vg vn vu wf ws ye yu za zm zr zw".split(" "));
      },
      email: function email(t) {
        return this.character("lower") + "." + this.word() + "@" + (t || this.word() + "." + this.tld());
      },
      ip: function ip() {
        return this.natural(0, 255) + "." + this.natural(0, 255) + "." + this.natural(0, 255) + "." + this.natural(0, 255);
      }
    };
  }, function (t, e, n) {
    var r = n(18),
        a = ["东北", "华北", "华东", "华中", "华南", "西南", "西北"];
    t.exports = {
      region: function region() {
        return this.pick(a);
      },
      province: function province() {
        return this.pick(r).name;
      },
      city: function city(t) {
        var e = this.pick(r),
            n = this.pick(e.children);
        return t ? [e.name, n.name].join(" ") : n.name;
      },
      county: function county(t) {
        var e = this.pick(r),
            n = this.pick(e.children),
            a = this.pick(n.children) || {
          name: "-"
        };
        return t ? [e.name, n.name, a.name].join(" ") : a.name;
      },
      zip: function zip(t) {
        for (var e = "", n = 0; (t || 6) > n; n++) {
          e += this.natural(0, 9);
        }

        return e;
      }
    };
  }, function (t, e) {
    function n(t) {
      for (var e, n = {}, r = 0; r < t.length; r++) {
        e = t[r], e && e.id && (n[e.id] = e);
      }

      for (var a = [], o = 0; o < t.length; o++) {
        if (e = t[o]) if (void 0 != e.pid || void 0 != e.parentId) {
          var u = n[e.pid] || n[e.parentId];
          u && (u.children || (u.children = []), u.children.push(e));
        } else a.push(e);
      }

      return a;
    }

    var r = {
      110000: "北京",
      110100: "北京市",
      110101: "东城区",
      110102: "西城区",
      110105: "朝阳区",
      110106: "丰台区",
      110107: "石景山区",
      110108: "海淀区",
      110109: "门头沟区",
      110111: "房山区",
      110112: "通州区",
      110113: "顺义区",
      110114: "昌平区",
      110115: "大兴区",
      110116: "怀柔区",
      110117: "平谷区",
      110228: "密云县",
      110229: "延庆县",
      110230: "其它区",
      120000: "天津",
      120100: "天津市",
      120101: "和平区",
      120102: "河东区",
      120103: "河西区",
      120104: "南开区",
      120105: "河北区",
      120106: "红桥区",
      120110: "东丽区",
      120111: "西青区",
      120112: "津南区",
      120113: "北辰区",
      120114: "武清区",
      120115: "宝坻区",
      120116: "滨海新区",
      120221: "宁河县",
      120223: "静海县",
      120225: "蓟县",
      120226: "其它区",
      130000: "河北省",
      130100: "石家庄市",
      130102: "长安区",
      130103: "桥东区",
      130104: "桥西区",
      130105: "新华区",
      130107: "井陉矿区",
      130108: "裕华区",
      130121: "井陉县",
      130123: "正定县",
      130124: "栾城县",
      130125: "行唐县",
      130126: "灵寿县",
      130127: "高邑县",
      130128: "深泽县",
      130129: "赞皇县",
      130130: "无极县",
      130131: "平山县",
      130132: "元氏县",
      130133: "赵县",
      130181: "辛集市",
      130182: "藁城市",
      130183: "晋州市",
      130184: "新乐市",
      130185: "鹿泉市",
      130186: "其它区",
      130200: "唐山市",
      130202: "路南区",
      130203: "路北区",
      130204: "古冶区",
      130205: "开平区",
      130207: "丰南区",
      130208: "丰润区",
      130223: "滦县",
      130224: "滦南县",
      130225: "乐亭县",
      130227: "迁西县",
      130229: "玉田县",
      130230: "曹妃甸区",
      130281: "遵化市",
      130283: "迁安市",
      130284: "其它区",
      130300: "秦皇岛市",
      130302: "海港区",
      130303: "山海关区",
      130304: "北戴河区",
      130321: "青龙满族自治县",
      130322: "昌黎县",
      130323: "抚宁县",
      130324: "卢龙县",
      130398: "其它区",
      130400: "邯郸市",
      130402: "邯山区",
      130403: "丛台区",
      130404: "复兴区",
      130406: "峰峰矿区",
      130421: "邯郸县",
      130423: "临漳县",
      130424: "成安县",
      130425: "大名县",
      130426: "涉县",
      130427: "磁县",
      130428: "肥乡县",
      130429: "永年县",
      130430: "邱县",
      130431: "鸡泽县",
      130432: "广平县",
      130433: "馆陶县",
      130434: "魏县",
      130435: "曲周县",
      130481: "武安市",
      130482: "其它区",
      130500: "邢台市",
      130502: "桥东区",
      130503: "桥西区",
      130521: "邢台县",
      130522: "临城县",
      130523: "内丘县",
      130524: "柏乡县",
      130525: "隆尧县",
      130526: "任县",
      130527: "南和县",
      130528: "宁晋县",
      130529: "巨鹿县",
      130530: "新河县",
      130531: "广宗县",
      130532: "平乡县",
      130533: "威县",
      130534: "清河县",
      130535: "临西县",
      130581: "南宫市",
      130582: "沙河市",
      130583: "其它区",
      130600: "保定市",
      130602: "新市区",
      130603: "北市区",
      130604: "南市区",
      130621: "满城县",
      130622: "清苑县",
      130623: "涞水县",
      130624: "阜平县",
      130625: "徐水县",
      130626: "定兴县",
      130627: "唐县",
      130628: "高阳县",
      130629: "容城县",
      130630: "涞源县",
      130631: "望都县",
      130632: "安新县",
      130633: "易县",
      130634: "曲阳县",
      130635: "蠡县",
      130636: "顺平县",
      130637: "博野县",
      130638: "雄县",
      130681: "涿州市",
      130682: "定州市",
      130683: "安国市",
      130684: "高碑店市",
      130699: "其它区",
      130700: "张家口市",
      130702: "桥东区",
      130703: "桥西区",
      130705: "宣化区",
      130706: "下花园区",
      130721: "宣化县",
      130722: "张北县",
      130723: "康保县",
      130724: "沽源县",
      130725: "尚义县",
      130726: "蔚县",
      130727: "阳原县",
      130728: "怀安县",
      130729: "万全县",
      130730: "怀来县",
      130731: "涿鹿县",
      130732: "赤城县",
      130733: "崇礼县",
      130734: "其它区",
      130800: "承德市",
      130802: "双桥区",
      130803: "双滦区",
      130804: "鹰手营子矿区",
      130821: "承德县",
      130822: "兴隆县",
      130823: "平泉县",
      130824: "滦平县",
      130825: "隆化县",
      130826: "丰宁满族自治县",
      130827: "宽城满族自治县",
      130828: "围场满族蒙古族自治县",
      130829: "其它区",
      130900: "沧州市",
      130902: "新华区",
      130903: "运河区",
      130921: "沧县",
      130922: "青县",
      130923: "东光县",
      130924: "海兴县",
      130925: "盐山县",
      130926: "肃宁县",
      130927: "南皮县",
      130928: "吴桥县",
      130929: "献县",
      130930: "孟村回族自治县",
      130981: "泊头市",
      130982: "任丘市",
      130983: "黄骅市",
      130984: "河间市",
      130985: "其它区",
      131000: "廊坊市",
      131002: "安次区",
      131003: "广阳区",
      131022: "固安县",
      131023: "永清县",
      131024: "香河县",
      131025: "大城县",
      131026: "文安县",
      131028: "大厂回族自治县",
      131081: "霸州市",
      131082: "三河市",
      131083: "其它区",
      131100: "衡水市",
      131102: "桃城区",
      131121: "枣强县",
      131122: "武邑县",
      131123: "武强县",
      131124: "饶阳县",
      131125: "安平县",
      131126: "故城县",
      131127: "景县",
      131128: "阜城县",
      131181: "冀州市",
      131182: "深州市",
      131183: "其它区",
      140000: "山西省",
      140100: "太原市",
      140105: "小店区",
      140106: "迎泽区",
      140107: "杏花岭区",
      140108: "尖草坪区",
      140109: "万柏林区",
      140110: "晋源区",
      140121: "清徐县",
      140122: "阳曲县",
      140123: "娄烦县",
      140181: "古交市",
      140182: "其它区",
      140200: "大同市",
      140202: "城区",
      140203: "矿区",
      140211: "南郊区",
      140212: "新荣区",
      140221: "阳高县",
      140222: "天镇县",
      140223: "广灵县",
      140224: "灵丘县",
      140225: "浑源县",
      140226: "左云县",
      140227: "大同县",
      140228: "其它区",
      140300: "阳泉市",
      140302: "城区",
      140303: "矿区",
      140311: "郊区",
      140321: "平定县",
      140322: "盂县",
      140323: "其它区",
      140400: "长治市",
      140421: "长治县",
      140423: "襄垣县",
      140424: "屯留县",
      140425: "平顺县",
      140426: "黎城县",
      140427: "壶关县",
      140428: "长子县",
      140429: "武乡县",
      140430: "沁县",
      140431: "沁源县",
      140481: "潞城市",
      140482: "城区",
      140483: "郊区",
      140485: "其它区",
      140500: "晋城市",
      140502: "城区",
      140521: "沁水县",
      140522: "阳城县",
      140524: "陵川县",
      140525: "泽州县",
      140581: "高平市",
      140582: "其它区",
      140600: "朔州市",
      140602: "朔城区",
      140603: "平鲁区",
      140621: "山阴县",
      140622: "应县",
      140623: "右玉县",
      140624: "怀仁县",
      140625: "其它区",
      140700: "晋中市",
      140702: "榆次区",
      140721: "榆社县",
      140722: "左权县",
      140723: "和顺县",
      140724: "昔阳县",
      140725: "寿阳县",
      140726: "太谷县",
      140727: "祁县",
      140728: "平遥县",
      140729: "灵石县",
      140781: "介休市",
      140782: "其它区",
      140800: "运城市",
      140802: "盐湖区",
      140821: "临猗县",
      140822: "万荣县",
      140823: "闻喜县",
      140824: "稷山县",
      140825: "新绛县",
      140826: "绛县",
      140827: "垣曲县",
      140828: "夏县",
      140829: "平陆县",
      140830: "芮城县",
      140881: "永济市",
      140882: "河津市",
      140883: "其它区",
      140900: "忻州市",
      140902: "忻府区",
      140921: "定襄县",
      140922: "五台县",
      140923: "代县",
      140924: "繁峙县",
      140925: "宁武县",
      140926: "静乐县",
      140927: "神池县",
      140928: "五寨县",
      140929: "岢岚县",
      140930: "河曲县",
      140931: "保德县",
      140932: "偏关县",
      140981: "原平市",
      140982: "其它区",
      141000: "临汾市",
      141002: "尧都区",
      141021: "曲沃县",
      141022: "翼城县",
      141023: "襄汾县",
      141024: "洪洞县",
      141025: "古县",
      141026: "安泽县",
      141027: "浮山县",
      141028: "吉县",
      141029: "乡宁县",
      141030: "大宁县",
      141031: "隰县",
      141032: "永和县",
      141033: "蒲县",
      141034: "汾西县",
      141081: "侯马市",
      141082: "霍州市",
      141083: "其它区",
      141100: "吕梁市",
      141102: "离石区",
      141121: "文水县",
      141122: "交城县",
      141123: "兴县",
      141124: "临县",
      141125: "柳林县",
      141126: "石楼县",
      141127: "岚县",
      141128: "方山县",
      141129: "中阳县",
      141130: "交口县",
      141181: "孝义市",
      141182: "汾阳市",
      141183: "其它区",
      150000: "内蒙古自治区",
      150100: "呼和浩特市",
      150102: "新城区",
      150103: "回民区",
      150104: "玉泉区",
      150105: "赛罕区",
      150121: "土默特左旗",
      150122: "托克托县",
      150123: "和林格尔县",
      150124: "清水河县",
      150125: "武川县",
      150126: "其它区",
      150200: "包头市",
      150202: "东河区",
      150203: "昆都仑区",
      150204: "青山区",
      150205: "石拐区",
      150206: "白云鄂博矿区",
      150207: "九原区",
      150221: "土默特右旗",
      150222: "固阳县",
      150223: "达尔罕茂明安联合旗",
      150224: "其它区",
      150300: "乌海市",
      150302: "海勃湾区",
      150303: "海南区",
      150304: "乌达区",
      150305: "其它区",
      150400: "赤峰市",
      150402: "红山区",
      150403: "元宝山区",
      150404: "松山区",
      150421: "阿鲁科尔沁旗",
      150422: "巴林左旗",
      150423: "巴林右旗",
      150424: "林西县",
      150425: "克什克腾旗",
      150426: "翁牛特旗",
      150428: "喀喇沁旗",
      150429: "宁城县",
      150430: "敖汉旗",
      150431: "其它区",
      150500: "通辽市",
      150502: "科尔沁区",
      150521: "科尔沁左翼中旗",
      150522: "科尔沁左翼后旗",
      150523: "开鲁县",
      150524: "库伦旗",
      150525: "奈曼旗",
      150526: "扎鲁特旗",
      150581: "霍林郭勒市",
      150582: "其它区",
      150600: "鄂尔多斯市",
      150602: "东胜区",
      150621: "达拉特旗",
      150622: "准格尔旗",
      150623: "鄂托克前旗",
      150624: "鄂托克旗",
      150625: "杭锦旗",
      150626: "乌审旗",
      150627: "伊金霍洛旗",
      150628: "其它区",
      150700: "呼伦贝尔市",
      150702: "海拉尔区",
      150703: "扎赉诺尔区",
      150721: "阿荣旗",
      150722: "莫力达瓦达斡尔族自治旗",
      150723: "鄂伦春自治旗",
      150724: "鄂温克族自治旗",
      150725: "陈巴尔虎旗",
      150726: "新巴尔虎左旗",
      150727: "新巴尔虎右旗",
      150781: "满洲里市",
      150782: "牙克石市",
      150783: "扎兰屯市",
      150784: "额尔古纳市",
      150785: "根河市",
      150786: "其它区",
      150800: "巴彦淖尔市",
      150802: "临河区",
      150821: "五原县",
      150822: "磴口县",
      150823: "乌拉特前旗",
      150824: "乌拉特中旗",
      150825: "乌拉特后旗",
      150826: "杭锦后旗",
      150827: "其它区",
      150900: "乌兰察布市",
      150902: "集宁区",
      150921: "卓资县",
      150922: "化德县",
      150923: "商都县",
      150924: "兴和县",
      150925: "凉城县",
      150926: "察哈尔右翼前旗",
      150927: "察哈尔右翼中旗",
      150928: "察哈尔右翼后旗",
      150929: "四子王旗",
      150981: "丰镇市",
      150982: "其它区",
      152200: "兴安盟",
      152201: "乌兰浩特市",
      152202: "阿尔山市",
      152221: "科尔沁右翼前旗",
      152222: "科尔沁右翼中旗",
      152223: "扎赉特旗",
      152224: "突泉县",
      152225: "其它区",
      152500: "锡林郭勒盟",
      152501: "二连浩特市",
      152502: "锡林浩特市",
      152522: "阿巴嘎旗",
      152523: "苏尼特左旗",
      152524: "苏尼特右旗",
      152525: "东乌珠穆沁旗",
      152526: "西乌珠穆沁旗",
      152527: "太仆寺旗",
      152528: "镶黄旗",
      152529: "正镶白旗",
      152530: "正蓝旗",
      152531: "多伦县",
      152532: "其它区",
      152900: "阿拉善盟",
      152921: "阿拉善左旗",
      152922: "阿拉善右旗",
      152923: "额济纳旗",
      152924: "其它区",
      210000: "辽宁省",
      210100: "沈阳市",
      210102: "和平区",
      210103: "沈河区",
      210104: "大东区",
      210105: "皇姑区",
      210106: "铁西区",
      210111: "苏家屯区",
      210112: "东陵区",
      210113: "新城子区",
      210114: "于洪区",
      210122: "辽中县",
      210123: "康平县",
      210124: "法库县",
      210181: "新民市",
      210184: "沈北新区",
      210185: "其它区",
      210200: "大连市",
      210202: "中山区",
      210203: "西岗区",
      210204: "沙河口区",
      210211: "甘井子区",
      210212: "旅顺口区",
      210213: "金州区",
      210224: "长海县",
      210281: "瓦房店市",
      210282: "普兰店市",
      210283: "庄河市",
      210298: "其它区",
      210300: "鞍山市",
      210302: "铁东区",
      210303: "铁西区",
      210304: "立山区",
      210311: "千山区",
      210321: "台安县",
      210323: "岫岩满族自治县",
      210381: "海城市",
      210382: "其它区",
      210400: "抚顺市",
      210402: "新抚区",
      210403: "东洲区",
      210404: "望花区",
      210411: "顺城区",
      210421: "抚顺县",
      210422: "新宾满族自治县",
      210423: "清原满族自治县",
      210424: "其它区",
      210500: "本溪市",
      210502: "平山区",
      210503: "溪湖区",
      210504: "明山区",
      210505: "南芬区",
      210521: "本溪满族自治县",
      210522: "桓仁满族自治县",
      210523: "其它区",
      210600: "丹东市",
      210602: "元宝区",
      210603: "振兴区",
      210604: "振安区",
      210624: "宽甸满族自治县",
      210681: "东港市",
      210682: "凤城市",
      210683: "其它区",
      210700: "锦州市",
      210702: "古塔区",
      210703: "凌河区",
      210711: "太和区",
      210726: "黑山县",
      210727: "义县",
      210781: "凌海市",
      210782: "北镇市",
      210783: "其它区",
      210800: "营口市",
      210802: "站前区",
      210803: "西市区",
      210804: "鲅鱼圈区",
      210811: "老边区",
      210881: "盖州市",
      210882: "大石桥市",
      210883: "其它区",
      210900: "阜新市",
      210902: "海州区",
      210903: "新邱区",
      210904: "太平区",
      210905: "清河门区",
      210911: "细河区",
      210921: "阜新蒙古族自治县",
      210922: "彰武县",
      210923: "其它区",
      211000: "辽阳市",
      211002: "白塔区",
      211003: "文圣区",
      211004: "宏伟区",
      211005: "弓长岭区",
      211011: "太子河区",
      211021: "辽阳县",
      211081: "灯塔市",
      211082: "其它区",
      211100: "盘锦市",
      211102: "双台子区",
      211103: "兴隆台区",
      211121: "大洼县",
      211122: "盘山县",
      211123: "其它区",
      211200: "铁岭市",
      211202: "银州区",
      211204: "清河区",
      211221: "铁岭县",
      211223: "西丰县",
      211224: "昌图县",
      211281: "调兵山市",
      211282: "开原市",
      211283: "其它区",
      211300: "朝阳市",
      211302: "双塔区",
      211303: "龙城区",
      211321: "朝阳县",
      211322: "建平县",
      211324: "喀喇沁左翼蒙古族自治县",
      211381: "北票市",
      211382: "凌源市",
      211383: "其它区",
      211400: "葫芦岛市",
      211402: "连山区",
      211403: "龙港区",
      211404: "南票区",
      211421: "绥中县",
      211422: "建昌县",
      211481: "兴城市",
      211482: "其它区",
      220000: "吉林省",
      220100: "长春市",
      220102: "南关区",
      220103: "宽城区",
      220104: "朝阳区",
      220105: "二道区",
      220106: "绿园区",
      220112: "双阳区",
      220122: "农安县",
      220181: "九台市",
      220182: "榆树市",
      220183: "德惠市",
      220188: "其它区",
      220200: "吉林市",
      220202: "昌邑区",
      220203: "龙潭区",
      220204: "船营区",
      220211: "丰满区",
      220221: "永吉县",
      220281: "蛟河市",
      220282: "桦甸市",
      220283: "舒兰市",
      220284: "磐石市",
      220285: "其它区",
      220300: "四平市",
      220302: "铁西区",
      220303: "铁东区",
      220322: "梨树县",
      220323: "伊通满族自治县",
      220381: "公主岭市",
      220382: "双辽市",
      220383: "其它区",
      220400: "辽源市",
      220402: "龙山区",
      220403: "西安区",
      220421: "东丰县",
      220422: "东辽县",
      220423: "其它区",
      220500: "通化市",
      220502: "东昌区",
      220503: "二道江区",
      220521: "通化县",
      220523: "辉南县",
      220524: "柳河县",
      220581: "梅河口市",
      220582: "集安市",
      220583: "其它区",
      220600: "白山市",
      220602: "浑江区",
      220621: "抚松县",
      220622: "靖宇县",
      220623: "长白朝鲜族自治县",
      220625: "江源区",
      220681: "临江市",
      220682: "其它区",
      220700: "松原市",
      220702: "宁江区",
      220721: "前郭尔罗斯蒙古族自治县",
      220722: "长岭县",
      220723: "乾安县",
      220724: "扶余市",
      220725: "其它区",
      220800: "白城市",
      220802: "洮北区",
      220821: "镇赉县",
      220822: "通榆县",
      220881: "洮南市",
      220882: "大安市",
      220883: "其它区",
      222400: "延边朝鲜族自治州",
      222401: "延吉市",
      222402: "图们市",
      222403: "敦化市",
      222404: "珲春市",
      222405: "龙井市",
      222406: "和龙市",
      222424: "汪清县",
      222426: "安图县",
      222427: "其它区",
      230000: "黑龙江省",
      230100: "哈尔滨市",
      230102: "道里区",
      230103: "南岗区",
      230104: "道外区",
      230106: "香坊区",
      230108: "平房区",
      230109: "松北区",
      230111: "呼兰区",
      230123: "依兰县",
      230124: "方正县",
      230125: "宾县",
      230126: "巴彦县",
      230127: "木兰县",
      230128: "通河县",
      230129: "延寿县",
      230181: "阿城区",
      230182: "双城市",
      230183: "尚志市",
      230184: "五常市",
      230186: "其它区",
      230200: "齐齐哈尔市",
      230202: "龙沙区",
      230203: "建华区",
      230204: "铁锋区",
      230205: "昂昂溪区",
      230206: "富拉尔基区",
      230207: "碾子山区",
      230208: "梅里斯达斡尔族区",
      230221: "龙江县",
      230223: "依安县",
      230224: "泰来县",
      230225: "甘南县",
      230227: "富裕县",
      230229: "克山县",
      230230: "克东县",
      230231: "拜泉县",
      230281: "讷河市",
      230282: "其它区",
      230300: "鸡西市",
      230302: "鸡冠区",
      230303: "恒山区",
      230304: "滴道区",
      230305: "梨树区",
      230306: "城子河区",
      230307: "麻山区",
      230321: "鸡东县",
      230381: "虎林市",
      230382: "密山市",
      230383: "其它区",
      230400: "鹤岗市",
      230402: "向阳区",
      230403: "工农区",
      230404: "南山区",
      230405: "兴安区",
      230406: "东山区",
      230407: "兴山区",
      230421: "萝北县",
      230422: "绥滨县",
      230423: "其它区",
      230500: "双鸭山市",
      230502: "尖山区",
      230503: "岭东区",
      230505: "四方台区",
      230506: "宝山区",
      230521: "集贤县",
      230522: "友谊县",
      230523: "宝清县",
      230524: "饶河县",
      230525: "其它区",
      230600: "大庆市",
      230602: "萨尔图区",
      230603: "龙凤区",
      230604: "让胡路区",
      230605: "红岗区",
      230606: "大同区",
      230621: "肇州县",
      230622: "肇源县",
      230623: "林甸县",
      230624: "杜尔伯特蒙古族自治县",
      230625: "其它区",
      230700: "伊春市",
      230702: "伊春区",
      230703: "南岔区",
      230704: "友好区",
      230705: "西林区",
      230706: "翠峦区",
      230707: "新青区",
      230708: "美溪区",
      230709: "金山屯区",
      230710: "五营区",
      230711: "乌马河区",
      230712: "汤旺河区",
      230713: "带岭区",
      230714: "乌伊岭区",
      230715: "红星区",
      230716: "上甘岭区",
      230722: "嘉荫县",
      230781: "铁力市",
      230782: "其它区",
      230800: "佳木斯市",
      230803: "向阳区",
      230804: "前进区",
      230805: "东风区",
      230811: "郊区",
      230822: "桦南县",
      230826: "桦川县",
      230828: "汤原县",
      230833: "抚远县",
      230881: "同江市",
      230882: "富锦市",
      230883: "其它区",
      230900: "七台河市",
      230902: "新兴区",
      230903: "桃山区",
      230904: "茄子河区",
      230921: "勃利县",
      230922: "其它区",
      231000: "牡丹江市",
      231002: "东安区",
      231003: "阳明区",
      231004: "爱民区",
      231005: "西安区",
      231024: "东宁县",
      231025: "林口县",
      231081: "绥芬河市",
      231083: "海林市",
      231084: "宁安市",
      231085: "穆棱市",
      231086: "其它区",
      231100: "黑河市",
      231102: "爱辉区",
      231121: "嫩江县",
      231123: "逊克县",
      231124: "孙吴县",
      231181: "北安市",
      231182: "五大连池市",
      231183: "其它区",
      231200: "绥化市",
      231202: "北林区",
      231221: "望奎县",
      231222: "兰西县",
      231223: "青冈县",
      231224: "庆安县",
      231225: "明水县",
      231226: "绥棱县",
      231281: "安达市",
      231282: "肇东市",
      231283: "海伦市",
      231284: "其它区",
      232700: "大兴安岭地区",
      232702: "松岭区",
      232703: "新林区",
      232704: "呼中区",
      232721: "呼玛县",
      232722: "塔河县",
      232723: "漠河县",
      232724: "加格达奇区",
      232725: "其它区",
      310000: "上海",
      310100: "上海市",
      310101: "黄浦区",
      310104: "徐汇区",
      310105: "长宁区",
      310106: "静安区",
      310107: "普陀区",
      310108: "闸北区",
      310109: "虹口区",
      310110: "杨浦区",
      310112: "闵行区",
      310113: "宝山区",
      310114: "嘉定区",
      310115: "浦东新区",
      310116: "金山区",
      310117: "松江区",
      310118: "青浦区",
      310120: "奉贤区",
      310230: "崇明县",
      310231: "其它区",
      320000: "江苏省",
      320100: "南京市",
      320102: "玄武区",
      320104: "秦淮区",
      320105: "建邺区",
      320106: "鼓楼区",
      320111: "浦口区",
      320113: "栖霞区",
      320114: "雨花台区",
      320115: "江宁区",
      320116: "六合区",
      320124: "溧水区",
      320125: "高淳区",
      320126: "其它区",
      320200: "无锡市",
      320202: "崇安区",
      320203: "南长区",
      320204: "北塘区",
      320205: "锡山区",
      320206: "惠山区",
      320211: "滨湖区",
      320281: "江阴市",
      320282: "宜兴市",
      320297: "其它区",
      320300: "徐州市",
      320302: "鼓楼区",
      320303: "云龙区",
      320305: "贾汪区",
      320311: "泉山区",
      320321: "丰县",
      320322: "沛县",
      320323: "铜山区",
      320324: "睢宁县",
      320381: "新沂市",
      320382: "邳州市",
      320383: "其它区",
      320400: "常州市",
      320402: "天宁区",
      320404: "钟楼区",
      320405: "戚墅堰区",
      320411: "新北区",
      320412: "武进区",
      320481: "溧阳市",
      320482: "金坛市",
      320483: "其它区",
      320500: "苏州市",
      320505: "虎丘区",
      320506: "吴中区",
      320507: "相城区",
      320508: "姑苏区",
      320581: "常熟市",
      320582: "张家港市",
      320583: "昆山市",
      320584: "吴江区",
      320585: "太仓市",
      320596: "其它区",
      320600: "南通市",
      320602: "崇川区",
      320611: "港闸区",
      320612: "通州区",
      320621: "海安县",
      320623: "如东县",
      320681: "启东市",
      320682: "如皋市",
      320684: "海门市",
      320694: "其它区",
      320700: "连云港市",
      320703: "连云区",
      320705: "新浦区",
      320706: "海州区",
      320721: "赣榆县",
      320722: "东海县",
      320723: "灌云县",
      320724: "灌南县",
      320725: "其它区",
      320800: "淮安市",
      320802: "清河区",
      320803: "淮安区",
      320804: "淮阴区",
      320811: "清浦区",
      320826: "涟水县",
      320829: "洪泽县",
      320830: "盱眙县",
      320831: "金湖县",
      320832: "其它区",
      320900: "盐城市",
      320902: "亭湖区",
      320903: "盐都区",
      320921: "响水县",
      320922: "滨海县",
      320923: "阜宁县",
      320924: "射阳县",
      320925: "建湖县",
      320981: "东台市",
      320982: "大丰市",
      320983: "其它区",
      321000: "扬州市",
      321002: "广陵区",
      321003: "邗江区",
      321023: "宝应县",
      321081: "仪征市",
      321084: "高邮市",
      321088: "江都区",
      321093: "其它区",
      321100: "镇江市",
      321102: "京口区",
      321111: "润州区",
      321112: "丹徒区",
      321181: "丹阳市",
      321182: "扬中市",
      321183: "句容市",
      321184: "其它区",
      321200: "泰州市",
      321202: "海陵区",
      321203: "高港区",
      321281: "兴化市",
      321282: "靖江市",
      321283: "泰兴市",
      321284: "姜堰区",
      321285: "其它区",
      321300: "宿迁市",
      321302: "宿城区",
      321311: "宿豫区",
      321322: "沭阳县",
      321323: "泗阳县",
      321324: "泗洪县",
      321325: "其它区",
      330000: "浙江省",
      330100: "杭州市",
      330102: "上城区",
      330103: "下城区",
      330104: "江干区",
      330105: "拱墅区",
      330106: "西湖区",
      330108: "滨江区",
      330109: "萧山区",
      330110: "余杭区",
      330122: "桐庐县",
      330127: "淳安县",
      330182: "建德市",
      330183: "富阳市",
      330185: "临安市",
      330186: "其它区",
      330200: "宁波市",
      330203: "海曙区",
      330204: "江东区",
      330205: "江北区",
      330206: "北仑区",
      330211: "镇海区",
      330212: "鄞州区",
      330225: "象山县",
      330226: "宁海县",
      330281: "余姚市",
      330282: "慈溪市",
      330283: "奉化市",
      330284: "其它区",
      330300: "温州市",
      330302: "鹿城区",
      330303: "龙湾区",
      330304: "瓯海区",
      330322: "洞头县",
      330324: "永嘉县",
      330326: "平阳县",
      330327: "苍南县",
      330328: "文成县",
      330329: "泰顺县",
      330381: "瑞安市",
      330382: "乐清市",
      330383: "其它区",
      330400: "嘉兴市",
      330402: "南湖区",
      330411: "秀洲区",
      330421: "嘉善县",
      330424: "海盐县",
      330481: "海宁市",
      330482: "平湖市",
      330483: "桐乡市",
      330484: "其它区",
      330500: "湖州市",
      330502: "吴兴区",
      330503: "南浔区",
      330521: "德清县",
      330522: "长兴县",
      330523: "安吉县",
      330524: "其它区",
      330600: "绍兴市",
      330602: "越城区",
      330621: "绍兴县",
      330624: "新昌县",
      330681: "诸暨市",
      330682: "上虞市",
      330683: "嵊州市",
      330684: "其它区",
      330700: "金华市",
      330702: "婺城区",
      330703: "金东区",
      330723: "武义县",
      330726: "浦江县",
      330727: "磐安县",
      330781: "兰溪市",
      330782: "义乌市",
      330783: "东阳市",
      330784: "永康市",
      330785: "其它区",
      330800: "衢州市",
      330802: "柯城区",
      330803: "衢江区",
      330822: "常山县",
      330824: "开化县",
      330825: "龙游县",
      330881: "江山市",
      330882: "其它区",
      330900: "舟山市",
      330902: "定海区",
      330903: "普陀区",
      330921: "岱山县",
      330922: "嵊泗县",
      330923: "其它区",
      331000: "台州市",
      331002: "椒江区",
      331003: "黄岩区",
      331004: "路桥区",
      331021: "玉环县",
      331022: "三门县",
      331023: "天台县",
      331024: "仙居县",
      331081: "温岭市",
      331082: "临海市",
      331083: "其它区",
      331100: "丽水市",
      331102: "莲都区",
      331121: "青田县",
      331122: "缙云县",
      331123: "遂昌县",
      331124: "松阳县",
      331125: "云和县",
      331126: "庆元县",
      331127: "景宁畲族自治县",
      331181: "龙泉市",
      331182: "其它区",
      340000: "安徽省",
      340100: "合肥市",
      340102: "瑶海区",
      340103: "庐阳区",
      340104: "蜀山区",
      340111: "包河区",
      340121: "长丰县",
      340122: "肥东县",
      340123: "肥西县",
      340192: "其它区",
      340200: "芜湖市",
      340202: "镜湖区",
      340203: "弋江区",
      340207: "鸠江区",
      340208: "三山区",
      340221: "芜湖县",
      340222: "繁昌县",
      340223: "南陵县",
      340224: "其它区",
      340300: "蚌埠市",
      340302: "龙子湖区",
      340303: "蚌山区",
      340304: "禹会区",
      340311: "淮上区",
      340321: "怀远县",
      340322: "五河县",
      340323: "固镇县",
      340324: "其它区",
      340400: "淮南市",
      340402: "大通区",
      340403: "田家庵区",
      340404: "谢家集区",
      340405: "八公山区",
      340406: "潘集区",
      340421: "凤台县",
      340422: "其它区",
      340500: "马鞍山市",
      340503: "花山区",
      340504: "雨山区",
      340506: "博望区",
      340521: "当涂县",
      340522: "其它区",
      340600: "淮北市",
      340602: "杜集区",
      340603: "相山区",
      340604: "烈山区",
      340621: "濉溪县",
      340622: "其它区",
      340700: "铜陵市",
      340702: "铜官山区",
      340703: "狮子山区",
      340711: "郊区",
      340721: "铜陵县",
      340722: "其它区",
      340800: "安庆市",
      340802: "迎江区",
      340803: "大观区",
      340811: "宜秀区",
      340822: "怀宁县",
      340823: "枞阳县",
      340824: "潜山县",
      340825: "太湖县",
      340826: "宿松县",
      340827: "望江县",
      340828: "岳西县",
      340881: "桐城市",
      340882: "其它区",
      341000: "黄山市",
      341002: "屯溪区",
      341003: "黄山区",
      341004: "徽州区",
      341021: "歙县",
      341022: "休宁县",
      341023: "黟县",
      341024: "祁门县",
      341025: "其它区",
      341100: "滁州市",
      341102: "琅琊区",
      341103: "南谯区",
      341122: "来安县",
      341124: "全椒县",
      341125: "定远县",
      341126: "凤阳县",
      341181: "天长市",
      341182: "明光市",
      341183: "其它区",
      341200: "阜阳市",
      341202: "颍州区",
      341203: "颍东区",
      341204: "颍泉区",
      341221: "临泉县",
      341222: "太和县",
      341225: "阜南县",
      341226: "颍上县",
      341282: "界首市",
      341283: "其它区",
      341300: "宿州市",
      341302: "埇桥区",
      341321: "砀山县",
      341322: "萧县",
      341323: "灵璧县",
      341324: "泗县",
      341325: "其它区",
      341400: "巢湖市",
      341421: "庐江县",
      341422: "无为县",
      341423: "含山县",
      341424: "和县",
      341500: "六安市",
      341502: "金安区",
      341503: "裕安区",
      341521: "寿县",
      341522: "霍邱县",
      341523: "舒城县",
      341524: "金寨县",
      341525: "霍山县",
      341526: "其它区",
      341600: "亳州市",
      341602: "谯城区",
      341621: "涡阳县",
      341622: "蒙城县",
      341623: "利辛县",
      341624: "其它区",
      341700: "池州市",
      341702: "贵池区",
      341721: "东至县",
      341722: "石台县",
      341723: "青阳县",
      341724: "其它区",
      341800: "宣城市",
      341802: "宣州区",
      341821: "郎溪县",
      341822: "广德县",
      341823: "泾县",
      341824: "绩溪县",
      341825: "旌德县",
      341881: "宁国市",
      341882: "其它区",
      350000: "福建省",
      350100: "福州市",
      350102: "鼓楼区",
      350103: "台江区",
      350104: "仓山区",
      350105: "马尾区",
      350111: "晋安区",
      350121: "闽侯县",
      350122: "连江县",
      350123: "罗源县",
      350124: "闽清县",
      350125: "永泰县",
      350128: "平潭县",
      350181: "福清市",
      350182: "长乐市",
      350183: "其它区",
      350200: "厦门市",
      350203: "思明区",
      350205: "海沧区",
      350206: "湖里区",
      350211: "集美区",
      350212: "同安区",
      350213: "翔安区",
      350214: "其它区",
      350300: "莆田市",
      350302: "城厢区",
      350303: "涵江区",
      350304: "荔城区",
      350305: "秀屿区",
      350322: "仙游县",
      350323: "其它区",
      350400: "三明市",
      350402: "梅列区",
      350403: "三元区",
      350421: "明溪县",
      350423: "清流县",
      350424: "宁化县",
      350425: "大田县",
      350426: "尤溪县",
      350427: "沙县",
      350428: "将乐县",
      350429: "泰宁县",
      350430: "建宁县",
      350481: "永安市",
      350482: "其它区",
      350500: "泉州市",
      350502: "鲤城区",
      350503: "丰泽区",
      350504: "洛江区",
      350505: "泉港区",
      350521: "惠安县",
      350524: "安溪县",
      350525: "永春县",
      350526: "德化县",
      350527: "金门县",
      350581: "石狮市",
      350582: "晋江市",
      350583: "南安市",
      350584: "其它区",
      350600: "漳州市",
      350602: "芗城区",
      350603: "龙文区",
      350622: "云霄县",
      350623: "漳浦县",
      350624: "诏安县",
      350625: "长泰县",
      350626: "东山县",
      350627: "南靖县",
      350628: "平和县",
      350629: "华安县",
      350681: "龙海市",
      350682: "其它区",
      350700: "南平市",
      350702: "延平区",
      350721: "顺昌县",
      350722: "浦城县",
      350723: "光泽县",
      350724: "松溪县",
      350725: "政和县",
      350781: "邵武市",
      350782: "武夷山市",
      350783: "建瓯市",
      350784: "建阳市",
      350785: "其它区",
      350800: "龙岩市",
      350802: "新罗区",
      350821: "长汀县",
      350822: "永定县",
      350823: "上杭县",
      350824: "武平县",
      350825: "连城县",
      350881: "漳平市",
      350882: "其它区",
      350900: "宁德市",
      350902: "蕉城区",
      350921: "霞浦县",
      350922: "古田县",
      350923: "屏南县",
      350924: "寿宁县",
      350925: "周宁县",
      350926: "柘荣县",
      350981: "福安市",
      350982: "福鼎市",
      350983: "其它区",
      360000: "江西省",
      360100: "南昌市",
      360102: "东湖区",
      360103: "西湖区",
      360104: "青云谱区",
      360105: "湾里区",
      360111: "青山湖区",
      360121: "南昌县",
      360122: "新建县",
      360123: "安义县",
      360124: "进贤县",
      360128: "其它区",
      360200: "景德镇市",
      360202: "昌江区",
      360203: "珠山区",
      360222: "浮梁县",
      360281: "乐平市",
      360282: "其它区",
      360300: "萍乡市",
      360302: "安源区",
      360313: "湘东区",
      360321: "莲花县",
      360322: "上栗县",
      360323: "芦溪县",
      360324: "其它区",
      360400: "九江市",
      360402: "庐山区",
      360403: "浔阳区",
      360421: "九江县",
      360423: "武宁县",
      360424: "修水县",
      360425: "永修县",
      360426: "德安县",
      360427: "星子县",
      360428: "都昌县",
      360429: "湖口县",
      360430: "彭泽县",
      360481: "瑞昌市",
      360482: "其它区",
      360483: "共青城市",
      360500: "新余市",
      360502: "渝水区",
      360521: "分宜县",
      360522: "其它区",
      360600: "鹰潭市",
      360602: "月湖区",
      360622: "余江县",
      360681: "贵溪市",
      360682: "其它区",
      360700: "赣州市",
      360702: "章贡区",
      360721: "赣县",
      360722: "信丰县",
      360723: "大余县",
      360724: "上犹县",
      360725: "崇义县",
      360726: "安远县",
      360727: "龙南县",
      360728: "定南县",
      360729: "全南县",
      360730: "宁都县",
      360731: "于都县",
      360732: "兴国县",
      360733: "会昌县",
      360734: "寻乌县",
      360735: "石城县",
      360781: "瑞金市",
      360782: "南康市",
      360783: "其它区",
      360800: "吉安市",
      360802: "吉州区",
      360803: "青原区",
      360821: "吉安县",
      360822: "吉水县",
      360823: "峡江县",
      360824: "新干县",
      360825: "永丰县",
      360826: "泰和县",
      360827: "遂川县",
      360828: "万安县",
      360829: "安福县",
      360830: "永新县",
      360881: "井冈山市",
      360882: "其它区",
      360900: "宜春市",
      360902: "袁州区",
      360921: "奉新县",
      360922: "万载县",
      360923: "上高县",
      360924: "宜丰县",
      360925: "靖安县",
      360926: "铜鼓县",
      360981: "丰城市",
      360982: "樟树市",
      360983: "高安市",
      360984: "其它区",
      361000: "抚州市",
      361002: "临川区",
      361021: "南城县",
      361022: "黎川县",
      361023: "南丰县",
      361024: "崇仁县",
      361025: "乐安县",
      361026: "宜黄县",
      361027: "金溪县",
      361028: "资溪县",
      361029: "东乡县",
      361030: "广昌县",
      361031: "其它区",
      361100: "上饶市",
      361102: "信州区",
      361121: "上饶县",
      361122: "广丰县",
      361123: "玉山县",
      361124: "铅山县",
      361125: "横峰县",
      361126: "弋阳县",
      361127: "余干县",
      361128: "鄱阳县",
      361129: "万年县",
      361130: "婺源县",
      361181: "德兴市",
      361182: "其它区",
      370000: "山东省",
      370100: "济南市",
      370102: "历下区",
      370103: "市中区",
      370104: "槐荫区",
      370105: "天桥区",
      370112: "历城区",
      370113: "长清区",
      370124: "平阴县",
      370125: "济阳县",
      370126: "商河县",
      370181: "章丘市",
      370182: "其它区",
      370200: "青岛市",
      370202: "市南区",
      370203: "市北区",
      370211: "黄岛区",
      370212: "崂山区",
      370213: "李沧区",
      370214: "城阳区",
      370281: "胶州市",
      370282: "即墨市",
      370283: "平度市",
      370285: "莱西市",
      370286: "其它区",
      370300: "淄博市",
      370302: "淄川区",
      370303: "张店区",
      370304: "博山区",
      370305: "临淄区",
      370306: "周村区",
      370321: "桓台县",
      370322: "高青县",
      370323: "沂源县",
      370324: "其它区",
      370400: "枣庄市",
      370402: "市中区",
      370403: "薛城区",
      370404: "峄城区",
      370405: "台儿庄区",
      370406: "山亭区",
      370481: "滕州市",
      370482: "其它区",
      370500: "东营市",
      370502: "东营区",
      370503: "河口区",
      370521: "垦利县",
      370522: "利津县",
      370523: "广饶县",
      370591: "其它区",
      370600: "烟台市",
      370602: "芝罘区",
      370611: "福山区",
      370612: "牟平区",
      370613: "莱山区",
      370634: "长岛县",
      370681: "龙口市",
      370682: "莱阳市",
      370683: "莱州市",
      370684: "蓬莱市",
      370685: "招远市",
      370686: "栖霞市",
      370687: "海阳市",
      370688: "其它区",
      370700: "潍坊市",
      370702: "潍城区",
      370703: "寒亭区",
      370704: "坊子区",
      370705: "奎文区",
      370724: "临朐县",
      370725: "昌乐县",
      370781: "青州市",
      370782: "诸城市",
      370783: "寿光市",
      370784: "安丘市",
      370785: "高密市",
      370786: "昌邑市",
      370787: "其它区",
      370800: "济宁市",
      370802: "市中区",
      370811: "任城区",
      370826: "微山县",
      370827: "鱼台县",
      370828: "金乡县",
      370829: "嘉祥县",
      370830: "汶上县",
      370831: "泗水县",
      370832: "梁山县",
      370881: "曲阜市",
      370882: "兖州市",
      370883: "邹城市",
      370884: "其它区",
      370900: "泰安市",
      370902: "泰山区",
      370903: "岱岳区",
      370921: "宁阳县",
      370923: "东平县",
      370982: "新泰市",
      370983: "肥城市",
      370984: "其它区",
      371000: "威海市",
      371002: "环翠区",
      371081: "文登市",
      371082: "荣成市",
      371083: "乳山市",
      371084: "其它区",
      371100: "日照市",
      371102: "东港区",
      371103: "岚山区",
      371121: "五莲县",
      371122: "莒县",
      371123: "其它区",
      371200: "莱芜市",
      371202: "莱城区",
      371203: "钢城区",
      371204: "其它区",
      371300: "临沂市",
      371302: "兰山区",
      371311: "罗庄区",
      371312: "河东区",
      371321: "沂南县",
      371322: "郯城县",
      371323: "沂水县",
      371324: "苍山县",
      371325: "费县",
      371326: "平邑县",
      371327: "莒南县",
      371328: "蒙阴县",
      371329: "临沭县",
      371330: "其它区",
      371400: "德州市",
      371402: "德城区",
      371421: "陵县",
      371422: "宁津县",
      371423: "庆云县",
      371424: "临邑县",
      371425: "齐河县",
      371426: "平原县",
      371427: "夏津县",
      371428: "武城县",
      371481: "乐陵市",
      371482: "禹城市",
      371483: "其它区",
      371500: "聊城市",
      371502: "东昌府区",
      371521: "阳谷县",
      371522: "莘县",
      371523: "茌平县",
      371524: "东阿县",
      371525: "冠县",
      371526: "高唐县",
      371581: "临清市",
      371582: "其它区",
      371600: "滨州市",
      371602: "滨城区",
      371621: "惠民县",
      371622: "阳信县",
      371623: "无棣县",
      371624: "沾化县",
      371625: "博兴县",
      371626: "邹平县",
      371627: "其它区",
      371700: "菏泽市",
      371702: "牡丹区",
      371721: "曹县",
      371722: "单县",
      371723: "成武县",
      371724: "巨野县",
      371725: "郓城县",
      371726: "鄄城县",
      371727: "定陶县",
      371728: "东明县",
      371729: "其它区",
      410000: "河南省",
      410100: "郑州市",
      410102: "中原区",
      410103: "二七区",
      410104: "管城回族区",
      410105: "金水区",
      410106: "上街区",
      410108: "惠济区",
      410122: "中牟县",
      410181: "巩义市",
      410182: "荥阳市",
      410183: "新密市",
      410184: "新郑市",
      410185: "登封市",
      410188: "其它区",
      410200: "开封市",
      410202: "龙亭区",
      410203: "顺河回族区",
      410204: "鼓楼区",
      410205: "禹王台区",
      410211: "金明区",
      410221: "杞县",
      410222: "通许县",
      410223: "尉氏县",
      410224: "开封县",
      410225: "兰考县",
      410226: "其它区",
      410300: "洛阳市",
      410302: "老城区",
      410303: "西工区",
      410304: "瀍河回族区",
      410305: "涧西区",
      410306: "吉利区",
      410307: "洛龙区",
      410322: "孟津县",
      410323: "新安县",
      410324: "栾川县",
      410325: "嵩县",
      410326: "汝阳县",
      410327: "宜阳县",
      410328: "洛宁县",
      410329: "伊川县",
      410381: "偃师市",
      410400: "平顶山市",
      410402: "新华区",
      410403: "卫东区",
      410404: "石龙区",
      410411: "湛河区",
      410421: "宝丰县",
      410422: "叶县",
      410423: "鲁山县",
      410425: "郏县",
      410481: "舞钢市",
      410482: "汝州市",
      410483: "其它区",
      410500: "安阳市",
      410502: "文峰区",
      410503: "北关区",
      410505: "殷都区",
      410506: "龙安区",
      410522: "安阳县",
      410523: "汤阴县",
      410526: "滑县",
      410527: "内黄县",
      410581: "林州市",
      410582: "其它区",
      410600: "鹤壁市",
      410602: "鹤山区",
      410603: "山城区",
      410611: "淇滨区",
      410621: "浚县",
      410622: "淇县",
      410623: "其它区",
      410700: "新乡市",
      410702: "红旗区",
      410703: "卫滨区",
      410704: "凤泉区",
      410711: "牧野区",
      410721: "新乡县",
      410724: "获嘉县",
      410725: "原阳县",
      410726: "延津县",
      410727: "封丘县",
      410728: "长垣县",
      410781: "卫辉市",
      410782: "辉县市",
      410783: "其它区",
      410800: "焦作市",
      410802: "解放区",
      410803: "中站区",
      410804: "马村区",
      410811: "山阳区",
      410821: "修武县",
      410822: "博爱县",
      410823: "武陟县",
      410825: "温县",
      410881: "济源市",
      410882: "沁阳市",
      410883: "孟州市",
      410884: "其它区",
      410900: "濮阳市",
      410902: "华龙区",
      410922: "清丰县",
      410923: "南乐县",
      410926: "范县",
      410927: "台前县",
      410928: "濮阳县",
      410929: "其它区",
      411000: "许昌市",
      411002: "魏都区",
      411023: "许昌县",
      411024: "鄢陵县",
      411025: "襄城县",
      411081: "禹州市",
      411082: "长葛市",
      411083: "其它区",
      411100: "漯河市",
      411102: "源汇区",
      411103: "郾城区",
      411104: "召陵区",
      411121: "舞阳县",
      411122: "临颍县",
      411123: "其它区",
      411200: "三门峡市",
      411202: "湖滨区",
      411221: "渑池县",
      411222: "陕县",
      411224: "卢氏县",
      411281: "义马市",
      411282: "灵宝市",
      411283: "其它区",
      411300: "南阳市",
      411302: "宛城区",
      411303: "卧龙区",
      411321: "南召县",
      411322: "方城县",
      411323: "西峡县",
      411324: "镇平县",
      411325: "内乡县",
      411326: "淅川县",
      411327: "社旗县",
      411328: "唐河县",
      411329: "新野县",
      411330: "桐柏县",
      411381: "邓州市",
      411382: "其它区",
      411400: "商丘市",
      411402: "梁园区",
      411403: "睢阳区",
      411421: "民权县",
      411422: "睢县",
      411423: "宁陵县",
      411424: "柘城县",
      411425: "虞城县",
      411426: "夏邑县",
      411481: "永城市",
      411482: "其它区",
      411500: "信阳市",
      411502: "浉河区",
      411503: "平桥区",
      411521: "罗山县",
      411522: "光山县",
      411523: "新县",
      411524: "商城县",
      411525: "固始县",
      411526: "潢川县",
      411527: "淮滨县",
      411528: "息县",
      411529: "其它区",
      411600: "周口市",
      411602: "川汇区",
      411621: "扶沟县",
      411622: "西华县",
      411623: "商水县",
      411624: "沈丘县",
      411625: "郸城县",
      411626: "淮阳县",
      411627: "太康县",
      411628: "鹿邑县",
      411681: "项城市",
      411682: "其它区",
      411700: "驻马店市",
      411702: "驿城区",
      411721: "西平县",
      411722: "上蔡县",
      411723: "平舆县",
      411724: "正阳县",
      411725: "确山县",
      411726: "泌阳县",
      411727: "汝南县",
      411728: "遂平县",
      411729: "新蔡县",
      411730: "其它区",
      420000: "湖北省",
      420100: "武汉市",
      420102: "江岸区",
      420103: "江汉区",
      420104: "硚口区",
      420105: "汉阳区",
      420106: "武昌区",
      420107: "青山区",
      420111: "洪山区",
      420112: "东西湖区",
      420113: "汉南区",
      420114: "蔡甸区",
      420115: "江夏区",
      420116: "黄陂区",
      420117: "新洲区",
      420118: "其它区",
      420200: "黄石市",
      420202: "黄石港区",
      420203: "西塞山区",
      420204: "下陆区",
      420205: "铁山区",
      420222: "阳新县",
      420281: "大冶市",
      420282: "其它区",
      420300: "十堰市",
      420302: "茅箭区",
      420303: "张湾区",
      420321: "郧县",
      420322: "郧西县",
      420323: "竹山县",
      420324: "竹溪县",
      420325: "房县",
      420381: "丹江口市",
      420383: "其它区",
      420500: "宜昌市",
      420502: "西陵区",
      420503: "伍家岗区",
      420504: "点军区",
      420505: "猇亭区",
      420506: "夷陵区",
      420525: "远安县",
      420526: "兴山县",
      420527: "秭归县",
      420528: "长阳土家族自治县",
      420529: "五峰土家族自治县",
      420581: "宜都市",
      420582: "当阳市",
      420583: "枝江市",
      420584: "其它区",
      420600: "襄阳市",
      420602: "襄城区",
      420606: "樊城区",
      420607: "襄州区",
      420624: "南漳县",
      420625: "谷城县",
      420626: "保康县",
      420682: "老河口市",
      420683: "枣阳市",
      420684: "宜城市",
      420685: "其它区",
      420700: "鄂州市",
      420702: "梁子湖区",
      420703: "华容区",
      420704: "鄂城区",
      420705: "其它区",
      420800: "荆门市",
      420802: "东宝区",
      420804: "掇刀区",
      420821: "京山县",
      420822: "沙洋县",
      420881: "钟祥市",
      420882: "其它区",
      420900: "孝感市",
      420902: "孝南区",
      420921: "孝昌县",
      420922: "大悟县",
      420923: "云梦县",
      420981: "应城市",
      420982: "安陆市",
      420984: "汉川市",
      420985: "其它区",
      421000: "荆州市",
      421002: "沙市区",
      421003: "荆州区",
      421022: "公安县",
      421023: "监利县",
      421024: "江陵县",
      421081: "石首市",
      421083: "洪湖市",
      421087: "松滋市",
      421088: "其它区",
      421100: "黄冈市",
      421102: "黄州区",
      421121: "团风县",
      421122: "红安县",
      421123: "罗田县",
      421124: "英山县",
      421125: "浠水县",
      421126: "蕲春县",
      421127: "黄梅县",
      421181: "麻城市",
      421182: "武穴市",
      421183: "其它区",
      421200: "咸宁市",
      421202: "咸安区",
      421221: "嘉鱼县",
      421222: "通城县",
      421223: "崇阳县",
      421224: "通山县",
      421281: "赤壁市",
      421283: "其它区",
      421300: "随州市",
      421302: "曾都区",
      421321: "随县",
      421381: "广水市",
      421382: "其它区",
      422800: "恩施土家族苗族自治州",
      422801: "恩施市",
      422802: "利川市",
      422822: "建始县",
      422823: "巴东县",
      422825: "宣恩县",
      422826: "咸丰县",
      422827: "来凤县",
      422828: "鹤峰县",
      422829: "其它区",
      429004: "仙桃市",
      429005: "潜江市",
      429006: "天门市",
      429021: "神农架林区",
      430000: "湖南省",
      430100: "长沙市",
      430102: "芙蓉区",
      430103: "天心区",
      430104: "岳麓区",
      430105: "开福区",
      430111: "雨花区",
      430121: "长沙县",
      430122: "望城区",
      430124: "宁乡县",
      430181: "浏阳市",
      430182: "其它区",
      430200: "株洲市",
      430202: "荷塘区",
      430203: "芦淞区",
      430204: "石峰区",
      430211: "天元区",
      430221: "株洲县",
      430223: "攸县",
      430224: "茶陵县",
      430225: "炎陵县",
      430281: "醴陵市",
      430282: "其它区",
      430300: "湘潭市",
      430302: "雨湖区",
      430304: "岳塘区",
      430321: "湘潭县",
      430381: "湘乡市",
      430382: "韶山市",
      430383: "其它区",
      430400: "衡阳市",
      430405: "珠晖区",
      430406: "雁峰区",
      430407: "石鼓区",
      430408: "蒸湘区",
      430412: "南岳区",
      430421: "衡阳县",
      430422: "衡南县",
      430423: "衡山县",
      430424: "衡东县",
      430426: "祁东县",
      430481: "耒阳市",
      430482: "常宁市",
      430483: "其它区",
      430500: "邵阳市",
      430502: "双清区",
      430503: "大祥区",
      430511: "北塔区",
      430521: "邵东县",
      430522: "新邵县",
      430523: "邵阳县",
      430524: "隆回县",
      430525: "洞口县",
      430527: "绥宁县",
      430528: "新宁县",
      430529: "城步苗族自治县",
      430581: "武冈市",
      430582: "其它区",
      430600: "岳阳市",
      430602: "岳阳楼区",
      430603: "云溪区",
      430611: "君山区",
      430621: "岳阳县",
      430623: "华容县",
      430624: "湘阴县",
      430626: "平江县",
      430681: "汨罗市",
      430682: "临湘市",
      430683: "其它区",
      430700: "常德市",
      430702: "武陵区",
      430703: "鼎城区",
      430721: "安乡县",
      430722: "汉寿县",
      430723: "澧县",
      430724: "临澧县",
      430725: "桃源县",
      430726: "石门县",
      430781: "津市市",
      430782: "其它区",
      430800: "张家界市",
      430802: "永定区",
      430811: "武陵源区",
      430821: "慈利县",
      430822: "桑植县",
      430823: "其它区",
      430900: "益阳市",
      430902: "资阳区",
      430903: "赫山区",
      430921: "南县",
      430922: "桃江县",
      430923: "安化县",
      430981: "沅江市",
      430982: "其它区",
      431000: "郴州市",
      431002: "北湖区",
      431003: "苏仙区",
      431021: "桂阳县",
      431022: "宜章县",
      431023: "永兴县",
      431024: "嘉禾县",
      431025: "临武县",
      431026: "汝城县",
      431027: "桂东县",
      431028: "安仁县",
      431081: "资兴市",
      431082: "其它区",
      431100: "永州市",
      431102: "零陵区",
      431103: "冷水滩区",
      431121: "祁阳县",
      431122: "东安县",
      431123: "双牌县",
      431124: "道县",
      431125: "江永县",
      431126: "宁远县",
      431127: "蓝山县",
      431128: "新田县",
      431129: "江华瑶族自治县",
      431130: "其它区",
      431200: "怀化市",
      431202: "鹤城区",
      431221: "中方县",
      431222: "沅陵县",
      431223: "辰溪县",
      431224: "溆浦县",
      431225: "会同县",
      431226: "麻阳苗族自治县",
      431227: "新晃侗族自治县",
      431228: "芷江侗族自治县",
      431229: "靖州苗族侗族自治县",
      431230: "通道侗族自治县",
      431281: "洪江市",
      431282: "其它区",
      431300: "娄底市",
      431302: "娄星区",
      431321: "双峰县",
      431322: "新化县",
      431381: "冷水江市",
      431382: "涟源市",
      431383: "其它区",
      433100: "湘西土家族苗族自治州",
      433101: "吉首市",
      433122: "泸溪县",
      433123: "凤凰县",
      433124: "花垣县",
      433125: "保靖县",
      433126: "古丈县",
      433127: "永顺县",
      433130: "龙山县",
      433131: "其它区",
      440000: "广东省",
      440100: "广州市",
      440103: "荔湾区",
      440104: "越秀区",
      440105: "海珠区",
      440106: "天河区",
      440111: "白云区",
      440112: "黄埔区",
      440113: "番禺区",
      440114: "花都区",
      440115: "南沙区",
      440116: "萝岗区",
      440183: "增城市",
      440184: "从化市",
      440189: "其它区",
      440200: "韶关市",
      440203: "武江区",
      440204: "浈江区",
      440205: "曲江区",
      440222: "始兴县",
      440224: "仁化县",
      440229: "翁源县",
      440232: "乳源瑶族自治县",
      440233: "新丰县",
      440281: "乐昌市",
      440282: "南雄市",
      440283: "其它区",
      440300: "深圳市",
      440303: "罗湖区",
      440304: "福田区",
      440305: "南山区",
      440306: "宝安区",
      440307: "龙岗区",
      440308: "盐田区",
      440309: "其它区",
      440320: "光明新区",
      440321: "坪山新区",
      440322: "大鹏新区",
      440323: "龙华新区",
      440400: "珠海市",
      440402: "香洲区",
      440403: "斗门区",
      440404: "金湾区",
      440488: "其它区",
      440500: "汕头市",
      440507: "龙湖区",
      440511: "金平区",
      440512: "濠江区",
      440513: "潮阳区",
      440514: "潮南区",
      440515: "澄海区",
      440523: "南澳县",
      440524: "其它区",
      440600: "佛山市",
      440604: "禅城区",
      440605: "南海区",
      440606: "顺德区",
      440607: "三水区",
      440608: "高明区",
      440609: "其它区",
      440700: "江门市",
      440703: "蓬江区",
      440704: "江海区",
      440705: "新会区",
      440781: "台山市",
      440783: "开平市",
      440784: "鹤山市",
      440785: "恩平市",
      440786: "其它区",
      440800: "湛江市",
      440802: "赤坎区",
      440803: "霞山区",
      440804: "坡头区",
      440811: "麻章区",
      440823: "遂溪县",
      440825: "徐闻县",
      440881: "廉江市",
      440882: "雷州市",
      440883: "吴川市",
      440884: "其它区",
      440900: "茂名市",
      440902: "茂南区",
      440903: "茂港区",
      440923: "电白县",
      440981: "高州市",
      440982: "化州市",
      440983: "信宜市",
      440984: "其它区",
      441200: "肇庆市",
      441202: "端州区",
      441203: "鼎湖区",
      441223: "广宁县",
      441224: "怀集县",
      441225: "封开县",
      441226: "德庆县",
      441283: "高要市",
      441284: "四会市",
      441285: "其它区",
      441300: "惠州市",
      441302: "惠城区",
      441303: "惠阳区",
      441322: "博罗县",
      441323: "惠东县",
      441324: "龙门县",
      441325: "其它区",
      441400: "梅州市",
      441402: "梅江区",
      441421: "梅县",
      441422: "大埔县",
      441423: "丰顺县",
      441424: "五华县",
      441426: "平远县",
      441427: "蕉岭县",
      441481: "兴宁市",
      441482: "其它区",
      441500: "汕尾市",
      441502: "城区",
      441521: "海丰县",
      441523: "陆河县",
      441581: "陆丰市",
      441582: "其它区",
      441600: "河源市",
      441602: "源城区",
      441621: "紫金县",
      441622: "龙川县",
      441623: "连平县",
      441624: "和平县",
      441625: "东源县",
      441626: "其它区",
      441700: "阳江市",
      441702: "江城区",
      441721: "阳西县",
      441723: "阳东县",
      441781: "阳春市",
      441782: "其它区",
      441800: "清远市",
      441802: "清城区",
      441821: "佛冈县",
      441823: "阳山县",
      441825: "连山壮族瑶族自治县",
      441826: "连南瑶族自治县",
      441827: "清新区",
      441881: "英德市",
      441882: "连州市",
      441883: "其它区",
      441900: "东莞市",
      442000: "中山市",
      442101: "东沙群岛",
      445100: "潮州市",
      445102: "湘桥区",
      445121: "潮安区",
      445122: "饶平县",
      445186: "其它区",
      445200: "揭阳市",
      445202: "榕城区",
      445221: "揭东区",
      445222: "揭西县",
      445224: "惠来县",
      445281: "普宁市",
      445285: "其它区",
      445300: "云浮市",
      445302: "云城区",
      445321: "新兴县",
      445322: "郁南县",
      445323: "云安县",
      445381: "罗定市",
      445382: "其它区",
      450000: "广西壮族自治区",
      450100: "南宁市",
      450102: "兴宁区",
      450103: "青秀区",
      450105: "江南区",
      450107: "西乡塘区",
      450108: "良庆区",
      450109: "邕宁区",
      450122: "武鸣县",
      450123: "隆安县",
      450124: "马山县",
      450125: "上林县",
      450126: "宾阳县",
      450127: "横县",
      450128: "其它区",
      450200: "柳州市",
      450202: "城中区",
      450203: "鱼峰区",
      450204: "柳南区",
      450205: "柳北区",
      450221: "柳江县",
      450222: "柳城县",
      450223: "鹿寨县",
      450224: "融安县",
      450225: "融水苗族自治县",
      450226: "三江侗族自治县",
      450227: "其它区",
      450300: "桂林市",
      450302: "秀峰区",
      450303: "叠彩区",
      450304: "象山区",
      450305: "七星区",
      450311: "雁山区",
      450321: "阳朔县",
      450322: "临桂区",
      450323: "灵川县",
      450324: "全州县",
      450325: "兴安县",
      450326: "永福县",
      450327: "灌阳县",
      450328: "龙胜各族自治县",
      450329: "资源县",
      450330: "平乐县",
      450331: "荔浦县",
      450332: "恭城瑶族自治县",
      450333: "其它区",
      450400: "梧州市",
      450403: "万秀区",
      450405: "长洲区",
      450406: "龙圩区",
      450421: "苍梧县",
      450422: "藤县",
      450423: "蒙山县",
      450481: "岑溪市",
      450482: "其它区",
      450500: "北海市",
      450502: "海城区",
      450503: "银海区",
      450512: "铁山港区",
      450521: "合浦县",
      450522: "其它区",
      450600: "防城港市",
      450602: "港口区",
      450603: "防城区",
      450621: "上思县",
      450681: "东兴市",
      450682: "其它区",
      450700: "钦州市",
      450702: "钦南区",
      450703: "钦北区",
      450721: "灵山县",
      450722: "浦北县",
      450723: "其它区",
      450800: "贵港市",
      450802: "港北区",
      450803: "港南区",
      450804: "覃塘区",
      450821: "平南县",
      450881: "桂平市",
      450882: "其它区",
      450900: "玉林市",
      450902: "玉州区",
      450903: "福绵区",
      450921: "容县",
      450922: "陆川县",
      450923: "博白县",
      450924: "兴业县",
      450981: "北流市",
      450982: "其它区",
      451000: "百色市",
      451002: "右江区",
      451021: "田阳县",
      451022: "田东县",
      451023: "平果县",
      451024: "德保县",
      451025: "靖西县",
      451026: "那坡县",
      451027: "凌云县",
      451028: "乐业县",
      451029: "田林县",
      451030: "西林县",
      451031: "隆林各族自治县",
      451032: "其它区",
      451100: "贺州市",
      451102: "八步区",
      451119: "平桂管理区",
      451121: "昭平县",
      451122: "钟山县",
      451123: "富川瑶族自治县",
      451124: "其它区",
      451200: "河池市",
      451202: "金城江区",
      451221: "南丹县",
      451222: "天峨县",
      451223: "凤山县",
      451224: "东兰县",
      451225: "罗城仫佬族自治县",
      451226: "环江毛南族自治县",
      451227: "巴马瑶族自治县",
      451228: "都安瑶族自治县",
      451229: "大化瑶族自治县",
      451281: "宜州市",
      451282: "其它区",
      451300: "来宾市",
      451302: "兴宾区",
      451321: "忻城县",
      451322: "象州县",
      451323: "武宣县",
      451324: "金秀瑶族自治县",
      451381: "合山市",
      451382: "其它区",
      451400: "崇左市",
      451402: "江州区",
      451421: "扶绥县",
      451422: "宁明县",
      451423: "龙州县",
      451424: "大新县",
      451425: "天等县",
      451481: "凭祥市",
      451482: "其它区",
      460000: "海南省",
      460100: "海口市",
      460105: "秀英区",
      460106: "龙华区",
      460107: "琼山区",
      460108: "美兰区",
      460109: "其它区",
      460200: "三亚市",
      460300: "三沙市",
      460321: "西沙群岛",
      460322: "南沙群岛",
      460323: "中沙群岛的岛礁及其海域",
      469001: "五指山市",
      469002: "琼海市",
      469003: "儋州市",
      469005: "文昌市",
      469006: "万宁市",
      469007: "东方市",
      469025: "定安县",
      469026: "屯昌县",
      469027: "澄迈县",
      469028: "临高县",
      469030: "白沙黎族自治县",
      469031: "昌江黎族自治县",
      469033: "乐东黎族自治县",
      469034: "陵水黎族自治县",
      469035: "保亭黎族苗族自治县",
      469036: "琼中黎族苗族自治县",
      471005: "其它区",
      500000: "重庆",
      500100: "重庆市",
      500101: "万州区",
      500102: "涪陵区",
      500103: "渝中区",
      500104: "大渡口区",
      500105: "江北区",
      500106: "沙坪坝区",
      500107: "九龙坡区",
      500108: "南岸区",
      500109: "北碚区",
      500110: "万盛区",
      500111: "双桥区",
      500112: "渝北区",
      500113: "巴南区",
      500114: "黔江区",
      500115: "长寿区",
      500222: "綦江区",
      500223: "潼南县",
      500224: "铜梁县",
      500225: "大足区",
      500226: "荣昌县",
      500227: "璧山县",
      500228: "梁平县",
      500229: "城口县",
      500230: "丰都县",
      500231: "垫江县",
      500232: "武隆县",
      500233: "忠县",
      500234: "开县",
      500235: "云阳县",
      500236: "奉节县",
      500237: "巫山县",
      500238: "巫溪县",
      500240: "石柱土家族自治县",
      500241: "秀山土家族苗族自治县",
      500242: "酉阳土家族苗族自治县",
      500243: "彭水苗族土家族自治县",
      500381: "江津区",
      500382: "合川区",
      500383: "永川区",
      500384: "南川区",
      500385: "其它区",
      510000: "四川省",
      510100: "成都市",
      510104: "锦江区",
      510105: "青羊区",
      510106: "金牛区",
      510107: "武侯区",
      510108: "成华区",
      510112: "龙泉驿区",
      510113: "青白江区",
      510114: "新都区",
      510115: "温江区",
      510121: "金堂县",
      510122: "双流县",
      510124: "郫县",
      510129: "大邑县",
      510131: "蒲江县",
      510132: "新津县",
      510181: "都江堰市",
      510182: "彭州市",
      510183: "邛崃市",
      510184: "崇州市",
      510185: "其它区",
      510300: "自贡市",
      510302: "自流井区",
      510303: "贡井区",
      510304: "大安区",
      510311: "沿滩区",
      510321: "荣县",
      510322: "富顺县",
      510323: "其它区",
      510400: "攀枝花市",
      510402: "东区",
      510403: "西区",
      510411: "仁和区",
      510421: "米易县",
      510422: "盐边县",
      510423: "其它区",
      510500: "泸州市",
      510502: "江阳区",
      510503: "纳溪区",
      510504: "龙马潭区",
      510521: "泸县",
      510522: "合江县",
      510524: "叙永县",
      510525: "古蔺县",
      510526: "其它区",
      510600: "德阳市",
      510603: "旌阳区",
      510623: "中江县",
      510626: "罗江县",
      510681: "广汉市",
      510682: "什邡市",
      510683: "绵竹市",
      510684: "其它区",
      510700: "绵阳市",
      510703: "涪城区",
      510704: "游仙区",
      510722: "三台县",
      510723: "盐亭县",
      510724: "安县",
      510725: "梓潼县",
      510726: "北川羌族自治县",
      510727: "平武县",
      510781: "江油市",
      510782: "其它区",
      510800: "广元市",
      510802: "利州区",
      510811: "昭化区",
      510812: "朝天区",
      510821: "旺苍县",
      510822: "青川县",
      510823: "剑阁县",
      510824: "苍溪县",
      510825: "其它区",
      510900: "遂宁市",
      510903: "船山区",
      510904: "安居区",
      510921: "蓬溪县",
      510922: "射洪县",
      510923: "大英县",
      510924: "其它区",
      511000: "内江市",
      511002: "市中区",
      511011: "东兴区",
      511024: "威远县",
      511025: "资中县",
      511028: "隆昌县",
      511029: "其它区",
      511100: "乐山市",
      511102: "市中区",
      511111: "沙湾区",
      511112: "五通桥区",
      511113: "金口河区",
      511123: "犍为县",
      511124: "井研县",
      511126: "夹江县",
      511129: "沐川县",
      511132: "峨边彝族自治县",
      511133: "马边彝族自治县",
      511181: "峨眉山市",
      511182: "其它区",
      511300: "南充市",
      511302: "顺庆区",
      511303: "高坪区",
      511304: "嘉陵区",
      511321: "南部县",
      511322: "营山县",
      511323: "蓬安县",
      511324: "仪陇县",
      511325: "西充县",
      511381: "阆中市",
      511382: "其它区",
      511400: "眉山市",
      511402: "东坡区",
      511421: "仁寿县",
      511422: "彭山县",
      511423: "洪雅县",
      511424: "丹棱县",
      511425: "青神县",
      511426: "其它区",
      511500: "宜宾市",
      511502: "翠屏区",
      511521: "宜宾县",
      511522: "南溪区",
      511523: "江安县",
      511524: "长宁县",
      511525: "高县",
      511526: "珙县",
      511527: "筠连县",
      511528: "兴文县",
      511529: "屏山县",
      511530: "其它区",
      511600: "广安市",
      511602: "广安区",
      511603: "前锋区",
      511621: "岳池县",
      511622: "武胜县",
      511623: "邻水县",
      511681: "华蓥市",
      511683: "其它区",
      511700: "达州市",
      511702: "通川区",
      511721: "达川区",
      511722: "宣汉县",
      511723: "开江县",
      511724: "大竹县",
      511725: "渠县",
      511781: "万源市",
      511782: "其它区",
      511800: "雅安市",
      511802: "雨城区",
      511821: "名山区",
      511822: "荥经县",
      511823: "汉源县",
      511824: "石棉县",
      511825: "天全县",
      511826: "芦山县",
      511827: "宝兴县",
      511828: "其它区",
      511900: "巴中市",
      511902: "巴州区",
      511903: "恩阳区",
      511921: "通江县",
      511922: "南江县",
      511923: "平昌县",
      511924: "其它区",
      512000: "资阳市",
      512002: "雁江区",
      512021: "安岳县",
      512022: "乐至县",
      512081: "简阳市",
      512082: "其它区",
      513200: "阿坝藏族羌族自治州",
      513221: "汶川县",
      513222: "理县",
      513223: "茂县",
      513224: "松潘县",
      513225: "九寨沟县",
      513226: "金川县",
      513227: "小金县",
      513228: "黑水县",
      513229: "马尔康县",
      513230: "壤塘县",
      513231: "阿坝县",
      513232: "若尔盖县",
      513233: "红原县",
      513234: "其它区",
      513300: "甘孜藏族自治州",
      513321: "康定县",
      513322: "泸定县",
      513323: "丹巴县",
      513324: "九龙县",
      513325: "雅江县",
      513326: "道孚县",
      513327: "炉霍县",
      513328: "甘孜县",
      513329: "新龙县",
      513330: "德格县",
      513331: "白玉县",
      513332: "石渠县",
      513333: "色达县",
      513334: "理塘县",
      513335: "巴塘县",
      513336: "乡城县",
      513337: "稻城县",
      513338: "得荣县",
      513339: "其它区",
      513400: "凉山彝族自治州",
      513401: "西昌市",
      513422: "木里藏族自治县",
      513423: "盐源县",
      513424: "德昌县",
      513425: "会理县",
      513426: "会东县",
      513427: "宁南县",
      513428: "普格县",
      513429: "布拖县",
      513430: "金阳县",
      513431: "昭觉县",
      513432: "喜德县",
      513433: "冕宁县",
      513434: "越西县",
      513435: "甘洛县",
      513436: "美姑县",
      513437: "雷波县",
      513438: "其它区",
      520000: "贵州省",
      520100: "贵阳市",
      520102: "南明区",
      520103: "云岩区",
      520111: "花溪区",
      520112: "乌当区",
      520113: "白云区",
      520121: "开阳县",
      520122: "息烽县",
      520123: "修文县",
      520151: "观山湖区",
      520181: "清镇市",
      520182: "其它区",
      520200: "六盘水市",
      520201: "钟山区",
      520203: "六枝特区",
      520221: "水城县",
      520222: "盘县",
      520223: "其它区",
      520300: "遵义市",
      520302: "红花岗区",
      520303: "汇川区",
      520321: "遵义县",
      520322: "桐梓县",
      520323: "绥阳县",
      520324: "正安县",
      520325: "道真仡佬族苗族自治县",
      520326: "务川仡佬族苗族自治县",
      520327: "凤冈县",
      520328: "湄潭县",
      520329: "余庆县",
      520330: "习水县",
      520381: "赤水市",
      520382: "仁怀市",
      520383: "其它区",
      520400: "安顺市",
      520402: "西秀区",
      520421: "平坝县",
      520422: "普定县",
      520423: "镇宁布依族苗族自治县",
      520424: "关岭布依族苗族自治县",
      520425: "紫云苗族布依族自治县",
      520426: "其它区",
      522200: "铜仁市",
      522201: "碧江区",
      522222: "江口县",
      522223: "玉屏侗族自治县",
      522224: "石阡县",
      522225: "思南县",
      522226: "印江土家族苗族自治县",
      522227: "德江县",
      522228: "沿河土家族自治县",
      522229: "松桃苗族自治县",
      522230: "万山区",
      522231: "其它区",
      522300: "黔西南布依族苗族自治州",
      522301: "兴义市",
      522322: "兴仁县",
      522323: "普安县",
      522324: "晴隆县",
      522325: "贞丰县",
      522326: "望谟县",
      522327: "册亨县",
      522328: "安龙县",
      522329: "其它区",
      522400: "毕节市",
      522401: "七星关区",
      522422: "大方县",
      522423: "黔西县",
      522424: "金沙县",
      522425: "织金县",
      522426: "纳雍县",
      522427: "威宁彝族回族苗族自治县",
      522428: "赫章县",
      522429: "其它区",
      522600: "黔东南苗族侗族自治州",
      522601: "凯里市",
      522622: "黄平县",
      522623: "施秉县",
      522624: "三穗县",
      522625: "镇远县",
      522626: "岑巩县",
      522627: "天柱县",
      522628: "锦屏县",
      522629: "剑河县",
      522630: "台江县",
      522631: "黎平县",
      522632: "榕江县",
      522633: "从江县",
      522634: "雷山县",
      522635: "麻江县",
      522636: "丹寨县",
      522637: "其它区",
      522700: "黔南布依族苗族自治州",
      522701: "都匀市",
      522702: "福泉市",
      522722: "荔波县",
      522723: "贵定县",
      522725: "瓮安县",
      522726: "独山县",
      522727: "平塘县",
      522728: "罗甸县",
      522729: "长顺县",
      522730: "龙里县",
      522731: "惠水县",
      522732: "三都水族自治县",
      522733: "其它区",
      530000: "云南省",
      530100: "昆明市",
      530102: "五华区",
      530103: "盘龙区",
      530111: "官渡区",
      530112: "西山区",
      530113: "东川区",
      530121: "呈贡区",
      530122: "晋宁县",
      530124: "富民县",
      530125: "宜良县",
      530126: "石林彝族自治县",
      530127: "嵩明县",
      530128: "禄劝彝族苗族自治县",
      530129: "寻甸回族彝族自治县",
      530181: "安宁市",
      530182: "其它区",
      530300: "曲靖市",
      530302: "麒麟区",
      530321: "马龙县",
      530322: "陆良县",
      530323: "师宗县",
      530324: "罗平县",
      530325: "富源县",
      530326: "会泽县",
      530328: "沾益县",
      530381: "宣威市",
      530382: "其它区",
      530400: "玉溪市",
      530402: "红塔区",
      530421: "江川县",
      530422: "澄江县",
      530423: "通海县",
      530424: "华宁县",
      530425: "易门县",
      530426: "峨山彝族自治县",
      530427: "新平彝族傣族自治县",
      530428: "元江哈尼族彝族傣族自治县",
      530429: "其它区",
      530500: "保山市",
      530502: "隆阳区",
      530521: "施甸县",
      530522: "腾冲县",
      530523: "龙陵县",
      530524: "昌宁县",
      530525: "其它区",
      530600: "昭通市",
      530602: "昭阳区",
      530621: "鲁甸县",
      530622: "巧家县",
      530623: "盐津县",
      530624: "大关县",
      530625: "永善县",
      530626: "绥江县",
      530627: "镇雄县",
      530628: "彝良县",
      530629: "威信县",
      530630: "水富县",
      530631: "其它区",
      530700: "丽江市",
      530702: "古城区",
      530721: "玉龙纳西族自治县",
      530722: "永胜县",
      530723: "华坪县",
      530724: "宁蒗彝族自治县",
      530725: "其它区",
      530800: "普洱市",
      530802: "思茅区",
      530821: "宁洱哈尼族彝族自治县",
      530822: "墨江哈尼族自治县",
      530823: "景东彝族自治县",
      530824: "景谷傣族彝族自治县",
      530825: "镇沅彝族哈尼族拉祜族自治县",
      530826: "江城哈尼族彝族自治县",
      530827: "孟连傣族拉祜族佤族自治县",
      530828: "澜沧拉祜族自治县",
      530829: "西盟佤族自治县",
      530830: "其它区",
      530900: "临沧市",
      530902: "临翔区",
      530921: "凤庆县",
      530922: "云县",
      530923: "永德县",
      530924: "镇康县",
      530925: "双江拉祜族佤族布朗族傣族自治县",
      530926: "耿马傣族佤族自治县",
      530927: "沧源佤族自治县",
      530928: "其它区",
      532300: "楚雄彝族自治州",
      532301: "楚雄市",
      532322: "双柏县",
      532323: "牟定县",
      532324: "南华县",
      532325: "姚安县",
      532326: "大姚县",
      532327: "永仁县",
      532328: "元谋县",
      532329: "武定县",
      532331: "禄丰县",
      532332: "其它区",
      532500: "红河哈尼族彝族自治州",
      532501: "个旧市",
      532502: "开远市",
      532522: "蒙自市",
      532523: "屏边苗族自治县",
      532524: "建水县",
      532525: "石屏县",
      532526: "弥勒市",
      532527: "泸西县",
      532528: "元阳县",
      532529: "红河县",
      532530: "金平苗族瑶族傣族自治县",
      532531: "绿春县",
      532532: "河口瑶族自治县",
      532533: "其它区",
      532600: "文山壮族苗族自治州",
      532621: "文山市",
      532622: "砚山县",
      532623: "西畴县",
      532624: "麻栗坡县",
      532625: "马关县",
      532626: "丘北县",
      532627: "广南县",
      532628: "富宁县",
      532629: "其它区",
      532800: "西双版纳傣族自治州",
      532801: "景洪市",
      532822: "勐海县",
      532823: "勐腊县",
      532824: "其它区",
      532900: "大理白族自治州",
      532901: "大理市",
      532922: "漾濞彝族自治县",
      532923: "祥云县",
      532924: "宾川县",
      532925: "弥渡县",
      532926: "南涧彝族自治县",
      532927: "巍山彝族回族自治县",
      532928: "永平县",
      532929: "云龙县",
      532930: "洱源县",
      532931: "剑川县",
      532932: "鹤庆县",
      532933: "其它区",
      533100: "德宏傣族景颇族自治州",
      533102: "瑞丽市",
      533103: "芒市",
      533122: "梁河县",
      533123: "盈江县",
      533124: "陇川县",
      533125: "其它区",
      533300: "怒江傈僳族自治州",
      533321: "泸水县",
      533323: "福贡县",
      533324: "贡山独龙族怒族自治县",
      533325: "兰坪白族普米族自治县",
      533326: "其它区",
      533400: "迪庆藏族自治州",
      533421: "香格里拉县",
      533422: "德钦县",
      533423: "维西傈僳族自治县",
      533424: "其它区",
      540000: "西藏自治区",
      540100: "拉萨市",
      540102: "城关区",
      540121: "林周县",
      540122: "当雄县",
      540123: "尼木县",
      540124: "曲水县",
      540125: "堆龙德庆县",
      540126: "达孜县",
      540127: "墨竹工卡县",
      540128: "其它区",
      542100: "昌都地区",
      542121: "昌都县",
      542122: "江达县",
      542123: "贡觉县",
      542124: "类乌齐县",
      542125: "丁青县",
      542126: "察雅县",
      542127: "八宿县",
      542128: "左贡县",
      542129: "芒康县",
      542132: "洛隆县",
      542133: "边坝县",
      542134: "其它区",
      542200: "山南地区",
      542221: "乃东县",
      542222: "扎囊县",
      542223: "贡嘎县",
      542224: "桑日县",
      542225: "琼结县",
      542226: "曲松县",
      542227: "措美县",
      542228: "洛扎县",
      542229: "加查县",
      542231: "隆子县",
      542232: "错那县",
      542233: "浪卡子县",
      542234: "其它区",
      542300: "日喀则地区",
      542301: "日喀则市",
      542322: "南木林县",
      542323: "江孜县",
      542324: "定日县",
      542325: "萨迦县",
      542326: "拉孜县",
      542327: "昂仁县",
      542328: "谢通门县",
      542329: "白朗县",
      542330: "仁布县",
      542331: "康马县",
      542332: "定结县",
      542333: "仲巴县",
      542334: "亚东县",
      542335: "吉隆县",
      542336: "聂拉木县",
      542337: "萨嘎县",
      542338: "岗巴县",
      542339: "其它区",
      542400: "那曲地区",
      542421: "那曲县",
      542422: "嘉黎县",
      542423: "比如县",
      542424: "聂荣县",
      542425: "安多县",
      542426: "申扎县",
      542427: "索县",
      542428: "班戈县",
      542429: "巴青县",
      542430: "尼玛县",
      542431: "其它区",
      542432: "双湖县",
      542500: "阿里地区",
      542521: "普兰县",
      542522: "札达县",
      542523: "噶尔县",
      542524: "日土县",
      542525: "革吉县",
      542526: "改则县",
      542527: "措勤县",
      542528: "其它区",
      542600: "林芝地区",
      542621: "林芝县",
      542622: "工布江达县",
      542623: "米林县",
      542624: "墨脱县",
      542625: "波密县",
      542626: "察隅县",
      542627: "朗县",
      542628: "其它区",
      610000: "陕西省",
      610100: "西安市",
      610102: "新城区",
      610103: "碑林区",
      610104: "莲湖区",
      610111: "灞桥区",
      610112: "未央区",
      610113: "雁塔区",
      610114: "阎良区",
      610115: "临潼区",
      610116: "长安区",
      610122: "蓝田县",
      610124: "周至县",
      610125: "户县",
      610126: "高陵县",
      610127: "其它区",
      610200: "铜川市",
      610202: "王益区",
      610203: "印台区",
      610204: "耀州区",
      610222: "宜君县",
      610223: "其它区",
      610300: "宝鸡市",
      610302: "渭滨区",
      610303: "金台区",
      610304: "陈仓区",
      610322: "凤翔县",
      610323: "岐山县",
      610324: "扶风县",
      610326: "眉县",
      610327: "陇县",
      610328: "千阳县",
      610329: "麟游县",
      610330: "凤县",
      610331: "太白县",
      610332: "其它区",
      610400: "咸阳市",
      610402: "秦都区",
      610403: "杨陵区",
      610404: "渭城区",
      610422: "三原县",
      610423: "泾阳县",
      610424: "乾县",
      610425: "礼泉县",
      610426: "永寿县",
      610427: "彬县",
      610428: "长武县",
      610429: "旬邑县",
      610430: "淳化县",
      610431: "武功县",
      610481: "兴平市",
      610482: "其它区",
      610500: "渭南市",
      610502: "临渭区",
      610521: "华县",
      610522: "潼关县",
      610523: "大荔县",
      610524: "合阳县",
      610525: "澄城县",
      610526: "蒲城县",
      610527: "白水县",
      610528: "富平县",
      610581: "韩城市",
      610582: "华阴市",
      610583: "其它区",
      610600: "延安市",
      610602: "宝塔区",
      610621: "延长县",
      610622: "延川县",
      610623: "子长县",
      610624: "安塞县",
      610625: "志丹县",
      610626: "吴起县",
      610627: "甘泉县",
      610628: "富县",
      610629: "洛川县",
      610630: "宜川县",
      610631: "黄龙县",
      610632: "黄陵县",
      610633: "其它区",
      610700: "汉中市",
      610702: "汉台区",
      610721: "南郑县",
      610722: "城固县",
      610723: "洋县",
      610724: "西乡县",
      610725: "勉县",
      610726: "宁强县",
      610727: "略阳县",
      610728: "镇巴县",
      610729: "留坝县",
      610730: "佛坪县",
      610731: "其它区",
      610800: "榆林市",
      610802: "榆阳区",
      610821: "神木县",
      610822: "府谷县",
      610823: "横山县",
      610824: "靖边县",
      610825: "定边县",
      610826: "绥德县",
      610827: "米脂县",
      610828: "佳县",
      610829: "吴堡县",
      610830: "清涧县",
      610831: "子洲县",
      610832: "其它区",
      610900: "安康市",
      610902: "汉滨区",
      610921: "汉阴县",
      610922: "石泉县",
      610923: "宁陕县",
      610924: "紫阳县",
      610925: "岚皋县",
      610926: "平利县",
      610927: "镇坪县",
      610928: "旬阳县",
      610929: "白河县",
      610930: "其它区",
      611000: "商洛市",
      611002: "商州区",
      611021: "洛南县",
      611022: "丹凤县",
      611023: "商南县",
      611024: "山阳县",
      611025: "镇安县",
      611026: "柞水县",
      611027: "其它区",
      620000: "甘肃省",
      620100: "兰州市",
      620102: "城关区",
      620103: "七里河区",
      620104: "西固区",
      620105: "安宁区",
      620111: "红古区",
      620121: "永登县",
      620122: "皋兰县",
      620123: "榆中县",
      620124: "其它区",
      620200: "嘉峪关市",
      620300: "金昌市",
      620302: "金川区",
      620321: "永昌县",
      620322: "其它区",
      620400: "白银市",
      620402: "白银区",
      620403: "平川区",
      620421: "靖远县",
      620422: "会宁县",
      620423: "景泰县",
      620424: "其它区",
      620500: "天水市",
      620502: "秦州区",
      620503: "麦积区",
      620521: "清水县",
      620522: "秦安县",
      620523: "甘谷县",
      620524: "武山县",
      620525: "张家川回族自治县",
      620526: "其它区",
      620600: "武威市",
      620602: "凉州区",
      620621: "民勤县",
      620622: "古浪县",
      620623: "天祝藏族自治县",
      620624: "其它区",
      620700: "张掖市",
      620702: "甘州区",
      620721: "肃南裕固族自治县",
      620722: "民乐县",
      620723: "临泽县",
      620724: "高台县",
      620725: "山丹县",
      620726: "其它区",
      620800: "平凉市",
      620802: "崆峒区",
      620821: "泾川县",
      620822: "灵台县",
      620823: "崇信县",
      620824: "华亭县",
      620825: "庄浪县",
      620826: "静宁县",
      620827: "其它区",
      620900: "酒泉市",
      620902: "肃州区",
      620921: "金塔县",
      620922: "瓜州县",
      620923: "肃北蒙古族自治县",
      620924: "阿克塞哈萨克族自治县",
      620981: "玉门市",
      620982: "敦煌市",
      620983: "其它区",
      621000: "庆阳市",
      621002: "西峰区",
      621021: "庆城县",
      621022: "环县",
      621023: "华池县",
      621024: "合水县",
      621025: "正宁县",
      621026: "宁县",
      621027: "镇原县",
      621028: "其它区",
      621100: "定西市",
      621102: "安定区",
      621121: "通渭县",
      621122: "陇西县",
      621123: "渭源县",
      621124: "临洮县",
      621125: "漳县",
      621126: "岷县",
      621127: "其它区",
      621200: "陇南市",
      621202: "武都区",
      621221: "成县",
      621222: "文县",
      621223: "宕昌县",
      621224: "康县",
      621225: "西和县",
      621226: "礼县",
      621227: "徽县",
      621228: "两当县",
      621229: "其它区",
      622900: "临夏回族自治州",
      622901: "临夏市",
      622921: "临夏县",
      622922: "康乐县",
      622923: "永靖县",
      622924: "广河县",
      622925: "和政县",
      622926: "东乡族自治县",
      622927: "积石山保安族东乡族撒拉族自治县",
      622928: "其它区",
      623000: "甘南藏族自治州",
      623001: "合作市",
      623021: "临潭县",
      623022: "卓尼县",
      623023: "舟曲县",
      623024: "迭部县",
      623025: "玛曲县",
      623026: "碌曲县",
      623027: "夏河县",
      623028: "其它区",
      630000: "青海省",
      630100: "西宁市",
      630102: "城东区",
      630103: "城中区",
      630104: "城西区",
      630105: "城北区",
      630121: "大通回族土族自治县",
      630122: "湟中县",
      630123: "湟源县",
      630124: "其它区",
      632100: "海东市",
      632121: "平安县",
      632122: "民和回族土族自治县",
      632123: "乐都区",
      632126: "互助土族自治县",
      632127: "化隆回族自治县",
      632128: "循化撒拉族自治县",
      632129: "其它区",
      632200: "海北藏族自治州",
      632221: "门源回族自治县",
      632222: "祁连县",
      632223: "海晏县",
      632224: "刚察县",
      632225: "其它区",
      632300: "黄南藏族自治州",
      632321: "同仁县",
      632322: "尖扎县",
      632323: "泽库县",
      632324: "河南蒙古族自治县",
      632325: "其它区",
      632500: "海南藏族自治州",
      632521: "共和县",
      632522: "同德县",
      632523: "贵德县",
      632524: "兴海县",
      632525: "贵南县",
      632526: "其它区",
      632600: "果洛藏族自治州",
      632621: "玛沁县",
      632622: "班玛县",
      632623: "甘德县",
      632624: "达日县",
      632625: "久治县",
      632626: "玛多县",
      632627: "其它区",
      632700: "玉树藏族自治州",
      632721: "玉树市",
      632722: "杂多县",
      632723: "称多县",
      632724: "治多县",
      632725: "囊谦县",
      632726: "曲麻莱县",
      632727: "其它区",
      632800: "海西蒙古族藏族自治州",
      632801: "格尔木市",
      632802: "德令哈市",
      632821: "乌兰县",
      632822: "都兰县",
      632823: "天峻县",
      632824: "其它区",
      640000: "宁夏回族自治区",
      640100: "银川市",
      640104: "兴庆区",
      640105: "西夏区",
      640106: "金凤区",
      640121: "永宁县",
      640122: "贺兰县",
      640181: "灵武市",
      640182: "其它区",
      640200: "石嘴山市",
      640202: "大武口区",
      640205: "惠农区",
      640221: "平罗县",
      640222: "其它区",
      640300: "吴忠市",
      640302: "利通区",
      640303: "红寺堡区",
      640323: "盐池县",
      640324: "同心县",
      640381: "青铜峡市",
      640382: "其它区",
      640400: "固原市",
      640402: "原州区",
      640422: "西吉县",
      640423: "隆德县",
      640424: "泾源县",
      640425: "彭阳县",
      640426: "其它区",
      640500: "中卫市",
      640502: "沙坡头区",
      640521: "中宁县",
      640522: "海原县",
      640523: "其它区",
      650000: "新疆维吾尔自治区",
      650100: "乌鲁木齐市",
      650102: "天山区",
      650103: "沙依巴克区",
      650104: "新市区",
      650105: "水磨沟区",
      650106: "头屯河区",
      650107: "达坂城区",
      650109: "米东区",
      650121: "乌鲁木齐县",
      650122: "其它区",
      650200: "克拉玛依市",
      650202: "独山子区",
      650203: "克拉玛依区",
      650204: "白碱滩区",
      650205: "乌尔禾区",
      650206: "其它区",
      652100: "吐鲁番地区",
      652101: "吐鲁番市",
      652122: "鄯善县",
      652123: "托克逊县",
      652124: "其它区",
      652200: "哈密地区",
      652201: "哈密市",
      652222: "巴里坤哈萨克自治县",
      652223: "伊吾县",
      652224: "其它区",
      652300: "昌吉回族自治州",
      652301: "昌吉市",
      652302: "阜康市",
      652323: "呼图壁县",
      652324: "玛纳斯县",
      652325: "奇台县",
      652327: "吉木萨尔县",
      652328: "木垒哈萨克自治县",
      652329: "其它区",
      652700: "博尔塔拉蒙古自治州",
      652701: "博乐市",
      652702: "阿拉山口市",
      652722: "精河县",
      652723: "温泉县",
      652724: "其它区",
      652800: "巴音郭楞蒙古自治州",
      652801: "库尔勒市",
      652822: "轮台县",
      652823: "尉犁县",
      652824: "若羌县",
      652825: "且末县",
      652826: "焉耆回族自治县",
      652827: "和静县",
      652828: "和硕县",
      652829: "博湖县",
      652830: "其它区",
      652900: "阿克苏地区",
      652901: "阿克苏市",
      652922: "温宿县",
      652923: "库车县",
      652924: "沙雅县",
      652925: "新和县",
      652926: "拜城县",
      652927: "乌什县",
      652928: "阿瓦提县",
      652929: "柯坪县",
      652930: "其它区",
      653000: "克孜勒苏柯尔克孜自治州",
      653001: "阿图什市",
      653022: "阿克陶县",
      653023: "阿合奇县",
      653024: "乌恰县",
      653025: "其它区",
      653100: "喀什地区",
      653101: "喀什市",
      653121: "疏附县",
      653122: "疏勒县",
      653123: "英吉沙县",
      653124: "泽普县",
      653125: "莎车县",
      653126: "叶城县",
      653127: "麦盖提县",
      653128: "岳普湖县",
      653129: "伽师县",
      653130: "巴楚县",
      653131: "塔什库尔干塔吉克自治县",
      653132: "其它区",
      653200: "和田地区",
      653201: "和田市",
      653221: "和田县",
      653222: "墨玉县",
      653223: "皮山县",
      653224: "洛浦县",
      653225: "策勒县",
      653226: "于田县",
      653227: "民丰县",
      653228: "其它区",
      654000: "伊犁哈萨克自治州",
      654002: "伊宁市",
      654003: "奎屯市",
      654021: "伊宁县",
      654022: "察布查尔锡伯自治县",
      654023: "霍城县",
      654024: "巩留县",
      654025: "新源县",
      654026: "昭苏县",
      654027: "特克斯县",
      654028: "尼勒克县",
      654029: "其它区",
      654200: "塔城地区",
      654201: "塔城市",
      654202: "乌苏市",
      654221: "额敏县",
      654223: "沙湾县",
      654224: "托里县",
      654225: "裕民县",
      654226: "和布克赛尔蒙古自治县",
      654227: "其它区",
      654300: "阿勒泰地区",
      654301: "阿勒泰市",
      654321: "布尔津县",
      654322: "富蕴县",
      654323: "福海县",
      654324: "哈巴河县",
      654325: "青河县",
      654326: "吉木乃县",
      654327: "其它区",
      659001: "石河子市",
      659002: "阿拉尔市",
      659003: "图木舒克市",
      659004: "五家渠市",
      710000: "台湾",
      710100: "台北市",
      710101: "中正区",
      710102: "大同区",
      710103: "中山区",
      710104: "松山区",
      710105: "大安区",
      710106: "万华区",
      710107: "信义区",
      710108: "士林区",
      710109: "北投区",
      710110: "内湖区",
      710111: "南港区",
      710112: "文山区",
      710113: "其它区",
      710200: "高雄市",
      710201: "新兴区",
      710202: "前金区",
      710203: "芩雅区",
      710204: "盐埕区",
      710205: "鼓山区",
      710206: "旗津区",
      710207: "前镇区",
      710208: "三民区",
      710209: "左营区",
      710210: "楠梓区",
      710211: "小港区",
      710212: "其它区",
      710241: "苓雅区",
      710242: "仁武区",
      710243: "大社区",
      710244: "冈山区",
      710245: "路竹区",
      710246: "阿莲区",
      710247: "田寮区",
      710248: "燕巢区",
      710249: "桥头区",
      710250: "梓官区",
      710251: "弥陀区",
      710252: "永安区",
      710253: "湖内区",
      710254: "凤山区",
      710255: "大寮区",
      710256: "林园区",
      710257: "鸟松区",
      710258: "大树区",
      710259: "旗山区",
      710260: "美浓区",
      710261: "六龟区",
      710262: "内门区",
      710263: "杉林区",
      710264: "甲仙区",
      710265: "桃源区",
      710266: "那玛夏区",
      710267: "茂林区",
      710268: "茄萣区",
      710300: "台南市",
      710301: "中西区",
      710302: "东区",
      710303: "南区",
      710304: "北区",
      710305: "安平区",
      710306: "安南区",
      710307: "其它区",
      710339: "永康区",
      710340: "归仁区",
      710341: "新化区",
      710342: "左镇区",
      710343: "玉井区",
      710344: "楠西区",
      710345: "南化区",
      710346: "仁德区",
      710347: "关庙区",
      710348: "龙崎区",
      710349: "官田区",
      710350: "麻豆区",
      710351: "佳里区",
      710352: "西港区",
      710353: "七股区",
      710354: "将军区",
      710355: "学甲区",
      710356: "北门区",
      710357: "新营区",
      710358: "后壁区",
      710359: "白河区",
      710360: "东山区",
      710361: "六甲区",
      710362: "下营区",
      710363: "柳营区",
      710364: "盐水区",
      710365: "善化区",
      710366: "大内区",
      710367: "山上区",
      710368: "新市区",
      710369: "安定区",
      710400: "台中市",
      710401: "中区",
      710402: "东区",
      710403: "南区",
      710404: "西区",
      710405: "北区",
      710406: "北屯区",
      710407: "西屯区",
      710408: "南屯区",
      710409: "其它区",
      710431: "太平区",
      710432: "大里区",
      710433: "雾峰区",
      710434: "乌日区",
      710435: "丰原区",
      710436: "后里区",
      710437: "石冈区",
      710438: "东势区",
      710439: "和平区",
      710440: "新社区",
      710441: "潭子区",
      710442: "大雅区",
      710443: "神冈区",
      710444: "大肚区",
      710445: "沙鹿区",
      710446: "龙井区",
      710447: "梧栖区",
      710448: "清水区",
      710449: "大甲区",
      710450: "外埔区",
      710451: "大安区",
      710500: "金门县",
      710507: "金沙镇",
      710508: "金湖镇",
      710509: "金宁乡",
      710510: "金城镇",
      710511: "烈屿乡",
      710512: "乌坵乡",
      710600: "南投县",
      710614: "南投市",
      710615: "中寮乡",
      710616: "草屯镇",
      710617: "国姓乡",
      710618: "埔里镇",
      710619: "仁爱乡",
      710620: "名间乡",
      710621: "集集镇",
      710622: "水里乡",
      710623: "鱼池乡",
      710624: "信义乡",
      710625: "竹山镇",
      710626: "鹿谷乡",
      710700: "基隆市",
      710701: "仁爱区",
      710702: "信义区",
      710703: "中正区",
      710704: "中山区",
      710705: "安乐区",
      710706: "暖暖区",
      710707: "七堵区",
      710708: "其它区",
      710800: "新竹市",
      710801: "东区",
      710802: "北区",
      710803: "香山区",
      710804: "其它区",
      710900: "嘉义市",
      710901: "东区",
      710902: "西区",
      710903: "其它区",
      711100: "新北市",
      711130: "万里区",
      711131: "金山区",
      711132: "板桥区",
      711133: "汐止区",
      711134: "深坑区",
      711135: "石碇区",
      711136: "瑞芳区",
      711137: "平溪区",
      711138: "双溪区",
      711139: "贡寮区",
      711140: "新店区",
      711141: "坪林区",
      711142: "乌来区",
      711143: "永和区",
      711144: "中和区",
      711145: "土城区",
      711146: "三峡区",
      711147: "树林区",
      711148: "莺歌区",
      711149: "三重区",
      711150: "新庄区",
      711151: "泰山区",
      711152: "林口区",
      711153: "芦洲区",
      711154: "五股区",
      711155: "八里区",
      711156: "淡水区",
      711157: "三芝区",
      711158: "石门区",
      711200: "宜兰县",
      711214: "宜兰市",
      711215: "头城镇",
      711216: "礁溪乡",
      711217: "壮围乡",
      711218: "员山乡",
      711219: "罗东镇",
      711220: "三星乡",
      711221: "大同乡",
      711222: "五结乡",
      711223: "冬山乡",
      711224: "苏澳镇",
      711225: "南澳乡",
      711226: "钓鱼台",
      711300: "新竹县",
      711314: "竹北市",
      711315: "湖口乡",
      711316: "新丰乡",
      711317: "新埔镇",
      711318: "关西镇",
      711319: "芎林乡",
      711320: "宝山乡",
      711321: "竹东镇",
      711322: "五峰乡",
      711323: "横山乡",
      711324: "尖石乡",
      711325: "北埔乡",
      711326: "峨眉乡",
      711400: "桃园县",
      711414: "中坜市",
      711415: "平镇市",
      711416: "龙潭乡",
      711417: "杨梅市",
      711418: "新屋乡",
      711419: "观音乡",
      711420: "桃园市",
      711421: "龟山乡",
      711422: "八德市",
      711423: "大溪镇",
      711424: "复兴乡",
      711425: "大园乡",
      711426: "芦竹乡",
      711500: "苗栗县",
      711519: "竹南镇",
      711520: "头份镇",
      711521: "三湾乡",
      711522: "南庄乡",
      711523: "狮潭乡",
      711524: "后龙镇",
      711525: "通霄镇",
      711526: "苑里镇",
      711527: "苗栗市",
      711528: "造桥乡",
      711529: "头屋乡",
      711530: "公馆乡",
      711531: "大湖乡",
      711532: "泰安乡",
      711533: "铜锣乡",
      711534: "三义乡",
      711535: "西湖乡",
      711536: "卓兰镇",
      711700: "彰化县",
      711727: "彰化市",
      711728: "芬园乡",
      711729: "花坛乡",
      711730: "秀水乡",
      711731: "鹿港镇",
      711732: "福兴乡",
      711733: "线西乡",
      711734: "和美镇",
      711735: "伸港乡",
      711736: "员林镇",
      711737: "社头乡",
      711738: "永靖乡",
      711739: "埔心乡",
      711740: "溪湖镇",
      711741: "大村乡",
      711742: "埔盐乡",
      711743: "田中镇",
      711744: "北斗镇",
      711745: "田尾乡",
      711746: "埤头乡",
      711747: "溪州乡",
      711748: "竹塘乡",
      711749: "二林镇",
      711750: "大城乡",
      711751: "芳苑乡",
      711752: "二水乡",
      711900: "嘉义县",
      711919: "番路乡",
      711920: "梅山乡",
      711921: "竹崎乡",
      711922: "阿里山乡",
      711923: "中埔乡",
      711924: "大埔乡",
      711925: "水上乡",
      711926: "鹿草乡",
      711927: "太保市",
      711928: "朴子市",
      711929: "东石乡",
      711930: "六脚乡",
      711931: "新港乡",
      711932: "民雄乡",
      711933: "大林镇",
      711934: "溪口乡",
      711935: "义竹乡",
      711936: "布袋镇",
      712100: "云林县",
      712121: "斗南镇",
      712122: "大埤乡",
      712123: "虎尾镇",
      712124: "土库镇",
      712125: "褒忠乡",
      712126: "东势乡",
      712127: "台西乡",
      712128: "仑背乡",
      712129: "麦寮乡",
      712130: "斗六市",
      712131: "林内乡",
      712132: "古坑乡",
      712133: "莿桐乡",
      712134: "西螺镇",
      712135: "二仑乡",
      712136: "北港镇",
      712137: "水林乡",
      712138: "口湖乡",
      712139: "四湖乡",
      712140: "元长乡",
      712400: "屏东县",
      712434: "屏东市",
      712435: "三地门乡",
      712436: "雾台乡",
      712437: "玛家乡",
      712438: "九如乡",
      712439: "里港乡",
      712440: "高树乡",
      712441: "盐埔乡",
      712442: "长治乡",
      712443: "麟洛乡",
      712444: "竹田乡",
      712445: "内埔乡",
      712446: "万丹乡",
      712447: "潮州镇",
      712448: "泰武乡",
      712449: "来义乡",
      712450: "万峦乡",
      712451: "崁顶乡",
      712452: "新埤乡",
      712453: "南州乡",
      712454: "林边乡",
      712455: "东港镇",
      712456: "琉球乡",
      712457: "佳冬乡",
      712458: "新园乡",
      712459: "枋寮乡",
      712460: "枋山乡",
      712461: "春日乡",
      712462: "狮子乡",
      712463: "车城乡",
      712464: "牡丹乡",
      712465: "恒春镇",
      712466: "满州乡",
      712500: "台东县",
      712517: "台东市",
      712518: "绿岛乡",
      712519: "兰屿乡",
      712520: "延平乡",
      712521: "卑南乡",
      712522: "鹿野乡",
      712523: "关山镇",
      712524: "海端乡",
      712525: "池上乡",
      712526: "东河乡",
      712527: "成功镇",
      712528: "长滨乡",
      712529: "金峰乡",
      712530: "大武乡",
      712531: "达仁乡",
      712532: "太麻里乡",
      712600: "花莲县",
      712615: "花莲市",
      712616: "新城乡",
      712617: "太鲁阁",
      712618: "秀林乡",
      712619: "吉安乡",
      712620: "寿丰乡",
      712621: "凤林镇",
      712622: "光复乡",
      712623: "丰滨乡",
      712624: "瑞穗乡",
      712625: "万荣乡",
      712626: "玉里镇",
      712627: "卓溪乡",
      712628: "富里乡",
      712700: "澎湖县",
      712707: "马公市",
      712708: "西屿乡",
      712709: "望安乡",
      712710: "七美乡",
      712711: "白沙乡",
      712712: "湖西乡",
      712800: "连江县",
      712805: "南竿乡",
      712806: "北竿乡",
      712807: "莒光乡",
      712808: "东引乡",
      810000: "香港特别行政区",
      810100: "香港岛",
      810101: "中西区",
      810102: "湾仔",
      810103: "东区",
      810104: "南区",
      810200: "九龙",
      810201: "九龙城区",
      810202: "油尖旺区",
      810203: "深水埗区",
      810204: "黄大仙区",
      810205: "观塘区",
      810300: "新界",
      810301: "北区",
      810302: "大埔区",
      810303: "沙田区",
      810304: "西贡区",
      810305: "元朗区",
      810306: "屯门区",
      810307: "荃湾区",
      810308: "葵青区",
      810309: "离岛区",
      820000: "澳门特别行政区",
      820100: "澳门半岛",
      820200: "离岛",
      990000: "海外",
      990100: "海外"
    },
        a = function () {
      var t = [];

      for (var e in r) {
        var a = "0000" === e.slice(2, 6) ? void 0 : "00" == e.slice(4, 6) ? e.slice(0, 2) + "0000" : e.slice(0, 4) + "00";
        t.push({
          id: e,
          pid: a,
          name: r[e]
        });
      }

      return n(t);
    }();

    t.exports = a;
  }, function (t, e, n) {
    var r = n(18);
    t.exports = {
      d4: function d4() {
        return this.natural(1, 4);
      },
      d6: function d6() {
        return this.natural(1, 6);
      },
      d8: function d8() {
        return this.natural(1, 8);
      },
      d12: function d12() {
        return this.natural(1, 12);
      },
      d20: function d20() {
        return this.natural(1, 20);
      },
      d100: function d100() {
        return this.natural(1, 100);
      },
      guid: function guid() {
        var t = "abcdefABCDEF1234567890",
            e = this.string(t, 8) + "-" + this.string(t, 4) + "-" + this.string(t, 4) + "-" + this.string(t, 4) + "-" + this.string(t, 12);
        return e;
      },
      uuid: function uuid() {
        return this.guid();
      },
      id: function id() {
        var t,
            e = 0,
            n = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"],
            a = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
        t = this.pick(r).id + this.date("yyyyMMdd") + this.string("number", 3);

        for (var o = 0; o < t.length; o++) {
          e += t[o] * n[o];
        }

        return t += a[e % 11];
      },
      increment: function () {
        var t = 0;
        return function (e) {
          return t += +e || 1;
        };
      }(),
      inc: function inc(t) {
        return this.increment(t);
      }
    };
  }, function (t, e, n) {
    var r = n(21),
        a = n(22);
    t.exports = {
      Parser: r,
      Handler: a
    };
  }, function (t, e) {
    function n(t) {
      this.type = t, this.offset = n.offset(), this.text = n.text();
    }

    function r(t, e) {
      n.call(this, "alternate"), this.left = t, this.right = e;
    }

    function a(t) {
      n.call(this, "match"), this.body = t.filter(Boolean);
    }

    function o(t, e) {
      n.call(this, t), this.body = e;
    }

    function u(t) {
      o.call(this, "capture-group"), this.index = y[this.offset] || (y[this.offset] = x++), this.body = t;
    }

    function i(t, e) {
      n.call(this, "quantified"), this.body = t, this.quantifier = e;
    }

    function l(t, e) {
      n.call(this, "quantifier"), this.min = t, this.max = e, this.greedy = !0;
    }

    function s(t, e) {
      n.call(this, "charset"), this.invert = t, this.body = e;
    }

    function c(t, e) {
      n.call(this, "range"), this.start = t, this.end = e;
    }

    function h(t) {
      n.call(this, "literal"), this.body = t, this.escaped = this.body != this.text;
    }

    function p(t) {
      n.call(this, "unicode"), this.code = t.toUpperCase();
    }

    function f(t) {
      n.call(this, "hex"), this.code = t.toUpperCase();
    }

    function d(t) {
      n.call(this, "octal"), this.code = t.toUpperCase();
    }

    function m(t) {
      n.call(this, "back-reference"), this.code = t.toUpperCase();
    }

    function g(t) {
      n.call(this, "control-character"), this.code = t.toUpperCase();
    }

    var v = function () {
      function t(t, e) {
        function n() {
          this.constructor = t;
        }

        n.prototype = e.prototype, t.prototype = new n();
      }

      function e(t, e, n, r, a) {
        function o(t, e) {
          function n(t) {
            function e(t) {
              return t.charCodeAt(0).toString(16).toUpperCase();
            }

            return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (t) {
              return "\\x0" + e(t);
            }).replace(/[\x10-\x1F\x80-\xFF]/g, function (t) {
              return "\\x" + e(t);
            }).replace(/[\u0180-\u0FFF]/g, function (t) {
              return "\\u0" + e(t);
            }).replace(/[\u1080-\uFFFF]/g, function (t) {
              return "\\u" + e(t);
            });
          }

          var r, a;

          switch (t.length) {
            case 0:
              r = "end of input";
              break;

            case 1:
              r = t[0];
              break;

            default:
              r = t.slice(0, -1).join(", ") + " or " + t[t.length - 1];
          }

          return a = e ? '"' + n(e) + '"' : "end of input", "Expected " + r + " but " + a + " found.";
        }

        this.expected = t, this.found = e, this.offset = n, this.line = r, this.column = a, this.name = "SyntaxError", this.message = o(t, e);
      }

      function v(t) {
        function v() {
          return t.substring(Qn, Zn);
        }

        function x() {
          return Qn;
        }

        function y(e) {
          function n(e, n, r) {
            var a, o;

            for (a = n; r > a; a++) {
              o = t.charAt(a), "\n" === o ? (e.seenCR || e.line++, e.column = 1, e.seenCR = !1) : "\r" === o || "\u2028" === o || "\u2029" === o ? (e.line++, e.column = 1, e.seenCR = !0) : (e.column++, e.seenCR = !1);
            }
          }

          return tr !== e && (tr > e && (tr = 0, er = {
            line: 1,
            column: 1,
            seenCR: !1
          }), n(er, tr, e), tr = e), er;
        }

        function b(t) {
          nr > Zn || (Zn > nr && (nr = Zn, rr = []), rr.push(t));
        }

        function w(t) {
          var e = 0;

          for (t.sort(); e < t.length;) {
            t[e - 1] === t[e] ? t.splice(e, 1) : e++;
          }
        }

        function C() {
          var e, n, r, a, o;
          return e = Zn, n = k(), null !== n ? (r = Zn, 124 === t.charCodeAt(Zn) ? (a = Rt, Zn++) : (a = null, 0 === ar && b(At)), null !== a ? (o = C(), null !== o ? (a = [a, o], r = a) : (Zn = r, r = kt)) : (Zn = r, r = kt), null === r && (r = Et), null !== r ? (Qn = e, n = _t(n, r), null === n ? (Zn = e, e = n) : e = n) : (Zn = e, e = kt)) : (Zn = e, e = kt), e;
        }

        function k() {
          var t, e, n, r, a;
          if (t = Zn, e = R(), null === e && (e = Et), null !== e) {
            if (n = Zn, ar++, r = M(), ar--, null === r ? n = Et : (Zn = n, n = kt), null !== n) {
              for (r = [], a = _(), null === a && (a = E()); null !== a;) {
                r.push(a), a = _(), null === a && (a = E());
              }

              null !== r ? (a = A(), null === a && (a = Et), null !== a ? (Qn = t, e = Mt(e, r, a), null === e ? (Zn = t, t = e) : t = e) : (Zn = t, t = kt)) : (Zn = t, t = kt);
            } else Zn = t, t = kt;
          } else Zn = t, t = kt;
          return t;
        }

        function E() {
          var t;
          return t = I(), null === t && (t = B(), null === t && (t = Y())), t;
        }

        function R() {
          var e, n;
          return e = Zn, 94 === t.charCodeAt(Zn) ? (n = Pt, Zn++) : (n = null, 0 === ar && b(Tt)), null !== n && (Qn = e, n = Ht()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function A() {
          var e, n;
          return e = Zn, 36 === t.charCodeAt(Zn) ? (n = St, Zn++) : (n = null, 0 === ar && b(Dt)), null !== n && (Qn = e, n = qt()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function _() {
          var t, e, n;
          return t = Zn, e = E(), null !== e ? (n = M(), null !== n ? (Qn = t, e = Ft(e, n), null === e ? (Zn = t, t = e) : t = e) : (Zn = t, t = kt)) : (Zn = t, t = kt), t;
        }

        function M() {
          var t, e, n;
          return ar++, t = Zn, e = P(), null !== e ? (n = L(), null === n && (n = Et), null !== n ? (Qn = t, e = Ot(e, n), null === e ? (Zn = t, t = e) : t = e) : (Zn = t, t = kt)) : (Zn = t, t = kt), ar--, null === t && (e = null, 0 === ar && b(Lt)), t;
        }

        function P() {
          var t;
          return t = T(), null === t && (t = H(), null === t && (t = S(), null === t && (t = D(), null === t && (t = q(), null === t && (t = F()))))), t;
        }

        function T() {
          var e, n, r, a, o, u;
          return e = Zn, 123 === t.charCodeAt(Zn) ? (n = It, Zn++) : (n = null, 0 === ar && b(jt)), null !== n ? (r = O(), null !== r ? (44 === t.charCodeAt(Zn) ? (a = Nt, Zn++) : (a = null, 0 === ar && b(zt)), null !== a ? (o = O(), null !== o ? (125 === t.charCodeAt(Zn) ? (u = Ut, Zn++) : (u = null, 0 === ar && b(Bt)), null !== u ? (Qn = e, n = Gt(r, o), null === n ? (Zn = e, e = n) : e = n) : (Zn = e, e = kt)) : (Zn = e, e = kt)) : (Zn = e, e = kt)) : (Zn = e, e = kt)) : (Zn = e, e = kt), e;
        }

        function H() {
          var e, n, r, a;
          return e = Zn, 123 === t.charCodeAt(Zn) ? (n = It, Zn++) : (n = null, 0 === ar && b(jt)), null !== n ? (r = O(), null !== r ? (t.substr(Zn, 2) === Xt ? (a = Xt, Zn += 2) : (a = null, 0 === ar && b(Kt)), null !== a ? (Qn = e, n = Wt(r), null === n ? (Zn = e, e = n) : e = n) : (Zn = e, e = kt)) : (Zn = e, e = kt)) : (Zn = e, e = kt), e;
        }

        function S() {
          var e, n, r, a;
          return e = Zn, 123 === t.charCodeAt(Zn) ? (n = It, Zn++) : (n = null, 0 === ar && b(jt)), null !== n ? (r = O(), null !== r ? (125 === t.charCodeAt(Zn) ? (a = Ut, Zn++) : (a = null, 0 === ar && b(Bt)), null !== a ? (Qn = e, n = Yt(r), null === n ? (Zn = e, e = n) : e = n) : (Zn = e, e = kt)) : (Zn = e, e = kt)) : (Zn = e, e = kt), e;
        }

        function D() {
          var e, n;
          return e = Zn, 43 === t.charCodeAt(Zn) ? (n = $t, Zn++) : (n = null, 0 === ar && b(Jt)), null !== n && (Qn = e, n = Vt()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function q() {
          var e, n;
          return e = Zn, 42 === t.charCodeAt(Zn) ? (n = Zt, Zn++) : (n = null, 0 === ar && b(Qt)), null !== n && (Qn = e, n = te()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function F() {
          var e, n;
          return e = Zn, 63 === t.charCodeAt(Zn) ? (n = ee, Zn++) : (n = null, 0 === ar && b(ne)), null !== n && (Qn = e, n = re()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function L() {
          var e;
          return 63 === t.charCodeAt(Zn) ? (e = ee, Zn++) : (e = null, 0 === ar && b(ne)), e;
        }

        function O() {
          var e, n, r;
          if (e = Zn, n = [], ae.test(t.charAt(Zn)) ? (r = t.charAt(Zn), Zn++) : (r = null, 0 === ar && b(oe)), null !== r) for (; null !== r;) {
            n.push(r), ae.test(t.charAt(Zn)) ? (r = t.charAt(Zn), Zn++) : (r = null, 0 === ar && b(oe));
          } else n = kt;
          return null !== n && (Qn = e, n = ue(n)), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function I() {
          var e, n, r, a;
          return e = Zn, 40 === t.charCodeAt(Zn) ? (n = ie, Zn++) : (n = null, 0 === ar && b(le)), null !== n ? (r = z(), null === r && (r = U(), null === r && (r = N(), null === r && (r = j()))), null !== r ? (41 === t.charCodeAt(Zn) ? (a = se, Zn++) : (a = null, 0 === ar && b(ce)), null !== a ? (Qn = e, n = he(r), null === n ? (Zn = e, e = n) : e = n) : (Zn = e, e = kt)) : (Zn = e, e = kt)) : (Zn = e, e = kt), e;
        }

        function j() {
          var t, e;
          return t = Zn, e = C(), null !== e && (Qn = t, e = pe(e)), null === e ? (Zn = t, t = e) : t = e, t;
        }

        function N() {
          var e, n, r;
          return e = Zn, t.substr(Zn, 2) === fe ? (n = fe, Zn += 2) : (n = null, 0 === ar && b(de)), null !== n ? (r = C(), null !== r ? (Qn = e, n = me(r), null === n ? (Zn = e, e = n) : e = n) : (Zn = e, e = kt)) : (Zn = e, e = kt), e;
        }

        function z() {
          var e, n, r;
          return e = Zn, t.substr(Zn, 2) === ge ? (n = ge, Zn += 2) : (n = null, 0 === ar && b(ve)), null !== n ? (r = C(), null !== r ? (Qn = e, n = xe(r), null === n ? (Zn = e, e = n) : e = n) : (Zn = e, e = kt)) : (Zn = e, e = kt), e;
        }

        function U() {
          var e, n, r;
          return e = Zn, t.substr(Zn, 2) === ye ? (n = ye, Zn += 2) : (n = null, 0 === ar && b(be)), null !== n ? (r = C(), null !== r ? (Qn = e, n = we(r), null === n ? (Zn = e, e = n) : e = n) : (Zn = e, e = kt)) : (Zn = e, e = kt), e;
        }

        function B() {
          var e, n, r, a, o;
          if (ar++, e = Zn, 91 === t.charCodeAt(Zn) ? (n = ke, Zn++) : (n = null, 0 === ar && b(Ee)), null !== n) {
            if (94 === t.charCodeAt(Zn) ? (r = Pt, Zn++) : (r = null, 0 === ar && b(Tt)), null === r && (r = Et), null !== r) {
              for (a = [], o = G(), null === o && (o = X()); null !== o;) {
                a.push(o), o = G(), null === o && (o = X());
              }

              null !== a ? (93 === t.charCodeAt(Zn) ? (o = Re, Zn++) : (o = null, 0 === ar && b(Ae)), null !== o ? (Qn = e, n = _e(r, a), null === n ? (Zn = e, e = n) : e = n) : (Zn = e, e = kt)) : (Zn = e, e = kt);
            } else Zn = e, e = kt;
          } else Zn = e, e = kt;
          return ar--, null === e && (n = null, 0 === ar && b(Ce)), e;
        }

        function G() {
          var e, n, r, a;
          return ar++, e = Zn, n = X(), null !== n ? (45 === t.charCodeAt(Zn) ? (r = Pe, Zn++) : (r = null, 0 === ar && b(Te)), null !== r ? (a = X(), null !== a ? (Qn = e, n = He(n, a), null === n ? (Zn = e, e = n) : e = n) : (Zn = e, e = kt)) : (Zn = e, e = kt)) : (Zn = e, e = kt), ar--, null === e && (n = null, 0 === ar && b(Me)), e;
        }

        function X() {
          var t, e;
          return ar++, t = W(), null === t && (t = K()), ar--, null === t && (e = null, 0 === ar && b(Se)), t;
        }

        function K() {
          var e, n;
          return e = Zn, De.test(t.charAt(Zn)) ? (n = t.charAt(Zn), Zn++) : (n = null, 0 === ar && b(qe)), null !== n && (Qn = e, n = Fe(n)), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function W() {
          var t;
          return t = Z(), null === t && (t = pt(), null === t && (t = et(), null === t && (t = nt(), null === t && (t = rt(), null === t && (t = at(), null === t && (t = ot(), null === t && (t = ut(), null === t && (t = it(), null === t && (t = lt(), null === t && (t = st(), null === t && (t = ct(), null === t && (t = ht(), null === t && (t = dt(), null === t && (t = mt(), null === t && (t = gt(), null === t && (t = vt(), null === t && (t = xt()))))))))))))))))), t;
        }

        function Y() {
          var t;
          return t = $(), null === t && (t = V(), null === t && (t = J())), t;
        }

        function $() {
          var e, n;
          return e = Zn, 46 === t.charCodeAt(Zn) ? (n = Le, Zn++) : (n = null, 0 === ar && b(Oe)), null !== n && (Qn = e, n = Ie()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function J() {
          var e, n;
          return ar++, e = Zn, Ne.test(t.charAt(Zn)) ? (n = t.charAt(Zn), Zn++) : (n = null, 0 === ar && b(ze)), null !== n && (Qn = e, n = Fe(n)), null === n ? (Zn = e, e = n) : e = n, ar--, null === e && (n = null, 0 === ar && b(je)), e;
        }

        function V() {
          var t;
          return t = Q(), null === t && (t = tt(), null === t && (t = pt(), null === t && (t = et(), null === t && (t = nt(), null === t && (t = rt(), null === t && (t = at(), null === t && (t = ot(), null === t && (t = ut(), null === t && (t = it(), null === t && (t = lt(), null === t && (t = st(), null === t && (t = ct(), null === t && (t = ht(), null === t && (t = ft(), null === t && (t = dt(), null === t && (t = mt(), null === t && (t = gt(), null === t && (t = vt(), null === t && (t = xt()))))))))))))))))))), t;
        }

        function Z() {
          var e, n;
          return e = Zn, t.substr(Zn, 2) === Ue ? (n = Ue, Zn += 2) : (n = null, 0 === ar && b(Be)), null !== n && (Qn = e, n = Ge()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function Q() {
          var e, n;
          return e = Zn, t.substr(Zn, 2) === Ue ? (n = Ue, Zn += 2) : (n = null, 0 === ar && b(Be)), null !== n && (Qn = e, n = Xe()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function tt() {
          var e, n;
          return e = Zn, t.substr(Zn, 2) === Ke ? (n = Ke, Zn += 2) : (n = null, 0 === ar && b(We)), null !== n && (Qn = e, n = Ye()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function et() {
          var e, n;
          return e = Zn, t.substr(Zn, 2) === $e ? (n = $e, Zn += 2) : (n = null, 0 === ar && b(Je)), null !== n && (Qn = e, n = Ve()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function nt() {
          var e, n;
          return e = Zn, t.substr(Zn, 2) === Ze ? (n = Ze, Zn += 2) : (n = null, 0 === ar && b(Qe)), null !== n && (Qn = e, n = tn()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function rt() {
          var e, n;
          return e = Zn, t.substr(Zn, 2) === en ? (n = en, Zn += 2) : (n = null, 0 === ar && b(nn)), null !== n && (Qn = e, n = rn()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function at() {
          var e, n;
          return e = Zn, t.substr(Zn, 2) === an ? (n = an, Zn += 2) : (n = null, 0 === ar && b(on)), null !== n && (Qn = e, n = un()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function ot() {
          var e, n;
          return e = Zn, t.substr(Zn, 2) === ln ? (n = ln, Zn += 2) : (n = null, 0 === ar && b(sn)), null !== n && (Qn = e, n = cn()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function ut() {
          var e, n;
          return e = Zn, t.substr(Zn, 2) === hn ? (n = hn, Zn += 2) : (n = null, 0 === ar && b(pn)), null !== n && (Qn = e, n = fn()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function it() {
          var e, n;
          return e = Zn, t.substr(Zn, 2) === dn ? (n = dn, Zn += 2) : (n = null, 0 === ar && b(mn)), null !== n && (Qn = e, n = gn()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function lt() {
          var e, n;
          return e = Zn, t.substr(Zn, 2) === vn ? (n = vn, Zn += 2) : (n = null, 0 === ar && b(xn)), null !== n && (Qn = e, n = yn()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function st() {
          var e, n;
          return e = Zn, t.substr(Zn, 2) === bn ? (n = bn, Zn += 2) : (n = null, 0 === ar && b(wn)), null !== n && (Qn = e, n = Cn()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function ct() {
          var e, n;
          return e = Zn, t.substr(Zn, 2) === kn ? (n = kn, Zn += 2) : (n = null, 0 === ar && b(En)), null !== n && (Qn = e, n = Rn()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function ht() {
          var e, n;
          return e = Zn, t.substr(Zn, 2) === An ? (n = An, Zn += 2) : (n = null, 0 === ar && b(_n)), null !== n && (Qn = e, n = Mn()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function pt() {
          var e, n, r;
          return e = Zn, t.substr(Zn, 2) === Pn ? (n = Pn, Zn += 2) : (n = null, 0 === ar && b(Tn)), null !== n ? (t.length > Zn ? (r = t.charAt(Zn), Zn++) : (r = null, 0 === ar && b(Hn)), null !== r ? (Qn = e, n = Sn(r), null === n ? (Zn = e, e = n) : e = n) : (Zn = e, e = kt)) : (Zn = e, e = kt), e;
        }

        function ft() {
          var e, n, r;
          return e = Zn, 92 === t.charCodeAt(Zn) ? (n = Dn, Zn++) : (n = null, 0 === ar && b(qn)), null !== n ? (Fn.test(t.charAt(Zn)) ? (r = t.charAt(Zn), Zn++) : (r = null, 0 === ar && b(Ln)), null !== r ? (Qn = e, n = On(r), null === n ? (Zn = e, e = n) : e = n) : (Zn = e, e = kt)) : (Zn = e, e = kt), e;
        }

        function dt() {
          var e, n, r, a;

          if (e = Zn, t.substr(Zn, 2) === In ? (n = In, Zn += 2) : (n = null, 0 === ar && b(jn)), null !== n) {
            if (r = [], Nn.test(t.charAt(Zn)) ? (a = t.charAt(Zn), Zn++) : (a = null, 0 === ar && b(zn)), null !== a) for (; null !== a;) {
              r.push(a), Nn.test(t.charAt(Zn)) ? (a = t.charAt(Zn), Zn++) : (a = null, 0 === ar && b(zn));
            } else r = kt;
            null !== r ? (Qn = e, n = Un(r), null === n ? (Zn = e, e = n) : e = n) : (Zn = e, e = kt);
          } else Zn = e, e = kt;

          return e;
        }

        function mt() {
          var e, n, r, a;

          if (e = Zn, t.substr(Zn, 2) === Bn ? (n = Bn, Zn += 2) : (n = null, 0 === ar && b(Gn)), null !== n) {
            if (r = [], Xn.test(t.charAt(Zn)) ? (a = t.charAt(Zn), Zn++) : (a = null, 0 === ar && b(Kn)), null !== a) for (; null !== a;) {
              r.push(a), Xn.test(t.charAt(Zn)) ? (a = t.charAt(Zn), Zn++) : (a = null, 0 === ar && b(Kn));
            } else r = kt;
            null !== r ? (Qn = e, n = Wn(r), null === n ? (Zn = e, e = n) : e = n) : (Zn = e, e = kt);
          } else Zn = e, e = kt;

          return e;
        }

        function gt() {
          var e, n, r, a;

          if (e = Zn, t.substr(Zn, 2) === Yn ? (n = Yn, Zn += 2) : (n = null, 0 === ar && b($n)), null !== n) {
            if (r = [], Xn.test(t.charAt(Zn)) ? (a = t.charAt(Zn), Zn++) : (a = null, 0 === ar && b(Kn)), null !== a) for (; null !== a;) {
              r.push(a), Xn.test(t.charAt(Zn)) ? (a = t.charAt(Zn), Zn++) : (a = null, 0 === ar && b(Kn));
            } else r = kt;
            null !== r ? (Qn = e, n = Jn(r), null === n ? (Zn = e, e = n) : e = n) : (Zn = e, e = kt);
          } else Zn = e, e = kt;

          return e;
        }

        function vt() {
          var e, n;
          return e = Zn, t.substr(Zn, 2) === In ? (n = In, Zn += 2) : (n = null, 0 === ar && b(jn)), null !== n && (Qn = e, n = Vn()), null === n ? (Zn = e, e = n) : e = n, e;
        }

        function xt() {
          var e, n, r;
          return e = Zn, 92 === t.charCodeAt(Zn) ? (n = Dn, Zn++) : (n = null, 0 === ar && b(qn)), null !== n ? (t.length > Zn ? (r = t.charAt(Zn), Zn++) : (r = null, 0 === ar && b(Hn)), null !== r ? (Qn = e, n = Fe(r), null === n ? (Zn = e, e = n) : e = n) : (Zn = e, e = kt)) : (Zn = e, e = kt), e;
        }

        var yt,
            bt = arguments.length > 1 ? arguments[1] : {},
            wt = {
          regexp: C
        },
            Ct = C,
            kt = null,
            Et = "",
            Rt = "|",
            At = '"|"',
            _t = function _t(t, e) {
          return e ? new r(t, e[1]) : t;
        },
            Mt = function Mt(t, e, n) {
          return new a([t].concat(e).concat([n]));
        },
            Pt = "^",
            Tt = '"^"',
            Ht = function Ht() {
          return new n("start");
        },
            St = "$",
            Dt = '"$"',
            qt = function qt() {
          return new n("end");
        },
            Ft = function Ft(t, e) {
          return new i(t, e);
        },
            Lt = "Quantifier",
            Ot = function Ot(t, e) {
          return e && (t.greedy = !1), t;
        },
            It = "{",
            jt = '"{"',
            Nt = ",",
            zt = '","',
            Ut = "}",
            Bt = '"}"',
            Gt = function Gt(t, e) {
          return new l(t, e);
        },
            Xt = ",}",
            Kt = '",}"',
            Wt = function Wt(t) {
          return new l(t, 1 / 0);
        },
            Yt = function Yt(t) {
          return new l(t, t);
        },
            $t = "+",
            Jt = '"+"',
            Vt = function Vt() {
          return new l(1, 1 / 0);
        },
            Zt = "*",
            Qt = '"*"',
            te = function te() {
          return new l(0, 1 / 0);
        },
            ee = "?",
            ne = '"?"',
            re = function re() {
          return new l(0, 1);
        },
            ae = /^[0-9]/,
            oe = "[0-9]",
            ue = function ue(t) {
          return +t.join("");
        },
            ie = "(",
            le = '"("',
            se = ")",
            ce = '")"',
            he = function he(t) {
          return t;
        },
            pe = function pe(t) {
          return new u(t);
        },
            fe = "?:",
            de = '"?:"',
            me = function me(t) {
          return new o("non-capture-group", t);
        },
            ge = "?=",
            ve = '"?="',
            xe = function xe(t) {
          return new o("positive-lookahead", t);
        },
            ye = "?!",
            be = '"?!"',
            we = function we(t) {
          return new o("negative-lookahead", t);
        },
            Ce = "CharacterSet",
            ke = "[",
            Ee = '"["',
            Re = "]",
            Ae = '"]"',
            _e = function _e(t, e) {
          return new s(!!t, e);
        },
            Me = "CharacterRange",
            Pe = "-",
            Te = '"-"',
            He = function He(t, e) {
          return new c(t, e);
        },
            Se = "Character",
            De = /^[^\\\]]/,
            qe = "[^\\\\\\]]",
            Fe = function Fe(t) {
          return new h(t);
        },
            Le = ".",
            Oe = '"."',
            Ie = function Ie() {
          return new n("any-character");
        },
            je = "Literal",
            Ne = /^[^|\\\/.[()?+*$\^]/,
            ze = "[^|\\\\\\/.[()?+*$\\^]",
            Ue = "\\b",
            Be = '"\\\\b"',
            Ge = function Ge() {
          return new n("backspace");
        },
            Xe = function Xe() {
          return new n("word-boundary");
        },
            Ke = "\\B",
            We = '"\\\\B"',
            Ye = function Ye() {
          return new n("non-word-boundary");
        },
            $e = "\\d",
            Je = '"\\\\d"',
            Ve = function Ve() {
          return new n("digit");
        },
            Ze = "\\D",
            Qe = '"\\\\D"',
            tn = function tn() {
          return new n("non-digit");
        },
            en = "\\f",
            nn = '"\\\\f"',
            rn = function rn() {
          return new n("form-feed");
        },
            an = "\\n",
            on = '"\\\\n"',
            un = function un() {
          return new n("line-feed");
        },
            ln = "\\r",
            sn = '"\\\\r"',
            cn = function cn() {
          return new n("carriage-return");
        },
            hn = "\\s",
            pn = '"\\\\s"',
            fn = function fn() {
          return new n("white-space");
        },
            dn = "\\S",
            mn = '"\\\\S"',
            gn = function gn() {
          return new n("non-white-space");
        },
            vn = "\\t",
            xn = '"\\\\t"',
            yn = function yn() {
          return new n("tab");
        },
            bn = "\\v",
            wn = '"\\\\v"',
            Cn = function Cn() {
          return new n("vertical-tab");
        },
            kn = "\\w",
            En = '"\\\\w"',
            Rn = function Rn() {
          return new n("word");
        },
            An = "\\W",
            _n = '"\\\\W"',
            Mn = function Mn() {
          return new n("non-word");
        },
            Pn = "\\c",
            Tn = '"\\\\c"',
            Hn = "any character",
            Sn = function Sn(t) {
          return new g(t);
        },
            Dn = "\\",
            qn = '"\\\\"',
            Fn = /^[1-9]/,
            Ln = "[1-9]",
            On = function On(t) {
          return new m(t);
        },
            In = "\\0",
            jn = '"\\\\0"',
            Nn = /^[0-7]/,
            zn = "[0-7]",
            Un = function Un(t) {
          return new d(t.join(""));
        },
            Bn = "\\x",
            Gn = '"\\\\x"',
            Xn = /^[0-9a-fA-F]/,
            Kn = "[0-9a-fA-F]",
            Wn = function Wn(t) {
          return new f(t.join(""));
        },
            Yn = "\\u",
            $n = "\"\\\\u\"",
            Jn = function Jn(t) {
          return new p(t.join(""));
        },
            Vn = function Vn() {
          return new n("null-character");
        },
            Zn = 0,
            Qn = 0,
            tr = 0,
            er = {
          line: 1,
          column: 1,
          seenCR: !1
        },
            nr = 0,
            rr = [],
            ar = 0;

        if ("startRule" in bt) {
          if (!(bt.startRule in wt)) throw new Error("Can't start parsing from rule \"" + bt.startRule + '".');
          Ct = wt[bt.startRule];
        }

        if (n.offset = x, n.text = v, yt = Ct(), null !== yt && Zn === t.length) return yt;
        throw w(rr), Qn = Math.max(Zn, nr), new e(rr, Qn < t.length ? t.charAt(Qn) : null, Qn, y(Qn).line, y(Qn).column);
      }

      return t(e, Error), {
        SyntaxError: e,
        parse: v
      };
    }(),
        x = 1,
        y = {};

    t.exports = v;
  }, function (t, e, n) {
    function r(t, e) {
      for (var n = "", r = t; e >= r; r++) {
        n += String.fromCharCode(r);
      }

      return n;
    }

    var a = n(3),
        o = n(5),
        u = {
      extend: a.extend
    },
        i = r(97, 122),
        l = r(65, 90),
        s = r(48, 57),
        c = r(32, 47) + r(58, 64) + r(91, 96) + r(123, 126),
        h = r(32, 126),
        p = " \f\n\r\t\x0B \u2028\u2029",
        f = {
      "\\w": i + l + s + "_",
      "\\W": c.replace("_", ""),
      "\\s": p,
      "\\S": function () {
        for (var t = h, e = 0; e < p.length; e++) {
          t = t.replace(p[e], "");
        }

        return t;
      }(),
      "\\d": s,
      "\\D": i + l + c
    };
    u.gen = function (t, e, n) {
      return n = n || {
        guid: 1
      }, u[t.type] ? u[t.type](t, e, n) : u.token(t, e, n);
    }, u.extend({
      token: function token(t, e, n) {
        switch (t.type) {
          case "start":
          case "end":
            return "";

          case "any-character":
            return o.character();

          case "backspace":
            return "";

          case "word-boundary":
            return "";

          case "non-word-boundary":
            break;

          case "digit":
            return o.pick(s.split(""));

          case "non-digit":
            return o.pick((i + l + c).split(""));

          case "form-feed":
            break;

          case "line-feed":
            return t.body || t.text;

          case "carriage-return":
            break;

          case "white-space":
            return o.pick(p.split(""));

          case "non-white-space":
            return o.pick((i + l + s).split(""));

          case "tab":
            break;

          case "vertical-tab":
            break;

          case "word":
            return o.pick((i + l + s).split(""));

          case "non-word":
            return o.pick(c.replace("_", "").split(""));

          case "null-character":
        }

        return t.body || t.text;
      },
      alternate: function alternate(t, e, n) {
        return this.gen(o["boolean"]() ? t.left : t.right, e, n);
      },
      match: function match(t, e, n) {
        e = "";

        for (var r = 0; r < t.body.length; r++) {
          e += this.gen(t.body[r], e, n);
        }

        return e;
      },
      "capture-group": function captureGroup(t, e, n) {
        return e = this.gen(t.body, e, n), n[n.guid++] = e, e;
      },
      "non-capture-group": function nonCaptureGroup(t, e, n) {
        return this.gen(t.body, e, n);
      },
      "positive-lookahead": function positiveLookahead(t, e, n) {
        return this.gen(t.body, e, n);
      },
      "negative-lookahead": function negativeLookahead(t, e, n) {
        return "";
      },
      quantified: function quantified(t, e, n) {
        e = "";

        for (var r = this.quantifier(t.quantifier), a = 0; r > a; a++) {
          e += this.gen(t.body, e, n);
        }

        return e;
      },
      quantifier: function quantifier(t, e, n) {
        var r = Math.max(t.min, 0),
            a = isFinite(t.max) ? t.max : r + o.integer(3, 7);
        return o.integer(r, a);
      },
      charset: function charset(t, e, n) {
        if (t.invert) return this["invert-charset"](t, e, n);
        var r = o.pick(t.body);
        return this.gen(r, e, n);
      },
      "invert-charset": function invertCharset(t, e, n) {
        for (var r, a = h, u = 0; u < t.body.length; u++) {
          switch (r = t.body[u], r.type) {
            case "literal":
              a = a.replace(r.body, "");
              break;

            case "range":
              for (var i = this.gen(r.start, e, n).charCodeAt(), l = this.gen(r.end, e, n).charCodeAt(), s = i; l >= s; s++) {
                a = a.replace(String.fromCharCode(s), "");
              }

            default:
              var c = f[r.text];
              if (c) for (var p = 0; p <= c.length; p++) {
                a = a.replace(c[p], "");
              }
          }
        }

        return o.pick(a.split(""));
      },
      range: function range(t, e, n) {
        var r = this.gen(t.start, e, n).charCodeAt(),
            a = this.gen(t.end, e, n).charCodeAt();
        return String.fromCharCode(o.integer(r, a));
      },
      literal: function literal(t, e, n) {
        return t.escaped ? t.body : t.text;
      },
      unicode: function unicode(t, e, n) {
        return String.fromCharCode(parseInt(t.code, 16));
      },
      hex: function hex(t, e, n) {
        return String.fromCharCode(parseInt(t.code, 16));
      },
      octal: function octal(t, e, n) {
        return String.fromCharCode(parseInt(t.code, 8));
      },
      "back-reference": function backReference(t, e, n) {
        return n[t.code] || "";
      },
      CONTROL_CHARACTER_MAP: function () {
        for (var t = "@ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \\ ] ^ _".split(" "), e = "\x00        \b 	 \n \x0B \f \r                  ".split(" "), n = {}, r = 0; r < t.length; r++) {
          n[t[r]] = e[r];
        }

        return n;
      }(),
      "control-character": function controlCharacter(t, e, n) {
        return this.CONTROL_CHARACTER_MAP[t.code];
      }
    }), t.exports = u;
  }, function (t, e, n) {
    t.exports = n(24);
  }, function (t, e, n) {
    function r(t, e, n) {
      n = n || [];
      var i = {
        name: "string" == typeof e ? e.replace(a.RE_KEY, "$1") : e,
        template: t,
        type: o.type(t),
        rule: u.parse(e)
      };

      switch (i.path = n.slice(0), i.path.push(void 0 === e ? "ROOT" : i.name), i.type) {
        case "array":
          i.items = [], o.each(t, function (t, e) {
            i.items.push(r(t, e, i.path));
          });
          break;

        case "object":
          i.properties = [], o.each(t, function (t, e) {
            i.properties.push(r(t, e, i.path));
          });
      }

      return i;
    }

    var a = n(2),
        o = n(3),
        u = n(4);
    t.exports = r;
  }, function (t, e, n) {
    t.exports = n(26);
  }, function (t, e, n) {
    function r(t, e) {
      for (var n = u(t), r = i.diff(n, e), a = 0; a < r.length; a++) {
        ;
      }

      return r;
    }

    var a = n(2),
        o = n(3),
        u = n(23),
        i = {
      diff: function diff(t, e, n) {
        var r = [];
        return this.name(t, e, n, r) && this.type(t, e, n, r) && (this.value(t, e, n, r), this.properties(t, e, n, r), this.items(t, e, n, r)), r;
      },
      name: function name(t, e, n, r) {
        var a = r.length;
        return l.equal("name", t.path, n + "", t.name + "", r), r.length === a;
      },
      type: function type(t, e, n, r) {
        var u = r.length;

        switch (t.type) {
          case "string":
            if (t.template.match(a.RE_PLACEHOLDER)) return !0;
        }

        return l.equal("type", t.path, o.type(e), t.type, r), r.length === u;
      },
      value: function value(t, e, n, r) {
        var o = r.length,
            u = t.rule,
            i = t.type;

        if ("object" !== i && "array" !== i) {
          if (!u.parameters) {
            switch (i) {
              case "regexp":
                return l.match("value", t.path, e, t.template, r), r.length === o;

              case "string":
                if (t.template.match(a.RE_PLACEHOLDER)) return r.length === o;
            }

            return l.equal("value", t.path, e, t.template, r), r.length === o;
          }

          switch (i) {
            case "number":
              var s = (e + "").split(".");
              s[0] = +s[0], void 0 !== u.min && void 0 !== u.max && (l.greaterThanOrEqualTo("value", t.path, s[0], u.min, r), l.lessThanOrEqualTo("value", t.path, s[0], u.max, r)), void 0 !== u.min && void 0 === u.max && l.equal("value", t.path, s[0], u.min, r, "[value] " + n), u.decimal && (void 0 !== u.dmin && void 0 !== u.dmax && (l.greaterThanOrEqualTo("value", t.path, s[1].length, u.dmin, r), l.lessThanOrEqualTo("value", t.path, s[1].length, u.dmax, r)), void 0 !== u.dmin && void 0 === u.dmax && l.equal("value", t.path, s[1].length, u.dmin, r));
              break;

            case "boolean":
              break;

            case "string":
              var c = e.match(new RegExp(t.template, "g"));
              c = c ? c.length : c, void 0 !== u.min && void 0 !== u.max && (l.greaterThanOrEqualTo("repeat count", t.path, c, u.min, r), l.lessThanOrEqualTo("repeat count", t.path, c, u.max, r)), void 0 !== u.min && void 0 === u.max && l.equal("repeat count", t.path, c, u.min, r);
              break;

            case "regexp":
              var c = e.match(new RegExp(t.template.source.replace(/^\^|\$$/g, ""), "g"));
              c = c ? c.length : c, void 0 !== u.min && void 0 !== u.max && (l.greaterThanOrEqualTo("repeat count", t.path, c, u.min, r), l.lessThanOrEqualTo("repeat count", t.path, c, u.max, r)), void 0 !== u.min && void 0 === u.max && l.equal("repeat count", t.path, c, u.min, r);
          }

          return r.length === o;
        }
      },
      properties: function properties(t, e, n, r) {
        var a = r.length,
            u = t.rule,
            i = o.keys(e);

        if (t.properties) {
          if (t.rule.parameters ? (void 0 !== u.min && void 0 !== u.max && (l.greaterThanOrEqualTo("properties length", t.path, i.length, u.min, r), l.lessThanOrEqualTo("properties length", t.path, i.length, u.max, r)), void 0 !== u.min && void 0 === u.max && l.equal("properties length", t.path, i.length, u.min, r)) : l.equal("properties length", t.path, i.length, t.properties.length, r), r.length !== a) return !1;

          for (var s = 0; s < i.length; s++) {
            r.push.apply(r, this.diff(t.properties[s], e[i[s]], i[s]));
          }

          return r.length === a;
        }
      },
      items: function items(t, e, n, r) {
        var a = r.length;

        if (t.items) {
          var o = t.rule;
          if (t.rule.parameters ? (void 0 !== o.min && void 0 !== o.max && (l.greaterThanOrEqualTo("items", t.path, e.length, o.min * t.items.length, r, "[{utype}] array is too short: {path} must have at least {expected} elements but instance has {actual} elements"), l.lessThanOrEqualTo("items", t.path, e.length, o.max * t.items.length, r, "[{utype}] array is too long: {path} must have at most {expected} elements but instance has {actual} elements")), void 0 !== o.min && void 0 === o.max && l.equal("items length", t.path, e.length, o.min * t.items.length, r)) : l.equal("items length", t.path, e.length, t.items.length, r), r.length !== a) return !1;

          for (var u = 0; u < e.length; u++) {
            r.push.apply(r, this.diff(t.items[u % t.items.length], e[u], u % t.items.length));
          }

          return r.length === a;
        }
      }
    },
        l = {
      message: function message(t) {
        return (t.message || "[{utype}] Expect {path}'{ltype} {action} {expected}, but is {actual}").replace("{utype}", t.type.toUpperCase()).replace("{ltype}", t.type.toLowerCase()).replace("{path}", o.isArray(t.path) && t.path.join(".") || t.path).replace("{action}", t.action).replace("{expected}", t.expected).replace("{actual}", t.actual);
      },
      equal: function equal(t, e, n, r, a, o) {
        if (n === r) return !0;

        switch (t) {
          case "type":
            if ("regexp" === r && "string" === n) return !0;
        }

        var u = {
          path: e,
          type: t,
          actual: n,
          expected: r,
          action: "is equal to",
          message: o
        };
        return u.message = l.message(u), a.push(u), !1;
      },
      match: function match(t, e, n, r, a, o) {
        if (r.test(n)) return !0;
        var u = {
          path: e,
          type: t,
          actual: n,
          expected: r,
          action: "matches",
          message: o
        };
        return u.message = l.message(u), a.push(u), !1;
      },
      notEqual: function notEqual(t, e, n, r, a, o) {
        if (n !== r) return !0;
        var u = {
          path: e,
          type: t,
          actual: n,
          expected: r,
          action: "is not equal to",
          message: o
        };
        return u.message = l.message(u), a.push(u), !1;
      },
      greaterThan: function greaterThan(t, e, n, r, a, o) {
        if (n > r) return !0;
        var u = {
          path: e,
          type: t,
          actual: n,
          expected: r,
          action: "is greater than",
          message: o
        };
        return u.message = l.message(u), a.push(u), !1;
      },
      lessThan: function lessThan(t, e, n, r, a, o) {
        if (r > n) return !0;
        var u = {
          path: e,
          type: t,
          actual: n,
          expected: r,
          action: "is less to",
          message: o
        };
        return u.message = l.message(u), a.push(u), !1;
      },
      greaterThanOrEqualTo: function greaterThanOrEqualTo(t, e, n, r, a, o) {
        if (n >= r) return !0;
        var u = {
          path: e,
          type: t,
          actual: n,
          expected: r,
          action: "is greater than or equal to",
          message: o
        };
        return u.message = l.message(u), a.push(u), !1;
      },
      lessThanOrEqualTo: function lessThanOrEqualTo(t, e, n, r, a, o) {
        if (r >= n) return !0;
        var u = {
          path: e,
          type: t,
          actual: n,
          expected: r,
          action: "is less than or equal to",
          message: o
        };
        return u.message = l.message(u), a.push(u), !1;
      }
    };
    r.Diff = i, r.Assert = l, t.exports = r;
  }, function (t, e, n) {
    t.exports = n(28);
  }, function (t, e, n) {
    function r() {
      this.custom = {
        events: {},
        requestHeaders: {},
        responseHeaders: {}
      };
    }

    function a() {
      function t() {
        try {
          return new window._XMLHttpRequest();
        } catch (t) {}
      }

      function e() {
        try {
          return new window._ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
      }

      var n = function () {
        var t = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            e = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            n = location.href,
            r = e.exec(n.toLowerCase()) || [];
        return t.test(r[1]);
      }();

      return window.ActiveXObject ? !n && t() || e() : t();
    }

    function o(t) {
      function e(t, e) {
        return "string" === i.type(t) ? t === e : "regexp" === i.type(t) ? t.test(e) : void 0;
      }

      for (var n in r.Mock._mocked) {
        var a = r.Mock._mocked[n];
        if ((!a.rurl || e(a.rurl, t.url)) && (!a.rtype || e(a.rtype, t.type.toLowerCase()))) return a;
      }
    }

    function u(t, e) {
      return i.isFunction(t.template) ? t.template(e) : r.Mock.mock(t.template);
    }

    var i = n(3);
    window._XMLHttpRequest = window.XMLHttpRequest, window._ActiveXObject = window.ActiveXObject;

    try {
      new window.Event("custom");
    } catch (l) {
      window.Event = function (t, e, n, r) {
        var a = document.createEvent("CustomEvent");
        return a.initCustomEvent(t, e, n, r), a;
      };
    }

    var s = {
      UNSENT: 0,
      OPENED: 1,
      HEADERS_RECEIVED: 2,
      LOADING: 3,
      DONE: 4
    },
        c = "readystatechange loadstart progress abort error load timeout loadend".split(" "),
        h = "timeout withCredentials".split(" "),
        p = "readyState responseURL status statusText responseType response responseText responseXML".split(" "),
        f = {
      100: "Continue",
      101: "Switching Protocols",
      200: "OK",
      201: "Created",
      202: "Accepted",
      203: "Non-Authoritative Information",
      204: "No Content",
      205: "Reset Content",
      206: "Partial Content",
      300: "Multiple Choice",
      301: "Moved Permanently",
      302: "Found",
      303: "See Other",
      304: "Not Modified",
      305: "Use Proxy",
      307: "Temporary Redirect",
      400: "Bad Request",
      401: "Unauthorized",
      402: "Payment Required",
      403: "Forbidden",
      404: "Not Found",
      405: "Method Not Allowed",
      406: "Not Acceptable",
      407: "Proxy Authentication Required",
      408: "Request Timeout",
      409: "Conflict",
      410: "Gone",
      411: "Length Required",
      412: "Precondition Failed",
      413: "Request Entity Too Large",
      414: "Request-URI Too Long",
      415: "Unsupported Media Type",
      416: "Requested Range Not Satisfiable",
      417: "Expectation Failed",
      422: "Unprocessable Entity",
      500: "Internal Server Error",
      501: "Not Implemented",
      502: "Bad Gateway",
      503: "Service Unavailable",
      504: "Gateway Timeout",
      505: "HTTP Version Not Supported"
    };
    r._settings = {
      timeout: "10-100"
    }, r.setup = function (t) {
      return i.extend(r._settings, t), r._settings;
    }, i.extend(r, s), i.extend(r.prototype, s), r.prototype.mock = !0, r.prototype.match = !1, i.extend(r.prototype, {
      open: function open(t, e, n, u, l) {
        function s(t) {
          for (var e = 0; e < p.length; e++) {
            try {
              f[p[e]] = m[p[e]];
            } catch (n) {}
          }

          f.dispatchEvent(new Event(t.type));
        }

        var f = this;
        i.extend(this.custom, {
          method: t,
          url: e,
          async: "boolean" == typeof n ? n : !0,
          username: u,
          password: l,
          options: {
            url: e,
            type: t
          }
        }), this.custom.timeout = function (t) {
          if ("number" == typeof t) return t;
          if ("string" == typeof t && !~t.indexOf("-")) return parseInt(t, 10);

          if ("string" == typeof t && ~t.indexOf("-")) {
            var e = t.split("-"),
                n = parseInt(e[0], 10),
                r = parseInt(e[1], 10);
            return Math.round(Math.random() * (r - n)) + n;
          }
        }(r._settings.timeout);
        var d = o(this.custom.options);
        if (d) this.match = !0, this.custom.template = d, this.readyState = r.OPENED, this.dispatchEvent(new Event("readystatechange"));else {
          var m = a();
          this.custom.xhr = m;

          for (var g = 0; g < c.length; g++) {
            m.addEventListener(c[g], s);
          }

          u ? m.open(t, e, n, u, l) : m.open(t, e, n);

          for (var v = 0; v < h.length; v++) {
            try {
              m[h[v]] = f[h[v]];
            } catch (x) {}
          }
        }
      },
      setRequestHeader: function setRequestHeader(t, e) {
        if (!this.match) return void this.custom.xhr.setRequestHeader(t, e);
        var n = this.custom.requestHeaders;
        n[t] ? n[t] += "," + e : n[t] = e;
      },
      timeout: 0,
      withCredentials: !1,
      upload: {},
      send: function send(t) {
        function e() {
          n.readyState = r.HEADERS_RECEIVED, n.dispatchEvent(new Event("readystatechange")), n.readyState = r.LOADING, n.dispatchEvent(new Event("readystatechange")), n.status = 200, n.statusText = f[200], n.response = n.responseText = JSON.stringify(u(n.custom.template, n.custom.options), null, 4), n.readyState = r.DONE, n.dispatchEvent(new Event("readystatechange")), n.dispatchEvent(new Event("load")), n.dispatchEvent(new Event("loadend"));
        }

        var n = this;
        return this.custom.options.body = t, this.match ? (this.setRequestHeader("X-Requested-With", "MockXMLHttpRequest"), this.dispatchEvent(new Event("loadstart")), void (this.custom.async ? setTimeout(e, this.custom.timeout) : e())) : void this.custom.xhr.send(t);
      },
      abort: function abort() {
        return this.match ? (this.readyState = r.UNSENT, this.dispatchEvent(new Event("abort", !1, !1, this)), void this.dispatchEvent(new Event("error", !1, !1, this))) : void this.custom.xhr.abort();
      }
    }), i.extend(r.prototype, {
      responseURL: "",
      status: r.UNSENT,
      statusText: "",
      getResponseHeader: function getResponseHeader(t) {
        return this.match ? this.custom.responseHeaders[t.toLowerCase()] : this.custom.xhr.getResponseHeader(t);
      },
      getAllResponseHeaders: function getAllResponseHeaders() {
        if (!this.match) return this.custom.xhr.getAllResponseHeaders();
        var t = this.custom.responseHeaders,
            e = "";

        for (var n in t) {
          t.hasOwnProperty(n) && (e += n + ": " + t[n] + "\r\n");
        }

        return e;
      },
      overrideMimeType: function overrideMimeType() {},
      responseType: "",
      response: null,
      responseText: "",
      responseXML: null
    }), i.extend(r.prototype, {
      addEventListene: function addEventListene(t, e) {
        var n = this.custom.events;
        n[t] || (n[t] = []), n[t].push(e);
      },
      removeEventListener: function removeEventListener(t, e) {
        for (var n = this.custom.events[t] || [], r = 0; r < n.length; r++) {
          n[r] === e && n.splice(r--, 1);
        }
      },
      dispatchEvent: function dispatchEvent(t) {
        for (var e = this.custom.events[t.type] || [], n = 0; n < e.length; n++) {
          e[n].call(this, t);
        }

        var r = "on" + t.type;
        this[r] && this[r](t);
      }
    }), t.exports = r;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./demos/common/util.js":
/*!******************************!*\
  !*** ./demos/common/util.js ***!
  \******************************/
/*! exports provided: getRandomAvatar, getRandomUser, getRandomHeight, getQuery, iOS, isMobile, debounce, countStorage, settingStorage, reportPerformance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomAvatar", function() { return getRandomAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomUser", function() { return getRandomUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomHeight", function() { return getRandomHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuery", function() { return getQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iOS", function() { return iOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countStorage", function() { return countStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingStorage", function() { return settingStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportPerformance", function() { return reportPerformance; });
/* harmony import */ var _mock_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock.min */ "./demos/common/mock.min.js");
/* harmony import */ var _mock_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mock_min__WEBPACK_IMPORTED_MODULE_0__);

var topTypeArr = ['NoHair', 'Eyepatch', 'Hat', 'Hijab', 'Turban', 'WinterHat1', 'WinterHat2', 'WinterHat3', 'WinterHat4', 'LongHairBigHair', 'LongHairBob', 'LongHairBun', 'LongHairCurly', 'LongHairCurvy', 'LongHairDreads', 'LongHairFrida', 'LongHairFro', 'LongHairFroBand', 'LongHairNotTooLong', 'LongHairShavedSides', 'LongHairMiaWallace', 'LongHairStraight', 'LongHairStraight2', 'LongHairStraightStrand', 'ShortHairDreads01', 'ShortHairDreads02', 'ShortHairFrizzle', 'ShortHairShaggyMullet', 'ShortHairShortCurly', 'ShortHairShortFlat', 'ShortHairShortRound', 'ShortHairShortWaved', 'ShortHairSides', 'ShortHairTheCaesar', 'ShortHairTheCaesarSidePart'];
var accessoriesTypeArr = ['Blank', 'Kurt', 'Prescription01', 'Prescription02', 'Round', 'Sunglasses', 'Wayfarers'];
var facialHairTypeArr = ['Blank', 'BeardMedium', 'BeardLight', 'BeardMagestic', 'MoustacheFancy', 'MoustacheMagnum'];
var facialHairColor = ['Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 'BrownDark', 'Platinum', 'Red'];
var clotheTypeArr = ['BlazerShirt', 'BlazerSweater', 'CollarSweater', 'GraphicShirt', 'Hoodie', 'Overall', 'ShirtCrewNeck', 'ShirtScoopNeck', 'ShirtVNeck'];
var clotheColor = ['Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather', 'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White'];
var graphicTypeArr = ['Bat', 'Cumbia', 'Deer', 'Diamond', 'Hola', 'Pizza', 'Resist', 'Selena', 'Bear', 'SkullOutline', 'Skull'];
var eyeTypeArr = ['Close', 'Cry', 'Default', 'Dizzy', 'EyeRoll', 'Happy', 'Hearts', 'Side', 'Squint', 'Surprised', 'Wink', 'WinkWacky'];
var eyebrowTypeArr = ['Angry', 'AngryNatural', 'Default', 'DefaultNatural', 'FlatNatural', 'RaisedExcited', 'RaisedExcitedNatural', 'SadConcerned', 'SadConcernedNatural', 'UnibrowNatural', 'UpDown', 'UpDownNatural'];
var mouthTypeArr = ['Concerned', 'Default', 'Disbelief', 'Eating', 'Grimace', 'Sad', 'ScreamOpen', 'Serious', 'Smile', 'Tongue', 'Twinkle', 'Vomit'];
var skinColorArr = ['Tanned', 'Yellow', 'Pale', 'Light', 'Brown', 'DarkBrown', 'Black'];
var getRandomAvatar = function getRandomAvatar() {
  return 'https://avataaars.io/?' + ['avatarStyle=Transparent', "topType=".concat(_mock_min__WEBPACK_IMPORTED_MODULE_0__["Random"].pick(topTypeArr)), "accessoriesType=".concat(_mock_min__WEBPACK_IMPORTED_MODULE_0__["Random"].pick(accessoriesTypeArr)), "hatColor=".concat(_mock_min__WEBPACK_IMPORTED_MODULE_0__["Random"].pick(facialHairTypeArr)), "facialHairType=".concat(_mock_min__WEBPACK_IMPORTED_MODULE_0__["Random"].pick(facialHairTypeArr)), "facialHairColor=".concat(_mock_min__WEBPACK_IMPORTED_MODULE_0__["Random"].pick(facialHairColor)), "clotheType=".concat(_mock_min__WEBPACK_IMPORTED_MODULE_0__["Random"].pick(clotheTypeArr)), "clotheColor=".concat(_mock_min__WEBPACK_IMPORTED_MODULE_0__["Random"].pick(clotheColor)), "graphicType=".concat(_mock_min__WEBPACK_IMPORTED_MODULE_0__["Random"].pick(graphicTypeArr)), "eyeType=".concat(_mock_min__WEBPACK_IMPORTED_MODULE_0__["Random"].pick(eyeTypeArr)), "eyebrowType=".concat(_mock_min__WEBPACK_IMPORTED_MODULE_0__["Random"].pick(eyebrowTypeArr)), "mouthType=".concat(_mock_min__WEBPACK_IMPORTED_MODULE_0__["Random"].pick(mouthTypeArr)), "skinColor=".concat(_mock_min__WEBPACK_IMPORTED_MODULE_0__["Random"].pick(skinColorArr))].join('&');
};
var getRandomUser = function getRandomUser() {
  return {
    name: _mock_min__WEBPACK_IMPORTED_MODULE_0__["Random"].name(),
    time: _mock_min__WEBPACK_IMPORTED_MODULE_0__["Random"].date(),
    color: _mock_min__WEBPACK_IMPORTED_MODULE_0__["Random"].color(),
    avatar: getRandomAvatar()
  };
};
var getRandomHeight = function getRandomHeight() {
  return _mock_min__WEBPACK_IMPORTED_MODULE_0__["Random"].pick([40, 50, 80, 100, 140, 180]);
};
var getQuery = function getQuery(query) {
  try {
    return new URLSearchParams(window.location.search).get(query);
  } catch (e) {
    return false;
  }
};
var ua = navigator.userAgent;
var Android = !!ua.match(/Android/i);
var iOS = !!ua.match(/iPhone|iPad|iPod/i);
var isMobile = Android || iOS;
var debounce = function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
};
var oneThousand = 1000;
var typeMap = {
  1: oneThousand,
  2: oneThousand * 10,
  3: oneThousand * 100
}; // browser will crash render 100,000 in example `without-virtual-list`.

var isWitoutVirtual = window.location.href.indexOf('without-virtual-list') > -1;
var defaultCount = typeMap[isWitoutVirtual ? 2 : 3];
var countStorage = {
  get: function get() {
    try {
      return +sessionStorage.getItem('RENDER-COUNT') || defaultCount;
    } catch (e) {
      return defaultCount;
    }
  },
  set: function set(type) {
    try {
      sessionStorage.setItem('RENDER-COUNT', typeMap[type] || defaultCount);
    } catch (e) {}
  }
};
var settingStorage = {
  isShow: function isShow() {
    try {
      return !!+sessionStorage.getItem('SETTING-SHOW');
    } catch (e) {
      return false;
    }
  },
  setShow: function setShow(isShow) {
    try {
      sessionStorage.setItem('SETTING-SHOW', isShow ? 1 : 0);
    } catch (e) {}
  }
};
var reportPerformance = function reportPerformance() {
  var initTime = window.app_init_time;
  var timeElement = document.getElementById('time');

  if (timeElement && initTime) {
    var timeWaste = Date.now() - initTime;
    timeElement.textContent = 'Build waste: ' + timeWaste + ' ms.';
  }

  var memoryElement = document.getElementById('memory');
  var performance = window.performance || window.webkitPerformance;

  if (memoryElement && performance && performance.memory && performance.memory.usedJSHeapSize) {
    var memoryUsed = parseInt(performance.memory.usedJSHeapSize / (1024 * 1024));
    memoryElement.textContent = 'Memory used: ' + memoryUsed + ' MB.';
  }
};

/***/ }),

/***/ "./demos/scroll-element/App.vue":
/*!**************************************!*\
  !*** ./demos/scroll-element/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_c849640a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=c849640a& */ "./demos/scroll-element/App.vue?vue&type=template&id=c849640a&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./demos/scroll-element/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=less& */ "./demos/scroll-element/App.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_c849640a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_c849640a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "demos/scroll-element/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./demos/scroll-element/App.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./demos/scroll-element/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./demos/scroll-element/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./demos/scroll-element/App.vue?vue&type=style&index=0&lang=less&":
/*!************************************************************************!*\
  !*** ./demos/scroll-element/App.vue?vue&type=style&index=0&lang=less& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=less& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./demos/scroll-element/App.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./demos/scroll-element/App.vue?vue&type=template&id=c849640a&":
/*!*********************************************************************!*\
  !*** ./demos/scroll-element/App.vue?vue&type=template&id=c849640a& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c849640a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=c849640a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./demos/scroll-element/App.vue?vue&type=template&id=c849640a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c849640a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_c849640a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./demos/scroll-element/main.js":
/*!**************************************!*\
  !*** ./demos/scroll-element/main.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue */ "./demos/scroll-element/App.vue");
/* harmony import */ var _common_createApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/createApp */ "./demos/common/createApp.js");


Object(_common_createApp__WEBPACK_IMPORTED_MODULE_1__["default"])(_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./demos/common/Corner.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./demos/common/Corner.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./demos/common/util.js");
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'GithubCorner',
  props: {
    path: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      size: _util__WEBPACK_IMPORTED_MODULE_0__["isMobile"] ? 40 : 80
    };
  },
  computed: {
    url: function url() {
      return 'https://github.com/tangbc/vue-virtual-scroll-list/tree/master/demos' + (this.path || '');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./demos/common/Header.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./demos/common/Header.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./demos/common/util.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AppHeader',
  props: {
    warning: Boolean,
    title: {
      type: String,
      "default": ''
    },
    desciption: {
      type: String,
      "default": ''
    },
    startIndex: {
      type: Number,
      "default": 0
    },
    onDataChange: {
      type: Function,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      isMobile: _util__WEBPACK_IMPORTED_MODULE_0__["isMobile"],
      selfStartIndex: 0,
      showSetting: _util__WEBPACK_IMPORTED_MODULE_0__["settingStorage"].isShow(),
      renderCount: String(_util__WEBPACK_IMPORTED_MODULE_0__["countStorage"].get()).length - 3
    };
  },
  computed: {
    showStart: function showStart() {
      return this.startIndex !== undefined;
    },
    isRenderSetting: function isRenderSetting() {
      return this.showSetting && this.showStart;
    }
  },
  watch: {
    renderCount: function renderCount(val) {
      _util__WEBPACK_IMPORTED_MODULE_0__["countStorage"].set(val);
      window.location.reload();
    }
  },
  mounted: function mounted() {
    this.selfStartIndex = this.startIndex;
  },
  methods: {
    clickIcon: function clickIcon() {
      var nextStatus = !this.showSetting;
      this.showSetting = nextStatus;
      _util__WEBPACK_IMPORTED_MODULE_0__["settingStorage"].setShow(nextStatus);
    },
    inputDataChange: Object(_util__WEBPACK_IMPORTED_MODULE_0__["debounce"])(function (type, value) {
      var val = Number(value);

      if (this.onDataChange && value !== '' && !isNaN(val) && val >= 0) {
        this.onDataChange(type, val);
      }
    }, 1000, false)
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./demos/common/Item.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./demos/common/Item.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./demos/common/util.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Item',
  props: {
    height: {
      type: Number,
      "default": 0
    },
    index: {
      type: Number,
      "default": 0
    },
    variable: Boolean,
    info: {
      type: Object,
      "default": function _default() {
        return {
          name: '',
          time: '',
          avatar: '',
          color: ''
        };
      }
    }
  },
  data: function data() {
    return {
      avatar: Object(_util__WEBPACK_IMPORTED_MODULE_0__["getQuery"])('avatar') !== null
    };
  },
  computed: {
    itemStyle: function itemStyle() {
      return {
        height: "".concat(this.height, "px"),
        'line-height': "".concat(this.height, "px")
      };
    }
  },
  methods: {
    getAbbrName: function getAbbrName(name) {
      var arr = name.split(' ');

      if (arr.length > 1) {
        return arr[0][0] + arr[1][0];
      } else {
        return name.substr(0, 2);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./demos/scroll-element/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./demos/scroll-element/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_Item_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Item.vue */ "./demos/common/Item.vue");
/* harmony import */ var vue_virtual_scroll_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-virtual-scroll-list */ "./src/index.js");
/* harmony import */ var vue_virtual_scroll_list__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_virtual_scroll_list__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util */ "./demos/common/util.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var remain = 14;
var itemSize = 80;
var itemCount = _common_util__WEBPACK_IMPORTED_MODULE_2__["countStorage"].get();
var userInfoList = [];

for (var i = 0; i < itemCount; i++) {
  userInfoList.push(Object(_common_util__WEBPACK_IMPORTED_MODULE_2__["getRandomUser"])());
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  components: {
    'virtual-list': vue_virtual_scroll_list__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      remain: remain,
      start: 0,
      size: itemSize,
      item: _common_Item_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      itemCount: itemCount,
      scrollelement: null
    };
  },
  mounted: function mounted() {
    this.scrollelement = this.$refs.main;
  },
  methods: {
    getItemProps: function getItemProps(itemIndex) {
      return {
        key: itemIndex,
        props: {
          height: itemSize,
          index: itemIndex,
          info: userInfoList[itemIndex] || {}
        }
      };
    },
    onHeaderDataChange: function onHeaderDataChange(type, value) {
      if (type === 'start') {
        this.start = value;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./demos/common/Header.vue?vue&type=style&index=0&lang=less&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./demos/common/Header.vue?vue&type=style&index=0&lang=less& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "header {\n  font-family: monospace;\n}\nheader h1 {\n  padding: 20px 0;\n}\n@media (max-width: 640px) {\nheader h1 {\n    padding: 10px 0;\n    font-size: 24px;\n}\n}\nheader section {\n  font-size: 14px;\n  background: #f7f7f7;\n  padding: 10px;\n  margin-bottom: 20px;\n  border-radius: 5px;\n  position: relative;\n}\nheader section .performance {\n  color: #ee82ee;\n  position: absolute;\n  right: 50px;\n  font-size: 12px;\n}\n@media (max-width: 640px) {\nheader section .performance {\n    display: block;\n    position: relative;\n    right: 0;\n    padding-top: 5px;\n}\n}\nheader section .memory {\n  top: 18px;\n}\n@media (max-width: 640px) {\nheader section .memory {\n    display: block;\n    position: relative;\n    right: 0;\n    padding-top: 5px;\n    top: 0;\n}\n}\nheader section .time {\n  top: 5px;\n}\nheader section .icon {\n  width: 25px;\n  height: 25px;\n  line-height: 25px;\n  text-align: center;\n  position: absolute;\n  right: 10px;\n  top: 5px;\n  cursor: pointer;\n  border-radius: 3px;\n}\nheader section .icon.active {\n  background-color: #c0c0c0;\n}\nheader section .setting {\n  position: relative;\n  padding: 30px 0 20px 20px;\n}\n@media (max-width: 640px) {\nheader section .setting {\n    padding: 20px 0 20px 0px;\n}\n}\nheader section .setting .option {\n  display: block;\n  margin-bottom: 20px;\n}\nheader section .setting .option:last-child {\n  margin: 0;\n}\nheader section .setting .option .name {\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: bold;\n  display: inline-block;\n  min-width: 120px;\n  text-align: left;\n}\n@media (max-width: 640px) {\nheader section .setting .option .name {\n    min-width: 50px;\n}\n}\nheader section .setting .option .middle {\n  margin: 0 20px;\n}\n@media (max-width: 640px) {\nheader section .setting .option .middle {\n    margin: 0;\n}\n}\n@media (max-width: 640px) {\nheader section .setting .option label input {\n    position: relative;\n    top: 3px;\n}\n}\n@media (max-width: 640px) {\nheader section .setting .option label span {\n    position: relative;\n    left: -5px;\n}\n}\nheader section .setting i {\n  position: absolute;\n  right: 0;\n  color: lightsteelblue;\n  font-size: 12px;\n}\nheader section .setting input[type=\"text\"] {\n  -webkit-appearance: none;\n  appearance: none;\n  padding: 5px;\n  outline: none;\n  color: #464a4c;\n  background-color: #fff;\n  border-radius: 3px;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  font-size: 14px;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\nheader section .setting input[type=\"text\"]:focus {\n  outline: 0;\n  border-color: #5cb3fd;\n}\nheader.warning h1,\nheader.warning .desciption {\n  color: #ffc107;\n}\nheader.warning .t3 {\n  color: red;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./demos/common/Item.vue?vue&type=style&index=0&lang=less&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./demos/common/Item.vue?vue&type=style&index=0&lang=less& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".item {\n  box-sizing: border-box;\n  display: flex;\n}\n@media (max-width: 640px) {\n.item {\n    -webkit-user-select: none;\n    user-select: none;\n}\n}\n.item .index {\n  flex: 1;\n  text-align: center;\n}\n.item .card {\n  position: relative;\n  flex: 4;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px dashed #cecece;\n}\n@media (max-width: 640px) and (-webkit-min-device-pixel-ratio: 2) {\n.item .card {\n    border-bottom: 0.5px solid #cccccc;\n}\n}\n.item .card-avatar {\n  width: 40px;\n  height: 40px;\n  background: #efefef;\n  color: #4169e1;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 40px;\n}\n.item .card-avatar.no-avatar {\n  background: #ff6347;\n  color: #ffffff;\n}\n.item .card-avatar-img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.item .card-info {\n  display: flex;\n  flex-direction: column;\n  padding-left: 40px;\n}\n@media (max-width: 640px) {\n.item .card-info {\n    padding-left: 20px;\n}\n}\n.item .card-info-item {\n  flex: 1;\n  height: 50%;\n  line-height: 1;\n  position: relative;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 300px;\n  overflow: hidden;\n}\n@media (max-width: 640px) {\n.item .card-info-item {\n    max-width: 180px;\n}\n}\n.item .card-info-item.name {\n  padding-bottom: 3px;\n}\n.item .card-info-item.time {\n  padding-top: 3px;\n  color: #a9a9a9;\n}\n.item .card-height {\n  position: absolute;\n  right: 30px;\n  font-style: italic;\n  color: #999;\n  font-weight: 100;\n  font-family: sans-serif;\n  font-size: 12px;\n}\n@media (max-width: 375px) {\n.item .card-height {\n    right: 10px;\n}\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./demos/scroll-element/App.vue?vue&type=style&index=0&lang=less&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./demos/scroll-element/App.vue?vue&type=style&index=0&lang=less& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n}\nhtml,\nbody {\n  height: 100%;\n  overflow: hidden;\n  font-size: 16px;\n  font-family: serif;\n}\n.app {\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n.container {\n  width: 520px;\n  height: 50%;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n@media (max-width: 640px) {\n.container {\n    width: 90%;\n}\n}\n.main {\n  padding: 5px;\n  border-radius: 3px;\n  background-color: #66cdaa;\n}\n@media (max-width: 640px) {\n.main {\n    padding: 3px;\n}\n}\n.list {\n  background-color: #ffffff;\n  -webkit-overflow-scrolling: touch;\n}\n.slot-before {\n  position: sticky;\n  top: 0;\n}\n.slot-after {\n  position: sticky;\n  bottom: 0;\n}\n.app {\n  height: 100%;\n}\n.container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./demos/common/Corner.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./demos/common/Corner.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}\n", ""]);
// Exports
exports.locals = {
	"github-corner": "github-corner",
	"octo-arm": "octo-arm",
	"octocat-wave": "octocat-wave"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./demos/common/Corner.vue?vue&type=template&id=46296b1c&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./demos/common/Corner.vue?vue&type=template&id=46296b1c& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    {
      staticClass: "github-corner",
      attrs: { href: _vm.url, "aria-label": "View source on GitHub" }
    },
    [
      _c(
        "svg",
        {
          staticStyle: {
            fill: "#151513",
            color: "#fff",
            position: "absolute",
            top: "0",
            border: "0",
            right: "0",
            "z-index": "1000"
          },
          attrs: {
            width: _vm.size,
            height: _vm.size,
            viewBox: "0 0 250 250",
            "aria-hidden": "true"
          }
        },
        [
          _c("path", {
            attrs: { d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "octo-arm",
            staticStyle: { "transform-origin": "130px 106px" },
            attrs: {
              d:
                "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
              fill: "currentColor"
            }
          }),
          _vm._v(" "),
          _c("path", {
            staticClass: "octo-body",
            attrs: {
              d:
                "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
              fill: "currentColor"
            }
          })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./demos/common/Header.vue?vue&type=template&id=49f9ff54&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./demos/common/Header.vue?vue&type=template&id=49f9ff54& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { class: _vm.warning ? "warning" : "" }, [
    _c("h1", [_vm._v(_vm._s(_vm.title))]),
    _vm._v(" "),
    _c("section", [
      _c("span", { staticClass: "desciption" }, [
        _vm._v(_vm._s(_vm.desciption))
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "performance time", attrs: { id: "time" } }),
      _vm._v(" "),
      _c("span", {
        staticClass: "performance memory",
        attrs: { id: "memory" }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "icon",
          class: _vm.showSetting ? "active" : "",
          on: { click: _vm.clickIcon }
        },
        [
          _c(
            "svg",
            {
              attrs: {
                width: "25",
                height: "25",
                t: "1553394278598",
                viewBox: "0 0 1024 1024",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                "p-id": "8690",
                "xmlns:xlink": "http://www.w3.org/1999/xlink"
              }
            },
            [
              _c("path", {
                attrs: {
                  d:
                    "M809.21 474.749H374.022c-19.865 0-35.966 16.101-35.966 35.966 0 19.859 16.101 35.966 35.966 35.966H809.21c19.865 0 35.966-16.107 35.966-35.966 0-19.864-16.101-35.966-35.966-35.966m0 215.796H374.022c-19.865 0-35.966 16.101-35.966 35.966 0 19.859 16.101 35.966 35.966 35.966H809.21c19.865 0 35.966-16.107 35.966-35.966 0-19.865-16.101-35.966-35.966-35.966M220.52 258.954c-19.865 0-35.966 16.101-35.966 35.966 0 19.865 16.101 35.966 35.966 35.966s35.966-16.101 35.966-35.966c0-19.865-16.102-35.966-35.966-35.966m153.502 71.932H809.21c19.865 0 35.966-16.101 35.966-35.966 0-19.865-16.101-35.966-35.966-35.966H374.022c-19.865 0-35.966 16.101-35.966 35.966 0 19.864 16.102 35.966 35.966 35.966M220.52 474.749c-19.865 0-35.966 16.101-35.966 35.966 0 19.859 16.101 35.966 35.966 35.966s35.966-16.107 35.966-35.966c0-19.864-16.102-35.966-35.966-35.966m0 215.796c-19.865 0-35.966 16.101-35.966 35.966 0 19.859 16.101 35.966 35.966 35.966s35.966-16.107 35.966-35.966c0-19.865-16.102-35.966-35.966-35.966",
                  "p-id": "8691",
                  fill: "#2c2c2c"
                }
              })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showSetting,
              expression: "showSetting"
            }
          ],
          staticClass: "setting"
        },
        [
          _vm.showStart
            ? _c("div", { staticClass: "option" }, [
                _vm.isMobile
                  ? _c("span", { staticClass: "name" }, [_vm._v("Index:")])
                  : _c("span", { staticClass: "name" }, [
                      _vm._v("Start index:")
                    ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.selfStartIndex,
                      expression: "selfStartIndex"
                    }
                  ],
                  attrs: { type: "text" },
                  domProps: { value: _vm.selfStartIndex },
                  on: {
                    focus: function($event) {
                      return $event.target.select()
                    },
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.selfStartIndex = $event.target.value
                      },
                      function($event) {
                        return _vm.inputDataChange("start", $event.target.value)
                      }
                    ]
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "option" }, [
            _vm.isMobile
              ? _c("span", { staticClass: "name" }, [_vm._v("Count:")])
              : _c("span", { staticClass: "name" }, [_vm._v("List count:")]),
            _vm._v(" "),
            _c("label", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.renderCount,
                    expression: "renderCount"
                  }
                ],
                attrs: { type: "radio", value: "1" },
                domProps: { checked: _vm._q(_vm.renderCount, "1") },
                on: {
                  change: function($event) {
                    _vm.renderCount = "1"
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "t1" }, [_vm._v("1,000")])
            ]),
            _vm._v(" "),
            _c("label", { staticClass: "middle" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.renderCount,
                    expression: "renderCount"
                  }
                ],
                attrs: { type: "radio", value: "2" },
                domProps: { checked: _vm._q(_vm.renderCount, "2") },
                on: {
                  change: function($event) {
                    _vm.renderCount = "2"
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "t2" }, [_vm._v("10,000")])
            ]),
            _vm._v(" "),
            _c("label", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.renderCount,
                    expression: "renderCount"
                  }
                ],
                attrs: { type: "radio", value: "3" },
                domProps: { checked: _vm._q(_vm.renderCount, "3") },
                on: {
                  change: function($event) {
                    _vm.renderCount = "3"
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "t3" }, [_vm._v("100,000")])
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./demos/common/Item.vue?vue&type=template&id=571f449a&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./demos/common/Item.vue?vue&type=template&id=571f449a& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "item", style: _vm.itemStyle }, [
    _c("div", { staticClass: "index" }, [
      _vm._v("\n    #" + _vm._s(_vm.index) + "\n  ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _c(
        "div",
        {
          staticClass: "card-avatar",
          class: { "no-avatar": !_vm.avatar },
          style: { "background-color": !_vm.avatar && _vm.info.color }
        },
        [
          !_vm.avatar
            ? _c("span", [_vm._v(_vm._s(_vm.getAbbrName(_vm.info.name)))])
            : _c("img", {
                staticClass: "card-avatar-img",
                attrs: { src: _vm.info.avatar, alt: "AVATAR" }
              })
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card-info" }, [
        _c(
          "div",
          {
            staticClass: "card-info-item name",
            style: { color: _vm.info.color }
          },
          [_vm._v("\n        " + _vm._s(_vm.info.name) + "\n      ")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-info-item time" }, [
          _vm._v("\n        Registered: " + _vm._s(_vm.info.time) + "\n      ")
        ])
      ]),
      _vm._v(" "),
      _vm.variable
        ? _c("div", { staticClass: "card-height" }, [
            _vm._v("\n      " + _vm._s(_vm.height) + "px\n    ")
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./demos/scroll-element/App.vue?vue&type=template&id=c849640a&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./demos/scroll-element/App.vue?vue&type=template&id=c849640a& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app" },
    [
      _c("GithubCorner", { attrs: { path: "/scroll-element" } }),
      _vm._v(" "),
      _c(
        "div",
        { ref: "main", staticClass: "container" },
        [
          _c("Header", {
            attrs: {
              title: "scroll-element",
              desciption: "Build " + _vm.itemCount.toLocaleString() + " items.",
              "start-index": _vm.start,
              "on-data-change": _vm.onHeaderDataChange
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "main" },
            [
              _c("virtual-list", {
                staticClass: "list",
                attrs: {
                  size: _vm.size,
                  remain: _vm.remain,
                  bench: 30,
                  start: _vm.start,
                  scrollelement: _vm.scrollelement,
                  item: _vm.item,
                  itemcount: _vm.itemCount,
                  itemprops: _vm.getItemProps
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./demos/common/Header.vue?vue&type=style&index=0&lang=less&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./demos/common/Header.vue?vue&type=style&index=0&lang=less& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./demos/common/Header.vue?vue&type=style&index=0&lang=less&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("dac9a37c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./demos/common/Item.vue?vue&type=style&index=0&lang=less&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./demos/common/Item.vue?vue&type=style&index=0&lang=less& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./Item.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./demos/common/Item.vue?vue&type=style&index=0&lang=less&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1386094e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./demos/scroll-element/App.vue?vue&type=style&index=0&lang=less&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./demos/scroll-element/App.vue?vue&type=style&index=0&lang=less& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/less-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=less& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./demos/scroll-element/App.vue?vue&type=style&index=0&lang=less&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("56a2a693", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./demos/common/Corner.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--2-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./demos/common/Corner.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--2-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./Corner.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./demos/common/Corner.vue?vue&type=style&index=0&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("258d8dc5", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.js":
/*!**************************************!*\
  !*** ./node_modules/vue/dist/vue.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  /*  */

  var emptyObject = Object.freeze({});

  // These helpers produce better VM code in JS engines due to their
  // explicitness and function inlining.
  function isUndef (v) {
    return v === undefined || v === null
  }

  function isDef (v) {
    return v !== undefined && v !== null
  }

  function isTrue (v) {
    return v === true
  }

  function isFalse (v) {
    return v === false
  }

  /**
   * Check if value is primitive.
   */
  function isPrimitive (value) {
    return (
      typeof value === 'string' ||
      typeof value === 'number' ||
      // $flow-disable-line
      typeof value === 'symbol' ||
      typeof value === 'boolean'
    )
  }

  /**
   * Quick object check - this is primarily used to tell
   * Objects from primitive values when we know the value
   * is a JSON-compliant type.
   */
  function isObject (obj) {
    return obj !== null && typeof obj === 'object'
  }

  /**
   * Get the raw type string of a value, e.g., [object Object].
   */
  var _toString = Object.prototype.toString;

  function toRawType (value) {
    return _toString.call(value).slice(8, -1)
  }

  /**
   * Strict object type check. Only returns true
   * for plain JavaScript objects.
   */
  function isPlainObject (obj) {
    return _toString.call(obj) === '[object Object]'
  }

  function isRegExp (v) {
    return _toString.call(v) === '[object RegExp]'
  }

  /**
   * Check if val is a valid array index.
   */
  function isValidArrayIndex (val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val)
  }

  function isPromise (val) {
    return (
      isDef(val) &&
      typeof val.then === 'function' &&
      typeof val.catch === 'function'
    )
  }

  /**
   * Convert a value to a string that is actually rendered.
   */
  function toString (val) {
    return val == null
      ? ''
      : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
        ? JSON.stringify(val, null, 2)
        : String(val)
  }

  /**
   * Convert an input value to a number for persistence.
   * If the conversion fails, return original string.
   */
  function toNumber (val) {
    var n = parseFloat(val);
    return isNaN(n) ? val : n
  }

  /**
   * Make a map and return a function for checking if a key
   * is in that map.
   */
  function makeMap (
    str,
    expectsLowerCase
  ) {
    var map = Object.create(null);
    var list = str.split(',');
    for (var i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase
      ? function (val) { return map[val.toLowerCase()]; }
      : function (val) { return map[val]; }
  }

  /**
   * Check if a tag is a built-in tag.
   */
  var isBuiltInTag = makeMap('slot,component', true);

  /**
   * Check if an attribute is a reserved attribute.
   */
  var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

  /**
   * Remove an item from an array.
   */
  function remove (arr, item) {
    if (arr.length) {
      var index = arr.indexOf(item);
      if (index > -1) {
        return arr.splice(index, 1)
      }
    }
  }

  /**
   * Check whether an object has the property.
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn (obj, key) {
    return hasOwnProperty.call(obj, key)
  }

  /**
   * Create a cached version of a pure function.
   */
  function cached (fn) {
    var cache = Object.create(null);
    return (function cachedFn (str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str))
    })
  }

  /**
   * Camelize a hyphen-delimited string.
   */
  var camelizeRE = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
  });

  /**
   * Capitalize a string.
   */
  var capitalize = cached(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  });

  /**
   * Hyphenate a camelCase string.
   */
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cached(function (str) {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
  });

  /**
   * Simple bind polyfill for environments that do not support it,
   * e.g., PhantomJS 1.x. Technically, we don't need this anymore
   * since native bind is now performant enough in most browsers.
   * But removing it would mean breaking code that was able to run in
   * PhantomJS 1.x, so this must be kept for backward compatibility.
   */

  /* istanbul ignore next */
  function polyfillBind (fn, ctx) {
    function boundFn (a) {
      var l = arguments.length;
      return l
        ? l > 1
          ? fn.apply(ctx, arguments)
          : fn.call(ctx, a)
        : fn.call(ctx)
    }

    boundFn._length = fn.length;
    return boundFn
  }

  function nativeBind (fn, ctx) {
    return fn.bind(ctx)
  }

  var bind = Function.prototype.bind
    ? nativeBind
    : polyfillBind;

  /**
   * Convert an Array-like object to a real Array.
   */
  function toArray (list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
      ret[i] = list[i + start];
    }
    return ret
  }

  /**
   * Mix properties into target object.
   */
  function extend (to, _from) {
    for (var key in _from) {
      to[key] = _from[key];
    }
    return to
  }

  /**
   * Merge an Array of Objects into a single Object.
   */
  function toObject (arr) {
    var res = {};
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {
        extend(res, arr[i]);
      }
    }
    return res
  }

  /* eslint-disable no-unused-vars */

  /**
   * Perform no operation.
   * Stubbing args to make Flow happy without leaving useless transpiled code
   * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
   */
  function noop (a, b, c) {}

  /**
   * Always return false.
   */
  var no = function (a, b, c) { return false; };

  /* eslint-enable no-unused-vars */

  /**
   * Return the same value.
   */
  var identity = function (_) { return _; };

  /**
   * Generate a string containing static keys from compiler modules.
   */
  function genStaticKeys (modules) {
    return modules.reduce(function (keys, m) {
      return keys.concat(m.staticKeys || [])
    }, []).join(',')
  }

  /**
   * Check if two values are loosely equal - that is,
   * if they are plain objects, do they have the same shape?
   */
  function looseEqual (a, b) {
    if (a === b) { return true }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i])
          })
        } else if (a instanceof Date && b instanceof Date) {
          return a.getTime() === b.getTime()
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key])
          })
        } else {
          /* istanbul ignore next */
          return false
        }
      } catch (e) {
        /* istanbul ignore next */
        return false
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b)
    } else {
      return false
    }
  }

  /**
   * Return the first index at which a loosely equal value can be
   * found in the array (if value is a plain object, the array must
   * contain an object of the same shape), or -1 if it is not present.
   */
  function looseIndexOf (arr, val) {
    for (var i = 0; i < arr.length; i++) {
      if (looseEqual(arr[i], val)) { return i }
    }
    return -1
  }

  /**
   * Ensure a function is called only once.
   */
  function once (fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(this, arguments);
      }
    }
  }

  var SSR_ATTR = 'data-server-rendered';

  var ASSET_TYPES = [
    'component',
    'directive',
    'filter'
  ];

  var LIFECYCLE_HOOKS = [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated',
    'errorCaptured',
    'serverPrefetch'
  ];

  /*  */



  var config = ({
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),

    /**
     * Whether to suppress warnings.
     */
    silent: false,

    /**
     * Show production mode tip message on boot?
     */
    productionTip: "development" !== 'production',

    /**
     * Whether to enable devtools
     */
    devtools: "development" !== 'production',

    /**
     * Whether to record perf
     */
    performance: false,

    /**
     * Error handler for watcher errors
     */
    errorHandler: null,

    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,

    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],

    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),

    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,

    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,

    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,

    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,

    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,

    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,

    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,

    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
  });

  /*  */

  /**
   * unicode letters used for parsing html tags, component names and property paths.
   * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
   * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
   */
  var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

  /**
   * Check if a string starts with $ or _
   */
  function isReserved (str) {
    var c = (str + '').charCodeAt(0);
    return c === 0x24 || c === 0x5F
  }

  /**
   * Define a property.
   */
  function def (obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    });
  }

  /**
   * Parse simple path.
   */
  var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
  function parsePath (path) {
    if (bailRE.test(path)) {
      return
    }
    var segments = path.split('.');
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]];
      }
      return obj
    }
  }

  /*  */

  // can we use __proto__?
  var hasProto = '__proto__' in {};

  // Browser environment sniffing
  var inBrowser = typeof window !== 'undefined';
  var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  var UA = inBrowser && window.navigator.userAgent.toLowerCase();
  var isIE = UA && /msie|trident/.test(UA);
  var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  var isEdge = UA && UA.indexOf('edge/') > 0;
  var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
  var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
  var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  var isPhantomJS = UA && /phantomjs/.test(UA);
  var isFF = UA && UA.match(/firefox\/(\d+)/);

  // Firefox has a "watch" function on Object.prototype...
  var nativeWatch = ({}).watch;

  var supportsPassive = false;
  if (inBrowser) {
    try {
      var opts = {};
      Object.defineProperty(opts, 'passive', ({
        get: function get () {
          /* istanbul ignore next */
          supportsPassive = true;
        }
      })); // https://github.com/facebook/flow/issues/285
      window.addEventListener('test-passive', null, opts);
    } catch (e) {}
  }

  // this needs to be lazy-evaled because vue may be required before
  // vue-server-renderer can set VUE_ENV
  var _isServer;
  var isServerRendering = function () {
    if (_isServer === undefined) {
      /* istanbul ignore if */
      if (!inBrowser && !inWeex && typeof global !== 'undefined') {
        // detect presence of vue-server-renderer and avoid
        // Webpack shimming the process
        _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
      } else {
        _isServer = false;
      }
    }
    return _isServer
  };

  // detect devtools
  var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  /* istanbul ignore next */
  function isNative (Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
  }

  var hasSymbol =
    typeof Symbol !== 'undefined' && isNative(Symbol) &&
    typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

  var _Set;
  /* istanbul ignore if */ // $flow-disable-line
  if (typeof Set !== 'undefined' && isNative(Set)) {
    // use native Set when available.
    _Set = Set;
  } else {
    // a non-standard Set polyfill that only works with primitive keys.
    _Set = /*@__PURE__*/(function () {
      function Set () {
        this.set = Object.create(null);
      }
      Set.prototype.has = function has (key) {
        return this.set[key] === true
      };
      Set.prototype.add = function add (key) {
        this.set[key] = true;
      };
      Set.prototype.clear = function clear () {
        this.set = Object.create(null);
      };

      return Set;
    }());
  }

  /*  */

  var warn = noop;
  var tip = noop;
  var generateComponentTrace = (noop); // work around flow check
  var formatComponentName = (noop);

  {
    var hasConsole = typeof console !== 'undefined';
    var classifyRE = /(?:^|[-_])(\w)/g;
    var classify = function (str) { return str
      .replace(classifyRE, function (c) { return c.toUpperCase(); })
      .replace(/[-_]/g, ''); };

    warn = function (msg, vm) {
      var trace = vm ? generateComponentTrace(vm) : '';

      if (config.warnHandler) {
        config.warnHandler.call(null, msg, vm, trace);
      } else if (hasConsole && (!config.silent)) {
        console.error(("[Vue warn]: " + msg + trace));
      }
    };

    tip = function (msg, vm) {
      if (hasConsole && (!config.silent)) {
        console.warn("[Vue tip]: " + msg + (
          vm ? generateComponentTrace(vm) : ''
        ));
      }
    };

    formatComponentName = function (vm, includeFile) {
      if (vm.$root === vm) {
        return '<Root>'
      }
      var options = typeof vm === 'function' && vm.cid != null
        ? vm.options
        : vm._isVue
          ? vm.$options || vm.constructor.options
          : vm;
      var name = options.name || options._componentTag;
      var file = options.__file;
      if (!name && file) {
        var match = file.match(/([^/\\]+)\.vue$/);
        name = match && match[1];
      }

      return (
        (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
        (file && includeFile !== false ? (" at " + file) : '')
      )
    };

    var repeat = function (str, n) {
      var res = '';
      while (n) {
        if (n % 2 === 1) { res += str; }
        if (n > 1) { str += str; }
        n >>= 1;
      }
      return res
    };

    generateComponentTrace = function (vm) {
      if (vm._isVue && vm.$parent) {
        var tree = [];
        var currentRecursiveSequence = 0;
        while (vm) {
          if (tree.length > 0) {
            var last = tree[tree.length - 1];
            if (last.constructor === vm.constructor) {
              currentRecursiveSequence++;
              vm = vm.$parent;
              continue
            } else if (currentRecursiveSequence > 0) {
              tree[tree.length - 1] = [last, currentRecursiveSequence];
              currentRecursiveSequence = 0;
            }
          }
          tree.push(vm);
          vm = vm.$parent;
        }
        return '\n\nfound in\n\n' + tree
          .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
              ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
              : formatComponentName(vm))); })
          .join('\n')
      } else {
        return ("\n\n(found in " + (formatComponentName(vm)) + ")")
      }
    };
  }

  /*  */

  var uid = 0;

  /**
   * A dep is an observable that can have multiple
   * directives subscribing to it.
   */
  var Dep = function Dep () {
    this.id = uid++;
    this.subs = [];
  };

  Dep.prototype.addSub = function addSub (sub) {
    this.subs.push(sub);
  };

  Dep.prototype.removeSub = function removeSub (sub) {
    remove(this.subs, sub);
  };

  Dep.prototype.depend = function depend () {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  };

  Dep.prototype.notify = function notify () {
    // stabilize the subscriber list first
    var subs = this.subs.slice();
    if (!config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort(function (a, b) { return a.id - b.id; });
    }
    for (var i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  };

  // The current target watcher being evaluated.
  // This is globally unique because only one watcher
  // can be evaluated at a time.
  Dep.target = null;
  var targetStack = [];

  function pushTarget (target) {
    targetStack.push(target);
    Dep.target = target;
  }

  function popTarget () {
    targetStack.pop();
    Dep.target = targetStack[targetStack.length - 1];
  }

  /*  */

  var VNode = function VNode (
    tag,
    data,
    children,
    text,
    elm,
    context,
    componentOptions,
    asyncFactory
  ) {
    this.tag = tag;
    this.data = data;
    this.children = children;
    this.text = text;
    this.elm = elm;
    this.ns = undefined;
    this.context = context;
    this.fnContext = undefined;
    this.fnOptions = undefined;
    this.fnScopeId = undefined;
    this.key = data && data.key;
    this.componentOptions = componentOptions;
    this.componentInstance = undefined;
    this.parent = undefined;
    this.raw = false;
    this.isStatic = false;
    this.isRootInsert = true;
    this.isComment = false;
    this.isCloned = false;
    this.isOnce = false;
    this.asyncFactory = asyncFactory;
    this.asyncMeta = undefined;
    this.isAsyncPlaceholder = false;
  };

  var prototypeAccessors = { child: { configurable: true } };

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  prototypeAccessors.child.get = function () {
    return this.componentInstance
  };

  Object.defineProperties( VNode.prototype, prototypeAccessors );

  var createEmptyVNode = function (text) {
    if ( text === void 0 ) text = '';

    var node = new VNode();
    node.text = text;
    node.isComment = true;
    return node
  };

  function createTextVNode (val) {
    return new VNode(undefined, undefined, undefined, String(val))
  }

  // optimized shallow clone
  // used for static nodes and slot nodes because they may be reused across
  // multiple renders, cloning them avoids errors when DOM manipulations rely
  // on their elm reference.
  function cloneVNode (vnode) {
    var cloned = new VNode(
      vnode.tag,
      vnode.data,
      // #7975
      // clone children array to avoid mutating original in case of cloning
      // a child.
      vnode.children && vnode.children.slice(),
      vnode.text,
      vnode.elm,
      vnode.context,
      vnode.componentOptions,
      vnode.asyncFactory
    );
    cloned.ns = vnode.ns;
    cloned.isStatic = vnode.isStatic;
    cloned.key = vnode.key;
    cloned.isComment = vnode.isComment;
    cloned.fnContext = vnode.fnContext;
    cloned.fnOptions = vnode.fnOptions;
    cloned.fnScopeId = vnode.fnScopeId;
    cloned.asyncMeta = vnode.asyncMeta;
    cloned.isCloned = true;
    return cloned
  }

  /*
   * not type checking this file because flow doesn't play well with
   * dynamically accessing methods on Array prototype
   */

  var arrayProto = Array.prototype;
  var arrayMethods = Object.create(arrayProto);

  var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ];

  /**
   * Intercept mutating methods and emit events
   */
  methodsToPatch.forEach(function (method) {
    // cache original method
    var original = arrayProto[method];
    def(arrayMethods, method, function mutator () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var result = original.apply(this, args);
      var ob = this.__ob__;
      var inserted;
      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break
        case 'splice':
          inserted = args.slice(2);
          break
      }
      if (inserted) { ob.observeArray(inserted); }
      // notify change
      ob.dep.notify();
      return result
    });
  });

  /*  */

  var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

  /**
   * In some cases we may want to disable observation inside a component's
   * update computation.
   */
  var shouldObserve = true;

  function toggleObserving (value) {
    shouldObserve = value;
  }

  /**
   * Observer class that is attached to each observed
   * object. Once attached, the observer converts the target
   * object's property keys into getter/setters that
   * collect dependencies and dispatch updates.
   */
  var Observer = function Observer (value) {
    this.value = value;
    this.dep = new Dep();
    this.vmCount = 0;
    def(value, '__ob__', this);
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods);
      } else {
        copyAugment(value, arrayMethods, arrayKeys);
      }
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  };

  /**
   * Walk through all properties and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  Observer.prototype.walk = function walk (obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      defineReactive$$1(obj, keys[i]);
    }
  };

  /**
   * Observe a list of Array items.
   */
  Observer.prototype.observeArray = function observeArray (items) {
    for (var i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  };

  // helpers

  /**
   * Augment a target Object or Array by intercepting
   * the prototype chain using __proto__
   */
  function protoAugment (target, src) {
    /* eslint-disable no-proto */
    target.__proto__ = src;
    /* eslint-enable no-proto */
  }

  /**
   * Augment a target Object or Array by defining
   * hidden properties.
   */
  /* istanbul ignore next */
  function copyAugment (target, src, keys) {
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      def(target, key, src[key]);
    }
  }

  /**
   * Attempt to create an observer instance for a value,
   * returns the new observer if successfully observed,
   * or the existing observer if the value already has one.
   */
  function observe (value, asRootData) {
    if (!isObject(value) || value instanceof VNode) {
      return
    }
    var ob;
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
      ob = value.__ob__;
    } else if (
      shouldObserve &&
      !isServerRendering() &&
      (Array.isArray(value) || isPlainObject(value)) &&
      Object.isExtensible(value) &&
      !value._isVue
    ) {
      ob = new Observer(value);
    }
    if (asRootData && ob) {
      ob.vmCount++;
    }
    return ob
  }

  /**
   * Define a reactive property on an Object.
   */
  function defineReactive$$1 (
    obj,
    key,
    val,
    customSetter,
    shallow
  ) {
    var dep = new Dep();

    var property = Object.getOwnPropertyDescriptor(obj, key);
    if (property && property.configurable === false) {
      return
    }

    // cater for pre-defined getter/setters
    var getter = property && property.get;
    var setter = property && property.set;
    if ((!getter || setter) && arguments.length === 2) {
      val = obj[key];
    }

    var childOb = !shallow && observe(val);
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter () {
        var value = getter ? getter.call(obj) : val;
        if (Dep.target) {
          dep.depend();
          if (childOb) {
            childOb.dep.depend();
            if (Array.isArray(value)) {
              dependArray(value);
            }
          }
        }
        return value
      },
      set: function reactiveSetter (newVal) {
        var value = getter ? getter.call(obj) : val;
        /* eslint-disable no-self-compare */
        if (newVal === value || (newVal !== newVal && value !== value)) {
          return
        }
        /* eslint-enable no-self-compare */
        if (customSetter) {
          customSetter();
        }
        // #7981: for accessor properties without setter
        if (getter && !setter) { return }
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        childOb = !shallow && observe(newVal);
        dep.notify();
      }
    });
  }

  /**
   * Set a property on an object. Adds the new property and
   * triggers change notification if the property doesn't
   * already exist.
   */
  function set (target, key, val) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val
    }
    if (key in target && !(key in Object.prototype)) {
      target[key] = val;
      return val
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
        'at runtime - declare it upfront in the data option.'
      );
      return val
    }
    if (!ob) {
      target[key] = val;
      return val
    }
    defineReactive$$1(ob.value, key, val);
    ob.dep.notify();
    return val
  }

  /**
   * Delete a property and trigger change if necessary.
   */
  function del (target, key) {
    if (isUndef(target) || isPrimitive(target)
    ) {
      warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.splice(key, 1);
      return
    }
    var ob = (target).__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
      warn(
        'Avoid deleting properties on a Vue instance or its root $data ' +
        '- just set it to null.'
      );
      return
    }
    if (!hasOwn(target, key)) {
      return
    }
    delete target[key];
    if (!ob) {
      return
    }
    ob.dep.notify();
  }

  /**
   * Collect dependencies on array elements when the array is touched, since
   * we cannot intercept array element access like property getters.
   */
  function dependArray (value) {
    for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
      e = value[i];
      e && e.__ob__ && e.__ob__.dep.depend();
      if (Array.isArray(e)) {
        dependArray(e);
      }
    }
  }

  /*  */

  /**
   * Option overwriting strategies are functions that handle
   * how to merge a parent option value and a child option
   * value into the final value.
   */
  var strats = config.optionMergeStrategies;

  /**
   * Options with restrictions
   */
  {
    strats.el = strats.propsData = function (parent, child, vm, key) {
      if (!vm) {
        warn(
          "option \"" + key + "\" can only be used during instance " +
          'creation with the `new` keyword.'
        );
      }
      return defaultStrat(parent, child)
    };
  }

  /**
   * Helper that recursively merges two data objects together.
   */
  function mergeData (to, from) {
    if (!from) { return to }
    var key, toVal, fromVal;

    var keys = hasSymbol
      ? Reflect.ownKeys(from)
      : Object.keys(from);

    for (var i = 0; i < keys.length; i++) {
      key = keys[i];
      // in case the object is already observed...
      if (key === '__ob__') { continue }
      toVal = to[key];
      fromVal = from[key];
      if (!hasOwn(to, key)) {
        set(to, key, fromVal);
      } else if (
        toVal !== fromVal &&
        isPlainObject(toVal) &&
        isPlainObject(fromVal)
      ) {
        mergeData(toVal, fromVal);
      }
    }
    return to
  }

  /**
   * Data
   */
  function mergeDataOrFn (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      // in a Vue.extend merge, both should be functions
      if (!childVal) {
        return parentVal
      }
      if (!parentVal) {
        return childVal
      }
      // when parentVal & childVal are both present,
      // we need to return a function that returns the
      // merged result of both functions... no need to
      // check if parentVal is a function here because
      // it has to be a function to pass previous merges.
      return function mergedDataFn () {
        return mergeData(
          typeof childVal === 'function' ? childVal.call(this, this) : childVal,
          typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
        )
      }
    } else {
      return function mergedInstanceDataFn () {
        // instance merge
        var instanceData = typeof childVal === 'function'
          ? childVal.call(vm, vm)
          : childVal;
        var defaultData = typeof parentVal === 'function'
          ? parentVal.call(vm, vm)
          : parentVal;
        if (instanceData) {
          return mergeData(instanceData, defaultData)
        } else {
          return defaultData
        }
      }
    }
  }

  strats.data = function (
    parentVal,
    childVal,
    vm
  ) {
    if (!vm) {
      if (childVal && typeof childVal !== 'function') {
        warn(
          'The "data" option should be a function ' +
          'that returns a per-instance value in component ' +
          'definitions.',
          vm
        );

        return parentVal
      }
      return mergeDataOrFn(parentVal, childVal)
    }

    return mergeDataOrFn(parentVal, childVal, vm)
  };

  /**
   * Hooks and props are merged as arrays.
   */
  function mergeHook (
    parentVal,
    childVal
  ) {
    var res = childVal
      ? parentVal
        ? parentVal.concat(childVal)
        : Array.isArray(childVal)
          ? childVal
          : [childVal]
      : parentVal;
    return res
      ? dedupeHooks(res)
      : res
  }

  function dedupeHooks (hooks) {
    var res = [];
    for (var i = 0; i < hooks.length; i++) {
      if (res.indexOf(hooks[i]) === -1) {
        res.push(hooks[i]);
      }
    }
    return res
  }

  LIFECYCLE_HOOKS.forEach(function (hook) {
    strats[hook] = mergeHook;
  });

  /**
   * Assets
   *
   * When a vm is present (instance creation), we need to do
   * a three-way merge between constructor options, instance
   * options and parent options.
   */
  function mergeAssets (
    parentVal,
    childVal,
    vm,
    key
  ) {
    var res = Object.create(parentVal || null);
    if (childVal) {
      assertObjectType(key, childVal, vm);
      return extend(res, childVal)
    } else {
      return res
    }
  }

  ASSET_TYPES.forEach(function (type) {
    strats[type + 's'] = mergeAssets;
  });

  /**
   * Watchers.
   *
   * Watchers hashes should not overwrite one
   * another, so we merge them as arrays.
   */
  strats.watch = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    // work around Firefox's Object.prototype.watch...
    if (parentVal === nativeWatch) { parentVal = undefined; }
    if (childVal === nativeWatch) { childVal = undefined; }
    /* istanbul ignore if */
    if (!childVal) { return Object.create(parentVal || null) }
    {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = {};
    extend(ret, parentVal);
    for (var key$1 in childVal) {
      var parent = ret[key$1];
      var child = childVal[key$1];
      if (parent && !Array.isArray(parent)) {
        parent = [parent];
      }
      ret[key$1] = parent
        ? parent.concat(child)
        : Array.isArray(child) ? child : [child];
    }
    return ret
  };

  /**
   * Other object hashes.
   */
  strats.props =
  strats.methods =
  strats.inject =
  strats.computed = function (
    parentVal,
    childVal,
    vm,
    key
  ) {
    if (childVal && "development" !== 'production') {
      assertObjectType(key, childVal, vm);
    }
    if (!parentVal) { return childVal }
    var ret = Object.create(null);
    extend(ret, parentVal);
    if (childVal) { extend(ret, childVal); }
    return ret
  };
  strats.provide = mergeDataOrFn;

  /**
   * Default strategy.
   */
  var defaultStrat = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };

  /**
   * Validate component names
   */
  function checkComponents (options) {
    for (var key in options.components) {
      validateComponentName(key);
    }
  }

  function validateComponentName (name) {
    if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
      warn(
        'Invalid component name: "' + name + '". Component names ' +
        'should conform to valid custom element name in html5 specification.'
      );
    }
    if (isBuiltInTag(name) || config.isReservedTag(name)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + name
      );
    }
  }

  /**
   * Ensure all props option syntax are normalized into the
   * Object-based format.
   */
  function normalizeProps (options, vm) {
    var props = options.props;
    if (!props) { return }
    var res = {};
    var i, val, name;
    if (Array.isArray(props)) {
      i = props.length;
      while (i--) {
        val = props[i];
        if (typeof val === 'string') {
          name = camelize(val);
          res[name] = { type: null };
        } else {
          warn('props must be strings when using array syntax.');
        }
      }
    } else if (isPlainObject(props)) {
      for (var key in props) {
        val = props[key];
        name = camelize(key);
        res[name] = isPlainObject(val)
          ? val
          : { type: val };
      }
    } else {
      warn(
        "Invalid value for option \"props\": expected an Array or an Object, " +
        "but got " + (toRawType(props)) + ".",
        vm
      );
    }
    options.props = res;
  }

  /**
   * Normalize all injections into Object-based format
   */
  function normalizeInject (options, vm) {
    var inject = options.inject;
    if (!inject) { return }
    var normalized = options.inject = {};
    if (Array.isArray(inject)) {
      for (var i = 0; i < inject.length; i++) {
        normalized[inject[i]] = { from: inject[i] };
      }
    } else if (isPlainObject(inject)) {
      for (var key in inject) {
        var val = inject[key];
        normalized[key] = isPlainObject(val)
          ? extend({ from: key }, val)
          : { from: val };
      }
    } else {
      warn(
        "Invalid value for option \"inject\": expected an Array or an Object, " +
        "but got " + (toRawType(inject)) + ".",
        vm
      );
    }
  }

  /**
   * Normalize raw function directives into object format.
   */
  function normalizeDirectives (options) {
    var dirs = options.directives;
    if (dirs) {
      for (var key in dirs) {
        var def$$1 = dirs[key];
        if (typeof def$$1 === 'function') {
          dirs[key] = { bind: def$$1, update: def$$1 };
        }
      }
    }
  }

  function assertObjectType (name, value, vm) {
    if (!isPlainObject(value)) {
      warn(
        "Invalid value for option \"" + name + "\": expected an Object, " +
        "but got " + (toRawType(value)) + ".",
        vm
      );
    }
  }

  /**
   * Merge two option objects into a new one.
   * Core utility used in both instantiation and inheritance.
   */
  function mergeOptions (
    parent,
    child,
    vm
  ) {
    {
      checkComponents(child);
    }

    if (typeof child === 'function') {
      child = child.options;
    }

    normalizeProps(child, vm);
    normalizeInject(child, vm);
    normalizeDirectives(child);

    // Apply extends and mixins on the child options,
    // but only if it is a raw options object that isn't
    // the result of another mergeOptions call.
    // Only merged options has the _base property.
    if (!child._base) {
      if (child.extends) {
        parent = mergeOptions(parent, child.extends, vm);
      }
      if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
          parent = mergeOptions(parent, child.mixins[i], vm);
        }
      }
    }

    var options = {};
    var key;
    for (key in parent) {
      mergeField(key);
    }
    for (key in child) {
      if (!hasOwn(parent, key)) {
        mergeField(key);
      }
    }
    function mergeField (key) {
      var strat = strats[key] || defaultStrat;
      options[key] = strat(parent[key], child[key], vm, key);
    }
    return options
  }

  /**
   * Resolve an asset.
   * This function is used because child instances need access
   * to assets defined in its ancestor chain.
   */
  function resolveAsset (
    options,
    type,
    id,
    warnMissing
  ) {
    /* istanbul ignore if */
    if (typeof id !== 'string') {
      return
    }
    var assets = options[type];
    // check local registration variations first
    if (hasOwn(assets, id)) { return assets[id] }
    var camelizedId = camelize(id);
    if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
    var PascalCaseId = capitalize(camelizedId);
    if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
    // fallback to prototype chain
    var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
    if (warnMissing && !res) {
      warn(
        'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
        options
      );
    }
    return res
  }

  /*  */



  function validateProp (
    key,
    propOptions,
    propsData,
    vm
  ) {
    var prop = propOptions[key];
    var absent = !hasOwn(propsData, key);
    var value = propsData[key];
    // boolean casting
    var booleanIndex = getTypeIndex(Boolean, prop.type);
    if (booleanIndex > -1) {
      if (absent && !hasOwn(prop, 'default')) {
        value = false;
      } else if (value === '' || value === hyphenate(key)) {
        // only cast empty string / same name to boolean if
        // boolean has higher priority
        var stringIndex = getTypeIndex(String, prop.type);
        if (stringIndex < 0 || booleanIndex < stringIndex) {
          value = true;
        }
      }
    }
    // check default value
    if (value === undefined) {
      value = getPropDefaultValue(vm, prop, key);
      // since the default value is a fresh copy,
      // make sure to observe it.
      var prevShouldObserve = shouldObserve;
      toggleObserving(true);
      observe(value);
      toggleObserving(prevShouldObserve);
    }
    {
      assertProp(prop, key, value, vm, absent);
    }
    return value
  }

  /**
   * Get the default value of a prop.
   */
  function getPropDefaultValue (vm, prop, key) {
    // no default, return undefined
    if (!hasOwn(prop, 'default')) {
      return undefined
    }
    var def = prop.default;
    // warn against non-factory defaults for Object & Array
    if (isObject(def)) {
      warn(
        'Invalid default value for prop "' + key + '": ' +
        'Props with type Object/Array must use a factory function ' +
        'to return the default value.',
        vm
      );
    }
    // the raw prop value was also undefined from previous render,
    // return previous default value to avoid unnecessary watcher trigger
    if (vm && vm.$options.propsData &&
      vm.$options.propsData[key] === undefined &&
      vm._props[key] !== undefined
    ) {
      return vm._props[key]
    }
    // call factory function for non-Function types
    // a value is Function if its prototype is function even across different execution context
    return typeof def === 'function' && getType(prop.type) !== 'Function'
      ? def.call(vm)
      : def
  }

  /**
   * Assert whether a prop is valid.
   */
  function assertProp (
    prop,
    name,
    value,
    vm,
    absent
  ) {
    if (prop.required && absent) {
      warn(
        'Missing required prop: "' + name + '"',
        vm
      );
      return
    }
    if (value == null && !prop.required) {
      return
    }
    var type = prop.type;
    var valid = !type || type === true;
    var expectedTypes = [];
    if (type) {
      if (!Array.isArray(type)) {
        type = [type];
      }
      for (var i = 0; i < type.length && !valid; i++) {
        var assertedType = assertType(value, type[i]);
        expectedTypes.push(assertedType.expectedType || '');
        valid = assertedType.valid;
      }
    }

    if (!valid) {
      warn(
        getInvalidTypeMessage(name, value, expectedTypes),
        vm
      );
      return
    }
    var validator = prop.validator;
    if (validator) {
      if (!validator(value)) {
        warn(
          'Invalid prop: custom validator check failed for prop "' + name + '".',
          vm
        );
      }
    }
  }

  var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

  function assertType (value, type) {
    var valid;
    var expectedType = getType(type);
    if (simpleCheckRE.test(expectedType)) {
      var t = typeof value;
      valid = t === expectedType.toLowerCase();
      // for primitive wrapper objects
      if (!valid && t === 'object') {
        valid = value instanceof type;
      }
    } else if (expectedType === 'Object') {
      valid = isPlainObject(value);
    } else if (expectedType === 'Array') {
      valid = Array.isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid: valid,
      expectedType: expectedType
    }
  }

  /**
   * Use function string name to check built-in types,
   * because a simple equality check will fail when running
   * across different vms / iframes.
   */
  function getType (fn) {
    var match = fn && fn.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ''
  }

  function isSameType (a, b) {
    return getType(a) === getType(b)
  }

  function getTypeIndex (type, expectedTypes) {
    if (!Array.isArray(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1
    }
    for (var i = 0, len = expectedTypes.length; i < len; i++) {
      if (isSameType(expectedTypes[i], type)) {
        return i
      }
    }
    return -1
  }

  function getInvalidTypeMessage (name, value, expectedTypes) {
    var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', '));
    var expectedType = expectedTypes[0];
    var receivedType = toRawType(value);
    var expectedValue = styleValue(value, expectedType);
    var receivedValue = styleValue(value, receivedType);
    // check if we need to specify expected value
    if (expectedTypes.length === 1 &&
        isExplicable(expectedType) &&
        !isBoolean(expectedType, receivedType)) {
      message += " with value " + expectedValue;
    }
    message += ", got " + receivedType + " ";
    // check if we need to specify received value
    if (isExplicable(receivedType)) {
      message += "with value " + receivedValue + ".";
    }
    return message
  }

  function styleValue (value, type) {
    if (type === 'String') {
      return ("\"" + value + "\"")
    } else if (type === 'Number') {
      return ("" + (Number(value)))
    } else {
      return ("" + value)
    }
  }

  function isExplicable (value) {
    var explicitTypes = ['string', 'number', 'boolean'];
    return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
  }

  function isBoolean () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
  }

  /*  */

  function handleError (err, vm, info) {
    // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
    // See: https://github.com/vuejs/vuex/issues/1505
    pushTarget();
    try {
      if (vm) {
        var cur = vm;
        while ((cur = cur.$parent)) {
          var hooks = cur.$options.errorCaptured;
          if (hooks) {
            for (var i = 0; i < hooks.length; i++) {
              try {
                var capture = hooks[i].call(cur, err, vm, info) === false;
                if (capture) { return }
              } catch (e) {
                globalHandleError(e, cur, 'errorCaptured hook');
              }
            }
          }
        }
      }
      globalHandleError(err, vm, info);
    } finally {
      popTarget();
    }
  }

  function invokeWithErrorHandling (
    handler,
    context,
    args,
    vm,
    info
  ) {
    var res;
    try {
      res = args ? handler.apply(context, args) : handler.call(context);
      if (res && !res._isVue && isPromise(res) && !res._handled) {
        res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
        // issue #9511
        // avoid catch triggering multiple times when nested calls
        res._handled = true;
      }
    } catch (e) {
      handleError(e, vm, info);
    }
    return res
  }

  function globalHandleError (err, vm, info) {
    if (config.errorHandler) {
      try {
        return config.errorHandler.call(null, err, vm, info)
      } catch (e) {
        // if the user intentionally throws the original error in the handler,
        // do not log it twice
        if (e !== err) {
          logError(e, null, 'config.errorHandler');
        }
      }
    }
    logError(err, vm, info);
  }

  function logError (err, vm, info) {
    {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if ((inBrowser || inWeex) && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }

  /*  */

  var isUsingMicroTask = false;

  var callbacks = [];
  var pending = false;

  function flushCallbacks () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // Here we have async deferring wrappers using microtasks.
  // In 2.5 we used (macro) tasks (in combination with microtasks).
  // However, it has subtle problems when state is changed right before repaint
  // (e.g. #6813, out-in transitions).
  // Also, using (macro) tasks in event handler would cause some weird behaviors
  // that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
  // So we now use microtasks everywhere, again.
  // A major drawback of this tradeoff is that there are some scenarios
  // where microtasks have too high a priority and fire in between supposedly
  // sequential events (e.g. #4521, #6690, which have workarounds)
  // or even between bubbling of the same event (#6566).
  var timerFunc;

  // The nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore next, $flow-disable-line */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    timerFunc = function () {
      p.then(flushCallbacks);
      // In problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
    isUsingMicroTask = true;
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // Use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    // (#6466 MutationObserver is unreliable in IE11)
    var counter = 1;
    var observer = new MutationObserver(flushCallbacks);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
    isUsingMicroTask = true;
  } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
    // Fallback to setImmediate.
    // Techinically it leverages the (macro) task queue,
    // but it is still a better choice than setTimeout.
    timerFunc = function () {
      setImmediate(flushCallbacks);
    };
  } else {
    // Fallback to setTimeout.
    timerFunc = function () {
      setTimeout(flushCallbacks, 0);
    };
  }

  function nextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }

  /*  */

  var mark;
  var measure;

  {
    var perf = inBrowser && window.performance;
    /* istanbul ignore if */
    if (
      perf &&
      perf.mark &&
      perf.measure &&
      perf.clearMarks &&
      perf.clearMeasures
    ) {
      mark = function (tag) { return perf.mark(tag); };
      measure = function (name, startTag, endTag) {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
        // perf.clearMeasures(name)
      };
    }
  }

  /* not type checking this file because flow doesn't play well with Proxy */

  var initProxy;

  {
    var allowedGlobals = makeMap(
      'Infinity,undefined,NaN,isFinite,isNaN,' +
      'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
      'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
      'require' // for Webpack/Browserify
    );

    var warnNonPresent = function (target, key) {
      warn(
        "Property or method \"" + key + "\" is not defined on the instance but " +
        'referenced during render. Make sure that this property is reactive, ' +
        'either in the data option, or for class-based components, by ' +
        'initializing the property. ' +
        'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
        target
      );
    };

    var warnReservedPrefix = function (target, key) {
      warn(
        "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
        'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
        'prevent conflicts with Vue internals' +
        'See: https://vuejs.org/v2/api/#data',
        target
      );
    };

    var hasProxy =
      typeof Proxy !== 'undefined' && isNative(Proxy);

    if (hasProxy) {
      var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
      config.keyCodes = new Proxy(config.keyCodes, {
        set: function set (target, key, value) {
          if (isBuiltInModifier(key)) {
            warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
            return false
          } else {
            target[key] = value;
            return true
          }
        }
      });
    }

    var hasHandler = {
      has: function has (target, key) {
        var has = key in target;
        var isAllowed = allowedGlobals(key) ||
          (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
        if (!has && !isAllowed) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return has || !isAllowed
      }
    };

    var getHandler = {
      get: function get (target, key) {
        if (typeof key === 'string' && !(key in target)) {
          if (key in target.$data) { warnReservedPrefix(target, key); }
          else { warnNonPresent(target, key); }
        }
        return target[key]
      }
    };

    initProxy = function initProxy (vm) {
      if (hasProxy) {
        // determine which proxy handler to use
        var options = vm.$options;
        var handlers = options.render && options.render._withStripped
          ? getHandler
          : hasHandler;
        vm._renderProxy = new Proxy(vm, handlers);
      } else {
        vm._renderProxy = vm;
      }
    };
  }

  /*  */

  var seenObjects = new _Set();

  /**
   * Recursively traverse an object to evoke all converted
   * getters, so that every nested property inside the object
   * is collected as a "deep" dependency.
   */
  function traverse (val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
  }

  function _traverse (val, seen) {
    var i, keys;
    var isA = Array.isArray(val);
    if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
      return
    }
    if (val.__ob__) {
      var depId = val.__ob__.dep.id;
      if (seen.has(depId)) {
        return
      }
      seen.add(depId);
    }
    if (isA) {
      i = val.length;
      while (i--) { _traverse(val[i], seen); }
    } else {
      keys = Object.keys(val);
      i = keys.length;
      while (i--) { _traverse(val[keys[i]], seen); }
    }
  }

  /*  */

  var normalizeEvent = cached(function (name) {
    var passive = name.charAt(0) === '&';
    name = passive ? name.slice(1) : name;
    var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
    name = once$$1 ? name.slice(1) : name;
    var capture = name.charAt(0) === '!';
    name = capture ? name.slice(1) : name;
    return {
      name: name,
      once: once$$1,
      capture: capture,
      passive: passive
    }
  });

  function createFnInvoker (fns, vm) {
    function invoker () {
      var arguments$1 = arguments;

      var fns = invoker.fns;
      if (Array.isArray(fns)) {
        var cloned = fns.slice();
        for (var i = 0; i < cloned.length; i++) {
          invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
        }
      } else {
        // return handler return value for single handlers
        return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
      }
    }
    invoker.fns = fns;
    return invoker
  }

  function updateListeners (
    on,
    oldOn,
    add,
    remove$$1,
    createOnceHandler,
    vm
  ) {
    var name, def$$1, cur, old, event;
    for (name in on) {
      def$$1 = cur = on[name];
      old = oldOn[name];
      event = normalizeEvent(name);
      if (isUndef(cur)) {
        warn(
          "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
          vm
        );
      } else if (isUndef(old)) {
        if (isUndef(cur.fns)) {
          cur = on[name] = createFnInvoker(cur, vm);
        }
        if (isTrue(event.once)) {
          cur = on[name] = createOnceHandler(event.name, cur, event.capture);
        }
        add(event.name, cur, event.capture, event.passive, event.params);
      } else if (cur !== old) {
        old.fns = cur;
        on[name] = old;
      }
    }
    for (name in oldOn) {
      if (isUndef(on[name])) {
        event = normalizeEvent(name);
        remove$$1(event.name, oldOn[name], event.capture);
      }
    }
  }

  /*  */

  function mergeVNodeHook (def, hookKey, hook) {
    if (def instanceof VNode) {
      def = def.data.hook || (def.data.hook = {});
    }
    var invoker;
    var oldHook = def[hookKey];

    function wrappedHook () {
      hook.apply(this, arguments);
      // important: remove merged hook to ensure it's called only once
      // and prevent memory leak
      remove(invoker.fns, wrappedHook);
    }

    if (isUndef(oldHook)) {
      // no existing hook
      invoker = createFnInvoker([wrappedHook]);
    } else {
      /* istanbul ignore if */
      if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
        // already a merged invoker
        invoker = oldHook;
        invoker.fns.push(wrappedHook);
      } else {
        // existing plain hook
        invoker = createFnInvoker([oldHook, wrappedHook]);
      }
    }

    invoker.merged = true;
    def[hookKey] = invoker;
  }

  /*  */

  function extractPropsFromVNodeData (
    data,
    Ctor,
    tag
  ) {
    // we are only extracting raw values here.
    // validation and default values are handled in the child
    // component itself.
    var propOptions = Ctor.options.props;
    if (isUndef(propOptions)) {
      return
    }
    var res = {};
    var attrs = data.attrs;
    var props = data.props;
    if (isDef(attrs) || isDef(props)) {
      for (var key in propOptions) {
        var altKey = hyphenate(key);
        {
          var keyInLowerCase = key.toLowerCase();
          if (
            key !== keyInLowerCase &&
            attrs && hasOwn(attrs, keyInLowerCase)
          ) {
            tip(
              "Prop \"" + keyInLowerCase + "\" is passed to component " +
              (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
              " \"" + key + "\". " +
              "Note that HTML attributes are case-insensitive and camelCased " +
              "props need to use their kebab-case equivalents when using in-DOM " +
              "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
            );
          }
        }
        checkProp(res, props, key, altKey, true) ||
        checkProp(res, attrs, key, altKey, false);
      }
    }
    return res
  }

  function checkProp (
    res,
    hash,
    key,
    altKey,
    preserve
  ) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {
        res[key] = hash[key];
        if (!preserve) {
          delete hash[key];
        }
        return true
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        if (!preserve) {
          delete hash[altKey];
        }
        return true
      }
    }
    return false
  }

  /*  */

  // The template compiler attempts to minimize the need for normalization by
  // statically analyzing the template at compile time.
  //
  // For plain HTML markup, normalization can be completely skipped because the
  // generated render function is guaranteed to return Array<VNode>. There are
  // two cases where extra normalization is needed:

  // 1. When the children contains components - because a functional component
  // may return an Array instead of a single root. In this case, just a simple
  // normalization is needed - if any child is an Array, we flatten the whole
  // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
  // because functional components already normalize their own children.
  function simpleNormalizeChildren (children) {
    for (var i = 0; i < children.length; i++) {
      if (Array.isArray(children[i])) {
        return Array.prototype.concat.apply([], children)
      }
    }
    return children
  }

  // 2. When the children contains constructs that always generated nested Arrays,
  // e.g. <template>, <slot>, v-for, or when the children is provided by user
  // with hand-written render functions / JSX. In such cases a full normalization
  // is needed to cater to all possible types of children values.
  function normalizeChildren (children) {
    return isPrimitive(children)
      ? [createTextVNode(children)]
      : Array.isArray(children)
        ? normalizeArrayChildren(children)
        : undefined
  }

  function isTextNode (node) {
    return isDef(node) && isDef(node.text) && isFalse(node.isComment)
  }

  function normalizeArrayChildren (children, nestedIndex) {
    var res = [];
    var i, c, lastIndex, last;
    for (i = 0; i < children.length; i++) {
      c = children[i];
      if (isUndef(c) || typeof c === 'boolean') { continue }
      lastIndex = res.length - 1;
      last = res[lastIndex];
      //  nested
      if (Array.isArray(c)) {
        if (c.length > 0) {
          c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
          // merge adjacent text nodes
          if (isTextNode(c[0]) && isTextNode(last)) {
            res[lastIndex] = createTextVNode(last.text + (c[0]).text);
            c.shift();
          }
          res.push.apply(res, c);
        }
      } else if (isPrimitive(c)) {
        if (isTextNode(last)) {
          // merge adjacent text nodes
          // this is necessary for SSR hydration because text nodes are
          // essentially merged when rendered to HTML strings
          res[lastIndex] = createTextVNode(last.text + c);
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c));
        }
      } else {
        if (isTextNode(c) && isTextNode(last)) {
          // merge adjacent text nodes
          res[lastIndex] = createTextVNode(last.text + c.text);
        } else {
          // default key for nested array children (likely generated by v-for)
          if (isTrue(children._isVList) &&
            isDef(c.tag) &&
            isUndef(c.key) &&
            isDef(nestedIndex)) {
            c.key = "__vlist" + nestedIndex + "_" + i + "__";
          }
          res.push(c);
        }
      }
    }
    return res
  }

  /*  */

  function initProvide (vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function'
        ? provide.call(vm)
        : provide;
    }
  }

  function initInjections (vm) {
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      toggleObserving(false);
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive$$1(vm, key, result[key], function () {
            warn(
              "Avoid mutating an injected value directly since the changes will be " +
              "overwritten whenever the provided component re-renders. " +
              "injection being mutated: \"" + key + "\"",
              vm
            );
          });
        }
      });
      toggleObserving(true);
    }
  }

  function resolveInject (inject, vm) {
    if (inject) {
      // inject is :any because flow is not smart enough to figure out cached
      var result = Object.create(null);
      var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        // #6574 in case the inject object is observed...
        if (key === '__ob__') { continue }
        var provideKey = inject[key].from;
        var source = vm;
        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break
          }
          source = source.$parent;
        }
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function'
              ? provideDefault.call(vm)
              : provideDefault;
          } else {
            warn(("Injection \"" + key + "\" not found"), vm);
          }
        }
      }
      return result
    }
  }

  /*  */



  /**
   * Runtime helper for resolving raw children VNodes into a slot object.
   */
  function resolveSlots (
    children,
    context
  ) {
    if (!children || !children.length) {
      return {}
    }
    var slots = {};
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var data = child.data;
      // remove slot attribute if the node is resolved as a Vue slot node
      if (data && data.attrs && data.attrs.slot) {
        delete data.attrs.slot;
      }
      // named slots should only be respected if the vnode was rendered in the
      // same context.
      if ((child.context === context || child.fnContext === context) &&
        data && data.slot != null
      ) {
        var name = data.slot;
        var slot = (slots[name] || (slots[name] = []));
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }
    // ignore slots that contains only whitespace
    for (var name$1 in slots) {
      if (slots[name$1].every(isWhitespace)) {
        delete slots[name$1];
      }
    }
    return slots
  }

  function isWhitespace (node) {
    return (node.isComment && !node.asyncFactory) || node.text === ' '
  }

  /*  */

  function normalizeScopedSlots (
    slots,
    normalSlots,
    prevSlots
  ) {
    var res;
    var hasNormalSlots = Object.keys(normalSlots).length > 0;
    var isStable = slots ? !!slots.$stable : !hasNormalSlots;
    var key = slots && slots.$key;
    if (!slots) {
      res = {};
    } else if (slots._normalized) {
      // fast path 1: child component re-render only, parent did not change
      return slots._normalized
    } else if (
      isStable &&
      prevSlots &&
      prevSlots !== emptyObject &&
      key === prevSlots.$key &&
      !hasNormalSlots &&
      !prevSlots.$hasNormal
    ) {
      // fast path 2: stable scoped slots w/ no normal slots to proxy,
      // only need to normalize once
      return prevSlots
    } else {
      res = {};
      for (var key$1 in slots) {
        if (slots[key$1] && key$1[0] !== '$') {
          res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
        }
      }
    }
    // expose normal slots on scopedSlots
    for (var key$2 in normalSlots) {
      if (!(key$2 in res)) {
        res[key$2] = proxyNormalSlot(normalSlots, key$2);
      }
    }
    // avoriaz seems to mock a non-extensible $scopedSlots object
    // and when that is passed down this would cause an error
    if (slots && Object.isExtensible(slots)) {
      (slots)._normalized = res;
    }
    def(res, '$stable', isStable);
    def(res, '$key', key);
    def(res, '$hasNormal', hasNormalSlots);
    return res
  }

  function normalizeScopedSlot(normalSlots, key, fn) {
    var normalized = function () {
      var res = arguments.length ? fn.apply(null, arguments) : fn({});
      res = res && typeof res === 'object' && !Array.isArray(res)
        ? [res] // single vnode
        : normalizeChildren(res);
      return res && (
        res.length === 0 ||
        (res.length === 1 && res[0].isComment) // #9658
      ) ? undefined
        : res
    };
    // this is a slot using the new v-slot syntax without scope. although it is
    // compiled as a scoped slot, render fn users would expect it to be present
    // on this.$slots because the usage is semantically a normal slot.
    if (fn.proxy) {
      Object.defineProperty(normalSlots, key, {
        get: normalized,
        enumerable: true,
        configurable: true
      });
    }
    return normalized
  }

  function proxyNormalSlot(slots, key) {
    return function () { return slots[key]; }
  }

  /*  */

  /**
   * Runtime helper for rendering v-for lists.
   */
  function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key;
    if (Array.isArray(val) || typeof val === 'string') {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i);
      }
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i);
      }
    } else if (isObject(val)) {
      if (hasSymbol && val[Symbol.iterator]) {
        ret = [];
        var iterator = val[Symbol.iterator]();
        var result = iterator.next();
        while (!result.done) {
          ret.push(render(result.value, ret.length));
          result = iterator.next();
        }
      } else {
        keys = Object.keys(val);
        ret = new Array(keys.length);
        for (i = 0, l = keys.length; i < l; i++) {
          key = keys[i];
          ret[i] = render(val[key], key, i);
        }
      }
    }
    if (!isDef(ret)) {
      ret = [];
    }
    (ret)._isVList = true;
    return ret
  }

  /*  */

  /**
   * Runtime helper for rendering <slot>
   */
  function renderSlot (
    name,
    fallback,
    props,
    bindObject
  ) {
    var scopedSlotFn = this.$scopedSlots[name];
    var nodes;
    if (scopedSlotFn) { // scoped slot
      props = props || {};
      if (bindObject) {
        if (!isObject(bindObject)) {
          warn(
            'slot v-bind without argument expects an Object',
            this
          );
        }
        props = extend(extend({}, bindObject), props);
      }
      nodes = scopedSlotFn(props) || fallback;
    } else {
      nodes = this.$slots[name] || fallback;
    }

    var target = props && props.slot;
    if (target) {
      return this.$createElement('template', { slot: target }, nodes)
    } else {
      return nodes
    }
  }

  /*  */

  /**
   * Runtime helper for resolving filters
   */
  function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
  }

  /*  */

  function isKeyNotMatch (expect, actual) {
    if (Array.isArray(expect)) {
      return expect.indexOf(actual) === -1
    } else {
      return expect !== actual
    }
  }

  /**
   * Runtime helper for checking keyCodes from config.
   * exposed as Vue.prototype._k
   * passing in eventKeyName as last argument separately for backwards compat
   */
  function checkKeyCodes (
    eventKeyCode,
    key,
    builtInKeyCode,
    eventKeyName,
    builtInKeyName
  ) {
    var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
    if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
      return isKeyNotMatch(builtInKeyName, eventKeyName)
    } else if (mappedKeyCode) {
      return isKeyNotMatch(mappedKeyCode, eventKeyCode)
    } else if (eventKeyName) {
      return hyphenate(eventKeyName) !== key
    }
  }

  /*  */

  /**
   * Runtime helper for merging v-bind="object" into a VNode's data.
   */
  function bindObjectProps (
    data,
    tag,
    value,
    asProp,
    isSync
  ) {
    if (value) {
      if (!isObject(value)) {
        warn(
          'v-bind without argument expects an Object or Array value',
          this
        );
      } else {
        if (Array.isArray(value)) {
          value = toObject(value);
        }
        var hash;
        var loop = function ( key ) {
          if (
            key === 'class' ||
            key === 'style' ||
            isReservedAttribute(key)
          ) {
            hash = data;
          } else {
            var type = data.attrs && data.attrs.type;
            hash = asProp || config.mustUseProp(tag, type, key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {});
          }
          var camelizedKey = camelize(key);
          var hyphenatedKey = hyphenate(key);
          if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
            hash[key] = value[key];

            if (isSync) {
              var on = data.on || (data.on = {});
              on[("update:" + key)] = function ($event) {
                value[key] = $event;
              };
            }
          }
        };

        for (var key in value) loop( key );
      }
    }
    return data
  }

  /*  */

  /**
   * Runtime helper for rendering static trees.
   */
  function renderStatic (
    index,
    isInFor
  ) {
    var cached = this._staticTrees || (this._staticTrees = []);
    var tree = cached[index];
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree.
    if (tree && !isInFor) {
      return tree
    }
    // otherwise, render a fresh tree.
    tree = cached[index] = this.$options.staticRenderFns[index].call(
      this._renderProxy,
      null,
      this // for render fns generated for functional component templates
    );
    markStatic(tree, ("__static__" + index), false);
    return tree
  }

  /**
   * Runtime helper for v-once.
   * Effectively it means marking the node as static with a unique key.
   */
  function markOnce (
    tree,
    index,
    key
  ) {
    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
    return tree
  }

  function markStatic (
    tree,
    key,
    isOnce
  ) {
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        if (tree[i] && typeof tree[i] !== 'string') {
          markStaticNode(tree[i], (key + "_" + i), isOnce);
        }
      }
    } else {
      markStaticNode(tree, key, isOnce);
    }
  }

  function markStaticNode (node, key, isOnce) {
    node.isStatic = true;
    node.key = key;
    node.isOnce = isOnce;
  }

  /*  */

  function bindObjectListeners (data, value) {
    if (value) {
      if (!isPlainObject(value)) {
        warn(
          'v-on without argument expects an Object value',
          this
        );
      } else {
        var on = data.on = data.on ? extend({}, data.on) : {};
        for (var key in value) {
          var existing = on[key];
          var ours = value[key];
          on[key] = existing ? [].concat(existing, ours) : ours;
        }
      }
    }
    return data
  }

  /*  */

  function resolveScopedSlots (
    fns, // see flow/vnode
    res,
    // the following are added in 2.6
    hasDynamicKeys,
    contentHashKey
  ) {
    res = res || { $stable: !hasDynamicKeys };
    for (var i = 0; i < fns.length; i++) {
      var slot = fns[i];
      if (Array.isArray(slot)) {
        resolveScopedSlots(slot, res, hasDynamicKeys);
      } else if (slot) {
        // marker for reverse proxying v-slot without scope on this.$slots
        if (slot.proxy) {
          slot.fn.proxy = true;
        }
        res[slot.key] = slot.fn;
      }
    }
    if (contentHashKey) {
      (res).$key = contentHashKey;
    }
    return res
  }

  /*  */

  function bindDynamicKeys (baseObj, values) {
    for (var i = 0; i < values.length; i += 2) {
      var key = values[i];
      if (typeof key === 'string' && key) {
        baseObj[values[i]] = values[i + 1];
      } else if (key !== '' && key !== null) {
        // null is a speical value for explicitly removing a binding
        warn(
          ("Invalid value for dynamic directive argument (expected string or null): " + key),
          this
        );
      }
    }
    return baseObj
  }

  // helper to dynamically append modifier runtime markers to event names.
  // ensure only append when value is already string, otherwise it will be cast
  // to string and cause the type check to miss.
  function prependModifier (value, symbol) {
    return typeof value === 'string' ? symbol + value : value
  }

  /*  */

  function installRenderHelpers (target) {
    target._o = markOnce;
    target._n = toNumber;
    target._s = toString;
    target._l = renderList;
    target._t = renderSlot;
    target._q = looseEqual;
    target._i = looseIndexOf;
    target._m = renderStatic;
    target._f = resolveFilter;
    target._k = checkKeyCodes;
    target._b = bindObjectProps;
    target._v = createTextVNode;
    target._e = createEmptyVNode;
    target._u = resolveScopedSlots;
    target._g = bindObjectListeners;
    target._d = bindDynamicKeys;
    target._p = prependModifier;
  }

  /*  */

  function FunctionalRenderContext (
    data,
    props,
    children,
    parent,
    Ctor
  ) {
    var this$1 = this;

    var options = Ctor.options;
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    var contextVm;
    if (hasOwn(parent, '_uid')) {
      contextVm = Object.create(parent);
      // $flow-disable-line
      contextVm._original = parent;
    } else {
      // the context vm passed in is a functional context as well.
      // in this case we want to make sure we are able to get a hold to the
      // real context instance.
      contextVm = parent;
      // $flow-disable-line
      parent = parent._original;
    }
    var isCompiled = isTrue(options._compiled);
    var needNormalization = !isCompiled;

    this.data = data;
    this.props = props;
    this.children = children;
    this.parent = parent;
    this.listeners = data.on || emptyObject;
    this.injections = resolveInject(options.inject, parent);
    this.slots = function () {
      if (!this$1.$slots) {
        normalizeScopedSlots(
          data.scopedSlots,
          this$1.$slots = resolveSlots(children, parent)
        );
      }
      return this$1.$slots
    };

    Object.defineProperty(this, 'scopedSlots', ({
      enumerable: true,
      get: function get () {
        return normalizeScopedSlots(data.scopedSlots, this.slots())
      }
    }));

    // support for compiled functional template
    if (isCompiled) {
      // exposing $options for renderStatic()
      this.$options = options;
      // pre-resolve slots for renderSlot()
      this.$slots = this.slots();
      this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
    }

    if (options._scopeId) {
      this._c = function (a, b, c, d) {
        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
        if (vnode && !Array.isArray(vnode)) {
          vnode.fnScopeId = options._scopeId;
          vnode.fnContext = parent;
        }
        return vnode
      };
    } else {
      this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
    }
  }

  installRenderHelpers(FunctionalRenderContext.prototype);

  function createFunctionalComponent (
    Ctor,
    propsData,
    data,
    contextVm,
    children
  ) {
    var options = Ctor.options;
    var props = {};
    var propOptions = options.props;
    if (isDef(propOptions)) {
      for (var key in propOptions) {
        props[key] = validateProp(key, propOptions, propsData || emptyObject);
      }
    } else {
      if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
      if (isDef(data.props)) { mergeProps(props, data.props); }
    }

    var renderContext = new FunctionalRenderContext(
      data,
      props,
      children,
      contextVm,
      Ctor
    );

    var vnode = options.render.call(null, renderContext._c, renderContext);

    if (vnode instanceof VNode) {
      return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
    } else if (Array.isArray(vnode)) {
      var vnodes = normalizeChildren(vnode) || [];
      var res = new Array(vnodes.length);
      for (var i = 0; i < vnodes.length; i++) {
        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
      }
      return res
    }
  }

  function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
    // #7817 clone node before setting fnContext, otherwise if the node is reused
    // (e.g. it was from a cached normal slot) the fnContext causes named slots
    // that should not be matched to match.
    var clone = cloneVNode(vnode);
    clone.fnContext = contextVm;
    clone.fnOptions = options;
    {
      (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
    }
    if (data.slot) {
      (clone.data || (clone.data = {})).slot = data.slot;
    }
    return clone
  }

  function mergeProps (to, from) {
    for (var key in from) {
      to[camelize(key)] = from[key];
    }
  }

  /*  */

  /*  */

  /*  */

  /*  */

  // inline hooks to be invoked on component VNodes during patch
  var componentVNodeHooks = {
    init: function init (vnode, hydrating) {
      if (
        vnode.componentInstance &&
        !vnode.componentInstance._isDestroyed &&
        vnode.data.keepAlive
      ) {
        // kept-alive components, treat as a patch
        var mountedNode = vnode; // work around flow
        componentVNodeHooks.prepatch(mountedNode, mountedNode);
      } else {
        var child = vnode.componentInstance = createComponentInstanceForVnode(
          vnode,
          activeInstance
        );
        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
      }
    },

    prepatch: function prepatch (oldVnode, vnode) {
      var options = vnode.componentOptions;
      var child = vnode.componentInstance = oldVnode.componentInstance;
      updateChildComponent(
        child,
        options.propsData, // updated props
        options.listeners, // updated listeners
        vnode, // new parent vnode
        options.children // new children
      );
    },

    insert: function insert (vnode) {
      var context = vnode.context;
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isMounted) {
        componentInstance._isMounted = true;
        callHook(componentInstance, 'mounted');
      }
      if (vnode.data.keepAlive) {
        if (context._isMounted) {
          // vue-router#1212
          // During updates, a kept-alive component's child components may
          // change, so directly walking the tree here may call activated hooks
          // on incorrect children. Instead we push them into a queue which will
          // be processed after the whole patch process ended.
          queueActivatedComponent(componentInstance);
        } else {
          activateChildComponent(componentInstance, true /* direct */);
        }
      }
    },

    destroy: function destroy (vnode) {
      var componentInstance = vnode.componentInstance;
      if (!componentInstance._isDestroyed) {
        if (!vnode.data.keepAlive) {
          componentInstance.$destroy();
        } else {
          deactivateChildComponent(componentInstance, true /* direct */);
        }
      }
    }
  };

  var hooksToMerge = Object.keys(componentVNodeHooks);

  function createComponent (
    Ctor,
    data,
    context,
    children,
    tag
  ) {
    if (isUndef(Ctor)) {
      return
    }

    var baseCtor = context.$options._base;

    // plain options object: turn it into a constructor
    if (isObject(Ctor)) {
      Ctor = baseCtor.extend(Ctor);
    }

    // if at this stage it's not a constructor or an async component factory,
    // reject.
    if (typeof Ctor !== 'function') {
      {
        warn(("Invalid Component definition: " + (String(Ctor))), context);
      }
      return
    }

    // async component
    var asyncFactory;
    if (isUndef(Ctor.cid)) {
      asyncFactory = Ctor;
      Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
      if (Ctor === undefined) {
        // return a placeholder node for async component, which is rendered
        // as a comment node but preserves all the raw information for the node.
        // the information will be used for async server-rendering and hydration.
        return createAsyncPlaceholder(
          asyncFactory,
          data,
          context,
          children,
          tag
        )
      }
    }

    data = data || {};

    // resolve constructor options in case global mixins are applied after
    // component constructor creation
    resolveConstructorOptions(Ctor);

    // transform component v-model data into props & events
    if (isDef(data.model)) {
      transformModel(Ctor.options, data);
    }

    // extract props
    var propsData = extractPropsFromVNodeData(data, Ctor, tag);

    // functional component
    if (isTrue(Ctor.options.functional)) {
      return createFunctionalComponent(Ctor, propsData, data, context, children)
    }

    // extract listeners, since these needs to be treated as
    // child component listeners instead of DOM listeners
    var listeners = data.on;
    // replace with listeners with .native modifier
    // so it gets processed during parent component patch.
    data.on = data.nativeOn;

    if (isTrue(Ctor.options.abstract)) {
      // abstract components do not keep anything
      // other than props & listeners & slot

      // work around flow
      var slot = data.slot;
      data = {};
      if (slot) {
        data.slot = slot;
      }
    }

    // install component management hooks onto the placeholder node
    installComponentHooks(data);

    // return a placeholder vnode
    var name = Ctor.options.name || tag;
    var vnode = new VNode(
      ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
      data, undefined, undefined, undefined, context,
      { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
      asyncFactory
    );

    return vnode
  }

  function createComponentInstanceForVnode (
    vnode, // we know it's MountedComponentVNode but flow doesn't
    parent // activeInstance in lifecycle state
  ) {
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    };
    // check inline-template render functions
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    return new vnode.componentOptions.Ctor(options)
  }

  function installComponentHooks (data) {
    var hooks = data.hook || (data.hook = {});
    for (var i = 0; i < hooksToMerge.length; i++) {
      var key = hooksToMerge[i];
      var existing = hooks[key];
      var toMerge = componentVNodeHooks[key];
      if (existing !== toMerge && !(existing && existing._merged)) {
        hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
      }
    }
  }

  function mergeHook$1 (f1, f2) {
    var merged = function (a, b) {
      // flow complains about extra args which is why we use any
      f1(a, b);
      f2(a, b);
    };
    merged._merged = true;
    return merged
  }

  // transform component v-model info (value and callback) into
  // prop and event handler respectively.
  function transformModel (options, data) {
    var prop = (options.model && options.model.prop) || 'value';
    var event = (options.model && options.model.event) || 'input'
    ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
    var on = data.on || (data.on = {});
    var existing = on[event];
    var callback = data.model.callback;
    if (isDef(existing)) {
      if (
        Array.isArray(existing)
          ? existing.indexOf(callback) === -1
          : existing !== callback
      ) {
        on[event] = [callback].concat(existing);
      }
    } else {
      on[event] = callback;
    }
  }

  /*  */

  var SIMPLE_NORMALIZE = 1;
  var ALWAYS_NORMALIZE = 2;

  // wrapper function for providing a more flexible interface
  // without getting yelled at by flow
  function createElement (
    context,
    tag,
    data,
    children,
    normalizationType,
    alwaysNormalize
  ) {
    if (Array.isArray(data) || isPrimitive(data)) {
      normalizationType = children;
      children = data;
      data = undefined;
    }
    if (isTrue(alwaysNormalize)) {
      normalizationType = ALWAYS_NORMALIZE;
    }
    return _createElement(context, tag, data, children, normalizationType)
  }

  function _createElement (
    context,
    tag,
    data,
    children,
    normalizationType
  ) {
    if (isDef(data) && isDef((data).__ob__)) {
      warn(
        "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
        'Always create fresh vnode data objects in each render!',
        context
      );
      return createEmptyVNode()
    }
    // object syntax in v-bind
    if (isDef(data) && isDef(data.is)) {
      tag = data.is;
    }
    if (!tag) {
      // in case of component :is set to falsy value
      return createEmptyVNode()
    }
    // warn against non-primitive key
    if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
    ) {
      {
        warn(
          'Avoid using non-primitive value as key, ' +
          'use string/number value instead.',
          context
        );
      }
    }
    // support single function children as default scoped slot
    if (Array.isArray(children) &&
      typeof children[0] === 'function'
    ) {
      data = data || {};
      data.scopedSlots = { default: children[0] };
      children.length = 0;
    }
    if (normalizationType === ALWAYS_NORMALIZE) {
      children = normalizeChildren(children);
    } else if (normalizationType === SIMPLE_NORMALIZE) {
      children = simpleNormalizeChildren(children);
    }
    var vnode, ns;
    if (typeof tag === 'string') {
      var Ctor;
      ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
      if (config.isReservedTag(tag)) {
        // platform built-in elements
        vnode = new VNode(
          config.parsePlatformTagName(tag), data, children,
          undefined, undefined, context
        );
      } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
        // component
        vnode = createComponent(Ctor, data, context, children, tag);
      } else {
        // unknown or unlisted namespaced elements
        // check at runtime because it may get assigned a namespace when its
        // parent normalizes children
        vnode = new VNode(
          tag, data, children,
          undefined, undefined, context
        );
      }
    } else {
      // direct component options / constructor
      vnode = createComponent(tag, data, context, children);
    }
    if (Array.isArray(vnode)) {
      return vnode
    } else if (isDef(vnode)) {
      if (isDef(ns)) { applyNS(vnode, ns); }
      if (isDef(data)) { registerDeepBindings(data); }
      return vnode
    } else {
      return createEmptyVNode()
    }
  }

  function applyNS (vnode, ns, force) {
    vnode.ns = ns;
    if (vnode.tag === 'foreignObject') {
      // use default namespace inside foreignObject
      ns = undefined;
      force = true;
    }
    if (isDef(vnode.children)) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        var child = vnode.children[i];
        if (isDef(child.tag) && (
          isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
          applyNS(child, ns, force);
        }
      }
    }
  }

  // ref #5318
  // necessary to ensure parent re-render when deep bindings like :style and
  // :class are used on slot nodes
  function registerDeepBindings (data) {
    if (isObject(data.style)) {
      traverse(data.style);
    }
    if (isObject(data.class)) {
      traverse(data.class);
    }
  }

  /*  */

  function initRender (vm) {
    vm._vnode = null; // the root of the child tree
    vm._staticTrees = null; // v-once cached trees
    var options = vm.$options;
    var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
    var renderContext = parentVnode && parentVnode.context;
    vm.$slots = resolveSlots(options._renderChildren, renderContext);
    vm.$scopedSlots = emptyObject;
    // bind the createElement fn to this instance
    // so that we get proper render context inside it.
    // args order: tag, data, children, normalizationType, alwaysNormalize
    // internal version is used by render functions compiled from templates
    vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
    // normalization is always applied for the public version, used in
    // user-written render functions.
    vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

    // $attrs & $listeners are exposed for easier HOC creation.
    // they need to be reactive so that HOCs using them are always updated
    var parentData = parentVnode && parentVnode.data;

    /* istanbul ignore else */
    {
      defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
      }, true);
      defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
      }, true);
    }
  }

  var currentRenderingInstance = null;

  function renderMixin (Vue) {
    // install runtime convenience helpers
    installRenderHelpers(Vue.prototype);

    Vue.prototype.$nextTick = function (fn) {
      return nextTick(fn, this)
    };

    Vue.prototype._render = function () {
      var vm = this;
      var ref = vm.$options;
      var render = ref.render;
      var _parentVnode = ref._parentVnode;

      if (_parentVnode) {
        vm.$scopedSlots = normalizeScopedSlots(
          _parentVnode.data.scopedSlots,
          vm.$slots,
          vm.$scopedSlots
        );
      }

      // set parent vnode. this allows render functions to have access
      // to the data on the placeholder node.
      vm.$vnode = _parentVnode;
      // render self
      var vnode;
      try {
        // There's no need to maintain a stack becaues all render fns are called
        // separately from one another. Nested component's render fns are called
        // when parent component is patched.
        currentRenderingInstance = vm;
        vnode = render.call(vm._renderProxy, vm.$createElement);
      } catch (e) {
        handleError(e, vm, "render");
        // return error render result,
        // or previous vnode to prevent render error causing blank component
        /* istanbul ignore else */
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } finally {
        currentRenderingInstance = null;
      }
      // if the returned array contains only a single node, allow it
      if (Array.isArray(vnode) && vnode.length === 1) {
        vnode = vnode[0];
      }
      // return empty vnode in case the render function errored out
      if (!(vnode instanceof VNode)) {
        if (Array.isArray(vnode)) {
          warn(
            'Multiple root nodes returned from render function. Render function ' +
            'should return a single root node.',
            vm
          );
        }
        vnode = createEmptyVNode();
      }
      // set parent
      vnode.parent = _parentVnode;
      return vnode
    };
  }

  /*  */

  function ensureCtor (comp, base) {
    if (
      comp.__esModule ||
      (hasSymbol && comp[Symbol.toStringTag] === 'Module')
    ) {
      comp = comp.default;
    }
    return isObject(comp)
      ? base.extend(comp)
      : comp
  }

  function createAsyncPlaceholder (
    factory,
    data,
    context,
    children,
    tag
  ) {
    var node = createEmptyVNode();
    node.asyncFactory = factory;
    node.asyncMeta = { data: data, context: context, children: children, tag: tag };
    return node
  }

  function resolveAsyncComponent (
    factory,
    baseCtor
  ) {
    if (isTrue(factory.error) && isDef(factory.errorComp)) {
      return factory.errorComp
    }

    if (isDef(factory.resolved)) {
      return factory.resolved
    }

    var owner = currentRenderingInstance;
    if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
      // already pending
      factory.owners.push(owner);
    }

    if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
      return factory.loadingComp
    }

    if (owner && !isDef(factory.owners)) {
      var owners = factory.owners = [owner];
      var sync = true;
      var timerLoading = null;
      var timerTimeout = null

      ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

      var forceRender = function (renderCompleted) {
        for (var i = 0, l = owners.length; i < l; i++) {
          (owners[i]).$forceUpdate();
        }

        if (renderCompleted) {
          owners.length = 0;
          if (timerLoading !== null) {
            clearTimeout(timerLoading);
            timerLoading = null;
          }
          if (timerTimeout !== null) {
            clearTimeout(timerTimeout);
            timerTimeout = null;
          }
        }
      };

      var resolve = once(function (res) {
        // cache resolved
        factory.resolved = ensureCtor(res, baseCtor);
        // invoke callbacks only if this is not a synchronous resolve
        // (async resolves are shimmed as synchronous during SSR)
        if (!sync) {
          forceRender(true);
        } else {
          owners.length = 0;
        }
      });

      var reject = once(function (reason) {
        warn(
          "Failed to resolve async component: " + (String(factory)) +
          (reason ? ("\nReason: " + reason) : '')
        );
        if (isDef(factory.errorComp)) {
          factory.error = true;
          forceRender(true);
        }
      });

      var res = factory(resolve, reject);

      if (isObject(res)) {
        if (isPromise(res)) {
          // () => Promise
          if (isUndef(factory.resolved)) {
            res.then(resolve, reject);
          }
        } else if (isPromise(res.component)) {
          res.component.then(resolve, reject);

          if (isDef(res.error)) {
            factory.errorComp = ensureCtor(res.error, baseCtor);
          }

          if (isDef(res.loading)) {
            factory.loadingComp = ensureCtor(res.loading, baseCtor);
            if (res.delay === 0) {
              factory.loading = true;
            } else {
              timerLoading = setTimeout(function () {
                timerLoading = null;
                if (isUndef(factory.resolved) && isUndef(factory.error)) {
                  factory.loading = true;
                  forceRender(false);
                }
              }, res.delay || 200);
            }
          }

          if (isDef(res.timeout)) {
            timerTimeout = setTimeout(function () {
              timerTimeout = null;
              if (isUndef(factory.resolved)) {
                reject(
                  "timeout (" + (res.timeout) + "ms)"
                );
              }
            }, res.timeout);
          }
        }
      }

      sync = false;
      // return in case resolved synchronously
      return factory.loading
        ? factory.loadingComp
        : factory.resolved
    }
  }

  /*  */

  function isAsyncPlaceholder (node) {
    return node.isComment && node.asyncFactory
  }

  /*  */

  function getFirstComponentChild (children) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
          return c
        }
      }
    }
  }

  /*  */

  /*  */

  function initEvents (vm) {
    vm._events = Object.create(null);
    vm._hasHookEvent = false;
    // init parent attached events
    var listeners = vm.$options._parentListeners;
    if (listeners) {
      updateComponentListeners(vm, listeners);
    }
  }

  var target;

  function add (event, fn) {
    target.$on(event, fn);
  }

  function remove$1 (event, fn) {
    target.$off(event, fn);
  }

  function createOnceHandler (event, fn) {
    var _target = target;
    return function onceHandler () {
      var res = fn.apply(null, arguments);
      if (res !== null) {
        _target.$off(event, onceHandler);
      }
    }
  }

  function updateComponentListeners (
    vm,
    listeners,
    oldListeners
  ) {
    target = vm;
    updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
    target = undefined;
  }

  function eventsMixin (Vue) {
    var hookRE = /^hook:/;
    Vue.prototype.$on = function (event, fn) {
      var vm = this;
      if (Array.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          vm.$on(event[i], fn);
        }
      } else {
        (vm._events[event] || (vm._events[event] = [])).push(fn);
        // optimize hook:event cost by using a boolean flag marked at registration
        // instead of a hash lookup
        if (hookRE.test(event)) {
          vm._hasHookEvent = true;
        }
      }
      return vm
    };

    Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on () {
        vm.$off(event, on);
        fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm
    };

    Vue.prototype.$off = function (event, fn) {
      var vm = this;
      // all
      if (!arguments.length) {
        vm._events = Object.create(null);
        return vm
      }
      // array of events
      if (Array.isArray(event)) {
        for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
          vm.$off(event[i$1], fn);
        }
        return vm
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
        return vm
      }
      if (!fn) {
        vm._events[event] = null;
        return vm
      }
      // specific handler
      var cb;
      var i = cbs.length;
      while (i--) {
        cb = cbs[i];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i, 1);
          break
        }
      }
      return vm
    };

    Vue.prototype.$emit = function (event) {
      var vm = this;
      {
        var lowerCaseEvent = event.toLowerCase();
        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
          tip(
            "Event \"" + lowerCaseEvent + "\" is emitted in component " +
            (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
            "Note that HTML attributes are case-insensitive and you cannot use " +
            "v-on to listen to camelCase events when using in-DOM templates. " +
            "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
          );
        }
      }
      var cbs = vm._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        var info = "event handler for \"" + event + "\"";
        for (var i = 0, l = cbs.length; i < l; i++) {
          invokeWithErrorHandling(cbs[i], vm, args, vm, info);
        }
      }
      return vm
    };
  }

  /*  */

  var activeInstance = null;
  var isUpdatingChildComponent = false;

  function setActiveInstance(vm) {
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    return function () {
      activeInstance = prevActiveInstance;
    }
  }

  function initLifecycle (vm) {
    var options = vm.$options;

    // locate first non-abstract parent
    var parent = options.parent;
    if (parent && !options.abstract) {
      while (parent.$options.abstract && parent.$parent) {
        parent = parent.$parent;
      }
      parent.$children.push(vm);
    }

    vm.$parent = parent;
    vm.$root = parent ? parent.$root : vm;

    vm.$children = [];
    vm.$refs = {};

    vm._watcher = null;
    vm._inactive = null;
    vm._directInactive = false;
    vm._isMounted = false;
    vm._isDestroyed = false;
    vm._isBeingDestroyed = false;
  }

  function lifecycleMixin (Vue) {
    Vue.prototype._update = function (vnode, hydrating) {
      var vm = this;
      var prevEl = vm.$el;
      var prevVnode = vm._vnode;
      var restoreActiveInstance = setActiveInstance(vm);
      vm._vnode = vnode;
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      if (!prevVnode) {
        // initial render
        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
      } else {
        // updates
        vm.$el = vm.__patch__(prevVnode, vnode);
      }
      restoreActiveInstance();
      // update __vue__ reference
      if (prevEl) {
        prevEl.__vue__ = null;
      }
      if (vm.$el) {
        vm.$el.__vue__ = vm;
      }
      // if parent is an HOC, update its $el as well
      if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
        vm.$parent.$el = vm.$el;
      }
      // updated hook is called by the scheduler to ensure that children are
      // updated in a parent's updated hook.
    };

    Vue.prototype.$forceUpdate = function () {
      var vm = this;
      if (vm._watcher) {
        vm._watcher.update();
      }
    };

    Vue.prototype.$destroy = function () {
      var vm = this;
      if (vm._isBeingDestroyed) {
        return
      }
      callHook(vm, 'beforeDestroy');
      vm._isBeingDestroyed = true;
      // remove self from parent
      var parent = vm.$parent;
      if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
        remove(parent.$children, vm);
      }
      // teardown watchers
      if (vm._watcher) {
        vm._watcher.teardown();
      }
      var i = vm._watchers.length;
      while (i--) {
        vm._watchers[i].teardown();
      }
      // remove reference from data ob
      // frozen object may not have observer.
      if (vm._data.__ob__) {
        vm._data.__ob__.vmCount--;
      }
      // call the last hook...
      vm._isDestroyed = true;
      // invoke destroy hooks on current rendered tree
      vm.__patch__(vm._vnode, null);
      // fire destroyed hook
      callHook(vm, 'destroyed');
      // turn off all instance listeners.
      vm.$off();
      // remove __vue__ reference
      if (vm.$el) {
        vm.$el.__vue__ = null;
      }
      // release circular reference (#6759)
      if (vm.$vnode) {
        vm.$vnode.parent = null;
      }
    };
  }

  function mountComponent (
    vm,
    el,
    hydrating
  ) {
    vm.$el = el;
    if (!vm.$options.render) {
      vm.$options.render = createEmptyVNode;
      {
        /* istanbul ignore if */
        if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
          vm.$options.el || el) {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'compiler is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          );
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          );
        }
      }
    }
    callHook(vm, 'beforeMount');

    var updateComponent;
    /* istanbul ignore if */
    if (config.performance && mark) {
      updateComponent = function () {
        var name = vm._name;
        var id = vm._uid;
        var startTag = "vue-perf-start:" + id;
        var endTag = "vue-perf-end:" + id;

        mark(startTag);
        var vnode = vm._render();
        mark(endTag);
        measure(("vue " + name + " render"), startTag, endTag);

        mark(startTag);
        vm._update(vnode, hydrating);
        mark(endTag);
        measure(("vue " + name + " patch"), startTag, endTag);
      };
    } else {
      updateComponent = function () {
        vm._update(vm._render(), hydrating);
      };
    }

    // we set this to vm._watcher inside the watcher's constructor
    // since the watcher's initial patch may call $forceUpdate (e.g. inside child
    // component's mounted hook), which relies on vm._watcher being already defined
    new Watcher(vm, updateComponent, noop, {
      before: function before () {
        if (vm._isMounted && !vm._isDestroyed) {
          callHook(vm, 'beforeUpdate');
        }
      }
    }, true /* isRenderWatcher */);
    hydrating = false;

    // manually mounted instance, call mounted on self
    // mounted is called for render-created child components in its inserted hook
    if (vm.$vnode == null) {
      vm._isMounted = true;
      callHook(vm, 'mounted');
    }
    return vm
  }

  function updateChildComponent (
    vm,
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    {
      isUpdatingChildComponent = true;
    }

    // determine whether component has slot children
    // we need to do this before overwriting $options._renderChildren.

    // check if there are dynamic scopedSlots (hand-written or compiled but with
    // dynamic slot names). Static scoped slots compiled from template has the
    // "$stable" marker.
    var newScopedSlots = parentVnode.data.scopedSlots;
    var oldScopedSlots = vm.$scopedSlots;
    var hasDynamicScopedSlot = !!(
      (newScopedSlots && !newScopedSlots.$stable) ||
      (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
      (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
    );

    // Any static slot children from the parent may have changed during parent's
    // update. Dynamic scoped slots may also have changed. In such cases, a forced
    // update is necessary to ensure correctness.
    var needsForceUpdate = !!(
      renderChildren ||               // has new static slots
      vm.$options._renderChildren ||  // has old static slots
      hasDynamicScopedSlot
    );

    vm.$options._parentVnode = parentVnode;
    vm.$vnode = parentVnode; // update vm's placeholder node without re-render

    if (vm._vnode) { // update child tree's parent
      vm._vnode.parent = parentVnode;
    }
    vm.$options._renderChildren = renderChildren;

    // update $attrs and $listeners hash
    // these are also reactive so they may trigger child update if the child
    // used them during render
    vm.$attrs = parentVnode.data.attrs || emptyObject;
    vm.$listeners = listeners || emptyObject;

    // update props
    if (propsData && vm.$options.props) {
      toggleObserving(false);
      var props = vm._props;
      var propKeys = vm.$options._propKeys || [];
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i];
        var propOptions = vm.$options.props; // wtf flow?
        props[key] = validateProp(key, propOptions, propsData, vm);
      }
      toggleObserving(true);
      // keep a copy of raw propsData
      vm.$options.propsData = propsData;
    }

    // update listeners
    listeners = listeners || emptyObject;
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);

    // resolve slots + force update if has children
    if (needsForceUpdate) {
      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
      vm.$forceUpdate();
    }

    {
      isUpdatingChildComponent = false;
    }
  }

  function isInInactiveTree (vm) {
    while (vm && (vm = vm.$parent)) {
      if (vm._inactive) { return true }
    }
    return false
  }

  function activateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = false;
      if (isInInactiveTree(vm)) {
        return
      }
    } else if (vm._directInactive) {
      return
    }
    if (vm._inactive || vm._inactive === null) {
      vm._inactive = false;
      for (var i = 0; i < vm.$children.length; i++) {
        activateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'activated');
    }
  }

  function deactivateChildComponent (vm, direct) {
    if (direct) {
      vm._directInactive = true;
      if (isInInactiveTree(vm)) {
        return
      }
    }
    if (!vm._inactive) {
      vm._inactive = true;
      for (var i = 0; i < vm.$children.length; i++) {
        deactivateChildComponent(vm.$children[i]);
      }
      callHook(vm, 'deactivated');
    }
  }

  function callHook (vm, hook) {
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        invokeWithErrorHandling(handlers[i], vm, null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
  }

  /*  */

  var MAX_UPDATE_COUNT = 100;

  var queue = [];
  var activatedChildren = [];
  var has = {};
  var circular = {};
  var waiting = false;
  var flushing = false;
  var index = 0;

  /**
   * Reset the scheduler's state.
   */
  function resetSchedulerState () {
    index = queue.length = activatedChildren.length = 0;
    has = {};
    {
      circular = {};
    }
    waiting = flushing = false;
  }

  // Async edge case #6566 requires saving the timestamp when event listeners are
  // attached. However, calling performance.now() has a perf overhead especially
  // if the page has thousands of event listeners. Instead, we take a timestamp
  // every time the scheduler flushes and use that for all event listeners
  // attached during that flush.
  var currentFlushTimestamp = 0;

  // Async edge case fix requires storing an event listener's attach timestamp.
  var getNow = Date.now;

  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  // All IE versions use low-res event timestamps, and have problematic clock
  // implementations (#9632)
  if (inBrowser && !isIE) {
    var performance = window.performance;
    if (
      performance &&
      typeof performance.now === 'function' &&
      getNow() > document.createEvent('Event').timeStamp
    ) {
      // if the event timestamp, although evaluated AFTER the Date.now(), is
      // smaller than it, it means the event is using a hi-res timestamp,
      // and we need to use the hi-res version for event listener timestamps as
      // well.
      getNow = function () { return performance.now(); };
    }
  }

  /**
   * Flush both queues and run the watchers.
   */
  function flushSchedulerQueue () {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) { return a.id - b.id; });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      if (watcher.before) {
        watcher.before();
      }
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
      if (has[id] != null) {
        circular[id] = (circular[id] || 0) + 1;
        if (circular[id] > MAX_UPDATE_COUNT) {
          warn(
            'You may have an infinite update loop ' + (
              watcher.user
                ? ("in watcher with expression \"" + (watcher.expression) + "\"")
                : "in a component render function."
            ),
            watcher.vm
          );
          break
        }
      }
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }

  function callUpdatedHooks (queue) {
    var i = queue.length;
    while (i--) {
      var watcher = queue[i];
      var vm = watcher.vm;
      if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'updated');
      }
    }
  }

  /**
   * Queue a kept-alive component that was activated during patch.
   * The queue will be processed after the entire tree has been patched.
   */
  function queueActivatedComponent (vm) {
    // setting _inactive to false here so that a render function can
    // rely on checking whether it's in an inactive tree (e.g. router-view)
    vm._inactive = false;
    activatedChildren.push(vm);
  }

  function callActivatedHooks (queue) {
    for (var i = 0; i < queue.length; i++) {
      queue[i]._inactive = true;
      activateChildComponent(queue[i], true /* true */);
    }
  }

  /**
   * Push a watcher into the watcher queue.
   * Jobs with duplicate IDs will be skipped unless it's
   * pushed when the queue is being flushed.
   */
  function queueWatcher (watcher) {
    var id = watcher.id;
    if (has[id] == null) {
      has[id] = true;
      if (!flushing) {
        queue.push(watcher);
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        var i = queue.length - 1;
        while (i > index && queue[i].id > watcher.id) {
          i--;
        }
        queue.splice(i + 1, 0, watcher);
      }
      // queue the flush
      if (!waiting) {
        waiting = true;

        if (!config.async) {
          flushSchedulerQueue();
          return
        }
        nextTick(flushSchedulerQueue);
      }
    }
  }

  /*  */



  var uid$2 = 0;

  /**
   * A watcher parses an expression, collects dependencies,
   * and fires callback when the expression value changes.
   * This is used for both the $watch() api and directives.
   */
  var Watcher = function Watcher (
    vm,
    expOrFn,
    cb,
    options,
    isRenderWatcher
  ) {
    this.vm = vm;
    if (isRenderWatcher) {
      vm._watcher = this;
    }
    vm._watchers.push(this);
    // options
    if (options) {
      this.deep = !!options.deep;
      this.user = !!options.user;
      this.lazy = !!options.lazy;
      this.sync = !!options.sync;
      this.before = options.before;
    } else {
      this.deep = this.user = this.lazy = this.sync = false;
    }
    this.cb = cb;
    this.id = ++uid$2; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression = expOrFn.toString();
    // parse expression for getter
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
      if (!this.getter) {
        this.getter = noop;
        warn(
          "Failed watching path: \"" + expOrFn + "\" " +
          'Watcher only accepts simple dot-delimited paths. ' +
          'For full control, use a function instead.',
          vm
        );
      }
    }
    this.value = this.lazy
      ? undefined
      : this.get();
  };

  /**
   * Evaluate the getter, and re-collect dependencies.
   */
  Watcher.prototype.get = function get () {
    pushTarget(this);
    var value;
    var vm = this.vm;
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      if (this.user) {
        handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value);
      }
      popTarget();
      this.cleanupDeps();
    }
    return value
  };

  /**
   * Add a dependency to this directive.
   */
  Watcher.prototype.addDep = function addDep (dep) {
    var id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  };

  /**
   * Clean up for dependency collection.
   */
  Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var i = this.deps.length;
    while (i--) {
      var dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };

  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  Watcher.prototype.update = function update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };

  /**
   * Scheduler job interface.
   * Will be called by the scheduler.
   */
  Watcher.prototype.run = function run () {
    if (this.active) {
      var value = this.get();
      if (
        value !== this.value ||
        // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        isObject(value) ||
        this.deep
      ) {
        // set new value
        var oldValue = this.value;
        this.value = value;
        if (this.user) {
          try {
            this.cb.call(this.vm, value, oldValue);
          } catch (e) {
            handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
          }
        } else {
          this.cb.call(this.vm, value, oldValue);
        }
      }
    }
  };

  /**
   * Evaluate the value of the watcher.
   * This only gets called for lazy watchers.
   */
  Watcher.prototype.evaluate = function evaluate () {
    this.value = this.get();
    this.dirty = false;
  };

  /**
   * Depend on all deps collected by this watcher.
   */
  Watcher.prototype.depend = function depend () {
    var i = this.deps.length;
    while (i--) {
      this.deps[i].depend();
    }
  };

  /**
   * Remove self from all dependencies' subscriber list.
   */
  Watcher.prototype.teardown = function teardown () {
    if (this.active) {
      // remove self from vm's watcher list
      // this is a somewhat expensive operation so we skip it
      // if the vm is being destroyed.
      if (!this.vm._isBeingDestroyed) {
        remove(this.vm._watchers, this);
      }
      var i = this.deps.length;
      while (i--) {
        this.deps[i].removeSub(this);
      }
      this.active = false;
    }
  };

  /*  */

  var sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: noop,
    set: noop
  };

  function proxy (target, sourceKey, key) {
    sharedPropertyDefinition.get = function proxyGetter () {
      return this[sourceKey][key]
    };
    sharedPropertyDefinition.set = function proxySetter (val) {
      this[sourceKey][key] = val;
    };
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function initState (vm) {
    vm._watchers = [];
    var opts = vm.$options;
    if (opts.props) { initProps(vm, opts.props); }
    if (opts.methods) { initMethods(vm, opts.methods); }
    if (opts.data) {
      initData(vm);
    } else {
      observe(vm._data = {}, true /* asRootData */);
    }
    if (opts.computed) { initComputed(vm, opts.computed); }
    if (opts.watch && opts.watch !== nativeWatch) {
      initWatch(vm, opts.watch);
    }
  }

  function initProps (vm, propsOptions) {
    var propsData = vm.$options.propsData || {};
    var props = vm._props = {};
    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    var keys = vm.$options._propKeys = [];
    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
      toggleObserving(false);
    }
    var loop = function ( key ) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) ||
            config.isReservedAttr(hyphenatedKey)) {
          warn(
            ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
            vm
          );
        }
        defineReactive$$1(props, key, value, function () {
          if (!isRoot && !isUpdatingChildComponent) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              "value. Prop being mutated: \"" + key + "\"",
              vm
            );
          }
        });
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    for (var key in propsOptions) loop( key );
    toggleObserving(true);
  }

  function initData (vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function'
      ? getData(data, vm)
      : data || {};
    if (!isPlainObject(data)) {
      data = {};
      warn(
        'data functions should return an object:\n' +
        'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
        vm
      );
    }
    // proxy data on instance
    var keys = Object.keys(data);
    var props = vm.$options.props;
    var methods = vm.$options.methods;
    var i = keys.length;
    while (i--) {
      var key = keys[i];
      {
        if (methods && hasOwn(methods, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a data property."),
            vm
          );
        }
      }
      if (props && hasOwn(props, key)) {
        warn(
          "The data property \"" + key + "\" is already declared as a prop. " +
          "Use prop default value instead.",
          vm
        );
      } else if (!isReserved(key)) {
        proxy(vm, "_data", key);
      }
    }
    // observe data
    observe(data, true /* asRootData */);
  }

  function getData (data, vm) {
    // #7573 disable dep collection when invoking data getters
    pushTarget();
    try {
      return data.call(vm, vm)
    } catch (e) {
      handleError(e, vm, "data()");
      return {}
    } finally {
      popTarget();
    }
  }

  var computedWatcherOptions = { lazy: true };

  function initComputed (vm, computed) {
    // $flow-disable-line
    var watchers = vm._computedWatchers = Object.create(null);
    // computed properties are just getters during SSR
    var isSSR = isServerRendering();

    for (var key in computed) {
      var userDef = computed[key];
      var getter = typeof userDef === 'function' ? userDef : userDef.get;
      if (getter == null) {
        warn(
          ("Getter is missing for computed property \"" + key + "\"."),
          vm
        );
      }

      if (!isSSR) {
        // create internal watcher for the computed property.
        watchers[key] = new Watcher(
          vm,
          getter || noop,
          noop,
          computedWatcherOptions
        );
      }

      // component-defined computed properties are already defined on the
      // component prototype. We only need to define computed properties defined
      // at instantiation here.
      if (!(key in vm)) {
        defineComputed(vm, key, userDef);
      } else {
        if (key in vm.$data) {
          warn(("The computed property \"" + key + "\" is already defined in data."), vm);
        } else if (vm.$options.props && key in vm.$options.props) {
          warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
        }
      }
    }
  }

  function defineComputed (
    target,
    key,
    userDef
  ) {
    var shouldCache = !isServerRendering();
    if (typeof userDef === 'function') {
      sharedPropertyDefinition.get = shouldCache
        ? createComputedGetter(key)
        : createGetterInvoker(userDef);
      sharedPropertyDefinition.set = noop;
    } else {
      sharedPropertyDefinition.get = userDef.get
        ? shouldCache && userDef.cache !== false
          ? createComputedGetter(key)
          : createGetterInvoker(userDef.get)
        : noop;
      sharedPropertyDefinition.set = userDef.set || noop;
    }
    if (sharedPropertyDefinition.set === noop) {
      sharedPropertyDefinition.set = function () {
        warn(
          ("Computed property \"" + key + "\" was assigned to but it has no setter."),
          this
        );
      };
    }
    Object.defineProperty(target, key, sharedPropertyDefinition);
  }

  function createComputedGetter (key) {
    return function computedGetter () {
      var watcher = this._computedWatchers && this._computedWatchers[key];
      if (watcher) {
        if (watcher.dirty) {
          watcher.evaluate();
        }
        if (Dep.target) {
          watcher.depend();
        }
        return watcher.value
      }
    }
  }

  function createGetterInvoker(fn) {
    return function computedGetter () {
      return fn.call(this, this)
    }
  }

  function initMethods (vm, methods) {
    var props = vm.$options.props;
    for (var key in methods) {
      {
        if (typeof methods[key] !== 'function') {
          warn(
            "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
            "Did you reference the function correctly?",
            vm
          );
        }
        if (props && hasOwn(props, key)) {
          warn(
            ("Method \"" + key + "\" has already been defined as a prop."),
            vm
          );
        }
        if ((key in vm) && isReserved(key)) {
          warn(
            "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
            "Avoid defining component methods that start with _ or $."
          );
        }
      }
      vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
    }
  }

  function initWatch (vm, watch) {
    for (var key in watch) {
      var handler = watch[key];
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i]);
        }
      } else {
        createWatcher(vm, key, handler);
      }
    }
  }

  function createWatcher (
    vm,
    expOrFn,
    handler,
    options
  ) {
    if (isPlainObject(handler)) {
      options = handler;
      handler = handler.handler;
    }
    if (typeof handler === 'string') {
      handler = vm[handler];
    }
    return vm.$watch(expOrFn, handler, options)
  }

  function stateMixin (Vue) {
    // flow somehow has problems with directly declared definition object
    // when using Object.defineProperty, so we have to procedurally build up
    // the object here.
    var dataDef = {};
    dataDef.get = function () { return this._data };
    var propsDef = {};
    propsDef.get = function () { return this._props };
    {
      dataDef.set = function () {
        warn(
          'Avoid replacing instance root $data. ' +
          'Use nested data properties instead.',
          this
        );
      };
      propsDef.set = function () {
        warn("$props is readonly.", this);
      };
    }
    Object.defineProperty(Vue.prototype, '$data', dataDef);
    Object.defineProperty(Vue.prototype, '$props', propsDef);

    Vue.prototype.$set = set;
    Vue.prototype.$delete = del;

    Vue.prototype.$watch = function (
      expOrFn,
      cb,
      options
    ) {
      var vm = this;
      if (isPlainObject(cb)) {
        return createWatcher(vm, expOrFn, cb, options)
      }
      options = options || {};
      options.user = true;
      var watcher = new Watcher(vm, expOrFn, cb, options);
      if (options.immediate) {
        try {
          cb.call(vm, watcher.value);
        } catch (error) {
          handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
        }
      }
      return function unwatchFn () {
        watcher.teardown();
      }
    };
  }

  /*  */

  var uid$3 = 0;

  function initMixin (Vue) {
    Vue.prototype._init = function (options) {
      var vm = this;
      // a uid
      vm._uid = uid$3++;

      var startTag, endTag;
      /* istanbul ignore if */
      if (config.performance && mark) {
        startTag = "vue-perf-start:" + (vm._uid);
        endTag = "vue-perf-end:" + (vm._uid);
        mark(startTag);
      }

      // a flag to avoid this being observed
      vm._isVue = true;
      // merge options
      if (options && options._isComponent) {
        // optimize internal component instantiation
        // since dynamic options merging is pretty slow, and none of the
        // internal component options needs special treatment.
        initInternalComponent(vm, options);
      } else {
        vm.$options = mergeOptions(
          resolveConstructorOptions(vm.constructor),
          options || {},
          vm
        );
      }
      /* istanbul ignore else */
      {
        initProxy(vm);
      }
      // expose real self
      vm._self = vm;
      initLifecycle(vm);
      initEvents(vm);
      initRender(vm);
      callHook(vm, 'beforeCreate');
      initInjections(vm); // resolve injections before data/props
      initState(vm);
      initProvide(vm); // resolve provide after data/props
      callHook(vm, 'created');

      /* istanbul ignore if */
      if (config.performance && mark) {
        vm._name = formatComponentName(vm, false);
        mark(endTag);
        measure(("vue " + (vm._name) + " init"), startTag, endTag);
      }

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };
  }

  function initInternalComponent (vm, options) {
    var opts = vm.$options = Object.create(vm.constructor.options);
    // doing this because it's faster than dynamic enumeration.
    var parentVnode = options._parentVnode;
    opts.parent = options.parent;
    opts._parentVnode = parentVnode;

    var vnodeComponentOptions = parentVnode.componentOptions;
    opts.propsData = vnodeComponentOptions.propsData;
    opts._parentListeners = vnodeComponentOptions.listeners;
    opts._renderChildren = vnodeComponentOptions.children;
    opts._componentTag = vnodeComponentOptions.tag;

    if (options.render) {
      opts.render = options.render;
      opts.staticRenderFns = options.staticRenderFns;
    }
  }

  function resolveConstructorOptions (Ctor) {
    var options = Ctor.options;
    if (Ctor.super) {
      var superOptions = resolveConstructorOptions(Ctor.super);
      var cachedSuperOptions = Ctor.superOptions;
      if (superOptions !== cachedSuperOptions) {
        // super option changed,
        // need to resolve new options.
        Ctor.superOptions = superOptions;
        // check if there are any late-modified/attached options (#4976)
        var modifiedOptions = resolveModifiedOptions(Ctor);
        // update base extend options
        if (modifiedOptions) {
          extend(Ctor.extendOptions, modifiedOptions);
        }
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
        if (options.name) {
          options.components[options.name] = Ctor;
        }
      }
    }
    return options
  }

  function resolveModifiedOptions (Ctor) {
    var modified;
    var latest = Ctor.options;
    var sealed = Ctor.sealedOptions;
    for (var key in latest) {
      if (latest[key] !== sealed[key]) {
        if (!modified) { modified = {}; }
        modified[key] = latest[key];
      }
    }
    return modified
  }

  function Vue (options) {
    if (!(this instanceof Vue)
    ) {
      warn('Vue is a constructor and should be called with the `new` keyword');
    }
    this._init(options);
  }

  initMixin(Vue);
  stateMixin(Vue);
  eventsMixin(Vue);
  lifecycleMixin(Vue);
  renderMixin(Vue);

  /*  */

  function initUse (Vue) {
    Vue.use = function (plugin) {
      var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
      if (installedPlugins.indexOf(plugin) > -1) {
        return this
      }

      // additional parameters
      var args = toArray(arguments, 1);
      args.unshift(this);
      if (typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args);
      } else if (typeof plugin === 'function') {
        plugin.apply(null, args);
      }
      installedPlugins.push(plugin);
      return this
    };
  }

  /*  */

  function initMixin$1 (Vue) {
    Vue.mixin = function (mixin) {
      this.options = mergeOptions(this.options, mixin);
      return this
    };
  }

  /*  */

  function initExtend (Vue) {
    /**
     * Each instance constructor, including Vue, has a unique
     * cid. This enables us to create wrapped "child
     * constructors" for prototypal inheritance and cache them.
     */
    Vue.cid = 0;
    var cid = 1;

    /**
     * Class inheritance
     */
    Vue.extend = function (extendOptions) {
      extendOptions = extendOptions || {};
      var Super = this;
      var SuperId = Super.cid;
      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId]
      }

      var name = extendOptions.name || Super.options.name;
      if (name) {
        validateComponentName(name);
      }

      var Sub = function VueComponent (options) {
        this._init(options);
      };
      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.cid = cid++;
      Sub.options = mergeOptions(
        Super.options,
        extendOptions
      );
      Sub['super'] = Super;

      // For props and computed properties, we define the proxy getters on
      // the Vue instances at extension time, on the extended prototype. This
      // avoids Object.defineProperty calls for each instance created.
      if (Sub.options.props) {
        initProps$1(Sub);
      }
      if (Sub.options.computed) {
        initComputed$1(Sub);
      }

      // allow further extension/mixin/plugin usage
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // create asset registers, so extended classes
      // can have their private assets too.
      ASSET_TYPES.forEach(function (type) {
        Sub[type] = Super[type];
      });
      // enable recursive self-lookup
      if (name) {
        Sub.options.components[name] = Sub;
      }

      // keep a reference to the super options at extension time.
      // later at instantiation we can check if Super's options have
      // been updated.
      Sub.superOptions = Super.options;
      Sub.extendOptions = extendOptions;
      Sub.sealedOptions = extend({}, Sub.options);

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub
    };
  }

  function initProps$1 (Comp) {
    var props = Comp.options.props;
    for (var key in props) {
      proxy(Comp.prototype, "_props", key);
    }
  }

  function initComputed$1 (Comp) {
    var computed = Comp.options.computed;
    for (var key in computed) {
      defineComputed(Comp.prototype, key, computed[key]);
    }
  }

  /*  */

  function initAssetRegisters (Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
      Vue[type] = function (
        id,
        definition
      ) {
        if (!definition) {
          return this.options[type + 's'][id]
        } else {
          /* istanbul ignore if */
          if (type === 'component') {
            validateComponentName(id);
          }
          if (type === 'component' && isPlainObject(definition)) {
            definition.name = definition.name || id;
            definition = this.options._base.extend(definition);
          }
          if (type === 'directive' && typeof definition === 'function') {
            definition = { bind: definition, update: definition };
          }
          this.options[type + 's'][id] = definition;
          return definition
        }
      };
    });
  }

  /*  */



  function getComponentName (opts) {
    return opts && (opts.Ctor.options.name || opts.tag)
  }

  function matches (pattern, name) {
    if (Array.isArray(pattern)) {
      return pattern.indexOf(name) > -1
    } else if (typeof pattern === 'string') {
      return pattern.split(',').indexOf(name) > -1
    } else if (isRegExp(pattern)) {
      return pattern.test(name)
    }
    /* istanbul ignore next */
    return false
  }

  function pruneCache (keepAliveInstance, filter) {
    var cache = keepAliveInstance.cache;
    var keys = keepAliveInstance.keys;
    var _vnode = keepAliveInstance._vnode;
    for (var key in cache) {
      var cachedNode = cache[key];
      if (cachedNode) {
        var name = getComponentName(cachedNode.componentOptions);
        if (name && !filter(name)) {
          pruneCacheEntry(cache, key, keys, _vnode);
        }
      }
    }
  }

  function pruneCacheEntry (
    cache,
    key,
    keys,
    current
  ) {
    var cached$$1 = cache[key];
    if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
      cached$$1.componentInstance.$destroy();
    }
    cache[key] = null;
    remove(keys, key);
  }

  var patternTypes = [String, RegExp, Array];

  var KeepAlive = {
    name: 'keep-alive',
    abstract: true,

    props: {
      include: patternTypes,
      exclude: patternTypes,
      max: [String, Number]
    },

    created: function created () {
      this.cache = Object.create(null);
      this.keys = [];
    },

    destroyed: function destroyed () {
      for (var key in this.cache) {
        pruneCacheEntry(this.cache, key, this.keys);
      }
    },

    mounted: function mounted () {
      var this$1 = this;

      this.$watch('include', function (val) {
        pruneCache(this$1, function (name) { return matches(val, name); });
      });
      this.$watch('exclude', function (val) {
        pruneCache(this$1, function (name) { return !matches(val, name); });
      });
    },

    render: function render () {
      var slot = this.$slots.default;
      var vnode = getFirstComponentChild(slot);
      var componentOptions = vnode && vnode.componentOptions;
      if (componentOptions) {
        // check pattern
        var name = getComponentName(componentOptions);
        var ref = this;
        var include = ref.include;
        var exclude = ref.exclude;
        if (
          // not included
          (include && (!name || !matches(include, name))) ||
          // excluded
          (exclude && name && matches(exclude, name))
        ) {
          return vnode
        }

        var ref$1 = this;
        var cache = ref$1.cache;
        var keys = ref$1.keys;
        var key = vnode.key == null
          // same constructor may get registered as different local components
          // so cid alone is not enough (#3269)
          ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
          : vnode.key;
        if (cache[key]) {
          vnode.componentInstance = cache[key].componentInstance;
          // make current key freshest
          remove(keys, key);
          keys.push(key);
        } else {
          cache[key] = vnode;
          keys.push(key);
          // prune oldest entry
          if (this.max && keys.length > parseInt(this.max)) {
            pruneCacheEntry(cache, keys[0], keys, this._vnode);
          }
        }

        vnode.data.keepAlive = true;
      }
      return vnode || (slot && slot[0])
    }
  };

  var builtInComponents = {
    KeepAlive: KeepAlive
  };

  /*  */

  function initGlobalAPI (Vue) {
    // config
    var configDef = {};
    configDef.get = function () { return config; };
    {
      configDef.set = function () {
        warn(
          'Do not replace the Vue.config object, set individual fields instead.'
        );
      };
    }
    Object.defineProperty(Vue, 'config', configDef);

    // exposed util methods.
    // NOTE: these are not considered part of the public API - avoid relying on
    // them unless you are aware of the risk.
    Vue.util = {
      warn: warn,
      extend: extend,
      mergeOptions: mergeOptions,
      defineReactive: defineReactive$$1
    };

    Vue.set = set;
    Vue.delete = del;
    Vue.nextTick = nextTick;

    // 2.6 explicit observable API
    Vue.observable = function (obj) {
      observe(obj);
      return obj
    };

    Vue.options = Object.create(null);
    ASSET_TYPES.forEach(function (type) {
      Vue.options[type + 's'] = Object.create(null);
    });

    // this is used to identify the "base" constructor to extend all plain-object
    // components with in Weex's multi-instance scenarios.
    Vue.options._base = Vue;

    extend(Vue.options.components, builtInComponents);

    initUse(Vue);
    initMixin$1(Vue);
    initExtend(Vue);
    initAssetRegisters(Vue);
  }

  initGlobalAPI(Vue);

  Object.defineProperty(Vue.prototype, '$isServer', {
    get: isServerRendering
  });

  Object.defineProperty(Vue.prototype, '$ssrContext', {
    get: function get () {
      /* istanbul ignore next */
      return this.$vnode && this.$vnode.ssrContext
    }
  });

  // expose FunctionalRenderContext for ssr runtime helper installation
  Object.defineProperty(Vue, 'FunctionalRenderContext', {
    value: FunctionalRenderContext
  });

  Vue.version = '2.6.10';

  /*  */

  // these are reserved for web because they are directly compiled away
  // during template compilation
  var isReservedAttr = makeMap('style,class');

  // attributes that should be using props for binding
  var acceptValue = makeMap('input,textarea,option,select,progress');
  var mustUseProp = function (tag, type, attr) {
    return (
      (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
      (attr === 'selected' && tag === 'option') ||
      (attr === 'checked' && tag === 'input') ||
      (attr === 'muted' && tag === 'video')
    )
  };

  var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

  var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

  var convertEnumeratedValue = function (key, value) {
    return isFalsyAttrValue(value) || value === 'false'
      ? 'false'
      // allow arbitrary string value for contenteditable
      : key === 'contenteditable' && isValidContentEditableValue(value)
        ? value
        : 'true'
  };

  var isBooleanAttr = makeMap(
    'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,translate,' +
    'truespeed,typemustmatch,visible'
  );

  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var isXlink = function (name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
  };

  var getXlinkProp = function (name) {
    return isXlink(name) ? name.slice(6, name.length) : ''
  };

  var isFalsyAttrValue = function (val) {
    return val == null || val === false
  };

  /*  */

  function genClassForVnode (vnode) {
    var data = vnode.data;
    var parentNode = vnode;
    var childNode = vnode;
    while (isDef(childNode.componentInstance)) {
      childNode = childNode.componentInstance._vnode;
      if (childNode && childNode.data) {
        data = mergeClassData(childNode.data, data);
      }
    }
    while (isDef(parentNode = parentNode.parent)) {
      if (parentNode && parentNode.data) {
        data = mergeClassData(data, parentNode.data);
      }
    }
    return renderClass(data.staticClass, data.class)
  }

  function mergeClassData (child, parent) {
    return {
      staticClass: concat(child.staticClass, parent.staticClass),
      class: isDef(child.class)
        ? [child.class, parent.class]
        : parent.class
    }
  }

  function renderClass (
    staticClass,
    dynamicClass
  ) {
    if (isDef(staticClass) || isDef(dynamicClass)) {
      return concat(staticClass, stringifyClass(dynamicClass))
    }
    /* istanbul ignore next */
    return ''
  }

  function concat (a, b) {
    return a ? b ? (a + ' ' + b) : a : (b || '')
  }

  function stringifyClass (value) {
    if (Array.isArray(value)) {
      return stringifyArray(value)
    }
    if (isObject(value)) {
      return stringifyObject(value)
    }
    if (typeof value === 'string') {
      return value
    }
    /* istanbul ignore next */
    return ''
  }

  function stringifyArray (value) {
    var res = '';
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
        if (res) { res += ' '; }
        res += stringified;
      }
    }
    return res
  }

  function stringifyObject (value) {
    var res = '';
    for (var key in value) {
      if (value[key]) {
        if (res) { res += ' '; }
        res += key;
      }
    }
    return res
  }

  /*  */

  var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
  };

  var isHTMLTag = makeMap(
    'html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot'
  );

  // this map is intentionally selective, only covering SVG elements that may
  // contain child elements.
  var isSVG = makeMap(
    'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
    true
  );

  var isPreTag = function (tag) { return tag === 'pre'; };

  var isReservedTag = function (tag) {
    return isHTMLTag(tag) || isSVG(tag)
  };

  function getTagNamespace (tag) {
    if (isSVG(tag)) {
      return 'svg'
    }
    // basic support for MathML
    // note it doesn't support other MathML elements being component roots
    if (tag === 'math') {
      return 'math'
    }
  }

  var unknownElementCache = Object.create(null);
  function isUnknownElement (tag) {
    /* istanbul ignore if */
    if (!inBrowser) {
      return true
    }
    if (isReservedTag(tag)) {
      return false
    }
    tag = tag.toLowerCase();
    /* istanbul ignore if */
    if (unknownElementCache[tag] != null) {
      return unknownElementCache[tag]
    }
    var el = document.createElement(tag);
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return (unknownElementCache[tag] = (
        el.constructor === window.HTMLUnknownElement ||
        el.constructor === window.HTMLElement
      ))
    } else {
      return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
    }
  }

  var isTextInputType = makeMap('text,number,password,search,email,tel,url');

  /*  */

  /**
   * Query an element selector if it's not an element already.
   */
  function query (el) {
    if (typeof el === 'string') {
      var selected = document.querySelector(el);
      if (!selected) {
        warn(
          'Cannot find element: ' + el
        );
        return document.createElement('div')
      }
      return selected
    } else {
      return el
    }
  }

  /*  */

  function createElement$1 (tagName, vnode) {
    var elm = document.createElement(tagName);
    if (tagName !== 'select') {
      return elm
    }
    // false or null will remove the attribute but undefined will not
    if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
      elm.setAttribute('multiple', 'multiple');
    }
    return elm
  }

  function createElementNS (namespace, tagName) {
    return document.createElementNS(namespaceMap[namespace], tagName)
  }

  function createTextNode (text) {
    return document.createTextNode(text)
  }

  function createComment (text) {
    return document.createComment(text)
  }

  function insertBefore (parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
  }

  function removeChild (node, child) {
    node.removeChild(child);
  }

  function appendChild (node, child) {
    node.appendChild(child);
  }

  function parentNode (node) {
    return node.parentNode
  }

  function nextSibling (node) {
    return node.nextSibling
  }

  function tagName (node) {
    return node.tagName
  }

  function setTextContent (node, text) {
    node.textContent = text;
  }

  function setStyleScope (node, scopeId) {
    node.setAttribute(scopeId, '');
  }

  var nodeOps = /*#__PURE__*/Object.freeze({
    createElement: createElement$1,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    setStyleScope: setStyleScope
  });

  /*  */

  var ref = {
    create: function create (_, vnode) {
      registerRef(vnode);
    },
    update: function update (oldVnode, vnode) {
      if (oldVnode.data.ref !== vnode.data.ref) {
        registerRef(oldVnode, true);
        registerRef(vnode);
      }
    },
    destroy: function destroy (vnode) {
      registerRef(vnode, true);
    }
  };

  function registerRef (vnode, isRemoval) {
    var key = vnode.data.ref;
    if (!isDef(key)) { return }

    var vm = vnode.context;
    var ref = vnode.componentInstance || vnode.elm;
    var refs = vm.$refs;
    if (isRemoval) {
      if (Array.isArray(refs[key])) {
        remove(refs[key], ref);
      } else if (refs[key] === ref) {
        refs[key] = undefined;
      }
    } else {
      if (vnode.data.refInFor) {
        if (!Array.isArray(refs[key])) {
          refs[key] = [ref];
        } else if (refs[key].indexOf(ref) < 0) {
          // $flow-disable-line
          refs[key].push(ref);
        }
      } else {
        refs[key] = ref;
      }
    }
  }

  /**
   * Virtual DOM patching algorithm based on Snabbdom by
   * Simon Friis Vindum (@paldepind)
   * Licensed under the MIT License
   * https://github.com/paldepind/snabbdom/blob/master/LICENSE
   *
   * modified by Evan You (@yyx990803)
   *
   * Not type-checking this because this file is perf-critical and the cost
   * of making flow understand it is not worth it.
   */

  var emptyNode = new VNode('', {}, []);

  var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

  function sameVnode (a, b) {
    return (
      a.key === b.key && (
        (
          a.tag === b.tag &&
          a.isComment === b.isComment &&
          isDef(a.data) === isDef(b.data) &&
          sameInputType(a, b)
        ) || (
          isTrue(a.isAsyncPlaceholder) &&
          a.asyncFactory === b.asyncFactory &&
          isUndef(b.asyncFactory.error)
        )
      )
    )
  }

  function sameInputType (a, b) {
    if (a.tag !== 'input') { return true }
    var i;
    var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
    var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
    return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
  }

  function createKeyToOldIdx (children, beginIdx, endIdx) {
    var i, key;
    var map = {};
    for (i = beginIdx; i <= endIdx; ++i) {
      key = children[i].key;
      if (isDef(key)) { map[key] = i; }
    }
    return map
  }

  function createPatchFunction (backend) {
    var i, j;
    var cbs = {};

    var modules = backend.modules;
    var nodeOps = backend.nodeOps;

    for (i = 0; i < hooks.length; ++i) {
      cbs[hooks[i]] = [];
      for (j = 0; j < modules.length; ++j) {
        if (isDef(modules[j][hooks[i]])) {
          cbs[hooks[i]].push(modules[j][hooks[i]]);
        }
      }
    }

    function emptyNodeAt (elm) {
      return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
    }

    function createRmCb (childElm, listeners) {
      function remove$$1 () {
        if (--remove$$1.listeners === 0) {
          removeNode(childElm);
        }
      }
      remove$$1.listeners = listeners;
      return remove$$1
    }

    function removeNode (el) {
      var parent = nodeOps.parentNode(el);
      // element may have already been removed due to v-html / v-text
      if (isDef(parent)) {
        nodeOps.removeChild(parent, el);
      }
    }

    function isUnknownElement$$1 (vnode, inVPre) {
      return (
        !inVPre &&
        !vnode.ns &&
        !(
          config.ignoredElements.length &&
          config.ignoredElements.some(function (ignore) {
            return isRegExp(ignore)
              ? ignore.test(vnode.tag)
              : ignore === vnode.tag
          })
        ) &&
        config.isUnknownElement(vnode.tag)
      )
    }

    var creatingElmInVPre = 0;

    function createElm (
      vnode,
      insertedVnodeQueue,
      parentElm,
      refElm,
      nested,
      ownerArray,
      index
    ) {
      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // This vnode was used in a previous render!
        // now it's used as a new node, overwriting its elm would cause
        // potential patch errors down the road when it's used as an insertion
        // reference node. Instead, we clone the node on-demand before creating
        // associated DOM element for it.
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      vnode.isRootInsert = !nested; // for transition enter check
      if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
        return
      }

      var data = vnode.data;
      var children = vnode.children;
      var tag = vnode.tag;
      if (isDef(tag)) {
        {
          if (data && data.pre) {
            creatingElmInVPre++;
          }
          if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
            warn(
              'Unknown custom element: <' + tag + '> - did you ' +
              'register the component correctly? For recursive components, ' +
              'make sure to provide the "name" option.',
              vnode.context
            );
          }
        }

        vnode.elm = vnode.ns
          ? nodeOps.createElementNS(vnode.ns, tag)
          : nodeOps.createElement(tag, vnode);
        setScope(vnode);

        /* istanbul ignore if */
        {
          createChildren(vnode, children, insertedVnodeQueue);
          if (isDef(data)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
          }
          insert(parentElm, vnode.elm, refElm);
        }

        if (data && data.pre) {
          creatingElmInVPre--;
        }
      } else if (isTrue(vnode.isComment)) {
        vnode.elm = nodeOps.createComment(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      } else {
        vnode.elm = nodeOps.createTextNode(vnode.text);
        insert(parentElm, vnode.elm, refElm);
      }
    }

    function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i = vnode.data;
      if (isDef(i)) {
        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
        if (isDef(i = i.hook) && isDef(i = i.init)) {
          i(vnode, false /* hydrating */);
        }
        // after calling the init hook, if the vnode is a child component
        // it should've created a child instance and mounted it. the child
        // component also has set the placeholder vnode's elm.
        // in that case we can just return the element and be done.
        if (isDef(vnode.componentInstance)) {
          initComponent(vnode, insertedVnodeQueue);
          insert(parentElm, vnode.elm, refElm);
          if (isTrue(isReactivated)) {
            reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
          }
          return true
        }
      }
    }

    function initComponent (vnode, insertedVnodeQueue) {
      if (isDef(vnode.data.pendingInsert)) {
        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
        vnode.data.pendingInsert = null;
      }
      vnode.elm = vnode.componentInstance.$el;
      if (isPatchable(vnode)) {
        invokeCreateHooks(vnode, insertedVnodeQueue);
        setScope(vnode);
      } else {
        // empty component root.
        // skip all element-related modules except for ref (#3455)
        registerRef(vnode);
        // make sure to invoke the insert hook
        insertedVnodeQueue.push(vnode);
      }
    }

    function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
      var i;
      // hack for #4339: a reactivated component with inner transition
      // does not trigger because the inner node's created hooks are not called
      // again. It's not ideal to involve module-specific logic in here but
      // there doesn't seem to be a better way to do it.
      var innerNode = vnode;
      while (innerNode.componentInstance) {
        innerNode = innerNode.componentInstance._vnode;
        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
          for (i = 0; i < cbs.activate.length; ++i) {
            cbs.activate[i](emptyNode, innerNode);
          }
          insertedVnodeQueue.push(innerNode);
          break
        }
      }
      // unlike a newly created component,
      // a reactivated keep-alive component doesn't insert itself
      insert(parentElm, vnode.elm, refElm);
    }

    function insert (parent, elm, ref$$1) {
      if (isDef(parent)) {
        if (isDef(ref$$1)) {
          if (nodeOps.parentNode(ref$$1) === parent) {
            nodeOps.insertBefore(parent, elm, ref$$1);
          }
        } else {
          nodeOps.appendChild(parent, elm);
        }
      }
    }

    function createChildren (vnode, children, insertedVnodeQueue) {
      if (Array.isArray(children)) {
        {
          checkDuplicateKeys(children);
        }
        for (var i = 0; i < children.length; ++i) {
          createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
        }
      } else if (isPrimitive(vnode.text)) {
        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
      }
    }

    function isPatchable (vnode) {
      while (vnode.componentInstance) {
        vnode = vnode.componentInstance._vnode;
      }
      return isDef(vnode.tag)
    }

    function invokeCreateHooks (vnode, insertedVnodeQueue) {
      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
        cbs.create[i$1](emptyNode, vnode);
      }
      i = vnode.data.hook; // Reuse variable
      if (isDef(i)) {
        if (isDef(i.create)) { i.create(emptyNode, vnode); }
        if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
      }
    }

    // set scope id attribute for scoped CSS.
    // this is implemented as a special case to avoid the overhead
    // of going through the normal attribute patching process.
    function setScope (vnode) {
      var i;
      if (isDef(i = vnode.fnScopeId)) {
        nodeOps.setStyleScope(vnode.elm, i);
      } else {
        var ancestor = vnode;
        while (ancestor) {
          if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
            nodeOps.setStyleScope(vnode.elm, i);
          }
          ancestor = ancestor.parent;
        }
      }
      // for slot content they should also get the scopeId from the host instance.
      if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        i !== vnode.fnContext &&
        isDef(i = i.$options._scopeId)
      ) {
        nodeOps.setStyleScope(vnode.elm, i);
      }
    }

    function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
      for (; startIdx <= endIdx; ++startIdx) {
        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
      }
    }

    function invokeDestroyHook (vnode) {
      var i, j;
      var data = vnode.data;
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
        for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
      }
      if (isDef(i = vnode.children)) {
        for (j = 0; j < vnode.children.length; ++j) {
          invokeDestroyHook(vnode.children[j]);
        }
      }
    }

    function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
      for (; startIdx <= endIdx; ++startIdx) {
        var ch = vnodes[startIdx];
        if (isDef(ch)) {
          if (isDef(ch.tag)) {
            removeAndInvokeRemoveHook(ch);
            invokeDestroyHook(ch);
          } else { // Text node
            removeNode(ch.elm);
          }
        }
      }
    }

    function removeAndInvokeRemoveHook (vnode, rm) {
      if (isDef(rm) || isDef(vnode.data)) {
        var i;
        var listeners = cbs.remove.length + 1;
        if (isDef(rm)) {
          // we have a recursively passed down rm callback
          // increase the listeners count
          rm.listeners += listeners;
        } else {
          // directly removing
          rm = createRmCb(vnode.elm, listeners);
        }
        // recursively invoke hooks on child component root node
        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
          removeAndInvokeRemoveHook(i, rm);
        }
        for (i = 0; i < cbs.remove.length; ++i) {
          cbs.remove[i](vnode, rm);
        }
        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
          i(vnode, rm);
        } else {
          rm();
        }
      } else {
        removeNode(vnode.elm);
      }
    }

    function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
      var oldStartIdx = 0;
      var newStartIdx = 0;
      var oldEndIdx = oldCh.length - 1;
      var oldStartVnode = oldCh[0];
      var oldEndVnode = oldCh[oldEndIdx];
      var newEndIdx = newCh.length - 1;
      var newStartVnode = newCh[0];
      var newEndVnode = newCh[newEndIdx];
      var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

      // removeOnly is a special flag used only by <transition-group>
      // to ensure removed elements stay in correct relative positions
      // during leaving transitions
      var canMove = !removeOnly;

      {
        checkDuplicateKeys(newCh);
      }

      while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (isUndef(oldStartVnode)) {
          oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
        } else if (isUndef(oldEndVnode)) {
          oldEndVnode = oldCh[--oldEndIdx];
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
          patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          oldStartVnode = oldCh[++oldStartIdx];
          newStartVnode = newCh[++newStartIdx];
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
          patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          oldEndVnode = oldCh[--oldEndIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
          patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
          canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
          oldStartVnode = oldCh[++oldStartIdx];
          newEndVnode = newCh[--newEndIdx];
        } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
          patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
          canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
          oldEndVnode = oldCh[--oldEndIdx];
          newStartVnode = newCh[++newStartIdx];
        } else {
          if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
          idxInOld = isDef(newStartVnode.key)
            ? oldKeyToIdx[newStartVnode.key]
            : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
          if (isUndef(idxInOld)) { // New element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          } else {
            vnodeToMove = oldCh[idxInOld];
            if (sameVnode(vnodeToMove, newStartVnode)) {
              patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
              oldCh[idxInOld] = undefined;
              canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
            } else {
              // same key but different element. treat as new element
              createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
            }
          }
          newStartVnode = newCh[++newStartIdx];
        }
      }
      if (oldStartIdx > oldEndIdx) {
        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
      } else if (newStartIdx > newEndIdx) {
        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
      }
    }

    function checkDuplicateKeys (children) {
      var seenKeys = {};
      for (var i = 0; i < children.length; i++) {
        var vnode = children[i];
        var key = vnode.key;
        if (isDef(key)) {
          if (seenKeys[key]) {
            warn(
              ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
              vnode.context
            );
          } else {
            seenKeys[key] = true;
          }
        }
      }
    }

    function findIdxInOld (node, oldCh, start, end) {
      for (var i = start; i < end; i++) {
        var c = oldCh[i];
        if (isDef(c) && sameVnode(node, c)) { return i }
      }
    }

    function patchVnode (
      oldVnode,
      vnode,
      insertedVnodeQueue,
      ownerArray,
      index,
      removeOnly
    ) {
      if (oldVnode === vnode) {
        return
      }

      if (isDef(vnode.elm) && isDef(ownerArray)) {
        // clone reused vnode
        vnode = ownerArray[index] = cloneVNode(vnode);
      }

      var elm = vnode.elm = oldVnode.elm;

      if (isTrue(oldVnode.isAsyncPlaceholder)) {
        if (isDef(vnode.asyncFactory.resolved)) {
          hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
        } else {
          vnode.isAsyncPlaceholder = true;
        }
        return
      }

      // reuse element for static trees.
      // note we only do this if the vnode is cloned -
      // if the new node is not cloned it means the render functions have been
      // reset by the hot-reload-api and we need to do a proper re-render.
      if (isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
      ) {
        vnode.componentInstance = oldVnode.componentInstance;
        return
      }

      var i;
      var data = vnode.data;
      if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
        i(oldVnode, vnode);
      }

      var oldCh = oldVnode.children;
      var ch = vnode.children;
      if (isDef(data) && isPatchable(vnode)) {
        for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
        if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
      }
      if (isUndef(vnode.text)) {
        if (isDef(oldCh) && isDef(ch)) {
          if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
        } else if (isDef(ch)) {
          {
            checkDuplicateKeys(ch);
          }
          if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
          addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
        } else if (isDef(oldCh)) {
          removeVnodes(elm, oldCh, 0, oldCh.length - 1);
        } else if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }
      } else if (oldVnode.text !== vnode.text) {
        nodeOps.setTextContent(elm, vnode.text);
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
      }
    }

    function invokeInsertHook (vnode, queue, initial) {
      // delay insert hooks for component root nodes, invoke them after the
      // element is really inserted
      if (isTrue(initial) && isDef(vnode.parent)) {
        vnode.parent.data.pendingInsert = queue;
      } else {
        for (var i = 0; i < queue.length; ++i) {
          queue[i].data.hook.insert(queue[i]);
        }
      }
    }

    var hydrationBailed = false;
    // list of modules that can skip create hook during hydration because they
    // are already rendered on the client or has no need for initialization
    // Note: style is excluded because it relies on initial clone for future
    // deep updates (#7063).
    var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

    // Note: this is a browser-only function so we can assume elms are DOM nodes.
    function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
      var i;
      var tag = vnode.tag;
      var data = vnode.data;
      var children = vnode.children;
      inVPre = inVPre || (data && data.pre);
      vnode.elm = elm;

      if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
        vnode.isAsyncPlaceholder = true;
        return true
      }
      // assert node match
      {
        if (!assertNodeMatch(elm, vnode, inVPre)) {
          return false
        }
      }
      if (isDef(data)) {
        if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
        if (isDef(i = vnode.componentInstance)) {
          // child component. it should have hydrated its own tree.
          initComponent(vnode, insertedVnodeQueue);
          return true
        }
      }
      if (isDef(tag)) {
        if (isDef(children)) {
          // empty element, allow client to pick up and populate children
          if (!elm.hasChildNodes()) {
            createChildren(vnode, children, insertedVnodeQueue);
          } else {
            // v-html and domProps: innerHTML
            if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
              if (i !== elm.innerHTML) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('server innerHTML: ', i);
                  console.warn('client innerHTML: ', elm.innerHTML);
                }
                return false
              }
            } else {
              // iterate and compare children lists
              var childrenMatch = true;
              var childNode = elm.firstChild;
              for (var i$1 = 0; i$1 < children.length; i$1++) {
                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                  childrenMatch = false;
                  break
                }
                childNode = childNode.nextSibling;
              }
              // if childNode is not null, it means the actual childNodes list is
              // longer than the virtual children list.
              if (!childrenMatch || childNode) {
                /* istanbul ignore if */
                if (typeof console !== 'undefined' &&
                  !hydrationBailed
                ) {
                  hydrationBailed = true;
                  console.warn('Parent: ', elm);
                  console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                }
                return false
              }
            }
          }
        }
        if (isDef(data)) {
          var fullInvoke = false;
          for (var key in data) {
            if (!isRenderedModule(key)) {
              fullInvoke = true;
              invokeCreateHooks(vnode, insertedVnodeQueue);
              break
            }
          }
          if (!fullInvoke && data['class']) {
            // ensure collecting deps for deep class bindings for future updates
            traverse(data['class']);
          }
        }
      } else if (elm.data !== vnode.text) {
        elm.data = vnode.text;
      }
      return true
    }

    function assertNodeMatch (node, vnode, inVPre) {
      if (isDef(vnode.tag)) {
        return vnode.tag.indexOf('vue-component') === 0 || (
          !isUnknownElement$$1(vnode, inVPre) &&
          vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
        )
      } else {
        return node.nodeType === (vnode.isComment ? 8 : 3)
      }
    }

    return function patch (oldVnode, vnode, hydrating, removeOnly) {
      if (isUndef(vnode)) {
        if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
        return
      }

      var isInitialPatch = false;
      var insertedVnodeQueue = [];

      if (isUndef(oldVnode)) {
        // empty mount (likely as component), create new root element
        isInitialPatch = true;
        createElm(vnode, insertedVnodeQueue);
      } else {
        var isRealElement = isDef(oldVnode.nodeType);
        if (!isRealElement && sameVnode(oldVnode, vnode)) {
          // patch existing root node
          patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
        } else {
          if (isRealElement) {
            // mounting to a real element
            // check if this is server-rendered content and if we can perform
            // a successful hydration.
            if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
              oldVnode.removeAttribute(SSR_ATTR);
              hydrating = true;
            }
            if (isTrue(hydrating)) {
              if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                invokeInsertHook(vnode, insertedVnodeQueue, true);
                return oldVnode
              } else {
                warn(
                  'The client-side rendered virtual DOM tree is not matching ' +
                  'server-rendered content. This is likely caused by incorrect ' +
                  'HTML markup, for example nesting block-level elements inside ' +
                  '<p>, or missing <tbody>. Bailing hydration and performing ' +
                  'full client-side render.'
                );
              }
            }
            // either not server-rendered, or hydration failed.
            // create an empty node and replace it
            oldVnode = emptyNodeAt(oldVnode);
          }

          // replacing existing element
          var oldElm = oldVnode.elm;
          var parentElm = nodeOps.parentNode(oldElm);

          // create new node
          createElm(
            vnode,
            insertedVnodeQueue,
            // extremely rare edge case: do not insert if old element is in a
            // leaving transition. Only happens when combining transition +
            // keep-alive + HOCs. (#4590)
            oldElm._leaveCb ? null : parentElm,
            nodeOps.nextSibling(oldElm)
          );

          // update parent placeholder node element, recursively
          if (isDef(vnode.parent)) {
            var ancestor = vnode.parent;
            var patchable = isPatchable(vnode);
            while (ancestor) {
              for (var i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](ancestor);
              }
              ancestor.elm = vnode.elm;
              if (patchable) {
                for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                  cbs.create[i$1](emptyNode, ancestor);
                }
                // #6513
                // invoke insert hooks that may have been merged by create hooks.
                // e.g. for directives that uses the "inserted" hook.
                var insert = ancestor.data.hook.insert;
                if (insert.merged) {
                  // start at index 1 to avoid re-invoking component mounted hook
                  for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                    insert.fns[i$2]();
                  }
                }
              } else {
                registerRef(ancestor);
              }
              ancestor = ancestor.parent;
            }
          }

          // destroy old node
          if (isDef(parentElm)) {
            removeVnodes(parentElm, [oldVnode], 0, 0);
          } else if (isDef(oldVnode.tag)) {
            invokeDestroyHook(oldVnode);
          }
        }
      }

      invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
      return vnode.elm
    }
  }

  /*  */

  var directives = {
    create: updateDirectives,
    update: updateDirectives,
    destroy: function unbindDirectives (vnode) {
      updateDirectives(vnode, emptyNode);
    }
  };

  function updateDirectives (oldVnode, vnode) {
    if (oldVnode.data.directives || vnode.data.directives) {
      _update(oldVnode, vnode);
    }
  }

  function _update (oldVnode, vnode) {
    var isCreate = oldVnode === emptyNode;
    var isDestroy = vnode === emptyNode;
    var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
    var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

    var dirsWithInsert = [];
    var dirsWithPostpatch = [];

    var key, oldDir, dir;
    for (key in newDirs) {
      oldDir = oldDirs[key];
      dir = newDirs[key];
      if (!oldDir) {
        // new directive, bind
        callHook$1(dir, 'bind', vnode, oldVnode);
        if (dir.def && dir.def.inserted) {
          dirsWithInsert.push(dir);
        }
      } else {
        // existing directive, update
        dir.oldValue = oldDir.value;
        dir.oldArg = oldDir.arg;
        callHook$1(dir, 'update', vnode, oldVnode);
        if (dir.def && dir.def.componentUpdated) {
          dirsWithPostpatch.push(dir);
        }
      }
    }

    if (dirsWithInsert.length) {
      var callInsert = function () {
        for (var i = 0; i < dirsWithInsert.length; i++) {
          callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
        }
      };
      if (isCreate) {
        mergeVNodeHook(vnode, 'insert', callInsert);
      } else {
        callInsert();
      }
    }

    if (dirsWithPostpatch.length) {
      mergeVNodeHook(vnode, 'postpatch', function () {
        for (var i = 0; i < dirsWithPostpatch.length; i++) {
          callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
        }
      });
    }

    if (!isCreate) {
      for (key in oldDirs) {
        if (!newDirs[key]) {
          // no longer present, unbind
          callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
        }
      }
    }
  }

  var emptyModifiers = Object.create(null);

  function normalizeDirectives$1 (
    dirs,
    vm
  ) {
    var res = Object.create(null);
    if (!dirs) {
      // $flow-disable-line
      return res
    }
    var i, dir;
    for (i = 0; i < dirs.length; i++) {
      dir = dirs[i];
      if (!dir.modifiers) {
        // $flow-disable-line
        dir.modifiers = emptyModifiers;
      }
      res[getRawDirName(dir)] = dir;
      dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
    }
    // $flow-disable-line
    return res
  }

  function getRawDirName (dir) {
    return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
  }

  function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
    var fn = dir.def && dir.def[hook];
    if (fn) {
      try {
        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
      } catch (e) {
        handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
      }
    }
  }

  var baseModules = [
    ref,
    directives
  ];

  /*  */

  function updateAttrs (oldVnode, vnode) {
    var opts = vnode.componentOptions;
    if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
      return
    }
    if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
      return
    }
    var key, cur, old;
    var elm = vnode.elm;
    var oldAttrs = oldVnode.data.attrs || {};
    var attrs = vnode.data.attrs || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(attrs.__ob__)) {
      attrs = vnode.data.attrs = extend({}, attrs);
    }

    for (key in attrs) {
      cur = attrs[key];
      old = oldAttrs[key];
      if (old !== cur) {
        setAttr(elm, key, cur);
      }
    }
    // #4391: in IE9, setting type can reset value for input[type=radio]
    // #6666: IE/Edge forces progress value down to 1 before setting a max
    /* istanbul ignore if */
    if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
      setAttr(elm, 'value', attrs.value);
    }
    for (key in oldAttrs) {
      if (isUndef(attrs[key])) {
        if (isXlink(key)) {
          elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
        } else if (!isEnumeratedAttr(key)) {
          elm.removeAttribute(key);
        }
      }
    }
  }

  function setAttr (el, key, value) {
    if (el.tagName.indexOf('-') > -1) {
      baseSetAttr(el, key, value);
    } else if (isBooleanAttr(key)) {
      // set attribute for blank value
      // e.g. <option disabled>Select one</option>
      if (isFalsyAttrValue(value)) {
        el.removeAttribute(key);
      } else {
        // technically allowfullscreen is a boolean attribute for <iframe>,
        // but Flash expects a value of "true" when used on <embed> tag
        value = key === 'allowfullscreen' && el.tagName === 'EMBED'
          ? 'true'
          : key;
        el.setAttribute(key, value);
      }
    } else if (isEnumeratedAttr(key)) {
      el.setAttribute(key, convertEnumeratedValue(key, value));
    } else if (isXlink(key)) {
      if (isFalsyAttrValue(value)) {
        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      baseSetAttr(el, key, value);
    }
  }

  function baseSetAttr (el, key, value) {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // #7138: IE10 & 11 fires input event when setting placeholder on
      // <textarea>... block the first input event and remove the blocker
      // immediately.
      /* istanbul ignore if */
      if (
        isIE && !isIE9 &&
        el.tagName === 'TEXTAREA' &&
        key === 'placeholder' && value !== '' && !el.__ieph
      ) {
        var blocker = function (e) {
          e.stopImmediatePropagation();
          el.removeEventListener('input', blocker);
        };
        el.addEventListener('input', blocker);
        // $flow-disable-line
        el.__ieph = true; /* IE placeholder patched */
      }
      el.setAttribute(key, value);
    }
  }

  var attrs = {
    create: updateAttrs,
    update: updateAttrs
  };

  /*  */

  function updateClass (oldVnode, vnode) {
    var el = vnode.elm;
    var data = vnode.data;
    var oldData = oldVnode.data;
    if (
      isUndef(data.staticClass) &&
      isUndef(data.class) && (
        isUndef(oldData) || (
          isUndef(oldData.staticClass) &&
          isUndef(oldData.class)
        )
      )
    ) {
      return
    }

    var cls = genClassForVnode(vnode);

    // handle transition classes
    var transitionClass = el._transitionClasses;
    if (isDef(transitionClass)) {
      cls = concat(cls, stringifyClass(transitionClass));
    }

    // set the class
    if (cls !== el._prevClass) {
      el.setAttribute('class', cls);
      el._prevClass = cls;
    }
  }

  var klass = {
    create: updateClass,
    update: updateClass
  };

  /*  */

  var validDivisionCharRE = /[\w).+\-_$\]]/;

  function parseFilters (exp) {
    var inSingle = false;
    var inDouble = false;
    var inTemplateString = false;
    var inRegex = false;
    var curly = 0;
    var square = 0;
    var paren = 0;
    var lastFilterIndex = 0;
    var c, prev, i, expression, filters;

    for (i = 0; i < exp.length; i++) {
      prev = c;
      c = exp.charCodeAt(i);
      if (inSingle) {
        if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
      } else if (inDouble) {
        if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
      } else if (inTemplateString) {
        if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
      } else if (inRegex) {
        if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
      } else if (
        c === 0x7C && // pipe
        exp.charCodeAt(i + 1) !== 0x7C &&
        exp.charCodeAt(i - 1) !== 0x7C &&
        !curly && !square && !paren
      ) {
        if (expression === undefined) {
          // first filter, end of expression
          lastFilterIndex = i + 1;
          expression = exp.slice(0, i).trim();
        } else {
          pushFilter();
        }
      } else {
        switch (c) {
          case 0x22: inDouble = true; break         // "
          case 0x27: inSingle = true; break         // '
          case 0x60: inTemplateString = true; break // `
          case 0x28: paren++; break                 // (
          case 0x29: paren--; break                 // )
          case 0x5B: square++; break                // [
          case 0x5D: square--; break                // ]
          case 0x7B: curly++; break                 // {
          case 0x7D: curly--; break                 // }
        }
        if (c === 0x2f) { // /
          var j = i - 1;
          var p = (void 0);
          // find first non-whitespace prev char
          for (; j >= 0; j--) {
            p = exp.charAt(j);
            if (p !== ' ') { break }
          }
          if (!p || !validDivisionCharRE.test(p)) {
            inRegex = true;
          }
        }
      }
    }

    if (expression === undefined) {
      expression = exp.slice(0, i).trim();
    } else if (lastFilterIndex !== 0) {
      pushFilter();
    }

    function pushFilter () {
      (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
      lastFilterIndex = i + 1;
    }

    if (filters) {
      for (i = 0; i < filters.length; i++) {
        expression = wrapFilter(expression, filters[i]);
      }
    }

    return expression
  }

  function wrapFilter (exp, filter) {
    var i = filter.indexOf('(');
    if (i < 0) {
      // _f: resolveFilter
      return ("_f(\"" + filter + "\")(" + exp + ")")
    } else {
      var name = filter.slice(0, i);
      var args = filter.slice(i + 1);
      return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
    }
  }

  /*  */



  /* eslint-disable no-unused-vars */
  function baseWarn (msg, range) {
    console.error(("[Vue compiler]: " + msg));
  }
  /* eslint-enable no-unused-vars */

  function pluckModuleFunction (
    modules,
    key
  ) {
    return modules
      ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
      : []
  }

  function addProp (el, name, value, range, dynamic) {
    (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  function addAttr (el, name, value, range, dynamic) {
    var attrs = dynamic
      ? (el.dynamicAttrs || (el.dynamicAttrs = []))
      : (el.attrs || (el.attrs = []));
    attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
    el.plain = false;
  }

  // add a raw attr (use this in preTransforms)
  function addRawAttr (el, name, value, range) {
    el.attrsMap[name] = value;
    el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
  }

  function addDirective (
    el,
    name,
    rawName,
    value,
    arg,
    isDynamicArg,
    modifiers,
    range
  ) {
    (el.directives || (el.directives = [])).push(rangeSetItem({
      name: name,
      rawName: rawName,
      value: value,
      arg: arg,
      isDynamicArg: isDynamicArg,
      modifiers: modifiers
    }, range));
    el.plain = false;
  }

  function prependModifierMarker (symbol, name, dynamic) {
    return dynamic
      ? ("_p(" + name + ",\"" + symbol + "\")")
      : symbol + name // mark the event as captured
  }

  function addHandler (
    el,
    name,
    value,
    modifiers,
    important,
    warn,
    range,
    dynamic
  ) {
    modifiers = modifiers || emptyObject;
    // warn prevent and passive modifier
    /* istanbul ignore if */
    if (
      warn &&
      modifiers.prevent && modifiers.passive
    ) {
      warn(
        'passive and prevent can\'t be used together. ' +
        'Passive handler can\'t prevent default event.',
        range
      );
    }

    // normalize click.right and click.middle since they don't actually fire
    // this is technically browser-specific, but at least for now browsers are
    // the only target envs that have right/middle clicks.
    if (modifiers.right) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
      } else if (name === 'click') {
        name = 'contextmenu';
        delete modifiers.right;
      }
    } else if (modifiers.middle) {
      if (dynamic) {
        name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
      } else if (name === 'click') {
        name = 'mouseup';
      }
    }

    // check capture modifier
    if (modifiers.capture) {
      delete modifiers.capture;
      name = prependModifierMarker('!', name, dynamic);
    }
    if (modifiers.once) {
      delete modifiers.once;
      name = prependModifierMarker('~', name, dynamic);
    }
    /* istanbul ignore if */
    if (modifiers.passive) {
      delete modifiers.passive;
      name = prependModifierMarker('&', name, dynamic);
    }

    var events;
    if (modifiers.native) {
      delete modifiers.native;
      events = el.nativeEvents || (el.nativeEvents = {});
    } else {
      events = el.events || (el.events = {});
    }

    var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
    if (modifiers !== emptyObject) {
      newHandler.modifiers = modifiers;
    }

    var handlers = events[name];
    /* istanbul ignore if */
    if (Array.isArray(handlers)) {
      important ? handlers.unshift(newHandler) : handlers.push(newHandler);
    } else if (handlers) {
      events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
    } else {
      events[name] = newHandler;
    }

    el.plain = false;
  }

  function getRawBindingAttr (
    el,
    name
  ) {
    return el.rawAttrsMap[':' + name] ||
      el.rawAttrsMap['v-bind:' + name] ||
      el.rawAttrsMap[name]
  }

  function getBindingAttr (
    el,
    name,
    getStatic
  ) {
    var dynamicValue =
      getAndRemoveAttr(el, ':' + name) ||
      getAndRemoveAttr(el, 'v-bind:' + name);
    if (dynamicValue != null) {
      return parseFilters(dynamicValue)
    } else if (getStatic !== false) {
      var staticValue = getAndRemoveAttr(el, name);
      if (staticValue != null) {
        return JSON.stringify(staticValue)
      }
    }
  }

  // note: this only removes the attr from the Array (attrsList) so that it
  // doesn't get processed by processAttrs.
  // By default it does NOT remove it from the map (attrsMap) because the map is
  // needed during codegen.
  function getAndRemoveAttr (
    el,
    name,
    removeFromMap
  ) {
    var val;
    if ((val = el.attrsMap[name]) != null) {
      var list = el.attrsList;
      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i].name === name) {
          list.splice(i, 1);
          break
        }
      }
    }
    if (removeFromMap) {
      delete el.attrsMap[name];
    }
    return val
  }

  function getAndRemoveAttrByRegex (
    el,
    name
  ) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      var attr = list[i];
      if (name.test(attr.name)) {
        list.splice(i, 1);
        return attr
      }
    }
  }

  function rangeSetItem (
    item,
    range
  ) {
    if (range) {
      if (range.start != null) {
        item.start = range.start;
      }
      if (range.end != null) {
        item.end = range.end;
      }
    }
    return item
  }

  /*  */

  /**
   * Cross-platform code generation for component v-model
   */
  function genComponentModel (
    el,
    value,
    modifiers
  ) {
    var ref = modifiers || {};
    var number = ref.number;
    var trim = ref.trim;

    var baseValueExpression = '$$v';
    var valueExpression = baseValueExpression;
    if (trim) {
      valueExpression =
        "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }
    var assignment = genAssignmentCode(value, valueExpression);

    el.model = {
      value: ("(" + value + ")"),
      expression: JSON.stringify(value),
      callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
    };
  }

  /**
   * Cross-platform codegen helper for generating v-model value assignment code.
   */
  function genAssignmentCode (
    value,
    assignment
  ) {
    var res = parseModel(value);
    if (res.key === null) {
      return (value + "=" + assignment)
    } else {
      return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
    }
  }

  /**
   * Parse a v-model expression into a base path and a final key segment.
   * Handles both dot-path and possible square brackets.
   *
   * Possible cases:
   *
   * - test
   * - test[key]
   * - test[test1[key]]
   * - test["a"][key]
   * - xxx.test[a[a].test1[key]]
   * - test.xxx.a["asa"][test1[key]]
   *
   */

  var len, str, chr, index$1, expressionPos, expressionEndPos;



  function parseModel (val) {
    // Fix https://github.com/vuejs/vue/pull/7730
    // allow v-model="obj.val " (trailing whitespace)
    val = val.trim();
    len = val.length;

    if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
      index$1 = val.lastIndexOf('.');
      if (index$1 > -1) {
        return {
          exp: val.slice(0, index$1),
          key: '"' + val.slice(index$1 + 1) + '"'
        }
      } else {
        return {
          exp: val,
          key: null
        }
      }
    }

    str = val;
    index$1 = expressionPos = expressionEndPos = 0;

    while (!eof()) {
      chr = next();
      /* istanbul ignore if */
      if (isStringStart(chr)) {
        parseString(chr);
      } else if (chr === 0x5B) {
        parseBracket(chr);
      }
    }

    return {
      exp: val.slice(0, expressionPos),
      key: val.slice(expressionPos + 1, expressionEndPos)
    }
  }

  function next () {
    return str.charCodeAt(++index$1)
  }

  function eof () {
    return index$1 >= len
  }

  function isStringStart (chr) {
    return chr === 0x22 || chr === 0x27
  }

  function parseBracket (chr) {
    var inBracket = 1;
    expressionPos = index$1;
    while (!eof()) {
      chr = next();
      if (isStringStart(chr)) {
        parseString(chr);
        continue
      }
      if (chr === 0x5B) { inBracket++; }
      if (chr === 0x5D) { inBracket--; }
      if (inBracket === 0) {
        expressionEndPos = index$1;
        break
      }
    }
  }

  function parseString (chr) {
    var stringQuote = chr;
    while (!eof()) {
      chr = next();
      if (chr === stringQuote) {
        break
      }
    }
  }

  /*  */

  var warn$1;

  // in some cases, the event used has to be determined at runtime
  // so we used some reserved tokens during compile.
  var RANGE_TOKEN = '__r';
  var CHECKBOX_RADIO_TOKEN = '__c';

  function model (
    el,
    dir,
    _warn
  ) {
    warn$1 = _warn;
    var value = dir.value;
    var modifiers = dir.modifiers;
    var tag = el.tag;
    var type = el.attrsMap.type;

    {
      // inputs with type="file" are read only and setting the input's
      // value will throw an error.
      if (tag === 'input' && type === 'file') {
        warn$1(
          "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
          "File inputs are read only. Use a v-on:change listener instead.",
          el.rawAttrsMap['v-model']
        );
      }
    }

    if (el.component) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else if (tag === 'select') {
      genSelect(el, value, modifiers);
    } else if (tag === 'input' && type === 'checkbox') {
      genCheckboxModel(el, value, modifiers);
    } else if (tag === 'input' && type === 'radio') {
      genRadioModel(el, value, modifiers);
    } else if (tag === 'input' || tag === 'textarea') {
      genDefaultModel(el, value, modifiers);
    } else if (!config.isReservedTag(tag)) {
      genComponentModel(el, value, modifiers);
      // component v-model doesn't need extra runtime
      return false
    } else {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "v-model is not supported on this element type. " +
        'If you are working with contenteditable, it\'s recommended to ' +
        'wrap a library dedicated for that purpose inside a custom component.',
        el.rawAttrsMap['v-model']
      );
    }

    // ensure runtime directive metadata
    return true
  }

  function genCheckboxModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
    var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
    addProp(el, 'checked',
      "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
    );
    addHandler(el, 'change',
      "var $$a=" + value + "," +
          '$$el=$event.target,' +
          "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
      'if(Array.isArray($$a)){' +
        "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
            '$$i=_i($$a,$$v);' +
        "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
        "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
      "}else{" + (genAssignmentCode(value, '$$c')) + "}",
      null, true
    );
  }

  function genRadioModel (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var valueBinding = getBindingAttr(el, 'value') || 'null';
    valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
    addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
    addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
  }

  function genSelect (
    el,
    value,
    modifiers
  ) {
    var number = modifiers && modifiers.number;
    var selectedVal = "Array.prototype.filter" +
      ".call($event.target.options,function(o){return o.selected})" +
      ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
      "return " + (number ? '_n(val)' : 'val') + "})";

    var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
    var code = "var $$selectedVal = " + selectedVal + ";";
    code = code + " " + (genAssignmentCode(value, assignment));
    addHandler(el, 'change', code, null, true);
  }

  function genDefaultModel (
    el,
    value,
    modifiers
  ) {
    var type = el.attrsMap.type;

    // warn if v-bind:value conflicts with v-model
    // except for inputs with v-bind:type
    {
      var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
      var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
      if (value$1 && !typeBinding) {
        var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
        warn$1(
          binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
          'because the latter already expands to a value binding internally',
          el.rawAttrsMap[binding]
        );
      }
    }

    var ref = modifiers || {};
    var lazy = ref.lazy;
    var number = ref.number;
    var trim = ref.trim;
    var needCompositionGuard = !lazy && type !== 'range';
    var event = lazy
      ? 'change'
      : type === 'range'
        ? RANGE_TOKEN
        : 'input';

    var valueExpression = '$event.target.value';
    if (trim) {
      valueExpression = "$event.target.value.trim()";
    }
    if (number) {
      valueExpression = "_n(" + valueExpression + ")";
    }

    var code = genAssignmentCode(value, valueExpression);
    if (needCompositionGuard) {
      code = "if($event.target.composing)return;" + code;
    }

    addProp(el, 'value', ("(" + value + ")"));
    addHandler(el, event, code, null, true);
    if (trim || number) {
      addHandler(el, 'blur', '$forceUpdate()');
    }
  }

  /*  */

  // normalize v-model event tokens that can only be determined at runtime.
  // it's important to place the event as the first in the array because
  // the whole point is ensuring the v-model callback gets called before
  // user-attached handlers.
  function normalizeEvents (on) {
    /* istanbul ignore if */
    if (isDef(on[RANGE_TOKEN])) {
      // IE input[type=range] only supports `change` event
      var event = isIE ? 'change' : 'input';
      on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
      delete on[RANGE_TOKEN];
    }
    // This was originally intended to fix #4521 but no longer necessary
    // after 2.5. Keeping it for backwards compat with generated code from < 2.4
    /* istanbul ignore if */
    if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
      on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
      delete on[CHECKBOX_RADIO_TOKEN];
    }
  }

  var target$1;

  function createOnceHandler$1 (event, handler, capture) {
    var _target = target$1; // save current target element in closure
    return function onceHandler () {
      var res = handler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, onceHandler, capture, _target);
      }
    }
  }

  // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
  // implementation and does not fire microtasks in between event propagation, so
  // safe to exclude.
  var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

  function add$1 (
    name,
    handler,
    capture,
    passive
  ) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    if (useMicrotaskFix) {
      var attachedTimestamp = currentFlushTimestamp;
      var original = handler;
      handler = original._wrapper = function (e) {
        if (
          // no bubbling, should always fire.
          // this is just a safety net in case event.timeStamp is unreliable in
          // certain weird environments...
          e.target === e.currentTarget ||
          // event is fired after handler attachment
          e.timeStamp >= attachedTimestamp ||
          // bail for environments that have buggy event.timeStamp implementations
          // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
          // #9681 QtWebEngine event.timeStamp is negative value
          e.timeStamp <= 0 ||
          // #9448 bail if event is fired in another document in a multi-page
          // electron/nw.js app, since event.timeStamp will be using a different
          // starting reference
          e.target.ownerDocument !== document
        ) {
          return original.apply(this, arguments)
        }
      };
    }
    target$1.addEventListener(
      name,
      handler,
      supportsPassive
        ? { capture: capture, passive: passive }
        : capture
    );
  }

  function remove$2 (
    name,
    handler,
    capture,
    _target
  ) {
    (_target || target$1).removeEventListener(
      name,
      handler._wrapper || handler,
      capture
    );
  }

  function updateDOMListeners (oldVnode, vnode) {
    if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
      return
    }
    var on = vnode.data.on || {};
    var oldOn = oldVnode.data.on || {};
    target$1 = vnode.elm;
    normalizeEvents(on);
    updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
    target$1 = undefined;
  }

  var events = {
    create: updateDOMListeners,
    update: updateDOMListeners
  };

  /*  */

  var svgContainer;

  function updateDOMProps (oldVnode, vnode) {
    if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
      return
    }
    var key, cur;
    var elm = vnode.elm;
    var oldProps = oldVnode.data.domProps || {};
    var props = vnode.data.domProps || {};
    // clone observed objects, as the user probably wants to mutate it
    if (isDef(props.__ob__)) {
      props = vnode.data.domProps = extend({}, props);
    }

    for (key in oldProps) {
      if (!(key in props)) {
        elm[key] = '';
      }
    }

    for (key in props) {
      cur = props[key];
      // ignore children if the node has textContent or innerHTML,
      // as these will throw away existing DOM nodes and cause removal errors
      // on subsequent patches (#3360)
      if (key === 'textContent' || key === 'innerHTML') {
        if (vnode.children) { vnode.children.length = 0; }
        if (cur === oldProps[key]) { continue }
        // #6601 work around Chrome version <= 55 bug where single textNode
        // replaced by innerHTML/textContent retains its parentNode property
        if (elm.childNodes.length === 1) {
          elm.removeChild(elm.childNodes[0]);
        }
      }

      if (key === 'value' && elm.tagName !== 'PROGRESS') {
        // store value as _value as well since
        // non-string values will be stringified
        elm._value = cur;
        // avoid resetting cursor position when value is the same
        var strCur = isUndef(cur) ? '' : String(cur);
        if (shouldUpdateValue(elm, strCur)) {
          elm.value = strCur;
        }
      } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
        // IE doesn't support innerHTML for SVG elements
        svgContainer = svgContainer || document.createElement('div');
        svgContainer.innerHTML = "<svg>" + cur + "</svg>";
        var svg = svgContainer.firstChild;
        while (elm.firstChild) {
          elm.removeChild(elm.firstChild);
        }
        while (svg.firstChild) {
          elm.appendChild(svg.firstChild);
        }
      } else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecesarry `checked` update.
        cur !== oldProps[key]
      ) {
        // some property updates can throw
        // e.g. `value` on <progress> w/ non-finite value
        try {
          elm[key] = cur;
        } catch (e) {}
      }
    }
  }

  // check platforms/web/util/attrs.js acceptValue


  function shouldUpdateValue (elm, checkVal) {
    return (!elm.composing && (
      elm.tagName === 'OPTION' ||
      isNotInFocusAndDirty(elm, checkVal) ||
      isDirtyWithModifiers(elm, checkVal)
    ))
  }

  function isNotInFocusAndDirty (elm, checkVal) {
    // return true when textbox (.number and .trim) loses focus and its value is
    // not equal to the updated value
    var notInFocus = true;
    // #6157
    // work around IE bug when accessing document.activeElement in an iframe
    try { notInFocus = document.activeElement !== elm; } catch (e) {}
    return notInFocus && elm.value !== checkVal
  }

  function isDirtyWithModifiers (elm, newVal) {
    var value = elm.value;
    var modifiers = elm._vModifiers; // injected by v-model runtime
    if (isDef(modifiers)) {
      if (modifiers.number) {
        return toNumber(value) !== toNumber(newVal)
      }
      if (modifiers.trim) {
        return value.trim() !== newVal.trim()
      }
    }
    return value !== newVal
  }

  var domProps = {
    create: updateDOMProps,
    update: updateDOMProps
  };

  /*  */

  var parseStyleText = cached(function (cssText) {
    var res = {};
    var listDelimiter = /;(?![^(]*\))/g;
    var propertyDelimiter = /:(.+)/;
    cssText.split(listDelimiter).forEach(function (item) {
      if (item) {
        var tmp = item.split(propertyDelimiter);
        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return res
  });

  // merge static and dynamic style data on the same vnode
  function normalizeStyleData (data) {
    var style = normalizeStyleBinding(data.style);
    // static style is pre-processed into an object during compilation
    // and is always a fresh object, so it's safe to merge into it
    return data.staticStyle
      ? extend(data.staticStyle, style)
      : style
  }

  // normalize possible array / string values into Object
  function normalizeStyleBinding (bindingStyle) {
    if (Array.isArray(bindingStyle)) {
      return toObject(bindingStyle)
    }
    if (typeof bindingStyle === 'string') {
      return parseStyleText(bindingStyle)
    }
    return bindingStyle
  }

  /**
   * parent component style should be after child's
   * so that parent component's style could override it
   */
  function getStyle (vnode, checkChild) {
    var res = {};
    var styleData;

    if (checkChild) {
      var childNode = vnode;
      while (childNode.componentInstance) {
        childNode = childNode.componentInstance._vnode;
        if (
          childNode && childNode.data &&
          (styleData = normalizeStyleData(childNode.data))
        ) {
          extend(res, styleData);
        }
      }
    }

    if ((styleData = normalizeStyleData(vnode.data))) {
      extend(res, styleData);
    }

    var parentNode = vnode;
    while ((parentNode = parentNode.parent)) {
      if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
        extend(res, styleData);
      }
    }
    return res
  }

  /*  */

  var cssVarRE = /^--/;
  var importantRE = /\s*!important$/;
  var setProp = function (el, name, val) {
    /* istanbul ignore if */
    if (cssVarRE.test(name)) {
      el.style.setProperty(name, val);
    } else if (importantRE.test(val)) {
      el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
    } else {
      var normalizedName = normalize(name);
      if (Array.isArray(val)) {
        // Support values array created by autoprefixer, e.g.
        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
        // Set them one by one, and the browser will only set those it can recognize
        for (var i = 0, len = val.length; i < len; i++) {
          el.style[normalizedName] = val[i];
        }
      } else {
        el.style[normalizedName] = val;
      }
    }
  };

  var vendorNames = ['Webkit', 'Moz', 'ms'];

  var emptyStyle;
  var normalize = cached(function (prop) {
    emptyStyle = emptyStyle || document.createElement('div').style;
    prop = camelize(prop);
    if (prop !== 'filter' && (prop in emptyStyle)) {
      return prop
    }
    var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
    for (var i = 0; i < vendorNames.length; i++) {
      var name = vendorNames[i] + capName;
      if (name in emptyStyle) {
        return name
      }
    }
  });

  function updateStyle (oldVnode, vnode) {
    var data = vnode.data;
    var oldData = oldVnode.data;

    if (isUndef(data.staticStyle) && isUndef(data.style) &&
      isUndef(oldData.staticStyle) && isUndef(oldData.style)
    ) {
      return
    }

    var cur, name;
    var el = vnode.elm;
    var oldStaticStyle = oldData.staticStyle;
    var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

    // if static style exists, stylebinding already merged into it when doing normalizeStyleData
    var oldStyle = oldStaticStyle || oldStyleBinding;

    var style = normalizeStyleBinding(vnode.data.style) || {};

    // store normalized style under a different key for next diff
    // make sure to clone it if it's reactive, since the user likely wants
    // to mutate it.
    vnode.data.normalizedStyle = isDef(style.__ob__)
      ? extend({}, style)
      : style;

    var newStyle = getStyle(vnode, true);

    for (name in oldStyle) {
      if (isUndef(newStyle[name])) {
        setProp(el, name, '');
      }
    }
    for (name in newStyle) {
      cur = newStyle[name];
      if (cur !== oldStyle[name]) {
        // ie9 setting to null has no effect, must use empty string
        setProp(el, name, cur == null ? '' : cur);
      }
    }
  }

  var style = {
    create: updateStyle,
    update: updateStyle
  };

  /*  */

  var whitespaceRE = /\s+/;

  /**
   * Add class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function addClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
      } else {
        el.classList.add(cls);
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      if (cur.indexOf(' ' + cls + ' ') < 0) {
        el.setAttribute('class', (cur + cls).trim());
      }
    }
  }

  /**
   * Remove class with compatibility for SVG since classList is not supported on
   * SVG elements in IE
   */
  function removeClass (el, cls) {
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
      return
    }

    /* istanbul ignore else */
    if (el.classList) {
      if (cls.indexOf(' ') > -1) {
        cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
      } else {
        el.classList.remove(cls);
      }
      if (!el.classList.length) {
        el.removeAttribute('class');
      }
    } else {
      var cur = " " + (el.getAttribute('class') || '') + " ";
      var tar = ' ' + cls + ' ';
      while (cur.indexOf(tar) >= 0) {
        cur = cur.replace(tar, ' ');
      }
      cur = cur.trim();
      if (cur) {
        el.setAttribute('class', cur);
      } else {
        el.removeAttribute('class');
      }
    }
  }

  /*  */

  function resolveTransition (def$$1) {
    if (!def$$1) {
      return
    }
    /* istanbul ignore else */
    if (typeof def$$1 === 'object') {
      var res = {};
      if (def$$1.css !== false) {
        extend(res, autoCssTransition(def$$1.name || 'v'));
      }
      extend(res, def$$1);
      return res
    } else if (typeof def$$1 === 'string') {
      return autoCssTransition(def$$1)
    }
  }

  var autoCssTransition = cached(function (name) {
    return {
      enterClass: (name + "-enter"),
      enterToClass: (name + "-enter-to"),
      enterActiveClass: (name + "-enter-active"),
      leaveClass: (name + "-leave"),
      leaveToClass: (name + "-leave-to"),
      leaveActiveClass: (name + "-leave-active")
    }
  });

  var hasTransition = inBrowser && !isIE9;
  var TRANSITION = 'transition';
  var ANIMATION = 'animation';

  // Transition property/event sniffing
  var transitionProp = 'transition';
  var transitionEndEvent = 'transitionend';
  var animationProp = 'animation';
  var animationEndEvent = 'animationend';
  if (hasTransition) {
    /* istanbul ignore if */
    if (window.ontransitionend === undefined &&
      window.onwebkittransitionend !== undefined
    ) {
      transitionProp = 'WebkitTransition';
      transitionEndEvent = 'webkitTransitionEnd';
    }
    if (window.onanimationend === undefined &&
      window.onwebkitanimationend !== undefined
    ) {
      animationProp = 'WebkitAnimation';
      animationEndEvent = 'webkitAnimationEnd';
    }
  }

  // binding to window is necessary to make hot reload work in IE in strict mode
  var raf = inBrowser
    ? window.requestAnimationFrame
      ? window.requestAnimationFrame.bind(window)
      : setTimeout
    : /* istanbul ignore next */ function (fn) { return fn(); };

  function nextFrame (fn) {
    raf(function () {
      raf(fn);
    });
  }

  function addTransitionClass (el, cls) {
    var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
    if (transitionClasses.indexOf(cls) < 0) {
      transitionClasses.push(cls);
      addClass(el, cls);
    }
  }

  function removeTransitionClass (el, cls) {
    if (el._transitionClasses) {
      remove(el._transitionClasses, cls);
    }
    removeClass(el, cls);
  }

  function whenTransitionEnds (
    el,
    expectedType,
    cb
  ) {
    var ref = getTransitionInfo(el, expectedType);
    var type = ref.type;
    var timeout = ref.timeout;
    var propCount = ref.propCount;
    if (!type) { return cb() }
    var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
    var ended = 0;
    var end = function () {
      el.removeEventListener(event, onEnd);
      cb();
    };
    var onEnd = function (e) {
      if (e.target === el) {
        if (++ended >= propCount) {
          end();
        }
      }
    };
    setTimeout(function () {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(event, onEnd);
  }

  var transformRE = /\b(transform|all)(,|$)/;

  function getTransitionInfo (el, expectedType) {
    var styles = window.getComputedStyle(el);
    // JSDOM may return undefined for transition properties
    var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
    var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
    var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
    var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
    var animationTimeout = getTimeout(animationDelays, animationDurations);

    var type;
    var timeout = 0;
    var propCount = 0;
    /* istanbul ignore if */
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0
        ? transitionTimeout > animationTimeout
          ? TRANSITION
          : ANIMATION
        : null;
      propCount = type
        ? type === TRANSITION
          ? transitionDurations.length
          : animationDurations.length
        : 0;
    }
    var hasTransform =
      type === TRANSITION &&
      transformRE.test(styles[transitionProp + 'Property']);
    return {
      type: type,
      timeout: timeout,
      propCount: propCount,
      hasTransform: hasTransform
    }
  }

  function getTimeout (delays, durations) {
    /* istanbul ignore next */
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }

    return Math.max.apply(null, durations.map(function (d, i) {
      return toMs(d) + toMs(delays[i])
    }))
  }

  // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
  // in a locale-dependent way, using a comma instead of a dot.
  // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
  // as a floor function) causing unexpected behaviors
  function toMs (s) {
    return Number(s.slice(0, -1).replace(',', '.')) * 1000
  }

  /*  */

  function enter (vnode, toggleDisplay) {
    var el = vnode.elm;

    // call leave callback now
    if (isDef(el._leaveCb)) {
      el._leaveCb.cancelled = true;
      el._leaveCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data)) {
      return
    }

    /* istanbul ignore if */
    if (isDef(el._enterCb) || el.nodeType !== 1) {
      return
    }

    var css = data.css;
    var type = data.type;
    var enterClass = data.enterClass;
    var enterToClass = data.enterToClass;
    var enterActiveClass = data.enterActiveClass;
    var appearClass = data.appearClass;
    var appearToClass = data.appearToClass;
    var appearActiveClass = data.appearActiveClass;
    var beforeEnter = data.beforeEnter;
    var enter = data.enter;
    var afterEnter = data.afterEnter;
    var enterCancelled = data.enterCancelled;
    var beforeAppear = data.beforeAppear;
    var appear = data.appear;
    var afterAppear = data.afterAppear;
    var appearCancelled = data.appearCancelled;
    var duration = data.duration;

    // activeInstance will always be the <transition> component managing this
    // transition. One edge case to check is when the <transition> is placed
    // as the root node of a child component. In that case we need to check
    // <transition>'s parent for appear check.
    var context = activeInstance;
    var transitionNode = activeInstance.$vnode;
    while (transitionNode && transitionNode.parent) {
      context = transitionNode.context;
      transitionNode = transitionNode.parent;
    }

    var isAppear = !context._isMounted || !vnode.isRootInsert;

    if (isAppear && !appear && appear !== '') {
      return
    }

    var startClass = isAppear && appearClass
      ? appearClass
      : enterClass;
    var activeClass = isAppear && appearActiveClass
      ? appearActiveClass
      : enterActiveClass;
    var toClass = isAppear && appearToClass
      ? appearToClass
      : enterToClass;

    var beforeEnterHook = isAppear
      ? (beforeAppear || beforeEnter)
      : beforeEnter;
    var enterHook = isAppear
      ? (typeof appear === 'function' ? appear : enter)
      : enter;
    var afterEnterHook = isAppear
      ? (afterAppear || afterEnter)
      : afterEnter;
    var enterCancelledHook = isAppear
      ? (appearCancelled || enterCancelled)
      : enterCancelled;

    var explicitEnterDuration = toNumber(
      isObject(duration)
        ? duration.enter
        : duration
    );

    if (explicitEnterDuration != null) {
      checkDuration(explicitEnterDuration, 'enter', vnode);
    }

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(enterHook);

    var cb = el._enterCb = once(function () {
      if (expectsCSS) {
        removeTransitionClass(el, toClass);
        removeTransitionClass(el, activeClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, startClass);
        }
        enterCancelledHook && enterCancelledHook(el);
      } else {
        afterEnterHook && afterEnterHook(el);
      }
      el._enterCb = null;
    });

    if (!vnode.data.show) {
      // remove pending leave element on enter by injecting an insert hook
      mergeVNodeHook(vnode, 'insert', function () {
        var parent = el.parentNode;
        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
        if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb
        ) {
          pendingNode.elm._leaveCb();
        }
        enterHook && enterHook(el, cb);
      });
    }

    // start enter transition
    beforeEnterHook && beforeEnterHook(el);
    if (expectsCSS) {
      addTransitionClass(el, startClass);
      addTransitionClass(el, activeClass);
      nextFrame(function () {
        removeTransitionClass(el, startClass);
        if (!cb.cancelled) {
          addTransitionClass(el, toClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitEnterDuration)) {
              setTimeout(cb, explicitEnterDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    if (vnode.data.show) {
      toggleDisplay && toggleDisplay();
      enterHook && enterHook(el, cb);
    }

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }

  function leave (vnode, rm) {
    var el = vnode.elm;

    // call enter callback now
    if (isDef(el._enterCb)) {
      el._enterCb.cancelled = true;
      el._enterCb();
    }

    var data = resolveTransition(vnode.data.transition);
    if (isUndef(data) || el.nodeType !== 1) {
      return rm()
    }

    /* istanbul ignore if */
    if (isDef(el._leaveCb)) {
      return
    }

    var css = data.css;
    var type = data.type;
    var leaveClass = data.leaveClass;
    var leaveToClass = data.leaveToClass;
    var leaveActiveClass = data.leaveActiveClass;
    var beforeLeave = data.beforeLeave;
    var leave = data.leave;
    var afterLeave = data.afterLeave;
    var leaveCancelled = data.leaveCancelled;
    var delayLeave = data.delayLeave;
    var duration = data.duration;

    var expectsCSS = css !== false && !isIE9;
    var userWantsControl = getHookArgumentsLength(leave);

    var explicitLeaveDuration = toNumber(
      isObject(duration)
        ? duration.leave
        : duration
    );

    if (isDef(explicitLeaveDuration)) {
      checkDuration(explicitLeaveDuration, 'leave', vnode);
    }

    var cb = el._leaveCb = once(function () {
      if (el.parentNode && el.parentNode._pending) {
        el.parentNode._pending[vnode.key] = null;
      }
      if (expectsCSS) {
        removeTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveActiveClass);
      }
      if (cb.cancelled) {
        if (expectsCSS) {
          removeTransitionClass(el, leaveClass);
        }
        leaveCancelled && leaveCancelled(el);
      } else {
        rm();
        afterLeave && afterLeave(el);
      }
      el._leaveCb = null;
    });

    if (delayLeave) {
      delayLeave(performLeave);
    } else {
      performLeave();
    }

    function performLeave () {
      // the delayed leave may have already been cancelled
      if (cb.cancelled) {
        return
      }
      // record leaving element
      if (!vnode.data.show && el.parentNode) {
        (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
      }
      beforeLeave && beforeLeave(el);
      if (expectsCSS) {
        addTransitionClass(el, leaveClass);
        addTransitionClass(el, leaveActiveClass);
        nextFrame(function () {
          removeTransitionClass(el, leaveClass);
          if (!cb.cancelled) {
            addTransitionClass(el, leaveToClass);
            if (!userWantsControl) {
              if (isValidDuration(explicitLeaveDuration)) {
                setTimeout(cb, explicitLeaveDuration);
              } else {
                whenTransitionEnds(el, type, cb);
              }
            }
          }
        });
      }
      leave && leave(el, cb);
      if (!expectsCSS && !userWantsControl) {
        cb();
      }
    }
  }

  // only used in dev mode
  function checkDuration (val, name, vnode) {
    if (typeof val !== 'number') {
      warn(
        "<transition> explicit " + name + " duration is not a valid number - " +
        "got " + (JSON.stringify(val)) + ".",
        vnode.context
      );
    } else if (isNaN(val)) {
      warn(
        "<transition> explicit " + name + " duration is NaN - " +
        'the duration expression might be incorrect.',
        vnode.context
      );
    }
  }

  function isValidDuration (val) {
    return typeof val === 'number' && !isNaN(val)
  }

  /**
   * Normalize a transition hook's argument length. The hook may be:
   * - a merged hook (invoker) with the original in .fns
   * - a wrapped component method (check ._length)
   * - a plain function (.length)
   */
  function getHookArgumentsLength (fn) {
    if (isUndef(fn)) {
      return false
    }
    var invokerFns = fn.fns;
    if (isDef(invokerFns)) {
      // invoker
      return getHookArgumentsLength(
        Array.isArray(invokerFns)
          ? invokerFns[0]
          : invokerFns
      )
    } else {
      return (fn._length || fn.length) > 1
    }
  }

  function _enter (_, vnode) {
    if (vnode.data.show !== true) {
      enter(vnode);
    }
  }

  var transition = inBrowser ? {
    create: _enter,
    activate: _enter,
    remove: function remove$$1 (vnode, rm) {
      /* istanbul ignore else */
      if (vnode.data.show !== true) {
        leave(vnode, rm);
      } else {
        rm();
      }
    }
  } : {};

  var platformModules = [
    attrs,
    klass,
    events,
    domProps,
    style,
    transition
  ];

  /*  */

  // the directive module should be applied last, after all
  // built-in modules have been applied.
  var modules = platformModules.concat(baseModules);

  var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

  /**
   * Not type checking this file because flow doesn't like attaching
   * properties to Elements.
   */

  /* istanbul ignore if */
  if (isIE9) {
    // http://www.matts411.com/post/internet-explorer-9-oninput/
    document.addEventListener('selectionchange', function () {
      var el = document.activeElement;
      if (el && el.vmodel) {
        trigger(el, 'input');
      }
    });
  }

  var directive = {
    inserted: function inserted (el, binding, vnode, oldVnode) {
      if (vnode.tag === 'select') {
        // #6903
        if (oldVnode.elm && !oldVnode.elm._vOptions) {
          mergeVNodeHook(vnode, 'postpatch', function () {
            directive.componentUpdated(el, binding, vnode);
          });
        } else {
          setSelected(el, binding, vnode.context);
        }
        el._vOptions = [].map.call(el.options, getValue);
      } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
        el._vModifiers = binding.modifiers;
        if (!binding.modifiers.lazy) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
          // Safari < 10.2 & UIWebView doesn't fire compositionend when
          // switching focus before confirming composition choice
          // this also fixes the issue where some browsers e.g. iOS Chrome
          // fires "change" instead of "input" on autocomplete.
          el.addEventListener('change', onCompositionEnd);
          /* istanbul ignore if */
          if (isIE9) {
            el.vmodel = true;
          }
        }
      }
    },

    componentUpdated: function componentUpdated (el, binding, vnode) {
      if (vnode.tag === 'select') {
        setSelected(el, binding, vnode.context);
        // in case the options rendered by v-for have changed,
        // it's possible that the value is out-of-sync with the rendered options.
        // detect such cases and filter out values that no longer has a matching
        // option in the DOM.
        var prevOptions = el._vOptions;
        var curOptions = el._vOptions = [].map.call(el.options, getValue);
        if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
          // trigger change event if
          // no matching option found for at least one value
          var needReset = el.multiple
            ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
            : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
          if (needReset) {
            trigger(el, 'change');
          }
        }
      }
    }
  };

  function setSelected (el, binding, vm) {
    actuallySetSelected(el, binding, vm);
    /* istanbul ignore if */
    if (isIE || isEdge) {
      setTimeout(function () {
        actuallySetSelected(el, binding, vm);
      }, 0);
    }
  }

  function actuallySetSelected (el, binding, vm) {
    var value = binding.value;
    var isMultiple = el.multiple;
    if (isMultiple && !Array.isArray(value)) {
      warn(
        "<select multiple v-model=\"" + (binding.expression) + "\"> " +
        "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
        vm
      );
      return
    }
    var selected, option;
    for (var i = 0, l = el.options.length; i < l; i++) {
      option = el.options[i];
      if (isMultiple) {
        selected = looseIndexOf(value, getValue(option)) > -1;
        if (option.selected !== selected) {
          option.selected = selected;
        }
      } else {
        if (looseEqual(getValue(option), value)) {
          if (el.selectedIndex !== i) {
            el.selectedIndex = i;
          }
          return
        }
      }
    }
    if (!isMultiple) {
      el.selectedIndex = -1;
    }
  }

  function hasNoMatchingOption (value, options) {
    return options.every(function (o) { return !looseEqual(o, value); })
  }

  function getValue (option) {
    return '_value' in option
      ? option._value
      : option.value
  }

  function onCompositionStart (e) {
    e.target.composing = true;
  }

  function onCompositionEnd (e) {
    // prevent triggering an input event for no reason
    if (!e.target.composing) { return }
    e.target.composing = false;
    trigger(e.target, 'input');
  }

  function trigger (el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  }

  /*  */

  // recursively search for possible transition defined inside the component root
  function locateNode (vnode) {
    return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
      ? locateNode(vnode.componentInstance._vnode)
      : vnode
  }

  var show = {
    bind: function bind (el, ref, vnode) {
      var value = ref.value;

      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      var originalDisplay = el.__vOriginalDisplay =
        el.style.display === 'none' ? '' : el.style.display;
      if (value && transition$$1) {
        vnode.data.show = true;
        enter(vnode, function () {
          el.style.display = originalDisplay;
        });
      } else {
        el.style.display = value ? originalDisplay : 'none';
      }
    },

    update: function update (el, ref, vnode) {
      var value = ref.value;
      var oldValue = ref.oldValue;

      /* istanbul ignore if */
      if (!value === !oldValue) { return }
      vnode = locateNode(vnode);
      var transition$$1 = vnode.data && vnode.data.transition;
      if (transition$$1) {
        vnode.data.show = true;
        if (value) {
          enter(vnode, function () {
            el.style.display = el.__vOriginalDisplay;
          });
        } else {
          leave(vnode, function () {
            el.style.display = 'none';
          });
        }
      } else {
        el.style.display = value ? el.__vOriginalDisplay : 'none';
      }
    },

    unbind: function unbind (
      el,
      binding,
      vnode,
      oldVnode,
      isDestroy
    ) {
      if (!isDestroy) {
        el.style.display = el.__vOriginalDisplay;
      }
    }
  };

  var platformDirectives = {
    model: directive,
    show: show
  };

  /*  */

  var transitionProps = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  // in case the child is also an abstract component, e.g. <keep-alive>
  // we want to recursively retrieve the real component to be rendered
  function getRealChild (vnode) {
    var compOptions = vnode && vnode.componentOptions;
    if (compOptions && compOptions.Ctor.options.abstract) {
      return getRealChild(getFirstComponentChild(compOptions.children))
    } else {
      return vnode
    }
  }

  function extractTransitionData (comp) {
    var data = {};
    var options = comp.$options;
    // props
    for (var key in options.propsData) {
      data[key] = comp[key];
    }
    // events.
    // extract listeners and pass them directly to the transition methods
    var listeners = options._parentListeners;
    for (var key$1 in listeners) {
      data[camelize(key$1)] = listeners[key$1];
    }
    return data
  }

  function placeholder (h, rawChild) {
    if (/\d-keep-alive$/.test(rawChild.tag)) {
      return h('keep-alive', {
        props: rawChild.componentOptions.propsData
      })
    }
  }

  function hasParentTransition (vnode) {
    while ((vnode = vnode.parent)) {
      if (vnode.data.transition) {
        return true
      }
    }
  }

  function isSameChild (child, oldChild) {
    return oldChild.key === child.key && oldChild.tag === child.tag
  }

  var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

  var isVShowDirective = function (d) { return d.name === 'show'; };

  var Transition = {
    name: 'transition',
    props: transitionProps,
    abstract: true,

    render: function render (h) {
      var this$1 = this;

      var children = this.$slots.default;
      if (!children) {
        return
      }

      // filter out text nodes (possible whitespaces)
      children = children.filter(isNotTextNode);
      /* istanbul ignore if */
      if (!children.length) {
        return
      }

      // warn multiple elements
      if (children.length > 1) {
        warn(
          '<transition> can only be used on a single element. Use ' +
          '<transition-group> for lists.',
          this.$parent
        );
      }

      var mode = this.mode;

      // warn invalid mode
      if (mode && mode !== 'in-out' && mode !== 'out-in'
      ) {
        warn(
          'invalid <transition> mode: ' + mode,
          this.$parent
        );
      }

      var rawChild = children[0];

      // if this is a component root node and the component's
      // parent container node also has transition, skip.
      if (hasParentTransition(this.$vnode)) {
        return rawChild
      }

      // apply transition data to child
      // use getRealChild() to ignore abstract components e.g. keep-alive
      var child = getRealChild(rawChild);
      /* istanbul ignore if */
      if (!child) {
        return rawChild
      }

      if (this._leaving) {
        return placeholder(h, rawChild)
      }

      // ensure a key that is unique to the vnode type and to this transition
      // component instance. This key will be used to remove pending leaving nodes
      // during entering.
      var id = "__transition-" + (this._uid) + "-";
      child.key = child.key == null
        ? child.isComment
          ? id + 'comment'
          : id + child.tag
        : isPrimitive(child.key)
          ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
          : child.key;

      var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
      var oldRawChild = this._vnode;
      var oldChild = getRealChild(oldRawChild);

      // mark v-show
      // so that the transition module can hand over the control to the directive
      if (child.data.directives && child.data.directives.some(isVShowDirective)) {
        child.data.show = true;
      }

      if (
        oldChild &&
        oldChild.data &&
        !isSameChild(child, oldChild) &&
        !isAsyncPlaceholder(oldChild) &&
        // #6687 component root is a comment node
        !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
      ) {
        // replace old child transition data with fresh one
        // important for dynamic transitions!
        var oldData = oldChild.data.transition = extend({}, data);
        // handle transition mode
        if (mode === 'out-in') {
          // return placeholder node and queue update when leave finishes
          this._leaving = true;
          mergeVNodeHook(oldData, 'afterLeave', function () {
            this$1._leaving = false;
            this$1.$forceUpdate();
          });
          return placeholder(h, rawChild)
        } else if (mode === 'in-out') {
          if (isAsyncPlaceholder(child)) {
            return oldRawChild
          }
          var delayedLeave;
          var performLeave = function () { delayedLeave(); };
          mergeVNodeHook(data, 'afterEnter', performLeave);
          mergeVNodeHook(data, 'enterCancelled', performLeave);
          mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
        }
      }

      return rawChild
    }
  };

  /*  */

  var props = extend({
    tag: String,
    moveClass: String
  }, transitionProps);

  delete props.mode;

  var TransitionGroup = {
    props: props,

    beforeMount: function beforeMount () {
      var this$1 = this;

      var update = this._update;
      this._update = function (vnode, hydrating) {
        var restoreActiveInstance = setActiveInstance(this$1);
        // force removing pass
        this$1.__patch__(
          this$1._vnode,
          this$1.kept,
          false, // hydrating
          true // removeOnly (!important, avoids unnecessary moves)
        );
        this$1._vnode = this$1.kept;
        restoreActiveInstance();
        update.call(this$1, vnode, hydrating);
      };
    },

    render: function render (h) {
      var tag = this.tag || this.$vnode.data.tag || 'span';
      var map = Object.create(null);
      var prevChildren = this.prevChildren = this.children;
      var rawChildren = this.$slots.default || [];
      var children = this.children = [];
      var transitionData = extractTransitionData(this);

      for (var i = 0; i < rawChildren.length; i++) {
        var c = rawChildren[i];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
            children.push(c);
            map[c.key] = c
            ;(c.data || (c.data = {})).transition = transitionData;
          } else {
            var opts = c.componentOptions;
            var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
            warn(("<transition-group> children must be keyed: <" + name + ">"));
          }
        }
      }

      if (prevChildren) {
        var kept = [];
        var removed = [];
        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
          var c$1 = prevChildren[i$1];
          c$1.data.transition = transitionData;
          c$1.data.pos = c$1.elm.getBoundingClientRect();
          if (map[c$1.key]) {
            kept.push(c$1);
          } else {
            removed.push(c$1);
          }
        }
        this.kept = h(tag, null, kept);
        this.removed = removed;
      }

      return h(tag, null, children)
    },

    updated: function updated () {
      var children = this.prevChildren;
      var moveClass = this.moveClass || ((this.name || 'v') + '-move');
      if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
        return
      }

      // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.
      children.forEach(callPendingCbs);
      children.forEach(recordPosition);
      children.forEach(applyTranslation);

      // force reflow to put everything in position
      // assign to this to avoid being removed in tree-shaking
      // $flow-disable-line
      this._reflow = document.body.offsetHeight;

      children.forEach(function (c) {
        if (c.data.moved) {
          var el = c.elm;
          var s = el.style;
          addTransitionClass(el, moveClass);
          s.transform = s.WebkitTransform = s.transitionDuration = '';
          el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
            if (e && e.target !== el) {
              return
            }
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener(transitionEndEvent, cb);
              el._moveCb = null;
              removeTransitionClass(el, moveClass);
            }
          });
        }
      });
    },

    methods: {
      hasMove: function hasMove (el, moveClass) {
        /* istanbul ignore if */
        if (!hasTransition) {
          return false
        }
        /* istanbul ignore if */
        if (this._hasMove) {
          return this._hasMove
        }
        // Detect whether an element with the move class applied has
        // CSS transitions. Since the element may be inside an entering
        // transition at this very moment, we make a clone of it and remove
        // all other transition classes applied to ensure only the move class
        // is applied.
        var clone = el.cloneNode();
        if (el._transitionClasses) {
          el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
        }
        addClass(clone, moveClass);
        clone.style.display = 'none';
        this.$el.appendChild(clone);
        var info = getTransitionInfo(clone);
        this.$el.removeChild(clone);
        return (this._hasMove = info.hasTransform)
      }
    }
  };

  function callPendingCbs (c) {
    /* istanbul ignore if */
    if (c.elm._moveCb) {
      c.elm._moveCb();
    }
    /* istanbul ignore if */
    if (c.elm._enterCb) {
      c.elm._enterCb();
    }
  }

  function recordPosition (c) {
    c.data.newPos = c.elm.getBoundingClientRect();
  }

  function applyTranslation (c) {
    var oldPos = c.data.pos;
    var newPos = c.data.newPos;
    var dx = oldPos.left - newPos.left;
    var dy = oldPos.top - newPos.top;
    if (dx || dy) {
      c.data.moved = true;
      var s = c.elm.style;
      s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
      s.transitionDuration = '0s';
    }
  }

  var platformComponents = {
    Transition: Transition,
    TransitionGroup: TransitionGroup
  };

  /*  */

  // install platform specific utils
  Vue.config.mustUseProp = mustUseProp;
  Vue.config.isReservedTag = isReservedTag;
  Vue.config.isReservedAttr = isReservedAttr;
  Vue.config.getTagNamespace = getTagNamespace;
  Vue.config.isUnknownElement = isUnknownElement;

  // install platform runtime directives & components
  extend(Vue.options.directives, platformDirectives);
  extend(Vue.options.components, platformComponents);

  // install platform patch function
  Vue.prototype.__patch__ = inBrowser ? patch : noop;

  // public mount method
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && inBrowser ? query(el) : undefined;
    return mountComponent(this, el, hydrating)
  };

  // devtools global hook
  /* istanbul ignore next */
  if (inBrowser) {
    setTimeout(function () {
      if (config.devtools) {
        if (devtools) {
          devtools.emit('init', Vue);
        } else {
          console[console.info ? 'info' : 'log'](
            'Download the Vue Devtools extension for a better development experience:\n' +
            'https://github.com/vuejs/vue-devtools'
          );
        }
      }
      if (config.productionTip !== false &&
        typeof console !== 'undefined'
      ) {
        console[console.info ? 'info' : 'log'](
          "You are running Vue in development mode.\n" +
          "Make sure to turn on production mode when deploying for production.\n" +
          "See more tips at https://vuejs.org/guide/deployment.html"
        );
      }
    }, 0);
  }

  /*  */

  var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

  var buildRegex = cached(function (delimiters) {
    var open = delimiters[0].replace(regexEscapeRE, '\\$&');
    var close = delimiters[1].replace(regexEscapeRE, '\\$&');
    return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
  });



  function parseText (
    text,
    delimiters
  ) {
    var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
    if (!tagRE.test(text)) {
      return
    }
    var tokens = [];
    var rawTokens = [];
    var lastIndex = tagRE.lastIndex = 0;
    var match, index, tokenValue;
    while ((match = tagRE.exec(text))) {
      index = match.index;
      // push text token
      if (index > lastIndex) {
        rawTokens.push(tokenValue = text.slice(lastIndex, index));
        tokens.push(JSON.stringify(tokenValue));
      }
      // tag token
      var exp = parseFilters(match[1].trim());
      tokens.push(("_s(" + exp + ")"));
      rawTokens.push({ '@binding': exp });
      lastIndex = index + match[0].length;
    }
    if (lastIndex < text.length) {
      rawTokens.push(tokenValue = text.slice(lastIndex));
      tokens.push(JSON.stringify(tokenValue));
    }
    return {
      expression: tokens.join('+'),
      tokens: rawTokens
    }
  }

  /*  */

  function transformNode (el, options) {
    var warn = options.warn || baseWarn;
    var staticClass = getAndRemoveAttr(el, 'class');
    if (staticClass) {
      var res = parseText(staticClass, options.delimiters);
      if (res) {
        warn(
          "class=\"" + staticClass + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div class="{{ val }}">, use <div :class="val">.',
          el.rawAttrsMap['class']
        );
      }
    }
    if (staticClass) {
      el.staticClass = JSON.stringify(staticClass);
    }
    var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
    if (classBinding) {
      el.classBinding = classBinding;
    }
  }

  function genData (el) {
    var data = '';
    if (el.staticClass) {
      data += "staticClass:" + (el.staticClass) + ",";
    }
    if (el.classBinding) {
      data += "class:" + (el.classBinding) + ",";
    }
    return data
  }

  var klass$1 = {
    staticKeys: ['staticClass'],
    transformNode: transformNode,
    genData: genData
  };

  /*  */

  function transformNode$1 (el, options) {
    var warn = options.warn || baseWarn;
    var staticStyle = getAndRemoveAttr(el, 'style');
    if (staticStyle) {
      /* istanbul ignore if */
      {
        var res = parseText(staticStyle, options.delimiters);
        if (res) {
          warn(
            "style=\"" + staticStyle + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div style="{{ val }}">, use <div :style="val">.',
            el.rawAttrsMap['style']
          );
        }
      }
      el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
    }

    var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
    if (styleBinding) {
      el.styleBinding = styleBinding;
    }
  }

  function genData$1 (el) {
    var data = '';
    if (el.staticStyle) {
      data += "staticStyle:" + (el.staticStyle) + ",";
    }
    if (el.styleBinding) {
      data += "style:(" + (el.styleBinding) + "),";
    }
    return data
  }

  var style$1 = {
    staticKeys: ['staticStyle'],
    transformNode: transformNode$1,
    genData: genData$1
  };

  /*  */

  var decoder;

  var he = {
    decode: function decode (html) {
      decoder = decoder || document.createElement('div');
      decoder.innerHTML = html;
      return decoder.textContent
    }
  };

  /*  */

  var isUnaryTag = makeMap(
    'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
    'link,meta,param,source,track,wbr'
  );

  // Elements that you can, intentionally, leave open
  // (and which close themselves)
  var canBeLeftOpenTag = makeMap(
    'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
  );

  // HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
  // Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
  var isNonPhrasingTag = makeMap(
    'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
    'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
    'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
    'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
    'title,tr,track'
  );

  /**
   * Not type-checking this file because it's mostly vendor code.
   */

  // Regular Expressions for parsing tags and attributes
  var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
  var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
  var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
  var startTagOpen = new RegExp(("^<" + qnameCapture));
  var startTagClose = /^\s*(\/?)>/;
  var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
  var doctype = /^<!DOCTYPE [^>]+>/i;
  // #7298: escape - to avoid being pased as HTML comment when inlined in page
  var comment = /^<!\--/;
  var conditionalComment = /^<!\[/;

  // Special Elements (can contain anything)
  var isPlainTextElement = makeMap('script,style,textarea', true);
  var reCache = {};

  var decodingMap = {
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&amp;': '&',
    '&#10;': '\n',
    '&#9;': '\t',
    '&#39;': "'"
  };
  var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
  var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

  // #5992
  var isIgnoreNewlineTag = makeMap('pre,textarea', true);
  var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

  function decodeAttr (value, shouldDecodeNewlines) {
    var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
    return value.replace(re, function (match) { return decodingMap[match]; })
  }

  function parseHTML (html, options) {
    var stack = [];
    var expectHTML = options.expectHTML;
    var isUnaryTag$$1 = options.isUnaryTag || no;
    var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
    var index = 0;
    var last, lastTag;
    while (html) {
      last = html;
      // Make sure we're not in a plaintext content element like script/style
      if (!lastTag || !isPlainTextElement(lastTag)) {
        var textEnd = html.indexOf('<');
        if (textEnd === 0) {
          // Comment:
          if (comment.test(html)) {
            var commentEnd = html.indexOf('-->');

            if (commentEnd >= 0) {
              if (options.shouldKeepComment) {
                options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
              }
              advance(commentEnd + 3);
              continue
            }
          }

          // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
          if (conditionalComment.test(html)) {
            var conditionalEnd = html.indexOf(']>');

            if (conditionalEnd >= 0) {
              advance(conditionalEnd + 2);
              continue
            }
          }

          // Doctype:
          var doctypeMatch = html.match(doctype);
          if (doctypeMatch) {
            advance(doctypeMatch[0].length);
            continue
          }

          // End tag:
          var endTagMatch = html.match(endTag);
          if (endTagMatch) {
            var curIndex = index;
            advance(endTagMatch[0].length);
            parseEndTag(endTagMatch[1], curIndex, index);
            continue
          }

          // Start tag:
          var startTagMatch = parseStartTag();
          if (startTagMatch) {
            handleStartTag(startTagMatch);
            if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
              advance(1);
            }
            continue
          }
        }

        var text = (void 0), rest = (void 0), next = (void 0);
        if (textEnd >= 0) {
          rest = html.slice(textEnd);
          while (
            !endTag.test(rest) &&
            !startTagOpen.test(rest) &&
            !comment.test(rest) &&
            !conditionalComment.test(rest)
          ) {
            // < in plain text, be forgiving and treat it as text
            next = rest.indexOf('<', 1);
            if (next < 0) { break }
            textEnd += next;
            rest = html.slice(textEnd);
          }
          text = html.substring(0, textEnd);
        }

        if (textEnd < 0) {
          text = html;
        }

        if (text) {
          advance(text.length);
        }

        if (options.chars && text) {
          options.chars(text, index - text.length, index);
        }
      } else {
        var endTagLength = 0;
        var stackedTag = lastTag.toLowerCase();
        var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
        var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
          endTagLength = endTag.length;
          if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
            text = text
              .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
              .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
          }
          if (shouldIgnoreFirstNewline(stackedTag, text)) {
            text = text.slice(1);
          }
          if (options.chars) {
            options.chars(text);
          }
          return ''
        });
        index += html.length - rest$1.length;
        html = rest$1;
        parseEndTag(stackedTag, index - endTagLength, index);
      }

      if (html === last) {
        options.chars && options.chars(html);
        if (!stack.length && options.warn) {
          options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
        }
        break
      }
    }

    // Clean up any remaining tags
    parseEndTag();

    function advance (n) {
      index += n;
      html = html.substring(n);
    }

    function parseStartTag () {
      var start = html.match(startTagOpen);
      if (start) {
        var match = {
          tagName: start[1],
          attrs: [],
          start: index
        };
        advance(start[0].length);
        var end, attr;
        while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
          attr.start = index;
          advance(attr[0].length);
          attr.end = index;
          match.attrs.push(attr);
        }
        if (end) {
          match.unarySlash = end[1];
          advance(end[0].length);
          match.end = index;
          return match
        }
      }
    }

    function handleStartTag (match) {
      var tagName = match.tagName;
      var unarySlash = match.unarySlash;

      if (expectHTML) {
        if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
          parseEndTag(lastTag);
        }
        if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
          parseEndTag(tagName);
        }
      }

      var unary = isUnaryTag$$1(tagName) || !!unarySlash;

      var l = match.attrs.length;
      var attrs = new Array(l);
      for (var i = 0; i < l; i++) {
        var args = match.attrs[i];
        var value = args[3] || args[4] || args[5] || '';
        var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
          ? options.shouldDecodeNewlinesForHref
          : options.shouldDecodeNewlines;
        attrs[i] = {
          name: args[1],
          value: decodeAttr(value, shouldDecodeNewlines)
        };
        if (options.outputSourceRange) {
          attrs[i].start = args.start + args[0].match(/^\s*/).length;
          attrs[i].end = args.end;
        }
      }

      if (!unary) {
        stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
        lastTag = tagName;
      }

      if (options.start) {
        options.start(tagName, attrs, unary, match.start, match.end);
      }
    }

    function parseEndTag (tagName, start, end) {
      var pos, lowerCasedTagName;
      if (start == null) { start = index; }
      if (end == null) { end = index; }

      // Find the closest opened tag of the same type
      if (tagName) {
        lowerCasedTagName = tagName.toLowerCase();
        for (pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos].lowerCasedTag === lowerCasedTagName) {
            break
          }
        }
      } else {
        // If no tag name is provided, clean shop
        pos = 0;
      }

      if (pos >= 0) {
        // Close all the open elements, up the stack
        for (var i = stack.length - 1; i >= pos; i--) {
          if (i > pos || !tagName &&
            options.warn
          ) {
            options.warn(
              ("tag <" + (stack[i].tag) + "> has no matching end tag."),
              { start: stack[i].start, end: stack[i].end }
            );
          }
          if (options.end) {
            options.end(stack[i].tag, start, end);
          }
        }

        // Remove the open elements from the stack
        stack.length = pos;
        lastTag = pos && stack[pos - 1].tag;
      } else if (lowerCasedTagName === 'br') {
        if (options.start) {
          options.start(tagName, [], true, start, end);
        }
      } else if (lowerCasedTagName === 'p') {
        if (options.start) {
          options.start(tagName, [], false, start, end);
        }
        if (options.end) {
          options.end(tagName, start, end);
        }
      }
    }
  }

  /*  */

  var onRE = /^@|^v-on:/;
  var dirRE = /^v-|^@|^:/;
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;
  var dynamicArgRE = /^\[.*\]$/;

  var argRE = /:(.*)$/;
  var bindRE = /^:|^\.|^v-bind:/;
  var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

  var slotRE = /^v-slot(:|$)|^#/;

  var lineBreakRE = /[\r\n]/;
  var whitespaceRE$1 = /\s+/g;

  var invalidAttributeRE = /[\s"'<>\/=]/;

  var decodeHTMLCached = cached(he.decode);

  var emptySlotScopeToken = "_empty_";

  // configurable state
  var warn$2;
  var delimiters;
  var transforms;
  var preTransforms;
  var postTransforms;
  var platformIsPreTag;
  var platformMustUseProp;
  var platformGetTagNamespace;
  var maybeComponent;

  function createASTElement (
    tag,
    attrs,
    parent
  ) {
    return {
      type: 1,
      tag: tag,
      attrsList: attrs,
      attrsMap: makeAttrsMap(attrs),
      rawAttrsMap: {},
      parent: parent,
      children: []
    }
  }

  /**
   * Convert HTML string to AST.
   */
  function parse (
    template,
    options
  ) {
    warn$2 = options.warn || baseWarn;

    platformIsPreTag = options.isPreTag || no;
    platformMustUseProp = options.mustUseProp || no;
    platformGetTagNamespace = options.getTagNamespace || no;
    var isReservedTag = options.isReservedTag || no;
    maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

    transforms = pluckModuleFunction(options.modules, 'transformNode');
    preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
    postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

    delimiters = options.delimiters;

    var stack = [];
    var preserveWhitespace = options.preserveWhitespace !== false;
    var whitespaceOption = options.whitespace;
    var root;
    var currentParent;
    var inVPre = false;
    var inPre = false;
    var warned = false;

    function warnOnce (msg, range) {
      if (!warned) {
        warned = true;
        warn$2(msg, range);
      }
    }

    function closeElement (element) {
      trimEndingWhitespace(element);
      if (!inVPre && !element.processed) {
        element = processElement(element, options);
      }
      // tree management
      if (!stack.length && element !== root) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          {
            checkRootConstraints(element);
          }
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead.",
            { start: element.start }
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else {
          if (element.slotScope) {
            // scoped slot
            // keep it in the children list so that v-else(-if) conditions can
            // find it as the prev node.
            var name = element.slotTarget || '"default"'
            ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
          }
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }

      // final children cleanup
      // filter out scoped slots
      element.children = element.children.filter(function (c) { return !(c).slotScope; });
      // remove trailing whitespace node again
      trimEndingWhitespace(element);

      // check pre state
      if (element.pre) {
        inVPre = false;
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false;
      }
      // apply post-transforms
      for (var i = 0; i < postTransforms.length; i++) {
        postTransforms[i](element, options);
      }
    }

    function trimEndingWhitespace (el) {
      // remove trailing whitespace node
      if (!inPre) {
        var lastNode;
        while (
          (lastNode = el.children[el.children.length - 1]) &&
          lastNode.type === 3 &&
          lastNode.text === ' '
        ) {
          el.children.pop();
        }
      }
    }

    function checkRootConstraints (el) {
      if (el.tag === 'slot' || el.tag === 'template') {
        warnOnce(
          "Cannot use <" + (el.tag) + "> as component root element because it may " +
          'contain multiple nodes.',
          { start: el.start }
        );
      }
      if (el.attrsMap.hasOwnProperty('v-for')) {
        warnOnce(
          'Cannot use v-for on stateful component root element because ' +
          'it renders multiple elements.',
          el.rawAttrsMap['v-for']
        );
      }
    }

    parseHTML(template, {
      warn: warn$2,
      expectHTML: options.expectHTML,
      isUnaryTag: options.isUnaryTag,
      canBeLeftOpenTag: options.canBeLeftOpenTag,
      shouldDecodeNewlines: options.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
      shouldKeepComment: options.comments,
      outputSourceRange: options.outputSourceRange,
      start: function start (tag, attrs, unary, start$1, end) {
        // check namespace.
        // inherit parent ns if there is one
        var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

        // handle IE svg bug
        /* istanbul ignore if */
        if (isIE && ns === 'svg') {
          attrs = guardIESVGBug(attrs);
        }

        var element = createASTElement(tag, attrs, currentParent);
        if (ns) {
          element.ns = ns;
        }

        {
          if (options.outputSourceRange) {
            element.start = start$1;
            element.end = end;
            element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
              cumulated[attr.name] = attr;
              return cumulated
            }, {});
          }
          attrs.forEach(function (attr) {
            if (invalidAttributeRE.test(attr.name)) {
              warn$2(
                "Invalid dynamic argument expression: attribute names cannot contain " +
                "spaces, quotes, <, >, / or =.",
                {
                  start: attr.start + attr.name.indexOf("["),
                  end: attr.start + attr.name.length
                }
              );
            }
          });
        }

        if (isForbiddenTag(element) && !isServerRendering()) {
          element.forbidden = true;
          warn$2(
            'Templates should only be responsible for mapping the state to the ' +
            'UI. Avoid placing tags with side-effects in your templates, such as ' +
            "<" + tag + ">" + ', as they will not be parsed.',
            { start: element.start }
          );
        }

        // apply pre-transforms
        for (var i = 0; i < preTransforms.length; i++) {
          element = preTransforms[i](element, options) || element;
        }

        if (!inVPre) {
          processPre(element);
          if (element.pre) {
            inVPre = true;
          }
        }
        if (platformIsPreTag(element.tag)) {
          inPre = true;
        }
        if (inVPre) {
          processRawAttrs(element);
        } else if (!element.processed) {
          // structural directives
          processFor(element);
          processIf(element);
          processOnce(element);
        }

        if (!root) {
          root = element;
          {
            checkRootConstraints(root);
          }
        }

        if (!unary) {
          currentParent = element;
          stack.push(element);
        } else {
          closeElement(element);
        }
      },

      end: function end (tag, start, end$1) {
        var element = stack[stack.length - 1];
        // pop stack
        stack.length -= 1;
        currentParent = stack[stack.length - 1];
        if (options.outputSourceRange) {
          element.end = end$1;
        }
        closeElement(element);
      },

      chars: function chars (text, start, end) {
        if (!currentParent) {
          {
            if (text === template) {
              warnOnce(
                'Component template requires a root element, rather than just text.',
                { start: start }
              );
            } else if ((text = text.trim())) {
              warnOnce(
                ("text \"" + text + "\" outside root element will be ignored."),
                { start: start }
              );
            }
          }
          return
        }
        // IE textarea placeholder bug
        /* istanbul ignore if */
        if (isIE &&
          currentParent.tag === 'textarea' &&
          currentParent.attrsMap.placeholder === text
        ) {
          return
        }
        var children = currentParent.children;
        if (inPre || text.trim()) {
          text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
        } else if (!children.length) {
          // remove the whitespace-only node right after an opening tag
          text = '';
        } else if (whitespaceOption) {
          if (whitespaceOption === 'condense') {
            // in condense mode, remove the whitespace node if it contains
            // line break, otherwise condense to a single space
            text = lineBreakRE.test(text) ? '' : ' ';
          } else {
            text = ' ';
          }
        } else {
          text = preserveWhitespace ? ' ' : '';
        }
        if (text) {
          if (!inPre && whitespaceOption === 'condense') {
            // condense consecutive whitespaces into single space
            text = text.replace(whitespaceRE$1, ' ');
          }
          var res;
          var child;
          if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
            child = {
              type: 2,
              expression: res.expression,
              tokens: res.tokens,
              text: text
            };
          } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
            child = {
              type: 3,
              text: text
            };
          }
          if (child) {
            if (options.outputSourceRange) {
              child.start = start;
              child.end = end;
            }
            children.push(child);
          }
        }
      },
      comment: function comment (text, start, end) {
        // adding anyting as a sibling to the root node is forbidden
        // comments should still be allowed, but ignored
        if (currentParent) {
          var child = {
            type: 3,
            text: text,
            isComment: true
          };
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          currentParent.children.push(child);
        }
      }
    });
    return root
  }

  function processPre (el) {
    if (getAndRemoveAttr(el, 'v-pre') != null) {
      el.pre = true;
    }
  }

  function processRawAttrs (el) {
    var list = el.attrsList;
    var len = list.length;
    if (len) {
      var attrs = el.attrs = new Array(len);
      for (var i = 0; i < len; i++) {
        attrs[i] = {
          name: list[i].name,
          value: JSON.stringify(list[i].value)
        };
        if (list[i].start != null) {
          attrs[i].start = list[i].start;
          attrs[i].end = list[i].end;
        }
      }
    } else if (!el.pre) {
      // non root node in pre blocks with no attributes
      el.plain = true;
    }
  }

  function processElement (
    element,
    options
  ) {
    processKey(element);

    // determine whether this is a plain element after
    // removing structural attributes
    element.plain = (
      !element.key &&
      !element.scopedSlots &&
      !element.attrsList.length
    );

    processRef(element);
    processSlotContent(element);
    processSlotOutlet(element);
    processComponent(element);
    for (var i = 0; i < transforms.length; i++) {
      element = transforms[i](element, options) || element;
    }
    processAttrs(element);
    return element
  }

  function processKey (el) {
    var exp = getBindingAttr(el, 'key');
    if (exp) {
      {
        if (el.tag === 'template') {
          warn$2(
            "<template> cannot be keyed. Place the key on real elements instead.",
            getRawBindingAttr(el, 'key')
          );
        }
        if (el.for) {
          var iterator = el.iterator2 || el.iterator1;
          var parent = el.parent;
          if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
            warn$2(
              "Do not use v-for index as key on <transition-group> children, " +
              "this is the same as not using keys.",
              getRawBindingAttr(el, 'key'),
              true /* tip */
            );
          }
        }
      }
      el.key = exp;
    }
  }

  function processRef (el) {
    var ref = getBindingAttr(el, 'ref');
    if (ref) {
      el.ref = ref;
      el.refInFor = checkInFor(el);
    }
  }

  function processFor (el) {
    var exp;
    if ((exp = getAndRemoveAttr(el, 'v-for'))) {
      var res = parseFor(exp);
      if (res) {
        extend(el, res);
      } else {
        warn$2(
          ("Invalid v-for expression: " + exp),
          el.rawAttrsMap['v-for']
        );
      }
    }
  }



  function parseFor (exp) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) { return }
    var res = {};
    res.for = inMatch[2].trim();
    var alias = inMatch[1].trim().replace(stripParensRE, '');
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      res.alias = alias.replace(forIteratorRE, '').trim();
      res.iterator1 = iteratorMatch[1].trim();
      if (iteratorMatch[2]) {
        res.iterator2 = iteratorMatch[2].trim();
      }
    } else {
      res.alias = alias;
    }
    return res
  }

  function processIf (el) {
    var exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
      el.if = exp;
      addIfCondition(el, {
        exp: exp,
        block: el
      });
    } else {
      if (getAndRemoveAttr(el, 'v-else') != null) {
        el.else = true;
      }
      var elseif = getAndRemoveAttr(el, 'v-else-if');
      if (elseif) {
        el.elseif = elseif;
      }
    }
  }

  function processIfConditions (el, parent) {
    var prev = findPrevElement(parent.children);
    if (prev && prev.if) {
      addIfCondition(prev, {
        exp: el.elseif,
        block: el
      });
    } else {
      warn$2(
        "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
        "used on element <" + (el.tag) + "> without corresponding v-if.",
        el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
      );
    }
  }

  function findPrevElement (children) {
    var i = children.length;
    while (i--) {
      if (children[i].type === 1) {
        return children[i]
      } else {
        if (children[i].text !== ' ') {
          warn$2(
            "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
            "will be ignored.",
            children[i]
          );
        }
        children.pop();
      }
    }
  }

  function addIfCondition (el, condition) {
    if (!el.ifConditions) {
      el.ifConditions = [];
    }
    el.ifConditions.push(condition);
  }

  function processOnce (el) {
    var once$$1 = getAndRemoveAttr(el, 'v-once');
    if (once$$1 != null) {
      el.once = true;
    }
  }

  // handle content being passed to a component as slot,
  // e.g. <template slot="xxx">, <div slot-scope="xxx">
  function processSlotContent (el) {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if (slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          el.rawAttrsMap['scope'],
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if (el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          el.rawAttrsMap['slot-scope'],
          true
        );
      }
      el.slotScope = slotScope;
    }

    // slot="xxx"
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
      }
    }

    // 2.6 v-slot syntax
    {
      if (el.tag === 'template') {
        // v-slot on <template>
        var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding) {
          {
            if (el.slotTarget || el.slotScope) {
              warn$2(
                "Unexpected mixed usage of different slot syntaxes.",
                el
              );
            }
            if (el.parent && !maybeComponent(el.parent)) {
              warn$2(
                "<template v-slot> can only appear at the root level inside " +
                "the receiving the component",
                el
              );
            }
          }
          var ref = getSlotName(slotBinding);
          var name = ref.name;
          var dynamic = ref.dynamic;
          el.slotTarget = name;
          el.slotTargetDynamic = dynamic;
          el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
        }
      } else {
        // v-slot on component, denotes default slot
        var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
        if (slotBinding$1) {
          {
            if (!maybeComponent(el)) {
              warn$2(
                "v-slot can only be used on components or <template>.",
                slotBinding$1
              );
            }
            if (el.slotScope || el.slotTarget) {
              warn$2(
                "Unexpected mixed usage of different slot syntaxes.",
                el
              );
            }
            if (el.scopedSlots) {
              warn$2(
                "To avoid scope ambiguity, the default slot should also use " +
                "<template> syntax when there are other named slots.",
                slotBinding$1
              );
            }
          }
          // add the component's children to its default slot
          var slots = el.scopedSlots || (el.scopedSlots = {});
          var ref$1 = getSlotName(slotBinding$1);
          var name$1 = ref$1.name;
          var dynamic$1 = ref$1.dynamic;
          var slotContainer = slots[name$1] = createASTElement('template', [], el);
          slotContainer.slotTarget = name$1;
          slotContainer.slotTargetDynamic = dynamic$1;
          slotContainer.children = el.children.filter(function (c) {
            if (!c.slotScope) {
              c.parent = slotContainer;
              return true
            }
          });
          slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
          // remove children as they are returned from scopedSlots now
          el.children = [];
          // mark el non-plain so data gets generated
          el.plain = false;
        }
      }
    }
  }

  function getSlotName (binding) {
    var name = binding.name.replace(slotRE, '');
    if (!name) {
      if (binding.name[0] !== '#') {
        name = 'default';
      } else {
        warn$2(
          "v-slot shorthand syntax requires a slot name.",
          binding
        );
      }
    }
    return dynamicArgRE.test(name)
      // dynamic [name]
      ? { name: name.slice(1, -1), dynamic: true }
      // static name
      : { name: ("\"" + name + "\""), dynamic: false }
  }

  // handle <slot/> outlets
  function processSlotOutlet (el) {
    if (el.tag === 'slot') {
      el.slotName = getBindingAttr(el, 'name');
      if (el.key) {
        warn$2(
          "`key` does not work on <slot> because slots are abstract outlets " +
          "and can possibly expand into multiple elements. " +
          "Use the key on a wrapping element instead.",
          getRawBindingAttr(el, 'key')
        );
      }
    }
  }

  function processComponent (el) {
    var binding;
    if ((binding = getBindingAttr(el, 'is'))) {
      el.component = binding;
    }
    if (getAndRemoveAttr(el, 'inline-template') != null) {
      el.inlineTemplate = true;
    }
  }

  function processAttrs (el) {
    var list = el.attrsList;
    var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
    for (i = 0, l = list.length; i < l; i++) {
      name = rawName = list[i].name;
      value = list[i].value;
      if (dirRE.test(name)) {
        // mark element as dynamic
        el.hasBindings = true;
        // modifiers
        modifiers = parseModifiers(name.replace(dirRE, ''));
        // support .foo shorthand syntax for the .prop modifier
        if (modifiers) {
          name = name.replace(modifierRE, '');
        }
        if (bindRE.test(name)) { // v-bind
          name = name.replace(bindRE, '');
          value = parseFilters(value);
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          if (
            value.trim().length === 0
          ) {
            warn$2(
              ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
            );
          }
          if (modifiers) {
            if (modifiers.prop && !isDynamic) {
              name = camelize(name);
              if (name === 'innerHtml') { name = 'innerHTML'; }
            }
            if (modifiers.camel && !isDynamic) {
              name = camelize(name);
            }
            if (modifiers.sync) {
              syncGen = genAssignmentCode(value, "$event");
              if (!isDynamic) {
                addHandler(
                  el,
                  ("update:" + (camelize(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
                if (hyphenate(name) !== camelize(name)) {
                  addHandler(
                    el,
                    ("update:" + (hyphenate(name))),
                    syncGen,
                    null,
                    false,
                    warn$2,
                    list[i]
                  );
                }
              } else {
                // handler w/ dynamic event name
                addHandler(
                  el,
                  ("\"update:\"+(" + name + ")"),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i],
                  true // dynamic
                );
              }
            }
          }
          if ((modifiers && modifiers.prop) || (
            !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
          )) {
            addProp(el, name, value, list[i], isDynamic);
          } else {
            addAttr(el, name, value, list[i], isDynamic);
          }
        } else if (onRE.test(name)) { // v-on
          name = name.replace(onRE, '');
          isDynamic = dynamicArgRE.test(name);
          if (isDynamic) {
            name = name.slice(1, -1);
          }
          addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
        } else { // normal directives
          name = name.replace(dirRE, '');
          // parse arg
          var argMatch = name.match(argRE);
          var arg = argMatch && argMatch[1];
          isDynamic = false;
          if (arg) {
            name = name.slice(0, -(arg.length + 1));
            if (dynamicArgRE.test(arg)) {
              arg = arg.slice(1, -1);
              isDynamic = true;
            }
          }
          addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
          if (name === 'model') {
            checkForAliasModel(el, value);
          }
        }
      } else {
        // literal attribute
        {
          var res = parseText(value, delimiters);
          if (res) {
            warn$2(
              name + "=\"" + value + "\": " +
              'Interpolation inside attributes has been removed. ' +
              'Use v-bind or the colon shorthand instead. For example, ' +
              'instead of <div id="{{ val }}">, use <div :id="val">.',
              list[i]
            );
          }
        }
        addAttr(el, name, JSON.stringify(value), list[i]);
        // #6887 firefox doesn't update muted state if set via attribute
        // even immediately after element creation
        if (!el.component &&
            name === 'muted' &&
            platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, 'true', list[i]);
        }
      }
    }
  }

  function checkInFor (el) {
    var parent = el;
    while (parent) {
      if (parent.for !== undefined) {
        return true
      }
      parent = parent.parent;
    }
    return false
  }

  function parseModifiers (name) {
    var match = name.match(modifierRE);
    if (match) {
      var ret = {};
      match.forEach(function (m) { ret[m.slice(1)] = true; });
      return ret
    }
  }

  function makeAttrsMap (attrs) {
    var map = {};
    for (var i = 0, l = attrs.length; i < l; i++) {
      if (
        map[attrs[i].name] && !isIE && !isEdge
      ) {
        warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
      }
      map[attrs[i].name] = attrs[i].value;
    }
    return map
  }

  // for script (e.g. type="x/template") or style, do not decode content
  function isTextTag (el) {
    return el.tag === 'script' || el.tag === 'style'
  }

  function isForbiddenTag (el) {
    return (
      el.tag === 'style' ||
      (el.tag === 'script' && (
        !el.attrsMap.type ||
        el.attrsMap.type === 'text/javascript'
      ))
    )
  }

  var ieNSBug = /^xmlns:NS\d+/;
  var ieNSPrefix = /^NS\d+:/;

  /* istanbul ignore next */
  function guardIESVGBug (attrs) {
    var res = [];
    for (var i = 0; i < attrs.length; i++) {
      var attr = attrs[i];
      if (!ieNSBug.test(attr.name)) {
        attr.name = attr.name.replace(ieNSPrefix, '');
        res.push(attr);
      }
    }
    return res
  }

  function checkForAliasModel (el, value) {
    var _el = el;
    while (_el) {
      if (_el.for && _el.alias === value) {
        warn$2(
          "<" + (el.tag) + " v-model=\"" + value + "\">: " +
          "You are binding v-model directly to a v-for iteration alias. " +
          "This will not be able to modify the v-for source array because " +
          "writing to the alias is like modifying a function local variable. " +
          "Consider using an array of objects and use v-model on an object property instead.",
          el.rawAttrsMap['v-model']
        );
      }
      _el = _el.parent;
    }
  }

  /*  */

  function preTransformNode (el, options) {
    if (el.tag === 'input') {
      var map = el.attrsMap;
      if (!map['v-model']) {
        return
      }

      var typeBinding;
      if (map[':type'] || map['v-bind:type']) {
        typeBinding = getBindingAttr(el, 'type');
      }
      if (!map.type && !typeBinding && map['v-bind']) {
        typeBinding = "(" + (map['v-bind']) + ").type";
      }

      if (typeBinding) {
        var ifCondition = getAndRemoveAttr(el, 'v-if', true);
        var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
        var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
        var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
        // 1. checkbox
        var branch0 = cloneASTElement(el);
        // process for on the main node
        processFor(branch0);
        addRawAttr(branch0, 'type', 'checkbox');
        processElement(branch0, options);
        branch0.processed = true; // prevent it from double-processed
        branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
        addIfCondition(branch0, {
          exp: branch0.if,
          block: branch0
        });
        // 2. add radio else-if condition
        var branch1 = cloneASTElement(el);
        getAndRemoveAttr(branch1, 'v-for', true);
        addRawAttr(branch1, 'type', 'radio');
        processElement(branch1, options);
        addIfCondition(branch0, {
          exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
          block: branch1
        });
        // 3. other
        var branch2 = cloneASTElement(el);
        getAndRemoveAttr(branch2, 'v-for', true);
        addRawAttr(branch2, ':type', typeBinding);
        processElement(branch2, options);
        addIfCondition(branch0, {
          exp: ifCondition,
          block: branch2
        });

        if (hasElse) {
          branch0.else = true;
        } else if (elseIfCondition) {
          branch0.elseif = elseIfCondition;
        }

        return branch0
      }
    }
  }

  function cloneASTElement (el) {
    return createASTElement(el.tag, el.attrsList.slice(), el.parent)
  }

  var model$1 = {
    preTransformNode: preTransformNode
  };

  var modules$1 = [
    klass$1,
    style$1,
    model$1
  ];

  /*  */

  function text (el, dir) {
    if (dir.value) {
      addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
    }
  }

  /*  */

  function html (el, dir) {
    if (dir.value) {
      addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
    }
  }

  var directives$1 = {
    model: model,
    text: text,
    html: html
  };

  /*  */

  var baseOptions = {
    expectHTML: true,
    modules: modules$1,
    directives: directives$1,
    isPreTag: isPreTag,
    isUnaryTag: isUnaryTag,
    mustUseProp: mustUseProp,
    canBeLeftOpenTag: canBeLeftOpenTag,
    isReservedTag: isReservedTag,
    getTagNamespace: getTagNamespace,
    staticKeys: genStaticKeys(modules$1)
  };

  /*  */

  var isStaticKey;
  var isPlatformReservedTag;

  var genStaticKeysCached = cached(genStaticKeys$1);

  /**
   * Goal of the optimizer: walk the generated template AST tree
   * and detect sub-trees that are purely static, i.e. parts of
   * the DOM that never needs to change.
   *
   * Once we detect these sub-trees, we can:
   *
   * 1. Hoist them into constants, so that we no longer need to
   *    create fresh nodes for them on each re-render;
   * 2. Completely skip them in the patching process.
   */
  function optimize (root, options) {
    if (!root) { return }
    isStaticKey = genStaticKeysCached(options.staticKeys || '');
    isPlatformReservedTag = options.isReservedTag || no;
    // first pass: mark all non-static nodes.
    markStatic$1(root);
    // second pass: mark static roots.
    markStaticRoots(root, false);
  }

  function genStaticKeys$1 (keys) {
    return makeMap(
      'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
      (keys ? ',' + keys : '')
    )
  }

  function markStatic$1 (node) {
    node.static = isStatic(node);
    if (node.type === 1) {
      // do not make component slot content static. this avoids
      // 1. components not able to mutate slot nodes
      // 2. static slot content fails for hot-reloading
      if (
        !isPlatformReservedTag(node.tag) &&
        node.tag !== 'slot' &&
        node.attrsMap['inline-template'] == null
      ) {
        return
      }
      for (var i = 0, l = node.children.length; i < l; i++) {
        var child = node.children[i];
        markStatic$1(child);
        if (!child.static) {
          node.static = false;
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          var block = node.ifConditions[i$1].block;
          markStatic$1(block);
          if (!block.static) {
            node.static = false;
          }
        }
      }
    }
  }

  function markStaticRoots (node, isInFor) {
    if (node.type === 1) {
      if (node.static || node.once) {
        node.staticInFor = isInFor;
      }
      // For a node to qualify as a static root, it should have children that
      // are not just static text. Otherwise the cost of hoisting out will
      // outweigh the benefits and it's better off to just always render it fresh.
      if (node.static && node.children.length && !(
        node.children.length === 1 &&
        node.children[0].type === 3
      )) {
        node.staticRoot = true;
        return
      } else {
        node.staticRoot = false;
      }
      if (node.children) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          markStaticRoots(node.children[i], isInFor || !!node.for);
        }
      }
      if (node.ifConditions) {
        for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
          markStaticRoots(node.ifConditions[i$1].block, isInFor);
        }
      }
    }
  }

  function isStatic (node) {
    if (node.type === 2) { // expression
      return false
    }
    if (node.type === 3) { // text
      return true
    }
    return !!(node.pre || (
      !node.hasBindings && // no dynamic bindings
      !node.if && !node.for && // not v-if or v-for or v-else
      !isBuiltInTag(node.tag) && // not a built-in
      isPlatformReservedTag(node.tag) && // not a component
      !isDirectChildOfTemplateFor(node) &&
      Object.keys(node).every(isStaticKey)
    ))
  }

  function isDirectChildOfTemplateFor (node) {
    while (node.parent) {
      node = node.parent;
      if (node.tag !== 'template') {
        return false
      }
      if (node.for) {
        return true
      }
    }
    return false
  }

  /*  */

  var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/;
  var fnInvokeRE = /\([^)]*?\);*$/;
  var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

  // KeyboardEvent.keyCode aliases
  var keyCodes = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    'delete': [8, 46]
  };

  // KeyboardEvent.key aliases
  var keyNames = {
    // #7880: IE11 and Edge use `Esc` for Escape key name.
    esc: ['Esc', 'Escape'],
    tab: 'Tab',
    enter: 'Enter',
    // #9112: IE11 uses `Spacebar` for Space key name.
    space: [' ', 'Spacebar'],
    // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
    up: ['Up', 'ArrowUp'],
    left: ['Left', 'ArrowLeft'],
    right: ['Right', 'ArrowRight'],
    down: ['Down', 'ArrowDown'],
    // #9112: IE11 uses `Del` for Delete key name.
    'delete': ['Backspace', 'Delete', 'Del']
  };

  // #4868: modifiers that prevent the execution of the listener
  // need to explicitly return null so that we can determine whether to remove
  // the listener for .once
  var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

  var modifierCode = {
    stop: '$event.stopPropagation();',
    prevent: '$event.preventDefault();',
    self: genGuard("$event.target !== $event.currentTarget"),
    ctrl: genGuard("!$event.ctrlKey"),
    shift: genGuard("!$event.shiftKey"),
    alt: genGuard("!$event.altKey"),
    meta: genGuard("!$event.metaKey"),
    left: genGuard("'button' in $event && $event.button !== 0"),
    middle: genGuard("'button' in $event && $event.button !== 1"),
    right: genGuard("'button' in $event && $event.button !== 2")
  };

  function genHandlers (
    events,
    isNative
  ) {
    var prefix = isNative ? 'nativeOn:' : 'on:';
    var staticHandlers = "";
    var dynamicHandlers = "";
    for (var name in events) {
      var handlerCode = genHandler(events[name]);
      if (events[name] && events[name].dynamic) {
        dynamicHandlers += name + "," + handlerCode + ",";
      } else {
        staticHandlers += "\"" + name + "\":" + handlerCode + ",";
      }
    }
    staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
    if (dynamicHandlers) {
      return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
    } else {
      return prefix + staticHandlers
    }
  }

  function genHandler (handler) {
    if (!handler) {
      return 'function(){}'
    }

    if (Array.isArray(handler)) {
      return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
    }

    var isMethodPath = simplePathRE.test(handler.value);
    var isFunctionExpression = fnExpRE.test(handler.value);
    var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

    if (!handler.modifiers) {
      if (isMethodPath || isFunctionExpression) {
        return handler.value
      }
      return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
    } else {
      var code = '';
      var genModifierCode = '';
      var keys = [];
      for (var key in handler.modifiers) {
        if (modifierCode[key]) {
          genModifierCode += modifierCode[key];
          // left/right
          if (keyCodes[key]) {
            keys.push(key);
          }
        } else if (key === 'exact') {
          var modifiers = (handler.modifiers);
          genModifierCode += genGuard(
            ['ctrl', 'shift', 'alt', 'meta']
              .filter(function (keyModifier) { return !modifiers[keyModifier]; })
              .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
              .join('||')
          );
        } else {
          keys.push(key);
        }
      }
      if (keys.length) {
        code += genKeyFilter(keys);
      }
      // Make sure modifiers like prevent and stop get executed after key filtering
      if (genModifierCode) {
        code += genModifierCode;
      }
      var handlerCode = isMethodPath
        ? ("return " + (handler.value) + "($event)")
        : isFunctionExpression
          ? ("return (" + (handler.value) + ")($event)")
          : isFunctionInvocation
            ? ("return " + (handler.value))
            : handler.value;
      return ("function($event){" + code + handlerCode + "}")
    }
  }

  function genKeyFilter (keys) {
    return (
      // make sure the key filters only apply to KeyboardEvents
      // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
      // key events that do not have keyCode property...
      "if(!$event.type.indexOf('key')&&" +
      (keys.map(genFilterCode).join('&&')) + ")return null;"
    )
  }

  function genFilterCode (key) {
    var keyVal = parseInt(key, 10);
    if (keyVal) {
      return ("$event.keyCode!==" + keyVal)
    }
    var keyCode = keyCodes[key];
    var keyName = keyNames[key];
    return (
      "_k($event.keyCode," +
      (JSON.stringify(key)) + "," +
      (JSON.stringify(keyCode)) + "," +
      "$event.key," +
      "" + (JSON.stringify(keyName)) +
      ")"
    )
  }

  /*  */

  function on (el, dir) {
    if (dir.modifiers) {
      warn("v-on without argument does not support modifiers.");
    }
    el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
  }

  /*  */

  function bind$1 (el, dir) {
    el.wrapData = function (code) {
      return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
    };
  }

  /*  */

  var baseDirectives = {
    on: on,
    bind: bind$1,
    cloak: noop
  };

  /*  */





  var CodegenState = function CodegenState (options) {
    this.options = options;
    this.warn = options.warn || baseWarn;
    this.transforms = pluckModuleFunction(options.modules, 'transformCode');
    this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
    this.directives = extend(extend({}, baseDirectives), options.directives);
    var isReservedTag = options.isReservedTag || no;
    this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
    this.onceId = 0;
    this.staticRenderFns = [];
    this.pre = false;
  };



  function generate (
    ast,
    options
  ) {
    var state = new CodegenState(options);
    var code = ast ? genElement(ast, state) : '_c("div")';
    return {
      render: ("with(this){return " + code + "}"),
      staticRenderFns: state.staticRenderFns
    }
  }

  function genElement (el, state) {
    if (el.parent) {
      el.pre = el.pre || el.parent.pre;
    }

    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state)
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state)
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state)
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
      return genChildren(el, state) || 'void 0'
    } else if (el.tag === 'slot') {
      return genSlot(el, state)
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data;
        if (!el.plain || (el.pre && state.maybeComponent(el))) {
          data = genData$2(el, state);
        }

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
      }
      // module transforms
      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }
      return code
    }
  }

  // hoist static sub-trees out
  function genStatic (el, state) {
    el.staticProcessed = true;
    // Some elements (templates) need to behave differently inside of a v-pre
    // node.  All pre nodes are static roots, so we can use this as a location to
    // wrap a state change and reset it upon exiting the pre node.
    var originalPreState = state.pre;
    if (el.pre) {
      state.pre = el.pre;
    }
    state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
    state.pre = originalPreState;
    return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
  }

  // v-once
  function genOnce (el, state) {
    el.onceProcessed = true;
    if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.staticInFor) {
      var key = '';
      var parent = el.parent;
      while (parent) {
        if (parent.for) {
          key = parent.key;
          break
        }
        parent = parent.parent;
      }
      if (!key) {
        state.warn(
          "v-once can only be used inside v-for that is keyed. ",
          el.rawAttrsMap['v-once']
        );
        return genElement(el, state)
      }
      return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
    } else {
      return genStatic(el, state)
    }
  }

  function genIf (
    el,
    state,
    altGen,
    altEmpty
  ) {
    el.ifProcessed = true; // avoid recursion
    return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
  }

  function genIfConditions (
    conditions,
    state,
    altGen,
    altEmpty
  ) {
    if (!conditions.length) {
      return altEmpty || '_e()'
    }

    var condition = conditions.shift();
    if (condition.exp) {
      return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
    } else {
      return ("" + (genTernaryExp(condition.block)))
    }

    // v-if with v-once should generate code like (a)?_m(0):_m(1)
    function genTernaryExp (el) {
      return altGen
        ? altGen(el, state)
        : el.once
          ? genOnce(el, state)
          : genElement(el, state)
    }
  }

  function genFor (
    el,
    state,
    altGen,
    altHelper
  ) {
    var exp = el.for;
    var alias = el.alias;
    var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
    var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

    if (state.maybeComponent(el) &&
      el.tag !== 'slot' &&
      el.tag !== 'template' &&
      !el.key
    ) {
      state.warn(
        "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
        "v-for should have explicit keys. " +
        "See https://vuejs.org/guide/list.html#key for more info.",
        el.rawAttrsMap['v-for'],
        true /* tip */
      );
    }

    el.forProcessed = true; // avoid recursion
    return (altHelper || '_l') + "((" + exp + ")," +
      "function(" + alias + iterator1 + iterator2 + "){" +
        "return " + ((altGen || genElement)(el, state)) +
      '})'
  }

  function genData$2 (el, state) {
    var data = '{';

    // directives first.
    // directives may mutate the el's other properties before they are generated.
    var dirs = genDirectives(el, state);
    if (dirs) { data += dirs + ','; }

    // key
    if (el.key) {
      data += "key:" + (el.key) + ",";
    }
    // ref
    if (el.ref) {
      data += "ref:" + (el.ref) + ",";
    }
    if (el.refInFor) {
      data += "refInFor:true,";
    }
    // pre
    if (el.pre) {
      data += "pre:true,";
    }
    // record original tag name for components using "is" attribute
    if (el.component) {
      data += "tag:\"" + (el.tag) + "\",";
    }
    // module data generation functions
    for (var i = 0; i < state.dataGenFns.length; i++) {
      data += state.dataGenFns[i](el);
    }
    // attributes
    if (el.attrs) {
      data += "attrs:" + (genProps(el.attrs)) + ",";
    }
    // DOM props
    if (el.props) {
      data += "domProps:" + (genProps(el.props)) + ",";
    }
    // event handlers
    if (el.events) {
      data += (genHandlers(el.events, false)) + ",";
    }
    if (el.nativeEvents) {
      data += (genHandlers(el.nativeEvents, true)) + ",";
    }
    // slot target
    // only for non-scoped slots
    if (el.slotTarget && !el.slotScope) {
      data += "slot:" + (el.slotTarget) + ",";
    }
    // scoped slots
    if (el.scopedSlots) {
      data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
    }
    // component v-model
    if (el.model) {
      data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
    }
    // inline-template
    if (el.inlineTemplate) {
      var inlineTemplate = genInlineTemplate(el, state);
      if (inlineTemplate) {
        data += inlineTemplate + ",";
      }
    }
    data = data.replace(/,$/, '') + '}';
    // v-bind dynamic argument wrap
    // v-bind with dynamic arguments must be applied using the same v-bind object
    // merge helper so that class/style/mustUseProp attrs are handled correctly.
    if (el.dynamicAttrs) {
      data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
    }
    // v-bind data wrap
    if (el.wrapData) {
      data = el.wrapData(data);
    }
    // v-on data wrap
    if (el.wrapListeners) {
      data = el.wrapListeners(data);
    }
    return data
  }

  function genDirectives (el, state) {
    var dirs = el.directives;
    if (!dirs) { return }
    var res = 'directives:[';
    var hasRuntime = false;
    var i, l, dir, needRuntime;
    for (i = 0, l = dirs.length; i < l; i++) {
      dir = dirs[i];
      needRuntime = true;
      var gen = state.directives[dir.name];
      if (gen) {
        // compile-time directive that manipulates AST.
        // returns true if it also needs a runtime counterpart.
        needRuntime = !!gen(el, dir, state.warn);
      }
      if (needRuntime) {
        hasRuntime = true;
        res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
      }
    }
    if (hasRuntime) {
      return res.slice(0, -1) + ']'
    }
  }

  function genInlineTemplate (el, state) {
    var ast = el.children[0];
    if (el.children.length !== 1 || ast.type !== 1) {
      state.warn(
        'Inline-template components must have exactly one child element.',
        { start: el.start }
      );
    }
    if (ast && ast.type === 1) {
      var inlineRenderFns = generate(ast, state.options);
      return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
    }
  }

  function genScopedSlots (
    el,
    slots,
    state
  ) {
    // by default scoped slots are considered "stable", this allows child
    // components with only scoped slots to skip forced updates from parent.
    // but in some cases we have to bail-out of this optimization
    // for example if the slot contains dynamic names, has v-if or v-for on them...
    var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
      var slot = slots[key];
      return (
        slot.slotTargetDynamic ||
        slot.if ||
        slot.for ||
        containsSlotChild(slot) // is passing down slot from parent which may be dynamic
      )
    });

    // #9534: if a component with scoped slots is inside a conditional branch,
    // it's possible for the same component to be reused but with different
    // compiled slot content. To avoid that, we generate a unique key based on
    // the generated code of all the slot contents.
    var needsKey = !!el.if;

    // OR when it is inside another scoped slot or v-for (the reactivity may be
    // disconnected due to the intermediate scope variable)
    // #9438, #9506
    // TODO: this can be further optimized by properly analyzing in-scope bindings
    // and skip force updating ones that do not actually use scope variables.
    if (!needsForceUpdate) {
      var parent = el.parent;
      while (parent) {
        if (
          (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
          parent.for
        ) {
          needsForceUpdate = true;
          break
        }
        if (parent.if) {
          needsKey = true;
        }
        parent = parent.parent;
      }
    }

    var generatedSlots = Object.keys(slots)
      .map(function (key) { return genScopedSlot(slots[key], state); })
      .join(',');

    return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
  }

  function hash(str) {
    var hash = 5381;
    var i = str.length;
    while(i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0
  }

  function containsSlotChild (el) {
    if (el.type === 1) {
      if (el.tag === 'slot') {
        return true
      }
      return el.children.some(containsSlotChild)
    }
    return false
  }

  function genScopedSlot (
    el,
    state
  ) {
    var isLegacySyntax = el.attrsMap['slot-scope'];
    if (el.if && !el.ifProcessed && !isLegacySyntax) {
      return genIf(el, state, genScopedSlot, "null")
    }
    if (el.for && !el.forProcessed) {
      return genFor(el, state, genScopedSlot)
    }
    var slotScope = el.slotScope === emptySlotScopeToken
      ? ""
      : String(el.slotScope);
    var fn = "function(" + slotScope + "){" +
      "return " + (el.tag === 'template'
        ? el.if && isLegacySyntax
          ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
          : genChildren(el, state) || 'undefined'
        : genElement(el, state)) + "}";
    // reverse proxy v-slot without scope on this.$slots
    var reverseProxy = slotScope ? "" : ",proxy:true";
    return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
  }

  function genChildren (
    el,
    state,
    checkSkip,
    altGenElement,
    altGenNode
  ) {
    var children = el.children;
    if (children.length) {
      var el$1 = children[0];
      // optimize single v-for
      if (children.length === 1 &&
        el$1.for &&
        el$1.tag !== 'template' &&
        el$1.tag !== 'slot'
      ) {
        var normalizationType = checkSkip
          ? state.maybeComponent(el$1) ? ",1" : ",0"
          : "";
        return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
      }
      var normalizationType$1 = checkSkip
        ? getNormalizationType(children, state.maybeComponent)
        : 0;
      var gen = altGenNode || genNode;
      return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
    }
  }

  // determine the normalization needed for the children array.
  // 0: no normalization needed
  // 1: simple normalization needed (possible 1-level deep nested array)
  // 2: full normalization needed
  function getNormalizationType (
    children,
    maybeComponent
  ) {
    var res = 0;
    for (var i = 0; i < children.length; i++) {
      var el = children[i];
      if (el.type !== 1) {
        continue
      }
      if (needsNormalization(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
        res = 2;
        break
      }
      if (maybeComponent(el) ||
          (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
        res = 1;
      }
    }
    return res
  }

  function needsNormalization (el) {
    return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
  }

  function genNode (node, state) {
    if (node.type === 1) {
      return genElement(node, state)
    } else if (node.type === 3 && node.isComment) {
      return genComment(node)
    } else {
      return genText(node)
    }
  }

  function genText (text) {
    return ("_v(" + (text.type === 2
      ? text.expression // no need for () because already wrapped in _s()
      : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
  }

  function genComment (comment) {
    return ("_e(" + (JSON.stringify(comment.text)) + ")")
  }

  function genSlot (el, state) {
    var slotName = el.slotName || '"default"';
    var children = genChildren(el, state);
    var res = "_t(" + slotName + (children ? ("," + children) : '');
    var attrs = el.attrs || el.dynamicAttrs
      ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
          // slot props are camelized
          name: camelize(attr.name),
          value: attr.value,
          dynamic: attr.dynamic
        }); }))
      : null;
    var bind$$1 = el.attrsMap['v-bind'];
    if ((attrs || bind$$1) && !children) {
      res += ",null";
    }
    if (attrs) {
      res += "," + attrs;
    }
    if (bind$$1) {
      res += (attrs ? '' : ',null') + "," + bind$$1;
    }
    return res + ')'
  }

  // componentName is el.component, take it as argument to shun flow's pessimistic refinement
  function genComponent (
    componentName,
    el,
    state
  ) {
    var children = el.inlineTemplate ? null : genChildren(el, state, true);
    return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
  }

  function genProps (props) {
    var staticProps = "";
    var dynamicProps = "";
    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      var value = transformSpecialNewlines(prop.value);
      if (prop.dynamic) {
        dynamicProps += (prop.name) + "," + value + ",";
      } else {
        staticProps += "\"" + (prop.name) + "\":" + value + ",";
      }
    }
    staticProps = "{" + (staticProps.slice(0, -1)) + "}";
    if (dynamicProps) {
      return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
    } else {
      return staticProps
    }
  }

  // #3895, #4268
  function transformSpecialNewlines (text) {
    return text
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029')
  }

  /*  */



  // these keywords should not appear inside expressions, but operators like
  // typeof, instanceof and in are allowed
  var prohibitedKeywordRE = new RegExp('\\b' + (
    'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
    'super,throw,while,yield,delete,export,import,return,switch,default,' +
    'extends,finally,continue,debugger,function,arguments'
  ).split(',').join('\\b|\\b') + '\\b');

  // these unary operators should not be used as property/method names
  var unaryOperatorsRE = new RegExp('\\b' + (
    'delete,typeof,void'
  ).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

  // strip strings in expressions
  var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

  // detect problematic expressions in a template
  function detectErrors (ast, warn) {
    if (ast) {
      checkNode(ast, warn);
    }
  }

  function checkNode (node, warn) {
    if (node.type === 1) {
      for (var name in node.attrsMap) {
        if (dirRE.test(name)) {
          var value = node.attrsMap[name];
          if (value) {
            var range = node.rawAttrsMap[name];
            if (name === 'v-for') {
              checkFor(node, ("v-for=\"" + value + "\""), warn, range);
            } else if (onRE.test(name)) {
              checkEvent(value, (name + "=\"" + value + "\""), warn, range);
            } else {
              checkExpression(value, (name + "=\"" + value + "\""), warn, range);
            }
          }
        }
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          checkNode(node.children[i], warn);
        }
      }
    } else if (node.type === 2) {
      checkExpression(node.expression, node.text, warn, node);
    }
  }

  function checkEvent (exp, text, warn, range) {
    var stipped = exp.replace(stripStringRE, '');
    var keywordMatch = stipped.match(unaryOperatorsRE);
    if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
      warn(
        "avoid using JavaScript unary operator as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
        range
      );
    }
    checkExpression(exp, text, warn, range);
  }

  function checkFor (node, text, warn, range) {
    checkExpression(node.for || '', text, warn, range);
    checkIdentifier(node.alias, 'v-for alias', text, warn, range);
    checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
    checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
  }

  function checkIdentifier (
    ident,
    type,
    text,
    warn,
    range
  ) {
    if (typeof ident === 'string') {
      try {
        new Function(("var " + ident + "=_"));
      } catch (e) {
        warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
      }
    }
  }

  function checkExpression (exp, text, warn, range) {
    try {
      new Function(("return " + exp));
    } catch (e) {
      var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
      if (keywordMatch) {
        warn(
          "avoid using JavaScript keyword as property name: " +
          "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
          range
        );
      } else {
        warn(
          "invalid expression: " + (e.message) + " in\n\n" +
          "    " + exp + "\n\n" +
          "  Raw expression: " + (text.trim()) + "\n",
          range
        );
      }
    }
  }

  /*  */

  var range = 2;

  function generateCodeFrame (
    source,
    start,
    end
  ) {
    if ( start === void 0 ) start = 0;
    if ( end === void 0 ) end = source.length;

    var lines = source.split(/\r?\n/);
    var count = 0;
    var res = [];
    for (var i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (var j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length) { continue }
          res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
          var lineLength = lines[j].length;
          if (j === i) {
            // push underline
            var pad = start - (count - lineLength) + 1;
            var length = end > count ? lineLength - pad : end - start;
            res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
          } else if (j > i) {
            if (end > count) {
              var length$1 = Math.min(end - count, lineLength);
              res.push("   |  " + repeat$1("^", length$1));
            }
            count += lineLength + 1;
          }
        }
        break
      }
    }
    return res.join('\n')
  }

  function repeat$1 (str, n) {
    var result = '';
    if (n > 0) {
      while (true) { // eslint-disable-line
        if (n & 1) { result += str; }
        n >>>= 1;
        if (n <= 0) { break }
        str += str;
      }
    }
    return result
  }

  /*  */



  function createFunction (code, errors) {
    try {
      return new Function(code)
    } catch (err) {
      errors.push({ err: err, code: code });
      return noop
    }
  }

  function createCompileToFunctionFn (compile) {
    var cache = Object.create(null);

    return function compileToFunctions (
      template,
      options,
      vm
    ) {
      options = extend({}, options);
      var warn$$1 = options.warn || warn;
      delete options.warn;

      /* istanbul ignore if */
      {
        // detect possible CSP restriction
        try {
          new Function('return 1');
        } catch (e) {
          if (e.toString().match(/unsafe-eval|CSP/)) {
            warn$$1(
              'It seems you are using the standalone build of Vue.js in an ' +
              'environment with Content Security Policy that prohibits unsafe-eval. ' +
              'The template compiler cannot work in this environment. Consider ' +
              'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
              'templates into render functions.'
            );
          }
        }
      }

      // check cache
      var key = options.delimiters
        ? String(options.delimiters) + template
        : template;
      if (cache[key]) {
        return cache[key]
      }

      // compile
      var compiled = compile(template, options);

      // check compilation errors/tips
      {
        if (compiled.errors && compiled.errors.length) {
          if (options.outputSourceRange) {
            compiled.errors.forEach(function (e) {
              warn$$1(
                "Error compiling template:\n\n" + (e.msg) + "\n\n" +
                generateCodeFrame(template, e.start, e.end),
                vm
              );
            });
          } else {
            warn$$1(
              "Error compiling template:\n\n" + template + "\n\n" +
              compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
              vm
            );
          }
        }
        if (compiled.tips && compiled.tips.length) {
          if (options.outputSourceRange) {
            compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
          } else {
            compiled.tips.forEach(function (msg) { return tip(msg, vm); });
          }
        }
      }

      // turn code into functions
      var res = {};
      var fnGenErrors = [];
      res.render = createFunction(compiled.render, fnGenErrors);
      res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
        return createFunction(code, fnGenErrors)
      });

      // check function generation errors.
      // this should only happen if there is a bug in the compiler itself.
      // mostly for codegen development use
      /* istanbul ignore if */
      {
        if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
          warn$$1(
            "Failed to generate render function:\n\n" +
            fnGenErrors.map(function (ref) {
              var err = ref.err;
              var code = ref.code;

              return ((err.toString()) + " in\n\n" + code + "\n");
          }).join('\n'),
            vm
          );
        }
      }

      return (cache[key] = res)
    }
  }

  /*  */

  function createCompilerCreator (baseCompile) {
    return function createCompiler (baseOptions) {
      function compile (
        template,
        options
      ) {
        var finalOptions = Object.create(baseOptions);
        var errors = [];
        var tips = [];

        var warn = function (msg, range, tip) {
          (tip ? tips : errors).push(msg);
        };

        if (options) {
          if (options.outputSourceRange) {
            // $flow-disable-line
            var leadingSpaceLength = template.match(/^\s*/)[0].length;

            warn = function (msg, range, tip) {
              var data = { msg: msg };
              if (range) {
                if (range.start != null) {
                  data.start = range.start + leadingSpaceLength;
                }
                if (range.end != null) {
                  data.end = range.end + leadingSpaceLength;
                }
              }
              (tip ? tips : errors).push(data);
            };
          }
          // merge custom modules
          if (options.modules) {
            finalOptions.modules =
              (baseOptions.modules || []).concat(options.modules);
          }
          // merge custom directives
          if (options.directives) {
            finalOptions.directives = extend(
              Object.create(baseOptions.directives || null),
              options.directives
            );
          }
          // copy other options
          for (var key in options) {
            if (key !== 'modules' && key !== 'directives') {
              finalOptions[key] = options[key];
            }
          }
        }

        finalOptions.warn = warn;

        var compiled = baseCompile(template.trim(), finalOptions);
        {
          detectErrors(compiled.ast, warn);
        }
        compiled.errors = errors;
        compiled.tips = tips;
        return compiled
      }

      return {
        compile: compile,
        compileToFunctions: createCompileToFunctionFn(compile)
      }
    }
  }

  /*  */

  // `createCompilerCreator` allows creating compilers that use alternative
  // parser/optimizer/codegen, e.g the SSR optimizing compiler.
  // Here we just export a default compiler using the default parts.
  var createCompiler = createCompilerCreator(function baseCompile (
    template,
    options
  ) {
    var ast = parse(template.trim(), options);
    if (options.optimize !== false) {
      optimize(ast, options);
    }
    var code = generate(ast, options);
    return {
      ast: ast,
      render: code.render,
      staticRenderFns: code.staticRenderFns
    }
  });

  /*  */

  var ref$1 = createCompiler(baseOptions);
  var compile = ref$1.compile;
  var compileToFunctions = ref$1.compileToFunctions;

  /*  */

  // check whether current browser encodes a char inside attribute values
  var div;
  function getShouldDecode (href) {
    div = div || document.createElement('div');
    div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
    return div.innerHTML.indexOf('&#10;') > 0
  }

  // #3663: IE encodes newlines inside attribute values while other browsers don't
  var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
  // #6828: chrome encodes content in a[href]
  var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

  /*  */

  var idToTemplate = cached(function (id) {
    var el = query(id);
    return el && el.innerHTML
  });

  var mount = Vue.prototype.$mount;
  Vue.prototype.$mount = function (
    el,
    hydrating
  ) {
    el = el && query(el);

    /* istanbul ignore if */
    if (el === document.body || el === document.documentElement) {
      warn(
        "Do not mount Vue to <html> or <body> - mount to normal elements instead."
      );
      return this
    }

    var options = this.$options;
    // resolve template/el and convert to render function
    if (!options.render) {
      var template = options.template;
      if (template) {
        if (typeof template === 'string') {
          if (template.charAt(0) === '#') {
            template = idToTemplate(template);
            /* istanbul ignore if */
            if (!template) {
              warn(
                ("Template element not found or is empty: " + (options.template)),
                this
              );
            }
          }
        } else if (template.nodeType) {
          template = template.innerHTML;
        } else {
          {
            warn('invalid template option:' + template, this);
          }
          return this
        }
      } else if (el) {
        template = getOuterHTML(el);
      }
      if (template) {
        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile');
        }

        var ref = compileToFunctions(template, {
          outputSourceRange: "development" !== 'production',
          shouldDecodeNewlines: shouldDecodeNewlines,
          shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
          delimiters: options.delimiters,
          comments: options.comments
        }, this);
        var render = ref.render;
        var staticRenderFns = ref.staticRenderFns;
        options.render = render;
        options.staticRenderFns = staticRenderFns;

        /* istanbul ignore if */
        if (config.performance && mark) {
          mark('compile end');
          measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
        }
      }
    }
    return mount.call(this, el, hydrating)
  };

  /**
   * Get outerHTML of elements, taking care
   * of SVG elements in IE as well.
   */
  function getOuterHTML (el) {
    if (el.outerHTML) {
      return el.outerHTML
    } else {
      var container = document.createElement('div');
      container.appendChild(el.cloneNode(true));
      return container.innerHTML
    }
  }

  Vue.compile = compileToFunctions;

  return Vue;

}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (root, factory) {
  var namespace = 'VirtualList';
  /* istanbul ignore next */

  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') {
    module.exports = factory(namespace, __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js"));
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory.bind(root, namespace)),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (namespace, Vue) {
  /* istanbul ignore next */
  if (_typeof(Vue) === 'object' && typeof Vue["default"] === 'function') {
    Vue = Vue["default"];
  }
  /* istanbul ignore next */


  var _debounce = function _debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this;
      var args = arguments;

      var later = function later() {
        timeout = null;

        if (!immediate) {
          func.apply(context, args);
        }
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);

      if (callNow) {
        func.apply(context, args);
      }
    };
  };

  return Vue.component(namespace, {
    props: {
      size: {
        type: Number,
        required: true
      },
      remain: {
        type: Number,
        required: true
      },
      rtag: {
        type: String,
        "default": 'div'
      },
      wtag: {
        type: String,
        "default": 'div'
      },
      wclass: {
        type: String,
        "default": ''
      },
      wstyle: {
        type: Object,
        "default": function _default() {
          return {};
        }
      },
      pagemode: {
        type: Boolean,
        "default": false
      },
      scrollelement: {
        type: typeof window === 'undefined' ? Object : HTMLElement,
        "default": null
      },
      start: {
        type: Number,
        "default": 0
      },
      offset: {
        type: Number,
        "default": 0
      },
      variable: {
        type: [Function, Boolean],
        "default": false
      },
      bench: {
        type: Number,
        "default": 0 // also equal to remain

      },
      debounce: {
        type: Number,
        "default": 0
      },
      totop: {
        type: [Function, Boolean],
        "default": false
      },
      tobottom: {
        type: [Function, Boolean],
        "default": false
      },
      onscroll: {
        type: [Function, Boolean],
        // Boolean disables default behavior
        "default": false
      },
      istable: {
        type: Boolean,
        "default": false
      },
      item: {
        type: [Function, Object],
        "default": null
      },
      itemcount: {
        type: Number,
        "default": 0
      },
      itemprops: {
        type: Function,

        /* istanbul ignore next */
        "default": function _default() {}
      }
    },
    // use changeProp to identify the prop change.
    watch: {
      size: function size() {
        this.changeProp = 'size';
      },
      remain: function remain() {
        this.changeProp = 'remain';
      },
      bench: function bench() {
        this.changeProp = 'bench';
        this.itemModeForceRender();
      },
      start: function start() {
        this.changeProp = 'start';
        this.itemModeForceRender();
      },
      offset: function offset() {
        this.changeProp = 'offset';
        this.itemModeForceRender();
      },
      itemcount: function itemcount() {
        this.changeProp = 'itemcount';
        this.itemModeForceRender();
      },
      scrollelement: function scrollelement(newScrollelement, oldScrollelement) {
        if (this.pagemode) {
          return;
        }

        if (oldScrollelement) {
          this.removeScrollListener(oldScrollelement);
        }

        if (newScrollelement) {
          this.addScrollListener(newScrollelement);
        }
      }
    },
    created: function created() {
      var start = this.start >= this.remain ? this.start : 0;
      var keeps = this.remain + (this.bench || this.remain);
      var delta = Object.create(null);
      delta.direction = ''; // current scroll direction, D: down, U: up.

      delta.scrollTop = 0; // current scroll top, use to direction.

      delta.start = start; // start index.

      delta.end = start + keeps - 1; // end index.

      delta.keeps = keeps; // nums keeping in real dom.

      delta.total = 0; // all items count, update in filter.

      delta.offsetAll = 0; // cache all the scrollable offset.

      delta.paddingTop = 0; // container wrapper real padding-top.

      delta.paddingBottom = 0; // container wrapper real padding-bottom.

      delta.varCache = {}; // object to cache variable index height and scroll offset.

      delta.varAverSize = 0; // average/estimate item height before variable be calculated.

      delta.varLastCalcIndex = 0; // last calculated variable height/offset index, always increase.

      this.delta = delta;
    },
    mounted: function mounted() {
      if (this.pagemode) {
        this.addScrollListener(window);
      } else if (this.scrollelement) {
        this.addScrollListener(this.scrollelement);
      }

      if (this.start) {
        var start = this.getZone(this.start).start;
        this.setScrollTop(this.variable ? this.getVarOffset(start) : start * this.size);
      } else if (this.offset) {
        this.setScrollTop(this.offset);
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (this.pagemode) {
        this.removeScrollListener(window);
      } else if (this.scrollelement) {
        this.removeScrollListener(this.scrollelement);
      }
    },
    // check if delta should update when props change.
    beforeUpdate: function beforeUpdate() {
      var delta = this.delta;
      delta.keeps = this.remain + (this.bench || this.remain);
      var calcstart = this.changeProp === 'start' ? this.start : delta.start;
      var zone = this.getZone(calcstart); // if start, size or offset change, update scroll position.

      if (this.changeProp && ['start', 'size', 'offset'].includes(this.changeProp)) {
        var scrollTop = this.changeProp === 'offset' ? this.offset : this.variable ? this.getVarOffset(zone.isLast ? delta.total : zone.start) : zone.isLast && delta.total - calcstart <= this.remain ? delta.total * this.size : calcstart * this.size;
        this.$nextTick(this.setScrollTop.bind(this, scrollTop));
      } // if points out difference, force update once again.


      if (this.changeProp || delta.end !== zone.end || calcstart !== zone.start) {
        this.changeProp = '';
        delta.end = zone.end;
        delta.start = zone.start;
        this.forceRender();
      }
    },
    methods: {
      // add pagemode/scrollelement scroll event listener
      addScrollListener: function addScrollListener(element) {
        this.scrollHandler = this.debounce ? _debounce(this.onScroll.bind(this), this.debounce) : this.onScroll;
        element.addEventListener('scroll', this.scrollHandler, false);
      },
      // remove pagemode/scrollelement scroll event listener
      removeScrollListener: function removeScrollListener(element) {
        element.removeEventListener('scroll', this.scrollHandler, false);
      },
      onScroll: function onScroll(event) {
        var delta = this.delta;
        var vsl = this.$refs.vsl;
        var offset;

        if (this.pagemode) {
          var elemRect = this.$el.getBoundingClientRect();
          offset = -elemRect.top;
        } else if (this.scrollelement) {
          var scrollelementRect = this.scrollelement.getBoundingClientRect();

          var _elemRect = this.$el.getBoundingClientRect();

          offset = scrollelementRect.top - _elemRect.top;
        } else {
          offset = (vsl.$el || vsl).scrollTop || 0;
        }

        delta.direction = offset > delta.scrollTop ? 'D' : 'U';
        delta.scrollTop = offset;

        if (delta.total > delta.keeps) {
          this.updateZone(offset);
        } else {
          delta.end = delta.total - 1;
        }

        var offsetAll = delta.offsetAll;

        if (this.onscroll) {
          var param = Object.create(null);
          param.offset = offset;
          param.offsetAll = offsetAll;
          param.start = delta.start;
          param.end = delta.end;
          this.onscroll(event, param);
        }

        if (!offset && delta.total) {
          this.fireEvent('totop');
        }

        if (offset >= offsetAll) {
          this.fireEvent('tobottom');
        }
      },
      // update render zone by scroll offset.
      updateZone: function updateZone(offset) {
        var delta = this.delta;
        var overs = this.variable ? this.getVarOvers(offset) : Math.floor(offset / this.size); // if scroll up, we'd better decrease it's numbers.

        if (delta.direction === 'U') {
          overs = overs - this.remain + 1;
        }

        var zone = this.getZone(overs);
        var bench = this.bench || this.remain; // for better performance, if scroll passes items within the bench, do not update.
        // and if it's close to the last item, render next zone immediately.

        var shouldRenderNextZone = Math.abs(overs - delta.start - bench) === 1;

        if (!shouldRenderNextZone && overs - delta.start <= bench && !zone.isLast && overs > delta.start) {
          return;
        } // make sure forceRender calls as less as possible.


        if (shouldRenderNextZone || zone.start !== delta.start || zone.end !== delta.end) {
          delta.end = zone.end;
          delta.start = zone.start;
          this.forceRender();
        }
      },
      // return the right zone info based on `start/index`.
      getZone: function getZone(index) {
        var start;
        var delta = this.delta;
        index = parseInt(index, 10);
        index = Math.max(0, index);
        var lastStart = delta.total - delta.keeps;
        var isLast = index <= delta.total && index >= lastStart || index > delta.total;

        if (isLast) {
          start = Math.max(0, lastStart);
        } else {
          start = index;
        }

        return {
          end: start + delta.keeps - 1,
          start: start,
          isLast: isLast
        };
      },
      // public method, force render ui list if needed.
      // call this before the next rerender to get better performance.
      forceRender: function forceRender() {
        var _this = this;

        window.requestAnimationFrame(function () {
          _this.$forceUpdate();
        });
      },
      // force render ui if using item-mode.
      itemModeForceRender: function itemModeForceRender() {
        if (this.item) {
          this.forceRender();
        }
      },
      // return the scroll of passed items count in variable.
      getVarOvers: function getVarOvers(offset) {
        var low = 0;
        var middle = 0;
        var middleOffset = 0;
        var delta = this.delta;
        var high = delta.total;

        while (low <= high) {
          middle = low + Math.floor((high - low) / 2);
          middleOffset = this.getVarOffset(middle); // calculate the average variable height at first binary search.

          if (!delta.varAverSize) {
            delta.varAverSize = Math.floor(middleOffset / middle);
          }

          if (middleOffset === offset) {
            return middle;
          } else if (middleOffset < offset) {
            low = middle + 1;
          } else if (middleOffset > offset) {
            high = middle - 1;
          }
        }

        return low > 0 ? --low : 0;
      },
      // return a variable scroll offset from given index.
      getVarOffset: function getVarOffset(index, nocache) {
        var delta = this.delta;
        var cache = delta.varCache[index];

        if (!nocache && cache) {
          return cache.offset;
        }

        var offset = 0;

        for (var i = 0; i < index; i++) {
          var size = this.getVarSize(i, nocache);
          delta.varCache[i] = {
            size: size,
            offset: offset
          };
          offset += size;
        }

        delta.varLastCalcIndex = Math.max(delta.varLastCalcIndex, index - 1);
        delta.varLastCalcIndex = Math.min(delta.varLastCalcIndex, delta.total - 1);
        return offset;
      },
      // return a variable size (height) from given index.
      getVarSize: function getVarSize(index, nocache) {
        var cache = this.delta.varCache[index];

        if (!nocache && cache) {
          return cache.size;
        }

        if (typeof this.variable === 'function') {
          return this.variable(index) || 0;
        } else {
          // when using item, it can only get current components height,
          // need to be enhanced, or consider using variable-function instead
          var slot = this.item ? this.$children[index] ? this.$children[index].$vnode : null : this.$slots["default"][index];
          var style = slot && slot.data && slot.data.style;

          if (style && style.height) {
            var shm = style.height.match(/^(.*)px$/);
            return shm && +shm[1] || 0;
          }
        }

        return 0;
      },
      // return the variable paddingTop based on current zone.
      // @todo: if set a large `start` before variable was calculated,
      // here will also case too much offset calculate when list is very large,
      // consider use estimate paddingTop in this case just like `getVarPaddingBottom`.
      getVarPaddingTop: function getVarPaddingTop() {
        return this.getVarOffset(this.delta.start);
      },
      // return the variable paddingBottom based on the current zone.
      getVarPaddingBottom: function getVarPaddingBottom() {
        var delta = this.delta;
        var last = delta.total - 1;

        if (delta.total - delta.end <= delta.keeps || delta.varLastCalcIndex === last) {
          return this.getVarOffset(last) - this.getVarOffset(delta.end);
        } else {
          // if unreached last zone or uncalculated real behind offset
          // return the estimate paddingBottom and avoid too much calculations.
          return (delta.total - delta.end) * (delta.varAverSize || this.size);
        }
      },
      // return the variable all heights use to judge reach bottom.
      getVarAllHeight: function getVarAllHeight() {
        var delta = this.delta;

        if (delta.total - delta.end <= delta.keeps || delta.varLastCalcIndex === delta.total - 1) {
          return this.getVarOffset(delta.total);
        } else {
          return this.getVarOffset(delta.start) + (delta.total - delta.end) * (delta.varAverSize || this.size);
        }
      },
      // public method, allow the parent update variable by index.
      updateVariable: function updateVariable(index) {
        // clear/update all the offsets and heights ahead of index.
        this.getVarOffset(index, true);
      },
      // trigger a props event on parent.
      fireEvent: function fireEvent(event) {
        if (this[event]) {
          this[event]();
        }
      },
      // set manual scroll top.
      setScrollTop: function setScrollTop(scrollTop) {
        if (this.pagemode) {
          window.scrollTo(0, scrollTop);
        } else if (this.scrollelement) {
          this.scrollelement.scrollTo(0, scrollTop);
        } else {
          var vsl = this.$refs.vsl;

          if (vsl) {
            (vsl.$el || vsl).scrollTop = scrollTop;
          }
        }
      },
      // filter the shown items based on `start` and `end`.
      filter: function filter(h) {
        var delta = this.delta;
        var slots = this.$slots["default"] || []; // item-mode should be decided from items prop.

        if (this.item || this.$scopedSlots.item) {
          delta.total = this.itemcount;

          if (delta.keeps > delta.total) {
            delta.end = delta.total - 1;
          }
        } else {
          if (!slots.length) {
            delta.start = 0;
          }

          delta.total = slots.length;
        }

        var paddingTop, paddingBottom, allHeight;
        var hasPadding = delta.total > delta.keeps;

        if (this.variable) {
          allHeight = this.getVarAllHeight();
          paddingTop = hasPadding ? this.getVarPaddingTop() : 0;
          paddingBottom = hasPadding ? this.getVarPaddingBottom() : 0;
        } else {
          allHeight = this.size * delta.total;
          paddingTop = this.size * (hasPadding ? delta.start : 0);
          paddingBottom = this.size * (hasPadding ? delta.total - delta.keeps : 0) - paddingTop;
        }

        if (paddingBottom < this.size) {
          paddingBottom = 0;
        }

        delta.paddingTop = paddingTop;
        delta.paddingBottom = paddingBottom;
        delta.offsetAll = allHeight - this.size * this.remain;
        var renders = [];

        for (var i = delta.start; i < delta.total && i <= Math.ceil(delta.end); i++) {
          var slot = null;

          if (this.$scopedSlots.item) {
            slot = this.$scopedSlots.item(i);
          } else if (this.item) {
            slot = h(this.item, this.itemprops(i));
          } else {
            slot = slots[i];
          }

          renders.push(slot);
        }

        return renders;
      }
    },
    render: function render(h) {
      var dbc = this.debounce;
      var list = this.filter(h);
      var _this$delta = this.delta,
          paddingTop = _this$delta.paddingTop,
          paddingBottom = _this$delta.paddingBottom;
      var istable = this.istable;
      var wtag = istable ? 'div' : this.wtag;
      var rtag = istable ? 'div' : this.rtag;

      if (istable) {
        list = [h('table', [h('tbody', list)])];
      }

      var renderList = h(wtag, {
        style: Object.assign({
          display: 'block',
          'padding-top': paddingTop + 'px',
          'padding-bottom': paddingBottom + 'px'
        }, this.wstyle),
        "class": this.wclass,
        attrs: {
          role: 'group'
        }
      }, [this.$slots.before, list, this.$slots.after]); // page mode just render list, no wrapper.

      if (this.pagemode || this.scrollelement) {
        return renderList;
      }

      return h(rtag, {
        ref: 'vsl',
        style: {
          display: 'block',
          'overflow-y': this.size >= this.remain ? 'auto' : 'initial',
          height: this.size * this.remain + 'px'
        },
        on: {
          '&scroll': dbc ? _debounce(this.onScroll.bind(this), dbc) : this.onScroll
        }
      }, [renderList]);
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=build.js.map