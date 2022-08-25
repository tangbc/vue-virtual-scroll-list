<template>
  <div class="example">
    <github-corner />

    <tool-bar />

    <div class="main">
      <div class="list-container">
        <virtual-list v-show="!!messages.length" class="stream scroll-touch" :class="{ overflow: overflow }" ref="vsl"
          :data-key="'sid'"
          :data-sources="messages"
          :data-component="messageComponent"

          :estimate-size="100"
          :item-class="'stream-item'"
          :item-class-add="addItemClass"
          @resized="onItemRendered"
          @totop="onTotop"
        >
          <div slot="header" v-show="overflow" class="header">
            <div class="spinner" v-show="!finished"></div>
            <div class="finished" v-show="finished">No more data</div>
          </div>
        </virtual-list>
        <div class="empty" v-show="!messages.length">
          <div class="wrapper">
            <div class="icon"></div>
            <div class="tips">No chats</div>
          </div>
        </div>
      </div>
      <massage-eidtor @send="onSendMessage" :send="sendRandomMessage" :received="receivedRandomMessage" />
    </div>
  </div>
</template>

<script>
import Item from './Item'
import Editor from './Editor'
import Toolbar from './Toolbar'
import getSentences from '../../common/sentences'
import { getMessages, getSids, LOAD_TYPES, getLoadType } from './util'

export default {
  name: 'chat-room',

  components: {
    'massage-eidtor': Editor,
    'tool-bar': Toolbar
  },

  data () {
    return {
      finished: false,
      messages: [],
      messageComponent: Item,
      overflow: false
    }
  },

  created () {
    const loadType = getLoadType()

    this.param = {
      pageSize: loadType === LOAD_TYPES.FEW ? 2 : 10,
      isFirstPageReady: false,
      isFetching: false
    }

    this.finished = loadType !== LOAD_TYPES.PAGES

    if (loadType !== LOAD_TYPES.EMPTY) {
      // first page request
      getMessages(this.param.pageSize).then((messages) => {
        this.messages = this.messages.concat(messages)
      })
    }
  },

  methods: {
    onTotop () {
      // only page type has paging
      if (getLoadType() !== LOAD_TYPES.PAGES || this.param.isFetching) {
        return
      }

      this.param.isFetching = true

      // get next page
      getMessages(this.param.pageSize, true).then((messages) => {
        if (!messages.length) {
          this.finished = true
          return
        }

        const sids = getSids(messages)
        this.messages = messages.concat(this.messages)
        this.$nextTick(() => {
          const vsl = this.$refs.vsl
          const offset = sids.reduce((previousValue, currentSid) => {
            const previousSize = typeof previousValue === 'string' && previousValue !== 0 ? vsl.getSize(previousValue) : previousValue
            return previousSize + this.$refs.vsl.getSize(currentSid)
          }, 0)
          this.setVirtualListToOffset(offset)

          this.param.isFetching = false
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

      this.checkOverFlow()
    },

    onSendMessage (message) {
      this.messages.push(message)
      this.$nextTick(() => {
        this.setVirtualListToBottom()
      })
    },

    // update item wrapper class dynamic
    addItemClass (index) {
      return (this.messages[index] && this.messages[index].isCreator) ? 'creator' : ''
    },

    checkOverFlow () {
      const vsl = this.$refs.vsl
      if (vsl) {
        this.overflow = vsl.getScrollSize() > vsl.getClientSize()
      }
    },

    // mock received message
    receivedRandomMessage () {
      getMessages(1).then((messages) => {
        this.messages = this.messages.concat(messages)
        this.$nextTick(() => {
          this.setVirtualListToBottom()
        })
      })
    },

    // mock send message
    sendRandomMessage (message) {
      message.content = getSentences()
      this.onSendMessage(message)
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
.stream, .empty {
  position: relative;
  width: 100%;
  height: 500px;
  border: 2px solid;
  border-bottom: none;
  overflow-y: auto;
  border-color: dimgray;
  display: flex;
  flex-direction: column-reverse;
  @media (max-width: 640px) {
    height: 430px;
  }
  &.overflow {
    flex-direction: column;
  }
  .stream-item {
    display: flex;
    align-items: center;
    padding: 1em;
    @media (max-width: 640px) {
      padding: .5em;
    }
    &.creator {
      flex-direction: row-reverse;
    }
  }
}
.empty {
  .wrapper {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #bfbfbf;
  }
  .icon {
    width: 70px;
    height: 70px;
    background-size: cover;
    background-image: url("data:image/svg+xml,%3Csvg t='1587779561352' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='1970' width='200' height='200'%3E%3Cpath d='M915.90919 428.28025l40.909735 6.785543 1.77339-10.488889 8.708336-12.93766-103.649662-69.574588-7.776104-5.219885-7.837502-2.918469L552.61093 223.932142l-6.92676-2.579755-6.962575 2.308579-347.57209 115.214045-8.804527 2.14792-5.704932 4.046153L53.550637 432.126858l9.832949 13.854543 4.493338 11.238972 39.739073-16.353456L75.734892 485.09114l96.368838 54.05001 0.107447 199.534476-2.349511 4.28356 2.352581 1.310855 0.001023 2.709715 4.859681 0 281.95872 157.194158 7.696286 4.260024 2.344395 1.277086 2.635013 1.726318 9.41851-3.080152 8.748245-3.419889 388.69979-159.572322 0.031722-9.44307L878.607632 546.373879l92.490507-35.759435L915.90919 428.28025zM561.218982 260.057921l245.843174 91.538833-245.843174 92.115977L561.218982 260.057921zM121.002888 475.127208l40.684608-56.45171 5.983271-8.358365 23.439852-32.558533 262.998903 123.622552L411.290297 637.993552 121.002888 475.127208zM203.051579 726.133985l-0.100284-169.629375 226.371704 126.989229 28.646434-91.38636 0.893346 276.69688L203.051579 726.133985zM473.818399 476.500485 225.704508 359.870184l304.674071-100.980879 0 196.376553L473.818399 476.500485zM847.766207 724.616422 489.771743 871.571379l-0.955768-301.186643 45.281299 109.166305 313.667909-121.215736L847.765183 724.616422zM551.061644 639.889739l-57.241702-137.940652 347.098299-130.082684 83.064834 123.892705L551.061644 639.889739z' p-id='1971' fill='%23bfbfbf'%3E%3C/path%3E%3C/svg%3E");
  }
}
.header {
  padding: .5em;
  .finished {
    font-size: 14px;
    text-align: center;
    color: #bfbfbf;
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
