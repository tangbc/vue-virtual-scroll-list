import { mount } from '@vue/test-utils'
import VirtualList from '../src/index'
import Item from './item.vue'
import { getDatas } from './util'

describe('horizontal', () => {
  const Instance = mount({
    name: 'test',
    components: {
      'virtual-list': VirtualList
    },
    template: `
      <div id="app">
        <virtual-list class="my-list" style="height: 200px; overflow-y: hidden; width: 400px; overflow-x: auto;"
          :data-key="'id'"
          :data-sources="items"
          :data-component="item"
          :direction="'horizontal'"
          :wrap-style="{ 'display': 'flex', 'flex-direction': 'row' }"
        />
      </div>
    `,
    data () {
      return {
        items: getDatas(1000),
        item: Item
      }
    }
  })

  it('check mount', () => {
    expect(Instance.name()).toBe('test')
    expect(Instance.is('div')).toBe(true)
    expect(Instance.isVueInstance()).toBe(true)
    expect(Instance.find('.my-list').exists()).toBe(true)
  })

  // @TODO scrollHeight scrollWidth is both 0
  it('check scroll direction', () => {
    const vslVm = Instance.find('.my-list').vm
    const rootEl = vslVm.$el
    // const wrapperEl = rootEl.querySelector('[role="group"]')

    expect(rootEl.scrollHeight === rootEl.clientHeight).toBe(true)
    // expect(rootEl.scrollWidth > rootEl.clientWidth).toBe(true)
  })
})
