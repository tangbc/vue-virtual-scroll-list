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
