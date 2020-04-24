<template>
  <div class="example">
    <github-corner />

    <div class="main">
      <h3>{{ messages.length }}</h3>
      <div class="list">
        <virtual-list class="stream scroll-touch" ref="vsl"
          :size="80"
          :keeps="30"
          :data-key="'sid'"
          :data-sources="messages"
          :data-component="messageComponent"
          :item-class="'stream-item'"
          @resized="onItemRendered"
          @totop="onTotop"
        >
          <div slot="header" class="header">
            <div class="spinner" v-show="!finished"></div>
            <div class="finished" v-show="finished">No more data</div>
          </div>
        </virtual-list>
      </div>
      <massage-eidtor />
    </div>
  </div>
</template>

<script>
import Item from './Item'
import Editor from './Editor'
import { getMessages, getSids } from './util'

export default {
  name: 'chat-room',

  components: {
    'massage-eidtor': Editor
  },

  data () {
    return {
      finished: false,
      messages: [],
      messageComponent: Item,
    }
  },

  created () {
    this.param = {
      pageSize: 10,
      isFirstPageReady: false,
    }

    // first page request
    getMessages(this.param.pageSize).then((messages) => {
      this.messages = this.messages.concat(messages)
    })
  },

  // mounted () {
  //   window.vsl = this.$refs.vsl
  // },

  methods: {
    onTotop () {
      // get next page
      getMessages(this.param.pageSize, true).then((messages) => {
        if (!messages.length) {
          this.finished = true
          return
        }

        this.setVirtualListToOffset(1)

        const sids = getSids(messages)
        this.messages = messages.concat(this.messages)
        this.$nextTick(() => {
          const vsl = this.$refs.vsl
          const offset = sids.reduce((previousValue, currentSid) => {
            const previousSize = typeof previousValue === 'string' ? vsl.getSize(previousValue) : previousValue
            return previousSize + this.$refs.vsl.getSize(currentSid)
          })
          this.setVirtualListToOffset(offset)
        })
      })
    },

    onItemRendered () {
      if (!this.$refs.vsl) {
        return
      }

      // first page items are all mounted, scroll to bottom
      if (!this.param.isFirstPageReady && this.$refs.vsl.getSizes() >= this.param.pageSize) {
        this.param.isFirstPageReady = true
        this.setVirtualListToBottom()
      }
    },

    setVirtualListToIndex (index) {
      if (this.$refs.vsl) {
        this.$refs.vsl.scrollToIndex(index)
      }
    },

    setVirtualListToOffset (offset) {
      if (this.$refs.vsl) {
        this.$refs.vsl.scrollToOffset(offset)
      }
    },

    setVirtualListToBottom () {
      if (this.$refs.vsl) {
        this.$refs.vsl.scrollToBottom()
      }
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
.header {
  padding: .5em;
  .finished {
    font-size: 14px;
    text-align: center;
  }
  .spinner {
    font-size: 10px;
    margin: 0px auto;
    text-indent: -9999em;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ffffff;
    background: linear-gradient(to right, #ccc 10%, rgba(255, 255, 255, 0) 42%);
    position: relative;
    animation: load3 1.4s infinite linear;
    transform: translateZ(0);
  }
  .spinner:before {
    width: 50%;
    height: 50%;
    background: #ccc;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  .spinner:after {
    background: #ffffff;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @-webkit-keyframes load3 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
