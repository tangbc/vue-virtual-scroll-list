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
                    ref="vlist"
                    :item="item"
                    :itemcount="items.length"
                    :itemprops="getItemProps"
                    :remain="remian"
                    :start="start"
                />
                <button v-on:click="addItem">Add Item</button>
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
                item: itemComponent,
                remian: initRemian,
                items: getVariableList(listCount)
            }
        },

        methods: {
            getItemProps (index) {
                return {
                    key: this.items[index].text,
                    props: {
                        item: this.items[index]
                    }
                }
            },
            addItem () {
                this.items.push(getVariableList(1)[0])
                this.$refs.vlist.forceRender()
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
    })

    it(`[${theme}] adds an item.`, () => {
        const button = wrapper.find('button')
        button.trigger('click')
        expect(wrapper.vm.items.length === listCount + 1)
    })
})
