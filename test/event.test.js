import VirtualList from '../src/index'
import { mount } from '@vue/test-utils'
import { getIndexList } from './util'
import jest from 'jest-mock'

// for testing props: totop, tobottom and onscroll.
const theme = 'event-test'

const mockReachTopCallback = jest.fn(() => {})
const mockReachBottomCallback = jest.fn(() => {})
const mockScrollCallback = jest.fn(() => {})

describe(theme, () => {
    const initSize = 40
    const initRemian = 6
    const listCount = 100

    const wrapper = mount({
        template: `
            <div id="app" style="width: 300px;">
                <virtual-list class="list"
                    :size="size"
                    :remain="remian"
                    :totop="onReachTop"
                    :tobottom="onReachBottom"
                    :onscroll="onScroll"
                >
                    <div class="for-item"
                        v-for="(item, index) in items"
                        :key="index"
                        :style="itemStyle"
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
                size: initSize,
                remian: initRemian,
                items: getIndexList(listCount)
            }
        },

        methods: {
            onReachTop () {
                mockReachTopCallback()
            },

            onReachBottom () {
                mockReachBottomCallback()
            },

            onScroll (e, info) {
                mockScrollCallback(e, info)
            }
        },

        computed: {
            itemStyle () {
                return {
                    'height': this.size + 'px',
                    'line-height': this.size + 'px'
                }
            }
        }
    })

    it(`[${theme}] check event fire and call params.`, () => {
        const list = wrapper.find('.list')
        const listEl = list.vm.$el

        expect(mockReachTopCallback.mock.calls.length).toBe(0)
        expect(mockReachBottomCallback.mock.calls.length).toBe(0)
        expect(mockScrollCallback.mock.calls.length).toBe(0)

        listEl.scrollTop = 100
        list.trigger('scroll')
        const callArgs = mockScrollCallback.mock.calls[0]
        expect(callArgs[0] instanceof Event).toBe(true)
        expect(Object.keys(callArgs[1])).toEqual(['offset', 'offsetAll', 'start', 'end'])
        expect(mockReachTopCallback.mock.calls.length).toBe(0)
        expect(mockReachBottomCallback.mock.calls.length).toBe(0)
        expect(mockScrollCallback.mock.calls.length).toBe(1)

        listEl.scrollTop = 0
        list.trigger('scroll')
        expect(mockReachTopCallback.mock.calls.length).toBe(1)
        expect(mockReachBottomCallback.mock.calls.length).toBe(0)
        expect(mockScrollCallback.mock.calls.length).toBe(2)

        listEl.scrollTop = listCount * initSize
        list.trigger('scroll')
        expect(mockReachTopCallback.mock.calls.length).toBe(1)
        expect(mockReachBottomCallback.mock.calls.length).toBe(1)
        expect(mockScrollCallback.mock.calls.length).toBe(3)
    })
})
