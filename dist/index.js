/*!
 * vue-virtual-scroll-list v2.0.0
 * open source under the MIT license
 * https://github.com/tangbc/vue-virtual-scroll-list#readme
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = global || self, global.VirtualList = factory(global.Vue));
}(this, (function (Vue) { 'use strict';

  Vue = Vue && Object.prototype.hasOwnProperty.call(Vue, 'default') ? Vue['default'] : Vue;

  var defaultProps = {
    keeps: {
      type: Number,
      require: true
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    rootTag: {
      type: String,
      "default": 'div'
    },
    wrapTag: {
      type: String,
      "default": 'div'
    },
    wrapClass: {
      type: String,
      "default": ''
    },
    estimateSize: {
      type: Number
    },
    dataKey: {
      type: String,
      require: true
    },
    dataSources: {
      type: Array,
      require: true
    },
    dataComponent: {
      type: Function,
      require: true
    },
    itemTag: {
      type: String,
      "default": 'div'
    },
    itemClass: {
      type: String,
      "default": ''
    }
  };
  var ItemProps = {
    key: {
      type: String
    },
    source: {
      type: Object
    },
    component: {
      type: Function
    },
    tag: {
      type: String
    }
  };

  var SUPPORT_RESIZEOBSERVER = typeof ResizeObserver !== 'undefined';
  var Item = Vue.component('virtual-list-item', {
    props: ItemProps,
    created: function created() {
      this.hasInitial = false;
    },
    mounted: function mounted() {
      var _this = this;

      // dispatch once at initial.
      this.dispatchToParent('itemResized');

      if (SUPPORT_RESIZEOBSERVER) {
        this.resizeObserver = new ResizeObserver(function () {
          // dispatch when size changed.
          if (_this.hasInitial) {
            _this.dispatchToParent('itemResized');
          } else {
            _this.hasInitial = true;
          }
        });
        this.resizeObserver.observe(this.$el);
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    },
    methods: {
      getCurrentSize: function getCurrentSize() {
        return this.$el ? this.$el.offsetHeight : 0;
      },
      // tell parent current size identify by unqiue key.
      dispatchToParent: function dispatchToParent(event) {
        this.$parent.$emit.call(this.$parent, event, this.key, this.getCurrentSize());
      }
    },
    render: function render(h) {
      return h(this.tag, null, [h(this.component, {
        props: this.source
      })]);
    }
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  var Virtual = /*#__PURE__*/function () {
    function Virtual(param, updateHook) {
      _classCallCheck(this, Virtual);

      this.init(param, updateHook);
    }

    _createClass(Virtual, [{
      key: "init",
      value: function init(param, updateHook) {
        // param data
        this.param = param || {};
        this.updateHook = updateHook; // size data

        this.sizes = Object.create(null);
        this.totalSize = 0;
        this.averageSize = 0;
        this.lastCalculatedIndex = 0;
        this.offsetCaches = Object.create(null); // scroll data

        this.offset = 0;
        this.direction = ''; // range data

        this.range = Object.create(null);

        if (this.param && !this.param.disabled) {
          this.updateRange(0, param.keeps - 1);
        } // benchmark data


        this.__bsearchCalls = 0;
        this.__getIndexOffsetCalls = 0;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.init(null, null);
      }
    }, {
      key: "getRange",
      value: function getRange() {
        return _objectSpread2({}, this.range);
      }
    }, {
      key: "callUpdateHook",
      value: function callUpdateHook() {
        if (!this.param.disabled) {
          this.updateHook(this.getRange());
        }
      }
    }, {
      key: "updateParam",
      value: function updateParam(key, value) {
        if (key in this.param) {
          this.param[key] = value;
        }
      }
    }, {
      key: "saveSize",
      value: function saveSize(id, size) {
        if (!this.param.uniqueIds.includes(id)) {
          return;
        }

        if (id in this.sizes) {
          this.totalSize = this.totalSize + (size - this.sizes[id]);
        } else {
          this.totalSize = this.totalSize + size;
        }

        this.sizes[id] = size;
        this.averageSize = Math.round(this.totalSize / Object.keys(this.sizes).length);
      }
    }, {
      key: "handleScroll",
      value: function handleScroll(offset) {
        if (this.param.disabled) {
          return;
        }

        this.direction = offset < this.offset ? 'UP' : 'DOWN';
        this.offset = offset;

        if (this.direction === 'UP') {
          this.handleUp();
        } else if (this.direction === 'DOWN') {
          this.handleDown();
        }
      }
    }, {
      key: "handleUp",
      value: function handleUp() {
        this.handleDown();
      }
    }, {
      key: "handleDown",
      value: function handleDown() {
        var overs = this.getScrollOvers();
        var start = overs;
        var end = this.getEndByStart(start);
        this.updateRange(start, end);
      }
    }, {
      key: "getScrollOvers",
      value: function getScrollOvers() {
        var low = 0;
        var middle = 0;
        var middleOffset = 0;
        var high = this.param.uniqueIds.length;

        while (low <= high) {
          middle = low + Math.floor((high - low) / 2);
          middleOffset = this.getIndexOffset(middle);
          this.__bsearchCalls++;

          if (middleOffset === this.offset) {
            return middle;
          } else if (middleOffset < this.offset) {
            low = middle + 1;
          } else if (middleOffset > this.offset) {
            high = middle - 1;
          }
        }

        return low > 0 ? --low : 0;
      }
    }, {
      key: "getIndexOffset",
      value: function getIndexOffset(index) {
        // remember last calculate index.
        this.lastCalculatedIndex = Math.max(this.lastCalculatedIndex, index - 1);
        this.lastCalculatedIndex = Math.min(this.lastCalculatedIndex, this.getLastIndex());
        var offset = 0;

        while (index--) {
          this.__getIndexOffsetCalls++;
          offset = offset + (this.sizes[this.param.uniqueIds[index]] || this.getEstimateSize());
        }

        return offset;
      }
    }, {
      key: "getLastIndex",
      value: function getLastIndex() {
        return this.param.uniqueIds.length - 1;
      }
    }, {
      key: "updateRange",
      value: function updateRange(start, end) {
        if (this.range.start !== start) {
          this.range.start = start;
          this.range.end = end;
          this.range.padFront = this.getPadFront();
          this.range.padBehind = this.getPadBehind();
          this.callUpdateHook();
        }
      }
    }, {
      key: "getEndByStart",
      value: function getEndByStart(start) {
        var theoryEnd = start + this.param.keeps - 1;
        var truelyEnd = Math.min(theoryEnd, this.getLastIndex());
        return truelyEnd;
      }
    }, {
      key: "getPadFront",
      value: function getPadFront() {
        return this.getIndexOffset(this.range.start);
      }
    }, {
      key: "getPadBehind",
      value: function getPadBehind() {
        var end = this.range.end;
        var lastIndex = this.getLastIndex(); // if already calculate all, return the exactly padding.

        if (this.lastCalculatedIndex === lastIndex) {
          return this.getIndexOffset(lastIndex) - this.getIndexOffset(end);
        } else {
          // if not, return a estimate padding.
          return (lastIndex - end) * this.getEstimateSize();
        }
      } // get estimate size for one component.

    }, {
      key: "getEstimateSize",
      value: function getEstimateSize() {
        return this.averageSize || this.param.estimateSize;
      }
    }]);

    return Virtual;
  }();

  var VirtualList = Vue.component('virtual-list', {
    props: defaultProps,
    data: function data() {
      return {
        range: {}
      };
    },
    created: function created() {
      var _this = this;

      this.virtual = new Virtual({
        buffer: 0,
        keeps: this.keeps,
        disabled: this.disabled,
        estimateSize: this.estimateSize,
        uniqueIds: this.dataSources.map(function (dataSource) {
          return dataSource[_this.dataKey];
        })
      }, this.onRangeChange);
      this.range = this.virtual.getRange(); // just for debug

      window.virtual = this.virtual;
      this.$on('itemResized', this.onItemResized);
    },
    beforeDestroy: function beforeDestroy() {
      this.virtual.destroy();
    },
    mounted: function mounted() {// console.log(this)
    },
    updated: function updated() {// console.log('xx updated')
    },
    methods: {
      onItemResized: function onItemResized(itemId, itemSize) {
        // console.log('onItemResized', itemId, itemSize)
        this.virtual.saveSize(itemId, itemSize);
      },
      onRangeChange: function onRangeChange(range) {
        this.range = range;
      },
      onScroll: function onScroll() {
        var rootEl = this.$refs.rootEl;
        this.virtual.handleScroll(rootEl.scrollTop);
      },
      getRenderSlots: function getRenderSlots(h) {
        var slots = [];
        var start = this.disabled ? 0 : this.range.start;
        var end = this.disabled ? this.dataSources.length - 1 : this.range.end;

        for (var index = start; index <= end; index++) {
          slots.push(h(Item, {
            "class": this.itemClass,
            props: {
              tag: this.itemTag,
              key: this.dataSources[index][this.dataKey],
              source: this.dataSources[index],
              component: this.dataComponent
            }
          }));
        }

        return slots;
      }
    },
    // render function, a closer-to-the-compiler alternative to templates.
    // https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth
    render: function render(h) {
      return h(this.rootTag, {
        ref: 'rootEl',
        on: {
          '&scroll': this.onScroll
        }
      }, [h(this.wrapTag, {
        "class": this.wrapClass,
        style: {
          margin: '0px',
          padding: "".concat(this.range.padFront, "px 0px ").concat(this.range.padBehind, "px")
        }
      }, this.getRenderSlots(h))]);
    }
  });

  return VirtualList;

})));
//# sourceMappingURL=index.js.map
