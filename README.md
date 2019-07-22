<p>
    <a href="https://travis-ci.org/tangbc/vue-virtual-scroll-list">
        <img alt="Travis CI Status" src="https://travis-ci.org/tangbc/vue-virtual-scroll-list.svg?branch=master"/>
    </a>
    <a href="https://codecov.io/gh/tangbc/vue-virtual-scroll-list">
        <img alt="Code Coverage" src="https://codecov.io/gh/tangbc/vue-virtual-scroll-list/branch/master/graph/badge.svg"/>
    </a>
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
* [Live demos](#live-demos)
* [How it works](#how-it-works)
* [Simple usage](#simple-usage)
    * [vfor-mode](#vfor-mode)
    * [item-mode](#item-mode)
    * [variable height](#variable-height)
* [Performance comparison](#performance-comparison)
    * [Build time wasted](#build-time-wasted)
    * [Total memory used](#total-memory-used)
* [Attentions](#attentions)
* [**Props type**](#props-type)
* [Public methods](#public-methods)
* [Contributions](#contributions)
* [Changelogs](#changelogs)


## Advantages

* Items are independent.

* Tiny and very easy to use.

* Big data list with high performance.


## Live demos

* [Build 100,000 items with vfor-mode](https://tangbc.github.io/vue-virtual-scroll-list/demos/vfor-mode).

* [Build 100,000 items with item-mode](https://tangbc.github.io/vue-virtual-scroll-list/demos/item-mode).

* [Build 100,000 items with variable height](https://tangbc.github.io/vue-virtual-scroll-list/demos/variable-height).

The main difference between `item-mode` and `vfor-mode` is that: `item-mode` make a higher performance but not very convenient to handle changing data frequently; however, `vfor-mode` is just the opposite.

Besides, you can also compare the experience which without using virtual-list here: [without-virtual-list](https://tangbc.github.io/vue-virtual-scroll-list/demos/without-virtual-list).


## How it works

<img src="https://tangbc.github.io/github-images/virtual-scroll-list-how-works.gif">


## Simple usage

```console
npm install vue-virtual-scroll-list --save
```

### vfor-mode

All you need to care about is only data!

```vue
<template>
    <div>
        <virtual-list :size="40" :remain="8">
            <item v-for="item of items" :key="item.id" />
        </virtual-list>
    </div>
</template>
<script>
    import item from '../item.vue'
    import virtualList from 'vue-virtual-scroll-list'
    export default {
        data () {
            return {
                items: [ {id: 1}, {id: 2}, {id: 3}, ... ]
            }
        },
        components: { item, 'virtual-list': virtualList }
    }
</script>
```

### item-mode

This mode can save a considerable amount of memory and performance. Props `item`, `itemcount` and `itemprops` are both required, you don't need put `<item/>` with a v-for directive inside `virtual-list`, just assign it as prop `item`:

```vue
<template>
    <div>
        <virtual-list :size="40" :remain="8"
            :item="item"
            :itemcount="100000"
            :itemprops="getItemprops"
        />
    </div>
</template>
<script>
    import itemComponent from '../item.vue'
    import virtualList from 'vue-virtual-scroll-list'
    export default {
        data () {
            return {
                item: itemComponent,
            }
        },
        methods: {
            getItemprops (itemIndex) {
                // <item/> will render with following data object:
                // https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth
                return {
                    props: itemProps,
                    attrs: itemAttrs,
                    ...
                }
            }
        },
        components: { 'virtual-list': virtualList }
    }
</script>

```

Whenever you want to change any item data from list in this mode, you need call public method `forceRender()` after source data change. Increase or decrease items, you need to keep `itemcount` and call `forceRender()` together.

### variable height

Using variable height, props `remain` and `size` is still required. All the index variable height and scroll offset will be cached by virtual-list after the binary-search calculate, if you want to change anyone `<item/>` height from data, you need call public method `updateVariable(index)` to clear the offset cache.

If you assign `variable` as `true`, **do not** set inline style height inside `<item/>` component, you **must** set inline style height on `<item/>` component outside directly, such as:
```vue
<template>
    <div>
        <virtual-list :size="40" :remain="8" :variable="true">
            <item v-for="item of items" :key="item.id" :style="{ height: item.height + 'px' }" />
        </virtual-list>
    </div>
</template>
```

**More use ways or getting start you can refer to these clearly [demos](https://github.com/tangbc/vue-virtual-scroll-list/tree/master/demos) or [test suites](https://github.com/tangbc/vue-virtual-scroll-list/tree/master/test).**


## Performance comparison

According to the demos above, here are lists of approximate statistics:

#### Build time wasted

| Build amount | item-mode | vfor-mode | *without virtual list* |
|-------------:|-----------|-----------|------------------------|
|    **1,000** | 8 ms      | 35 ms     | 220 ms                 |
|   **10,000** | 10 ms     | 170 ms    | 1500 ms                |
|  **100,000** | 20 ms     | 1300 ms   | Browser crash!         |

#### Total memory used

| Build amount | item-mode | vfor-mode | *without virtual list* |
|-------------:|-----------|-----------|------------------------|
|    **1,000** | 10 MB     | 80 MB     | 200 MB                 |
|   **10,000** | 25 MB     | 120 MB    | 220 MB                 |
|  **100,000** | 55 MB     | 550 MB    | Browser crash!         |


## Attentions

* Must assign the `:key` property on `<item>` component or dom frag with `v-for` directive.

* Consider using `box-sizing: border-box` on `<item>` if you want absolutely correct scroll height.


## Props type

<img height="256" src="https://tangbc.github.io/github-images/vitual-scroll-list-prop-type.png">

> Props of basic:

| Prop          | Type                | Required | Description                                                                                                                                                                                                                                                                               |
|---------------|---------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| size          | Number              | ✓        | Each list item height, in variable height, this prop just use to calculate the virtual-list outside container viewport fixed height.                                                                                                                                                      |
| remain        | Number              | ✓        | How many items should be shown in virtual-list viewport, so `size` and `remain` determine the outside container viewport height (`size × remian`).                                                                                                                                        |

> Props of performance:

| Prop          | Type                | Required | Description                                                                                                                                                                                                                                                                               |
|---------------|---------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| bench         | Number              | *        | Default value is equal to `remain`, unreached items count, not show in virtual-list viewport but exist in real DOM, the larger the bench, the higher the scroll performance will achieved.                                                                                                |
| debounce      | Number              | *        | It's disabled by default, milliseconds of using `debounce` function to ensure scroll event doesn't fire so often that it bricks browser performance.                                                                                                                                      |

> Props of position:

| Prop          | Type                | Required | Description                                                                                                                                                                                                                                                                               |
|---------------|---------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| start         | Number              | *        | Default value is `0`, the initial scroll start index. It must be integer and in the range of list index, if invalid there will be effected as `0` or the last one.                                                                                                                        |
| offset        | Number              | *        | Default value is `0`, the initial scroll offset. If both `start` and `offset` are assigned at initialization, `start` is preferred.                                                                                                                                                       |

> Props of element and class:

| Prop          | Type                | Required | Description                                                                                                                                                                                                                                                                               |
|---------------|---------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| rtag          | String              | *        | Default value is `div`, virtual-list root element tag name, in all cases it's style is set to `display: block;`                                                                                                                                                                           |
| wtag          | String              | *        | Default value is `div`, virtual-list item wrapper element tag name, in all cases it's style is set to `display: block;`                                                                                                                                                                   |
| wclass        | String              | *        | Default is no classname, virtual-list item wrapper element class, if assign this prop, you better **not** to change it's [CSS box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model).                                               |

> Props of scroll mode:

| Prop          | Type                | Required | Description                                                                                                                                                                                                                                                                               |
|---------------|---------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| pagemode      | Boolean             | *        | Let virtual-list scroll with window page viewport.                                                                                                                                                                                                                                        |
| scrollelement | HTMLElement         | *        | Let virtual-list scroll with a parent element. When `pagemode` is true, `scrollelement` is ignored.                                                                                                                                                                                       |

> Props of scroll event:

| Prop          | Type                | Required | Description                                                                                                                                                                                                                                                                               |
|---------------|---------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| totop         | Function            | *        | Called when virtual-list is scrolled to top, no param.                                                                                                                                                                                                                                    |
| tobottom      | Function            | *        | Called when virtual-list is scrolled to bottom, no param.                                                                                                                                                                                                                                 |
| onscroll      | Function            | *        | Called when virtual-list is scrolling, with param: [`(event, data)`](https://github.com/tangbc/vue-virtual-scroll-list/releases/tag/v1.1.7).                                                                                                                                              |

> Props of variable height:

| Prop          | Type                | Required | Description                                                                                                                                                                                                                                                                               |
|---------------|---------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| variable      | Function or Boolean | *        | If assign `Function`, this prop is a variable height getter function which is called with param: `(index)` when each item is ready to be calculated; if assign `Boolean`, virtual-list will get each item variable height by it's inline style height automatic.                          |

> Props of item-mode:

| Prop          | Type                | Required | Description                                                                                                                                                                                                                                                                               |
|---------------|---------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| item          | Component           | *        | List item vue component or vNode.                                                                                                                                                                                                                                                         |
| itemcount     | Number              | *        | List total count, you should update this prop when source data changed.                                                                                                                                                                                                                   |
| itemprops     | Function            | *        | A function call when each item is going to be rendered, you can assign props or data to each item component in this function.                                                                                                                                                             |


## Public methods

Here are some usefull public methods you can call via [`ref`](https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements):

* `forceRender()`: force render virtual-list if you need or make it refresh.

* `updateVariable(index)`: update item height by index in variable height list.


## Contributions

Welcome to improve this vue component with any issue, pull request or code review!


## Changelogs

Maintain and update occasionally, for changes see [release](https://github.com/tangbc/vue-virtual-scroll-list/releases).


## License

[MIT License](https://github.com/tangbc/vue-virtual-scroll-list/blob/master/LICENSE)
