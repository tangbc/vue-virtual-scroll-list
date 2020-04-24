<template>
  <div class="msg">
    <div class="avatar">
      <img :src="source.user.avatar" />
    </div>
    <div class="body">
      <div class="name">{{ source.user.name }}</div>
      <div class="content">
        {{ source.content }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'chat-room-item',

  props: {
    source: {
      type: Object,
      default () {
        return {
          sid: '',
          user: {},
          content: '',
          images: []
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.msg {
  display: flex;
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 192, 203, .2);;
    img {
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .body {
    flex: 1;
    padding-left: 1em;
    font-size: 16px;
    .name {
      padding-bottom: .2em;
    }
    .content {
      position: relative;
      color: #000;
      background-color: aliceblue;
      border-radius: 15px;
      padding: .5em 1em;
      &:after{
        content: '';
        position: absolute;
        right: 100%;
        top: 10px;
        width: 14px;
        height: 14px;
        border-width: 0;
        border-style: solid;
        border-color: transparent;
        border-bottom-width: 10px;
        border-bottom-color: currentColor;
        border-radius: 0 0 0 32px;
        color: aliceblue;
      }
    }
  }
}
</style>