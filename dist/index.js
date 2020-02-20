function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (root, factory) {
  var namespace = 'VirtualList';
  /* istanbul ignore next */

  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && (typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object') {
    module.exports = factory(namespace, require('vue'));
  } else if (typeof define === 'function' && define.amd) {
    define(['vue'], factory.bind(root, namespace));
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    exports[namespace] = factory(namespace, require('vue'));
  } else {
    root[namespace] = factory(namespace, root.Vue);
  }
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
        var start, end;
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

        end = start + delta.keeps - 1;

        if (delta.total && end > delta.total) {
          end = delta.total - 1;
        }

        return {
          end: end,
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
      }, list); // page mode just render list, no wrapper.

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