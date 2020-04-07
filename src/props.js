export const defaultProps = {
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
    default: 'div'
  },
  wrapTag: {
    type: String,
    default: 'div'
  },
  wrapClass: {
    type: String,
    default: ''
  },

  direction: {
    type: String,
    default: 'vertical' // the other value is horizontal.
  },
  start: {
    type: Number,
    default: 0
  },
  offset: {
    type: Number,
    default: 0
  },

  itemTag: {
    type: String,
    default: 'div'
  },
  itemClass: {
    type: String,
    default: ''
  },

  disabled: {
    type: Boolean,
    default: false
  }
}

export const ItemProps = {
  uniqueKey: {
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
  tag: {
    type: String
  }
}
