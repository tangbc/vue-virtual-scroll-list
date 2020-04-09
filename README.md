<p>
  <a href="https://travis-ci.org/tangbc/vue-virtual-scroll-list">
    <img alt="Travis CI Status" src="https://travis-ci.org/tangbc/vue-virtual-scroll-list.svg?branch=master"/>
  </a>
  <!-- <a href="https://codecov.io/gh/tangbc/vue-virtual-scroll-list">
    <img alt="Code Coverage" src="https://codecov.io/gh/tangbc/vue-virtual-scroll-list/branch/master/graph/badge.svg"/>
  </a> -->
  <a href="https://npmjs.com/package/vue-virtual-scroll-list">
    <img alt="NPM downloads" src="https://img.shields.io/npm/dm/vue-virtual-scroll-list.svg">
  </a>
  <a href="http://packagequality.com/#?package=vue-virtual-scroll-list">
    <img alt="Package quality" src="https://npm.packagequality.com/shield/vue-virtual-scroll-list.svg">
  </a>
  <a href="https://npmjs.com/package/vue-virtual-scroll-list">
    <img alt="NPM version" src="https://img.shields.io/npm/v/vue-virtual-scroll-list.svg"/>
  </a>
  <a href="https://vuejs.org/">
    <img alt="Vue version" src="https://img.shields.io/badge/vue-%3E=2.3.0-brightgreen.svg"/>
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img alt="License" src="https://img.shields.io/npm/l/vue-virtual-scroll-list.svg">
  </a>
</p>

## Table of contents

* [Advantages](#advantages)
* [Live demo](#live-demo)
* [How it works](#how-it-works)
* [Performance](#performance)
* [Simple usage](#simple-usage)
* [**Props type**](#props-type)
* [Attentions](#attentions)
* [Contributions](#contributions)
* [Changelogs](#changelogs)


## Advantages

* Tiny and very very easy to use.

* Big data list with high render performance and efficient.

* You don't need to care about each item size, everything is dynamic.

## Live demo

https://tangbc.github.io/vue-virtual-scroll-list


## Performance

#### Build time wasted

#### Total memory used


## Simple usage

```bash
npm install vue-virtual-scroll-list --save
```

```vue
<template>
  <div>
    <virtual-list
      :size="60"
      :keeps="30"

      :data-key="'uid'"
      :data-sources="items"
      :data-component="itemComponent"
    />
  </div>
</template>
<script>
  import Item from './Item'
  import VirtualList from 'vue-virtual-scroll-list'

  export default {
    data () {
      return {
        itemComponent: Item,
        items: [ {uid: 'unique_1'}, {uid: 'unique_2'}, {uid: 'unique_3'}, ... ]
      }
    },
    components: { item, 'virtual-list': VirtualList }
  }
</script>
```

**More usages or getting start you can refer to these clearly [examples](https://github.com/tangbc/vue-virtual-scroll-list/tree/master/exampe/src/views).**


## Props type

### Basic props (required):

| **Prop**      | **Type**  | **Description**                                                                                          |
|---------------|-----------|----------------------------------------------------------------------------------------------------------|
| size          | Number    | Each item size, if you don't know, just assign a estimate value.                                         |
| keeps         | Number    | How many items should be keep rendering in the real dom tree.                                            |
| dataKey       | String    | The unique key get from `dataSources` in each data object, it **must** be unique.                        |
| dataSources   | Array     | The source data array built for list, array item must be object and has a unique key for `dataKey` prop. |
| dataComponent | Component | Each item component declared by vue, and will render with props from `dataSources` array item.           |

### Other props (optional):

| **Prop**  | **Type** | **Default** | **Description**                                                                       |
|-----------|----------|-------------|---------------------------------------------------------------------------------------|
| rootTag   | String   | 'div'       | Root element tag name.                                                                |
| wrapTag   | String   | 'div'       | List wrapper element tag name.                                                        |
| wrapClass | String   | ''          | List wrapper element class name.                                                      |
| itemTag   | String   | div         | Item wrapper element tag name.                                                        |
| itemClass | String   | ''          | Item wrapper element class name.                                                      |
| direction | String   | 'vertical'  | Scroll direction, available values are: `vertical` and `horizontal`.                  |
| start     | Number   | 0           | Setting scroll start index.                                                           |
| offset    | Number   | 0           | Setting scroll offset, if both `start` and `offset` are assigned, start is preferred. |

## Attentions

This component doesn't use with `v-for` and `key` to render list, but use an "in-place patch" strategy. This way achieves the best efficient, but only suitable when your list render output does not rely on item component inner state or temporary DOM state (e.g. form input values).

But how to handle these cases? without maintaining inner state, recommend to use props and dispatch (stateless component), here is an example: [keep-state]().

## Contributions

Welcome to improve this component with any issue, pull request or code review!


## Changelogs

Maintain and update occasionally, for changes see [release](https://github.com/tangbc/vue-virtual-scroll-list/releases).


## License

[MIT License](https://github.com/tangbc/vue-virtual-scroll-list/blob/master/LICENSE)