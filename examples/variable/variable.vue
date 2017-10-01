<template>
    <div>
        <div class="scrollToIndex">
            <span class="indexSpan ceil">
                Start index:
                <input type="text" v-model.number.lazy="startIndex">
            </span>
            <span class="indexSpan ceil">
                List count:
                <input type="text" v-model.number="count">
            </span>
            <button @click="eventChangeCount">Apply</button>
        </div>
        <div class="changeHeight">
            <span>Index: </span>
            <select v-model="changeIndex">
                <option value="-1" disabled selected>-select-</option>
                <option v-for="i of items.length" :value="i - 1" :key="i">{{ i - 1 }}</option>
            </select>
            <span>Height: </span>
            <input type="text" v-model.number="changeHeight" class="ceil">
            <button @click="eventChangeHeight">Apply</button>
        </div>
        <div class="changeData">
            <button class="ceil" @click="eventChangeItems('push')">Array push</button>
            <button class="ceil" @click="eventChangeItems('pop')">Array pop</button>
            <button class="ceil" @click="eventChangeItems('shift')">Array shift</button>
            <button class="ceil" @click="eventChangeItems('unshift')">Array unshift</button>
        </div>

        <VirtualList ref="vsl" :variable="getVariableHeight" :size="50" :remain="6" :start="startIndex" class="list">
            <Item
                v-for="(item, index) of items"
                :key="index"
                :index="index"
                :height="item.height"
            ></Item>
        </VirtualList>

        <div class="source">
            <a href="https://github.com/tangbc/vue-virtual-scroll-list/blob/master/examples/variable/variable.vue#L1">
                View this demo source code
            </a>
        </div>
    </div>
</template>

<script>
    import Item from './item.vue'
    import VirtualList from 'vue-virtual-scroll-list'
    import getItems from './getItems'

    const INIT_COUNT = 100

    export default {
        name: 'variable-test',

        components: { Item, VirtualList },

        data () {
            return {
                startIndex: 0,
                changeIndex: -1,
                changeHeight: 0,
                count: INIT_COUNT,
                items: getItems(INIT_COUNT)
            }
        },

        methods: {
            getVariableHeight (index) {
                let target = this.items[index]
                return target && target.height
            },

            eventChangeCount () {
                let items = getItems(this.count)
                this.items = items
                this.startIndex = Math.min(this.startIndex, items.length - 1)
                this.startIndex = Math.max(this.startIndex, 0)
            },

            eventChangeHeight () {
                let index = this.changeIndex
                let height = this.changeHeight
                let length = this.items.length

                if (!length) {
                    return alert('empty list now.')
                }

                if (index < 0 || index !== parseInt(index, 10) || index >= length) {
                    return alert(`please select a right index: 0 ~ ${length - 1} && int number.`)
                }

                if (height <= 0 || height !== parseInt(height, 10)) {
                    return alert('please set a right height: greater than 0 && int number.')
                }

                this.items[index].height = height
                this.$refs.vsl.updateVariable(index)
            },

            eventChangeItems (type) {
                let [item] = getItems(1)

                switch (type) {
                    case 'push':
                        this.items.push(item)
                        break
                    case 'pop':
                        this.items.pop()
                        break
                    case 'shift':
                        this.items.shift()
                        break
                    case 'unshift':
                        this.items.unshift(item)
                        break
                }
            }
        }
    }
</script>

<style>
    .list {
        background: #fff;
        border-radius: 3px;
        border: 1px solid #ddd;
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
    }
    .source {
        text-align: center;
        padding-top: 20px;
    }
    .source a {
        color: #999;
        text-decoration: none;
        font-weight: 100;
    }
    .scrollToIndex, .changeHeight, .changeData {
        padding: 1em 0;
        position: relative;
    }
    .changeHeight {
        border-top: 1px dashed #ccc;
        border-bottom: 1px dashed #ccc;
    }
    @media (max-width: 640px) {
        .changeHeight, .changeData {
            display: none;
        }
        .indexSpan {
            display: block;
            padding: .5em 0;
        }
    }
    .ceil {
        margin-right: 1em;
    }
    .smallCeil {
        margin-right: .5em;
    }
    input {
        outline: none;
        padding: .4em .5em;
        width: 55px;
        height: 16px;
        border-radius: 3px;
        border: 1px solid;
        border-color: #dddddd;
        font-size: 16px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    input:focus {
        border-color: #6495ed;
    }
    select {
        height: 28px;
        margin-right: .8em;
        outline: none;
        background: #f8f8f8;
    }
    button {
        position: relative;
        padding: .4em .8em;
        height: 30px;
        vertical-align: top;
        border-radius: 3px;
        background: #f8f8f8;
        cursor: pointer;
        outline: none;
        border: 1px solid #ccc;
    }
    button:active {
        background: #f3f3f3;
    }
</style>

