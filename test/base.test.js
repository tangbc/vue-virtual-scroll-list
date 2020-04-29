import { mount } from '@vue/test-utils'
import VirtualList from '../src/index'

describe('base', () => {
  const wrapper = mount({
    name: 'test',
    template: `
      <div id="app">
        <virtual-list class="list" style="height: 300px; overflow-y: auto;"
          :size="50"
          :keeps="20"
        />
      </div>
    `,
    components: {
      'virtual-list': VirtualList
    },
    data () {
      return {
        items: []
      }
    }
  })

  it('check mount success', () => {
    expect(wrapper.name()).toBe('test')
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
