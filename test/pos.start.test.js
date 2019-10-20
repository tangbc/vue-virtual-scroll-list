import VirtualList from '../src/index'
import { mount } from '@vue/test-utils'
import { getIndexList } from './util'

// for testing props: start.
const theme = 'position-start-test'

describe(theme, () => {
  const initSize = 40
  const initRemian = 6
  const initStart = 100
  const listCount = 1000

  const wrapper = mount({
    template: `
      <div id="app" style="width: 300px;">
        <virtual-list class="list"
          :size="size"
          :remain="remian"
          :start="start"
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
        start: initStart,
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

    const expectPaddingTop = initStart * initSize
    const expectPaddingBottom = (listCount - initRemian - initRemian - initStart) * initSize

    expect(listWraperEl.style['padding-top']).toBe(`${expectPaddingTop}px`)
    expect(listWraperEl.style['padding-bottom']).toBe(`${expectPaddingBottom}px`)

    const itemFrags = wrapper.findAll('.for-item')
    expect(itemFrags.length).toBe(initRemian + initRemian)

    for (let i = 0; i < itemFrags.length; i++) {
      const item = itemFrags.at(i)
      expect(item.text()).toBe('#' + (initStart + i))
    }
  })

  it(`[${theme}] check update correct.`, () => {
    const vmData = wrapper.vm.$data
    const listEl = wrapper.find('.list').vm.$el
    const listWraperEl = listEl.querySelector('div')

    let expectPaddingTop
    let expectPaddingBottom

    vmData.start = 200
    expectPaddingTop = 200 * initSize
    expectPaddingBottom = (listCount - initRemian - initRemian - 200) * initSize
    expect(listWraperEl.style['padding-top']).toBe(`${expectPaddingTop}px`)
    expect(listWraperEl.style['padding-bottom']).toBe(`${expectPaddingBottom}px`)

    vmData.start = 0
    expectPaddingTop = 0
    expectPaddingBottom = (listCount - initRemian - initRemian) * initSize
    expect(listWraperEl.style['padding-top']).toBe(`${expectPaddingTop}px`)
    expect(listWraperEl.style['padding-bottom']).toBe(`${expectPaddingBottom}px`)

    // start on last zone.
    vmData.start = listCount - initRemian - 3
    expectPaddingTop = (listCount - initRemian - initRemian) * initSize
    expectPaddingBottom = 0
    expect(listWraperEl.style['padding-top']).toBe(`${expectPaddingTop}px`)
    expect(listWraperEl.style['padding-bottom']).toBe(`${expectPaddingBottom}px`)

    // start on last zone edge.
    vmData.start = listCount - initRemian - initRemian - 1
    expectPaddingTop = (listCount - initRemian - initRemian - 1) * initSize
    expectPaddingBottom = 1 * initSize
    expect(listWraperEl.style['padding-top']).toBe(`${expectPaddingTop}px`)
    expect(listWraperEl.style['padding-bottom']).toBe(`${expectPaddingBottom}px`)

    // start overflow.
    vmData.start = listCount + 10
    expectPaddingTop = (listCount - initRemian - initRemian) * initSize
    expectPaddingBottom = 0
    expect(listWraperEl.style['padding-top']).toBe(`${expectPaddingTop}px`)
    expect(listWraperEl.style['padding-bottom']).toBe(`${expectPaddingBottom}px`)
  })
})
