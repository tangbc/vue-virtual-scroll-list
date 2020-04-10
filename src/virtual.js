/**
 * virtual list core calculating center.
 */

const DIRECTION_TYPE = {
  FRONT: 'FRONT', // scroll up or left.
  BEHIND: 'BEHIND' // scroll down or right.
}

const createObject = () => Object.create(null)

export default class Virtual {
  constructor (param, updateHook) {
    this.init(param, updateHook)
  }

  init (param, updateHook) {
    // param data.
    this.param = param
    this.updateHook = updateHook

    // size data.
    this.sizes = new Map()
    this.caches = new Map()
    this.totalSize = 0
    this.averageSize = 0
    this.lastCalculatedIndex = 0

    // scroll data.
    this.offset = 0
    this.direction = ''

    // range data.
    this.range = createObject()
    if (this.param && !this.param.disabled) {
      this.checkRange(0, param.keeps - 1)
    }

    // benchmark test data.
    this.__bsearchCalls = 0
    this.__getIndexOffsetCalls = 0
    this.__getIndexOffsetCacheHits = 0
  }

  destroy () {
    this.init(null, null)
  }

  // return actually render range.
  getRange () {
    const range = createObject()
    range.start = this.range.start
    range.end = this.range.end
    range.padFront = this.range.padFront
    range.padBehind = this.range.padBehind
    return range
  }

  // return start index offset.
  getOffset (start) {
    return this.getIndexOffset(start)
  }

  updateParam (key, value) {
    if (this.param && (key in this.param)) {
      this.param[key] = value
    }
  }

  // save each size map by id.
  saveSize (id, size) {
    if (this.sizes.has(id)) {
      this.totalSize = this.totalSize + (size - this.sizes.get(id))
    } else {
      this.totalSize = this.totalSize + size
    }

    this.sizes.set(id, size)
    this.averageSize = Math.round(this.totalSize / this.sizes.size)
  }

  // when dataSources length change, we need to force update
  // just keep the same range and recalculate pad front and behind.
  handleDataSourcesLengthChange () {
    this.updateRange(this.range.start, this.range.end)
  }

  // when slot size change, we also need force update.
  handleSlotSizeChange () {
    this.handleDataSourcesLengthChange()
  }

  // calculating range on scroll.
  handleScroll (offset) {
    if (this.param.disabled) {
      return
    }

    this.direction = offset < this.offset ? DIRECTION_TYPE.FRONT : DIRECTION_TYPE.BEHIND
    this.offset = offset

    if (this.direction === DIRECTION_TYPE.FRONT) {
      this.handleFront()
    } else if (this.direction === DIRECTION_TYPE.BEHIND) {
      this.handleBehind()
    }
  }

  // ----------- public method end. -----------

  handleFront () {
    const overs = this.getScrollOvers()
    // should not change range if start doesn't exceed overs.
    if (overs > this.range.start) {
      return
    }

    // move up start by a buffer length.
    const start = Math.max(overs - this.param.buffer, 0)
    this.checkRange(start, this.getEndByStart(start))
  }

  handleBehind () {
    const overs = this.getScrollOvers()
    // range should not change if scroll overs within buffer.
    if (overs < this.range.start + this.param.buffer) {
      return
    }

    this.checkRange(overs, this.getEndByStart(overs))
  }

  // return the pass over numbers at current scroll offset.
  getScrollOvers () {
    let low = 0
    let middle = 0
    let middleOffset = 0
    let high = this.param.uniqueIds.length

    // if slot header exist, we need subtract its size.
    const offset = this.offset - this.param.slotHeaderSize
    if (offset <= 0) {
      return 0
    }

    while (low <= high) {
      middle = low + Math.floor((high - low) / 2)
      middleOffset = this.getIndexOffset(middle)

      this.__bsearchCalls++

      if (middleOffset === offset) {
        return middle
      } else if (middleOffset < offset) {
        low = middle + 1
      } else if (middleOffset > offset) {
        high = middle - 1
      }
    }

    return low > 0 ? --low : 0
  }

  // return a scroll offset from given index.
  // @todo can efficiency be improved more here?
  getIndexOffset (givenIndex) {
    // we know this without calculate!
    if (!givenIndex) {
      return 0
    }

    // get from cache if possible.
    if (this.caches.has(givenIndex)) {
      this.__getIndexOffsetCacheHits++
      return this.caches.get(givenIndex)
    }

    let offset = 0
    let indexSize = 0
    for (let index = 0; index <= givenIndex; index++) {
      this.__getIndexOffsetCalls++

      // cache last index offset if exist.
      if (index && indexSize) {
        this.caches.set(index, offset)
      }

      indexSize = this.sizes.get(this.param.uniqueIds[index])
      offset = offset + (indexSize || this.getEstimateSize())
    }

    // remember last calculate index.
    this.lastCalculatedIndex = Math.max(this.lastCalculatedIndex, givenIndex - 1)
    this.lastCalculatedIndex = Math.min(this.lastCalculatedIndex, this.getLastIndex())

    return offset
  }

  // return the real last index.
  getLastIndex () {
    return this.param.uniqueIds.length - 1
  }

  // in some conditions range will break, we need check and correct it
  // and then decide whether need update to next range.
  checkRange (start, end) {
    const keeps = this.param.keeps
    const total = this.param.uniqueIds.length

    // datas less than keeps, render all.
    if (total <= keeps) {
      start = 0
      end = this.getLastIndex()
    } else if (end - start < keeps - 1) {
      // if range length is less than keeps, corrent it base on end.
      start = end - keeps + 1
    }

    if (this.range.start !== start) {
      this.updateRange(start, end)
    }
  }

  // call updating to a new range and rerender.
  updateRange (start, end) {
    this.range.start = start
    this.range.end = end
    this.range.padFront = this.getPadFront()
    this.range.padBehind = this.getPadBehind()

    if (!this.param.disabled) {
      this.updateHook(this.getRange())
    }
  }

  // return end base on start when going to a new range.
  getEndByStart (start) {
    const theoryEnd = start + this.param.keeps - 1
    const truelyEnd = Math.min(theoryEnd, this.getLastIndex())
    return truelyEnd
  }

  // return total front offset.
  getPadFront () {
    return this.getIndexOffset(this.range.start)
  }

  // return total behind offset.
  // for better performance, use estimated value if a not calculated.
  getPadBehind () {
    const end = this.range.end
    const lastIndex = this.getLastIndex()

    // if already calculate all, return the exactly padding.
    if (this.lastCalculatedIndex === lastIndex) {
      return this.getIndexOffset(lastIndex) - this.getIndexOffset(end)
    } else {
      // if not, return a estimate padding.
      return (lastIndex - end) * this.getEstimateSize()
    }
  }

  // get estimate size for one item.
  getEstimateSize () {
    return this.averageSize || this.param.size
  }
}
