import VirtualList from '../src/index'
import { mount } from '@vue/test-utils'
import { getIndexList } from './util'
import sinon from 'sinon'

// for testing pagemode build.
const theme = 'pagemode-test'

describe(theme, () => {
  const initSize = 40
  const initRemian = 10
  const initStart = 100
  const listCount = 1000
  const spy = sinon.stub()

  const windowScrollTo = window.scrollTo

  const wrapper = mount({
    template: `
      <div id="app" style="width: 300px;">
        <virtual-list class="list"
          ref="vlist"
          :size="size"
          :remain="remian"
          :start="start"
          :pagemode="true"
        >
          <div class="for-item"
            v-for="(item, index) in items"
            :key="index"
            style="height: 40px; line-height: 40px;"
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
        start: initStart,
        items: getIndexList(listCount)
      }
    },

    beforeCreate () {
      // Error: Not implemented: window.scrollTo
      window.scrollTo = () => {}
    },

    beforeDestroy () {
      spy()
      window.scrollTo = windowScrollTo
    }
  })

  it(`[${theme}] check list build success.`, () => {
    expect(wrapper.find('.for-item').exists()).toBe(true)
    expect(wrapper.find('.for-item-text').exists()).toBe(true)

    // list wraper height is remain * size.
    const listEl = wrapper.find('.list').vm.$el
    const expectPaddingTop = initStart * initSize
    const expectPaddingBottom = (listCount - initRemian - initRemian - initStart) * initSize
    expect(listEl.style['padding-top']).toBe(`${expectPaddingTop}px`)
    expect(listEl.style['padding-bottom']).toBe(`${expectPaddingBottom}px`)
  })

  it(`[${theme}] check build item count correct.`, () => {
    const itemFrags = wrapper.findAll('.for-item')

    // default real dom count is remain + default bench.
    expect(itemFrags.length).toBe(initRemian + initRemian)

    // check every item render content.
    for (let i = 0; i < itemFrags.length; i++) {
      const item = itemFrags.at(i)
      expect(item.text()).toBe('#' + (initStart + i))
      expect(item.classes('for-item')).toBe(true)
    }
  })

  it(`[${theme}] check update correct.`, () => {
    const vmData = wrapper.vm.$data
    const listEl = wrapper.find('.list').vm.$el

    let expectPaddingTop
    let expectPaddingBottom

    vmData.start = 200
    expectPaddingTop = 200 * initSize
    expectPaddingBottom = (listCount - initRemian - initRemian - 200) * initSize
    expect(listEl.style['padding-top']).toBe(`${expectPaddingTop}px`)
    expect(listEl.style['padding-bottom']).toBe(`${expectPaddingBottom}px`)

    vmData.start = 0
    expectPaddingTop = 0
    expectPaddingBottom = (listCount - initRemian - initRemian) * initSize
    expect(listEl.style['padding-top']).toBe(`${expectPaddingTop}px`)
    expect(listEl.style['padding-bottom']).toBe(`${expectPaddingBottom}px`)

    // start on last zone.
    vmData.start = listCount - initRemian - 3
    expectPaddingTop = (listCount - initRemian - initRemian) * initSize
    expectPaddingBottom = 0
    expect(listEl.style['padding-top']).toBe(`${expectPaddingTop}px`)
    expect(listEl.style['padding-bottom']).toBe(`${expectPaddingBottom}px`)

    // start on last zone edge.
    vmData.start = listCount - initRemian - initRemian - 1
    expectPaddingTop = (listCount - initRemian - initRemian - 1) * initSize
    expectPaddingBottom = 1 * initSize
    expect(listEl.style['padding-top']).toBe(`${expectPaddingTop}px`)
    expect(listEl.style['padding-bottom']).toBe(`${expectPaddingBottom}px`)

    // start overflow.
    vmData.start = listCount + 10
    expectPaddingTop = (listCount - initRemian - initRemian) * initSize
    expectPaddingBottom = 0
    expect(listEl.style['padding-top']).toBe(`${expectPaddingTop}px`)
    expect(listEl.style['padding-bottom']).toBe(`${expectPaddingBottom}px`)
  })

  it(`[${theme}] before destroy is triggerd.`, () => {
    wrapper.destroy()
    expect(spy.calledOnce)
  })
})
