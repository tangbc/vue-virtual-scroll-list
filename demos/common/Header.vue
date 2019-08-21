<template>
<header :class="warning ? 'warning': ''">
  <h1>{{ title }}</h1>
  <section>
    <span class="desciption">{{ desciption }}</span>
    <span id="time" class="performance time" />
    <span id="memory" class="performance memory" />
    <div class="icon" :class="showSetting ? 'active' : ''" @click="clickIcon">
      <svg width="25" height="25" t="1553394278598" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8690" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M809.21 474.749H374.022c-19.865 0-35.966 16.101-35.966 35.966 0 19.859 16.101 35.966 35.966 35.966H809.21c19.865 0 35.966-16.107 35.966-35.966 0-19.864-16.101-35.966-35.966-35.966m0 215.796H374.022c-19.865 0-35.966 16.101-35.966 35.966 0 19.859 16.101 35.966 35.966 35.966H809.21c19.865 0 35.966-16.107 35.966-35.966 0-19.865-16.101-35.966-35.966-35.966M220.52 258.954c-19.865 0-35.966 16.101-35.966 35.966 0 19.865 16.101 35.966 35.966 35.966s35.966-16.101 35.966-35.966c0-19.865-16.102-35.966-35.966-35.966m153.502 71.932H809.21c19.865 0 35.966-16.101 35.966-35.966 0-19.865-16.101-35.966-35.966-35.966H374.022c-19.865 0-35.966 16.101-35.966 35.966 0 19.864 16.102 35.966 35.966 35.966M220.52 474.749c-19.865 0-35.966 16.101-35.966 35.966 0 19.859 16.101 35.966 35.966 35.966s35.966-16.107 35.966-35.966c0-19.864-16.102-35.966-35.966-35.966m0 215.796c-19.865 0-35.966 16.101-35.966 35.966 0 19.859 16.101 35.966 35.966 35.966s35.966-16.107 35.966-35.966c0-19.865-16.102-35.966-35.966-35.966" p-id="8691" fill="#2c2c2c" />
      </svg>
    </div>
    <div v-show="showSetting" class="setting">
      <div v-if="showStart" class="option">
        <span v-if="isMobile" class="name">Index:</span>
        <span v-else class="name">Start index:</span>
        <input v-model="selfStartIndex" type="text"
          @focus="$event.target.select()"
          @input="inputDataChange('start', $event.target.value)"
        >
      </div>

      <div class="option">
        <span v-if="isMobile" class="name">Count:</span>
        <span v-else class="name">List count:</span>
        <label>
          <input v-model="renderCount" type="radio" value="1">
          <span class="t1">1,000</span>
        </label>
        <label class="middle">
          <input v-model="renderCount" type="radio" value="2">
          <span class="t2">10,000</span>
        </label>
        <label>
          <input v-model="renderCount" type="radio" value="3">
          <span class="t3">100,000</span>
        </label>
      </div>
    </div>
  </section>
</header>
</template>

<script>
import { isMobile, debounce, countStorage, settingStorage } from './util'

export default {
  name: 'AppHeader',

  props: {
    warning: Boolean,
    title: {
      type: String,
      default: ''
    },
    desciption: {
      type: String,
      default: ''
    },
    startIndex: {
      type: Number,
      default: 0
    },
    onDataChange: {
      type: Function,
      default: () => {}
    }
  },

  data () {
    return {
      isMobile,
      selfStartIndex: 0,
      showSetting: settingStorage.isShow(),
      renderCount: String(countStorage.get()).length - 3
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

  watch: {
    renderCount (val) {
      countStorage.set(val)
      window.location.reload()
    }
  },

  mounted () {
    this.selfStartIndex = this.startIndex
  },

  methods: {
    clickIcon () {
      const nextStatus = !this.showSetting
      this.showSetting = nextStatus
      settingStorage.setShow(nextStatus)
    },

    inputDataChange: debounce(function (type, value) {
      const val = Number(value)
      if (this.onDataChange && value !== '' && !isNaN(val) && val >= 0) {
        this.onDataChange(type, val)
      }
    }, 1000, false)
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
        .performance {
            color: #ee82ee;
            position: absolute;
            right: 50px;
            font-size: 12px;
            @media (max-width: 640px) {
                display: block;
                position: relative;
                right: 0;
                padding-top: 5px;
            }
        }
        .memory {
            top: 18px;
            @media (max-width: 640px) {
                display: block;
                position: relative;
                right: 0;
                padding-top: 5px;
                top: 0;
            }
        }
        .time {
            top: 5px;
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
            @media (max-width: 640px) {
                padding: 20px 0 20px 0px;
            }
            .option {
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
                    @media (max-width: 640px) {
                        min-width: 50px;
                    }
                }
                .middle {
                    margin: 0 20px;
                    @media (max-width: 640px) {
                        margin: 0;
                    }
                }
                label {
                    input {
                        @media (max-width: 640px) {
                            position: relative;
                            top: 3px;
                        }
                    }
                    span {
                        @media (max-width: 640px) {
                            position: relative;
                            left: -5px;
                        }
                    }
                }
            }
            i {
                position: absolute;
                right: 0;
                color: lightsteelblue;
                font-size: 12px;
            }
            input[type="text"] {
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
    h1, .desciption {
        color: #ffc107;
    }
    .t3 {
        color: red;
    }
}
</style>
