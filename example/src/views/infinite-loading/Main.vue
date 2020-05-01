<template>
  <div class="example">
    <github-corner />
    <introduction description="Use <code>v-on:tobottom</code> to listen scroll reach bottom, add a footer slot as loading, then append next parts data into <code>data-sources</code> array." />

    <div class="example-content">
      <tab v-on:tab-change="onTabChange" />

      <div class="result">Items count: {{ items.length }}.</div>

      <div v-show="isShowView">
        <virtual-list class="list-infinite scroll-touch"
          :data-key="'id'"
          :data-sources="items"
          :data-component="itemComponent"

          :estimate-size="70"
          :item-class="'list-item-infinite'"
          :footer-class="'loader-wrapper'"
          v-on:totop="onScrollToTop"
          v-on:tobottom="onScrollToBottom"
        >
          <div slot="footer" class="loader"></div>
        </virtual-list>
      </div>

      <codeblock v-show="!isShowView" />
    </div>
  </div>
</template>

<script>
import Item from './Item'
import Code from './Code'

import { Random } from '../../common/mock'
import getSentences from '../../common/sentences'
import genUniqueId from '../../common/gen-unique-id'
import { TAB_TYPE, DEFAULT_TAB } from '../../common/const'

const getPageData = (count, currentLength) => {
  const DataItems = []
  for (let i = 0; i < count; i++) {
    const index = currentLength + i
    DataItems.push({
      index,
      name: Random.name(),
      id: genUniqueId(index),
      desc: getSentences()
    })
  }
  return DataItems
}

const pageSize = 20

export default {
  name: 'infinite-loading',

  components: {
    codeblock: Code
  },

  created () {
    this.isLoading = false
  },

  data () {
    return {
      items: getPageData(pageSize, 0),
      itemComponent: Item,
      isShowView: DEFAULT_TAB === TAB_TYPE.VIEW,
    }
  },

  methods: {
    onTabChange (type) {
      this.isShowView = type === TAB_TYPE.VIEW
    },

    onScrollToTop () {
      console.log('at top')
    },

    onScrollToBottom () {
      console.log('at bottom')

      if (this.isLoading) {
        return
      }

      this.isLoading = true

      setTimeout(() => {
        this.isLoading = false
        this.items = this.items.concat(getPageData(pageSize, this.items.length))
      }, 500);
    }
  }
}
</script>

<style lang="less">
.result {
  margin-bottom: 1em;
}
.list-infinite {
  width: 100%;
  height: 500px;
  border: 2px solid;
  border-radius: 3px;
  overflow-y: auto;
  border-color: dimgray;
  position: relative;

  .list-item-infinite {
    display: flex;
    align-items: center;
    padding: 1em;
    border-bottom: 1px solid;
    border-color: lightgray;
  }

  .loader-wrapper {
    padding: 1em;
  }
  .loader {
    font-size: 10px;
    margin: 0px auto;
    text-indent: -9999em;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ffffff;
    background: linear-gradient(to right, #9b4dca 10%, rgba(255, 255, 255, 0) 42%);
    position: relative;
    animation: load3 1.4s infinite linear;
    transform: translateZ(0);
  }
  .loader:before {
    width: 50%;
    height: 50%;
    background: #9b4dca;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  .loader:after {
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
