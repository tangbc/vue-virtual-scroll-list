<template>
  <div class="example">
    <github-corner />

    <div class="main">
      <div class="list">
        <virtual-list class="stream scroll-touch" ref="vsl"
          :size="80"
          :keeps="30"
          :data-key="'sid'"
          :data-sources="messages"
          :data-component="messageComponent"
          :item-class="'stream-item'"
          @totop="eventTotop"
        />
      </div>
      <massage-eidtor />
    </div>
  </div>
</template>

<script>
import Item from './Item'
import Editor from './Editor'
import { getMessages } from './util'

export default {
  name: 'chat-room',

  components: {
    'massage-eidtor': Editor
  },

  data () {
    return {
      messages: [],
      messageComponent: Item,
    }
  },

  created () {
    getMessages(3).then((messages) => {
      this.messages = this.messages.concat(messages)
    })
  },

  mounted () {
    // if (this.$refs.vsl) {
    //   this.$refs.vsl.scrollToBottom()
    // }
  },

  methods: {
    eventTotop () {
      console.log('eventTotop')
    }
  }
}
</script>

<style lang="less">
.main {
  margin-top: 1em;
}
.stream {
  width: 100%;
  height: 500px;
  border: 2px solid;
  border-bottom: none;
  overflow-y: auto;
  border-color: dimgray;
  .stream-item {
    display: flex;
    align-items: center;
    padding: 1em;
  }
}
</style>
