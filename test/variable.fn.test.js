import VirtualList from '../src/index'
import { mount } from '@vue/test-utils'
import { getVariableList } from './util'

// for testing variable height.
const theme = 'variable-function-test'

describe(theme, () => {
    const initSize = 40
    const initRemian = 6
    const listCount = 1000

    const itemComponent = {
        template: `
            <div class="for-item" :style="{height: item.height + 'px'}">
                <span class="for-item-text">{{ item.text }}</span>
            </div>
        `,

        name: 'item',

        props: {
            item: Object
        }
    }

    const wrapper = mount({
        template: `
            <div id="app" style="width: 300px;">
                <virtual-list class="list"
                    :size="size"
                    :remain="remian"
                    :start="start"
                    :variable="getVariableHeight"
                >
                    <item-component
                        v-for="(item, index) in items"
                        :key="index"
                        :item="item"
                    ></item-component>
                </virtual-list>
            </div>
        `,

        name: 'test',

        components: {
            'virtual-list': VirtualList,
            'item-component': itemComponent
        },

        data () {
            return {
                start: 5,
                size: initSize,
                remian: initRemian,
                items: getVariableList(listCount)
            }
        },

        methods: {
            getVariableHeight (index) {
                return this.items[index].height
            }
        }
    })

    it(`[${theme}] check build success.`, () => {
        const itemFrags = wrapper.findAll('.for-item')

        expect(itemFrags.length).toBe(initRemian + initRemian)

        for (let i = 0; i < itemFrags.length; i++) {
            const item = itemFrags.at(i)
            expect(item.text()).toBe('#' + i)
            expect(item.vm.$el.style.height).toBe(wrapper.vm.$data.items[i].height + 'px')
        }

        // no cache init.
        const list = wrapper.find('.list')
        const listDelta = list.vm.delta
        expect(Object.keys(listDelta.varCache).length !== 0).toBe(true)
    })

    it(`[${theme}] check update.`, () => {
        const list = wrapper.find('.list')

        const vmData = wrapper.vm.$data
        vmData.start = 600
        list.trigger('scroll')

        const listDelta = list.vm.delta
        // cache data after update(scroll).
        expect(Object.keys(listDelta.varCache).length !== 0).toBe(true)

        // change variable height by index.
        const changeIndex = 600
        vmData.items[changeIndex].height = 35
        list.vm.updateVariable(changeIndex)
        const itemFrags = wrapper.findAll('.for-item')
        expect(itemFrags.at(0).vm.$el.style.height).toBe('35px')
    })
})
