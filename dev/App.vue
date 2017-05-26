<template>
  <div id="app">
    <h1>vue-virtual-scroll-list</h1>
		<vue-virtual-scroll-list :size="48" :remain="remain" ref="virtualList">
			<div v-for="(item, index) of data">
        {{ item }}
      </div>
		</vue-virtual-scroll-list>
    <select @change="setRemain($event.target.value)">
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="100">100</option>
    </select>
    <select @change="setData($event.target.value)">
      <option value="data.json">Data</option>
      <option value="tinydata.json">Tiny</option>
      <option value="bigdata.json">Big</option>
    </select>
  </div>
</template>

<script>
import axios from 'axios'
import VueVirtualScrollList from '../src'

export default {
  name: 'app',
  data () {
    return {
			data: [],
      remain: 10
    }
  },
  mounted(){
    axios.get('/dev/data.json').then((data) => {
      this.data = data.data
    })
  },
  methods: {
    setRemain(value){
      this.remain = +value
    },
    setData(value){
      //this.data = []
      //this.$refs.virtualList.reset()
      axios.get('/dev/' + value).then((data) => {
        this.data = data.data
      })
    }
  },
  components: { VueVirtualScrollList }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}

h1, h2, h3 {
  font-weight: normal;
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.t-center{
  text-align: center;
  margin: 20px;
}
</style>
