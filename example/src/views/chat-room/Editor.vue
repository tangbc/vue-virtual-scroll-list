<template>
  <div class="editor">
    <div
      ref="rich"
      class="rich"
      contenteditable="true"
      :placehoder="placehoder"
      @keydown="onKeydown"
      @input="onInput"
      @paste="onPaste"
    ></div>
    <div class="send" :class="{ disabled: disabledSend }" @mousedown.prevent @click="eventSend"></div>
    <img class="author-avatar" src="https://avatars1.githubusercontent.com/u/6846113" alt="preload-avatar">
    <div class="auto">
      <button @mousedown.prevent @click="eventClickMockReceived" class="button button-clear item">received one random</button>
      <span class="line">|</span>
      <button @mousedown.prevent @click="eventClickMockSend" class="button button-clear item">send one random</button>
    </div>
  </div>
</template>

<script>
import { isMobile } from '../../common/ua'
import { genBody, genSid } from './util'

const genMessage = (content) => {
  let body = genBody()
  body.user = {
    name: 'tangbc',
    avatar: 'https://avatars1.githubusercontent.com/u/6846113'
  }
  body.sid = genSid(),
  body.content = content
  body.isCreator = true
  return body
}

export default {
  name: 'editor',

  props: {
    send: {
      type: Function
    },
    received: {
      type: Function
    }
  },

  data () {
    return {
      disabledSend: true,
      placehoder: isMobile ? 'Input message here' : 'Input message here and press enter to send'
    }
  },

  mounted () {
    if (this.$refs.rich && !isMobile) {
      this.$refs.rich.focus()
    }
  },

  methods: {
    onKeydown (e) {
      if (e.keyCode === 13) {
        this.checkDisable()
        this.eventSend()
        e.preventDefault()
      }
    },

    onInput () {
      this.checkDisable()
    },

    onPaste (e) {
      e.preventDefault()
      const plainText = (e.originalEvent || e).clipboardData.getData('text/plain')
      document.execCommand('insertText', false, plainText)
    },

    checkDisable () {
      if (this.$refs.rich) {
        this.disabledSend = !(this.$refs.rich.textContent || '').trim('')
      }
    },

    eventSend () {
      if (this.$refs.rich && !this.disabledSend) {
        const content = (this.$refs.rich.textContent || '').trim()
        const message = genMessage(content)
        this.$refs.rich.innerHTML = ''
        this.checkDisable()
        this.$emit('send', message)
      }
    },

    eventClickMockReceived () {
      this.received()
    },

    eventClickMockSend () {
      this.send(genMessage(''))
    }
  }
}
</script>

<style lang="less" scoped>
.editor {
  position: relative;
  font-size: 16px;
}
.rich {
  border: 2px solid;
  border-color: dimgray;
  border-top: none;
  width: 100%;
  padding: 1em 4em 1em 1em;
  outline: none;
  cursor: text;
  background-color: #fffaf0;
  &:empty::before{
    color: darkgray;
    content: attr(placehoder);
  }
}
.send {
  position: absolute;
  right: 20px;
  top: 15px;
  width: 33px;
  height: 30px;
  cursor: pointer;
  background-size: cover;
  background-image: url("data:image/svg+xml,%3Csvg t='1587742943994' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='3418' width='200' height='200'%3E%3Cpath d='M0 561.6l366.4 100.8 400-356.8-304 401.6 363.2 107.2L1024 46.4zM460.8 977.6l126.4-192-126.4-25.6z' p-id='3419' fill='%239b4dca'%3E%3C/path%3E%3C/svg%3E");
  &:active {
    opacity: .7;
  }
  &.disabled {
    opacity: .3;
    pointer-events: none;
  }
}
.author-avatar {
  display: none;
}
.item {
  padding: 0;
}
.line {
  font-size: 12px;
  margin: 0 1em;
}
</style>
