<template>
  <div>
    <code-high-light type="html" :code="html" />
    <code-high-light type="js" :code="js" />
  </div>
</template>

<script>
const html =
`
<virtual-list
  :size="70"
  :keeps="30"
  :data-key="'id'"
  :data-sources="items"
  :data-component="itemComponent"
  v-on:tobottom="onScrollToBottom"
/>
`

const js =
`
export default {
  data () {
    return {
      items: getPageData(pageSize, 0),
      itemComponent: Item,
    }
  },

  methods: {
    onScrollToBottom () {
      this.items = this.items.concat(getPageData(pageSize, pageNum))
    }
  }
}
`

export default {
  name: 'infinite-loading-code',

  data () {
    return { html, js }
  }
}
</script>

