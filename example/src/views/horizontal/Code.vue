<template>
  <div>
    <code-high-light type="html" v-if="!!html" :code="html" />
    <code-high-light type="js" v-if="!!js" :code="js" />
  </div>
</template>

<script>
const html =
`
<virtual-list class="list-horizontal"
  :size="110" // just assign a estimate value.
  :keeps="30"
  :direction="'horizontal'" // make scroll direction in horizontal.
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
  name: 'horizontal-code',

  data () {
    return { html, js }
  }
}
</script>

