/*!
 * vue-virtual-scroll-list v2.3.2
 * open source under the MIT license
 * https://github.com/tangbc/vue-virtual-scroll-list#readme
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = global || self, global.VirtualList = factory(global.Vue));
}(this, (function (Vue) { 'use strict';

  Vue = Vue && Object.prototype.hasOwnProperty.call(Vue, 'default') ? Vue['default'] : Vue;

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

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /**
   * virtual list core calculating center
   */
  var DIRECTION_TYPE = {
    FRONT: 'FRONT',
    // scroll up or left
    BEHIND: 'BEHIND' // scroll down or right

  };
  var CALC_TYPE = {
    INIT: 'INIT',
    FIXED: 'FIXED',
    DYNAMIC: 'DYNAMIC'
  };
  var LEADING_BUFFER = 2;

  var Virtual = /*#__PURE__*/function () {
    function Virtual(param, callUpdate) {
      _classCallCheck(this, Virtual);

      this.init(param, callUpdate);
    }

    _createClass(Virtual, [{
      key: "init",
      value: function init(param, callUpdate) {
        // param data
        this.param = param;
        this.callUpdate = callUpdate; // size data

        this.sizes = new Map();
        this.firstRangeTotalSize = 0;
        this.firstRangeAverageSize = 0;
        this.lastCalcIndex = 0;
        this.fixedSizeValue = 0;
        this.calcType = CALC_TYPE.INIT; // scroll data

        this.offset = 0;
        this.direction = ''; // range data

        this.range = Object.create(null);

        if (param) {
          this.checkRange(0, param.keeps - 1);
        } // benchmark test data
        // this.__bsearchCalls = 0
        // this.__getIndexOffsetCalls = 0

      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.init(null, null);
      } // return current render range

    }, {
      key: "getRange",
      value: function getRange() {
        var range = Object.create(null);
        range.start = this.range.start;
        range.end = this.range.end;
        range.padFront = this.range.padFront;
        range.padBehind = this.range.padBehind;
        return range;
      }
    }, {
      key: "isBehind",
      value: function isBehind() {
        return this.direction === DIRECTION_TYPE.BEHIND;
      }
    }, {
      key: "isFront",
      value: function isFront() {
        return this.direction === DIRECTION_TYPE.FRONT;
      } // return start index offset

    }, {
      key: "getOffset",
      value: function getOffset(start) {
        return (start < 1 ? 0 : this.getIndexOffset(start)) + this.param.slotHeaderSize;
      }
    }, {
      key: "updateParam",
      value: function updateParam(key, value) {
        var _this = this;

        if (this.param && key in this.param) {
          // if uniqueIds change, find out deleted id and remove from size map
          if (key === 'uniqueIds') {
            this.sizes.forEach(function (v, key) {
              if (!value.includes(key)) {
                _this.sizes["delete"](key);
              }
            });
          }

          this.param[key] = value;
        }
      } // save each size map by id

    }, {
      key: "saveSize",
      value: function saveSize(id, size) {
        this.sizes.set(id, size); // we assume size type is fixed at the beginning and remember first size value
        // if there is no size value different from this at next comming saving
        // we think it's a fixed size list, otherwise is dynamic size list

        if (this.calcType === CALC_TYPE.INIT) {
          this.fixedSizeValue = size;
          this.calcType = CALC_TYPE.FIXED;
        } else if (this.calcType === CALC_TYPE.FIXED && this.fixedSizeValue !== size) {
          this.calcType = CALC_TYPE.DYNAMIC; // it's no use at all

          delete this.fixedSizeValue;
        } // calculate the average size only in the first range


        if (this.calcType !== CALC_TYPE.FIXED && typeof this.firstRangeTotalSize !== 'undefined') {
          if (this.sizes.size < Math.min(this.param.keeps, this.param.uniqueIds.length)) {
            this.firstRangeTotalSize = _toConsumableArray(this.sizes.values()).reduce(function (acc, val) {
              return acc + val;
            }, 0);
            this.firstRangeAverageSize = Math.round(this.firstRangeTotalSize / this.sizes.size);
          } else {
            // it's done using
            delete this.firstRangeTotalSize;
          }
        }
      } // in some special situation (e.g. length change) we need to update in a row
      // try goiong to render next range by a leading buffer according to current direction

    }, {
      key: "handleDataSourcesChange",
      value: function handleDataSourcesChange() {
        var start = this.range.start;

        if (this.isFront()) {
          start = start - LEADING_BUFFER;
        } else if (this.isBehind()) {
          start = start + LEADING_BUFFER;
        }

        start = Math.max(start, 0);
        this.updateRange(this.range.start, this.getEndByStart(start));
      } // when slot size change, we also need force update

    }, {
      key: "handleSlotSizeChange",
      value: function handleSlotSizeChange() {
        this.handleDataSourcesChange();
      } // calculating range on scroll

    }, {
      key: "handleScroll",
      value: function handleScroll(offset) {
        this.direction = offset < this.offset ? DIRECTION_TYPE.FRONT : DIRECTION_TYPE.BEHIND;
        this.offset = offset;

        if (!this.param) {
          return;
        }

        if (this.direction === DIRECTION_TYPE.FRONT) {
          this.handleFront();
        } else if (this.direction === DIRECTION_TYPE.BEHIND) {
          this.handleBehind();
        }
      } // ----------- public method end -----------

    }, {
      key: "handleFront",
      value: function handleFront() {
        var overs = this.getScrollOvers(); // should not change range if start doesn't exceed overs

        if (overs > this.range.start) {
          return;
        } // move up start by a buffer length, and make sure its safety


        var start = Math.max(overs - this.param.buffer, 0);
        this.checkRange(start, this.getEndByStart(start));
      }
    }, {
      key: "handleBehind",
      value: function handleBehind() {
        var overs = this.getScrollOvers(); // range should not change if scroll overs within buffer

        if (overs < this.range.start + this.param.buffer) {
          return;
        }

        this.checkRange(overs, this.getEndByStart(overs));
      } // return the pass overs according to current scroll offset

    }, {
      key: "getScrollOvers",
      value: function getScrollOvers() {
        // if slot header exist, we need subtract its size
        var offset = this.offset - this.param.slotHeaderSize;

        if (offset <= 0) {
          return 0;
        } // if is fixed type, that can be easily


        if (this.isFixedType()) {
          return Math.floor(offset / this.fixedSizeValue);
        }

        var low = 0;
        var middle = 0;
        var middleOffset = 0;
        var high = this.param.uniqueIds.length;

        while (low <= high) {
          // this.__bsearchCalls++
          middle = low + Math.floor((high - low) / 2);
          middleOffset = this.getIndexOffset(middle);

          if (middleOffset === offset) {
            return middle;
          } else if (middleOffset < offset) {
            low = middle + 1;
          } else if (middleOffset > offset) {
            high = middle - 1;
          }
        }

        return low > 0 ? --low : 0;
      } // return a scroll offset from given index, can efficiency be improved more here?
      // although the call frequency is very high, its only a superposition of numbers

    }, {
      key: "getIndexOffset",
      value: function getIndexOffset(givenIndex) {
        if (!givenIndex) {
          return 0;
        }

        var offset = 0;
        var indexSize = 0;

        for (var index = 0; index < givenIndex; index++) {
          // this.__getIndexOffsetCalls++
          indexSize = this.sizes.get(this.param.uniqueIds[index]);
          offset = offset + (typeof indexSize === 'number' ? indexSize : this.getEstimateSize());
        } // remember last calculate index


        this.lastCalcIndex = Math.max(this.lastCalcIndex, givenIndex - 1);
        this.lastCalcIndex = Math.min(this.lastCalcIndex, this.getLastIndex());
        return offset;
      } // is fixed size type

    }, {
      key: "isFixedType",
      value: function isFixedType() {
        return this.calcType === CALC_TYPE.FIXED;
      } // return the real last index

    }, {
      key: "getLastIndex",
      value: function getLastIndex() {
        return this.param.uniqueIds.length - 1;
      } // in some conditions range is broke, we need correct it
      // and then decide whether need update to next range

    }, {
      key: "checkRange",
      value: function checkRange(start, end) {
        var keeps = this.param.keeps;
        var total = this.param.uniqueIds.length; // datas less than keeps, render all

        if (total <= keeps) {
          start = 0;
          end = this.getLastIndex();
        } else if (end - start < keeps - 1) {
          // if range length is less than keeps, corrent it base on end
          start = end - keeps + 1;
        }

        if (this.range.start !== start) {
          this.updateRange(start, end);
        }
      } // setting to a new range and rerender

    }, {
      key: "updateRange",
      value: function updateRange(start, end) {
        this.range.start = start;
        this.range.end = end;
        this.range.padFront = this.getPadFront();
        this.range.padBehind = this.getPadBehind();
        this.callUpdate(this.getRange());
      } // return end base on start

    }, {
      key: "getEndByStart",
      value: function getEndByStart(start) {
        var theoryEnd = start + this.param.keeps - 1;
        var truelyEnd = Math.min(theoryEnd, this.getLastIndex());
        return truelyEnd;
      } // return total front offset

    }, {
      key: "getPadFront",
      value: function getPadFront() {
        if (this.isFixedType()) {
          return this.fixedSizeValue * this.range.start;
        } else {
          return this.getIndexOffset(this.range.start);
        }
      } // return total behind offset

    }, {
      key: "getPadBehind",
      value: function getPadBehind() {
        var end = this.range.end;
        var lastIndex = this.getLastIndex();

        if (this.isFixedType()) {
          return (lastIndex - end) * this.fixedSizeValue;
        } // if it's all calculated, return the exactly offset


        if (this.lastCalcIndex === lastIndex) {
          return this.getIndexOffset(lastIndex) - this.getIndexOffset(end);
        } else {
          // if not, use a estimated value
          return (lastIndex - end) * this.getEstimateSize();
        }
      } // get the item estimate size

    }, {
      key: "getEstimateSize",
      value: function getEstimateSize() {
        return this.isFixedType() ? this.fixedSizeValue : this.firstRangeAverageSize || this.param.estimateSize;
      }
    }]);

    return Virtual;
  }();

  /**
   * props declaration for default, item and slot component
   */
  var VirtualProps = {
    dataKey: {
      type: [String, Function],
      required: true
    },
    dataSources: {
      type: Array,
      required: true
    },
    dataComponent: {
      type: [Object, Function],
      required: true
    },
    keeps: {
      type: Number,
      "default": 30
    },
    extraProps: {
      type: Object
    },
    estimateSize: {
      type: Number,
      "default": 50
    },
    direction: {
      type: String,
      "default": 'vertical' // the other value is horizontal

    },
    start: {
      type: Number,
      "default": 0
    },
    offset: {
      type: Number,
      "default": 0
    },
    topThreshold: {
      type: Number,
      "default": 0
    },
    bottomThreshold: {
      type: Number,
      "default": 0
    },
    pageMode: {
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
    wrapStyle: {
      type: Object
    },
    itemTag: {
      type: String,
      "default": 'div'
    },
    itemClass: {
      type: String,
      "default": ''
    },
    itemClassAdd: {
      type: Function
    },
    itemStyle: {
      type: Object
    },
    headerTag: {
      type: String,
      "default": 'div'
    },
    headerClass: {
      type: String,
      "default": ''
    },
    headerStyle: {
      type: Object
    },
    footerTag: {
      type: String,
      "default": 'div'
    },
    footerClass: {
      type: String,
      "default": ''
    },
    footerStyle: {
      type: Object
    },
    itemScopedSlots: {
      type: Object
    }
  };
  var ItemProps = {
    index: {
      type: Number
    },
    event: {
      type: String
    },
    tag: {
      type: String
    },
    horizontal: {
      type: Boolean
    },
    source: {
      type: Object
    },
    component: {
      type: [Object, Function]
    },
    uniqueKey: {
      type: [String, Number]
    },
    extraProps: {
      type: Object
    },
    scopedSlots: {
      type: Object
    }
  };
  var SlotProps = {
    event: {
      type: String
    },
    uniqueKey: {
      type: String
    },
    tag: {
      type: String
    },
    horizontal: {
      type: Boolean
    }
  };

  /**
   * item and slot component both use similar wrapper
   * we need to know their size change at any time
   */
  var Wrapper = {
    created: function created() {
      this.shapeKey = this.horizontal ? 'offsetWidth' : 'offsetHeight';
    },
    mounted: function mounted() {
      var _this = this;

      if (typeof ResizeObserver !== 'undefined') {
        this.resizeObserver = new ResizeObserver(function () {
          _this.dispatchSizeChange();
        });
        this.resizeObserver.observe(this.$el);
      }
    },
    // since componet will be reused, so disptach when updated
    updated: function updated() {
      this.dispatchSizeChange();
    },
    beforeDestroy: function beforeDestroy() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    },
    methods: {
      getCurrentSize: function getCurrentSize() {
        return this.$el ? this.$el[this.shapeKey] : 0;
      },
      // tell parent current size identify by unqiue key
      dispatchSizeChange: function dispatchSizeChange() {
        this.$parent.$emit(this.event, this.uniqueKey, this.getCurrentSize(), this.hasInitial);
      }
    }
  }; // wrapping for item

  var Item = Vue.component('virtual-list-item', {
    mixins: [Wrapper],
    props: ItemProps,
    render: function render(h) {
      var tag = this.tag,
          component = this.component,
          _this$extraProps = this.extraProps,
          extraProps = _this$extraProps === void 0 ? {} : _this$extraProps,
          index = this.index,
          _this$scopedSlots = this.scopedSlots,
          scopedSlots = _this$scopedSlots === void 0 ? {} : _this$scopedSlots,
          uniqueKey = this.uniqueKey;
      extraProps.source = this.source;
      extraProps.index = index;
      return h(tag, {
        key: uniqueKey,
        attrs: {
          role: 'listitem'
        }
      }, [h(component, {
        props: extraProps,
        scopedSlots: scopedSlots
      })]);
    }
  }); // wrapping for slot

  var Slot = Vue.component('virtual-list-slot', {
    mixins: [Wrapper],
    props: SlotProps,
    render: function render(h) {
      var tag = this.tag,
          uniqueKey = this.uniqueKey;
      return h(tag, {
        key: uniqueKey,
        attrs: {
          role: uniqueKey
        }
      }, this.$slots["default"]);
    }
  });

  /**
   * virtual list default component
   */
  var EVENT_TYPE = {
    ITEM: 'item_resize',
    SLOT: 'slot_resize'
  };
  var SLOT_TYPE = {
    HEADER: 'header',
    // string value also use for aria role attribute
    FOOTER: 'footer'
  };
  var VirtualList = Vue.component('virtual-list', {
    props: VirtualProps,
    data: function data() {
      return {
        range: null
      };
    },
    watch: {
      'dataSources.length': function dataSourcesLength() {
        this.virtual.updateParam('uniqueIds', this.getUniqueIdFromDataSources());
        this.virtual.handleDataSourcesChange();
      },
      keeps: function keeps(newValue) {
        this.virtual.updateParam('keeps', newValue);
        this.virtual.handleSlotSizeChange();
      },
      start: function start(newValue) {
        this.scrollToIndex(newValue);
      },
      offset: function offset(newValue) {
        this.scrollToOffset(newValue);
      }
    },
    created: function created() {
      this.isHorizontal = this.direction === 'horizontal';
      this.directionKey = this.isHorizontal ? 'scrollLeft' : 'scrollTop';
      this.installVirtual(); // listen item size change

      this.$on(EVENT_TYPE.ITEM, this.onItemResized); // listen slot size change

      if (this.$slots.header || this.$slots.footer) {
        this.$on(EVENT_TYPE.SLOT, this.onSlotResized);
      }
    },
    // set back offset when awake from keep-alive
    activated: function activated() {
      this.scrollToOffset(this.virtual.offset);
    },
    mounted: function mounted() {
      // set position
      if (this.start) {
        this.scrollToIndex(this.start);
      } else if (this.offset) {
        this.scrollToOffset(this.offset);
      } // in page mode we bind scroll event to document


      if (this.pageMode) {
        this.updatePageModeFront();
        document.addEventListener('scroll', this.onScroll, {
          passive: false
        });
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.virtual.destroy();

      if (this.pageMode) {
        document.removeEventListener('scroll', this.onScroll);
      }
    },
    methods: {
      // get item size by id
      getSize: function getSize(id) {
        return this.virtual.sizes.get(id);
      },
      // get the total number of stored (rendered) items
      getSizes: function getSizes() {
        return this.virtual.sizes.size;
      },
      // return current scroll offset
      getOffset: function getOffset() {
        if (this.pageMode) {
          return document.documentElement[this.directionKey] || document.body[this.directionKey];
        } else {
          var root = this.$refs.root;
          return root ? Math.ceil(root[this.directionKey]) : 0;
        }
      },
      // return client viewport size
      getClientSize: function getClientSize() {
        var key = this.isHorizontal ? 'clientWidth' : 'clientHeight';

        if (this.pageMode) {
          return document.documentElement[key] || document.body[key];
        } else {
          var root = this.$refs.root;
          return root ? Math.ceil(root[key]) : 0;
        }
      },
      // return all scroll size
      getScrollSize: function getScrollSize() {
        var key = this.isHorizontal ? 'scrollWidth' : 'scrollHeight';

        if (this.pageMode) {
          return document.documentElement[key] || document.body[key];
        } else {
          var root = this.$refs.root;
          return root ? Math.ceil(root[key]) : 0;
        }
      },
      // set current scroll position to a expectant offset
      scrollToOffset: function scrollToOffset(offset) {
        if (this.pageMode) {
          document.body[this.directionKey] = offset;
          document.documentElement[this.directionKey] = offset;
        } else {
          var root = this.$refs.root;

          if (root) {
            root[this.directionKey] = offset;
          }
        }
      },
      // set current scroll position to a expectant index
      scrollToIndex: function scrollToIndex(index) {
        // scroll to bottom
        if (index >= this.dataSources.length - 1) {
          this.scrollToBottom();
        } else {
          var offset = this.virtual.getOffset(index);
          this.scrollToOffset(offset);
        }
      },
      // set current scroll position to bottom
      scrollToBottom: function scrollToBottom() {
        var _this = this;

        var shepherd = this.$refs.shepherd;

        if (shepherd) {
          var offset = shepherd[this.isHorizontal ? 'offsetLeft' : 'offsetTop'];
          this.scrollToOffset(offset); // check if it's really scrolled to the bottom
          // maybe list doesn't render and calculate to last range
          // so we need retry in next event loop until it really at bottom

          setTimeout(function () {
            if (_this.getOffset() + _this.getClientSize() < _this.getScrollSize()) {
              _this.scrollToBottom();
            }
          }, 3);
        }
      },
      // when using page mode we need update slot header size manually
      // taking root offset relative to the browser as slot header size
      updatePageModeFront: function updatePageModeFront() {
        var root = this.$refs.root;

        if (root) {
          var rect = root.getBoundingClientRect();
          var defaultView = root.ownerDocument.defaultView;
          var offsetFront = this.isHorizontal ? rect.left + defaultView.pageXOffset : rect.top + defaultView.pageYOffset;
          this.virtual.updateParam('slotHeaderSize', offsetFront);
        }
      },
      // reset all state back to initial
      reset: function reset() {
        this.virtual.destroy();
        this.scrollToOffset(0);
        this.installVirtual();
      },
      // ----------- public method end -----------
      installVirtual: function installVirtual() {
        this.virtual = new Virtual({
          slotHeaderSize: 0,
          slotFooterSize: 0,
          keeps: this.keeps,
          estimateSize: this.estimateSize,
          buffer: Math.round(this.keeps / 3),
          // recommend for a third of keeps
          uniqueIds: this.getUniqueIdFromDataSources()
        }, this.onRangeChanged); // sync initial range

        this.range = this.virtual.getRange();
      },
      getUniqueIdFromDataSources: function getUniqueIdFromDataSources() {
        var dataKey = this.dataKey;
        return this.dataSources.map(function (dataSource) {
          return typeof dataKey === 'function' ? dataKey(dataSource) : dataSource[dataKey];
        });
      },
      // event called when each item mounted or size changed
      onItemResized: function onItemResized(id, size) {
        this.virtual.saveSize(id, size);
        this.$emit('resized', id, size);
      },
      // event called when slot mounted or size changed
      onSlotResized: function onSlotResized(type, size, hasInit) {
        if (type === SLOT_TYPE.HEADER) {
          this.virtual.updateParam('slotHeaderSize', size);
        } else if (type === SLOT_TYPE.FOOTER) {
          this.virtual.updateParam('slotFooterSize', size);
        }

        if (hasInit) {
          this.virtual.handleSlotSizeChange();
        }
      },
      // here is the rerendering entry
      onRangeChanged: function onRangeChanged(range) {
        this.range = range;
      },
      onScroll: function onScroll(evt) {
        var offset = this.getOffset();
        var clientSize = this.getClientSize();
        var scrollSize = this.getScrollSize(); // iOS scroll-spring-back behavior will make direction mistake

        if (offset < 0 || offset + clientSize > scrollSize + 1 || !scrollSize) {
          return;
        }

        this.virtual.handleScroll(offset);
        this.emitEvent(offset, clientSize, scrollSize, evt);
      },
      // emit event in special position
      emitEvent: function emitEvent(offset, clientSize, scrollSize, evt) {
        this.$emit('scroll', evt, this.virtual.getRange());

        if (this.virtual.isFront() && !!this.dataSources.length && offset - this.topThreshold <= 0) {
          this.$emit('totop');
        } else if (this.virtual.isBehind() && offset + clientSize + this.bottomThreshold >= scrollSize) {
          this.$emit('tobottom');
        }
      },
      // get the real render slots based on range data
      // in-place patch strategy will try to reuse components as possible
      // so those components that are reused will not trigger lifecycle mounted
      getRenderSlots: function getRenderSlots(h) {
        var slots = [];
        var _this$range = this.range,
            start = _this$range.start,
            end = _this$range.end;
        var dataSources = this.dataSources,
            dataKey = this.dataKey,
            itemClass = this.itemClass,
            itemTag = this.itemTag,
            itemStyle = this.itemStyle,
            isHorizontal = this.isHorizontal,
            extraProps = this.extraProps,
            dataComponent = this.dataComponent,
            itemScopedSlots = this.itemScopedSlots;

        for (var index = start; index <= end; index++) {
          var dataSource = dataSources[index];

          if (dataSource) {
            var uniqueKey = typeof dataKey === 'function' ? dataKey(dataSource) : dataSource[dataKey];

            if (typeof uniqueKey === 'string' || typeof uniqueKey === 'number') {
              slots.push(h(Item, {
                props: {
                  index: index,
                  tag: itemTag,
                  event: EVENT_TYPE.ITEM,
                  horizontal: isHorizontal,
                  uniqueKey: uniqueKey,
                  source: dataSource,
                  extraProps: extraProps,
                  component: dataComponent,
                  scopedSlots: itemScopedSlots
                },
                style: itemStyle,
                "class": "".concat(itemClass).concat(this.itemClassAdd ? ' ' + this.itemClassAdd(index) : '')
              }));
            } else {
              console.warn("Cannot get the data-key '".concat(dataKey, "' from data-sources."));
            }
          } else {
            console.warn("Cannot get the index '".concat(index, "' from data-sources."));
          }
        }

        return slots;
      }
    },
    // render function, a closer-to-the-compiler alternative to templates
    // https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth
    render: function render(h) {
      var _this$$slots = this.$slots,
          header = _this$$slots.header,
          footer = _this$$slots.footer;
      var _this$range2 = this.range,
          padFront = _this$range2.padFront,
          padBehind = _this$range2.padBehind;
      var isHorizontal = this.isHorizontal,
          pageMode = this.pageMode,
          rootTag = this.rootTag,
          wrapTag = this.wrapTag,
          wrapClass = this.wrapClass,
          wrapStyle = this.wrapStyle,
          headerTag = this.headerTag,
          headerClass = this.headerClass,
          headerStyle = this.headerStyle,
          footerTag = this.footerTag,
          footerClass = this.footerClass,
          footerStyle = this.footerStyle;
      var paddingStyle = {
        padding: isHorizontal ? "0px ".concat(padBehind, "px 0px ").concat(padFront, "px") : "".concat(padFront, "px 0px ").concat(padBehind, "px")
      };
      var wrapperStyle = wrapStyle ? Object.assign({}, wrapStyle, paddingStyle) : paddingStyle;
      return h(rootTag, {
        ref: 'root',
        on: {
          '&scroll': !pageMode && this.onScroll
        }
      }, [// header slot
      header ? h(Slot, {
        "class": headerClass,
        style: headerStyle,
        props: {
          tag: headerTag,
          event: EVENT_TYPE.SLOT,
          uniqueKey: SLOT_TYPE.HEADER
        }
      }, header) : null, // main list
      h(wrapTag, {
        "class": wrapClass,
        attrs: {
          role: 'group'
        },
        style: wrapperStyle
      }, this.getRenderSlots(h)), // footer slot
      footer ? h(Slot, {
        "class": footerClass,
        style: footerStyle,
        props: {
          tag: footerTag,
          event: EVENT_TYPE.SLOT,
          uniqueKey: SLOT_TYPE.FOOTER
        }
      }, footer) : null, // an empty element use to scroll to bottom
      h('div', {
        ref: 'shepherd',
        style: {
          width: isHorizontal ? '0px' : '100%',
          height: isHorizontal ? '100%' : '0px'
        }
      })]);
    }
  });

  return VirtualList;

})));
