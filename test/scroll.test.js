import { mount } from '@vue/test-utils'
import VirtualList from '../src/index'
import Item from './item.vue'
import { getDatas } from './util'
import Vue from 'vue'

describe('scroll', () => {
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

  // @TODO
  it('check scroll behavior', () => {
    const myList = Instance.find('.my-list')
    const vslVm = myList.vm
    const rootEl = vslVm.$el

    rootEl.scrollTop = 2000
    myList.trigger('scroll')

    Vue.nextTick(() => {
      // console.log(vslVm.$data.range.start)
    })
  })
})
