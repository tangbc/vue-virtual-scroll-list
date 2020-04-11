<template>
  <div class="tab">
    <div v-on:click="eventClickView" class="tab-item view" v-bind:class="{active: isView}">VIEW</div>
    <div v-on:click="eventClickCode" class="tab-item code" v-bind:class="{active: !isView}">CODE</div>
    <a v-show="!isView" class="complete-code-url" target="_blank" v-bind:href="completeCodeUrl">COMPLETE CODE</a>
  </div>
</template>

<script>
import getCodeUrl from '../common/get-code-url'
import { TAB_TYPE, DEFAULT_TAB } from '../common/const'


export default {
  name: 'tab',

  data () {
    return {
      completeCodeUrl: '',
      active: DEFAULT_TAB
    }
  },

  computed: {
    isView () {
      return this.active === TAB_TYPE.VIEW
    }
  },

  mounted () {
    this.completeCodeUrl = getCodeUrl()
  },

  methods: {
    eventClickView () {
      this.active = TAB_TYPE.VIEW
      this.emitEvent()
    },

    eventClickCode () {
      this.active = TAB_TYPE.CODE
      this.emitEvent()
    },

    emitEvent () {
      this.$emit('tab-change', this.active)
    }
  }
}
</script>

<style lang="less" scoped>
.tab {
  width: 100%;
  width: 100%;
  display: flex;
  margin-bottom: 1em;
  position: relative;
  @media (max-width: 640px) {
    display: none;
  }
  .tab-item {
    font-size: 14px;
    font-weight: 400;
    width: 85px;
    margin-right: .5em;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 1px;
    cursor: pointer;
    opacity: .3;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: 0 center;
    &.active {
      opacity: 1;
    }

    &.view {
      background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1586182057256' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2191' xmlns:xlink='http://www.w3.org/1999/xlink' width='200' height='200'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M512 251.853c192.768 0 358.707 113.1 436.378 276.275H1024c-82.022-202.394-280.218-345.293-512-345.293S82.022 325.735 0 528.128h75.674C153.344 364.954 319.284 251.853 512 251.853z m0 552.55c-192.717 0-358.656-113.05-436.326-276.275H0c82.022 202.445 280.166 345.344 512 345.344s430.029-142.9 512-345.344h-75.674C870.707 691.354 704.768 804.403 512 804.403zM327.834 528.128a184.115 184.115 0 1 0 368.281 0.051 184.115 184.115 0 0 0-368.281-0.051z m299.315 0a115.2 115.2 0 1 1-230.298 0 115.2 115.2 0 0 1 230.298 0z m0 0' p-id='2192'%3E%3C/path%3E%3C/svg%3E");
    }
    &.code {
      background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' standalone='no'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg t='1586181965771' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='3774' xmlns:xlink='http://www.w3.org/1999/xlink' width='200' height='200'%3E%3Cdefs%3E%3Cstyle type='text/css'%3E%3C/style%3E%3C/defs%3E%3Cpath d='M549.973333 128a42.453333 42.453333 0 0 0-42.154666 37.76l-75.904 683.136a42.325333 42.325333 0 1 0 84.266666 9.386667l75.904-683.178667A42.325333 42.325333 0 0 0 550.016 128zM243.541333 286.165333A42.538667 42.538667 0 0 0 213.333333 298.666667L30.165333 481.834667a42.624 42.624 0 0 0 0 60.330666L213.333333 725.333333a42.666667 42.666667 0 0 0 60.330667-60.330666L120.661333 512l153.002667-153.002667a42.624 42.624 0 0 0-30.165333-72.832z m537.002667 0a42.666667 42.666667 0 0 0-30.165333 72.832L903.338667 512l-153.002667 153.002667A42.666667 42.666667 0 0 0 810.666667 725.333333l183.168-183.168a42.624 42.624 0 0 0 0-60.330666L810.666667 298.666667a42.538667 42.538667 0 0 0-30.165334-12.501334z' p-id='3775'%3E%3C/path%3E%3C/svg%3E");
    }
  }
  .complete-code-url {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
  }
}
</style>
