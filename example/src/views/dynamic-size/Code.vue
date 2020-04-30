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
  :data-key="'id'"
  :data-sources="items"
  :data-component="itemComponent"
  :estimate-size="80"
/>
`

const js =
`
import Item from './Item'
const items = [
  {
    id: 'unique-id-xxx',
    ...
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
  name: 'dynamic-size-code',

  data () {
    return { html, js }
  }
}
</script>

