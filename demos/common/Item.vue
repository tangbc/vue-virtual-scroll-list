<template>
<div class="item" v-bind:style="itemStyle">
    <div class="index">#{{ index }}</div>
    <div class="card">
        <div class="card-avatar"
            v-bind:class="{'no-avatar': !avatar}"
            v-bind:style="{'background-color': !avatar && info.color}"
        >
            <span v-if="!avatar">{{ getAbbrName(info.name) }}</span>
            <img v-else class="card-avatar-img" v-bind:src="info.avatar" alt="AVATAR">
        </div>
        <div class="card-info">
            <div class="card-info-item name">Name: {{ info.name }}</div>
            <div class="card-info-item time">Birthday: {{ info.time }}</div>
        </div>
        <div class="card-height">{{ this.height }}px</div>
    </div>
</div>
</template>

<script>
import { getQuery, isMobile } from './util'

export default {
    name: 'item',

    props: {
        height: Number,
        index: Number,
        info: {
            name: String,
            time: String,
            avatar: String,
            color: String
        }
    },

    data () {
        return {
            avatar: isMobile ? getQuery('avatar') !== null : getQuery('noavatar') === null
        }
    },

    computed: {
        itemStyle () {
            return {
                'height': `${this.height}px`,
                'line-height': `${this.height}px`,
            }
        }
    },

    methods: {
        getAbbrName (name) {
            const arr = name.split(' ')
            if (arr.length > 1) {
                return arr[0][0] + arr[1][0]
            } else {
                return name.substr(0, 2)
            }
        }
    }
}
</script>

<style lang="less">
.item {
    box-sizing: border-box;
    display: flex;
    -webkit-user-select: none;
    user-select: none;
    &:active, &:hover {
        background-color: #f0f8ff;
    }
    .index {
        flex: 1;
        text-align: center;
    }
    .card {
        position: relative;
        flex: 4;
        display: flex;
        align-items: center;
        border-bottom: 1px dashed #cecece;
        @media (max-width: 640px), (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            border-bottom: 0.5px solid #cccccc;
        }
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
                @media (max-width: 640px) {
                    max-width: 180px;
                }
                &.name {
                    top: 25%;
                }
                &.time {
                    top: 5%;
                    color: #a9a9a9;
                }
            }
        }
        &-height {
            position: absolute;
            right: 30px;
            font-style: italic;
            color: #d8bfd8;
            @media (max-width: 375px) {
                visibility: hidden;
            }
        }
    }
}
</style>
