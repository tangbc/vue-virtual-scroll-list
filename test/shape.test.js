import VirtualList from '../src/index'
import { mount } from '@vue/test-utils'
import { getIndexList } from './util'

// for testing props: size, bench, remain.
const theme = 'shape-test'

describe(theme, () => {
  const initSize = 40
  const initRemian = 6
  const initBench = 10
  const listCount = 1000

  const wrapper = mount({
    template: `
      <div id="app" style="width: 300px;">
        <virtual-list class="list"
          :size="size"
          :bench="bench"
          :remain="remian"
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
        bench: initBench,
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

  it(`[${theme}] check list build init success.`, () => {
    const listEl = wrapper.find('.list').vm.$el

    const expectOutsideHeight = `${initRemian * initSize}px`
    expect(listEl.style.height).toBe(expectOutsideHeight)

    const listWraperEl = listEl.querySelector('div')
    const expectPaddingBottom = (listCount - initRemian - initBench) * initSize
    expect(listWraperEl.style['padding-top']).toBe('0px')
    expect(listWraperEl.style['padding-bottom']).toBe(`${expectPaddingBottom}px`)

    const itemFrags = wrapper.findAll('.for-item')
    expect(itemFrags.length).toBe(initRemian + initBench)

    for (let i = 0; i < itemFrags.length; i++) {
      const item = itemFrags.at(i)
      expect(item.text()).toBe('#' + i)
    }
  })

  it(`[${theme}] check update correct.`, () => {
    const list = wrapper.find('.list')
    const listEl = list.vm.$el
    const vmData = wrapper.vm.$data

    let itemFrags
    let expectOutsideHeight

    // change size and check shape.
    vmData.size = 50
    expectOutsideHeight = `${vmData.remian * 50}px`
    expect(listEl.style.height).toBe(expectOutsideHeight)

    vmData.remian = 10
    expectOutsideHeight = `${10 * vmData.size}px`
    expect(listEl.style.height).toBe(expectOutsideHeight)

    vmData.size = 100
    vmData.remian = 5
    expectOutsideHeight = `${100 * 5}px`
    expect(listEl.style.height).toBe(expectOutsideHeight)

    vmData.bench = 66
    itemFrags = wrapper.findAll('.for-item')
    expect(itemFrags.length).toBe(vmData.remian + 66)

    vmData.items = getIndexList(7)
    listEl.scrollTop = 1000 // over scroll.
    list.trigger('scroll')
    itemFrags = wrapper.findAll('.for-item')
    expect(itemFrags.length).toBe(7)
  })
})
