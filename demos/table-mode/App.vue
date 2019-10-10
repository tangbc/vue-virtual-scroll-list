<template>
  <div class="app">
    <GithubCorner path="/item-mode" />
    <div class="container">
      <Header
        title="table-mode"
        :desciption="'Build ' + itemCount.toLocaleString() + ' items.'"
        :start-index="start"
        :on-data-change="onHeaderDataChange"
      />
      <div class="main my-table">
        <div>
          <table
            cellspacing="0"
            cellpadding="0"
          >
            <colgroup>
              <col :span="columnsLength" />
            </colgroup>
            <thead>
              <tr>
                <th
                  v-for="key in keys"
                  :key="key"
                  :title="key"
                >{{key}}</th>
              </tr>
            </thead>
          </table>
        </div>
        <virtual-list
          :size="size"
          :remain="remain"
          :bench="30"
          :start="start"
          :isTable="true"
          :item="item"
          :itemcount="itemCount"
          :itemprops="getItemProps"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VirtualList from 'vue-virtual-scroll-list'
import { countStorage, getRandomUser } from '../common/util'


const Item = Vue.extend({
  props: {
    info: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
  },
  computed: {
    itemStyle() {
      return {
        'height': `${this.height}px`,
        'line-height': `${this.height}px`
      }
    }
  },
  render(h) {
    const { info, index, itemStyle } = this;
    const tds = Object.values(info).map(v => h('td', `(${index})--${v}`))
    return h('tr', { style: itemStyle }, tds)
  }
})

const remain = 20
const itemSize = 20
const itemCount = countStorage.get()

let userInfoList = []
for (let i = 0; i < itemCount; i++) {
  userInfoList.push(getRandomUser())
}
const keys = Object.keys(userInfoList[0])
const columnsLength = keys.length
export default {
  name: 'App',

  components: {
    'virtual-list': VirtualList
  },

  data() {
    return {
      remain,
      start: 0,
      size: itemSize,
      item: Item,
      itemCount: itemCount,
      keys: keys,
      columnsLength: columnsLength
    }
  },

  methods: {
    getItemProps(itemIndex) {
      return {
        key: itemIndex,
        props: {
          height: itemSize,
          index: itemIndex,
          info: userInfoList[itemIndex] || {}
        }
      }
    },

    onHeaderDataChange(type, value) {
      if (type === 'start') {
        this.start = value
      }
    }
  }
}
</script>

<style lang="less">
@import "../common/app.less";
.my-table {
  table {
    display: table !important;
    border-collapse: collapse;
    width: 100%;
    color: #fff;
    font-size: 13px;
    table-layout: fixed;

    // table,
    // tr,
    // th,
    // td {
    //     // border: 1px solid #d6d6d6;
    // }
    tbody {
      display: table-row-group !important;
    }

    tr {
      td:not(:first-child) {
        font-family: myFirstFont;
      }
    }

    th {
      background-color: #164893;
      font-size: 14px;
    }

    th,
    td {
      padding: 8px 0;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    tr:nth-child(2n) {
      background: #0f2e5d;
    }

    tr {
      transition: background-color 1s;
    }

    tr:hover {
      background: #2170b9;
    }
  }
}
</style>
