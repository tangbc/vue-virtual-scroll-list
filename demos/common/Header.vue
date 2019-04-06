<template>
<header v-bind:class="warning ? 'warning': ''">
    <h1>{{ title }}</h1>
    <section>
        <span class="desciption">{{ desciption }}</span>
        <span class="memory" v-if="supportMemory && isRenderSetting">Memory used: {{memoryUsed}} MB.</span>
        <div class="icon" v-if="isRenderSetting" v-bind:class="showSetting ? 'active' : ''" v-on:click="clickIcon">
            <svg width="25" height="25" t="1553394278598" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8690" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path d="M809.21 474.749H374.022c-19.865 0-35.966 16.101-35.966 35.966 0 19.859 16.101 35.966 35.966 35.966H809.21c19.865 0 35.966-16.107 35.966-35.966 0-19.864-16.101-35.966-35.966-35.966m0 215.796H374.022c-19.865 0-35.966 16.101-35.966 35.966 0 19.859 16.101 35.966 35.966 35.966H809.21c19.865 0 35.966-16.107 35.966-35.966 0-19.865-16.101-35.966-35.966-35.966M220.52 258.954c-19.865 0-35.966 16.101-35.966 35.966 0 19.865 16.101 35.966 35.966 35.966s35.966-16.101 35.966-35.966c0-19.865-16.102-35.966-35.966-35.966m153.502 71.932H809.21c19.865 0 35.966-16.101 35.966-35.966 0-19.865-16.101-35.966-35.966-35.966H374.022c-19.865 0-35.966 16.101-35.966 35.966 0 19.864 16.102 35.966 35.966 35.966M220.52 474.749c-19.865 0-35.966 16.101-35.966 35.966 0 19.859 16.101 35.966 35.966 35.966s35.966-16.107 35.966-35.966c0-19.864-16.102-35.966-35.966-35.966m0 215.796c-19.865 0-35.966 16.101-35.966 35.966 0 19.859 16.101 35.966 35.966 35.966s35.966-16.107 35.966-35.966c0-19.865-16.102-35.966-35.966-35.966" p-id="8691" fill="#2c2c2c"></path>
            </svg>
        </div>
        <div class="setting" v-if="isRenderSetting">
            <label v-if="showStart">
                <span class="name">START INDEX:</span>
                <input type="text"
                    v-model="selfStartIndex"
                    v-on:focus="$event.target.select()"
                    v-on:input="inputDataChange('start', $event.target.value)"
                >
            </label>
            <i v-bind:style="{visibility: hasTypingInput ? 'visible' : 'hidden'}">updated after debounce 1s.</i>
        </div>
    </section>
</header>
</template>

<script>
import { debounce } from './util'

export default {
    name: 'app-header',

    data () {
        return {
            memoryUsed: 0,
            supportMemory: false,
            showSetting: false,
            selfStartIndex: 0,
            hasTypingInput: false,
        }
    },

    computed: {
        showStart () {
            return this.startIndex !== undefined
        },

        isRenderSetting () {
            return this.showSetting && (this.showStart)
        }
    },

    props: {
        warning: Boolean,
        title: String,
        desciption: String,
        startIndex: Number,
        onDataChange: Function
    },

    methods: {
        clickIcon () {
            this.showSetting = !this.showSetting
        },

        inputDataChange: debounce(function (type, value) {
            const val = Number(value)
            if (this.onDataChange && value !== '' && !isNaN(val) && val >= 0) {
                this.hasTypingInput = true
                this.onDataChange(type, val)
            }
        }, 1000, false)
    },

    mounted () {
        this.selfStartIndex = this.startIndex

        if (window.performance && window.performance.memory && window.performance.memory.usedJSHeapSize) {
            this.supportMemory = true
            this.memoryUsed = parseInt(window.performance.memory.usedJSHeapSize / (1024 * 1024))
        }
    }
}
</script>

<style lang="less">
header {
    font-family: monospace;
    h1 {
        padding: 20px 0;
        @media (max-width: 640px) {
            padding: 10px 0;
            font-size: 24px;
        }
    }
    section {
        font-size: 14px;
        background: #f7f7f7;
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 5px;
        position: relative;
        .memory {
            color: #ee82ee;
            position: absolute;
            right: 50px;
            @media (max-width: 640px) {
                display: block;
                position: relative;
                right: 0;
                padding-top: 5px;
            }
        }
        .icon {
            width: 25px;
            height: 25px;
            line-height: 25px;
            text-align: center;
            position: absolute;
            right: 10px;
            top: 5px;
            cursor: pointer;
            border-radius: 3px;
            &.active {
                background-color: #c0c0c0;
            }
        }
        .setting {
            position: relative;
            padding: 30px 0 20px 20px;
            label {
                display: block;
                margin-bottom: 20px;
                &:last-child {
                    margin: 0;
                }
                .name {
                    font-family: 'Courier New', Courier, monospace;
                    font-weight: bold;
                    display: inline-block;
                    min-width: 120px;
                    text-align: left;
                }
            }
            i {
                position: absolute;
                right: 0;
                color: lightsteelblue;
                font-size: 12px;
            }
            input {
                -webkit-appearance: none;
                appearance: none;
                padding: 5px;
                outline: none;
                color: #464a4c;
                background-color: #fff;
                border-radius: 3px;
                border: 1px solid rgba(0, 0, 0, .15);
                font-size: 14px;
                transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
                &:focus {
                    outline: 0;
                    border-color: #5cb3fd;
                }
            }
        }
    }
}
header.warning {
    h1  {
        color: #ffc107;
    }
}
</style>
