/**
 * virtual list core calculating center.
 */

const DIRECTION_TYPE = {
  FRONT: 'FRONT', // scroll up or left.
  BEHIND: 'BEHIND' // scroll down or right.
}
const CALC_TYPE = {
  INIT: 'INIT',
  FIXED: 'FIXED',
  DYNAMIC: 'DYNAMIC'
}
const LEADING_BUFFER = 1

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
    this.firstRangeTotalSize = 0
    this.firstRangeAverageSize = 0
    this.lastCalcIndex = 0
    this.fixedSizeValue = 0
    this.calcType = CALC_TYPE.INIT

    // scroll data.
    this.offset = 0
    this.direction = ''

    // range data.
    this.range = Object.create(null)
    if (this.param && !this.param.disabled) {
      this.checkRange(0, param.keeps - 1)
    }

    // benchmark test data.
    // this.__bsearchCalls = 0
    // this.__getIndexOffsetCalls = 0
  }

  destroy () {
    this.init(null, null)
  }

  // return actually render range.
  getRange () {
    const range = Object.create(null)
    range.start = this.range.start
    range.end = this.range.end
    range.padFront = this.range.padFront
    range.padBehind = this.range.padBehind
    return range
  }

  isLower () {
    return this.direction === DIRECTION_TYPE.BEHIND
  }

  isUpper () {
    return this.direction === DIRECTION_TYPE.FRONT
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
    this.sizes.set(id, size)

    // we assume size type is fixed at the beginning and remember first size value
    // if there is no size value different from this at next comming saving
    // we think it's a fixed size list, otherwise is dynamic size list.
    if (this.calcType === CALC_TYPE.INIT) {
      this.fixedSizeValue = size
      this.calcType = CALC_TYPE.FIXED
    } else if (this.calcType === CALC_TYPE.FIXED && this.fixedSizeValue !== size) {
      this.calcType = CALC_TYPE.DYNAMIC
      // it's no use at all.
      delete this.fixedSizeValue
    }

    // calculate the average size only in the first range.
    if (this.sizes.size <= this.param.keeps) {
      this.firstRangeTotalSize = this.firstRangeTotalSize + size
      this.firstRangeAverageSize = Math.round(this.firstRangeTotalSize / this.sizes.size)
    } else {
      // it's done using.
      delete this.firstRangeTotalSize
    }
  }

  // in some special situation (e.g. length change) we need to update in a row
  // try goiong to render next range by a leading buffer according to current direction.
  handleDataSourcesChange () {
    let start = this.range.start

    if (this.direction === DIRECTION_TYPE.FRONT) {
      start = start - LEADING_BUFFER
    } else if (this.direction === DIRECTION_TYPE.BEHIND) {
      start = start + LEADING_BUFFER
    }

    start = Math.max(start, 0)

    this.updateRange(start, this.getEndByStart(start))
  }

  // when slot size change, we also need force update.
  handleSlotSizeChange () {
    this.handleDataSourcesChange()
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

    // move up start by a buffer length, and make sure its safety.
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
    // if slot header exist, we need subtract its size.
    const offset = this.offset - this.param.slotHeaderSize
    if (offset <= 0) {
      return 0
    }

    // if this list is fixed size, that can be easily.
    if (this.isFixedType()) {
      return Math.floor(offset / this.fixedSizeValue)
    }

    let low = 0
    let middle = 0
    let middleOffset = 0
    let high = this.param.uniqueIds.length

    while (low <= high) {
      // this.__bsearchCalls++
      middle = low + Math.floor((high - low) / 2)
      middleOffset = this.getIndexOffset(middle)

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

  // return a scroll offset from given index, can efficiency be improved more here?
  // although the call frequency is very high, its only a superposition of numbers.
  getIndexOffset (givenIndex) {
    // we know this.
    if (!givenIndex) {
      return 0
    }

    let offset = 0
    let indexSize = 0
    for (let index = 0; index <= givenIndex; index++) {
      // this.__getIndexOffsetCalls++
      indexSize = this.sizes.get(this.param.uniqueIds[index])
      offset = offset + (indexSize || this.getEstimateSize())
    }

    // remember last calculate index.
    this.lastCalcIndex = Math.max(this.lastCalcIndex, givenIndex - 1)
    this.lastCalcIndex = Math.min(this.lastCalcIndex, this.getLastIndex())

    return offset
  }

  isFixedType () {
    return this.calcType === CALC_TYPE.FIXED
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
    if (this.isFixedType()) {
      return this.fixedSizeValue * this.range.start
    } else {
      return this.getIndexOffset(this.range.start)
    }
  }

  // return total behind offset.
  // for better performance, use estimated value if a not calculated.
  getPadBehind () {
    const end = this.range.end
    const lastIndex = this.getLastIndex()

    if (this.isFixedType()) {
      return (lastIndex - end) * this.fixedSizeValue
    }

    // if calculated all already, return the exactly offset.
    if (this.lastCalcIndex === lastIndex) {
      return this.getIndexOffset(lastIndex) - this.getIndexOffset(end)
    } else {
      // if not, return a estimate offset.
      return (lastIndex - end) * this.getEstimateSize()
    }
  }

  // get estimate size for one item, get from param.size at first range.
  getEstimateSize () {
    return this.firstRangeAverageSize || this.param.size
  }
}
