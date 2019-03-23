<template>
<div class="item" v-bind:style="itemStyle">
    <div class="index">#{{ index }}</div>
    <div class="card">
        <div class="card-avatar" v-bind:class="{'no-avatar': !avatar}">
            <span v-if="!avatar">{{ info.name.substr(0, 2) }}</span>
            <img v-else class="card-avatar-img" v-bind:src="info.avatar" alt="AVATAR">
        </div>
        <div class="card-info">
            <div class="card-info-item name">Name: {{ info.name }}</div>
            <div class="card-info-item email">Email: {{ info.email }}</div>
        </div>
        <div class="card-height">{{ this.height }}px</div>
    </div>
</div>
</template>

<script>
import { getQuery } from './util'

export default {
    name: 'item',

    props: {
        height: Number,
        index: Number,
        info: {
            name: String,
            email: String,
            avatar: String
        }
    },

    data () {
        return {
            avatar: getQuery('avatar') !== null
        }
    },

    computed: {
        itemStyle () {
            return {
                'height': `${this.height}px`,
                'line-height': `${this.height}px`,
            }
        }
    }
}
</script>

<style lang="less">
.item {
    box-sizing: border-box;
    display: flex;
    // &:hover {
    //     .card-height {
    //         visibility: visible;
    //     }
    // }
    .index {
        flex: 1;
        text-align: center;
    }
    .card {
        position: relative;
        flex: 4;
        display: flex;
        align-items: center;
        border-bottom: 1px dashed #a9a9a9;
        &-avatar {
            width: 40px;
            height: 40px;
            background: #efefef;
            color: #4169e1;
            border-radius: 50%;
            text-align: center;
            line-height: 40px;
            &.no-avatar {
                background: #ff6347;
                color: #ffffff;
            }
            &-img {
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        &-info {
            display: flex;
            flex-direction: column;
            height: 100%;
            padding-left: 20px;
            &-item {
                flex: 1;
                height: 50%;
                line-height: 1;
                position: relative;
                white-space: nowrap;
                text-overflow: ellipsis;
                max-width: 300px;
                overflow: hidden;
                &.name {
                    top: 25%;
                }
                &.email {
                    top: 5%;
                    color: #a9a9a9;
                }
            }
        }
        &-height {
            // visibility: hidden;
            position: absolute;
            right: 30px;
            font-style: italic;
            color: #d8bfd8;
        }
    }
}
</style>
