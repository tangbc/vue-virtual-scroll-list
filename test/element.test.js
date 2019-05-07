import VirtualList from '../src/index'
import { mount } from '@vue/test-utils'
import { getIndexList } from './util'

// for testing props: rtag, wtag wclass.
const theme = 'element-test'

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
                    rtag="div"
                    wtag="ul"
                    wclass="conetnt-box"
                >
                    <li class="for-item"
                        v-for="(item, index) in items"
                        :key="index"
                        :style="itemStyle"
                    >
                        <span class="for-item-text">{{ item }}</span>
                    </li>
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

        computed: {
            itemStyle () {
                return {
                    'height': this.size + 'px',
                    'line-height': this.size + 'px'
                }
            }
        }
    })

    it(`[${theme}] check element tag and classname.`, () => {
        const listEl = wrapper.find('.list').vm.$el
        const listWraperEl = listEl.firstElementChild

        expect(listEl.tagName).toBe('DIV')
        expect(listWraperEl.tagName).toBe('UL')
        expect(listWraperEl.className).toBe('conetnt-box')
    })
})
