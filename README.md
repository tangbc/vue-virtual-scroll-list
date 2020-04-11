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


## What's new in v2.0

Here are the details of update information [release v2.0](https://github.com/tangbc/vue-virtual-scroll-list/releases/tag/v2.0.0).

Since the `v2.0` is **not compatible** with `v1.x`, please note before upgrading, `v1.x` documentation see [v1.x.md](https://github.com/tangbc/vue-virtual-scroll-list/blob/master/v1.x.md).


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
        items: [ {uid: 'unique_1'}, {uid: 'unique_2'}, ... ]
      }
    },
    components: { 'virtual-list': VirtualList }
  }
</script>
```

More usages or getting start you can refer to these clearly [examples](https://tangbc.github.com/vue-virtual-scroll-list).


## Props type

### Required props

| **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** | **Type**  | **Description**                                                                                                                              |
|------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| `size`           | Number        | Each item size, you don't have to know the accurate, just simply assign an **estimate** or **average** value.                                     |
| `keeps`          | Number        | How many items you are expecting the list to keep rendering in the real dom.                                                                      |
| `data-key`       | String        | The unique key get from `data-sources` in each data object, its value **must be unique** in `data-sources`, it is used for identifying item size. |
| `data-sources`   | Array[Object] | The source array built for list, each array data must be an object and has an unique key for `data-key` property.                                 |
| `data-component` | Component     | The render item component created / declared by vue, and it will use the data object in `datas-sources` as render props.                          |

### Optional props

| **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** | **Type** | **Default** | **Description**                                                             |
|--------------------|----------|-------------|------------------------------------------------------------------------|
| `root-tag`         | String   | div      | Root element tag name.                                                    |
| `wrap-tag`         | String   | div      | List wrapper element tag name.                                            |
| `item-tag`         | String   | div      | Item wrapper element tag name.                                            |
| `wrap-class`       | String   |          | List wrapper element class name.                                          |
| `item-class`       | String   |          | Item wrapper element class name.                                          |
| `start`            | Number   | 0        | Setting scroll stay start index.                                          |
| `offset`           | Number   | 0        | Setting scroll stay offset.                                               |
| `direction`        | String   | vertical | Scroll direction, available values are `vertical` and `horizontal`.       |
| `scroll`           | Function |          | Emited when scrolling, param `(event, range)`.                            |
| `totop`            | Function |          | Emited when scrolled to top or left, param `(event, range)`.              |
| `tobottom`         | Function |          | Emited when scrolled to bottom or right, param `(event, range)`.          |
| `top-threshold`    | Number   | 0        | The threshold to emit `totop` event, attention to multiple calls.         |
| `bottom-threshold` | Number   | 0        | The threshold to emit `tobottom` event, attention to multiple calls.      |
| `header-tag`       | String   | div      | For using header slot, header slot wrapper element tag name.              |
| `footer-tag`       | String   | div      | For using footer slot, footer slot wrapper element tag name.              |
| `header-class`     | String   |          | For using header slot, header slot wrapper element class name.            |
| `footer-class`     | String   |          | For using footer slot, footer slot wrapper element class name.            |
| `disabled`        |  Boolean  | false    | Disable virtual list and always render all items (**just a trial prop**). |


## Attentions

This component use an `in-place patch` strategy to render list instead of `v-for` and `:key`. This way achieves the best efficient, but only suitable when your list output does not rely on item component inner state or temporary DOM state (e.g. form input values).

But how to deal with such a situation? Without maintaining inner state, recommend to use props and dispatch (stateless component), here is an example [keep-state](https://tangbc.github.com/vue-virtual-scroll-list/#/keep-state).


## Contributions

Welcome to improve this component with any issue, pull request or code review.


## Changelogs

Maintain and update occasionally, for changes see [release](https://github.com/tangbc/vue-virtual-scroll-list/releases).


## License

MIT License

Copyright (c) 2020 tangbc

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
