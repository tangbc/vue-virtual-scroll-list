<template>
  <div>
    <code-high-light type="html" :code="html" />
    <code-high-light type="js" :code="js" />
  </div>
</template>

<script>
const html =
`
<virtual-list class="list"
  :size="60"
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
  name: 'fix-size-code',

  data () {
    return { html, js }
  }
}
</script>

