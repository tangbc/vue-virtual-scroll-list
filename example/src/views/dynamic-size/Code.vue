<template>
  <div>
    <CodeHighLight type="html" :code="html" />
    <CodeHighLight type="js" :code="js" />
  </div>
</template>

<script>
const html =
`
<VirtualList class="list"
  :size="80" // Just pass a estimate size.
  :keeps="30"
  :data-key="'id'"
  :data-sources="items"
  :data-component="itemComponent"
/>
`

const js =
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

export default {
  name: 'CodeFixSize',

  data () {
    return { html, js }
  }
}
</script>

