<template>
    <div class="spinner" v-show="loading">
        <div class="clip" :style="clipStyle" style="background: transparent; border-style: solid; border-radius: 100%;"></div>
    </div>
</template>

<script>
    export default {

        name: 'Loader',

        props: {
            loading: {
                type: Boolean,
                default: true
            },
            color: {
                type: String,
                default: '#6495ed'
            },
            size: {
                type: Number,
                default: 20
            },
            borderWidth: {
                type: Number,
                default: 2
            }
        },

        computed: {
            clipStyle () {
                return {
                    width: this.size + 'px',
                    height: this.size + 'px',
                    borderWidth: this.borderWidth + 'px',
                    borderColor: this.color + ' ' + this.color + ' transparent'
                }
            }
        }
    }
</script>

<style scoped>
    .spinner {
        text-align: center;
    }
    .spinner .clip {
        display: inline-block;
        animation: clipDelay 750ms 0s infinite linear;
        animation-fill-mode: both;
    }
    @keyframes clipDelay {
        0% {
            transform: rotate(0deg) scale(1);
        }
        50% {
            transform: rotate(180deg) scale(0.8);
        }
        100% {
            transform: rotate(360deg) scale(1);
        }
    }
</style>