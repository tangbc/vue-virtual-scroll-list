<template>
  <div class="item" :class="{ creator: source.isCreator }">
    <div class="avatar">
      <img :src="source.user.avatar" />
    </div>
    <div class="body">
      <div class="name" v-if="!source.isCreator">{{ source.user.name }}</div>
      <div class="content">
        <div class="text">{{ source.content }}</div>
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
.item {
  display: flex;
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 192, 203, .2);
    @media (max-width: 640px) {
      width: 30px;
      height: 30px;
    }
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
    max-width: 560px;
    word-break: break-word;
    @media (max-width: 640px) {
      font-size: 14px;
      max-width: unset;
    }
    .name {
      padding-bottom: .2em;
      font-size: 12px;
    }
    .content {
      position: relative;
      color: #000;
      background-color: aliceblue;
      border-radius: 15px;
      padding: .5em 1em;
      @media (max-width: 640px) {
        padding: .5em;
      }
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
  &.creator {
    transform: rotateX(180deg);
    direction: rtl;
    align-items: flex-end;
    .avatar {
      transform: rotateX(180deg);
    }
    .body {
      transform: rotate(180deg);
    }
    .text {
      transform: rotateY(180deg);
      direction: ltr;
    }
  }
}
</style>