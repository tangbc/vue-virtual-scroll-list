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

> A vue (2.x) component support big data and infinite loading by using virtual scroll list.


## How it works

<img src="https://tangbc.github.io/github-images/virtual-scroll-list-2.gif">


## Demos

* [vue-virtual-scroll-list with 100,000 finite data](https://tangbc.github.io/vue-virtual-scroll-list/demo/finite/).

* [vue-virtual-scroll-list infinite data by increasing 20 each time](https://tangbc.github.io/vue-virtual-scroll-list/demo/infinite/).


## Example

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
	import Item from '../item.vue';
	import virtualList from 'vue-virtual-scroll-list';

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

The `<Item>` component is included inside but defined outside the `<virtualList>` component. We see that `<virtualList>` **not** rely on `<Item>` component. So you can use virtual-list with any list item component freely.

#### Using by script tag:

```html
<script src="https://unpkg.com/vue@2.0.0/dist/vue.js"></script>
<script src="https://tangbc.github.io/vue-virtual-scroll-list/dist/vue-virtual-scroll-list.js"></script>

<div id="app">
	<virtual-list :size="40" :remain="8">
		<div class="item" v-for="(item, index) of items" :key="index">Item: # {{ index }}</div>
	</virtual-list>
</div>
```

```javascript
new Vue({
	el: '#app',
	data: {
		items: new Array(100000)
	},
	components: {
		'virtual-list': VirutalList
	}
});
```

**Notice: list Item component or DOM frag using `v-for` must designate the `:key` property.**


## Support props type

*Prop* | *Type* | *Required* | *Description* |
:--- | :--- | :--- | :--- |
| size | Number | ✓ | Each list item height, currently only supports fixed height. |
| remain | Number | ✓ | How many items except show in virtual-list viewport, so `size` and `remian` will determine the virtual-list outside container height (size × remian). |
| klass | String | * | Add a custom classname to virtual-list component default is `virtual-scroll-list`. |
| onScroll | Function | * | Call on virtual-list scroll event hanlding, param: `(e, scrollTop)`  |
| toTop | Event | * | An event emit by virtual-list component when the list is scrolled on top. |
| toBottom | Event | * | An event emit by virtual-list component when the list is scrolled on bottom. |


## Contributions

Welcome to improve vue-virtual-scroll-list by any pull request or issue!


## License

[MIT License](https://github.com/tangbc/vue-virtual-scroll-list/blob/master/LICENSE)
