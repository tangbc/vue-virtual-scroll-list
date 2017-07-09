<a href="https://npmjs.com/package/vue-virtual-scroll-list">
    <img src="https://img.shields.io/npm/v/vue-virtual-scroll-list.svg?style=flat" alt="NPM version"/>
</a>
<a href="https://vuejs.org/">
    <img src="https://img.shields.io/badge/vue-2.x-brightgreen.svg" alt="Vue version"/>
</a>
<a href="https://github.com/tangbc/vue-virtual-scroll-list/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/tangbc/vue-virtual-scroll-list.svg" alt="MIT License"/>
</a>


## vue-virtual-scroll-list

> A vue (2.x) component that supports big data and infinite loading by using virtual scroll list.

* Tiny and very easy to use.

* Big data list and infinite loading with high performance.

* Support set the initial scroll index or change any.

* Event scrolling, reach top and bottom can be detected.


## Live demos

* [vue-virtual-scroll-list with 100,000 finite data](https://tangbc.github.io/vue-virtual-scroll-list/examples/finite/).

* [vue-virtual-scroll-list infinite data by request 20 each time](https://tangbc.github.io/vue-virtual-scroll-list/examples/infinite/).


## How it works

<img src="https://tangbc.github.io/github-images/virtual-scroll-list-2.gif">


## Simple usage

#### Using by npm:

```
npm install vue-virtual-scroll-list --save
```

```javascript
<template>
    <div>
        <virtualList :size="40" :remain="8">
            <Item v-for="(item, index) of items" :item="item" :key="item.id" />
        </virtualList>
    </div>
</template>

<script>
    import Item from '../item.vue'
    import virtualList from 'vue-virtual-scroll-list'

    export default {
        name: 'demo',
        data () {
            return {
                items: [...]
            }
        },
        components: { Item, virtualList }
    }
</script>
```

The `<Item>` component is included inside but defined outside the `<virtualList>` component. We see that `<virtualList>` does **not** rely on the `<Item>` component. So you can use virtual-list with any list item component freely.

#### Using by script tag:

```html
<script src="https://unpkg.com/vue@2.0.0/dist/vue.js"></script>
<script src="https://tangbc.github.io/vue-virtual-scroll-list/index.js"></script>

<div id="app">
    <virtual-list :size="40" :remain="8">
        <div class="item" v-for="(item, index) of items" :key="index">Item: # {{ index }}</div>
    </virtual-list>
</div>
```

```javascript
// Global name as `VirutalScrollList`
Vue.component('virtual-list', VirutalScrollList)

new Vue({
    el: '#app',
    data: {
        items: new Array(100000)
    }
})
```


## Notice

* List `<Item/>` component or DOM frag using `v-for` must designate the `:key` property.

* Consider use `box-sizing: border-box;` on `<Item/>` if you want absolutely correct scroll height.


## Props type

*Prop* | *Type* | *Required* | *Description* |
:--- | :--- | :--- | :--- |
| size | Number | ✓ | Each list item height, currently only supports fixed height. |
| remain | Number | ✓ | How many items should be shown in virtual-list viewport, so `size` and `remainn` will determine the virtual-list outside container height (size × remian). |
| start | Number | * | Default value is `0`, the initial scroll start index. It must be integer and in the range of list index, throws a warning if index does not exist.  |
| rtag | String | * | Default value is `div`, the virtual-list's root HTMLElement tag name, in all case it's style is set to `display: block;` |
| rtagClass | String | * | Default value is an empty string, the virtual-list's root HTMLElement tag's classes. Has the same API has [`v-bind:class`](https://vuejs.org/v2/guide/class-and-style.html) |
| wtag | String | * | Default value is `div`, the virtual-list's item wrapper HTMLElement tag name, in all case it's style is set to `display: block;` |
| wtagClass | String | * | Default value is an empty string, the virtual-list's item wrapper HTMLElement tag's classes. Has the same API has [`v-bind:class`](https://vuejs.org/v2/guide/class-and-style.html) |
| onscroll | Function | * | Called when virtual-list scroll event handling, param: `(e, scrollTop)`. |
| totop | Function | * | Called when the virtual-list is scrolled to top. |
| tobottom | Function | * | Called when the virtual-list is scrolled to bottom. |


## Contributions

Welcome to improve vue-virtual-scroll-list by any pull request or issue.


## Changelogs

Maintain and update occasionally, for changes see [release](https://github.com/tangbc/vue-virtual-scroll-list/releases).

## License

[MIT License](https://github.com/tangbc/vue-virtual-scroll-list/blob/master/LICENSE)
