import { mount } from '@vue/test-utils'
import VirtualList from '../src/index'
import Item from './item.vue'
import { getDatas } from './util'

describe('slot', () => {
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
          :header-tag="'section'"
          :header-class="'head1'"
          :footer-tag="'article'"
          :footer-class="'foot1'"
        >
          <div slot="header">Header</div>
          <div slot="footer">Footer</div>
        </virtual-list>
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

  it('check slot build', () => {
    const vslVm = Instance.find('.my-list').vm
    const rootEl = vslVm.$el
    const wrapperEl = rootEl.querySelector('[role="group"]')
    const headerEl = rootEl.querySelector('[role="header"]')
    const footerEl = rootEl.querySelector('[role="footer"]')

    // wrapper shoud be in middle between header and footer
    expect(wrapperEl.previousElementSibling).toBe(headerEl)
    expect(wrapperEl.nextElementSibling).toBe(footerEl)

    expect(!!headerEl).toBe(true)
    expect(!!footerEl).toBe(true)

    expect(headerEl.className).toBe('head1')
    expect(headerEl.tagName.toLowerCase()).toBe('section')
    expect(headerEl.firstElementChild.textContent).toBe('Header')

    expect(footerEl.className).toBe('foot1')
    expect(footerEl.tagName.toLowerCase()).toBe('article')
    expect(footerEl.firstElementChild.textContent).toBe('Footer')
  })
})
