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
  :data-key="'id'"
  :data-sources="items"
  :data-component="itemComponent"
  :estimate-size="70"
  v-on:tobottom="onScrollToBottom"
>
  <div slot="footer" class="loading-spinner">Loading ...</div>
</virtual-list>
`

const js =
`
export default {
  data () {
    return {
      itemComponent: Item,
      items: getPageData(pageSize, 0)
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

