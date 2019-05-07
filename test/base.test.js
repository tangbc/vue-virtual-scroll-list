import VirtualList from '../src/index'
import { mount } from '@vue/test-utils'
import { getIndexList } from './util'

// for testing base build.
const theme = 'base-test'

describe(theme, () => {
    const listCount = 1000
    const wrapper = mount({
        template: `
            <div id="app" style="width: 300px;">
                <virtual-list class="list"
                    :size="40"
                    :remain="6"
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
                items: getIndexList(listCount)
            }
        }
    })

    it(`[${theme}] check mount success.`, () => {
        expect(wrapper.name()).toBe('test')
        expect(wrapper.is('div')).toBe(true)
        expect(wrapper.isEmpty()).toBe(false)
        expect(wrapper.isVueInstance()).toBe(true)
    })

    it(`[${theme}] check list build success.`, () => {
        expect(wrapper.find('.for-item').exists()).toBe(true)
        expect(wrapper.find('.for-item-text').exists()).toBe(true)

        // list wraper height is remain * size.
        const expectOutsideHeight = 40 * 6
        const listEl = wrapper.find('.list').vm.$el
        expect(listEl.style.height).toBe(`${expectOutsideHeight}px`)

        const listWraperEl = listEl.querySelector('div')
        const expectPaddingBottom = listCount * 40 - expectOutsideHeight * 2
        expect(listWraperEl.style['padding-top']).toBe('0px')
        expect(listWraperEl.style['padding-bottom']).toBe(`${expectPaddingBottom}px`)
    })

    it(`[${theme}] check build item count correct.`, () => {
        const itemFrags = wrapper.findAll('.for-item')

        // default real dom count is remain + default bench.
        expect(itemFrags.length).toBe(6 + 6)

        // check every item render content.
        for (let i = 0; i < itemFrags.length; i++) {
            const item = itemFrags.at(i)
            expect(item.text()).toBe('#' + i)
            expect(item.classes('for-item')).toBe(true)
        }
    })
})
