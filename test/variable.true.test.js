import VirtualList from '../src/index'
import { mount } from '@vue/test-utils'
import { getVariableList } from './util'

// for testing variable height.
const theme = 'variable-true-test'

describe(theme, () => {
    const initSize = 40
    const initRemian = 6
    const listCount = 1000

    const wrapper = mount({
        template: `
            <div id="app" style="width: 300px;">
                <virtual-list class="list"
                    :size="size"
                    :remain="remian"
                    :variable="true"
                >
                    <div class="for-item"
                        v-for="(item, index) in items"
                        :key="index"
                        :style="{height: item.height + 'px'}"
                    >{{ item.text }}</div>
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
                items: getVariableList(listCount)
            }
        }
    })

    it(`[${theme}] check build success.`, () => {
        const itemFrags = wrapper.findAll('.for-item')

        expect(itemFrags.length).toBe(initRemian + initRemian)

        for (let i = 0; i < itemFrags.length; i++) {
            const item = itemFrags.at(i)
            expect(item.text()).toBe('#' + i)
        }

        // no cache init.
        const list = wrapper.find('.list')
        const listDelta = list.vm.delta
        expect(Object.keys(listDelta.varCache).length === 0).toBe(true)
    })

    it(`[${theme}] check update.`, () => {
        const list = wrapper.find('.list')
        const listEl = list.vm.$el

        listEl.scrollTop = 1000
        list.trigger('scroll')

        const listDelta = list.vm.delta

        // cache data after update(scroll).
        expect(Object.keys(listDelta.varCache).length !== 0).toBe(true)
    })
})
