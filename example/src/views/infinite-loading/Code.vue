<template>
  <div>
    <CodeHighLight type="html" :code="html" />
    <CodeHighLight type="js" :code="js" />
  </div>
</template>

<script>
const html =
`
<VirtualList
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
  name: 'InfiniteLoadingCode',

  data () {
    return { html, js }
  }
}
</script>

