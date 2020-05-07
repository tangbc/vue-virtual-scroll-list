<template>
  <a v-if="!isMobile" :href="url" class="github-corner" aria-label="View source on GitHub">
    github
  </a>
</template>

<script>
import { isMobile } from '../common/ua'
import getCodeUrl from '../common/get-code-url'

export default {
  name: 'github-corner',

  data () {
    return {
      url: '',
      size: 80,
      isMobile
    }
  },

  mounted () {
    this.url = getCodeUrl()
  }
}
</script>

<style lang="less" scoped>
.github-corner {
  z-index: 3;
  text-transform: capitalize;
  padding-left: 30px;
  width: 90px;
  height: 40px;
  line-height: 40px;
  position: fixed;
  right: 0;
  top: 0;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  background-size: 30px 30px;
  background-repeat: no-repeat;
  background-position: 0 center;
  background-image: url("data:image/svg+xml,%3Csvg t='1587863082639' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='2074' width='200' height='200'%3E%3Cpath d='M841.6 268.8c32-57.6-3.2-134.4-3.2-134.4-80 0-137.6 54.4-137.6 54.4-32-19.2-134.4-19.2-134.4-19.2s-102.4 0-134.4 19.2c0 0-57.6-54.4-137.6-54.4 0 0-35.2 76.8-3.2 134.4 0 0-70.4 67.2-44.8 211.2 25.6 134.4 144 169.6 220.8 169.6 0 0-32 25.6-25.6 70.4 0 0-44.8 25.6-89.6 9.6-44.8-19.2-67.2-64-67.2-64s-44.8-57.6-89.6-35.2c0 0-12.8 12.8 35.2 35.2 0 0 35.2 54.4 48 86.4 12.8 32 86.4 57.6 156.8 41.6v102.4s0 9.6-19.2 12.8c-19.2 3.2-19.2 12.8-9.6 12.8h323.2c9.6 0 9.6-9.6-9.6-12.8-19.2-3.2-19.2-12.8-19.2-12.8v-102.4-70.4c0-44.8-32-70.4-32-70.4 76.8 0 195.2-35.2 220.8-169.6 22.4-147.2-48-214.4-48-214.4z' fill='%23ffffff' p-id='2075'%3E%3C/path%3E%3C/svg%3E");
}
</style>