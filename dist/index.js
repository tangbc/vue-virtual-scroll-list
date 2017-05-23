(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "vue"], factory);
	else if(typeof exports === 'object')
		exports["VueVirtualScrollList"] = factory(require("lodash"), require("vue"));
	else
		root["VueVirtualScrollList"] = factory(root["lodash"], root["vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _lodash = __webpack_require__(0);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VirtualList = _vue2.default.component('vue-virtual-scroll-list', {

	props: {
		size: {
			type: Number,
			required: true
		},
		remain: {
			type: Number,
			required: true
		},
		klass: {
			type: String,
			default: 'virtual-scroll-list'
		},
		onScroll: Function
	},

	computed: {
		computedRemain: function computedRemain() {
			console.log('REMAIN', this.remain);
			return this.remain;
		}
	},

	watch: {
		remain: function remain() {
			this.reset();
		}
	},

	// an object helping to calculate
	delta: {
		start: 0, // start index
		end: 0, // end index
		total: 0, // all items count
		keeps: 0, // nums of item keeping in real dom
		viewHeight: 0, // container wrapper viewport height
		allPadding: 0, // all padding of not-render-yet doms
		paddingTop: 0 // container wrapper real padding-top
	},

	// an object helping to calculate
	initial: {
		start: 0, // start index
		end: 0, // end index
		total: 0, // all items count
		keeps: 0, // nums of item keeping in real dom
		viewHeight: 0, // container wrapper viewport height
		allPadding: 0, // all padding of not-render-yet doms
		paddingTop: 0 // container wrapper real padding-top
	},

	data: function data() {
		return {
			length: 0
		};
	},


	methods: {
		handleScroll: function handleScroll(e) {
			var scrollTop = this.$refs.container.scrollTop;

			this.updateZone(scrollTop);

			if (this.onScroll) {
				this.onScroll(e, scrollTop);
			}
		},
		updateZone: function updateZone(offset) {
			var delta = this.$options.delta;
			var overs = Math.floor(offset / this.size);

			if (!offset) {
				this.$emit('toTop');
			}

			// need moving items at lease one unit height
			// @todo: consider prolong the zone range size
			var start = overs ? overs : 0;
			var end = overs ? overs + delta.keeps : delta.keeps;

			// avoid overflow range
			if (overs + this.computedRemain >= delta.total) {
				end = delta.total;
				start = delta.total - delta.keeps;
				this.$emit('toBottom');
			}

			delta.end = end;
			delta.start = start;

			// call component to update items
			this.$forceUpdate();
		},
		filter: function filter(slots) {
			var delta = this.$options.delta;
			var length = slots ? slots.length : 0;

			delta.total = length;
			delta.paddingTop = this.size * delta.start;
			delta.allPadding = this.size * (length - delta.keeps);

			if (slots) {
				return slots.filter(function (slot, index) {
					return index >= delta.start && index <= delta.end;
				});
			} else {
				return [];
			}
		},
		reset: function reset() {
			var remains = this.computedRemain;
			this.$options.delta = _lodash2.default.clone(this.$options.initial);
			var delta = this.$options.delta;
			var benchs = Math.round(remains / 2);

			delta.end = remains + benchs;
			delta.keeps = remains + benchs;
			delta.viewHeight = this.size * remains;
		}
	},

	beforeMount: function beforeMount() {
		this.reset();
	},
	render: function render(createElement) {
		var length = 0;
		if (this.$slots.default) {
			length = this.$slots.default.length;
		}
		console.log('LENGTH', length, 'OLD', this.length);
		if (length !== this.length) {
			this.length = length;
			this.reset();
		}
		var showList = this.filter(this.$slots.default);
		var _$options$delta = this.$options.delta,
		    viewHeight = _$options$delta.viewHeight,
		    paddingTop = _$options$delta.paddingTop,
		    allPadding = _$options$delta.allPadding;


		return createElement('div', {
			'ref': 'container',
			'class': this.klass,
			'style': {
				'overflow-y': 'auto',
				'height': viewHeight + 'px',
				'scrollTop': 0
			},
			'on': {
				'scroll': this.handleScroll
			}
		}, [createElement('div', {
			'style': {
				'padding-top': paddingTop + 'px',
				'padding-bottom': allPadding - paddingTop + 'px'
			}
		}, showList)]);
	}
});

module.exports = VirtualList;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map