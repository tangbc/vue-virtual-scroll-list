/**
 * props declaration for default, item and slot component.
 */

export const VirtualProps = {
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
  upperThreshold: {
    type: Number,
    default: 0
  },
  lowerThreshold: {
    type: Number,
    default: 0
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

  headerTag: {
    type: String,
    default: 'div'
  },
  headerClass: {
    type: String,
    default: ''
  },
  footerTag: {
    type: String,
    default: 'div'
  },
  footerClass: {
    type: String,
    default: ''
  },

  disabled: {
    type: Boolean,
    default: false
  }
}

export const ItemProps = {
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
}

export const SlotProps = {
  event: {
    type: String
  },
  uniqueKey: {
    String
  },
  tag: {
    type: String
  },
  horizontal: {
    type: Boolean
  }
}
