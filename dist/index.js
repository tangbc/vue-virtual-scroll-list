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

  /**
   * virtual list core calculating center.
   */
  var DIRECTION_TYPE = {
    FRONT: 1,
    // scroll up or left.
    BEHIND: 2 // scroll down or right.

  };

  var Virtual = /*#__PURE__*/function () {
    function Virtual(param, updateHook) {
      _classCallCheck(this, Virtual);

      this.init(param, updateHook);
    }

    _createClass(Virtual, [{
      key: "init",
      value: function init(param, updateHook) {
        // param data.
        this.param = param;
        this.updateHook = updateHook; // size data.

        this.sizes = Object.create(null);
        this.totalSize = 0;
        this.averageSize = 0;
        this.lastCalculatedIndex = 0;
        this.offsetCaches = Object.create(null); // scroll data.

        this.offset = 0;
        this.direction = ''; // range data.

        this.range = Object.create(null);

        if (this.param && !this.param.disabled) {
          this.checkRange(0, param.keeps - 1);
        } // benchmark test data.


        this.__bsearchCalls = 0;
        this.__getIndexOffsetCalls = 0;
        this.__getIndexOffsetCacheHits = 0;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.init(null, null);
      } // return actually render range.

    }, {
      key: "getRange",
      value: function getRange() {
        return {
          start: this.range.start,
          end: this.range.end,
          padFront: this.range.padFront,
          padBehind: this.range.padBehind
        };
      } // return start index offset.

    }, {
      key: "getOffset",
      value: function getOffset(start) {
        return this.getIndexOffset(start);
      }
    }, {
      key: "updateParam",
      value: function updateParam(key, value) {
        if (this.param && key in this.param) {
          this.param[key] = value;
        }
      } // save each size map by id.

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
      } // when dataSources length change, we need to force update
      // just keep the same range and recalculate pad front and pad behind.

    }, {
      key: "handleDataSourcesLengthChange",
      value: function handleDataSourcesLengthChange() {
        this.updateRange(this.range.start, this.range.end);
      } // when slot size change, we also need to force update.

    }, {
      key: "handleSlotSizeChange",
      value: function handleSlotSizeChange() {
        this.handleDataSourcesLengthChange();
      } // calculating range on scroll.

    }, {
      key: "handleScroll",
      value: function handleScroll(offset) {
        if (this.param.disabled) {
          return;
        }

        this.direction = offset < this.offset ? DIRECTION_TYPE.FRONT : DIRECTION_TYPE.BEHIND;
        this.offset = offset;

        if (this.direction === DIRECTION_TYPE.FRONT) {
          this.handleFront();
        } else if (this.direction === DIRECTION_TYPE.BEHIND) {
          this.handleBehind();
        }
      } // ----------- public method end. -----------

    }, {
      key: "handleFront",
      value: function handleFront() {
        var overs = this.getScrollOvers(); // should not change range if start doesn't exceed overs.

        if (overs > this.range.start) {
          return;
        } // move up start by a buffer length.


        var start = Math.max(overs - this.param.buffer, 0);
        this.checkRange(start, this.getEndByStart(start));
      }
    }, {
      key: "handleBehind",
      value: function handleBehind() {
        var overs = this.getScrollOvers(); // range should not change if scroll overs within buffer.

        if (overs < this.range.start + this.param.buffer) {
          return;
        }

        this.checkRange(overs, this.getEndByStart(overs));
      } // return current scroll offset pass over items.

    }, {
      key: "getScrollOvers",
      value: function getScrollOvers() {
        var low = 0;
        var middle = 0;
        var middleOffset = 0;
        var high = this.param.uniqueIds.length; // if slot header exist, we need subtract its size.

        var offset = this.offset - this.param.slotHeaderSize;

        if (offset <= 0) {
          return 0;
        }

        while (low <= high) {
          middle = low + Math.floor((high - low) / 2);
          middleOffset = this.getIndexOffset(middle);
          this.__bsearchCalls++;

          if (middleOffset === offset) {
            return middle;
          } else if (middleOffset < offset) {
            low = middle + 1;
          } else if (middleOffset > offset) {
            high = middle - 1;
          }
        }

        return low > 0 ? --low : 0;
      } // return a scroll offset from given index.
      // @todo can efficiency be improved more here?

    }, {
      key: "getIndexOffset",
      value: function getIndexOffset(givenIndex) {
        // we know this without calculate!
        if (!givenIndex) {
          return 0;
        } // get from cache avoid too much calculate.


        if (givenIndex in this.offsetCaches) {
          this.__getIndexOffsetCacheHits++;
          return this.offsetCaches[givenIndex];
        }

        var offset = 0;
        var indexSize = 0;

        for (var index = 0; index <= givenIndex; index++) {
          this.__getIndexOffsetCalls++; // cache last index offset if exist.

          if (index && indexSize) {
            this.offsetCaches[index] = offset;
          }

          indexSize = this.sizes[this.param.uniqueIds[index]];
          offset = offset + (indexSize || this.getEstimateSize());
        } // remember last calculate index.


        this.lastCalculatedIndex = Math.max(this.lastCalculatedIndex, givenIndex - 1);
        this.lastCalculatedIndex = Math.min(this.lastCalculatedIndex, this.getLastIndex());
        return offset;
      } // return the current real last index.

    }, {
      key: "getLastIndex",
      value: function getLastIndex() {
        return this.param.uniqueIds.length - 1;
      } // in some conditions range will break, we need check and correct it
      // and then decide whether needs to update range.

    }, {
      key: "checkRange",
      value: function checkRange(start, end) {
        var keeps = this.param.keeps;
        var total = this.param.uniqueIds.length; // datas less than keeps, render all.

        if (total <= keeps) {
          start = 0;
          end = this.getLastIndex();
        } else if (end - start < keeps - 1) {
          // if range length is less than keeps, corrent it base on end.
          start = end - keeps + 1;
        }

        if (this.range.start !== start) {
          this.updateRange(start, end);
        }
      } // call updating to a new range

    }, {
      key: "updateRange",
      value: function updateRange(start, end) {
        this.range.start = start;
        this.range.end = end;
        this.range.padFront = this.getPadFront();
        this.range.padBehind = this.getPadBehind();

        if (!this.param.disabled) {
          this.updateHook(this.getRange());
        }
      } // return end base on start into a new range.

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
      } // get estimate size for one.

    }, {
      key: "getEstimateSize",
      value: function getEstimateSize() {
        return this.averageSize || this.param.size;
      }
    }]);

    return Virtual;
  }();

  /**
   * props declaration for default, item and slot component.
   */
  var VirtualProps = {
    size: {
      type: Number
    },
    keeps: {
      type: Number,
      require: true
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
      type: Object,
      require: true
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
    direction: {
      type: String,
      "default": 'vertical' // the other value is horizontal.

    },
    start: {
      type: Number,
      "default": 0
    },
    offset: {
      type: Number,
      "default": 0
    },
    itemTag: {
      type: String,
      "default": 'div'
    },
    itemClass: {
      type: String,
      "default": ''
    },
    headerTag: {
      type: String,
      "default": 'div'
    },
    headerClass: {
      type: String,
      "default": ''
    },
    footerTag: {
      type: String,
      "default": 'div'
    },
    footerClass: {
      type: String,
      "default": 'div'
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  };
  var ItemProps = {
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
      type: Object
    },
    uniqueKey: {
      type: String
    }
  };
  var SlotProps = {
    event: {
      type: String
    },
    uniqueKey: {
      String: String
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
   * we need to know their size change at any time.
   */
  var Wrapper = {
    created: function created() {
      this.hasInitial = false;
      this.shapeKey = this.horizontal ? 'offsetWidth' : 'offsetHeight';
    },
    mounted: function mounted() {
      var _this = this;

      // dispatch once at initial.
      this.dispatchSizeChange();

      if (typeof ResizeObserver !== 'undefined') {
        this.resizeObserver = new ResizeObserver(function () {
          // dispatch when size changed.
          if (_this.hasInitial) {
            _this.dispatchSizeChange();
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
        return this.$el ? this.$el[this.shapeKey] : 0;
      },
      // tell parent current size identify by unqiue key.
      dispatchSizeChange: function dispatchSizeChange() {
        this.$parent.$emit(this.event, this.uniqueKey, this.getCurrentSize());
      }
    }
  }; // wrapping for item.

  var Item = Vue.component('virtual-list-item', {
    mixins: [Wrapper],
    props: ItemProps,
    render: function render(h) {
      return h(this.tag, {
        role: 'item'
      }, [h(this.component, {
        props: this.source
      })]);
    }
  }); // wrapping for slot.

  var Slot = Vue.component('virtual-list-slot', {
    mixins: [Wrapper],
    props: SlotProps,
    render: function render(h) {
      return h(this.tag, {
        attrs: {
          role: this.uniqueKey
        }
      }, this.$slots["default"]);
    }
  });

  /**
   * virtual list default component.
   */
  var EVENT_TYPE = {
    ITEM: 'item_resize',
    SLOT: 'slot_resize'
  };
  var SLOT_TYPE = {
    HEADER: 'header',
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
      dataSources: function dataSources(newValue, oldValue) {
        if (newValue.length !== oldValue.length) {
          this.virtual.updateParam('uniqueIds', this.getUniqueIdFromDataSources());
          this.virtual.handleDataSourcesLengthChange();
        }
      }
    },
    created: function created() {
      this.isHorizontal = this.direction === 'horizontal';
      this.directionKey = this.isHorizontal ? 'scrollLeft' : 'scrollTop';
      this.virtual = new Virtual({
        size: this.size,
        // also could be a estimate value.
        slotHeaderSize: 0,
        slotFooterSize: 0,
        keeps: this.keeps,
        disabled: this.disabled,
        buffer: Math.round(this.keeps / 3),
        // recommend for a third of keeps.
        uniqueIds: this.getUniqueIdFromDataSources()
      }, this.onRangeChanged); // just for debug

      window.virtual = this.virtual; // also need sync initial range first.

      this.range = this.virtual.getRange(); // listen item size changing.

      this.$on(EVENT_TYPE.ITEM, this.onItemResized); // listen slot size changing.

      if (this.$slots.header || this.$slots.footer) {
        this.$on(EVENT_TYPE.SLOT, this.onSlotResized);
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.virtual.destroy();
    },
    mounted: function mounted() {
      // handling position set.
      if (this.start) {
        this.setScrollOffset(this.virtual.getOffset(this.start));
      } else if (this.offset) {
        this.setScrollOffset(this.offset);
      }
    },
    methods: {
      onItemResized: function onItemResized(id, size) {
        this.virtual.saveSize(id, size);
      },
      onSlotResized: function onSlotResized(type, size) {
        if (type === SLOT_TYPE.HEADER) {
          this.virtual.updateParam('slotHeaderSize', size);
        } else if (type === SLOT_TYPE.FOOTER) {
          this.virtual.updateParam('slotFooterSize', size);
        }

        this.virtual.handleSlotSizeChange();
      },
      // here is the rerendering entry.
      onRangeChanged: function onRangeChanged(range) {
        this.range = range;
      },
      onScroll: function onScroll() {
        var root = this.$refs.root;

        if (!root) {
          return;
        }

        var offset = root[this.directionKey];
        this.emitEvent(offset);
        this.virtual.handleScroll(offset);
      },
      getUniqueIdFromDataSources: function getUniqueIdFromDataSources() {
        var _this = this;

        return this.dataSources.map(function (dataSource) {
          return dataSource[_this.dataKey];
        });
      },
      // set current scroll position to a expectant offset.
      setScrollOffset: function setScrollOffset(offset) {
        var root = this.$refs.root;

        if (root) {
          root[this.directionKey] = offset || 0;
        }
      },
      // emit event at special position.
      emitEvent: function emitEvent(offset) {
        // ref element is definitely available here.
        var root = this.$refs.root;
        var offsetShape = root[this.isHorizontal ? 'clientWidth' : 'clientHeight'];
        var scrollShape = root[this.isHorizontal ? 'scrollWidth' : 'scrollHeight']; // only non-empty & offset === 0 calls totop.

        if (!!this.dataSources.length && !offset) {
          this.$emit('totop');
        } else if (offset + offsetShape >= scrollShape) {
          this.$emit('tobottom');
        } else {
          this.$emit('onscroll', offset);
        }
      },
      // get the render slots based on start and end.
      getRenderSlots: function getRenderSlots(h) {
        var slots = [];
        var start = this.disabled ? 0 : this.range.start;
        var end = this.disabled ? this.dataSources.length - 1 : this.range.end;

        for (var index = start; index <= end; index++) {
          slots.push(h(Item, {
            "class": this.itemClass,
            props: {
              tag: this.itemTag,
              event: EVENT_TYPE.ITEM,
              horizontal: this.isHorizontal,
              uniqueKey: this.dataSources[index][this.dataKey],
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
      var _this$$slots = this.$slots,
          header = _this$$slots.header,
          footer = _this$$slots.footer;
      var padding = this.isHorizontal ? "0px ".concat(this.range.padBehind, "px 0px ").concat(this.range.padFront, "px") : "".concat(this.range.padFront, "px 0px ").concat(this.range.padBehind, "px");
      return h(this.rootTag, {
        ref: 'root',
        on: {
          '&scroll': this.onScroll
        }
      }, [// header slot.
      header ? h(Slot, {
        "class": this.headerClass,
        props: {
          tag: this.headerTag,
          event: EVENT_TYPE.SLOT,
          uniqueKey: SLOT_TYPE.HEADER
        }
      }, header) : null, // main list.
      h(this.wrapTag, {
        "class": this.wrapClass,
        attrs: {
          role: 'group'
        },
        style: {
          padding: padding
        }
      }, this.getRenderSlots(h)), // footer slot.
      footer ? h(Slot, {
        "class": this.footerClass,
        props: {
          tag: this.footerTag,
          event: EVENT_TYPE.SLOT,
          uniqueKey: SLOT_TYPE.FOOTER
        }
      }, footer) : null]);
    }
  });

  return VirtualList;

})));
