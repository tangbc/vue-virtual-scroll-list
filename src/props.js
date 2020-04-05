export const defaultProps = {
  keeps: {
    type: Number,
    require: true
  },
  disabled: {
    type: Boolean,
    default: false
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
    default: 'vertical' // the other value is `horizontal`.
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
    default: 'div'
  },
  itemClass: {
    type: String,
    default: ''
  }
}

export const ItemProps = {
  key: {
    type: String
  },
  horizontal: {
    type: Boolean
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
}

export default { defaultProps, ItemProps }
