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

* [Advantages](#advantages)
* [Live demos](#live-demos)
* [Performance comparison](#performance-comparison)
    * [Build time wasted](#build-time-wasted)
    * [Total memory used](#total-memory-used)
* [How it works](#how-it-works)
* [Simple usage](#simple-usage)
* [Attentions](#attentions)
* [Props type](#props-type)
* [Public methods](#public-methods)
* [Special scenes](#special-scenes)
    * [About variable height](#about-variable-height)
    * [About item mode](#about-item-mode)
* [Contributions](#contributions)
* [Changelogs](#changelogs)


## Advantages

* Tiny and very easy to use.

* Big data list with high performance.

* Support fixed height and variable height.

* Support set the scroll index or offset to any.

* Event scroll, reach top and bottom can be detected.


## Live demos

* [Build 100,000 items with item-mode](https://tangbc.github.io/vue-virtual-scroll-list/demos/item-mode).

* [Build 100,000 items with vfor-mode](https://tangbc.github.io/vue-virtual-scroll-list/demos/vfor-mode).

* [Build 100,000 items with variable height](https://tangbc.github.io/vue-virtual-scroll-list/demos/variable-height).

The main difference between `item-mode` and `vfor-mode` is that: `item-mode` make a higher performance but not very convenient to handle changing data frequently; however, `vfor-mode` is just the opposite.

Besides, you can also compare the experience which without using virtual-list here: [without-virtual-list](https://tangbc.github.io/vue-virtual-scroll-list/demos/without-virtual-list).


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

## How it works

<img src="https://tangbc.github.io/github-images/virtual-scroll-list-how-works.gif">


## Simple usage

```console
npm install vue-virtual-scroll-list --save
```

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

**More use ways or getting start you can refer to these clearly [demos](https://github.com/tangbc/vue-virtual-scroll-list/tree/master/demos) or [test suites](https://github.com/tangbc/vue-virtual-scroll-list/tree/master/test).**


## Attentions

* Must assign the `:key` property on `<item>` component or dom frag with `v-for` directive.

* Consider using `box-sizing: border-box` on `<item>` if you want absolutely correct scroll height.


## Props type

<img height="256" src="https://tangbc.github.io/github-images/vitual-scroll-list-prop-type.png">

| Prop      | Type                | Required | Description                                                                                                                                                                                                                                                                               |
|-----------|---------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| size      | Number              | ✓        | Each list item height, in variable height, this prop just use to calculate the virtual-list outside container viewport fixed height.                                                                                                                                                      |
| remain    | Number              | ✓        | How many items should be shown in virtual-list viewport, so `size` and `remain` determine the outside container viewport height (`size × remian`).                                                                                                                                        |
| bench     | Number              | *        | Default value is equal to `remain`, unreached items count, not show in virtual-list viewport but exist in real DOM, the larger the bench, the higher the scroll performance will achieved.                                                                                                |
| start     | Number              | *        | Default value is `0`, the initial scroll start index. It must be integer and in the range of list index, if invalid there will be effected as `0` or the last one.                                                                                                                        |
| offset    | Number              | *        | Default value is `0`, the initial scroll offset. If both `start` and `offset` are assigned at initialization, `start` is preferred.                                                                                                                                                       |
| debounce  | Number              | *        | It's disabled by default, milliseconds of using `debounce` function to ensure scroll event doesn't fire so often that it bricks browser performance.                                                                                                                                      |
| rtag      | String              | *        | Default value is `div`, the virtual-list root element tag name, in all cases it's style is set to `display: block;`                                                                                                                                                                       |
| wtag      | String              | *        | Default value is `div`, the virtual-list item wrapper element tag name, in all cases it's style is set to `display: block;`                                                                                                                                                               |
| wclass    | String              | *        | Default is no classname, the virtual-list item wrapper element class, if assign this prop, you better **not** to change it's [CSS box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model).                                           |
| totop     | Function            | *        | Called when virtual-list is scrolled to top, no param.                                                                                                                                                                                                                                    |
| tobottom  | Function            | *        | Called when virtual-list is scrolled to bottom, no param.                                                                                                                                                                                                                                 |
| onscroll  | Function            | *        | Called when virtual-list is scrolling, with param: [`(event, data)`](https://github.com/tangbc/vue-virtual-scroll-list/releases/tag/v1.1.7).                                                                                                                                              |
| variable  | Function or Boolean | *        | Used in variable height, if assign `Function`, this prop is a variable height getter function which is called with param: `(index)` when each item is ready to be calculated; if assign `Boolean`, virtual-list will get each item variable height by it's inline style height automatic. |
| item      | Component           | *        | Using in `item-mode`, list item vue component.                                                                                                                                                                                                                                            |
| itemcount | Number              | *        | Using in `item-mode`, list data total counts.                                                                                                                                                                                                                                             |
| itemprops | Function            | *        | Using in `item-mode`, a function call when each item is going to be rendered.                                                                                                                                                                                                             |


## Public methods

Here are some usefull public methods you can call via [`ref`](https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements):

* `forceRender()`: force render virtual-list if you need or make it refresh.

* `updateVariable(index)`: update item height by index in variable height list.


## Special scenes

### About variable height

In variable height, prop `remain` and `size` is still required. All the index variable height and scroll offset will be cached by virtual-list after the binary-search calculate, if you want to change anyone `<item/>` height from data, you should call virtual-list public method `updateVariable(index)` to clear the offset cache.

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

Corresponding example you can refer to the [demo of variable height](https://tangbc.github.io/vue-virtual-scroll-list/demos/variable-height).

### About item mode

Using `item-mode` can save a considerable amount of memory and performance. In this mode, prop `item`, `itemcount` and `itemprops` are both required, and you don't have to put `<item/>` with a v-for directive inside `virtual-list`, just assign it as prop `item`:

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
                const itemProps = getItemProp(itemIndex)
                return {
                    props: itemProps // <item/> will render with itemProps.
                }
            }
        },
        components: { 'virtual-list': virtualList }
    }
</script>

```

Whenever if you want to change any item data from list in `item-mode`, you just need call public method `forceRender()` after source data change. Increase or decrease items, you need to change `itemcount` and call `forceRender()` together.

Corresponding example you can refer to the [demo of item-mode](https://tangbc.github.io/vue-virtual-scroll-list/demos/item-mode).


## Contributions

Welcome to improve vue-virtual-scroll-list with any issue, pull request or code review.


## Changelogs

Maintain and update occasionally, for changes see [release](https://github.com/tangbc/vue-virtual-scroll-list/releases).


## License

[MIT License](https://github.com/tangbc/vue-virtual-scroll-list/blob/master/LICENSE)
