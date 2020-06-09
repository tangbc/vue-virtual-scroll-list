<p>
  <a href="https://travis-ci.org/tangbc/vue-virtual-scroll-list">
    <img alt="CIStatus" src="https://travis-ci.org/tangbc/vue-virtual-scroll-list.svg?branch=master"/>
  </a>
  <!-- <a href="https://codecov.io/gh/tangbc/vue-virtual-scroll-list">
    <img alt="Code Coverage" src="https://codecov.io/gh/tangbc/vue-virtual-scroll-list/branch/master/graph/badge.svg"/>
  </a> -->
  <a href="https://npm-stat.com/charts.html?package=vue-virtual-scroll-list">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/vue-virtual-scroll-list.svg">
  </a>
  <a href="https://npmjs.com/package/vue-virtual-scroll-list">
    <img alt="Version" src="https://img.shields.io/npm/v/vue-virtual-scroll-list.svg"/>
  </a>
  <!-- <a href="https://vuejs.org/">
    <img alt="Vue version" src="https://img.shields.io/badge/vue-%3E=2.3.0-brightgreen.svg"/>
  </a> -->
  <a href="http://packagequality.com/#?package=vue-virtual-scroll-list">
    <img alt="Quality" src="https://npm.packagequality.com/shield/vue-virtual-scroll-list.svg">
  </a>
</p>

## Table of contents

* [Advantages](#advantages)
* [Live demo](#live-demo)
* [What's new in v2.0](#whats-new-in-v20)
* [Simple usage](#simple-usage)
* [**Props type**](#props-type)
  * [Required props](#required-props)
  * [Optional props](#optional-props)
  * [Public methods](#public-methods)
* [Attentions](#attentions)


## Advantages

* Only 3 required props, simple and very easy to use.

* Big data list with high render performance and efficient.

* You don't have to care about item size, it will calculate automatic.


## Live demo

https://tangbc.github.io/vue-virtual-scroll-list

https://codesandbox.io/s/live-demo-virtual-list-e1ww1


## What's new in v2.0

Here are the major of update informations with [release v2.0](https://github.com/tangbc/vue-virtual-scroll-list/releases/tag/v2.0.0).

Since the `v2.0` is **not compatible** with `v1.x`, please note before upgrading, `v1.x` documentation see [v1.x.md](https://github.com/tangbc/vue-virtual-scroll-list/blob/master/v1.x.md).


## Simple usage

```bash
npm install vue-virtual-scroll-list --save
```

Root component:
```vue
<template>
  <div>
    <virtual-list style="height: 360px; overflow-y: auto;" // make list scrollable
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
    name: 'root',
    data () {
      return {
        itemComponent: Item,
        items: [{uid: 'unique_1', text: 'abc'}, {uid: 'unique_2', text: 'xyz'}, ...]
      }
    },
    components: { 'virtual-list': VirtualList }
  }
</script>
```

Item component:
```vue
<template>
  <div>{{ index }} - {{ source.text }}</div>
</template>

<script>
  export default {
    name: 'item-component',
    props: {
      index: { // index of current item
        type: Number
      },
      source: { // here is: {uid: 'unique_1', text: 'abc'}
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>
```

More usages or getting start you can refer to these clearly [examples](https://github.com/tangbc/vue-virtual-scroll-list/tree/master/example/src/views).


## Props type

### Required props

| **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;** | **Type**  | **Description**                                                               |
|------------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `data-key`       | String\|Function | The unique key get from `data-sources` in each data object. Or a function called with each `data-source` and return their unique key. Its value **must be unique** in `data-sources`, it is used for identifying item size. |
| `data-sources`   | Array[Object]    | The source array built for list, each array data must be an object and has an unique key get or generate for `data-key` property.                                                                                           |
| `data-component` | Component        | The render item component created / declared by vue, and it will use the data object in `data-sources` as render prop and named: `source`.                                                                                  |

### Optional props

<details open>
  <summary><strong>Commonly used</strong></summary>
  <p></p>
  <table>
    <tr>
      <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>keeps</code></td>
      <td>Number</td>
      <td>30</td>
      <td>How many items you are expecting the virtual list to keep rendering in the real dom.</td>
    </tr>
    <tr>
      <td><code>extra-props</code></td>
      <td>Object</td>
      <td>{}</td>
      <td>Extra props assign to item component that are not in <code>data-sources</code>. Notice: <code>index</code> and <code>source</code> are both occupied inner.</td>
    </tr>
    <tr>
      <td><code>estimate-size</code></td>
      <td>Number</td>
      <td>50</td>
      <td>The estimate size of each item, if it is closer to the average size, the scrollbar length looks more accurately. It is <strong>recommended</strong> to assign the average that calculate by yourself.</td>
    </tr>
  </table>
</details>

<details>
  <summary><strong>Uncommonly used</strong></summary>
  <p></p>
  <table>
    <tr>
      <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>start</code></td>
      <td>Number</td>
      <td>0</td>
      <td>Setting scroll position stay start index.</td>
    </tr>
    <tr>
      <td><code>offset</code></td>
      <td>Number</td>
      <td>0</td>
      <td>Setting scroll position stay offset.</td>
    </tr>
    <tr>
      <td><code>scroll</code></td>
      <td>Event</td>
      <td></td>
      <td>Emited when scrolling, param <code>(event, range)</code>.</td>
    </tr>
    <tr>
      <td><code>totop</code></td>
      <td>Event</td>
      <td></td>
      <td>Emited when scrolled to top or left, no param.</td>
    </tr>
    <tr>
      <td><code>tobottom</code></td>
      <td>Event</td>
      <td></td>
      <td>Emited when scrolled to bottom or right, no param.</td>
    </tr>
    <tr>
      <td><code>resized</code></td>
      <td>Event</td>
      <td></td>
      <td>Emited when item resized (mounted), param <code>(id, size)</code>.</td>
    </tr>
    <tr>
      <td><code>direction</code></td>
      <td>String</td>
      <td>vertical</td>
      <td>Scroll direction, available values are <code>vertical</code> and <code>horizontal</code></td>
    </tr>
    <tr>
      <td><code>page-mode</code></td>
      <td>Boolean</td>
      <td>false</td>
      <td>Let virtual list using global document to scroll through the list.</td>
    </tr>
    <tr>
      <td><code>top-threshold</code></td>
      <td>Number</td>
      <td>0</td>
      <td>The threshold to emit <code>totop</code> event, attention to multiple calls.</td>
    </tr>
    <tr>
      <td><code>bottom-threshold</code></td>
      <td>Number</td>
      <td>0</td>
      <td>The threshold to emit <code>tobottom</code> event, attention to multiple calls.</td>
    </tr>
    <tr>
      <td><code>root-tag</code></td>
      <td>String</td>
      <td>div</td>
      <td>Root element tag name.</td>
    </tr>
    <tr>
      <td><code>wrap-tag</code></td>
      <td>String</td>
      <td>div</td>
      <td>List wrapper element <code>(role=group)</code> tag name.</td>
    </tr>
    <tr>
      <td><code>wrap-class</code></td>
      <td>String</td>
      <td></td>
      <td>List wrapper element class name.</td>
    </tr>
    <tr>
      <td><code>wrap-style</code></td>
      <td>Object</td>
      <td>{}</td>
      <td>List wrapper element inline style.</td>
    </tr>
    <tr>
      <td><code>item-tag</code></td>
      <td>String</td>
      <td>div</td>
      <td>Item wrapper element <code>(role=item)</code> tag name.</td>
    </tr>
    <tr>
      <td><code>item-class</code></td>
      <td>String</td>
      <td></td>
      <td>Item wrapper element class name.</td>
    </tr>
    <tr>
      <td><code>item-class-add</code></td>
      <td>Function</td>
      <td></td>
      <td>A function that you can return extra class (String) to item wrapper element, param <code>(index)</code>.</td>
    </tr>
    <tr>
      <td><code>item-style</code></td>
      <td>Object</td>
      <td>{}</td>
      <td>Item wrapper element inline style.</td>
    </tr>
    <tr>
      <td><code>item-scoped-slots</code></td>
      <td>Object</td>
      <td>{}</td>
      <td>The <code>$scopedSlots</code> for item component.</td>
    </tr>
    <tr>
      <td><code>header-tag</code></td>
      <td>String</td>
      <td>div</td>
      <td>For using header slot, header slot wrapper element <code>(role=header)</code> tag name.</td>
    </tr>
    <tr>
      <td><code>header-class</code></td>
      <td>String</td>
      <td></td>
      <td>For using header slot, header slot wrapper element class name.</td>
    </tr>
    <tr>
      <td><code>header-style</code></td>
      <td>Object</td>
      <td>{}</td>
      <td>For using header slot, header slot wrapper element inline style.</td>
    </tr>
    <tr>
      <td><code>footer-tag</code></td>
      <td>String</td>
      <td>div</td>
      <td>For using footer slot, footer slot wrapper element <code>(role=footer)</code> tag name.</td>
    </tr>
    <tr>
      <td><code>footer-class</code></td>
      <td>String</td>
      <td></td>
      <td>For using footer slot, footer slot wrapper element class name.</td>
    </tr>
    <tr>
      <td><code>footer-style</code></td>
      <td>Object</td>
      <td>{}</td>
      <td>For using using footer slot, footer slot wrapper element inline style.</td>
    </tr>
  </table>
</details>

### Public methods

<details>
  <summary><strong>Usefull public methods</strong></summary>
  <p></p>
  <p>You can call these methods via <code><a href="https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements">ref</a></code>:</p>
  <table>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>reset()</code></td>
      <td>Reset all state back to initial.</td>
    </tr>
    <tr>
      <td><code>scrollToBottom()</code></td>
      <td>Manual set scroll position to bottom.</td>
    </tr>
    <tr>
      <td><code>scrollToIndex(index)</code></td>
      <td>Manual set scroll position to a designated index.</td>
    </tr>
    <tr>
      <td><code>scrollToOffset(offset)</code></td>
      <td>Manual set scroll position to a designated offset.</td>
    </tr>
    <tr>
      <td><code>getSize(id)</code></td>
      <td>Get the designated item size by id (from <code>data-key</code> value).</td>
    </tr>
    <tr>
      <td><code>getSizes()</code></td>
      <td>Get the total number of stored (rendered) items.</td>
    </tr>
    <tr>
      <td><code>getOffset()</code></td>
      <td>Get current scroll offset.</td>
    </tr>
    <tr>
      <td><code>getClientSize()</code></td>
      <td>Get wrapper element client viewport size (width or height).</td>
    </tr>
    <tr>
      <td><code>getScrollSize()</code></td>
      <td>Get all scroll size (scrollHeight or scrollWidth).</td>
    </tr>
    <tr>
      <td><code>updatePageModeFront()</code></td>
      <td>When using page mode and virtual list root element offsetTop or offsetLeft change, you need call this method manually.</td>
    </tr>
  </table>
</details>


## Attentions

This component use an `in-place patch` strategy to render list instead of `v-for` and `:key`. This way achieves the best efficient, but only suitable when your list output does not rely on item component inner state or temporary DOM state (e.g. form input values).

But how to deal with such a situation? Without maintaining inner state, recommend to use props and dispatch (stateless component), here is an example [keep-state](https://tangbc.github.com/vue-virtual-scroll-list/#/keep-state).


## Contributions

Welcome to improve this component with any issue, pull request or code review.


## Changelogs

Maintain and update occasionally, for changes see [release](https://github.com/tangbc/vue-virtual-scroll-list/releases).


## License

[MIT License](https://github.com/tangbc/vue-virtual-scroll-list/blob/master/LICENSE).
