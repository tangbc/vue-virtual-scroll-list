<template>
  <div>
    <CodeHighLight type="html" v-if="!!html" :code="html" />
    <CodeHighLight type="js" v-if="!!js" :code="js" />
  </div>
</template>

<script>
const html =
`
<VirtualList class="list-horizontal"
  :size="110"
  :keeps="30"
  :direction="'horizontal'"
  :wrap-class="'wrapper'"
  :item-class="'list-item-horizontal'"

  :data-key="'id'"
  :data-sources="items"
  :data-component="itemComponent"
/>
`

const js =
``

export default {
  name: 'CodeHorizontal',

  data () {
    return { html, js }
  }
}
</script>

