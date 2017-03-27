<a href="https://npmjs.com/package/vue-virtual-scroll-list">
	<img src="https://img.shields.io/npm/v/vue-virtual-scroll-list.svg?style=flat" alt="NPM version"/>
</a>

## vue-virtual-scroll-list

> A vue (2.x) component support big data by using virtual scroll list. Tiny, smooth and without any dependence.


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
		<VirtualList :size="40" :remain="8">
			<Item v-for="(item, index) of items" :item="item" :key="item.id" />
		</VirtualList>
	</div>
</template>

<script>
	import Item from '../item.vue';
	import VirtualList from 'vue-virtual-scroll-list';

	export default {
		name: 'demo',

		components: { Item, VirtualList },

		data () {
			return {
				items: [...]
			}
		}
	}
</script>
```

The `<Item />` component is defined outside but included inside the `<VirtualList />` component. `VirtualList` has nothing to do with `<Item />`, so you can use virtual list with any list item component your project need, you just want to care about component `<Item />` and data `items`.

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
		items: new Array(10000)
	},
	components: {
		'virtual-list': VirutalList
	}
});
```

**Notice: list Item component or frag using `v-for` must designate the `:key` property.**


## Support props type

*Prop* | *Type* | *Required* | *Description* |
:--- | :--- | :--- | :--- |
| size | Number | ✓ | Each list item height, currently only supports fixed height. |
| remain | Number | ✓ | How many items except show in virtual list viewport, so `size` and `remian` will determine the virtual list outside container height (size × remian). |
| onScroll | Function | * | Call on virtual list scroll event hanlding, param: `(scrollTop, e)`  |
| toTop | Event | * | An event emit by virtual list component when the list is scrolled on top. |
| toBottom | Event | * | An event emit by virtual list component when the list is scrolled on bottom. |


## Contributions

Welcome to improve vue-virtual-scroll-list by any pull request or issue!


## License

[MIT License](https://github.com/tangbc/vue-virtual-scroll-list/blob/master/LICENSE)
