import { mount } from '@vue/test-utils'
import VirtualList from '../src/index'
import { VirtualProps } from '../src/props'
import Item from './item.vue'
import { getDatas } from './util'

describe('element', () => {
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
          :root-tag="'article'"
          :wrap-tag="'section'"
          :wrap-class="'wrap-class-aaa'"
          :item-tag="'p'"
          :item-class="'item-class-bbb'"
          :item-class-add="addItemClass"
        />
      </div>
    `,
    data () {
      return {
        items: getDatas(1000),
        item: Item
      }
    },
    methods: {
      addItemClass (index) {
        return 'extra-item-' + index
      }
    }
  })

  it('check mount', () => {
    expect(Instance.name()).toBe('test')
    expect(Instance.is('div')).toBe(true)
    expect(Instance.isVueInstance()).toBe(true)
    expect(Instance.find('.my-list').exists()).toBe(true)
  })

  it('check element tag and class', () => {
    const vmData = Instance.vm.$data
    const vslVm = Instance.find('.my-list').vm
    const rootEl = vslVm.$el
    expect(rootEl.tagName.toLowerCase()).toBe('article')

    const wrapperEl = rootEl.firstElementChild

    // wrapper element and padding style
    expect(wrapperEl.getAttribute('role')).toBe('group')
    expect(!!rootEl.style.padding).toBe(false)
    expect(!!wrapperEl.style.padding).toBe(true)
    expect(wrapperEl.className).toBe('wrap-class-aaa')
    expect(wrapperEl.tagName.toLowerCase()).toBe('section')

    // render number keeps by default
    expect(wrapperEl.childNodes.length).toBe(VirtualProps.keeps.default)

    // items render content
    for (let i = 0; i < wrapperEl.childNodes.length; i++) {
      const itemEl = wrapperEl.childNodes[i]
      expect(itemEl.className).toBe(`item-class-bbb extra-item-${i}`)
      expect(itemEl.tagName.toLowerCase()).toBe('p')

      // item inner render (see ./item.vue)
      const itemInnerEl = itemEl.firstElementChild
      expect(itemInnerEl.className).toBe('inner')
      expect(itemInnerEl.querySelector('.index').textContent).toBe(`${i}`)
      expect(itemInnerEl.querySelector('.source').textContent).toBe(vmData.items[i].text)
    }
  })
})
