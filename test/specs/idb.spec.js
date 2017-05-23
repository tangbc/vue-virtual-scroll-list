// Import Vue and the component being tested
import Vue from 'vue'
import VueIdb from '../../src'

import expect  from 'expect.js'

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('VueIdb', () => {
  let vm
  beforeEach(() => {
    const idb = new VueIdb({
      database: 'test',
      schemas: [
        { tests: 'id, title, created_at, updated_at' }
      ]
    })
    Vue.use(VueIdb)
    vm = new Vue({
      idb
    })
  })
  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(vm.$db).to.be.an('object')
  })
})
