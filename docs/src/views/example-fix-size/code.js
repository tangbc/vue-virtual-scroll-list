export const html =
`
<VirtualList class="list"
  :keeps="30"
  :estimate-size="60"
  :item-class="'list-item'"

  :data-key="'id'"
  :data-sources="items"
  :data-component="itemComponent"
/>
`

export const js =
`
import Item from './Item'
const items = [
  {
    id: 'unique-id-xxx',
    ...item props
  },
  ....
]

export default {
  ...
  data () {
    return {
      items: items,
      itemComponent: Item,
    }
  }
  ...
}
`
