import { mount } from '@vue/test-utils'
import VirtualList from '../src/index'
import Item from './item.vue'
import { getDatas } from './util'
import Vue from 'vue'

describe('offset', () => {
  const Instance = mount({
    name: 'test',
    components: {
      'virtual-list': VirtualList
    },
    template: `
      <div id="app">
        <virtual-list class="my-list" style="height: 300px; overflow-y: auto;"
          :data-key="'id'"
          :data-sources="items"
          :data-component="item"
          :offset="offset"
        />
      </div>
    `,
    data () {
      return {
        items: getDatas(1000),
        item: Item,
        offset: 0
      }
    }
  })

  it('check mount', () => {
    expect(Instance.name()).toBe('test')
    expect(Instance.is('div')).toBe(true)
    expect(Instance.isVueInstance()).toBe(true)
    expect(Instance.find('.my-list').exists()).toBe(true)
  })

  // @TODO
  it('check offset and data reactive', () => {
    const vmData = Instance.vm.$data
    const vslVm = Instance.find('.my-list').vm
    expect(vslVm.virtual.offset).toBe(0)

    vmData.offset = 100
    // Vue.nextTick(() => {
    //   expect(vslVm.virtual.offset).toBe(100)
    // })
  })
})
