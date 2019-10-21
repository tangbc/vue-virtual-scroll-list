import VirtualList from '../src/index'
import { mount } from '@vue/test-utils'
import { getIndexList } from './util'
import Vue from 'vue'

// for testing props: offset.
const theme = 'position-offset-test'

describe(theme, () => {
  const initSize = 40
  const initRemian = 6
  const initOffset = 5678
  const listCount = 1000

  const wrapper = mount({
    template: `
      <div id="app" style="width: 300px;">
        <virtual-list class="list"
          :size="size"
          :remain="remian"
          :offset="offset"
        >
          <div class="for-item"
            v-for="(item, index) in items"
            :key="index"
            :style="itemStyle"
          >
            <span class="for-item-text">{{ item }}</span>
          </div>
        </virtual-list>
      </div>
    `,

    name: 'test',

    components: {
      'virtual-list': VirtualList
    },

    data () {
      return {
        size: initSize,
        remian: initRemian,
        offset: initOffset,
        items: getIndexList(listCount)
      }
    },

    computed: {
      itemStyle () {
        return {
          height: this.size + 'px',
          'line-height': this.size + 'px'
        }
      }
    }
  })

  it(`[${theme}] check set offset init success.`, () => {
    const listEl = wrapper.find('.list').vm.$el

    const expectOutsideHeight = `${initRemian * initSize}px`
    expect(listEl.style.height).toBe(expectOutsideHeight)

    const expectScrollTop = initOffset
    expect(listEl.scrollTop).toBe(expectScrollTop)
  })

  it(`[${theme}] check update correct.`, () => {
    const vmData = wrapper.vm.$data
    const listEl = wrapper.find('.list').vm.$el

    vmData.offset = 2527
    Vue.nextTick(() => {
      expect(listEl.scrollTop).toBe(2527)
    })
  })
})
