import VirtualList from '../src/index'
import { mount } from '@vue/test-utils'
import { getIndexList } from './util'

// for testing props: start and offset conflict.
const theme = 'position-conflict-test'

describe(theme, () => {
    const initSize = 40
    const initRemian = 6
    const initStart = 30
    const initOffset = 5678
    const listCount = 1000

    const wrapper = mount({
        template: `
            <div id="app" style="width: 300px;">
                <virtual-list class="list"
                    :size="size"
                    :remain="remian"
                    :offset="offset"
                    :start="start"
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
                offset: initOffset,
                start: initStart,
                items: getIndexList(listCount)
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

    it(`[${theme}] check conflict.`, () => {
        const listEl = wrapper.find('.list').vm.$el
        const listWraperEl = listEl.querySelector('div')

        const expectOutsideHeight = `${initRemian * initSize}px`
        expect(listEl.style.height).toBe(expectOutsideHeight)

        // offset will not work.
        expect(listEl.scrollTop === initOffset).toBe(false)

        // start works well.
        const expectPaddingTop = initStart * initSize
        expect(listWraperEl.style['padding-top']).toBe(`${expectPaddingTop}px`)
    })
})
