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
  <a href="https://npmjs.com/package/vue-virtual-scroll-list">
    <img alt="NPM version" src="https://img.shields.io/npm/v/vue-virtual-scroll-list.svg"/>
  </a>
  <a href="https://vuejs.org/">
    <img alt="Vue version" src="https://img.shields.io/badge/vue-%3E=2.3.0-brightgreen.svg"/>
  </a>
  <a href="http://packagequality.com/#?package=vue-virtual-scroll-list">
    <img alt="Package quality" src="https://npm.packagequality.com/shield/vue-virtual-scroll-list.svg">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img alt="License" src="https://img.shields.io/npm/l/vue-virtual-scroll-list.svg">
  </a>
</p>

## Table of contents

* [Advantages](#advantages)
* [Live demo](#live-demo)
* [How it works](#how-it-works)
* [What's new in v2.0](#whats-new-in-v20)
* [Performance](#performance)
* [Simple usage](#simple-usage)
* [**Props type**](#props-type)
* [Attentions](#attentions)
* [Contributions](#contributions)
* [Changelogs](#changelogs)


## Advantages

* Tiny and very very easy to use.

* Big data list with high render performance and efficient.

* You don't have to care about each item size, it will calculate automatic.


## Live demo

https://tangbc.github.io/vue-virtual-scroll-list


## How it works


## What's new in v2.0

Here are the details of update information: [release v2.0](). And `v1.x` documentation please see [v1.x.md]().


## Simple usage

```bash
npm install vue-virtual-scroll-list --save
```

```vue
<template>
  <div>
    <virtual-list
      :size="60" // just assign a estimate or average value.
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
    components: { 'virtual-list': VirtualList }
  }
</script>
```

More usages or getting start you can refer to these clearly [examples](https://tangbc.github.com/vue-virtual-scroll-list).


## Props type

### Required props:

| **Prop**      | **Type**  | **Description**                                                                                                                              |
|---------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| size          | Number    | Each item size, you don't have to know the accurate, just simply assign a **estimate** or **average** value.                                 |
| keeps         | Number    | How many items you are expecting the list to keep rendering in the real dom.                                                                 |
| dataKey       | String    | The unique key get from `dataSources` in each data object, its value **must be unique** in `dataSources`, it used for identifying item size. |
| dataSources   | Array     | The source array built for list, each array data must be an object and has an unique key for `dataKey` property.                             |
| dataComponent | Component | The render item component created / declared by vue, and it will use the data object in `dataSources` as render props.                       |

### Optional props:

| **Prop**  | **Type** | **Default** | **Description**                                                          |
|-----------|----------|-------------|--------------------------------------------------------------------------|
| rootTag     | String   | div      | Root element tag name.                                                    |
| wrapTag     | String   | div      | List wrapper element tag name.                                            |
| wrapClass   | String   | -        | List wrapper element class name.                                          |
| itemTag     | String   | div      | Item wrapper element tag name.                                            |
| itemClass   | String   | -        | Item wrapper element class name.                                          |
| direction   | String   | vertical | Scroll direction, available values are: `vertical` and `horizontal`.      |
| start       | Number   | 0        | Setting scroll stay start index.                                          |
| offset      | Number   | 0        | Setting scroll stay offset.                                               |
| totop       | Function | -        | Called when list is scrolled to top, with param: `(event, range)`.        |
| tobottom    | Function | -        | Called when list is scrolled to bottom, with param: `(event, range)`.     |
| onscroll    | Function | -        | Called when list is scrolling, with param: `(event, range)`.              |
| headerTag   | String   | div      | For using header slot, header slot wrapper element tag name.              |
| headerClass | String   | -        | For using header slot, header slot wrapper element class name.            |
| footerTag   | String   | div      | For using footer slot, footer slot wrapper element tag name.              |
| footerClass | String   | -        | For using footer slot, footer slot wrapper element class name.            |
| disabled    | Boolean  | false    | Disable virtual list and always render all items (**just a trial prop**). |


## Attentions

This component use an "in-place patch" strategy to render list instead of `v-for` + `:key`. This way achieves the best efficient, but only suitable when your list output does not rely on item component inner state or temporary DOM state (e.g. form input values).

But how to deal with such a scene? Without maintaining inner state, recommend to use props and dispatch (stateless component), here is an example [keep-state](https://tangbc.github.com/vue-virtual-scroll-list/#/keep-state).


## Contributions

Welcome to improve this component with any issue, pull request or code review.


## Changelogs

Maintain and update occasionally, for changes see [release](https://github.com/tangbc/vue-virtual-scroll-list/releases).


## License

[MIT License](https://github.com/tangbc/vue-virtual-scroll-list/blob/master/LICENSE)
