
export default class Virtual {
  constructor (param, updateHook) {
    this.init(param, updateHook)
  }

  init (param, updateHook) {
    // param data
    this.param = param || {}
    this.updateHook = updateHook

    // size data
    this.sizes = Object.create(null)
    this.totalSize = 0
    this.averageSize = 0
    this.lastCalculatedIndex = 0
    this.offsetCaches = Object.create(null)

    // scroll data
    this.offset = 0
    this.direction = ''

    // range data
    this.range = Object.create(null)
    if (this.param && !this.param.disabled) {
      this.updateRange(0, param.keeps - 1)
    }

    // benchmark data
    this.__bsearchCalls = 0
    this.__getIndexOffsetCalls = 0
    this.__getIndexOffsetCacheHits = 0
  }

  destroy () {
    this.init(null, null)
  }

  getRange () {
    return {
      ...this.range
    }
  }

  callUpdateHook () {
    if (!this.param.disabled) {
      this.updateHook(this.getRange())
    }
  }

  updateParam (key, value) {
    if (key in this.param) {
      this.param[key] = value
    }
  }

  saveSize (id, size) {
    if (!this.param.uniqueIds.includes(id)) {
      return
    }

    if (id in this.sizes) {
      this.totalSize = this.totalSize + (size - this.sizes[id])
    } else {
      this.totalSize = this.totalSize + size
    }

    this.sizes[id] = size
    this.averageSize = Math.round(this.totalSize / Object.keys(this.sizes).length)
  }

  handleScroll (offset) {
    if (this.param.disabled) {
      return
    }

    this.direction = offset < this.offset ? 'UP' : 'DOWN'
    this.offset = offset

    if (this.direction === 'UP') {
      this.handleUp()
    } else if (this.direction === 'DOWN') {
      this.handleDown()
    }
  }

  handleUp () {
    this.handleDown()
  }

  handleDown () {
    const overs = this.getScrollOvers()
    const start = overs
    const end = this.getEndByStart(start)
    this.updateRange(start, end)
  }

  getScrollOvers () {
    let low = 0
    let middle = 0
    let middleOffset = 0
    let high = this.param.uniqueIds.length

    while (low <= high) {
      middle = low + Math.floor((high - low) / 2)
      middleOffset = this.getIndexOffset(middle)

      this.__bsearchCalls++

      if (middleOffset === this.offset) {
        return middle
      } else if (middleOffset < this.offset) {
        low = middle + 1
      } else if (middleOffset > this.offset) {
        high = middle - 1
      }
    }

    return low > 0 ? --low : 0
  }

  // return a scroll offset from given index.
  getIndexOffset (givenIndex) {
    // we know this!
    if (!givenIndex) {
      this.__getIndexOffsetCacheHits++
      return 0
    }

    // get from cache avoid too much calculate.
    if (givenIndex in this.offsetCaches) {
      this.__getIndexOffsetCacheHits++
      return this.offsetCaches[givenIndex]
    }

    let offset = 0
    let indexOffset = 0
    for (let index = 0; index <= givenIndex; index++) {
      this.__getIndexOffsetCalls++

      // cache last index index offset if exist.
      if (index && indexOffset) {
        this.offsetCaches[index] = offset
      }

      indexOffset = this.sizes[this.param.uniqueIds[index]]
      offset = offset + (indexOffset || this.getEstimateSize())
    }

    // remember last calculate index.
    this.lastCalculatedIndex = Math.max(this.lastCalculatedIndex, givenIndex - 1)
    this.lastCalculatedIndex = Math.min(this.lastCalculatedIndex, this.getLastIndex())

    return offset
  }

  getLastIndex () {
    return this.param.uniqueIds.length - 1
  }

  updateRange (start, end) {
    if (this.range.start !== start) {
      this.range.start = start
      this.range.end = end
      this.range.padFront = this.getPadFront()
      this.range.padBehind = this.getPadBehind()
      this.callUpdateHook()
    }
  }

  getEndByStart (start) {
    const theoryEnd = start + this.param.keeps - 1
    const truelyEnd = Math.min(theoryEnd, this.getLastIndex())
    return truelyEnd
  }

  getPadFront () {
    return this.getIndexOffset(this.range.start)
  }

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

  // get estimate size for one component.
  getEstimateSize () {
    return this.averageSize || this.param.estimateSize
  }
}
